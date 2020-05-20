
// Import contact model
Pokemon = require('../models/pokemonModel');
exports.index = function (res) {
    Pokemon.get(res);
};
exports.new = function (pokemon, res) {
    Pokemon.post(pokemon, res);
};
exports.viewByID = function (pokemonID, res) {
    Pokemon.getByID(pokemonID, res);
};
exports.viewByName = function (name, res) {
    Pokemon.getByName(name, res);
};
exports.updateByName = function (updatedPokemon, pokemonName, res) {
    Pokemon.updateByName(updatedPokemon, pokemonName, res);
};
exports.updateByID = function (updatedPokemon, pokemonName, res) {
    Pokemon.updateByID(updatedPokemon, pokemonName, res);
};
exports.delete = function (pokemonID, res) {
    Pokemon.deleteByID(pokemonID, res);
};