//instantiate states when user requests the state

(function(window){

  window.App = window.App || {};

  //map 'routes' to 'states'

  class Router {
    constructor(containerId){
      this.container = document.getElementById(containerId);
    }
    //navigate function that takes in a 'route' and renders to the container

    navigate(route){
      let state = null;
      switch(route){
        case'myBoards':
          state = new App.states.MyBoards();
          break;
        case'random':
          state = new App.states.random();
          break;
        case'getTheApp':
          state = new App.states.getTheApp();
          break;
      }
      //wait for state to be rendered
      //then, append the element to the view

      //readyFunc function states.js an element of view
      //this.container.innerHTML = '';
      state.rendered = (element) =>{
        //this.container.innerHTML = '';
        console.log(element);
        this.container.appendChild(element);

      };
    }
  }

  window.App.Router = new Router('container');

}(window));