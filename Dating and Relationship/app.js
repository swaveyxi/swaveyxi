document.addEventListener("DOMContentLoaded", function () {
  // FORM AND SUBMISSION
  const form = document.querySelector(".session-form");

  //radio buttons class toggle
  const radios = document.querySelectorAll('input[name="session"]');
  radios.forEach(function (radio) {
    radio.addEventListener("change", function () {
      radios.forEach((r) => r.classList.remove("input"));
      if (radio.checked) {
        radio.classList.add("input");
      }
    });
  });
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Set variables
    const id = new Date().getTime().toString();
    const fields = document.querySelectorAll(".input");
    const name = document.getElementById("firstName").value.trim();
    const email = document.getElementById("email").value.trim();

    // If statement for actions to be carried out
    if (!name || !email) {
      alert("Please fill required fields", "danger");
    } else {
      alert("Form submitted successfully", "success");
      form.innerHTML = `
      <h2 style="text-align:center">Done!</h2>
      <p>We will get back to you soon.</p>
      <p>You will be contacted via email.</p>
      `;

      // Collect all input values into an object
      const formData = { id, fields: [] };

      fields.forEach(function (input) {
        const name = input.name;
        const value = input.value;
        formData.fields.push({ [name]: value });
      });
      addToLocalStorage(formData);
    }
  });
  // get local storage
  function getLocalStorage() {
    return localStorage.getItem("formData")
      ? JSON.parse(localStorage.getItem("formData"))
      : [];
  }

  // add data to local storage
  function addToLocalStorage(data) {
    const store = getLocalStorage();
    store.push(data);
    localStorage.setItem("formData", JSON.stringify(store));
  }
});
