const express = require("express");
const router = express.Router();
const axios = require("axios");
//need pool to access db- already set up in base project
const pool = require('../modules/pool');


//get request to get array of all movie objects from db
router.get('/', (req, res) => {
    const query = 'SELECT * FROM movies';
    pool.query(query)
        .then(response => {
            //send the array of movie objects in db (response.rows) back to index.js
            res.send(response.rows);
        })
        .catch(error => {
            console.log('problem with movies.router get:', error);
        })
})

router.get('/:id', (req, res) => {
    //using the id given, get just one movie object from database.
    const query = `SELECT * FROM movies WHERE id=$1`;
    pool.query(query, [req.params.id])
        .then(response => {
            //send the array of movie objects in db (response.rows) back to index.js
            res.send(response.rows[0]);
        })
        .catch(error => {
            console.log('problem with movies.router get:', error);
        })
})

module.exports = router;