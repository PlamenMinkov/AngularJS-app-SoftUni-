app.controller('LoginController', function($scope, $location, $log, adsData) {
    $scope.loginFunc = function (ad) {
        adsData.login(ad)
        .$promise
        .then(function (data) {
            showInfoMessage("Successful Login");
    
            localStorage.removeItem('user');
            localStorage.removeItem('password');
            
            localStorage.setObject('user', data);
            localStorage.setItem('password', ad.password);
            
            $location.path('/user/home');
        },
        function (error) {
            showInfoMessage("Invalid username or password!");
            
            localStorage.removeItem('user');
            localStorage.removeItem('password');
            
            $(".loginInputs").css({
                "border-color": "#FF2010", 
                "border-width":"1px", 
                "border-style":"solid"
            });
        });
    };
});