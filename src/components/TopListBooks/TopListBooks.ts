export enum AttributeTopListBooks {
  "listname" = "listname",
  "profileimg" = "profileimg",
  "profilename" = "profilename",
  "book1" = "book1",
  "book2" = "book2",
  "book3" = "book3",
  "heart" = "heart",
  "likes" = "likes",
}

export class TopListBooks extends HTMLElement {
  listname?: string;
  profileimg?: string;
  profilename?: string;
  book1?: string;
  book2?: string;
  book3?: string;
  heart?: string;
  likes?: string;

  static get observedAttributes() {
    const attrs: Record<AttributeTopListBooks, null> = {
      listname: null,
      profileimg: null,
      profilename: null,
      book1: null,
      book2: null,
      book3: null,
      heart: null,
      likes: null,
    };
    return Object.keys(attrs);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(
    propName: AttributeTopListBooks,
    oldValue: string | undefined,
    newValue: string | undefined
  ) {
    switch (propName) {
      default:
        this[propName] = newValue;
        break;
    }
  }

  render() {
    if (this.shadowRoot) {
      const link = this.ownerDocument.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute(
        "href",
        "/src/components/TopListBooks/TopListBooks.css"
      );

      const topListContainer = this.ownerDocument.createElement("article");
      topListContainer.classList.add("list-container");

      const listName = this.ownerDocument.createElement("h3");
      listName.classList.add("list-name");
      listName.textContent = `${this.listname}`;

      const profileContainer = this.ownerDocument.createElement("div");
      profileContainer.classList.add("profile-container");
      const profileImg = this.ownerDocument.createElement("img");
      profileImg.classList.add("profile-img");
      profileImg.setAttribute("src", `${this.profileimg}`);
      const profileName = this.ownerDocument.createElement("h4");
      profileName.classList.add("profile-name");
      profileName.textContent = `${this.profilename}`;
      const bookContainer = this.ownerDocument.createElement("div");
      bookContainer.classList.add("book-container");
      const book1 = this.ownerDocument.createElement("img");
      book1.classList.add("book1");
      book1.setAttribute("src", `${this.book1}`);
      const book2 = this.ownerDocument.createElement("img");
      book2.classList.add("book2");
      book2.setAttribute("src", `${this.book2}`);
      const book3 = this.ownerDocument.createElement("img");
      book3.classList.add("book3");
      book3.setAttribute("src", `${this.book3}`);
      const divLikesContainer = this.ownerDocument.createElement("div");
      divLikesContainer.classList.add("div-likes-container");
      const divLikes = this.ownerDocument.createElement("div");
      divLikes.classList.add("div-likes");
      const likes = this.ownerDocument.createElement("img");
      likes.classList.add("likes");
      likes.setAttribute("src", `${this.heart}`);
      const likesNumber = this.ownerDocument.createElement("p");
      likesNumber.classList.add("likes-number");
      likesNumber.textContent = `${this.likes}`;

      topListContainer.appendChild(listName);
      topListContainer.appendChild(profileContainer);
      profileContainer.appendChild(profileImg);
      profileContainer.appendChild(profileName);
      topListContainer.appendChild(bookContainer);
      bookContainer.appendChild(book1);
      bookContainer.appendChild(book2);
      bookContainer.appendChild(book3);
      topListContainer.appendChild(divLikesContainer);
      divLikesContainer.appendChild(divLikes);
      divLikes.appendChild(likes);
      divLikes.appendChild(likesNumber);

      this.shadowRoot.appendChild(link);
      this.shadowRoot.appendChild(topListContainer);
    }
  }
}

customElements.define("toplist-card", TopListBooks);

