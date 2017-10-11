(function ()
{
    'use strict';

    angular
        .module('app.reporteReunionesHistorico',
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

        $stateProvider.state('app.reporteReunionesHistorico', {
            url    : '/reporteReunionesHistorico',
            views  : {
                'content@app': {
                    templateUrl: 'app/main/reporteReunionesHistorico/reporteReunionesHistorico.html',
                    controller : 'ReporteReunionesHistoricoController as vm'
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
        msNavigationServiceProvider.saveItem('Consultar Historico', {
            title : 'Consultar Historico',
            icon  : 'icon-bell-ring-outline',
            state : 'app.reporteReunionesHistorico',
            weight: 3
        });

    }

})();
