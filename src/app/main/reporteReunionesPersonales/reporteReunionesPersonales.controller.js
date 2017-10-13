(function ()
{
    'use strict';

    angular
        .module('app.reporteReunionesPersonales')
        .controller('ReporteReunionesPersonalesController', ReporteReunionesPersonalesController);

    /** @ngInject */
    function ReporteReunionesPersonalesController($scope, $mdSidenav, AgendaService, msUtils, $mdDialog, $document,DialogFactory)
    {

        var vm = this;

        // Data
        vm.usuarios = [];

        vm.lista = [];
        GetReuniones();

        vm.UpdateParticipacion = UpdateParticipacion;
        vm.formatDate =formatDate;

        function UpdateParticipacion(data) {
            if(data.asistencia=="si"){
                data.asistencia="no";
            }else{
                data.asistencia="si";
            }
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

        function formatDate(date) {
            var d = new Date(date);
            var hh = d.getHours();
            var m = d.getMinutes();
            var s = d.getSeconds();
            var dd = "AM";
            var h = hh;
            if (h >= 12) {
                h = hh - 12;
                dd = "PM";
            }
            if (h == 0) {
                h = 12;
            }
            m = m < 10 ? "0" + m : m;

            s = s < 10 ? "0" + s : s;

            /* if you want 2 digit hours:
            h = h<10?"0"+h:h; */

            var pattern = new RegExp("0?" + hh + ":" + m + ":" + s);

            var replacement = h + ":" + m;
            /* if you want to add seconds
            replacement += ":"+s;  */
            replacement += " " + dd;

            date.replace(pattern, replacement);

            var r = new Date(date);

            return r.getHours();
        }



    }

})();
