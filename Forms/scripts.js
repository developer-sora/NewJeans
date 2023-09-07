const $inputs = document.querySelectorAll("input");

for (let i = 0; i < $inputs.length; i++) {
  $inputs[i].addEventListener(
    "invalid",
    (e) => {
      console.log(e.target);
      $inputs[i].classList.add("was-validated");
    },
    { once: true }
  );
  console.log("asdk;lsadk");
}
