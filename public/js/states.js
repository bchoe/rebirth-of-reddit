(function(window){

  window.App = window.App || {};

let container = document.getElementById('container');

  class MyBoards {

    constructor(){

      this.myBoards = [];
      this.ready = null;
      App.utils.Get('https://www.reddit.com/r/memes/.json', data => {
        const parsedBoardData = JSON.parse(data);
        this.myBoards = parsedBoardData.data.children;

        this.render(this.ready);
      });
    }

    rendered(callback){
      this.ready = callback;
    }

    render(readyFunc){

      let view = container;

      const items = this.myBoards.map(myBoard => {
        let item = document.createElement('div');
        let lineBreak = document.createElement('p');
        let header = document.createElement('H1');
        let title = document.createTextNode(myBoard.data.title);
        let image = document.createElement('img');
        let author = document.createTextNode(myBoard.data.author);
        let link = document.createElement('a');

        link.setAttribute('href', 'http://reddit.com' + myBoard.data.permalink);
        link.setAttribute('target', '_blank');
        link.appendChild(header);
        image.src = myBoard.data.thumbnail;
        image.style.height = '200px';
        image.style.width = '300px';
        header.appendChild(title);

        item.className = 'reddit';
        item.appendChild(image);
        item.appendChild(lineBreak);
        item.appendChild(link);
        item.appendChild(lineBreak);
        item.appendChild(author);
        return item;

      });

      items.forEach(view.appendChild.bind(view));
         readyFunc(view);
    }

  }

    class random {

    constructor(){

      this.myBoards = [];
      this.ready = null;
      App.utils.Get('https://www.reddit.com/r/motorcycles/.json', data => {
        const parsedBoardData = JSON.parse(data);
        this.myBoards = parsedBoardData.data.children;

        this.render(this.ready);
      });
    }

    rendered(callback){
      this.ready = callback;
    }

    render(readyFunc){

      let view = container;

      const items = this.myBoards.map(myBoard => {
        let item = document.createElement('div');
        let lineBreak = document.createElement('p');
        let header = document.createElement('H1');
        let title = document.createTextNode(myBoard.data.title);
        let image = document.createElement('img');
        let author = document.createTextNode(myBoard.data.author);
        let link = document.createElement('a');

        link.setAttribute('href', 'http://reddit.com' + myBoard.data.permalink);
        link.setAttribute('target', '_blank');
        link.appendChild(header);
        image.src = myBoard.data.thumbnail;
        image.style.height = '200px';
        image.style.width = '300px';
        header.appendChild(title);

        item.className = 'reddit';
        item.appendChild(image);
        item.appendChild(lineBreak);
        item.appendChild(link);
        item.appendChild(lineBreak);
        item.appendChild(author);
        return item;

      });

      items.forEach(view.appendChild.bind(view));
         readyFunc(view);
    }

  }

  // class random {
  //   //prepare the data
  //   constructor(){
  //     this.random = [];
  //     this.ready = null;

  //     App.utils.Get('https://www.reddit.com/r/techsupportgore.json', (data) =>{
  //       //console.log('data', data);
  //       const parsedrandomData = JSON.parse(data);
  //       //console.log('parsedPeopleData',parsedPeopleData);
  //       this.random = parsedrandomData.results;
  //       //this.people = data.results;
  //       this.render(this.ready);
  //     });
  //   }

  //   // return a single dom element to be added to the view
  //  /* rendered(callback){
  //     this.ready = callback;
  //   }*/

  //   render(readyFunc){
  //     const view = document.createElement('div');
  //     const list = document.createElement('ul');

  //     const items = this.random.map(random => {
  //       let item = document.createElement('li');
  //       item.innerHTML = random.name;
  //       return item;
  //     });

  //     items.forEach( list.appendChild.bind(list) );
  //     view.appendChild(list);

  //     readyFunc(view);
  //   }

  // }

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