(function ()
{
    'use strict';

    /**
     * Main module of the Fuse
     */
    angular
        .module('fuse', [

            // Core
            'app.core',

            // Navigation
            'app.navigation',

            // Toolbar
            'app.toolbar',

            // Quick Panel
            'app.quick-panel',

            // Sample

            //login
            'app.login',
            'app.Registro',
            'app.olvidoSuContraseña',
            'app.calendario',
            'app.dialog',
            'app.reporteUsuarios',
            'app.reporteReuniones',
            'app.reporteReunionesCreadas',
           'app.reporteReunionesPersonales'



        ]);
})();
