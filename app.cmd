@rem set DEBUG=app:*,express:*
@set DEBUG=app:*,express:application,express:router
set DEBUG=app:*,express:application
node tools/prestart
start npm start
start http://localhost:3000
pause
