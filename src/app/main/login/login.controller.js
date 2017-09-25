(function ()
{
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController(LoginService)
    {
        var vm = this;

        vm.login = function(){
            var p = LoginService.login(vm.credenciales);
            p.then(
                function (datos) {
                    var p = LoginService.login(vm.credenciales);
                    user._setToken(datos.access_token);
                    user._setUsername(vm.credenciales.username);
                    GetUser();
                    DialogFactory.ShowSimpleToast("Conectado...");
                    $state.go('app.alquiler', {});
                },
                function (error) {
                    DialogFactory.ShowSimpleToast(error.error_description);

                }
            )
        }
    }
})();