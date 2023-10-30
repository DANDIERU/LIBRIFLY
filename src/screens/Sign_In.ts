class SignIn extends HTMLElement {
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
  
  customElements.define("sign-in", SignIn);
  export default SignIn;