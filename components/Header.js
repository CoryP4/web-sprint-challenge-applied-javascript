// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const headDiv = document.createElement('div')
    headDiv.classList.add('header')
    
    const headSpan = document.createElement('span')
    headSpan.classList.add('date')
    headSpan.textContent = 'MARCH 28, 2020'
    headDiv.appendChild(headSpan)

    const headH1 = document.createElement('h1')
    headH1.textContent = 'Lambda Times'
    headDiv.appendChild(headH1)

    const headSpan1 = document.createElement('span')
    headSpan1.classList.add('temp')
    headSpan1.textContent = '98°'
    headDiv.appendChild(headSpan1)

    return headDiv
}

const Heading = document.querySelector('.header-container')
Heading.appendChild(Header())

// console.log(Header())