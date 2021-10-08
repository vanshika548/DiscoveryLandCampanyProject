function videoImage1() {
    const content = `<div video1">
    <video class="img_v1" src="../assets/home/video1.mp4" data-length="" muted loop autoplay playsinline></video>
    <button class="closebtn" onclick="document.querySelector('#img_video1').innerHTML=''">&times;</button>
    </div>
  <h1 class="v_title">Experiences</h1>
  <p class="p_text">
    Experience the ultimate round of golf on championship courses designed by the world’s most highly acclaimed architects or take a thrilling adventure with limitless activities for everyone to enjoy.
  </p>
  <button type="button" class="btn">Explore</button>`

  document.querySelector('#img_video1').innerHTML = content;

}

function videoImage2() {
    const content = `<div video1">
    <video class="img_v2" src="../assets/home/video2.mp4" data-length="" muted loop autoplay playsinline></video>
    <button class="closebtn" onclick="document.querySelector('#img_video2').innerHTML=''">&times;</button>
    </div>
  <h1 class="v_title">Lifestyle</h1>
  <p class="p_text">
  Relish the very best times of your life with the ones you love in our bespoke communities that cater to a family orientated lifestyle through unparalleled amenities and inspired experiences. 
  </p>
  <button type="button" class="btn">Explore</button>`

  document.querySelector('#img_video2').innerHTML = content;

}

function videoImage3() {
    const content = `<div video1">
    <video class="img_v3" src="../assets/home/video3.mp4" data-length="" muted loop autoplay playsinline></video>
    <button class="closebtn" onclick="document.querySelector('#img_video3').innerHTML=''">&times;</button>
    </div>
  <h1 class="v_title">Wellness</h1>
  <p class="p_text">
  Relax and refresh your body and your mind in exquisite surroundings. Escape to our stunning pools, unwind in relaxing spas and explore innovative international culinary offerings.
  </p>
  <button type="button" class="btn">Explore</button>`

  document.querySelector('#img_video3').innerHTML = content;

}


window.onload = home_content();

function home_content() {
  home_images = [
        {
            id: 1,
            image: "../assets/ourWorld/img1.jpg",
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
            image: "../assets/ourWorld/img33.jpg",
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
            image: "../assets/ourWorld/img20.jpg",
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
            image: "../assets/ourWorld/img35.jpg",
            title: "Estancia",
            subtitle: "Scottsdale, Arizona"
        }
    ];

    var content = '';
    
    home_images.forEach(element => {
        content += `<div class="track">
        <img  src="${element.image}"  alt="" />
        <div class="track_main">
            <h1 class="track_title">${element.title}</h1>
            <p class="track_sub">${element.subtitle}</p>
        </div>
    </div>`
    });
    
    document.querySelector('.img_track').innerHTML = content;
}