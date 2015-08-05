angular.module('search', [])
    .controller('searchCtrl', SearchCtrl)

function SearchCtrl($scope) {
    $scope.props = props;
}