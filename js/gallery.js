window.onload = gallery_content();

function gallery_content() {
    gallery= [
        {
            id: 1,
            image: "/assets/gallery/img2.jpg",
            htag: "Outdoor Pursuits",
        },
        {
            id: 2,
            image: "/assets/gallery/img3.jpg",
            htag: "Golf",
        },
        {
            id: 3,
            image: "/assets/gallery/img4.jpeg",
            htag: "Lifestyle",
        },
        {
            id: 4,
            image: "/assets/gallery/img5.jpg",
            htag: "Landscapes",
        },
        {
            id: 5,
            image: "/assets/gallery/img6.jpg",
            htag: "Clubhouses",
        },
        {
            id: 6,
            image: "/assets/gallery/img7.jpg",
            htag: "Wellness",
        }
    ];

    var content= '';

    gallery.forEach(element=> {
        content += `<div class="gmain-items">
        <img class="image"
        src="${element.image}" alt="">
        <h1 class="gtitle">${element.htag}</h1>
    </div> `
    });
    
    document.querySelector('#main').innerHTML=content;
    
}