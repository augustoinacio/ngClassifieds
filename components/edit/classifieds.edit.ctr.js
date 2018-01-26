(function () {
    "use strict";
    angular.module('ngClassifieds')
        .controller('editClassifiedsCtrl', function ($state, $scope, $mdSidenav, $mdDialog, $timeout, classifiedsFactory) {
            var vm = this;

            vm.closeSidebar = closeSidebar;
            vm.saveEdit = saveEdit;
            vm.classified = $state.params.classified;

            $scope.$watch('vm.sidenavOpen', function (sidenav) {
                if (sidenav === false) {
                    $mdSidenav('left').close().then(function () {
                        $state.go('classifieds');
                    });
                }
            });

            $timeout(function () {
                $mdSidenav('left').open();
            });

            $scope.$watch('sidenavOpen', function (sidenavOpen) {
                if (sidenavOpen === false) {
                    $mdSidenav('left')
                        .close()
                        .then(function () {
                            $state.go('classifieds');
                        });
                }
            });

            function closeSidebar() {
                vm.classified = {};
                vm.sidenavOpen = false;
            }

            function saveEdit() {
                vm.sidenavOpen = false;
                $scope.$emit('editSaved', 'Edit Saved!');
            }
        });
})();