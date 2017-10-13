(function ()
{
    'use strict';

    angular
        .module('app.reporteUsuarios',
            [
                // 3rd Party Dependencies
               // 'xeditable'
            ]
        )
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {

        $stateProvider.state('app.reporteUsuarios', {
            url    : '/reporteUsuarios',
            views  : {
                'content@app': {
                    templateUrl: 'app/main/reporteUsuarios/reporteUsuarios.html',
                    controller : 'ReporteUsuariosController as vm'
                }
            }, data: {
                permissions: {
                    only: ['Administrador','Secretaria']
                }
            }
        });

        // Translation
        //$translatePartialLoaderProvider.addPart('app/main/reporteUsuarios');


        // Navigation

/*
        msNavigationServiceProvider.saveItem('reporteUsuarios', {
            title : 'Reporte Usuarios',
            icon  : 'icon-account-multiple',
            state : 'app.reporteUsuarios',
            weight: 4
        });  */

    }

})();
