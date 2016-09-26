@rem set DEBUG=app:*,express:*
set DEBUG=app:*,express:application,express:router
node tools/prestart
start npm start
start http://localhost:3000
pause
