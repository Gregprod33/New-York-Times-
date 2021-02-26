

const getApi = () => {

fetch("https://api.nytimes.com/svc/news/v3/content/nyt/all.json?api-key=UsgAbfRs27wIEecUu2mX5KKyhF67z8NA")
	
.then(response => response.json()) 
.then(data => {

  const articles = data.results;
  for(let i = 0; i < 100; i++) {
           
    var squelette = document.createElement("div");
    squelette.classList.add("col-3", "d-flex", "justify-content-center", "align-self-start" )
    const date = articles[i].updated_date;
    
    const newDate = date.replace(/T\d+[:]\d+[:]\d+[-]/, ' ');

    if (articles[i].multimedia != null) {

      squelette.innerHTML =
      `
       <div class="card">
        <div class="imgBx">
          <img src=${articles[i].multimedia[2].url} class="card-img-top" alt="article image">
        </div>
        <div class="card-body">
          <p class="card-text fw-light fst-italic date"><i>Date: ${newDate}</i></p>
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

