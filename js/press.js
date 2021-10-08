window.onload = press_content();
window.onload = press_articles();

function press_content() {
    press = [
        {
            id: 1,
            h1tag: "10 Fairways to Tee Off on Now",
            ptag: "Vegas Magazine I September 2021",
            h2tag: "Read Article"
        },
        {
            id: 2,
            h1tag: "Golf Real Estate Roars Back as Vacation Homes Boom in Pandemic",
            ptag: "Bloomberg I September 2021",
            h2tag: "Read Article"

        },
        {
            id: 3,
            h1tag: "Brexit drives British millionaires to Portugal for tax and EU perks — but it’s about to get complicated",
            ptag: "Telegraph UK | August 20, 2021",
            h2tag: "Read Article"
        },
        {
            id: 4,
            h1tag: "This Property Company Ups the Ante with  Luxury and Sustainability",
            ptag: "Sunset Magazine | August 13, 2021",
            h2tag: "Read Article"
        }
    ];

    var content= '';

    press.forEach(element=> {
        content += `<div class="press_items">
        <h1>${element.h1tag}</h1>
        <p>${element.ptag}</p>
        <h3>${element.h2tag}</h3>
    </div> `
    });
    
    document.querySelector('#main').innerHTML=content;
    
}

function press_articles() {
    articles = [
        {
            id: 0,
            p1tag: "News",
            h1tag: "Discovery’s newest property in Kaua’i North Shore Preserve",
            p2tag: "Discovery Land Company is excited to announce our 25th residential club communitymon the majestic North Shore of Kaua’i. North Shore Preserve, a one-of-a-kind residential community, spans one thousand acres at the base of the mountains in the pastoral Hanalei valley. This newly re-imagined, low-density project is a secluded and peaceful island oasis with limited initial homesite and hale offerings.",
            h2tag: "Read Article",
            image: "../assets/press/img2.jpg"
        },
        {
            id: 1,
            p1tag: "News",
            h1tag: "James Island <br>Discovery's Newest Property",
            p2tag: "Discovery Land Company is excited to announce our 24th private luxury residential community. James Island Golf and Ocean Club, a 780-acre private island in British Columbia with only 76 lots, is Discovery Land Company’s most exclusive community to date and Discovery’s first project in Canada.",
            h2tag: "Read Article",
            image: "../assets/press/sec1_img2.jpg"
        },
        {
            id: 2,
            p1tag: "News",
            h1tag: "CostaTerra<br>Discovery's 23rd property",
            p2tag: "Discovery Land Company, the world’s leading developer of luxury private residential communities, clubs and resorts, has announced its 23rd property and first in Europe.",
            h2tag: "Read Article",
            image: "../assets/press/sec1_img3.jpg"
        },
        {
            id: 3,
            p1tag: "News",
            h1tag: "Troubadour To Open Golf Course Fall 2019",
            p2tag: "Troubadour Golf &amp; Field Club, a Discovery Land Company community, is pleased to announce the opening of its 18-hole Tom Fazio-designed golf course this fall.",
            h2tag: "Read Article",
            image: "../assets/press/sec1_img4.jpg"
        }
    ];

    var content = '';
    articles.forEach(element=> {
        content += `<div class="article_content">
        <div class="article_text">
            <p>${element.p1tag}</p>
            <h1 class="p_head">${element.h1tag}</h1>
            <p>${element.p2tag}</p>
            <h3>${element.h2tag}</h3>
        </div>
    </div>
    <div class="image1">
        <img  src="${element.image}" alt="">
    </div>`
    });

    document.querySelector('#article').innerHTML=content;

}