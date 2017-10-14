(function () {
  'use strict';

  angular
    .module('app.reporteUsuarios')
    .controller('ReporteUsuariosController', ReporteUsuariosController);

  /** @ngInject */
  function ReporteUsuariosController($scope, $mdSidenav, UserService, msUtils, $mdDialog, $document, DialogFactory) {

    var vm = this;

    // Data
    vm.usuarios = [];

    vm.lista = [];
    GetUsers();

    function GetUsers() {
      var promiseGet = UserService.getUsers();
      promiseGet.then(
        function (data) {
          var respuesta = data.data;
          vm.usuarios = respuesta.datos;
          vm.lista = angular.copy(vm.usuarios);

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
    vm.buscarPorNombre = function (cadena) {
      vm.listadoAux = [];

      for (var i in vm.usuarios) {
        var nombre = vm.usuarios[i].nombre;
        //  nombre= nombre.toLowerCase();
        // var aux =nombre.indexOf(cadena);
        if (aux > -1) {
          vm.listadoAux.push(vm.usuarios[i]);
        }
      }
      vm.lista = angular.copy(vm.listadoAux);
    }


    /**
     * Método para cambiar el estado de un usuario
     * @param user
     * @constructor
     */
    vm.OnOffUsuarios = function (user) {
      if (user.estado == "on") {
        user.estado = "off";
      } else {
        user.estado = "on";
      }
      var promiseGet = UserService.UpdateUsuario(user);
      promiseGet.then(
        function (data) {
          var respuesta = data.data;
          DialogFactory.AlertDialog('Actualizacion de Usuario', respuesta.mensaje);
          GetUsers();
        },
        function (err) {
          console.log(JSON.stringify(err));
        }
      )
    }

  }

})();
