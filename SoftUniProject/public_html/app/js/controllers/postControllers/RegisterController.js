app.controller('RegisterController', function($scope, $location, $log, adsData) {
    $scope.regFunc = function (ad) {
        console.log(JSON.stringify(ad));
        adsData.register(ad)
        .$promise
        .then(function (data) {
            showInfoMessage("Successful Registration");
    
            localStorage.removeItem('user');
            localStorage.removeItem('password');
            
            localStorage.setObject('user', data);
            localStorage.setItem('password', ad.password);            
            
            $location.path('');
        },
        function (error) {
            showInfoMessage("Invalid registration!");
            $(".registerInput").css({
                "border-color": "#FF2010", 
                "border-width":"1px", 
                "border-style":"solid"
            });
        });
    };
});