class Register extends HTMLElement {
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
  
  customElements.define("register", Register);
  export default Register;