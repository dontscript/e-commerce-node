"use strict";!function(){function e(e,r,t,o){e.state("blank",{abstract:!0,views:{root:{templateUrl:"app/templates/blank.html"}}}).state("structure",{abstract:!0,views:{root:{templateUrl:"app/templates/structure.html"}}}).state("structure.home",{url:"/",views:{header:{templateUrl:"app/templates/header.html",controller:"headerController",controllerAs:"vm"},content:{templateUrl:"app/templates/home.html",controller:"mainController",controllerAs:"vm"}}}),t.otherwise("/")}e.$inject=["$stateProvider","$locationProvider","$urlRouterProvider","$httpProvider"],angular.module("myApp",["ngAnimate","ngSanitize","ngCookies","ui.router","app.controllers","app.directives","app.services"]).config(e)}(),angular.module("app.controllers",["app.controllers.maincontroller","app.controllers.headercontroller"]),function(){function e(e,r,t){}e.$inject=["$scope","$window","$state"],angular.module("app.controllers.headercontroller",[]).controller("headerController",e)}(),function(){function e(e,r){}e.$inject=["$scope","$cookies"],angular.module("app.controllers.maincontroller",[]).controller("mainController",e)}(),angular.module("app.directives",[]),angular.module("app.services",[]);