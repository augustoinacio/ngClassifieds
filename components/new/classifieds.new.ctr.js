(function(){
    "use strict";
    angular.module('ngClassifieds')
    .controller('newClassifiedsCtrl', function($scope, $state, classifiedsFactory, $timeout, $mdSidenav,$mdToast, $mdDialog ){
        var vm = this;
        
        vm.closeSidebar = closeSidebar;
        vm.saveClassified = saveClassified;

        var contact = {
            name: "Augusto",
            phone: "1213132121",
            email: "teste@teste.com"
        }

        $timeout(function(){
            $mdSidenav('left').open();
        });

        $scope.$watch('vm.sidenavOpen', function(sidenav){
            if(sidenav === false){
                $mdSidenav('left').close().then(function(){
                    $state.go('classifieds');
                });
            }
        });

        function closeSidebar(){
            vm.sidenavOpen = false;
        }

        function saveClassified(classified){
            if(classified){
                classified.contact = contact;
                $scope.$emit('newClassified', classified);
                $scope.sidenavOpen = false;
            } 
        }
       
        
    });
})();