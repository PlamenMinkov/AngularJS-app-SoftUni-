app.factory('adsData', function ($resource, $http, $location) {
    var access_token = '';
    function setAccessToken () {
        if(localStorage['user']) {
            access_token = localStorage.getObject('user').access_token;
            
            $http.defaults.headers.common['Authorization'] = 
            'Bearer ' + access_token;
        }
        else {
            console.log("nqma");
        }
    }
    
    function removeAccessToken() {
        $http.defaults.headers.common['Authorization'] = 
            'Bearer ' + "";
    }

    var resource = function(selectUrl) {
        return $resource(
            selectUrl, 
            {id: '@id'}, 
            { update: {
                    method: 'PUT'
            }
        });
    };
    
    function getAllAds(page) {
        removeAccessToken();
        var output = resource('http://softuni-ads.azurewebsites.net/api/ads?pagesize=2&startpage=' + page);
        return output.get();
    }
    
    function getUser() {
        setAccessToken ();
        var output = resource('http://softuni-ads.azurewebsites.net/api/user/profile');
        return output.get();
    }
    
    function createNewAd(ad) {
        setAccessToken ();
        var output = resource('http://softuni-ads.azurewebsites.net/api/user/ads');
        return output.save(ad);
    }

    function login(data) {
        var output = resource('http://softuni-ads.azurewebsites.net/api/user/login');
        return output.save(data);
    }

    function register(data) {
        var output = 
            resource('http://softuni-ads.azurewebsites.net/api/user/register');
        return output.save(data);
    }

    function getAdById(id) {
        setAccessToken ();
        var output = 
            resource('http://softuni-ads.azurewebsites.net/api/user/ads/' + id);
        return output.get({id: id});
    }
    
    function getUsersAds(filter) {
        setAccessToken ();
        
        if(filter === '') {
            var output = 
                resource('http://softuni-ads.azurewebsites.net/api/user/ads');
            return output.get();
        }
        else {
            var output = 
                resource('http://softuni-ads.azurewebsites.net/api/user/ads?status=' + filter);
            return output.get();
        }
    }
    
    function editAd(ad, id) {
        console.log(ad);
        setAccessToken ();
        var output = 
            resource('http://softuni-ads.azurewebsites.net/api/user/ads/' + id);
        return output.update({id: id}, ad);
    }
    
    function editUserProfile(ad) {
        setAccessToken ();
        var output = 
            resource('http://softuni-ads.azurewebsites.net/api/user/profile');
        return output.update(ad);
    }
    
    function changePassword(ad) {
        setAccessToken ();
        var output = 
            resource('http://softuni-ads.azurewebsites.net/api/user/changepassword');
        return output.update(ad);
    }

    return {
        editUserProfile: editUserProfile,
        changePassword: changePassword,
        getAll: getAllAds,
        getUser: getUser,
        getUsersAds: getUsersAds,
        getAllTowns: function(success) {
            $http({method: 'GET', url: 'http://softuni-ads.azurewebsites.net/api/towns'})
                    .success(function(data, status, headers, config){
                        success(data);
                    })
                    .error(function(data, status, headers, config){
                        $log.warn(data);
                    });
        },
        
        getAllCategories: function(success) {
            $http({method: 'GET', url: 'http://softuni-ads.azurewebsites.net/api/categories'})
                    .success(function(data, status, headers, config){
                        success(data);
                    })
                    .error(function(data, status, headers, config){
                        $log.warn(data);
                    });
        },
        create: createNewAd,
        getById: getAdById,
        editAd: editAd,
        delete: function(id) {
            setAccessToken ();
            $http({method: 'DELETE', url: 'http://softuni-ads.azurewebsites.net/api/user/ads/' + id})
                .success(function(data, status, headers, config){
                    showInfoMessage("Successful Delete");
                    reloadPage();
                })
                .error(function(data, status, headers, config){
                    $log.warn(data);
                });
        },
        deactivate: function(id) {
            setAccessToken ();
            $http({method: 'PUT', url: 'http://softuni-ads.azurewebsites.net/api/user/ads/deactivate/' + id})
                .success(function(data, status, headers, config){
                    showInfoMessage("Successful Deactivation");
                    reloadPage();
                })
                .error(function(data, status, headers, config, $log){
                    $log.warn(data);
                });
        },
        publishAgain: function(id) {
            setAccessToken ();
            $http({method: 'PUT', url: 'http://softuni-ads.azurewebsites.net/api/user/ads/publishagain/' + id})
                .success(function(data, status, headers, config){
                    showInfoMessage("Successful Publishing");
                    reloadPage();
                })
                .error(function(data, status, headers, config){
                    $log.warn(data);
                });
        },
        login: login,
        register: register
    };
});