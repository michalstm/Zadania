angular.module('main', []);
angular.module('main').controller('mainController', ['$scope','$http', function ($scope,$http) {

	$http.get("https://demo0180679.mockable.io/answers")
	.success(function (response) {$scope.names = response;});

	$scope.check = function () {
		var keys = [];
		for(var k in $scope.answer) keys.push(k);
		$scope.points = true;
		$scope.allpoints = 0;
		$scope.score = 0;				
		
		for(var i = 0; i < $scope.names.length; i++){

			$scope.allpoints += $scope.names[i].points;

			for(var j = 0; j < $scope.names[i].answer.length; j++){

				if($scope.answer[keys[i]] === $scope.names[i].answer[j])
				{
					document.getElementById("answer." + keys[i]).style.borderColor = "green";
					document.getElementById("answer." + keys[i]).style.backgroundColor = "rgb(105, 255, 105)";
					$scope.score += $scope.names[i].points;
					break;
				}
				else{
					document.getElementById("answer." + keys[i]).style.borderColor = "red";
					document.getElementById("answer." + keys[i]).style.backgroundColor = "rgb(255, 105, 105)";
				}
			}
		}
	};
}])