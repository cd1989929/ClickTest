var app = angular.module('myApp',[]);
app.run(function($rootScope){
    $rootScope.name="Ari Lerner";
    //alert('123');
});

app.controller('MyController',['$scope',function($scope){
   $scope.person={
       name:"chendong"
   };
}]);

app.controller('ParentController',function($scope){
    $scope.person={greeted:false};
    });
app.controller('ChildController',function($scope){
    $scope.sayHello=function(){
        $scope.person.greeted=true;
    };
});
