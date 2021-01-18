class NavBarTest extends HTMLElement {

    // Can define constructor arguments if you wish.
    constructor() {
        // If you define a constructor, always call super() first!
        // This is specific to CE and required by the spec.
        super();
        
        //const style = document.createElement('style');
        //let div = document.createElement('div');
        //div.innerHTML = "Hallo in brand";
        //shadowRoot.appendChild(style);
        let template = document.getElementById('nav-bar-test');
        let templateContent = template.content;
        console.log(templateContent);
        const shadowRoot = this.attachShadow({
            mode: 'open'
        }).appendChild(templateContent.cloneNode(true));

        console.log("in constructor");
        this.addEventListener('click', e => {
            this.doeIets(this);
        });

    }




    doeIets(t) {
        console.log(t);
    }

    attributeChangedCallback() {
        console.log("attribute changed");
    }

    connectedCallback() {
        console.log("connectecallback in nav-bar-test aangeroepen");
        // document.querySelectorAll("nav-bar-test > li").forEach(e => addEventListener('click', e => {
        //     this.doeIets(e.textContent);
        // }));
        document.querySelectorAll("nav-bar-test > li").forEach(e => console.log(e.textContent));

    }
}
customElements.define('nav-bar-test', NavBarTest);
customElements.whenDefined('nav-bar-test').then(() => {
    console.log("nav-bar-test defined")
})