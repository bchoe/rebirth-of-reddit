(function(window){
  window.App = window.App || {};

  //url:string
  //callback: function(data)
  const Get = (url, callback) =>{
    let oReq = new XMLHttpRequest();
    // create new XHR object

    // attach events: 'load', 'error'
    oReq.addEventListener('progress', function(){
    //do nothing for now
    });
    oReq.addEventListener('load', function(){
      callback(this.responseText);
    });
    oReq.addEventListener('error', function(){
      console.log('ERROR Loading data from', url);
    });

    // first arg: METHOD, second arg: URL
    oReq.open('GET', url);
    // HEADERS GO HERE
    oReq.setRequestHeader('Accept', 'application/json');
    //fire off the request
    oReq.send();
  };

  window.App.utils = {
    Get
  };

}(window));

