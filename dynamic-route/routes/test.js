'use strict';

const test = (req, res, next) => {
	return res.status(200).json({ url: 'test' });
};

module.exports = test;
