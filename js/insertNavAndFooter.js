const navBarContent = `
<ul>
<li class="nav-link">
    <a href="html/herstory.html">Herstory</a>
</li>
<li class="nav-link">
    <a href="html/lessons.html">Lessons</a>
</li>
<li>
    <a href="./index.html">
        <img
            class="nav-logo"
            src="assets/graphics/uke-princess-logo-white.png"
            alt=""
        />
    </a>
</li>
<li class="nav-link">
    <a href="html/photos.html">Photos</a>
</li>
<li class="nav-link">
    <a href="html/contact.html">Contact</a>
</li>
</ul>
`;

const footerContent = `
<div class="col">
<h2 class="white-text">Edmonton, AB</h2>
<h5>monica@ukuleleprincess.com</h5>
</div>
<div class="col">
<img
    class="no-shadow footer-img"
    src="./assets/photos/fresh-sheet-music-logo.png"
/>
</div>
`;

$("nav")[0].innerHTML = navBarContent;
$("footer")[0].innerHTML = footerContent;