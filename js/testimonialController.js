// Not set up to do student/teacher right now, will just do a blend
const testimonials = [
    {
        text:
            "Sint do incididunt nulla voluptate aliqua incididunt consequat do pariatur. Adipisicing cupidatat laboris id id aliqua laboris aliqua nulla nisi. Consectetur occaecat Lorem aute pariatur elit magna cupidatat tempor.",
        name: "Bob de Frece 1",
        title:
            "Professor Emeritus, Music & Music Education, University of Alberta ",
    },
    {
        text:
            "Sint do incididunt nulla voluptate aliqua incididunt consequat do pariatur. Adipisicing cupidatat laboris id id aliqua laboris aliqua nulla nisi. Consectetur occaecat Lorem aute pariatur elit magna cupidatat tempor.",
        name: "Bob de Frece 2",
        title:
            "Professor Emeritus, Music & Music Education, University of Alberta ",
    },
    {
        text:
            "Sint do incididunt nulla voluptate aliqua incididunt consequat do pariatur. Adipisicing cupidatat laboris id id aliqua laboris aliqua nulla nisi. Consectetur occaecat Lorem aute pariatur elit magna cupidatat tempor.",
        name: "Bob de Frece 3",
        title:
            "Professor Emeritus, Music & Music Education, University of Alberta ",
    },
];

// Initialize Testimonials
let counter = 0;
let { text, name, title } = testimonials[counter];
$("#testimonial-target").html(generateTestimonialHTML({ text, name, title }));

// Set interval for testimonials
setInterval(() => {
    console.log("Switching testimonial");
    counter = (counter + 1) % testimonials.length;
    let { text, name, title } = testimonials[counter];
    $("#testimonial-target").html(
        generateTestimonialHTML({ text, name, title })
    );
}, 7000);

function generateTestimonialHTML({ text, name, title }) {
    return `
        <p>${text}</p>
        <h3>${name}</h3>
        <h3>${title}</h3>
    `;
}
