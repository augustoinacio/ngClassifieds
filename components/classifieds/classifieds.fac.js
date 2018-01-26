(function(){
    "use strict";
    angular.module("ngClassifieds")
    .factory("classifiedsFactory", function($http){
        return {
            getClassifieds : getClassifieds,
            getDataRemote : getDataRemote
        }

        function getClassifieds(){
            return $http.get('../data/classifieds.json');
        }

    })
})();   