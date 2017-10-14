(function ()
{
    'use strict';

    angular
        .module('app.reporteReunionesHistorico')
        .controller('ReporteReunionesHistoricoController', ReporteReunionesHistoricoController);

    /** @ngInject */
    function ReporteReunionesHistoricoController($scope, $mdSidenav, AgendaService, msUtils, $mdDialog, $document,DialogFactory)
    {
      var vm = this;

      // Data
      vm.usuarios = [];

      vm.lista = [];

      vm.UpdateEstado = UpdateEstado;
      GetReuniones();

      function GetReuniones() {
        var promiseGet = AgendaService.getReunionesHistorico(user._getIdUsuario());
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



      function UpdateEstado(data) {
        data.estado="Cancelada";
        var p = AgendaService.updateReunion(data);
        p.then(
          function (datos) {
            var respuesta = datos.data;

            if(respuesta.error){
              DialogFactory.ShowSimpleToast(respuesta.mensaje);
              GetReuniones();
            }else{
              DialogFactory.ShowSimpleToast(respuesta.mensaje);

            }

          },
          function (error) {
            DialogFactory.ShowSimpleToast(error.error_description);

          }
        )
      }
      vm.dtOptions = {
        dom: '<"top"f>rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
        pagingType: 'simple',
        autoWidth: false,
        responsive: true
      };




    }

})();
