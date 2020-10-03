import '../css/dropdown.css';

class Dropdown {
    constructor(container) {
        this.container = container;
        this.targetButton = container.querySelector('.trigger');
        this.targetContent = container.querySelector('.content');

    };
    init() {
        this.targetButton.addEventListener("click", () => {
            this.targetButton.classList.toggle("active");
            this.targetContent.classList.toggle("active");
        });
    }

}

export { Dropdown as default };

// JS
// const targetButton = document.querySelectorAll('.trigger');

// targetButton.forEach(target =>{
//     target.addEventListener("click", (e)=>{
//         e.target.nextElementSibling.classList.toggle("block");
// });
// })