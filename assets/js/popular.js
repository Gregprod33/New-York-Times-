

const getApi = () => {

    fetch("https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=VefOabv7aaAcANxaq5BF06ebhqaWERS8")
        
    .then(response => response.json()) 
    .then(data => {
    
      const articles = data.results;
      for(let i = 0; i < articles.length; i++) {
               
        var squelette = document.createElement("div");
        squelette.classList.add("col-md-6", "col-lg-4", "col-xl-3", "d-flex", "justify-content-center", "align-self-start" )
        
        if (articles[i].media[0]["media-metadata"] != null) {

            squelette.innerHTML =
            `
             <div class="card">
              <div class="imgBx">
                <img src=${articles[i].media[0]["media-metadata"][2].url} class="card-img-top" alt="article image">
              </div>
              <div class="card-body">
                <p class="card-text fw-light fst-italic date"><i>Date: ${articles[i].published_date}</i></p>
                <p class="card-text fw-light fst-italic" >Type: <i>${articles[i].section}</i></p>
                <p class="card-title text-secondary"><b>${articles[i].title}</b></p>
                <p class="card-text">${articles[i].abstract}</p>
                <a href=${articles[i].url} class="btn btn-secondary"  target="_blank">Link</a> 
              </div>
            </div>  `
          returnApi.append(squelette);

        }
        
        
    
    
       } 
    
    
      })
      
     }
    
    
    getApi();
    
    