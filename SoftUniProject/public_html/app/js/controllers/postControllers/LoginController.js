app.controller('LoginController', function($scope, $location, $log, adsData) {
    $scope.loginFunc = function (ad) {
        adsData.login(ad)
        .$promise
        .then(function (data) {
            showInfoMessage("Successful Login");
    
            localStorage.removeItem('user');
            
            localStorage.setObject('user', JSON.stringify(data));
            
            $location.path('');
        },
        function (error) {
            showInfoMessage("Invalid username or password!");
            
            localStorage.removeItem('user');
            
            $(".loginInputs").css({
                "border-color": "#FF2010", 
                "border-width":"1px", 
                "border-style":"solid"
            });
        });
    };
});