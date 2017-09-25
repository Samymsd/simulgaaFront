/**
 * Created by Erley on 16/11/2016.
 */

(function () {
    'use strict';

    angular.module('app.login')
        .factory('UserService', UserService);

    function UserService($http, $q){

        var url = "http://localhost/simulgaaBackend/public/";

        var equiposServiceFactory = {};

        var createUser = function (Data) {
            var resouesta =$http({
                method: 'POST',
                url: url + 'api/user',
                data: Data
            });

            return resouesta;
        };



        var getUsers = function () {
            var respuesta = $http({
                method: 'GET',
                url: url + 'api/user',

            });
            return respuesta;
        };


        equiposServiceFactory.createUser = createUser;
        equiposServiceFactory.getUsers = getUsers;


        return equiposServiceFactory;





    }

})();
