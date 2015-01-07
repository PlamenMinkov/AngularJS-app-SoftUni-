app.controller('EditAdController', function($scope, $location, $log, adsData) {
    adsData.getById(idOfAd)
            .$promise
            .then(function (data) {
                $scope.adByAd = data;
                
            }, function (error) {
                $log.error(error);
            });
    
    // for edit 
    
    $scope.createAd = function (ad, id) {
            if($('#adImage').attr('src') !== '') {
                ad.imageDataUrl = $('#adImage').attr('src');
            }
            ad.title = $("#newTitleOfAd").val();
            ad.text = $("#newTextOfAd").val();
            
            adsData.editAd(ad, id)
            .$promise
            .then(function (data) {
                showInfoMessage("Successful Add");

                $location.path('/user/ads');
            },
            function (error) {
                showInfoMessage("Invalid ad!");
                $(".newAddField").css({
                    "border-color": "#FF2010", 
                    "border-width":"1px", 
                    "border-style":"solid"
                });
            });
	};

	$scope.cancelAdd = function () {
		
	};
        
        adsData.getAllTowns(function(resp){
            $scope.towns = resp;
        });

        adsData.getAllCategories(function(resp){
            $scope.categories = resp;
        });
});