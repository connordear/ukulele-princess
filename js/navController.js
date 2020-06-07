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

$(window).scroll(() => {
    let currentYPosition = $(window).scrollTop();
    let introSectionYStart = $(".intro-section").position().top;
    if (currentYPosition > 0) {
        $("nav").removeClass("nav-margin-top");
        if (currentYPosition >= introSectionYStart) {
            $("nav").addClass("nav-bar-dark-bg");
        } else {
            $("nav").removeClass("nav-bar-dark-bg");
        }
    } else {
        $("nav").addClass("nav-margin-top");
    }
})

renderNavBar();
$(window).resize(renderNavBar)

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