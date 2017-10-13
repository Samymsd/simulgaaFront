(function ()
{
    'use strict';

    angular
        .module('app.reporteReunionesPersonales',
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

        $stateProvider.state('app.reporteReunionesPersonales', {
            url    : '/reporteReunionesPersonales',
            views  : {
                'content@app': {
                    templateUrl: 'app/main/reporteReunionesPersonales/reporteReunionesPersonales.html',
                    controller : 'ReporteReunionesPersonalesController as vm'
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
        msNavigationServiceProvider.saveItem('ConsultarEventosPersonales', {
            title : 'Eventos Personales',
            icon  : 'icon-bell-ring-outline',
            state : 'app.reporteReunionesPersonales',
            weight: 3
        });

    }

})();
