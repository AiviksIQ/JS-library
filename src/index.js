import Tooltip from "./js/tooltip";
import Dropdown from "./js/dropdown";
import Tabs from "./js/tabs";
import Snackbar from "./js/snackbar"

const tooltip = document.querySelectorAll(".tooltip");

tooltip.forEach(tool => {
    const instance = new Tooltip(tool)
    instance.init();
});

// Dropdown
const targetDropdowns = document.querySelectorAll('.dropdown');

targetDropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown)
    instance.init();
});

// Tabs

const tabs = new Tabs(document.querySelector('.tabs'))
tabs.init();

// Snackbar

const button = document.querySelector('.snackbar-trigger')

const snackbar = new Snackbar
snackbar.init();

button.addEventListener('click', () => {
    snackbar.show("This is a snackbar :)")
})