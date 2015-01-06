app.controller('NewAdController', function($scope, $location, $log, adsData) {
	
        $scope.createAd = function (ad) {
            var def = 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSIvxVB2mpZKgQIcKMk0cQrlGRkR3cirhDXUWIFigd8KFACB5KxrG7cBQ';
            if($('#adImage').attr('src') !== def) {
                ad.imageDataUrl = $('#adImage').attr('src');
            }
//            var userData = localStorage.getObject("userData");
            
//            ad.ownerName = userData.name;
//            ad.ownerEmail = userData.email;
//            ad.ownerPhone = userData.phoneNumber;
            
            adsData.create(ad)
            .$promise
            .then(function (data) {
                console.log(data)
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
        
//        function getOwner () {
//            adsData.getUser()
//                .$promise
//                .then(function (data) {
//                    localStorage.setObject("userData", {
//                        name: data.name,
//                        email: data.email,
//                        phoneNumber: data.phoneNumber
//                    });
//                }, function (error) {
//                        $log.error(error);
//            });
//        }
        
        
        adsData.getAllTowns(function(resp){
            $scope.towns = resp;
        });

        adsData.getAllCategories(function(resp){
            $scope.categories = resp;
        });
});