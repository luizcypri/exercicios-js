
// Initialize express router
let router = require('express').Router();

//Import MongoDB
var MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
var mongoDbObj;

//Connect to Database
MongoClient.connect("mongodb://emusiker-node:gljDFClgCQjccwNIsX8JzBvSgogP8qgsJ0lcVDavuuugDc0pX2Jw7m2ZBlOme8t4HBqOsNqGloWZer4CAA1ufQ%3D%3D@emusiker-node.documents.azure.com:10255/?ssl=true", function (err, client) {

    if(err)
        console.log(err);
    else{
        console.log("Connected to MongoDB");
        var db = client.db('teste');
        mongoDbObj={
            db: db,
            pokemon: db.collection('pokemon')
        }
    }
});

exports.get = function (res) {
    try {
        mongoDbObj.pokemon.find().toArray((err, pokemons) => {
            res.json(pokemons);
        })
    } catch (e) {
        res.json(e);
    } finally {
        // MongoClient.close();
    }
};

exports.getByID = function (pokemonID, res) {
    try {
        var colName = 'nationalNumber';
        var query = {};
        query[colName] = parseInt(pokemonID);

        mongoDbObj.pokemon.findOne(query, (err, pokemon) => {
            res.json(pokemon);
        })
    } catch (e) {
        res.json(e);
    } finally {
        // MongoClient.close();
    }
};

exports.getByName = function (name, res) {
    try {
        var colName = 'name';
        var query = {};
        query[colName] = name;
        mongoDbObj.pokemon.findOne(query, (err, pokemon) => {
            res.json(pokemon);
        })
    } catch (e) {
        res.json(e);
    } finally {
        // MongoClient.close();
    }
};

exports.updateByName = function (pokemonToUpdt, pokemonName, res) {
    try {
        var colName = 'name';
        var query = {};
        query[colName] = pokemonName;
        mongoDbObj.pokemon.findOne(query, (err, pokemon) => {
            if (err) throw err;

            mongoDbObj.pokemon.updateOne(
                    { "name" : pokemonName },
                    { $set: {"name" : pokemonToUpdt.name } }
                    // { upsert: true } caso não exista, insere...
                , (err, ret) => {
                if (err) throw err;
                res.json(ret);
            });
        })
    } catch (e) {
        res.json(e);
    } finally {
        // MongoClient.close();
    }
};

exports.updateByID = function (pokemonToUpdt, pokemonID, res) {
    try {
        mongoDbObj.pokemon.findOne(query, (err, pokemon) => {
            if (err) throw err;

            mongoDbObj.pokemon.updateOne(
                    { "nationalNumber" : parseInt(pokemonID) },
                    { $set: {"name" : pokemonToUpdt.name } }
                    // { upsert: true } caso não exista, insere...
                , (err, ret) => {
                if (err) throw err;
                res.json(ret);
            });
        })
    } catch (e) {
        res.json(e);
    } finally {
        // MongoClient.close();
    }
};

exports.post = function (pokemon, res) {
    try {
        mongoDbObj.pokemon.insertOne(pokemon, (err, ret) => {
            if (err) throw err;
            res.json(ret);
        });
    } catch (e) {
        res.json(e);
    } finally {
        // MongoClient.close();
    }
};

exports.deleteByID = function (pokemonID, res) {
    try {
        mongoDbObj.pokemon.remove(
                { "nationalNumber" : parseInt(pokemonID) },
                {justOne: true}
            , (err, ret) => {
            if (err) throw err;
            res.json(ret);
        });
    } catch (e) {
        res.json(e);
    } finally {
        // MongoClient.close();
    }
};