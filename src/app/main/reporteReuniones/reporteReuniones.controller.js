(function ()
{
    'use strict';

    angular
        .module('app.reporteReuniones')
        .controller('ReporteReunionesController', ReporteReunionesController);

    /** @ngInject */
    function ReporteReunionesController($scope, $mdSidenav, AgendaService, msUtils, $mdDialog, $document,DialogFactory)
    {

        var vm = this;

        // Data
        vm.usuarios = [];

        vm.lista = [];
        GetReuniones();

        vm.UpdateParticipacion = UpdateParticipacion;

        function UpdateParticipacion(data) {
            var promiseGet = AgendaService.UpdateParticipacion(data);
            promiseGet.then(
                function (data) {
                    var respuesta = data.data;
                    DialogFactory.AlertDialog('Solicitud de cambio en la asistencia',respuesta.mensaje);
                    GetReuniones();

                },
                function (err) {
                    console.log(JSON.stringify(err));
                }
            )
        };


        function GetReuniones() {
            var promiseGet = AgendaService.getParticipaciones(user._getIdUsuario());
            promiseGet.then(
                function (data) {
                    var respuesta = data.data;
                    vm.lista = respuesta.datos;

                },
                function (err) {
                    console.log(JSON.stringify(err));
                }
            )
        };


        /**
         * Metodo para buscar por nombre en el listado de productos
         * @param cadena
         */

/*
        vm.buscarPorNombre = function(cadena){
            vm.listadoAux = [];

            for( var i in vm.usuarios){
                var nombre = vm.usuarios[i].nombre;
                //  nombre= nombre.toLowerCase();
               // var aux =nombre.indexOf(cadena);
                if(aux>-1){
                    vm.listadoAux.push( vm.usuarios[i]);
                }
            }
            vm.lista = angular.copy(vm.listadoAux);
        }

        */

        vm.dtOptions = {
            dom: '<"top"f>rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
            pagingType: 'simple',
            autoWidth: false,
            responsive: true
        };


    }

})();