/**
 * Created by Erley on 16/11/2016.
 */

(function () {
    'use strict';

    angular.module('app.login')
        .factory('UserService', UserService);

    function UserService($http, $q){

        var url = "http://localhost/simulgaaBack/public/";

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


        var getRoles = function () {
            var respuesta = $http({
                method: 'GET',
                url: url + 'api/rol',

            });
            return respuesta;
        };

      var UpdateUsuario = function (user) {
        var respuesta = $http({
          method: 'PUT',
          url: url + 'api/user/'+user.id,
          data: user

        });
        return respuesta;
      };





        equiposServiceFactory.createUser = createUser;
        equiposServiceFactory.getUsers = getUsers;
        equiposServiceFactory.getRoles = getRoles;
        equiposServiceFactory.UpdateUsuario =UpdateUsuario;


        return equiposServiceFactory;





    }

})();
