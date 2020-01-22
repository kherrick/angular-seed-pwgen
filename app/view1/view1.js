'use strict';

const getPwgen = () => import('https://unpkg.com/pwgen')

// const getPwgen = () => new Promise(resolve => {
//   const script = document.createElement('script')
//   script.type = 'module'
//   script.src = 'https://unpkg.com/pwgen'

//   document.body.appendChild(script)

//   script.onload = resolve
// })

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
  $scope.length = '10';
  $scope.number = '20';
  $scope.flags = '-sync';

  getPwgen()
}]);
