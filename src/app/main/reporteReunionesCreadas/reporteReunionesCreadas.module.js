(function ()
{
    'use strict';

    angular
        .module('app.reporteReunionesCreadas',
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

        $stateProvider.state('app.reporteReunionesCreadas', {
            url    : '/reporteReunionesCreadas',
            views  : {
                'content@app': {
                    templateUrl: 'app/main/reporteReunionesCreadas/reporteReunionesCreadas.html',
                    controller : 'ReporteReunionesCreadasController as vm'
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
        msNavigationServiceProvider.saveItem('reporteReunionesCreadas', {
            title : 'Mis Creaciones',
            icon  : 'icon-camera-iris',
            state : 'app.reporteReunionesCreadas',
            weight: 2
        });

    }

})();