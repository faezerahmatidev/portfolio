@echo off
REM Double-click this file to open the resume website.
cd /d "%~dp0"
echo Starting resume server, please wait...
start "resume-server" /min npm run preview -- --port 4173
timeout /t 4 /nobreak >nul
start "" "http://localhost:4173/?lang=fa&theme=light"
echo.
echo The website should now be open in your browser.
echo Keep this window open while using the site.
echo To stop the server, close the black "resume-server" window.
echo.
pause
