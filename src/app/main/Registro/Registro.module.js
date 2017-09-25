(function ()
{
    'use strict';

    angular
        .module('app.Registro', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.Registro', {
            url      : '/registro',
            views    : {
                'main@'                          : {
                    templateUrl: 'app/core/layouts/content-only.html',
                    controller : 'MainController as vm'
                },
                'content@app.Registro': {
                    templateUrl: 'app/main/Registro/Registro.html',
                    controller : 'RegistroController as vm'
                }
            },
            bodyClass: 'Registro'
        });

        // Translate
        $translatePartialLoaderProvider.addPart('app/main/Registro');

        // Navigation
        msNavigationServiceProvider.saveItem('Usuario.Registro', {
            title : 'Registrarse',
            state : 'app.Registro',
            weight: 1
        });
    }

})();