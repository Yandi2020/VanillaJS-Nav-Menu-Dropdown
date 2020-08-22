class MenuDropdown{
    constructor(container){
        this.container = container;
        this.trigger = container.querySelector('.trigger');
        this.dropdown = container.querySelector('.dropdown');
    }

    //when click nav-bar, menu open
    initClick(){
        this.trigger.addEventListener('click', () => {
            this.trigger.classList.toggle('active');
            this.dropdown.classList.toggle('active');
        });
    }

    //when hover nav-bar, menu open
    initHover(){
        this.trigger.addEventListener('mouseover', () => {
            this.trigger.classList.add('active');
            this.dropdown.classList.add('active');
        });

        this.container.addEventListener('mouseleave', () => {
            this.trigger.classList.remove('active');
            this.dropdown.classList.remove('active');
        });
    }
}


const dropdowns = document.querySelectorAll('.nav-item');

dropdowns.forEach(dropdown => {
    const instance = new MenuDropdown(dropdown);
    //instance.initClick();
    instance.initHover();
})


 