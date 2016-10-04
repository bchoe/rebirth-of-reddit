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

/*        console.log('parsedBoardData: ',parsedBoardData);
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
        this.mypic4 = parsedBoardData.data.children[4].data.thumbnail;*/



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
        item.appendChild(link);
        item.appendChild(lineBreak);
        item.appendChild(image);
        item.appendChild(lineBreak);
        item.appendChild(author);
        return item;

      });

      items.forEach(view.appendChild.bind(view));
         readyFunc(view);


    /*  const view = document.createElement('div');
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

        view.appendChild(list);*/


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