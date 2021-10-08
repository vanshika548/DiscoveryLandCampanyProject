window.onload = footer_content();
window.onload = header_content();

function header_content() {
    const headerHtml = `<div class="item-container">
    <div class="logo-content1">
        <img class="logo-img1" src="../assets/icon/logo.svg" alt="Logo Image">
    </div>
        <div class="nav-content">
            <div class="u1"><a href="../page/about.html">About DLC</a></div>
            <div class="u2"><a href="../page/ourWorld.html">Our Worlds</a></div>
            <div class="u3"><a href="../page/experiences.html">Experiences</a></div>
            <div class="u4"><a href="../page/gallery.html">Gallery</a></div>
            <div class="u5"><a href="../page/press.html">Press</a></div>
        </div>
    <div class="container" onclick="menuBar()">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
    </div>
    </div>`
    
    document.querySelector('#header').innerHTML = headerHtml;
    
}

function menuBar(){
    const content = `<div class="menubar">
    <div class="menubar_logo">
        <img class="bar-img1" src="../assets/icon/logo.svg" alt="">
        <img class="close-img" src="../assets/icon/cross.svg" alt="" onclick="document.querySelector('#sidenav').innerHTML=''">
    </div>
    <div class="menu">
        <div class="main_nav">
            <ul class="navbar_main>
                <li><a href="#">About DLC</a></li>
                <li><a href="../page/ourworld.html">Our Worlds</a></li>
                <li><a href="#">Experiences</a></li>
                <li><a href="/page/gallery.html">Gallery</a></li>
                <li><a href="#">Press</a></li>
            </ul>
        </div>
        <div class="sub_nav">
            <ul class="navbar_sub">
                <li><a href="#">Magazine</a></li>
                <li><a href="#">Company</a></li>
                <li><a href="#">Foundation</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </div>`
    document.querySelector('#sidenav').innerHTML = content;
}

function footer_content() {
    const footerHtml = `<footer class="footer-content">
    <div class="all-foot">
        <div class="logo-content2">
            <img class="logo-img2" src="/assets/icon/favicon-32x32 (1).png" alt="Logo Image">
        </div>
        <div class="foot-items">
            <h4 class="foot-main">Get in touch</h4>        
            <ul class="foot-content">
                <li class="foot-menu">
                    <a href="tel:(480) 624-5200" class="foot-link">(480) 624-5200</a>
                </li>
                <li class="foot-menu">
                    <a href="mailto:mail@discoverylandco.com" class="foot-link email">mail@discoverylandco.com</a>
                </li>
            </ul>
        </div>
        <div class="footer-main">
            <ul class="foot-content">
                <li class="foot-menu ul1">
                    <a href="#" class="foot-link">About DLC</a>
                </li>
                <li class="foot-menu ul2">
                    <a href="../pages/ourWorld.html" class="foot-link">Our Worlds</a>
                </li>
                <li class="foot-menu ul3">
                    <a href="#" class="foot-link">Experiences</a>
                </li>
                <li class="foot-menu ul4">
                    <a href="../pages/gallery.html" class="foot-link">Gallery</a>
                </li>
                <li class="foot-menu ul5">
                    <a href="#" class="foot-link">Press</a>
                </li>                    
            </ul>
            <ul class="foot-content">
                <li class="foot-menu">
                    <a href="#" class="foot-link">Magazine</a>
                </li>
                <li class="foot-menu">
                    <a href="#" class="foot-link">Careers</a>
                </li>
                <li class="foot-menu">
                    <a href="#" class="foot-link">Foundation</a>
                </li>
                <li class="foot-menu">
                    <a href="#" class="foot-link">Company</a>
                </li>
                <li class="foot-menu">
                    <a href="#" class="foot-link">Contact</a>
                </li>
                <li class="foot-menu">
                    <a href="#" class="foot-link">Privacy</a>
                </li>                    
            </ul>
        </div>
    </div>
    <div class="foot-end">
      <p>© Discovery Land Company. All rights reserved.</p>
    </div>
    </footer>`

    document.querySelector('#footer').innerHTML = footerHtml;
}