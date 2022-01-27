boton = document.querySelector(".submit");
imgBx = document.querySelector(".gitBx");
boton.addEventListener("click", async()=>{
  const input = document.querySelector("input").value
  const response = await fetch(`https://api.github.com/users/${input}`);
  const data = await response.json();
  const img = document.createElement("img");
  img.src = data.avatar_url;
  imgBx.appendChild(img);
})