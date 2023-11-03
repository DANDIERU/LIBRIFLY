export enum AttributeAlsoLikeBooks {
  "onlybook" = "onlybook",
}

export class AlsoLikeBooks extends HTMLElement {
  onlybook?: string;

  static get observedAttributes() {
    const attrs: Record<AttributeAlsoLikeBooks, null> = {
      onlybook: null,
    };
    return Object.keys(attrs);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(
    propName: AttributeAlsoLikeBooks,
    oldValue: string | undefined,
    newValue: string | undefined
  ) {
    switch (propName) {
      default:
        this[propName] = newValue;
        break;
    }
  }

  render() {
    if (this.shadowRoot) {
      const link = this.ownerDocument.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute(
        "href",
        "/src/components/AlsoLikeBooks/AlsoLikeBooks.css"
      );

      const onlyBooks = this.ownerDocument.createElement("img");
      onlyBooks.classList.add("only-books");
      onlyBooks.setAttribute("src", `${this.onlybook}`);

      this.shadowRoot.appendChild(link);
      this.shadowRoot.appendChild(onlyBooks);
    }
  }
}

customElements.define("also-card", AlsoLikeBooks);

