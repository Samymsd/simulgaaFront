(function ()
{
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController(LoginService,DialogFactory,$state)
    {
        var vm = this;

        vm.login = function(){
            var p = LoginService.login(vm.credenciales);
            p.then(
                function (datos) {

                    var respuesta = datos.data;
                    if(respuesta.error){
                        DialogFactory.ShowSimpleToast(respuesta.mensaje);
                    }else{
                        user._setUsername(respuesta.datos.nombres);
                        user._setNombreRol(respuesta.datos.nombre_rol);
                        user._setIdUsuario(respuesta.datos.id);

                        DialogFactory.ShowSimpleToast(respuesta.mensaje);
                        $state.go('app.calendario', {});

                    }

                },
                function (error) {
                    DialogFactory.ShowSimpleToast(error.error_description);

                }
            )
        }
    }
})();