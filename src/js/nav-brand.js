class NavBrand extends HTMLElement {

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
        div.innerHTML = "Hallo in brand";
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

    attributeChangedCallback() {
        console.log("attribute changed");
    }
  
    connectedCallback() {
        console.log("connectecallback aangeroepen");
    }
}
customElements.define('nav-brand', NavBrand);



