import * as components from "../components/export";
import { addObserver, appState } from "../store/index";
import { screens } from "../types/navigation";

class Register extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      addObserver(this);
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      const registercontainer = this.ownerDocument.createElement("card-register")
      registercontainer.classList.add('register-container')
      this.shadowRoot?.appendChild(registercontainer)
    }
  }
  
  customElements.define("register", Register);
  export default Register;