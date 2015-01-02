app.controller('RegisterController', function($scope, $location, $log, adsData) {
    $scope.regFunc = function (ad) {
        adsData.register(ad)
        .$promise
        .then(function (data) {
            alert(JSON.stringify(data));
            $location.path('');
        },
        function (error) {
            console.log("greashka");
            $log.error(error);
        });
    };
});