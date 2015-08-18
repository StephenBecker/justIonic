(function() {
angular.module('controllers')



.controller('FileCtrl', function ($scope, $cordovaFile) {

    $scope.file = {};
    loadFile();
    $scope.editFile = function () {
        alert("edit file");

    };
    $scope.saveFile = function () {
        alert("save file");

    };
    function  loadFile() {
        $scope.file = { name: "User Name", regNumber: 987654321000, thisPhone: 1231231234, affiliations: { fire: { Dispatcher: 1231231234, Member: 321322 }, hospital: { Dispatcher: 2312312341, Member: 321321 } } };
    };

})


}());