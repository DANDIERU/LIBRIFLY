import "../../components/export";
import { addObserver} from "../../store/index";
import { screens } from "../../types/navigation";
import { ScreenActions } from "../../types/store";
import { appState, dispatch } from "../../store/index";


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
        this.shadowRoot.innerHTML = ``;

        const link = this.ownerDocument.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "/src/screens/register/Register.css");
        this.shadowRoot?.appendChild(link);
      
        const registerpage = this.ownerDocument.createElement('section');
        registerpage.classList.add('register-page');
        this.shadowRoot?.appendChild(registerpage);

        const registercard = this.ownerDocument.createElement('section');
        registercard.classList.add('register-card');
        registerpage.appendChild(registercard);

        const registercontainer = this.ownerDocument.createElement('card-register');
        registercontainer.classList.add('register-container');
        registercard.appendChild(registercontainer);

        const imgcontainer = this.ownerDocument.createElement('img');
        imgcontainer.classList.add('img-png');
        imgcontainer.src = '/src/images/register.png'
        registerpage.appendChild(imgcontainer);

            }
  
    }
  }
  
  customElements.define("register-app", Register);
  export default Register;