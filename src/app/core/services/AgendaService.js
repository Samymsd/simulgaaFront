/**
 * Created by Erley on 16/11/2016.
 */

(function () {
    'use strict';

    angular.module('app.calendario')
        .factory('AgendaService', AgendaService);

    function AgendaService($http, $q){
        var url = "http://localhost:51466/";
        var equiposServiceFactory = {};

        var createAlquiler = function (getData) {
            return $http({
                method: 'POST',
                url: url + '/api/alquiler/create',
                headers: {'authorization': 'bearer ' + user._getToken()},
                data: getData
            });
        };

        var createAlquilerInstitucion = function (getData) {
            return $http({
                method: 'POST',
                url: url + '/api/alquilerInstitucion/create',
                headers: {'authorization': 'bearer ' + user._getToken()},
                data: getData
            });
        };

        var getAlquileres = function (getData) {
            return $http({
                method: 'POST',
                url: url + '/api/alquiler/AlquileresFecha',
                headers: {'authorization': 'bearer ' + user._getToken()},
                data: getData
            });
        };

        var getAlquileresInstitucion = function (getData) {
            return $http({
                method: 'POST',
                url: url + '/api/alquilerInstitucion/AlquileresFecha',
                headers: {'authorization': 'bearer ' + user._getToken()},
                data: getData
            });
        };

        var getAlquileresDocente = function (getData) {
            return $http({
                method: 'POST',
                url: url + '/api/alquilerInstitucion/AlquileresDocente',
                headers: {'authorization': 'bearer ' + user._getToken()},
                data: getData
            });
        };

        var getAlquileresHoy = function () {
            return $http({
                method: 'GET',
                url: url + '/api/alquiler/Hoy',
                headers: {'authorization': 'bearer ' + user._getToken()}

            });
        };

        var getAlquileresInsitucionHoy= function () {
            return $http({
                method: 'GET',
                url: url + '/api/alquilerInstitucion/Hoy',
                headers: {'authorization': 'bearer ' + user._getToken()}
            });
        };

        equiposServiceFactory.createAlquiler = createAlquiler;
        equiposServiceFactory.createAlquilerInstitucion = createAlquilerInstitucion;
        equiposServiceFactory.getAlquileres = getAlquileres;
        equiposServiceFactory.getAlquileresInstitucion = getAlquileresInstitucion;
        equiposServiceFactory.getAlquileresDocente = getAlquileresDocente;
        equiposServiceFactory.getAlquileresHoy = getAlquileresHoy;
        equiposServiceFactory.getAlquileresInsitucionHoy = getAlquileresInsitucionHoy;


        return equiposServiceFactory;

    }

})();
