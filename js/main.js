var image = document.querySelector("img"),
input = document.querySelector("input");

input.addEventListener("change", ()=>{
    image.scr = url.creatObjectURL(input.file[0]);
})
  