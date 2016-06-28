/*global angular*/
angular.module('starter.controllers')
.controller('ResultsCtrl', ['$scope', 'TKAnswersService', '$ionicHistory', '$state', 'TKResultsButtonService',
function($scope, TKAnswersService, $ionicHistory, $state, TKResultsButtonService) {

$scope.shouldShowButton = TKResultsButtonService.getShouldShowMenuButton();

$scope.menuButtonTapped = function()
    {
        $ionicHistory.nextViewOptions({
            historyRoot: true,
            disableBack: true
        });
        $state.go('lobby');
    }; 
    
    $scope.labels = ["Competing", "Collaborating", "Compromising", "Avoiding", "Accommodating"];
    var answersInfo = TKAnswersService.getAnswers();
    
    function returnPercentage (value)
{
    return (value/12)*100;
}

$scope.data = [
        [
        returnPercentage(answersInfo["competing"]), 
        returnPercentage(answersInfo["collaborating"]),
        returnPercentage(answersInfo["compromising"]), 
        returnPercentage(answersInfo["avoiding"]), 
        returnPercentage(answersInfo["accommodating"])
        ]
    ];

$scope.options = {
        scaleIntegersOnly: true,
        animation: false,
        responsive:true,
        maintainAspectRatio: false,
        scaleOverride: true,
        scaleSteps: 5,
        scaleStepWidth: 20,
        scaleStartValue: 0,
        scaleLabel: "<%=value%>"+"%",
        tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value.toFixed(0) %>"+"%",
    };
    
    $scope.colours = [{
       fillColor: "rgba(127, 63, 191, 0.3)",
       strokeColor: "rgba(25, 12, 38, 0.92)",
       pointColor: "rgba(25, 12, 38, 0.92)",
       pointStrokeColor: "rgb(54, 10, 96)",
       pointHighlightFill: "rgb(54, 10, 96)",
       pointHighlightStroke: "rgba(151,187,205,0.8)"
}];
    
}]);