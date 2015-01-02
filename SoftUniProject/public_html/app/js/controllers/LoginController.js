app.controller('LoginController', function($scope, $location, $log, adsData) {
    $scope.loginFunc = function (ad) {
        adsData.login(ad)
        .$promise
        .then(function (data) {
            alert('Success login!' + data);
            $location.path('');
        },
        function (error) {
            $log.error(error);
        });
    };
});