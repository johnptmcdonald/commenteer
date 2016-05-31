'use strict';
(function(){

class QuestionsIndexComponent {
  constructor($http) {
  	this.$http = $http;
    this.message = 'Hello';
  }

  $onInit(){
  	this.$http.get('/api/questions')
  		.then((response)=>{
  			this.questions = response.data;
  			console.log(this.questions)
  		})
  }
}

angular.module('commenteerApp')
  .component('questionsIndex', {
    templateUrl: 'app/questionsIndex/questionsIndex.html',
    controller: QuestionsIndexComponent
  });

})();
