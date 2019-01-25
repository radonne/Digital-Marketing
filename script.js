// Our variables
let inboundURL = "https://newsapi.org/v2/everything?q=%22inbound-marketing%22&language=en&sortBy=relevancy&pageSize=5&apiKey=2f6fac753240433ba067765a89c9dafc"
let contentURL = "https://newsapi.org/v2/everything?q=%22content-marketing%22&language=en&sortBy=relevancy&pageSize=5&apiKey=2f6fac753240433ba067765a89c9dafc"
let automationURL = "https://newsapi.org/v2/everything?q=%22marketing-automation%22&language=en&sortBy=relevancy&pageSize=5&apiKey=2f6fac753240433ba067765a89c9dafc"
let influencerURL = "https://newsapi.org/v2/everything?q=%22influencer-marketing%22&language=en&sortBy=relevancy&pageSize=5&apiKey=2f6fac753240433ba067765a89c9dafc"
let hackingURL = "https://newsapi.org/v2/everything?q=%22growth-hacking%22OR%22growth-hacker%22&language=en&sortBy=relevancy&pageSize=5&apiKey=2f6fac753240433ba067765a89c9dafc"
let soMeURL = "https://newsapi.org/v2/everything?q=%22social-media-marketing%22&language=en&sortBy=relevancy&pageSize=5&apiKey=2f6fac753240433ba067765a89c9dafc"

// Our main function which handles the news items and adds them to the DOM
let inboundNews = (newsArticle) => {
newsArticle.articles.forEach((article) => {

  document.querySelector(".inbound").innerHTML += `
  <div class="articlebox">
  <h3>${article.title.substr(0, 70)}...</h3>
  <p>${article.description.substr(0, 200)}...</p>
  <div class="timereadMore">
      <div class="time">
        <img src="time.png" alt="Publishing date">
        <h6>${moment(article.publishedAt).format("MMMM Do YYYY")}</h6>
      </div>
    <a href=${article.url}>Read more</a>
  </div>
  </div>`
})
}

let contentNews = (newsArticle) => {
newsArticle.articles.forEach((article) => {

  document.querySelector(".content").innerHTML += `
  <div class="articlebox">
  <h3>${article.title.substr(0, 70)}...</h3>
  <p>${article.description.substr(0, 200)}...</p>
  <div class="timereadMore">
      <div class="time">
        <img src="time.png" alt="Publishing date">
        <h6>${moment(article.publishedAt).format("MMMM Do YYYY")}</h6>
      </div>
    <a href=${article.url}>Read more</a>
  </div>
  </div>`
})
}

let automationNews = (newsArticle) => {
newsArticle.articles.forEach((article) => {

  document.querySelector(".automation").innerHTML += `
  <div class="articlebox">
  <h3>${article.title.substr(0, 70)}...</h3>
  <p>${article.description.substr(0, 200)}...</p>
  <div class="timereadMore">
      <div class="time">
        <img src="time.png" alt="Publishing date">
        <h6>${moment(article.publishedAt).format("MMMM Do YYYY")}</h6>
      </div>
    <a href=${article.url}>Read more</a>
  </div>
  </div>`
})
}

let influencerNews = (newsArticle) => {
newsArticle.articles.forEach((article) => {

  document.querySelector(".influencer").innerHTML += `
  <div class="articlebox">
  <h3>${article.title.substr(0, 70)}...</h3>
  <p>${article.description.substr(0, 200)}...</p>
  <div class="timereadMore">
      <div class="time">
        <img src="time.png" alt="Publishing date">
        <h6>${moment(article.publishedAt).format("MMMM Do YYYY")}</h6>
      </div>
    <a href=${article.url}>Read more</a>
  </div>
  </div>`
})
}

let hackingNews = (newsArticle) => {
newsArticle.articles.forEach((article) => {

  document.querySelector(".hacking").innerHTML += `
  <div class="articlebox">
  <h3>${article.title.substr(0, 70)}...</h3>
  <p>${article.description.substr(0, 200)}...</p>
    <div class="timereadMore">
      <div class="time">
        <img src="time.png" alt="Publishing date">
        <h6>${moment(article.publishedAt).format("MMMM Do YYYY")}</h6>
      </div>
    <a href=${article.url}>Read more</a>
  </div>
  </div>`
})
}

let soMeNews = (newsArticle) => {
newsArticle.articles.forEach((article) => {

  document.querySelector(".soMe").innerHTML += `
  <div class="articlebox">
  <h3>${article.title.substr(0, 70)}...</h3>
  <p>${article.description.substr(0, 200)}...</p>
    <div class="timereadMore">
        <div class="time">
          <img src="time.png" alt="Publishing date">
          <h6>${moment(article.publishedAt).format("MMMM Do YYYY")}</h6>
        </div>
      <a href=${article.url}>Read more</a>
    </div>
  </div>`
})
}



// Fetch is a built in function in JavaScript, it gets the data from the API and transforms it into JavaScript objects – JSON data.
// These lines call the API, makes sure we get the response as JSON, and finally passes the result to the function we defined above, receivedNews.
fetch(inboundURL)
  .then(response => response.json())
  .then(inboundNews)

fetch(contentURL)
  .then(response => response.json())
  .then(contentNews)

fetch(automationURL)
  .then(response => response.json())
  .then(automationNews)

fetch(influencerURL)
  .then(response => response.json())
  .then(influencerNews)

fetch(hackingURL)
  .then(response => response.json())
  .then(hackingNews)

fetch(soMeURL)
  .then(response => response.json())
  .then(soMeNews)
