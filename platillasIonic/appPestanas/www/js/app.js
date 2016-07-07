// Ionic Starter App
angular.module('starter', ['ionic'])

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('login', {
        url: '/login',
        views:{
            login:{
              templateUrl: 'templates/login.html'
            }
        }
    })

    .state('register',{
      url:'/register',
      views:{
        register:{
          templatesUrl: 'templates/register.html'
        }
      }
    })

    $urlRouterProvider.otherwise('/login');
});


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
   
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
   cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
