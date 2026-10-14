@echo off
REM Double-click this file to open the portfolio website.
cd /d "%~dp0portfolio"
echo Starting portfolio server, please wait...
start "portfolio-server" /min npm run preview -- --port 5174
timeout /t 4 /nobreak >nul
start "" "http://localhost:5174/?lang=fa&theme=light"
echo.
echo The website should now be open in your browser.
echo Keep this window open while using the site.
echo To stop the server, close the black "portfolio-server" window.
echo.
pause
