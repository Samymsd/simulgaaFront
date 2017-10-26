(function ()
{
    'use strict';

    angular.module('app.calendario')
        .controller('EventDetailDialogController', EventDetailDialogController);

    /** @ngInject */
    function EventDetailDialogController($mdDialog, calendarEvent, showEventFormDialog, event,AgendaService)
    {
        var vm = this;

        // Data
        vm.calendarEvent = AgendaService.getReunionSeleccionada();



        // Methods
        vm.editEvent = editEvent;
        vm.closeDialog = closeDialog;
        vm.getFecha =  getFecha;
        //////////


        function  getFecha(fecha) {
            return  (fecha);
        }
        /**
         * Close the dialog
         */
        function closeDialog()
        {
            $mdDialog.hide();
        }


        /**
         * Edit the calendar event
         *
         * @param calendarEvent
         */
        function editEvent(calendarEvent)
        {
            showEventFormDialog('edit', calendarEvent, false, false, event);
        }
    }
})();
