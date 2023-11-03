export class CardRegister extends HTMLElement {
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
        containerone.appendChild(usernameInput);

        const emailLabel = this.ownerDocument.createElement('h4');
        emailLabel.classList.add('subtitulo');
        emailLabel.textContent = 'Email';
        containerone.appendChild(emailLabel);

        const emailInput = this.ownerDocument.createElement('input');
        emailInput.classList.add('input-info');
        emailInput.type = 'email';
        emailInput.placeholder = 'Enter your email';
        containerone.appendChild(emailInput);

        const passwordLabel = this.ownerDocument.createElement('h4');
        passwordLabel.classList.add('subtitulo');
        passwordLabel.textContent = 'Password';
        containerone.appendChild(passwordLabel);

        const passwordInput = this.ownerDocument.createElement('input');
        passwordInput.classList.add('input-info');
        passwordInput.type = 'password';
        passwordInput.placeholder = 'Enter your password';
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
        containerthree.appendChild(registerButton);

        const registerWithGoogleButton = this.ownerDocument.createElement('button');
        registerWithGoogleButton.textContent = 'Register with Google';
        containerthree.appendChild(registerWithGoogleButton);
    
      }

    }
  }

  customElements.define('card-register', CardRegister);