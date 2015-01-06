app.controller('NewAdController', function($scope, $location, $log, adsData) {
	$scope.createAd = function (ad) {
            var def = 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSIvxVB2mpZKgQIcKMk0cQrlGRkR3cirhDXUWIFigd8KFACB5KxrG7cBQ';
            if($('#adImage').attr('src') !== def) {
                ad.imageDataUrl = $('#adImage').attr('src');
            }
            
            adsData.create(ad)
            .$promise
            .then(function (data) {
                showInfoMessage("Successful Add");

                $location.path('');
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