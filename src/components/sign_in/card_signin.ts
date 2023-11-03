export class CardSignIn extends HTMLElement {
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
        link.setAttribute("href", "/src/components/sign_in/card_signin.css");
        this.shadowRoot?.appendChild(link);

        const signinForm = this.ownerDocument.createElement('div');
        signinForm.classList.add('signin-form');
        this.shadowRoot?.appendChild(signinForm);

        const containerone = this.ownerDocument.createElement('section');
        containerone.classList.add('container-one');
        signinForm.appendChild(containerone);

        const logo = this.ownerDocument.createElement('img');
        logo.classList.add('logo-img');
        logo.src = '/src/images/logo.png';
        logo.alt = 'Logo';
        containerone.appendChild(logo);

        const h2 = this.ownerDocument.createElement('h2');
        h2.textContent = 'WELCOME BACK';
        containerone.appendChild(h2);

        const subtexte = this.ownerDocument.createElement('h3')
        subtexte.textContent = 'Welcome back! Please sign in to your account.'
        containerone.appendChild(subtexte)

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

        const remembermeCheckbox = this.ownerDocument.createElement('input');
        remembermeCheckbox.classList.add('check-input')
        remembermeCheckbox.type = 'checkbox';
        remembermeCheckbox.id = 'termsCheckbox';
        containertwo.appendChild(remembermeCheckbox);


        const remembermeLabel = this.ownerDocument.createElement('label');
        remembermeLabel.classList.add('label-text')
        remembermeLabel.setAttribute('for', 'termsCheckbox');
        remembermeLabel.textContent = 'remember me';
        containertwo.appendChild(remembermeLabel);

        const forgotPasswordLink = this.ownerDocument.createElement('a');
        forgotPasswordLink.setAttribute('href', '#');
        forgotPasswordLink.textContent = 'Forgot Password?';
        containertwo.appendChild(forgotPasswordLink)

        const containerthree = this.ownerDocument.createElement('section');
        containerthree.classList.add('container-three');
        containerone.appendChild(containerthree);

        const registerButton = this.ownerDocument.createElement('button');
        registerButton.textContent = 'Sign In';
        containerthree.appendChild(registerButton);

        const signUpLink = document.createElement('a');
        signUpLink.setAttribute('href', '#');
        signUpLink.textContent = "Don't Have an Account? Sign Up for Free";
        containerthree.appendChild(signUpLink)

    
      }

    }
  }

  customElements.define('card-signin', CardSignIn);