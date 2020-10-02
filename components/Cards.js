// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
import axios from 'axios'

axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(res => {
        console.log(res.data.articles)
        res.data.articles.bootstrap.forEach(ele => {
            articleMaker(ele)
            
        })
        res.data.articles.javascript.forEach(ele => {
            articleMaker(ele)
            
        })
        res.data.articles.jquery.forEach(ele => {
            articleMaker(ele)
            
        })
        res.data.articles.node.forEach(ele => {
            articleMaker(ele)
            
        })
        res.data.articles.technology.forEach(ele => {
            articleMaker(ele)
            
        })
    })
    .catch(err => {
        console.log(err)
    })



function articleMaker (dat) {


    const cardDiv = document.createElement('div')
    cardDiv.classList.add('card')

    const headLineDiv = document.createElement('div')
    headLineDiv.classList.add('headline') // add textContent 'headline of article'
    headLineDiv.textContent = dat.headline
    cardDiv.appendChild(headLineDiv)

    const authorDiv = document.createElement('div')
    authorDiv.classList.add('author')
    cardDiv.appendChild(authorDiv)

    const imageDiv = document.createElement('div')
    imageDiv.classList.add('img-container')
    authorDiv.appendChild(imageDiv)

    const authImg = document.createElement('img')
    authImg.src = dat.authorPhoto
    imageDiv.appendChild(authImg)

    const authName = document.createElement('span')
    authName.textContent = dat.authorName
    authorDiv.appendChild(authName)


    const articleCards = document.querySelector('.cards-container')
    articleCards.appendChild(cardDiv)

    // cardDiv.addEventListener('click', () => {
    //     consol.log(//headline of the article)
    // })

    
    return cardDiv
}

// console.log(articleMaker())

