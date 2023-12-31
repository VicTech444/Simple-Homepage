/* Recapitulacion de varios elementos */

const listItems = document.getElementsByClassName(`list-item`);
const colorWhite = document.getElementsByClassName(`element-color-white`);
const sunButton = document.getElementsByClassName(`sun-button`);
const moonButton = document.getElementsByClassName(`moon-button`);

/* Queries Selectors */

const mobileMenu = document.querySelector(`.mobileMenu`);

const lineOne = document.querySelector(`.line-one`);
const lineTwo = document.querySelector(`.line-two`);
const lineThree = document.querySelector(`.line-three`);

const menuContainer = document.querySelector(`.menu-container`);
const colorModeMobile = document.querySelector(`.mobile`);
const colorModeDesktop = document.querySelector(`.desktop`);
const colorModeValue = document.querySelector(`.MODE`)

const logoImage = document.querySelector(`.logo-image`);

/* ID's */

const liveDemoButton = document.getElementById(`live-demo`);

mobileMenu.addEventListener(`click`, showMenu);
function showMenu(e) {

    if (menuContainer.style.display != 'block') {

        mobileMenu.style.position = 'absolute';
        menuContainer.style.display = 'block';

    } else if (menuContainer.style.display = 'block') {

        menuContainer.style.display = 'none';
    }
}

menuContainer.addEventListener('click', () => {
    menuContainer.style.display = 'none';
});

menuContainer.addEventListener('mouseleave', () => {
    menuContainer.style.display = 'none';
});

colorModeMobile.addEventListener(`click`, changeColorMode);
colorModeDesktop.addEventListener(`click`, changeColorMode);

function changeColorMode() {

    if (colorModeValue.getAttribute(`value`) == `light`) {
        logoImage.setAttribute(`src`, `./images/alarado-dark-icon.svg`)

        document.body.style.backgroundColor = `#111729`;
        mobileMenu.style.backgroundColor = `#111729de`;
        lineOne.style.backgroundColor = `#fff`;
        lineTwo.style.backgroundColor = `#fff`;
        lineThree.style.backgroundColor = `#fff`;

        menuContainer.style.backgroundColor = `#111729`;
        liveDemoButton.style.backgroundColor = `#111729`;

        Array.from(colorWhite).forEach(element => {
            element.style.color = `#fff`;
        })

        Array.from(listItems).forEach(element => {
            element.style.color = `#fff`
        })

        Array.from(moonButton).forEach(element => {
            element.setAttribute(`src`, `./images/Moon_fill.svg`)
            element.style.backgroundColor = `#fff`;
        });

        Array.from(sunButton).forEach(element => {
            element.setAttribute(`src`, `./images/Sun_fill_light.svg`)
            element.style.backgroundColor = `#223344`;
        });

        colorModeValue.setAttribute(`value`, `dark`);

    } else if (colorModeValue.getAttribute(`value`) == `dark`) {
        logoImage.setAttribute(`src`, `./images/alarado-icon-homepage.svg`)

        document.body.style.backgroundColor = `#fff`;
        mobileMenu.style.backgroundColor = `#fff`;
        lineOne.style.backgroundColor = `#000`;
        lineTwo.style.backgroundColor = `#000`;
        lineThree.style.backgroundColor = `#000`;

        menuContainer.style.backgroundColor = `#fff`;
        liveDemoButton.style.backgroundColor = `#fff`;

        Array.from(colorWhite).forEach(element => {
            element.style.color = `#223344`;
        })

        Array.from(listItems).forEach(element => {
            element.style.color = `#223344A6`
        })

        Array.from(moonButton).forEach(element => {
            element.setAttribute(`src`, `./images/Moon_fill_light.svg`)
            element.style.backgroundColor = `#223344`;
        });

        Array.from(sunButton).forEach(element => {
            element.setAttribute(`src`, `./images/Sun_fill.svg`)
            element.style.backgroundColor = `#fff`;
        });

        colorModeValue.setAttribute(`value`, `light`);
    }
}