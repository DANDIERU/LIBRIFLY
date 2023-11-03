export enum AttributeSearch {
  "search_icon" = "search_icon",
}

export class InputSearch extends HTMLElement {
  search_icon?: string = "";

  static get observedAttributes() {
    const attrs: Record<AttributeSearch, null> = {
      search_icon: null,
    };
    return Object.keys(attrs);
  }

  attributeChangedCallback(
    propName: AttributeSearch,
    _: unknown,
    newValue: string
  ) {
    switch (propName) {
      default:
        this[propName] = newValue;
        break;
    }
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) {
      const link = this.ownerDocument.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute(
        "href",
        "../src/components/InputSearch/InputSearch.css"
      );
      this.shadowRoot.appendChild(link);

      const divSearch = this.ownerDocument.createElement("div");
      divSearch.classList.add("div-search");

      const buttonSelect = this.ownerDocument.createElement("select");
        buttonSelect.classList.add("button-select");
        buttonSelect.innerHTML = `
        <option value="">Genre</option>
        <option value="action">Action</option>
        <option value="terror">Terror</option>
        <option value="fiction">Fiction</option>
        <option value="horror">Horror</option>
        `;

      const navSearch = this.ownerDocument.createElement("div");
      navSearch.classList.add("search-container");

      const searhContainer = this.ownerDocument.createElement("div");
      searhContainer.classList.add("search");

      const inputElement = this.ownerDocument.createElement("input");
      inputElement.setAttribute("type", "text");

      const imgElement = this.ownerDocument.createElement("img");
      imgElement.setAttribute("src", `${this.search_icon}`);

      divSearch.appendChild(searhContainer);
      divSearch.appendChild(buttonSelect);

      searhContainer.appendChild(navSearch);
      navSearch.appendChild(inputElement);
      navSearch.appendChild(imgElement);

      this.shadowRoot.appendChild(divSearch);
    }
  }
}

customElements.define("search-component", InputSearch);
