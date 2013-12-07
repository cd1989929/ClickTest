var app = angular.module('myApp', []);
app.run(function ($rootScope) {
    $rootScope.name = "Ari Lerner";
    //alert('123');
});

app.controller('MyController', ['$scope', function ($scope) {
    $scope.person = {
        name: "chendong"
    };
}]);

app.controller('ParentController', function ($scope) {
    $scope.person = {greeted: false};
});
app.controller('ChildController', function ($scope) {
    $scope.sayHello = function () {
        $scope.person.greeted = true;
    };
});

app.controller("PlayerController", ['$scope', function ($scope) {
    $scope.playing = false;
    $scope.audio = document.createElement('audio');
    $scope.audio.src = "video/hotel.mp3";
    $scope.play = function () {
        $scope.audio.play();
        $scope.playing = true;
    };
    $scope.stop = function () {
        $scope.audio.pause();
        $scope.playing = false;
    };
    $scope.audio.addEventListener('ended', function () {
        $scope.$apply(function () {
            $scope.stop();
        });
    });

}]);

app.controller('RelatedController', ['$scope', function ($scope) {

}]);

app.controller('MyController', function ($scope) {
    $scope.person = { name: "Ari Lerner" };
    var updateClock = function () {
        $scope.clock = new Date();
    };
    var timer = setInterval(function () {
        $scope.$apply(updateClock);
    }, 1000);
    updateClock();
});