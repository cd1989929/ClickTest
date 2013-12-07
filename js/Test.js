/**
 * Created by chen on 13-12-7.
 */
var app1 = angular.module('myTestApp', []);
app1.controller('ClickChange',function($scope){
    $scope.change = function(item){
        $scope.cd=item;

    };
    $scope.items = ["1", "2", "3"];
});