// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
let headercont = document.createElement('div'),
datespan = document.createElement('span'),
title = document.createElement('h1'),
tempspan = document.createElement('span');

headercont.classList.add('header');
datespan.classList.add('date');
tempspan.classList.add('temp');

datespan.textContent = 'SMARCH 28, 2019';
title.textContent = 'Lambda Times';
tempspan.textContent = '98°';

return Header;

}

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());