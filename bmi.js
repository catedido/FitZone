function checkin() {
    let checkBox = document.getElementById("myCheckBox");
    let form = document.getElementById("form");
    if (checkBox.checked === true){
      form.style.display = "block";
    } else {
       form.style.display = "none";
    }
  }



document.getElementById('calculatebmi').addEventListener('click', function() {
    let weigth = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    if (isNaN(height) || isNaN(weigth) === true ) {
        document.getElementById("new-entry").innerText = "❌ Please submit the correct values!";
    } else if (height <= 0 || weigth <= 0) {
        document.getElementById("new-entry").innerText = "❌ Please submit the correct values!";
    } else {
    let result = (weigth / height**2) * 10000;
    document.getElementById("new-entry").innerText = `⚖️ Your BMI is ${result.toFixed(2)}`
    }
}
);

