let forma = document.forms.test;
let inps = document.querySelectorAll("[data-imp]");

forma.onsubmit = (event) => {
  event.preventDefault();

  let error = false;
  let errArr = [];

  inps.forEach((inp) => {
    if (inp.value.length === 0) {
      error = true;
      errArr.push(inp);
    } else {
      error = false;
    }
  });

  if (error === false) {
    submit(forma);
    inps.forEach((inp) => inp.classList.remove("red"));
  } else {
    errArr.forEach((inp) => inp.classList.add("red"));
  }
};
function submit(form) {
  let user = {};

  let fm = new FormData(form);

  fm.forEach((value, key) => {
    user[key] = value;
  });
  console.log(user);
  form.reset();
}
