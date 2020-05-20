
// Initialize express router
let router = require('express').Router();

let pokemonController = require("./controllers/pokemonController")

// Set default API response
router.get('/pokemon', function (req, res) {
    pokemonController.index(res);
});
router.get('/pokemon/:pokemonID', function (req, res, next) {
    if(!isNaN(req.params.pokemonID))
        pokemonController.viewByID(req.params.pokemonID ,res);
    else
        next();
});
router.get('/pokemon/:name', function (req, res, next) {
    if(isNaN(req.params.name))
        pokemonController.viewByName(req.params.name ,res);
    else
        next();
});

router.post('/pokemon/:pokemonID', function (req, res, next) {
    if(!isNaN(req.params.pokemonID))
        pokemonController.updateByID(req.body, req.params.name, res);
    else
        next();
});
router.post('/pokemon/:name', function (req, res, next) {
    if(isNaN(req.params.name))
        pokemonController.updateByName(req.body, req.params.name, res);
    else
        next();
});
router.post('/pokemon', function (req, res) {
    pokemonController.new(req.body, res);
});
router.delete('/pokemon/:pokemonID', function (req, res) {
    pokemonController.delete(req.params.pokemonID, res);
});

// Export API routes
module.exports = router;