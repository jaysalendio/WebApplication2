const formShowBtn = document.getElementById("LoginBtn");

const formContainer = document.getElementById("formContainer");
const closeForm = document.querySelector(".close");

const loginForm = document.getElementById("login_form");
const signupForm = document.getElementById("signup_form");

const loginBtn = document.getElementById("login_button");
const signupBtn = document.getElementById("signup_button");

const pwd_hide = document.querySelectorAll(".pw_hide");

const allInputs = document.querySelectorAll('form input:not([type="submit"])');

console.log(allInputs);

formShowBtn.addEventListener("click", function () {
  // allInputs.forEach(input => {
  //     input.value = '';
  //   });
  formContainer.style.display = "block";

  if (
    signupBtn.addEventListener("click", () => {
      // allInputs.forEach(input => {
      //     input.value = '';
      //   });

      loginForm.style.display = "none";
      signupForm.style.display = "block";
    })
  );
  else if (
    loginBtn.addEventListener("click", () => {
      // allInputs.forEach(input => {
      //     input.value = '';
      //   });

      signupForm.style.display = "none";
      loginForm.style.display = "block";
    })
  );
});

pwd_hide.forEach((icon) => {
  console.log(icon);
  icon.addEventListener("click", () => {
    let getPwdInput = icon.parentElement.querySelector("input");

    if (getPwdInput.type === "password") {
      getPwdInput.type = "text";
      icon.classList.replace("bx-hide", "bx-show");
    } else if (getPwdInput.type === "text") {
      getPwdInput.type = "password";
      icon.classList.replace("bx-show", "bx-hide");
    }
  });
});

closeForm.addEventListener("click", () => {
  formContainer.style.display = "none";
});


