
var myController = angular.module("csvApp").controller("dataController", ["$scope", "$http", function($scope, $http) {
  $scope.data = "2015/01/01,5\n2015/01/02,7\n2015/01/03,3\n2015/01/04,56\n2015/01/05,5\n2015/01/06,7\n2015/01/07,21\n2015/01/08,5\n2015/01/09,8\n2015/01/10,1\n2015/01/11,2\n2015/01/12,5\n2015/01/13,87\n2015/01/14,89\n2015/01/15,2\n2015/01/16,2\n2015/01/17,4\n2015/01/18,8\n2015/01/19,2\n2015/01/20,58\n2015/01/21,6\n2015/01/22,9\n2015/01/23,9\n2015/01/24,5\n2015/01/25,5\n2015/01/26,32\n2015/01/27,3\n2015/01/28,2\n2015/01/29,5469\n2015/01/30,3\n2015/01/31,2";
  $scope.avg = "";
  $scope.parsedData = Papa.parse($scope.data).data;

  $scope.$watch("data", function() {
    $scope.parsedData = Papa.parse($scope.data).data;
  });

  $scope.analyze = function() {
    $http.post('/analyze', { data: $scope.parsedData })
      .then(
        function(res) {
          $scope.avg = res.data.avg;
        },
        function(err) {
          console.log(err);
        }
      );
  };
}]);
