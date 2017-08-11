/**
 * Created by nick on 22-Mar-17.
 */

    angular.module('modalsController', ['angularModalService'])
        .controller('modalController',
        function ($scope, ModalService) {

            $scope.show = function () {
                ModalService.showModal({
                    templateUrl: 'modal.html',
                    controller: "ModalController"
                }).then(function (modal) {
                    modal.element.modal();
                    modal.close.then(function (result) {
                        $scope.message = "You said " + result;
                    });
                });
            };
        })
    .controller('ModalController', function ($scope, close) {

        $scope.close = function (result) {
            close(result, 500); // close, but give 500ms for bootstrap to animate
        };
    });
