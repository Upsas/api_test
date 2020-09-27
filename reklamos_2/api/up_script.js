// const apiu = {
//   key: "OpVzZHgSTjbmjs-GqpRZN-qhs-QAGxoUoYgBR976iDI",
//   url: "https://api.unsplash.com/",
// };
// const up_searchbox = document.querySelector(".search-box");
// up_searchbox.addEventListener("keypress", upSetQuerry);

// function upSetQuerry() {
//   if (event.keyCode == 13) {
//     upGetResults();
//   }
// }

// function upGetResults() {
//   fetch(`${apiu.url}photos/random/?client_id=${apiu.key}&query=weather&count=2`)
//     //   fetch(`${apiu.url}photos/random/?client_id=${apiu.key}`)
//     .then((photo) => {
//       return photo.json();
//     })
//     .then(upDisplayResults);
// }

// function upDisplayResults(photo) {
//   document.querySelector(".photos").style.display = "block";
//   document.querySelector(".img").src = `${photo[0].urls.regular}`;
//   document.querySelector(".img-1").src = `${photo[1].urls.regular}`;
//   // document.querySelector(".img-2").src = `${photo[2].urls.regular}`;
//   // document.querySelector(".img-3").src = `${photo[3].urls.regular}`;
// }
