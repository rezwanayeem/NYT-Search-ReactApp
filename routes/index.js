const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// Router for API Routes
router.use("/api", apiRoutes);

// Sends user to the React Application, only if there are no other routes left.
router.use(function(req, res) {
    res.sendFile(path.join(_dirname, "../client/build/index.html"));
});
module.exports = router;