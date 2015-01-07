app.controller('UserAdsController', function($scope, adsData, $log, $location) {
    $scope.ready = "false";
    
    getAdsWithFilter('');
    
    function getAdsWithFilter(filt) {
        adsData.getUsersAds(filt)
        .$promise
        .then(function (data) {
            $scope.data = data;
            $scope.ready = "true";
        }, function (error) {
            $log.error(error);
        });
    }
    
    $scope.FilterAds = function(filter) {
        showInfoMessage("Process is in action!");
        getAdsWithFilter(filter);
    };
    
    adsData.getAllTowns(function(resp){
        $scope.towns = resp;
    });
    
    adsData.getAllCategories(function(resp){
        $scope.categories = resp;
    });
    
    $scope.deleteAd = function (id) {
        adsData.delete(id);
        getAdsWithFilter('');
    };
    
    $scope.deactivateAd = function (id) {
        adsData.deactivate(id);
        getAdsWithFilter('');
    };
    
    $scope.publishAgain = function (id) {
        adsData.publishAgain(id);
        getAdsWithFilter('');
    };
    
    
    $scope.getUserAdById = function(id) {
        idOfAd = id;
        $location.path('/user/ads/edit');
    };
});