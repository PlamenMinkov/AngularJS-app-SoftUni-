app.controller('EditUserProfileAndPasswordControler', function($scope, $location, $log, adsData) {
    adsData.getUser()
        .$promise
        .then(function (data) {
            $scope.user = data;
        },
        function (error) {
            showInfoMessage("Undefined error!");
        });
        
    $scope.editProfile = function (ad) {
        ad.name = $("#newName").val();
        ad.email = $("#newEmail").val();
        ad.phoneNumber = $("#newPhone").val();
        
        console.log(JSON.stringify(ad));
        adsData.editUserProfile(ad)
        .$promise
        .then(function (data) {
            showInfoMessage("Successful Edit");            
            
            $location.path('/user/home');
        },
        function (error) {
            showInfoMessage("Invalid Edit!");
        });
    };
    
    $scope.changePassword = function (ad) {
        adsData.changePassword(ad)
            .$promise
            .then(function (data) {
                showInfoMessage("Successful Change");            

                $location.path('/user/home');
            },
            function (error) {
                showInfoMessage("Invalid Change!");
            });
    };
    
    adsData.getAllTowns(function(resp){
            $scope.towns = resp;
        });
});