:: Hide Commands
@echo off

:: Display Current Working Directory
echo Current Directory = %CD%

echo ====================================================================
echo ======================= COOKING ANGULAR DIST =======================
echo ====================================================================

cd angular
call ng serve

pause