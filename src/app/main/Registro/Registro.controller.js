(function ()
{
    'use strict';

    angular
        .module('app.Registro')
        .controller('RegistroController', RegistroController);

    /** @ngInject */
    function RegistroController($state,DialogFactory,UserService)
    {
        var vm = this;

        vm.roles = [];

        vm.user = {};


        vm.createUser = function (usuario) {

          if(vm.user.passwordConfirm==vm.user.password){
            var p = UserService.createUser(usuario);
            p.then(
              function (datos) {
                var respuesta = datos.data;

                DialogFactory.ShowSimpleToast(respuesta.mensaje);
                $state.go('app.login', {});
              },
              function (error) {
                DialogFactory.ShowSimpleToast(error.error_description);

              }
            )
          }else{
            DialogFactory.ShowSimpleToast("Contraseñas no coinciden");
          }


        }

        vm.getRoles = function () {
            var p = UserService.getRoles();
            p.then(
                function (datos) {
                    var respuesta = datos.data;

                    vm.roles = respuesta.datos;

                    //DialogFactory.ShowSimpleToast(respuesta.mensaje);
                   // $state.go('app.calendario', {});
                },
                function (error) {
                    DialogFactory.ShowSimpleToast(error.error_description);

                }
            )

        }


        vm.getRoles();

    }
})();
