(function(window){
  //namespace our App
  window.App = window.App || {};

  //each state will prepare the data to be rendered
  //then have a function that returns the new state dom tree

  class MyBoards {
      //prepare the data
    constructor(){
        //execute an xhr request to http://swapi.co/api.people endpoint
      this.myBoards = [];
      this.ready = null;
      App.utils.Get('https://www.reddit.com/r/bicycles.json', data => {
        const parsedBoardData = JSON.parse(data);

          //this.myBoards = parsedmyBoardsData.results;
          //this.people = data.results;
          console.log('parsedBoardData',parsedBoardData);
        this.myBoards = parsedBoardData.data.children[0].data.author;
        console.log(this.myBoards);
        this.render(this.ready);
      });
    }
      // render our data, when data is ready
      // send the final rendered dom element to callback
      //callback : function(element)
    rendered(callback){
      this.ready = callback;
    }

    render(readyFunc){
      const view = document.createElement('div');
      //view.id = 'containerDiv';
      const list = document.createElement('ul');
        let cont1 = document.querySelector('#cont1');
          cont1.innerHTML = this.myBoards;



        view.appendChild(list);

       readyFunc(view);
    }

  }

  class random {
    //prepare the data
    constructor(){
      this.random = [];
      this.ready = null;

      App.utils.Get('https://www.reddit.com/r/bicycles.json', (data) =>{
        //console.log('data', data);
        const parsedrandomData = JSON.parse(data);
        //console.log('parsedPeopleData',parsedPeopleData);
        this.random = parsedrandomData.results;
        //this.people = data.results;
        this.render(this.ready);
      });
    }

    // return a single dom element to be added to the view
   /* rendered(callback){
      this.ready = callback;
    }*/

    render(readyFunc){
      const view = document.createElement('div');
      const list = document.createElement('ul');

      const items = this.random.map(random => {
        let item = document.createElement('li');
        item.innerHTML = random.name;
        return item;
      });

      items.forEach( list.appendChild.bind(list) );
      view.appendChild(list);

      readyFunc(view);
    }

  }

  class getTheApp {
    //prepare the data
    constructor(){
      this.getTheApp = [];
      this.ready = null;
        App.utils.Get('https://www.reddit.com/r/bicycles.json', (data) =>{
          //console.log('data', data);
          const parsedgetTheAppData = JSON.parse(data);
          //console.log('parsedPeopleData',parsedPeopleData);
          this.getTheApp = parsedgetTheAppData.results;
          //this.people = data.results;
          this.render(this.ready);
        });
    }
    // return a single dom element to be added to the view

    /*rendered(callback){
      this.ready = callback;
    }*/

    render(readyFunc){
      const view = document.createElement('div');
      const list = document.createElement('ul');

      const items = this.getTheApp.map(getTheApp => {
        let item = document.createElement('li');
        item.innerHTML = getTheApp.name;
        return item;
      });

      items.forEach( list.appendChild.bind(list) );
      view.appendChild(list);


      readyFunc(view);
    }

  }

  window.App.states = {
    MyBoards,
    random,
    getTheApp
  };


}(window));