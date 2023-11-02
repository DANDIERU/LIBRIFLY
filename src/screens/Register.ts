import "../components/export";
import { addObserver} from "../store/index";
import { screens } from "../types/navigation";
import { ScreenActions } from "../types/store";
import { appState, dispatch } from "../store/index";


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
      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = `holi`;
      
        const registercontainer = this.ownerDocument.createElement('card-register')
        registercontainer.classList.add('register-container')
        this.shadowRoot?.appendChild(registercontainer)
            }
  
    }
  }
  
  customElements.define("register-app", Register);
  export default Register;