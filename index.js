let f_inp = document.getElementById("f_inp");
let v_inp = f_inp.value;
let url = "https://api.whatsapp.com/send?phone=962";
let num;
let num1;

const reffer = () => {
  if (f_inp.value[0] === "0") {
    f_inp.value = f_inp.value.substring(1);
    num = f_inp.value;
    num1 = num.split(" ").join("");
    location.href = url + num1;
  } else {
    alert("Sorry The Number is not correct please re-check");
  }
};
