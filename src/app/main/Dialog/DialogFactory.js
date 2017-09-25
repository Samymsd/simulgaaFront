/**
 * Created by Ing. Adrian Vergara on 7/11/2016.
 */
(function () {
    'use strict';
        angular.module('app.dialog')
            .factory('DialogFactory', DialogFactory);

        function DialogFactory($mdDialog, $mdToast){
            var factory = {
                AlertDialog: function(titulo, contenido){
                    $mdDialog.show(
                        $mdDialog.alert()
                            .parent(angular.element(document.querySelector('#popupContainer')))
                            .clickOutsideToClose(true)
                            .title(titulo)
                            .textContent(contenido)
                            .ariaLabel('Alert Dialog Demo')
                            .ok('Aceptar!')
                    );
                    //mdDialog al parecer no funciona ya se como lo tiene o dentro del cambio de estate
                    //alert('Acceso denegado');
                },
                ShowSimpleToast: function (message) {
                    $mdToast.show(
                        $mdToast.simple()
                            .textContent(message)
                            .position('bottom right')
                            .hideDelay(3000)
                    );
                }
            };
            return factory;
        }
})();