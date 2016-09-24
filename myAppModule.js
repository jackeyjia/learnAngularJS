//create new module

var myAppModule = angular.module('myAppModule', []);

myAppModule.filter('stripDashes', function(){
    return function(txt){
        //custom filter
    };
});

myAppModule.controller('myFilterDemoCtrl',function($scope){
    // controller code 
    }
);