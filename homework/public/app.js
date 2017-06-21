var app = function(){

  var url = 'https://api.punkapi.com/v2/beers'
  var request = new XMLHttpRequest();

  request.open("get", url)

  request.addEventListener('load', function(){
    var jsonString = request.responseText
    var beers = JSON.parse(jsonString)
    populateList(beers)
  }) 

  request.send();
}

var populateList = function(beers){
    console.log('beers', beers)
    beers.forEach(function(beer, index){

    var ul = document.createElement('ul');
    var image = document.createElement('img')

    ul.innerText = beer.name;
    image.src = beer.image_url;
    ul.appendChild(image)
    document.body.appendChild(ul);
    console.log (ul)
  })

  var handleSelectChanged = function(){
    var selectedBeer = beers[this.value]

    var textBox = document.createElement('p')
    document.body.appendChild(textBox)
    
    textBox.innerText = "Name: " + selectedBeer.malt + ", ingredients: " + selectedBeer.malt
   
    var jsonString = JSON.stringify(selectedBeer)
    localStorage.setItem('selectedBeer', jsonString); 
  }

  var select = document.createElement('select');

  beers.forEach(function(beer, index){
    var option = document.createElement('option');
    option.innerText = beer.name;
    option.value = index;
    select.appendChild(option);
    })
  document.body.appendChild(select);
  console.log(select)

  select.addEventListener('change', handleSelectChanged)
  }


window.addEventListener('load', app);