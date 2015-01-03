app.controller('RegisterController', function($scope, $location, $log, adsData) {
    $scope.regFunc = function (ad) {
        adsData.register(ad)
        .$promise
        .then(function (data) {
            showInfoMessage("Successful Registration");
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