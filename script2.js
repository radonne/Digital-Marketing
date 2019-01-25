// Övning 2

let clickCount = 0

let incrementCount = () => {
clickCount = clickCount + 1
document.querySelector(".output").innerHTML = clickCount

}

document.querySelector(".myButton").onclick = incrementCount


let fruits = ["Apple", "Banana", "Kiwi", "Orange", "Lemon"]

console.log(fruits)

fruits.forEach((fruitName) => {
  console.log(fruitName)
})


let newsTitles = ["Hotet mot handbollens framtid i Stockholm", "jo, placebo funkar – även när man vet att det är fejk", "Vilken version av dig umgås dina vänner med i kväll?"]

newsTitles.push("New title!")
newsTitles.forEach((title) => {
  console.log(title)
})

let articlesDiv = document.querySelector(".output")

newsTitles.forEach(title => {
  articlesDiv.innerHTML += `<h2>${title}</h2>`
})


document.querySelector(".output2").innerHTML = fruits.toString();

document.querySelector(".output3").innerHTML = fruits.join(" * ");

var fruits3 = ["Banana", "Orange", "Apple", "Mango"];
document.querySelector(".demo1").innerHTML = fruits3;
document.querySelector(".demo2").innerHTML = fruits3.pop();
document.querySelector(".demo3").innerHTML = fruits3;


let newsArticle = [{
    title: "Marketing news",
    description: "The latest news within marketing",
    image: ""
  },
  {
    title: "Latest Marketing news",
    description: "The latest news within marketing bla bla",
    image: ""
  }

]


console.log(newsArticle[1].title)

newsArticle.forEach((article) => {
console.log(article.title)
console.log(article.description)
})


newsArticle.forEach((article) => {

  document.querySelector(".demo4").innerHTML += `<h2>${article.title}</h2>`
  document.querySelector(".demo4").innerHTML += `<h3>${article.description}</h3>`

console.log(article.title)
console.log(article.description)

})


//Alternativt:

newsArticle.forEach((article) => {

  document.querySelector(".demo4").innerHTML += `
  <div class="article">
  <h2>${article.title}</h2>
  <h3>${article.description}</h3>
  <img src="${article.image}"/>
  </div>
  `


})
