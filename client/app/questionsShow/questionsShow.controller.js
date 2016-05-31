'use strict';
(function(){

class QuestionsShowComponent {
  constructor($http, $stateParams) {
  	this.newAnswer = {};
  	this.$http = $http;
  	this.$stateParams = $stateParams;
    this.message = 'Hello';
  }

  $onInit(){
		this.loadQuestions()
  }

  loadQuestions(){
 		this.$http.get('/api/questions/' + this.$stateParams.id)
			.then((response)=>{
				console.log(response.data)
				this.question = response.data;
			}) 	
  }

  submitAnswer(){
  	console.log(this.newAnswer)
  	this.$http.post('/api/questions/' + this.$stateParams.id + '/answers', this.newAnswer)
		  .then((response)=>{
				this.loadQuestions()
				this.newAnswer = {};
		  })
  }
}

angular.module('commenteerApp')
  .component('questionsShow', {
    templateUrl: 'app/questionsShow/questionsShow.html',
    controller: QuestionsShowComponent
  });

})();
