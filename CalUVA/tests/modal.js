const randomButton = document.getElementById("CORS");
const modal = document.getElementById("modal");
const iframe = document.getElementById("iframe");
const close = document.getElementsByClassName("close")[0];
const urls = [
  "https://cors-anywhere.herokuapp.com/corsdemo?accessRequest=27c9351dfd7f0a659c688b29c77bee15558126a3f6f8cfdfd64ae695012e65f0",
  "https://cors-anywhere.herokuapp.com/corsdemo?accessRequest=532131026436b90d0c92b912d2102c78d8b60beb43484a84a6291ffdaccc97cd",
  "https://cors-anywhere.herokuapp.com/corsdemo?accessRequest=be4ff9b7a2747a72d00203c0e1850af816ec79cfa9332c403f789fe6c9d59513",
  "https://cors-anywhere.herokuapp.com/corsdemo?accessRequest=abd3297a3b03994e2dfb0afc31ef8cb483656ade728e5d5c087d55d4951bddb8",
  "https://cors-anywhere.herokuapp.com/corsdemo?accessRequest=3c3f4e452f07b4464e7b9ba50d978d61a53386701a94e248cfeac96ae8e15856"
];

randomButton.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * urls.length);
  iframe.src = urls[randomIndex];
  modal.style.display = "block";
});

close.addEventListener("click", function() {
  modal.style.display = "none";
  iframe.src = "";
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    iframe.src = "";
  }
});

// const openModalButton = document.getElementById("openModalButton");
// const modal = document.getElementById("modal");
// const close = document.getElementsByClassName("close")[0];

// openModalButton.addEventListener("click", function() {
//   modal.style.display = "block";
// });

// close.addEventListener("click", function() {
//   modal.style.display = "none";
// });

// window.addEventListener("click", function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// });
