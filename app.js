(function () {
    emailjs.init("FKDoWlMgxXTG3984p");  
  })();
  
  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
  
    emailjs.sendForm("service_13xunae", "template_ylqw3vd", this).then(
      function () {
        document.querySelector(".response").style.display = "block";
        document.querySelector(".response").textContent = "Thank you for your message!";
        setTimeout(() => {
          document.querySelector(".response").style.display = "none";
        }, 3000);
      },
      function (error) {
        alert("Failed to send the message: " + JSON.stringify(error));
      }
    );
  });