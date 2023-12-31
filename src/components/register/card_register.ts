import { navigate } from "../../store/actions";
import { dispatch } from "../../store/index";
import { screens } from "../../types/navigation";
import firebase from "../../Firebase/firebase";
import { users } from "../../types/user";

const formPost: Omit<users, "id"> = {
  email: "",
  password: "",
  username: "",
};

export class CardRegister extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
      this.render();
    }

    submitForm(){
      firebase.createUser(formPost.email,formPost.password, formPost.username);
  }

  changeEmail(e: any){
        formPost.email = e.target.value;
    }

    changePassword(e:any){
        formPost.password = e.target.value;
    }

    changeUsername(e:any){
        formPost.username = e.target.value;
    }



    render() {
      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = ``;
        const link = this.ownerDocument.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "/src/components/register/card_register.css");
        this.shadowRoot?.appendChild(link);

        const registerForm = this.ownerDocument.createElement('div');
        registerForm.classList.add('register-form');
        this.shadowRoot?.appendChild(registerForm);

        const containerone = this.ownerDocument.createElement('section');
        containerone.classList.add('container-one');
        registerForm.appendChild(containerone);

        const logo = this.ownerDocument.createElement('img');
        logo.classList.add('logo-img');
        logo.src = '/src/images/logo.png';
        logo.alt = 'Logo';
        containerone.appendChild(logo);

        const h2 = this.ownerDocument.createElement('h2');
        h2.textContent = 'Create Account';
        containerone.appendChild(h2);

        const usernameLabel = this.ownerDocument.createElement('h4');
        usernameLabel.classList.add('subtitulo');
        usernameLabel.textContent = 'User Name';
        containerone.appendChild(usernameLabel);

        const usernameInput = this.ownerDocument.createElement('input');
        usernameInput.classList.add('input-info');
        usernameInput.placeholder = 'Enter your user name';
        usernameInput.addEventListener("change", this.changeUsername);
        containerone.appendChild(usernameInput);

        const emailLabel = this.ownerDocument.createElement('h4');
        emailLabel.classList.add('subtitulo');
        emailLabel.textContent = 'Email';
        containerone.appendChild(emailLabel);

        const emailInput = this.ownerDocument.createElement('input');
        emailInput.classList.add('input-info');
        emailInput.type = 'email';
        emailInput.placeholder = 'Enter your email';
        emailInput.addEventListener("change", this.changeEmail);
        containerone.appendChild(emailInput);

        const passwordLabel = this.ownerDocument.createElement('h4');
        passwordLabel.classList.add('subtitulo');
        passwordLabel.textContent = 'Password';
        containerone.appendChild(passwordLabel);

        const passwordInput = this.ownerDocument.createElement('input');
        passwordInput.classList.add('input-info');
        passwordInput.type = 'password';
        passwordInput.placeholder = 'Enter your password';
        passwordInput.addEventListener("change", this.changePassword);

        containerone.appendChild(passwordInput);

        const containertwo = this.ownerDocument.createElement('section');
        containertwo.classList.add('container-two');
        containerone.appendChild(containertwo);

        const termsCheckbox = this.ownerDocument.createElement('input');
        termsCheckbox.classList.add('check-input')
        termsCheckbox.type = 'checkbox';
        termsCheckbox.id = 'termsCheckbox';
        containertwo.appendChild(termsCheckbox);

        const termsLabel = this.ownerDocument.createElement('label');
        termsLabel.classList.add('label-text')
        termsLabel.setAttribute('for', 'termsCheckbox');
        termsLabel.textContent = 'I agree to the terms of service & privacy policy';
        containertwo.appendChild(termsLabel);

        const containerthree = this.ownerDocument.createElement('section');
        containerthree.classList.add('container-three');
        containerone.appendChild(containerthree);

        const registerButton = this.ownerDocument.createElement('button');
        registerButton.textContent = 'Register';
        registerButton.addEventListener("click",this.submitForm);
        containerthree.appendChild(registerButton);

        const signUpLink = document.createElement('a');
        signUpLink.setAttribute('href', '#');
        signUpLink.textContent = "Already have an Account? Sign In";
        signUpLink.addEventListener("click", ()=>{
          dispatch(navigate(screens.SIGN_IN)) })
        containerthree.appendChild(signUpLink)

    
      }

    }
  }

  customElements.define('card-register', CardRegister);