let getshow = document.querySelector("#show");
let getserch = document.querySelector("#getnews");

function displayNews() {
  const fetch_data = async () => {
    
    let res = await fetch(`https://newsapi.org/v2/everything?q=${getserch.value}&from=2024-05-13&sortBy=publishedAt&apiKey=41f49ba676bc405f999aaaee8439e976
    `)

    let dis = await res.json()

    getshow.innerHTML = "";
    
    getshow.innerHTML = `<div class="spinner-grow" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>`
    
    setTimeout(() => {
      
      getshow.innerHTML = "";

      
      for (var i = 0; i < dis.articles.length; i++) {
        getshow.innerHTML += `<div class="card p-0" style="width: 20rem;">
             <img src="${dis.articles[i].urlToImage}" class="card-img-top" style="width: 100%;" alt="...">
             <div class="card-body">
               <h5 class="card-title">${dis.articles[i].title}</h5>
               <p class="card-text">${dis.articles[i].content}</p>
               <p class="card-text text-danger">${dis.articles[i].publishedAt}</p>
             </div>`;
      }
    },5000);

  };

  fetch_data();
}

