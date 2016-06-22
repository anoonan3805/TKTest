angular.module('TKTestQuestions', [])
.service('TKTestQuestionService', ['$http', function ($http){
    var service = this;
}]);

service.all = function () {
        return $http.get('files/questions.json');
 };
 
service.getQuestion = function(questionID)
{
        var results = [];
        questions.forEach(function(question){
            //Search for questions with the specified question ID
            if(question.Question_Number == questionID)
                results.push(question);
        });
        return results;
};