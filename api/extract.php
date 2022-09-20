<?php 

$countries = array("in","ca","int","uk", "us", "jp", "cn", "ru", "sg", "sy", "lk", "ch", "pk",);

foreach ($countries as $key_c => $country) :

$filename = $country;


$curl = curl_init(); 
if (!$curl) {
    die("Couldn't initialize a cURL handle"); 
}
curl_setopt($curl, CURLOPT_URL, "https://raw.githubusercontent.com/freearhey/iptv/master/channels/".$filename.".m3u");

// Fail the cURL request if response code = 400 (like 404 errors) 
curl_setopt($curl, CURLOPT_FAILONERROR, true); 

// Return the actual result of the curl result instead of success code
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

// Wait for 10 seconds to connect, set 0 to wait indefinitely
curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, 10);

// Execute the cURL request for a maximum of 50 seconds
curl_setopt($curl, CURLOPT_TIMEOUT, 50);

// Do not check the SSL certificates
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false); 
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false); 

// Fetch the URL and save the content in $html variable
$html = curl_exec($curl); 

// Check if any error has occurred 
if (curl_errno($curl)) 
{
    echo 'cURL error: ' . curl_error($curl); 
} 
else 
{ 
    // cURL executed successfully
    //print_r(curl_getinfo($curl)); 

	// Send the headers
	/*header('Content-type: text/xml');
	header('Pragma: public');
	header('Cache-control: private');
	header('Expires: -1');
	echo "<?xml version=\"1.0\" encoding=\"utf-8\"?>";

	echo '<xml>';*/

	/*$XML = "<?xml version=\"1.0\" encoding=\"utf-8\"?><xml>";*/

	$response = array();
	$array = explode('#EXTINF:', $html);

	foreach ($array as $key => $value) {

		if($key>0):
			$string1 = substr($value, strpos($value,'tvg-logo="')+10);
			$string1 = substr($string1 ,0 ,strpos($string1, '"') );

			$part1 = substr($value, strpos($value,'group-title="')+13);
			$string2 = substr($part1, strpos($part1,'",')+2);
			$string2 = substr($string2 ,0 ,strpos($string2, 'http') );

			$string3 = substr($value, strpos($value,$string2)+strlen($string2)  );

			//$XML.= '<channel><logo>'.trim(htmlspecialchars($string1)).'</logo><name>'.trim($string2).'</name><m3u8>'.trim(htmlspecialchars($string3)).'</m3u8></channel>';

			$response[] = array(
				'logo' => trim($string1),
				'name' => trim($string2),
				'm3u8' => trim($string3),
			);

		endif;
	}

	$fp = fopen($filename.'.json', 'w');
	fwrite($fp, json_encode($response));
	fclose($fp);


/*	$XML.= '</xml>';

	$dom = new DOMDocument;
	$dom->preserveWhiteSpace = FALSE;
	$dom->loadXML($XML);
	$dom->save($filename.'.xml');*/


}

// close cURL resource to free up system resources
curl_close($curl);

endforeach;


echo "DONE";