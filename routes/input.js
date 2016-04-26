
/*
 * GET users listing.
 */

exports.list = function (req, res) {
    res.render('input', { title: 'Input' });
    //res.send("respond with a resource");
};