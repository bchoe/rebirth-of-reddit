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
      App.utils.Get('https://www.reddit.com/r/memes.json', data => {
        const parsedBoardData = JSON.parse(data);

          //this.myBoards = parsedmyBoardsData.results;
          //this.people = data.results;
          console.log('parsedBoardData: ',parsedBoardData);
        this.myAuthor1 = parsedBoardData.data.children[1].data.author;
        this.myAuthor2 = parsedBoardData.data.children[2].data.author;
        this.myAuthor3 = parsedBoardData.data.children[3].data.author;
        this.myAuthor4 = parsedBoardData.data.children[4].data.author;

        this.myTitle1 = parsedBoardData.data.children[1].data.title;
        this.myTitle2 = parsedBoardData.data.children[2].data.title;
        this.myTitle3 = parsedBoardData.data.children[3].data.title;
        this.myTitle4 = parsedBoardData.data.children[4].data.title;

        this.mypic1 = parsedBoardData.data.children[1].data.thumbnail;
        this.mypic2 = parsedBoardData.data.children[2].data.thumbnail;
        this.mypic3 = parsedBoardData.data.children[3].data.thumbnail;
        this.mypic4 = parsedBoardData.data.children[4].data.thumbnail;

        console.log(this);
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
      const list = document.createElement('ul');
          //box 1
        let cont1 = document.querySelector('#cont1');
          cont1.innerHTML = this.myAuthor1;
        let header1 = document.createElement('div');
          header1.innerHTML = this.myTitle1;
          cont1.appendChild(header1);
        let image1 = document.createElement('img');
          image1.src = this.mypic1;
          cont1.appendChild(image1);
          //box 2
        let cont2 = document.querySelector('#cont2');
          cont2.innerHTML = this.myAuthor2;
        let header2 = document.createElement('div');
          header2.innerHTML = this.myTitle2;
          cont2.appendChild(header2);
        let image2 = document.createElement('img');
          image2.src = this.mypic2;
          cont2.appendChild(image2);
          //box 3
        let cont3 = document.querySelector('#cont3');
          cont3.innerHTML = this.myAuthor3;
        let header3 = document.createElement('div');
          header3.innerHTML = this.myTitle3;
          cont3.appendChild(header3);
        let image3 = document.createElement('img');
          image3.src = this.mypic3;
          cont3.appendChild(image3);
          //box 4
        let cont4 = document.querySelector('#cont4');
          cont4.innerHTML = this.myAuthor4;
        let header4 = document.createElement('div');
          header4.innerHTML = this.myTitle3;
          cont4.appendChild(header4);
        let image4 = document.createElement('img');
          image4.src = this.mypic4;
          cont4.appendChild(image4);

        view.appendChild(list);

       readyFunc(view);
    }

  }

  class random {
    //prepare the data
    constructor(){
      this.random = [];
      this.ready = null;

      App.utils.Get('https://www.reddit.com/r/techsupportgore.json', (data) =>{
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