app.controller('LoginController', function($scope, $location, $log, adsData) {
    $scope.loginFunc = function (ad) {
        adsData.login(ad)
        .$promise
        .then(function (data) {
            showInfoMessage("Successful Login");
    
            //sessionStorage.removeItem('objectId');
            sessionStorage.removeItem('username');
            sessionStorage.removeItem('access_token');
            sessionStorage.removeItem('fullName');

            //sessionStorage.setItem('objectId', data['objectId']);
            sessionStorage.setItem('username', data['username']);
            sessionStorage.setItem('access_token', data['access_token']);
            
            $location.path('');
        },
        function (error) {
            showInfoMessage("Invalid username or password!");
            $(".loginInputs").css({
                "border-color": "#FF2010", 
                "border-width":"1px", 
                "border-style":"solid"
            });
        });
    };
});