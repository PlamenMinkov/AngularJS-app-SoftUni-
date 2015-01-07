app.controller('AllAdsController', function($scope, adsData, $log) {
    $scope.ready = "false";
    $scope.paging = "true";
    
    getAds(1);
    
    function getAds(page) {
        adsData.getAll(page)
            .$promise
            .then(function (data) {
                    $scope.data = data;
                    $scope.ready = "true";
                    $scope.paging = "false";
            }, function (error) {
                    $log.error(error);
        });
    }
    
    $scope.setPage = function(page) {
        showInfoMessage("In Action!");
        getAds(page);
    };
    adsData.getAllTowns(function(resp){
        $scope.towns = resp;
    });
    
    adsData.getAllCategories(function(resp){
        $scope.categories = resp;
    });
});