(function ()
{
    'use strict';

    angular
        .module('app.olvidoSuContraseña', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.olvidoSuContraseña', {
            url      : '/olvidoSuContraseña',
            views    : {
                'main@'                                 : {
                    templateUrl: 'app/core/layouts/content-only.html',
                    controller : 'MainController as vm'
                },
                'content@app.olvidoSuContraseña': {
                    templateUrl: 'app/main/olvidoSuContraseña/olvidoSuContraseña.html',
                    controller : 'olvidoSuContraseñaController as vm'
                }
            },
            bodyClass: 'olvidoSuContraseñaController'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/olvidoSuContraseña');

        // Navigation
        msNavigationServiceProvider.saveItem('Usuario.olvidoSuContraseña', {
            title : 'olvidoSuContraseña',
            state : 'app.olvidoSuContraseña',
            weight: 3
        });
    }

})();