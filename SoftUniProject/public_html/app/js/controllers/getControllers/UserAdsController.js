app.controller('UserAdsController', function($scope, adsData, $log) {
    adsData.getAll()
        .$promise
        .then(function (data) {
                $scope.data = data;
        }, function (error) {
            $log.error(error);
    });

    adsData.getAllTowns(function(resp){
        $scope.towns = resp;
    });
    
    adsData.getAllCategories(function(resp){
        $scope.categories = resp;
    });
});