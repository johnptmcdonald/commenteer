'use strict';
(function(){

class QuestionsCreateComponent {
  constructor($http, $location) {
  	this.$http = $http;
  	this.$location = $location;
    this.message = 'Hello';
  }

  submit(){
		this.$http.post('/api/questions', this.question)
			.then(()=>{
				this.$location.path('/')
			})
  }
}

angular.module('commenteerApp')
  .component('questionsCreate', {
    templateUrl: 'app/questionsCreate/questionsCreate.html',
    controller: QuestionsCreateComponent
  });

})();
