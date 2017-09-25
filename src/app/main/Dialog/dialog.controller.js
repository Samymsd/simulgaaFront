/**
 * Created by Ing. Adrian Vergara on 7/11/2016.
 */
(function () {
    'use strict';
        angular.module('app.dialog', [])
            .controller('DialogOptionsController', DialogOptionsController);

            function DialogOptionsController($scope, $mdDialog, $mdMedia) {
                $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

                $scope.showContent = function(ev,pathContent) {
                    var useFullScreen = ($mdMedia('gt-lg') || $mdMedia('xl'))  && $scope.customFullscreen;
                    $mdDialog.show({
                        controller: DialogController,
                        templateUrl:pathContent,
                        parent: angular.element(document.body),
                        targetEvent: ev,
                        clickOutsideToClose:false,
                        fullscreen: useFullScreen
                    });
                };

                function DialogController($scope, $mdDialog) {
                    $scope.hide = function() {
                        $mdDialog.hide();
                    };
                    $scope.cancel = function() {
                        $mdDialog.cancel();
                    };
                    $scope.answer = function(answer) {
                        $mdDialog.hide(answer);
                    };
                };
            }
})();