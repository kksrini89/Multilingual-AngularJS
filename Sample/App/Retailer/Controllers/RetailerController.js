//(function () {
//    angular.module('MultilingualApp').controller('RetailerController', ['$scope', '$translatePartialLoader', '$translate', function ($scope, $translatePartialLoader, $translate) {
//        $translatePartialLoader.addPart('Retailer');
//        var isPartAvailable = $translatePartialLoader.isPartAvailable('Retailer');
//        if (isPartAvailable) {
//            $translate('Main_RetailerContent').then(function (translatedValue) {
//                $scope.content = translatedValue;
//                console.log($scope.content);
//            });
//        }
//    }]);
//})();
(function () {
    angular.module('MultilingualApp').controller('RetailerController', ['$rootScope', '$translatePartialLoader', '$translate', function ($rootScope, $translatePartialLoader, $translate) {
        $translatePartialLoader.addPart('Retailer');
        var isPartAvailable = $translatePartialLoader.isPartAvailable('Main');
        if (isPartAvailable) {
            $translate('Main_RetailerHeading').then(function (translatedValue) {
                $rootScope.PageSubTitle = translatedValue;
                console.log($rootScope.PageSubTitle);
            });
        }
    }]);
})();