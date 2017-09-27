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
            var p = UserService.createUser(usuario);
            p.then(
                function (datos) {
                   var respuesta = datos.data;

                    DialogFactory.ShowSimpleToast(respuesta.mensaje);
                    $state.go('app.calendario', {});
                },
                function (error) {
                    DialogFactory.ShowSimpleToast(error.error_description);

                }
            )

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