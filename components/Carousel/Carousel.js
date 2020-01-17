/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
function createCarousel(){
  const carousel = document.createElement('div'),
  left = document.createElement('div'),
  img1 = document.createElement('img'),
  img2 = document.createElement('img'),
  img3 = document.createElement('img'),
  img4 = document.createElement('img'),
  right = document.createElement('div');

  carousel.classList.add('carousel');
  left.classList.add('left-button');
  right.classList.add('right-button');

  left.textContent = 'U+2765';
  right.textContent = 'U+2619';
  image1.src = './assets/carousel/mountains.jpeg';
  image2.src = './assets/carousel/computer.jpeg';
  image3.src = './assets/carousel/trees.jpeg';
  image4.src = './assets/carousel/turntable.jpeg';

  carousel.append(left);
  carousel.append(img1);
  carousel.append(img2);
  carousel.append(img3);
  carousel.append(img4);
  carousel.append(right);

  leftBtn.addEventListener('click', event => {

  })
  rightBtn.addEventListener('click', event => {

  })

return carousel;
}

const addCarousel = document.querySelector('.carousel-container');
addCarousel.appendChild(createCarousel());
