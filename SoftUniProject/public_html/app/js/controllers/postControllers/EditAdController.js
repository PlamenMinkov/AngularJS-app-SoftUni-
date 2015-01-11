app.controller('EditAdController', function($scope, $location, $log, adsData) {
    adsData.getById(idOfAd)
            .$promise
            .then(function (data) {
                $scope.adByAd = data;
                console.log($scope.adByAd.imageDataURL);
            }, function (error) {
                $log.error(error);
            });
    
    // for edit 
    
    $scope.createAd = function (ad, id) {
        if(ad) {
            ad.title = $("#newTitleOfAd").val();
            ad.text = $("#newTextOfAd").val();
        }
        else {
            ad = {
                title: $("#newTitleOfAd").val(),
                text: $("#newTextOfAd").val()
            };            
        }
            
            if($('#editImg').attr('src') !== '') {
                ad.imageDataURL = localStorage.getItem("editImg");
            }
            
            adsData.editAd(ad, id)
            .$promise
            .then(function (data) {
                showInfoMessage("Successful Edit");

                $location.path('/user/ads');
            },
            function (error) {
                showInfoMessage("Invalid Edit!");
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