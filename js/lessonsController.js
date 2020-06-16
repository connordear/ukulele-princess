selectButton("teacher");
showSection("teacher");

/**
 * Shows the section named `type`-section,
 * hides all other sections that currently had the
 * class `show-section` added.
 * @param {String} type
 */
function showSection(type) {
    if (type === "student" || type === "teacher") {
        // console.log(`Showing ${type} section`);
        // Hide currently shown sections
        $(".show-section").addClass("hide-section");
        $(".show-section").removeClass("show-section");
        // Show desired section
        $(`#${type}-section`).removeClass("hide-section");
        $(`#${type}-section`).addClass("show-section");
    }
    // Do nothing otherwise
}

/**
 * Toggles the button classlist with the
 * button-selected class. Removes button-selected
 * class from all other buttons
 * @param {String} name
 */
function selectButton(name) {
    // console.log(`Selecting ${name}-button`);
    // Clear all other selections
    $(".button-selected").removeClass("button-selected");
    // Select button corresponding to `name`
    $(`#${name}-button`).addClass("button-selected");
}
