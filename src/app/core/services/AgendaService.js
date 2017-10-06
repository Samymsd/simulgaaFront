/**
 * Created by Erley on 16/11/2016.
 */

(function () {
    'use strict';

    angular.module('app.calendario')
        .factory('AgendaService', AgendaService);

    function AgendaService($http, $q){
        var url = "http://localhost/simulgaaBack/public/";
        var equiposServiceFactory = {};

        var ReunionSeleccionada = {};

        var createReunion = function (datos) {
            return $http({
                method: 'POST',
                url: url + 'api/agenda/reunion/create',
                data: datos
            });
        };


        var getReunionesPorIdUsuario = function (id) {
            return $http({
                method: 'GET',
                url: url + 'api/agenda/reunion/'+ id
            });
        };

        var getParticipaciones = function (id) {
            return $http({
                method: 'GET',
                url: url + 'api/agenda/reunion/participaciones/'+ id
            });
        };

        var getReunionesCreadas = function (id) {
            return $http({
                method: 'GET',
                url: url + 'api/agenda/reunion/creaciones/'+ id
            });
        };

        var getReunionSeleccionada = function () {
            return ReunionSeleccionada;
        };


        var setReunionSeleccionada = function (getData) {
            ReunionSeleccionada =getData;
        };
        var updateReunion = function (getData) {
            return $http({
                method: 'PUT',
                url: url + 'api/agenda/reunion/update/'+getData.id,
                data: getData
            });
        };

        var UpdateParticipacion = function (data) {
            return $http({
                method: 'POST',
                url: url + 'api/agenda/reunion/participacion',
                data: data
            });
        };

        var getAlquileresInsitucionHoy= function () {
            return $http({
                method: 'GET',
                url: url + '/api/alquilerInstitucion/Hoy',
                headers: {'authorization': 'bearer ' + user._getToken()}
            });
        };

        equiposServiceFactory.createReunion = createReunion;
        equiposServiceFactory.getReunionesPorIdUsuario = getReunionesPorIdUsuario;
        equiposServiceFactory.getReunionSeleccionada = getReunionSeleccionada;
        equiposServiceFactory.setReunionSeleccionada = setReunionSeleccionada;
        equiposServiceFactory.updateReunion = updateReunion;
        equiposServiceFactory.getReunionesCreadas = getReunionesCreadas;
        equiposServiceFactory.getParticipaciones = getParticipaciones;
        equiposServiceFactory.UpdateParticipacion = UpdateParticipacion;


        return equiposServiceFactory;

    }

})();
