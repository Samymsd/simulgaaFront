(function ()
{
    'use strict';

    angular
        .module('app.calendario',
            [
                // 3rd Party Dependencies
                'ui.calendar'
            ]
        )
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.calendario', {
            url      : '/calendario',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/calendario/calendario.html',
                    controller : 'CalendarioController as vm'
                }
            },
            data: {
                permissions: {
                    only: ['Profesor','Administrador','Secretaria']

                }
            },
            bodyClass: 'calendario'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/calendario');

        // Navigation
        msNavigationServiceProvider.saveItem('alquiler', {
            title : 'Mi Agenda',
            icon  : 'icon-calendar-today',
            state : 'app.calendario',
            weight: 1
        });
    }
})();