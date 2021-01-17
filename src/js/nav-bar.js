class NavBar extends HTMLElement {

    // Can define constructor arguments if you wish.
    constructor() {
        // If you define a constructor, always call super() first!
        // This is specific to CE and required by the spec.
        super();
        let shadowRoot = this.attachShadow({
            mode: 'open'
        });
        //const style = document.createElement('style');
        //let div = document.createElement('div');
        //div.innerHTML = "<p>Hallo in navbar</p>";
        //shadowRoot.appendChild(style);
        //shadowRoot.appendChild(div);
        console.log("in constructor");
        this.addEventListener('click', e => {
            this.doeIets();
        });

    }


    doeIets() {
        console.log('burp');
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
        //this.updateStyle(this);
        //const myP = document.createElement('p');
        //myP.style.color = "#ccc";
        //myP.innerHTML = "Hallo allemaal";
        ///const linkElem = document.createElement('link');
        //inkElem.setAttribute('rel', 'stylesheet');
        //linkElem.setAttribute('href', 'css/nav-bar.css');
        //this.shadowRoot.appendChild(myP);
    }
}
customElements.define('nav-bar', NavBar);
customElements.whenDefined('nav-bar').then(() => {
    console.log('nav-bar defined');
});

