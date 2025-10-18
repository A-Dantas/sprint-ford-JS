

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {

    constructor (img, text, link) {
        this.img = img;
        this.text = text;
        this.link = link;
    }
    
      
    static Start(arr){
        if(arr){
            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.escreverImagem(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); }, 5000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static avancar () {
        Carousel._sequence++;
        if (Carousel._sequence > Carousel._size-1) {
            Carousel._sequence = 0;
        }
        this.escreverImagem();
        
    }

    static retornar () {
        Carousel._sequence--;
        if (Carousel._sequence < 0) {
            Carousel._sequence = Carousel._size-1;
        }
        this.escreverImagem();
        
    }

    static escreverImagem () {
        const divCarousel = document.querySelector("#carousel");
        divCarousel.innerHTML = `<a href="${carouselArr[Carousel._sequence].link}"><img class="imgCarossel" src ="img/${carouselArr[Carousel._sequence].img}"></a>`;
        document.querySelector("#carousel-title").innerHTML = `<p>${carouselArr[Carousel._sequence].text} </p>`;
    }
    

    static Next() {
        Carousel._sequence++;
        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }
        this.escreverImagem();
    }
}