
var tableData = require("../data/friends");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

    app.get("/api", function (req, res) {
        res.json(data);
    });



    app.post("/", function (req, res) {

            data.push(req.body);
            res.json(true);
    
    });

};
