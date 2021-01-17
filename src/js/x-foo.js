let xFooTemplate = document.createElement('template');
xFooTemplate.innerHTML = `    
<style>
    p {color:blue;}
</style>
<p>blaberdie bla bla</p>
`;


class XFoo extends HTMLElement {

    // Can define constructor arguments if you wish.
    constructor() {
        // If you define a constructor, always call super() first!
        // This is specific to CE and required by the spec.
        super();
        let shadowRoot = this.attachShadow({
            mode: 'open'
        });
        shadowRoot.appendChild(xFooTemplate.content.cloneNode(true));
        this.addEventListener('click', e => {
            this.doeIets();
        });
    }

    doeIets() {
        console.log('burp');
    }

    connectedCallback() {
    this.innerHTML = "<b>I'm an x-foo!</b>";
    }
}
customElements.define('x-foo', XFoo);
customElements.whenDefined('x-foo').then(() => {
    console.log('x-foo defined');
});