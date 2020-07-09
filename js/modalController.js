const teacherModals = {
    teacher_1: {
        title: "1-2 Hour Session",
        text:
            "Dolore officia ex consectetur in minim. Aliqua nisi pariatur ullamco elit anim aliquip anim minim adipisicing ad ut voluptate. Tempor pariatur magna deserunt adipisicing aute dolore labore esse sunt duis elit laboris irure.",
        photo: "./assets/photos/teacher-photo-1.jpg",
    },
    teacher_2: {
        title: "Crash Course",
        text:
            "Dolore officia ex consectetur in minim. Aliqua nisi pariatur ullamco elit anim aliquip anim minim adipisicing ad ut voluptate. Tempor pariatur magna deserunt adipisicing aute dolore labore esse sunt duis elit laboris irure.",
        photo: "./assets/photos/teacher-photo-1.jpg",
    },
    teacher_3: {
        title: "Full Course",
        text:
            "Dolore officia ex consectetur in minim. Aliqua nisi pariatur ullamco elit anim aliquip anim minim adipisicing ad ut voluptate. Tempor pariatur magna deserunt adipisicing aute dolore labore esse sunt duis elit laboris irure.",
        photo: "./assets/photos/teacher-photo-1.jpg",
    },
};
const studentModals = {
    student_1: {
        title: "Highlands Ukulele Gang",
        text:
            "Dolore officia ex consectetur in minim. Aliqua nisi pariatur ullamco elit anim aliquip anim minim adipisicing ad ut voluptate. Tempor pariatur magna deserunt adipisicing aute dolore labore esse sunt duis elit laboris irure.",
        photo: "./assets/photos/ukulele-kids.jpg",
    },
    student_2: {
        title: "4x4 Ukulele Fun",
        text:
            "Dolore officia ex consectetur in minim. Aliqua nisi pariatur ullamco elit anim aliquip anim minim adipisicing ad ut voluptate. Tempor pariatur magna deserunt adipisicing aute dolore labore esse sunt duis elit laboris irure.",
        photo: "./assets/photos/ukulele-kids.jpg",
    },
    student_3: {
        title: "Build Your Own",
        text:
            "Dolore officia ex consectetur in minim. Aliqua nisi pariatur ullamco elit anim aliquip anim minim adipisicing ad ut voluptate. Tempor pariatur magna deserunt adipisicing aute dolore labore esse sunt duis elit laboris irure.",
        photo: "./assets/photos/ukulele-kids.jpg",
    },
};

// Initialize Page With Cards
for (var key in teacherModals) {
    let { title, text, photo } = teacherModals[key];
    let card = createCardTemplate({ key, title, text, photo });
    $("#card-target-teacher").append(card);
    $(`#${key}`).click(e => displayModal({ title, text, photo }));
}
for (var key in studentModals) {
    let { title, text, photo } = studentModals[key];
    let card = createCardTemplate({ key, title, text, photo });
    $("#card-target-student").append(card);
    $(`#${key}`).click(e => displayModal({ title, text, photo }));
}

// Add Modal Target & Background Listener
$("#modal-bg").click(e => {
    hideModal();
});
// Stop a click from propagating to the background if content is clicked
$("#modal-content").click(e => {
    e.stopPropagation();
});

function createCardTemplate({ key, title, text, photo }) {
    return `
        <div class="card" id=${key}>
            <div
                class="card-img"
                style="
                    background-image: url(${photo});
                "
            >
                <div class="card-hover-text-container">
                    <h4 class="card-hover-text">Learn More</h4>
                </div>
            </div>
            <h4 class="card-bottom-text text-center">
                ${title}
            </h4>
        </div>
    `;
}

function displayModal({ title, text, photo }) {
    console.log(`displaying modal ${title}`);
    const modalHTML = `
                <h2>${title}</h2>
                <img class="modal-img" src=${photo} />
                <p>${text}</p>
    `;
    $("#modal-content").append(modalHTML);
    $("#modal-bg").toggleClass("hidden");
    $("#modal-content").toggleClass("hidden");
}

function hideModal() {
    $("#modal-content").empty();
    $("#modal-bg").addClass("hidden");
    $("#modal-content").addClass("hidden");
}
