﻿
/*
 * GET home page.
 */

exports.list = function (req, res) {
    res.render('About', { title: 'About' });
};