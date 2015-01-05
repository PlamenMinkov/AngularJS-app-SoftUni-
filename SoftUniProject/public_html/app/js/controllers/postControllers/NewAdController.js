app.controller('NewAdController', function($scope, $location, $log, adsData) {
	$scope.createAd = function (ad) {
            console.log(ad);
//            adsData.create(ad)
//                .$promise
//                .then(function (data) {
//                    alert('Ad added: ' + data);
//                    $location.path('#/allAds');
//                },
//                function (error) {
//                    $log.error(error);
//                });
	};

	$scope.cancelAdd = function () {
		
	};
        
        $scope.data = 'none';
        
        $scope.readURL = function() {
        console.log("limon");
        };
        
        adsData.getAllTowns(function(resp){
        $scope.towns = resp;
        });

        adsData.getAllCategories(function(resp){
            $scope.categories = resp;
        });
});