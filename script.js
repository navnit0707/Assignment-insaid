const servicesData = [
  {
    id: 1,
    name: "Consultancy",
    description: "We provide expert consultancy services.",
    category: "Business Services",
    price: 150,
    duration: "1 hour",
    image: "consultancy.jpg",
  },
  {
    id: 2,
    name: "Web Development",
    description: "We offer professional web development solutions.",
    category: "IT Services",
    price: 500,
    duration: "2 weeks",
    image: "web-development.jpg",
  },
  {
    id: 3,
    name: "Digital Marketing",
    description: "We specialize in digital marketing strategies.",
    category: "Marketing Services",
    price: 300,
    duration: "1 month",
    image: "digital-marketing.jpg",
  },
];

// Get the container element
const servicesContainer = document.querySelector(".services-container");

// Iterate over the servicesData array
servicesData.forEach((service) => {
  // Create a div for each service
  const serviceDiv = document.createElement("div");
  serviceDiv.classList.add("service");

  // Create elements for service details
  const serviceName = document.createElement("h4");
  serviceName.textContent = service.name;

  const serviceDescription = document.createElement("p");
  serviceDescription.textContent = service.description.substring(0, 50) + "...";

  // Append elements to the service div
  serviceDiv.appendChild(serviceName);
  serviceDiv.appendChild(serviceDescription);

  // Append the service div to the services container
  servicesContainer.appendChild(serviceDiv);
});

// Add the following JavaScript code for the mobile menu toggle

const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const navLinks = document.getElementById("navLinks");

mobileMenuToggle.addEventListener("click", function () {
  mobileMenuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close the mobile menu when a link is clicked
const navLinksList = document.querySelectorAll("#navLinks ul li a");

navLinksList.forEach(function (link) {
  link.addEventListener("click", function () {
    mobileMenuToggle.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const navLinks = document.getElementById("navLinks");

  mobileMenuToggle.addEventListener("click", function () {
    mobileMenuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Close the mobile menu when a link is clicked
  const navLinksList = document.querySelectorAll("#navLinks ul li a");

  navLinksList.forEach(function (link) {
    link.addEventListener("click", function () {
      mobileMenuToggle.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  // Contact Form Submission
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameInput = document.getElementById("name");
    const name = nameInput.value;
    nameInput.value = "";

    showPopup(
      `Thank you, ${name}, for contacting us! Your message has been sent successfully.`
    );
  });

  function showPopup(message) {
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.textContent = message;

    document.body.appendChild(popup);

    setTimeout(function () {
      popup.remove();
    }, 2000);
  }
});
