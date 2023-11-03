class GenreDetails extends HTMLElement {
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
  
  customElements.define("genre-details", GenreDetails);
  export default GenreDetails;