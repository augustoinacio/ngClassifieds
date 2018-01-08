(function(){
    "use strict";
    angular.module("ngClassifieds")
    .factory("classifiedsFactory", function($http){
        return {
            getClassifieds : getClassifieds
        }

        function getClassifieds(){
            return $http.get('../data/classifieds.json');
        }
        
    })
})();   