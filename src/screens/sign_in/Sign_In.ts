import "../../components/export";
import { addObserver} from "../../store/index";
import { screens } from "../../types/navigation";
import { ScreenActions } from "../../types/store";
import { appState, dispatch } from "../../store/index";

class SignIn extends HTMLElement {
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
        link.setAttribute("href", "/src/screens/sign_in/sign_in.css");
        this.shadowRoot?.appendChild(link);
      
        const signInpage = this.ownerDocument.createElement('section');
        signInpage.classList.add('signin-page');
        this.shadowRoot?.appendChild(signInpage);

        const signincard = this.ownerDocument.createElement('section');
        signincard.classList.add('signin-card');
        signInpage.appendChild(signincard);

        const signincontainer = this.ownerDocument.createElement('card-signin');
        signincontainer.classList.add('signin-container');
        signincard.appendChild(signincontainer);

        const imgcontainer = this.ownerDocument.createElement('img');
        imgcontainer.classList.add('img-png');
        imgcontainer.src = '/src/images/signin.png'
        signInpage.appendChild(imgcontainer);
      }
    }
  }
  
  customElements.define("sign-in", SignIn);
  export default SignIn;