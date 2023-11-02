class BooksDetails extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
  
    render() {
      if (this.shadowRoot) {
        
      }
    }
  }
  
  customElements.define("book-details", BooksDetails);
  export default BooksDetails;