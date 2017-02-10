'use strict';

const index = (req, res, next) => {
	return res.status(200).json({ url: 'index' });
};

module.exports = index;
