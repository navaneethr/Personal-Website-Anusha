/**
 * Created by Anusha on 7/13/2017.
 */
var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'app/views/home.html'
        })
        .when('/about', {
            templateUrl : 'app/views/about.html'
        })
        .when('/skills', {
            templateUrl : 'app/views/skills.html'
        })
        .when('/education', {
            templateUrl : 'app/views/education.html'
        })
        .when('/work', {

            templateUrl : 'app/views/work.html',
            controller: 'workController'
        })
        .when('/contact',{
            templateUrl:'app/views/contact.html'
        })
        .otherwise({
            templateUrl: 'app/views/home.html'
        })
});

myApp.controller('workController', function ($scope) {

    $scope.showDescPS = function () {

            $scope.utahNgClass = "ng-hide";
            $scope.tmNgClass = "ng-hide";
            $scope.cssValueOfPsDescDisplay = "block";
            $scope.showItemPsDesc = "ng-show";
            $scope.hidePsClickBtn = "ng-hide";
            /*jQuery('#universityOfUtah').hide('slow');
            jQuery('#techMahindra').hide('slow');
            jQuery('#showDescPS').show('slow');
            jQuery('#pluralsightDesc').hide('slow'); */
    };

    $scope.showWE_PS = function () {

        $scope.showItemPsDesc = "ng-hide";
        $scope.cssValueOfPsDescDisplay = "none"
        $scope.utahNgClass = "ng-show";
        $scope.tmNgClass = "ng-show";
        $scope.hidePsClickBtn = "ng-show";

    };

    $scope.showDescUtah = function () {

        $scope.psNgClass = "ng-hide";
        $scope.tmNgClass = "ng-hide";
        $scope.cssValueOfUtahDescDisplay = "block";
        $scope.showItemUtahDesc = "ng-show";
        $scope.hideUtahClickBtn = "ng-hide";

    }

    $scope.showWE_UT = function () {

        $scope.showItemUtahDesc = "ng-hide";
        $scope.cssValueOfUtahDescDisplay = "none"
        $scope.psNgClass = "ng-show";
        $scope.tmNgClass = "ng-show";
        $scope.hideUtahClickBtn = "ng-show";

    };

    $scope.showDescTM = function () {

        $scope.psNgClass = "ng-hide";
        $scope.utahNgClass = "ng-hide";
        $scope.cssValueOfTMDescDisplay = "block";
        $scope.showItemTMDesc = "ng-show";
        $scope.hideTMClickBtn = "ng-hide";

    }

    $scope.showWE_TM = function () {

        $scope.showItemTMDesc = "ng-hide";
        $scope.cssValueOfTMDescDisplay = "none"
        $scope.psNgClass = "ng-show";
        $scope.utahNgClass = "ng-show";
        $scope.hideTMClickBtn = "ng-show";

    };
});