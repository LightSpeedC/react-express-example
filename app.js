/**
 * Module dependencies.
 */
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const debug = require('debug')('app:server');

const http = require('http');

const app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const context = {};

app.use(express.static(path.join(__dirname, 'public')));

//--デバッグheaders
//app.use(function (req, res, next) {
//	console.log(req.headers);
//	next();
//});

// cache-control
app.use(function (req, res, next) {
	res.setHeader('Cache-Control', 'max-age=0');
	res.setHeader('Expires', 'Mon, 26 Jul 1997 05:00:00 GMT');
	next();
});

// method start log
app.use(function (req, res, next) {
	console.log('\x1b[32m' + req.method + ' ' + req.url + '\x1b[m');
	next();
});

app.use('/',      require('./routes/index')(context));
app.use('/users', require('./routes/users')(context));
app.use('/depts', require('./routes/depts')(context));

// catch 404 and forward to error handler
app.use(function onError404(req, res, next) {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use(function onError500Development(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}
else {
	// production error handler
	// no stacktraces leaked to user
	app.use(function onError500Production(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: {}
		});
	});
}


/**
 * Get port from environment and store in Express.
 */
const PORT = Number(process.env.PORT || '3000');
app.set('port', PORT);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(PORT, onListening);
server.on('error', onError);
//server.on('listening', onListening);

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
	if (error.syscall !== 'listen') {
		throw error;
	}

	const bind = 'Port ' + port;

	// handle specific listen errors with friendly messages
	switch (error.code) {
		case 'EACCES':
			console.error(bind + ' requires elevated privileges');
			process.exit(1);
			break;
		case 'EADDRINUSE':
			console.error(bind + ' is already in use');
			process.exit(1);
			break;
		default:
			throw error;
	}
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
	debug('Listening on port ' + server.address().port);
}

// socket.io
const io = require('socket.io')(server);

io.on('connection', function (socket) {
	socket.emit('news', { hello: 'world' });
	socket.on('my other event', function (data) {
		console.log(data);
	});
});
