(() => {
  const countries = [];

  const [A, Z] = [65, 90];
  const countryName = new Intl.DisplayNames(["en"], { type: "region" });

  for (let i = A; i <= Z; ++i) {
    for (let j = A; j <= Z; ++j) {
      let code = String.fromCharCode(i) + String.fromCharCode(j);
      let name = countryName.of(code);

      if (code !== name) {
        countries.push(name);
      }
    }
  }

  const datalist = document.getElementById("countries");

  for (const country of countries) {
    const option = document.createElement("option");
    option.value = country;
    datalist.appendChild(option);
  }
})();

const form = document.querySelector("form");
const email = document.getElementById("mail");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const emailError = document.querySelector("#mail + span.error");
const passwordError = document.querySelector("#password + span.error");
const confirmPasswordError = document.querySelector(
  "#confirm-password + span.error",
);

password.addEventListener("input", () => {
  if (password.validity.valid) {
    passwordError.textContent = "";
    passwordError.className = "error";
    confirmPasswordError.textContent = "";
    confirmPasswordError.className = "error";
  } else {
    showPasswordError();
  }
});

function showPasswordError() {
  if (password.validity.valueMissing) {
    passwordError.textContent = "You need to enter a password.";
    confirmPasswordError.textContent = "You need to enter a password.";
  } else if (password.validity.tooShort) {
    passwordError.textContent = `Password should be at least ${password.minLength} characters; you entered ${password.value.length}.`;
    confirmPasswordError.textContent = `Password should be at least ${password.minLength} characters; you entered ${password.value.length}.`;
  }
}

email.addEventListener("input", () => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showEmailError();
  }
});

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    showEmailError();
    event.preventDefault();
    return;
  }

  if (password.value !== confirmPassword.value) {
    passwordError.textContent = "Password does not match.";
    confirmPasswordError.textContent = "Password does not match.";
    event.preventDefault();
    return;
  }

  alert("Form successfully submitted.");
});

function showEmailError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  emailError.className = "error active";
}
