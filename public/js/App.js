class App {
    constructor() {
        this.loginFrom = document.querySelector(".loginForm > form");
        this.joinBtn = document.querySelectorAll(".form-group > p > a");

        this.init();
    }

    init() {

        this.addEvent();
    }

    addEvent() {
    }
}

window.addEventListener("load", () => {
    let app = new App();
})
