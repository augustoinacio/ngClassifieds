angular.module("ngClassifieds", ['ngMaterial', 'ngMessages', 'ui.router'])
    .config(function ($mdThemingProvider, $stateProvider, $urlRouterProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('orange');

        $stateProvider
            .state('classifieds',{
                url: '/classifieds',
                templateUrl: '../components/classifieds/classifieds.tpl.html',
                controller: 'classifiedsCtrl as vm'
            })  
            .state('classifieds.edit',{
                url: '/edit/:id',
                templateUrl: '../components/edit/classifieds.edit.tpl.html',
                controller: 'editClassifiedsCtrl as vm',
                params :{                    
                    classified : null
                }
            })
            .state('classifieds.new',{
                url: '/new',
                templateUrl: '../components/new/classifieds.new.tpl.html',
                controller: 'newClassifiedsCtrl as vm'
            });

            $urlRouterProvider.otherwise('/classifieds');
            
                   
    });