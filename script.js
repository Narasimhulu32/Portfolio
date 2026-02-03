// Dark mode
const toggle = document.getElementById("darkToggle");
toggle.onclick = () => document.body.classList.toggle("dark");

// AOS
AOS.init();

// EmailJS
emailjs.init("YOUR_PUBLIC_KEY");

document.getElementById("contact-form").addEventListener("submit", function(e){
  e.preventDefault();
  emailjs.sendForm("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",this)
    .then(() => alert("Message sent successfully!"),
          () => alert("Failed to send message"));
});
