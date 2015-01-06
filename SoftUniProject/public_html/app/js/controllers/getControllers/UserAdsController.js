app.controller('UserAdsController', function($scope, adsData, $log, $location) {
    adsData.getUsersAds()
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
    
    $scope.deleteAd = function (id) {
        console.log(id);
        adsData.delete(id);
        $location.path('/user/home');
    };
});