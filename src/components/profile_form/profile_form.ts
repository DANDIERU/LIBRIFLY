import { navigate } from "../../store/actions";
import { dispatch } from "../../store/index";
import { screens } from "../../types/navigation";

export class profileForm extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
      this.render();
    }

    render() {
      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = ``;

        const link = this.ownerDocument.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "/src/components/profile_form/profile_form.css");
        this.shadowRoot?.appendChild(link);

        const profileForm = document.createElement('div');
        profileForm.classList.add('profile-form');
        this.shadowRoot.appendChild(profileForm);

        // Crear campos de entrada y etiquetas
        const emailLabel = document.createElement('label');
        emailLabel.textContent = 'Email Address:';
        profileForm.appendChild(emailLabel);

        const emailInput = document.createElement('input');
        emailInput.setAttribute('type', 'text');
        emailInput.setAttribute('placeholder', 'Enter your email address');
        profileForm.appendChild(emailInput);

        const passwordLabel = document.createElement('label');
        passwordLabel.textContent = 'Password:';
        profileForm.appendChild(passwordLabel);

        const passwordInput = document.createElement('input');
        passwordInput.setAttribute('type', 'password');
        passwordInput.setAttribute('placeholder', 'Enter your password');
        profileForm.appendChild(passwordInput);

        const imgLabel = document.createElement('label');
        imgLabel.textContent = 'Profile Image:';
        profileForm.appendChild(imgLabel);

        const imgInput = document.createElement('input');
        imgInput.setAttribute('type', 'file');
        profileForm.appendChild(imgInput);

        // Crear botones
        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';
        cancelButton.addEventListener("click", ()=>{
          dispatch(navigate(screens.PROFILE)) })
        profileForm.appendChild(cancelButton);

        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.addEventListener("click", ()=>{
          dispatch(navigate(screens.PROFILE)) })
        profileForm.appendChild(saveButton);



    
      }

    }
  }

  customElements.define('profile-form', profileForm);