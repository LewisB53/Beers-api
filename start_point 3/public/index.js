var app = function(){


  var url = 'https://restcountries.eu/rest/v2'
  var request = new XMLHttpRequest();

  request.open("get", url) //sets the deets cuz i iz kewl

  request.addEventListener('load', function(){
    var jsonString = request.responseText
    // console.log("got the data", request.responseText)
    var countries = JSON.parse(jsonString)
    populateList(countries)
  }) //EventListener is used to populate the data once its retrieved the program keeps running past it

  request.send(); // gos get the data

}

var populateList = function(countries){
  // console.log('countries', countries)
  // var ul = document.getElementById('country-list')

  var handleSelectChanged = function(){
   //console.dir(this)
    var selectedCountry = countries[this.value]

    var textBox = document.createElement('p')
    document.body.appendChild(textBox)
    
    textBox.innerText = "Name: " + selectedCountry.name + ", Population: " + selectedCountry.population + " Capital city: " + selectedCountry.capital;
   
   var jsonString = JSON.stringify(selectedCountry)
   localStorage.setItem('selectedCountry', jsonString); 
  }

  var select = document.createElement('select');

  countries.forEach(function(country, index){
    var option = document.createElement('option');
    option.innerText = country.name;
    option.value = index;
    select.appendChild(option);
    })
  document.body.appendChild(select);
  console.log(select)

  select.addEventListener('change', handleSelectChanged)
  }


// var textBox = document.createElement('p')
// document.body.appendChild(textBox)
// textBox.innerText = selectedCountry.name



window.addEventListener('load', app);