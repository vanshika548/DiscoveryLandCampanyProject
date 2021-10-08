window.onload = ourWorld_content();

function ourWorld_content() {
    ourWorld = [
        {
            id: 1,
            image: "../assets/ourWorld/northShore.jpg",
            title: "North Shore Preserve",
            subtitle: "Kaua'i, Hawaii"
        },
        {
            id: 2,
            image: "../assets/ourWorld/img2.jpg",
            title: "James Island",
            subtitle: "Southern Gulf Islands, British Columbia, Canada"
        },
        {
            id: 3,
            image: "../assets/ourWorld/img3.jpg",
            title: "CostaTerra",
            subtitle: "Comporta, Portugal"
        },
        {
            id: 4,
            image: "../assets/ourWorld/img4.jpg",
            title: "Barbuda Ocean Club",
            subtitle: "Barbuda, West Indies"
        },
        {
            id: 5,
            image: "../assets/ourWorld/img5.jpg",
            title: "Driftwood",
            subtitle: "Austin, Texas"
        },
        {
            id: 6,
            image: "../assets/ourWorld/img6.jpg",
            title: "Troubadour",
            subtitle: "Nashville, Tennessee"
        },
        {
            id: 7,
            image: "../assets/ourWorld/img7.jpg",
            title: "Playa Grande",
            subtitle: "Rio San Juan, Dominican Republic"
        },
        {
            id: 8,
            image: "../assets/ourWorld/img8.jpg",
            title: "Chileno Bay",
            subtitle: "Cabo San Lucas, Mexico"
        },
        {
            id: 9,
            image: "../assets/ourWorld/img9.jpg",
            title: "The Summit",
            subtitle: "Las Vegas, Nevada"
        },
        {
            id: 10,
            image: "../assets/ourWorld/img10.jpg",
            title: "Dune Deck",
            subtitle: "Westhampton Beach, NY"
        },
        {
            id: 11,
            image: "../assets/ourWorld/img11.jpg",
            title: "Silo Ridge",
            subtitle: "Amenia, New York"
        },
        {
            id: 12,
            image: "../assets/ourWorld/img12.jpg",
            title: "Mākena",
            subtitle: "Maui, Hawaii"
        },
        {
            id: 13,
            image: "../assets/ourWorld/img13.jpg",
            title: "Yellowstone Club",
            subtitle: "Big Sky, Montana"
        },
        {
            id: 14,
            image: "../assets/ourWorld/img14.jpg",
            title: "Gozzer Ranch",
            subtitle: "Coeur d’Alene, Idaho"
        },
        {
            id: 15,
            image: "../assets/ourWorld/img15.jpg",
            title: "El Dorado",
            subtitle: "Los Cabos, Mexico"
        },
        {
            id: 16,
            image: "../assets/ourWorld/img16.jpg",
            title: "Madison",
            subtitle: "La Quinta, California"
        },
        {
            id: 17,
            image: "../assets/ourWorld/img17.jpg",
            title: "Baker's Bay",
            subtitle: "Great Guana Cay, Bahamas"
        },
        {
            id: 18,
            image: "../assets/ourWorld/img18.jpg",
            title: "Hideaway",
            subtitle: "La Quinta, California"
        },
        {
            id: 19,
            image: "../assets/ourWorld/img19.jpg",
            title: "Mountaintop",
            subtitle: "Cashiers, North Carolina"
        },
        {
            id: 20,
            image: "../assets/ourWorld/img30.jpg",
            title: "Mirabel",
            subtitle: "Scottsdale, Arizona"
        },
        {
            id: 21,
            image: "../assets/ourWorld/img21.jpg",
            title: "Kūki'o",
            subtitle: "Kohala, Hawaii"
        },
        {
            id: 22,
            image: "../assets/ourWorld/img22.jpg",
            title: "Vaquero",
            subtitle: "Westlake, Texas"
        },
        {
            id: 23,
            image: "../assets/ourWorld/img23.jpg",
            title: "Iron Horse",
            subtitle: "Whitefish, Montana"
        },
        {
            id: 24,
            image: "../assets/ourWorld/img24.jpg",
            title: "CordeValle",
            subtitle: "Silicon Valley, California"
        },
        {
            id: 25,
            image: "../assets/ourWorld/img25.jpg",
            title: "Estancia",
            subtitle: "Scottsdale, Arizona"
        }
    ];

    var content= '';

    ourWorld.forEach(element=> {
        content += `<div class="main-items">
        <img class="image" src="${element.image}">
        <h1 class="item1">${element.title}</h1>
        <p class="item2">${element.subtitle}</p>
    </div>`
    });
    
    document.querySelector('#main').innerHTML=content;
}