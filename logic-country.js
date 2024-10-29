const search=async()=>{
  
    console.log(countryName.value);
    const response=await fetch(`https://restcountries.com/v3.1/name/${countryName.value}?fullText=true`)
  
    // console.log(response);
    response.json().then((data)=>{
        console.log(data);
        //common 
        let common=data[0].name.common
        console.log(common);
        //offical 
        let official=data[0].name.official
        console.log(official);
        //currencies-name-symbol
  
        for(var curr in data[0].currencies){
            var currencyname=data[0].currencies[curr].name
            var symbol=data[0].currencies[curr].symbol
        }
        console.log(currencyname,symbol);
        
        //capital
        let capital=data[0].capital
        console.log(capital);
        //languages
        let nationalLang=[]
        for(var lang in data[0].languages){
            nationalLang.push(data[0].languages[lang])
        }
        console.log(nationalLang);
        
  
        //borders
        let borders=data[0].borders
        console.log(borders);
        //area
        let area=data[0].area
        console.log(area);
        //maps-googlemaps
        let map=data[0].maps.googleMaps
        console.log(map);
        //population
        let population=data[0].population
        console.log(population);
        //timezones
        let Timezone=data[0].timezones
        console.log(Timezone);
        //continent
        let continents=data[0].continents
        console.log(continents);
        //flags-png
        
  
        let flags=data[0].flags.png
        console.log(flags);
        
         result.innerHTML=
        `
          
                
                  <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src=${flags} class="img-fluid rounded-start" alt="...">
                        <h5 class="card-title text-center mt-3">${official}</h5>
                        <ul class="list-group list-group-flush border">
                          <li class="list-group-item">capital: ${capital}</li>
                          </ul>
                       
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">                        
                          <ul class="list-group list-group-flush border">
                           <li class="list-group-item">common: ${common}</li>
                            <li class="list-group-item">Continent: ${continents}</li>
                            <li class="list-group-item">Population: ${population}</li>
                            <li class="list-group-item">Area: ${area}</li>
                            <li class="list-group-item">Time zone: ${Timezone}</li>
                            <li class="list-group-item">Borders: ${borders}</li>
                            <li class="list-group-item">National Language: ${nationalLang}</li>
                            <li class="list-group-item">currencies: ${symbol}${currencyname}</li>
                            <li class="list-group-item">google map:<a href="${map}" target="_blank">${map}</a></li>
                      
  
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                `
          
        
        
        
    })
    
    
    
    
  }