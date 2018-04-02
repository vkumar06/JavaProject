/* global state, stylesheet, stateHelperProvider, angular */

var app = angular.module('app', ['ui.router']);

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
  
  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('home', {
      url:'/',
      templateUrl: 'home.html'
      
 })
   
    .state('about', {
      url:'/about',
      templateUrl: 'about.html'
           
    })
   /* .state('about.intro', {
      url:'/about/intro',
      templateUrl: 'about.intro.html'
    })
    .state('about.list', {
      url:'/about/list',
      templateUrl: 'about.list.html'
    })
    .state('about.another', {
      url:'/about/another',
      templateUrl: 'about.another.html'
    });*/
     .state('resume', {
      url:'/resume',
      templateUrl: 'resume.html'
  })
  .state('contact', {
      url:'/contact',
      templateUrl: 'contact.html'
      
   });
   
          
        
  
}]);




