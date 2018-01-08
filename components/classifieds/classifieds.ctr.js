(function () {
    "use strict";
    angular
        .module('ngClassifieds')
        .controller('classifiedsCtrl', function ($scope, $state, classifiedsFactory, $timeout, $mdSidenav, $mdToast, $mdDialog) {
            var vm = this;

            vm.categories;
            vm.classified;
            vm.classifieds;
            vm.editing;

            vm.deleteClassified = deleteClassified;
            vm.editClassified = editClassified;
            vm.saveClassified = saveClassified;
            vm.toggleSideBar = toggleSideBar;
            
            classifiedsFactory.getClassifieds().then(function (classifieds) {
                vm.classifieds = classifieds.data;
                vm.categories = getCategories(vm.classifieds);
            });
            
            $scope.$on('newClassified', function(event, classified){
                classified.id = vm.classifieds.length + 1 ;
                vm.classifieds.push(classified);
                showToast("Classified Saved!");
            });   
            
            $scope.$on('editSaved', function(event, message){
                showToast(message);
            });

            function toggleSideBar() {
                $state.go('classifieds.new');
            }

            function saveClassified(classified) {
                if (classified) {
                    classified.contact = contact;
                    vm.classifieds.push(classified);
                    vm.classified = {};
                    $mdSidenav('left').toggle();
                    showToast("Classified Saved!");
                }
            }

            function editClassified(classified) {
                $state.go('classifieds.edit', {
                    id: classified.id,
                    classified: classified
                });
            }

            function saveEdit() {
                vm.editing = false;
                vm.classified = {};
                $mdSidenav('left').toggle();
                showToast("Updated item!");
            }

            function deleteClassified(event, classified) {
                var confirm = $mdDialog.confirm()
                    .title('Are you sure you want do delete "' + classified.title + '" ?')
                    .ok('Please do it!')
                    .cancel('No')
                    .targetEvent(event);
                $mdDialog.show(confirm).then(function () {
                    var index = vm.classifieds.indexOf(classified);
                    vm.classifieds.splice(index, 1);
                }, function () {});
                showToast("Deleted");
            }

            function showToast(message) {
                $mdToast.show($mdToast.simple()
                    .content(message)
                    .position('top, right')
                    .hideDelay(3000));
            }

            function getCategories(classifieds) {
                var categories = [];
                angular.forEach(classifieds, function (item) {
                    angular.forEach(item.categories, function (category) {
                        categories.push(category);
                    });
                });
                return _.uniq(categories);
            }
        });
})();