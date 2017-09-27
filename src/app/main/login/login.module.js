(function ()
{
    'use strict';

    angular
        .module('app.login', ['permission', 'permission.ui'])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.login', {
            url      : '/login',
            views    : {
                'main@'                          : {
                    templateUrl: 'app/core/layouts/content-only.html',
                    controller : 'MainController as vm'
                },
                'content@app.login': {
                    templateUrl: 'app/main/login/login.html',
                    controller : 'LoginController as vm'
                }
            },
            bodyClass: 'login'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/login');

        // Navigation

        msNavigationServiceProvider.saveItem('Usuario.Login', {
            title : 'Login',
            state : 'app.login',
            weight: 2
        });


    }

})();