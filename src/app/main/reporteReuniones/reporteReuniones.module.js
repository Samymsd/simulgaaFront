(function ()
{
    'use strict';

    angular
        .module('app.reporteReuniones',
            [
                // 3rd Party Dependencies
               // 'xeditable'
                'datatables'
            ]
        )
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {

        $stateProvider.state('app.reporteReuniones', {
            url    : '/reporteReuniones',
            views  : {
                'content@app': {
                    templateUrl: 'app/main/reporteReuniones/reporteReuniones.html',
                    controller : 'ReporteReunionesController as vm'
                }
            }, data: {
                permissions: {
                    only: ['Profesor','Administrador','Secretaria']
                }
            }
        });

        // Translation
        //$translatePartialLoaderProvider.addPart('app/main/reporteUsuarios');


        // Navigation
        msNavigationServiceProvider.saveItem('ReporteUsuarios', {
            title : 'Mis Participaciones',
            icon  : 'icon-bell-ring-outline',
            state : 'app.reporteReuniones',
            weight: 3
        });

    }

})();