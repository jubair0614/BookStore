var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        controller: 'BooksController',
        templateUrl: 'views/books.html'
    })
    .when('/books', {
        controller: 'BooksController',
        templateUrl: 'views/books.html'
    })
    .when('/books/details/:id', {
        controller: 'BooksController',
        templateUrl: 'views/book-details.html'
    })
    .when('/books/add', {
        controller: 'BooksController',
        templateUrl: 'views/book-add.html'
    })
    .when('/books/edit/:id', {
        controller: 'BooksController',
        templateUrl: 'views/book-edit.html'
    })
    .otherwise({
        redirectTo: '/'
    });
    $locationProvider.hashPrefix('');
});
