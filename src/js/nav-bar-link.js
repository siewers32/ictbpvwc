class NavBarLink extends HTMLElement {

    // Can define constructor arguments if you wish.
    constructor() {
        // If you define a constructor, always call super() first!
        // This is specific to CE and required by the spec.
        super();
        let shadowRoot = this.attachShadow({
            mode: 'open'
        });
        //const style = document.createElement('style');
        let div = document.createElement('div');
        div.innerHTML = "Hallo in linkje";
        //shadowRoot.appendChild(style);
        shadowRoot.appendChild(div);
        console.log("in constructor");
        this.addEventListener('click', e => {
            this.doeIets();
        });

    }


    doeIets() {
        console.log('je hebt een link geklikt');
    }

    // updateStyle(elem) {
    //     console.log("style update!")
    //     const shadow = elem.shadowRoot;
    //     shadow.querySelector('style').textContent = `
    //     div {
    //         width:100px;
    //         height:100px;
    //         border: 1px solid black;
    //     }`
    //     console.log(elem.div);
    // }

    attributeChangedCallback() {
        console.log("attribute changed");
    }

    
    connectedCallback() {
        console.log("connectecallback aangeroepen");
    }
}
customElements.define('nav-bar-link', NavBarLink);
customElements.whenDefined('nav-bar-link').then(() => {
    console.log("nav-bar-link defined")
    customElements.define('nav-bar', NavBar);
})



