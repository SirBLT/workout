
// first page code for an angular component

component: angular.module('meals')
.component('allRecipes', {
   bindings: {
       eachRecipe: '='
   },
   templateUrl:'./app/components/recipesTemp.html',
   controller: function (){
       this.message = "controllerworking";
     }

});


// second page code for an angular component

recipesTemp.html: <div>start{{$ctrl.eachRecipe.name}}{{$ctrl.message}}end</div>
