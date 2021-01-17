customElements.define('my-test',
  class extends HTMLElement {
    constructor() {
      super();

      const template = document.getElementById('my-test');
      const templateContent = template.content;

      this.attachShadow({mode: 'open'}).appendChild(
        templateContent.cloneNode(true)
      );
    }
  }
);

const slottedSpan = document.querySelector('my-test style');
