class MyReadingList extends HTMLElement {
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
  
  customElements.define("my-readinglist", MyReadingList);
  export default MyReadingList;