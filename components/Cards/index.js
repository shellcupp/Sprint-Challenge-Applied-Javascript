// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
axios.get('https://lambda-times-backend.herokuapp.com/articles').then(response => {
    console.log(response.data);
    const articles = Object.values(response.data.articles)
    console.log(articles)

    articles.forEach(card => {
        console.log(card)
        card.forEach(subject => {
            addArticle.appendChild(createCard(subject))
        })
    })
})
.catch(error => {
    console.log("Error", error)
});
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
function createCard(object) {
    const card = document.createElement('div'),
        headline = document.createElement('div'),
        author = document.createElement('div'),
        imgCont = document.createElement('div'),
        image = document.createElement('img'),
        bySpan = document.createElement('span');

        card.classList.add('card');
        headline.classList.add('headline');
        author.classList.add('author');
        imgCont.classList.add('img-container');

        headline.textContent = object.headline;
        author.textContent = object.authorName;
        image.src = object.authorPhoto;
        bySpan.textContent = `By ${author}`;

        card.appendChild(headline);
        card.appendChild(author);
        author.appendChild(imgCont);
        imgCont.appendChild(image);
        author.appendChild(bySpan)

    return card;
}

const addArticle = document.querySelector('.cards-container')
