'use strict';

const fs = require('fs');
const async = require('async');

module.exports = (app) => {
	app.all('/*', (req, res, next) => {
		const method = req.method;
		const url = req.url;
		let routeInfo = null;

		async.series([
			(callback) => {
				fs.readFile('./routes/dynamic-info.json', 'utf8', (err, data) => {
					callback(err, data);
				});
			}
		], (err, data) => {
			const dynamicRouteInfos = JSON.parse(data).routeInfo;
			async.forEachOf(dynamicRouteInfos, (value, key, callback) => {
				if (value.url === url) { routeInfo = value; }
				callback();
			}, (err) => {
				if (err || !routeInfo) { return next(err); }

				const supportMethods = routeInfo.method;
				console.log(method);
				if (!supportMethods.includes(method)) { return next(); }

				require(routeInfo.file)(req, res, next);
			});
		});
	});
};
