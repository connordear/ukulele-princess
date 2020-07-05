const smallNavBarContent = `
    <div class="row nav-small">
        <a href="./index.html">
            <img
                class="nav-logo-sm no-shadow"
                src="assets/graphics/uke-princess-logo-white.png"
                alt=""
            />
        </a>
        <button id="nav-expand" onclick="toggleSidebar()"><img class="nav-hamburger no-shadow" src="./assets/graphics/nav-hamburger-white.png" /></button>
    </div>
`;

const navBarContent = `
    <ul>
        <li class="nav-link">
            <a href="./herstory.html">Herstory</a>
        </li>
        <li class="nav-link">
            <a href="./lessons.html">Lessons</a>
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
            <a href="./photos.html">Photos</a>
        </li>
        <li class="nav-link">
            <a href="./contact.html">Contact</a>
        </li>
    </ul>
`;

const footerContent = `
    <div class="col">
        <h4 class="white-text">Edmonton, AB</h4>
        <h4>monica@ukuleleprincess.com</h4>
    </div>
    <div class="col">
        <img
            class="no-shadow footer-img"
            src="./assets/photos/fresh-sheet-music-logo.png"
        />
    </div>
`;

const sidebarContent = `
    <div id="sidebar">
        <ul>
            <li class="nav-link">
                <a href="html/herstory.html">Herstory</a>
            </li>
            <li class="nav-link">
                <a href="html/lessons.html">Lessons</a>
            </li>
            <li class="nav-link">
                <a href="html/photos.html">Photos</a>
            </li>
            <li class="nav-link">
                <a href="html/contact.html">Contact</a>
            </li>
            <li class="nav-link">
                <button id="sidebar-close" onclick="toggleSidebar()">
                    Close
                </button>
            </li>
        </ul>
    </div>
`;
// Insert content into the page
$("nav")[0].innerHTML = navBarContent;
$("footer")[0].innerHTML = footerContent;
$("body")[0].innerHTML += sidebarContent;

// Add scroll event to check if the background has changed
$(window).scroll(() => {
    let currentYPosition = $(window).scrollTop();
    let whiteBackgroundPosition = $(".white-background").position();
    let whiteBackgroundPositionStart =
        typeof whiteBackgroundPosition === "undefined"
            ? Infinity
            : whiteBackgroundPosition.top;
    if (currentYPosition > 0) {
        $("nav").removeClass("nav-margin-top");
        if (currentYPosition >= whiteBackgroundPositionStart) {
            $("nav").addClass("nav-bar-dark-bg");
        } else {
            $("nav").removeClass("nav-bar-dark-bg");
        }
    } else {
        $("nav").addClass("nav-margin-top");
    }
});

// Call renderNavBar on start to check for mobile sizing
renderNavBar();

// Add window resize event callback
$(window).resize(renderNavBar);

function renderNavBar() {
    let windowWidth = $(window).width();
    if (windowWidth <= 775) {
        $("nav")[0].innerHTML = smallNavBarContent;
    } else {
        $("nav")[0].innerHTML = navBarContent;
        $("footer")[0].innerHTML = footerContent;
    }
}

// ========= SIDEBAR LOGIC =========== //

let sidebarOpen = false;

function toggleSidebar() {
    if (!sidebarOpen) {
        $("#sidebar").addClass("show-sidebar");
    } else {
        $("#sidebar").removeClass("show-sidebar");
    }
    sidebarOpen = !sidebarOpen;
}

// =================================== //
