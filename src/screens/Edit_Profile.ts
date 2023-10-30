class EditProfile extends HTMLElement {
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
  
  customElements.define("edit-profile", EditProfile);
  export default EditProfile;