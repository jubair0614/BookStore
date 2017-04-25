var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Genre  = require('./models/genres');
Book = require('./models/books');

// connect to mongoose
mongoose.connect('mongodb://localhost:27017/bookstore');
var db = mongoose.connection;

app.get('/', function (req, res) {
    res.send('Please visit /api/genres');
});

// genres api
app.get('/api/genres', function (req, res) {
    Genre.getGenres(function (err, genres) {
       if(err){
           throw err;
       }
       res.json(genres);
    });
});

app.get('/api/genres/:_id', function (req, res) {
    Genre.getGenreById(req.params._id, function (err, genre) {
        if(err){
            throw err;
        }
        res.json(genre);
    })
});

app.post('/api/genres', function (req, res) {
    var genre = req.body;
    Genre.addGenre(genre, function (err, genres) {
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

app.put('/api/genres/:_id', function (req, res) {
    var id = req.params._id;
    var genre = req.body;
    Genre.updateGenre(id, genre, {}, function (err, genre) {
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

app.delete('/api/genres/:_id', function (req, res) {
    var id = req.params._id;
    Genre.removeGenre(id, function (err, genre) {
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

// books api
app.get('/api/books', function (req, res) {
    Book.getBooks(function (err, books) {
        if(err){
            throw err;
        }
        res.json(books);
    })
});

app.get('/api/books/:_id', function (req, res) {
    Book.getBookById(req.params._id, function (err, book) {
        if(err){
            throw err;
        }
        res.json(book);
    })
});

app.post('/api/books', function (req, res) {
    var book = req.body;
    Book.addBook(book, function (err, book) {
        if(err){
            throw err;
        }
        res.json(book);
    })
});

app.put('/api/books/:_id', function (req, res) {
    var id = req.params._id;
    var book = req.body;
    Book.updateBook(id, book, {}, function (err, book) {
        if(err){
            throw err;
        }
        res.json(book);
    })
});

app.delete('/api/books/:_id', function (req, res) {
    var id = req.params._id;
    Book.removeBook(id, function (err, book) {
        if(err){
            throw err;
        }
        res.json(book);
    })
});

app.listen(3000);
console.log('Running on port 3000');