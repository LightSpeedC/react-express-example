@rem set DEBUG=app:*,express:*
@rem set DEBUG=app:*,express:application,express:router
set DEBUG=app:*,express:application
set NODE_ENV=development
node tools/prestart
start gulp
start node app
start http://localhost:3000
pause
