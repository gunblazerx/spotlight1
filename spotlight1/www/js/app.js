// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'openfb'])

.run(function ($ionicPlatform, OpenFB) {
    //ngFB.init({ appId: '898258863578776' });
    OpenFB.init('898258863578776','http://localhost/oauthcallback.html');
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.navBar.alignTitle('center')
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
      .state('tab', {
          url: "/tab",
          abstract: true,
          templateUrl: "templates/tabs.html"
      })

    // Each tab has its own nav history stack:

  .state('tab.login', {
      url: '/login',
      views: {
          'tab-login': {
              templateUrl: 'templates/tab-login.html',
              controller: 'SignInCtrl'
          }
      }
  })

  .state('tab.register', {
      url: '/register',
      views: {
          'tab-register': {
              templateUrl: 'templates/tab-register.html',
               controller: 'SignUpCtrl'
          }
      }
  })


         .state('tab2', {
             url: "/tab2",
             abstract: true,
             templateUrl: "templates/tabs2.html"
         })




    .state('tab2.reqs', {
        url: '/reqs',
        views: {
            'tab-reqs': {
                templateUrl: 'templates/tab-reqs.html',
                controller: 'DashCtrl'
            }
        }
    })

    .state('tab2.jobs', {
        url: '/jobs',
        views: {
            'tab-jobs': {
                templateUrl: 'templates/tab-jobs.html',
                //controller: 'ChatsCtrl'
            }
        }
    })
    /*  .state('tab.chat-detail', {
          url: '/chats/:chatId',
          views: {
              'tab-jobs': {
                  templateUrl: 'templates/chat-detail.html',
                  controller: 'ChatDetailCtrl'
              }
          }
      })*/


    .state('tab2.inbox', {
        url: '/inbox',
        views: {
            'tab-inbox': {
                templateUrl: 'templates/tab-inbox.html',
                controller: 'myListCtrl'
            }
        }
    })

    .state('tab2.safe', {
        url: '/safe',
        views: {
            'tab-safe': {
                templateUrl: 'templates/tab-safe.html',
                controller: 'completedCtrl'
            }
        }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/login');

});
