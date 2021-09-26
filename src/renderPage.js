export function renderPage(page, container) {
  let pageTemplate = `
      
        <div class="first">
            <!-- desktop nav -->
            <div class="nav">
            <span class="nav__brand">room</span>
            <nav class="nav__group">
                <a href="#" class="nav-link">Home</a>
                <a href="#" class="nav-link">Shop</a>
                <a href="#" class="nav-link">About</a>
                <a href="#" class="nav-link">Contact</a>
            </nav>
            </div>

            <!-- mobile nav -->
            <div class="mobile-nav">
            <button class="toggle"><img src='./images/icon-hamburger.svg'></img></button>
            <span class="mobile-nav__brand">room</span>
            </div>

            <img class="small" src="${page.mobileImage}" alt="">
            <img class="large" src="${page.desktopImage}" alt="">

            <!-- absolute nav-->
            <div class="collapse">
            <button class="collapse__close"><i class="fas fa-times fa-2x"></i></button>
            <nav id="collapse" class="nav-list collapse__nav">
                <a href="#" class="nav-link">Home</a>
                <a href="#" class="nav-link">Shop</a>
                <a href="#" class="nav-link">About</a>
                <a href="#" class="nav-link">Contact</a>
            </nav>
            </div>

            <!-- absolute mobile slider -->
            <div class="slider">
            <button id="prev" class="slider__square"><img class="slider__icon" src="./images/icon-angle-left.svg" alt=""></button>
            <button id="next" class="slider__square"><img class="slider__icon" src="./images/icon-angle-right.svg" alt=""></button>
            </div>
        </div>

        <!-- first group, second item -->
        <div class="second container">
            <h1>${page.title}</h1>

            <p>
            ${page.body}
            </p>

            <button class="c2a">
            <span class="c2a__text">Shop now</span>
            <div class="c2a__icon"><img src="./images/icon-arrow.svg" alt=""></div>
            </button>

            <!-- absolute desktop slider -->
            <div class="slider">
            <button id="prev" class="slider__square"><img class="slider__icon" src="./images/icon-angle-left.svg" alt=""></button>
            <button id="next" class="slider__square"><img class="slider__icon" src="./images/icon-angle-right.svg" alt=""></button>
            </div>
        </div>
       
    `;

  container.innerHTML = pageTemplate;
}
