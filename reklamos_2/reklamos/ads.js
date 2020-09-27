document.querySelector(".button").addEventListener("click", loadAd);
document.querySelector(".bandymas-1").addEventListener("mouseover", loadAd_1);
var image_src = '<input name="ads"  type="image"  src="';
var image_size = ' " height="15%" width="30%">';
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

function slice(arr) {
  var array = arr.slice(0, 1);
  return array;
}

var numbers = [0, 1, 2, 3, 4, 5];
shuffle(numbers);
var array = numbers.slice(0, 4);
function loadAd() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "../banner/myflie.json", true);
  xhr.onload = function () {
    if (this.status == 200) {
      document.querySelector(".bottom-right").style.display = "block";

      // var id = array[2];
      // var image = JSON.parse(this.responseText);
      // document
      //   .getElementById("bottom-right")
      //   .insertAdjacentHTML(
      //     "afterbegin",
      //     image_src + image[id]["image"] + image_size
      //   );
      // document.getElementById("counter-3").value = image[id].id;
    }
  };
  xhr.send();
  document.querySelector(".button").removeEventListener("click", loadAd);
}

function loadAd_1() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "../banner/myflie.json", true);
  xhr.onload = function () {
    if (this.status == 200) {
      document.querySelector(".bottom-left").style.display = "block";

      // var id = array[3];
      // var image = JSON.parse(this.responseText);
      // document
      //   .getElementById("bottom-left")
      //   .insertAdjacentHTML(
      //     "afterbegin",
      //     image_src + image[id]["image"] + image_size
      //   );

      // document.getElementById("counter-2").value = image[id].id;
    }
  };
  xhr.send();
  document
    .querySelector(".bandymas-1")
    .removeEventListener("mouseover", loadAd_1);
}

var xhr = new XMLHttpRequest();
xhr.open("GET", "../banner/myflie.json");
xhr.onload = function () {
  if (this.status == 200) {
    var image = JSON.parse(this.responseText);
    var id = array[0];
    var id_1 = array[1];
    setTimeout(() => {
      document.querySelector(".top-right").style.display = "block";
      // document
      //   .getElementById("top-right")
      //   .insertAdjacentHTML(
      //     "afterbegin",
      //     image_src + image[id]["image"] + image_size
      //   );
      // document.getElementById("counter").value = image[id].id;
    }, 5000);

    //   document
    //     .getElementById("top-left")
    //     .insertAdjacentHTML(
    //       "afterbegin",
    //       image_src + image[id_1]["image"] + image_size
    //     );
    //   document.getElementById("counter-1").value = image[id_1].id;
    // }
  }
};
xhr.send();
