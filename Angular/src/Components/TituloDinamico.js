class TituloDinamico extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    // base do component
    const componentRoot = document.createElement("h1");
    componentRoot.textContent = ""; // Inicialmente, não há texto definido

    // estilizar o component
    const style = document.createElement("style");
    style.textContent = `
      h1 {
        color: red;
      }
    `;

    // enviar para a shadow
    shadow.appendChild(componentRoot);
    shadow.appendChild(style);
  }

  connectedCallback() {
    const titulo = this.getAttribute("titulo");
    const componentRoot = this.shadowRoot.querySelector("h1");
    componentRoot.textContent = titulo;
  }
}

customElements.define("titulo-dinamico", TituloDinamico);
