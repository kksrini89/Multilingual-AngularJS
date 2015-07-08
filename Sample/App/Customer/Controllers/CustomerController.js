//(function () {
//    angular.module('MultilingualApp').controller('CustomerController', ['$scope', '$translatePartialLoader', '$translate', function ($scope, $translatePartialLoader, $translate) {
//        $translatePartialLoader.addPart('Customer');
//        var isPartAvailable = $translatePartialLoader.isPartAvailable('Customer');
//        if (isPartAvailable) {
//            $translate('Main_CustomerContent').then(function (data) {
//                $scope.content = data;
//            });
//        }
//    }]);
//})();
(function () {
    angular.module('MultilingualApp').controller('CustomerController', ['$rootScope', '$translatePartialLoader', '$translate', function ($rootScope, $translatePartialLoader, $translate) {
        $translatePartialLoader.addPart('Customer');
        var isPartAvailable = $translatePartialLoader.isPartAvailable('Main');
        if (isPartAvailable) {
            $translate('Main_CustomerHeading').then(function (data) {
                $rootScope.PageSubTitle = data;
                console.log($rootScope.PageSubTitle);
            });
        }
    }]);
})();