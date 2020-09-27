// const search = document.querySelector(".search-box");
// const matchlist = document.getElementById("match-list");

// // search citys and filters

// const searchStates = async (searchText) => {
//   const res = await fetch("/api/city.list.json");
//   const cities = await res.json();

//   //  get matches to current text inputs
//   let matches = cities.filter((cities) => {
//     const regex = new RegExp(`^${searchText}`, "gi");
//     return cities.name.match(regex);
//   });

//   if (searchText.length === 0) {
//     matches = [];
//     matchlist.innerHTML = "";
//   }

//   outputHtml(matches);
// };

// // Show results in html

// const outputHtml = (matches) => {
//   if (matches.length > 0) {
//     const html = matches
//       .slice(0, 3)
//       .map(
//         (match) => `
//         <div class='show-results'><h4>${match.name} <span>(${match.country})</span></h4>
//         <small>${match.coord.lon}, ${match.coord.lat}</small>
//         </div>`
//       )
//       .join("");

//     matchlist.innerHTML = html;

//     const results = document.querySelector(".show-results");
//     results.addEventListener("click", () => {
//       return results.value;
//     });
//   }
// };

// search.addEventListener("input", () => {
//   searchStates(search.value);
// });
