const app = angular.module("myApp", []);


const _appCtrl = function($scope, $http, $timeout, $filter){
	
	$scope.statesDataset 		= statesDataset;
	$scope.selectedStateName 	= "zIndiaMap";


	$scope.showingStates = [];

	$scope.assignStatesList = function(states){
		if(states.length==0){
			$scope.showingStates = [];
			return;
		}

		$scope.selectedStateName 	= "zIndiaMap";
		$('#statesListModal').modal('toggle');
		$scope.showingStates = states;
	};

	$scope.playStateName = function(state){
		$scope.selectedStateName = state.media;
		var audioDomRef = document.getElementById(state.media);
		audioDomRef.play();
	};

};

app.controller(
	"appCtrl",
	[
		"$scope",
		"$http",
		"$timeout",
		"$filter",
		_appCtrl
	]
);