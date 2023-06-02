class Cardnews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({ mode: "open"});
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }
    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "/Angular/assets/user-default.png";
        newsImage.alt = "Foto da notícia"
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles(){
        const style = document.createElement("style")
        style.textContent = `
        .card{
            width: fit-content;
            justify-content: center;
            align-items: center;
            box-shadow: 7px 10px 27px -1px rgba(0,0,0,0.56);
        -webkit-box-shadow: 7px 10px 27px -1px rgba(0,0,0,0.56);
        -moz-box-shadow: 7px 10px 27px -1px rgba(0,0,0,0.56);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        
        }
        
        
        .card__left{
            
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
            padding-right: 10px;
        }
        
        .card__left > span{
            font-weight: 450;
        
        }
        
        .card__left > a{
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        }
        
        .card__left > p{
            color: rgb(70, 70, 70);
        }
        
        .card__right .imagem{
            display: flex;
            flex-direction: column;
            justify-content: right;
        }
        
        `;
        
        
        return style;
    }
    
}


customElements.define("card-news", Cardnews);
