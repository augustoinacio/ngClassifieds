(function () {
    "use strict";
    angular.module('ngClassifieds')
        .controller('editClassifiedsCtrl', function ($scope, $mdSidenav, $state, $mdToast, $timeout) {
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

            function closeSidebar() {
                vm.sidenavOpen = false;
            }

            function saveEdit() {
                $scope.$emit('editSaved', 'Edit Saved!');
                vm.sidenavOpen = false;
            }
        });
})();