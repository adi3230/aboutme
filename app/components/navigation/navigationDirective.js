
angular.module('aboutme')

.directive('navigation', [function() {
        return {
            restrict: 'E',
            templateUrl: 'components/navigation/navigation.html'
        };
    }]);
