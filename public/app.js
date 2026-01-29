// Random dog
const randomBtn = document.getElementById("randomBtn");
const randomResult = document.getElementById("randomResult");


if (randomBtn) {
randomBtn.addEventListener("click", async () => {
try {
randomResult.innerHTML = "Loading...";
const res = await fetch("/api/random");
if (!res.ok) throw new Error("API error");
const data = await res.json();
randomResult.innerHTML = `<img src="${data[0].url}" width="400">`;
} catch (err) {
randomResult.innerHTML = "❌ Error loading dog";
}
});
}


// Breed search
const searchBtn = document.getElementById("searchBtn");
const breedInput = document.getElementById("breedInput");
const breedResult = document.getElementById("breedResult");


if (searchBtn) {
searchBtn.addEventListener("click", async () => {
const breed = breedInput.value.trim();


if (!breed) {
breedResult.innerHTML = "⚠️ Enter a breed name";
return;
}


try {
breedResult.innerHTML = "Searching...";
const res = await fetch(`/api/breed?q=${breed}`);


if (res.status === 404) {
breedResult.innerHTML = "❌ Breed not found";
return;
}


const data = await res.json();


breedResult.innerHTML = `
<h3>${data.breed.name}</h3>
<p>${data.breed.temperament || "No temperament info"}</p>
<img src="${data.image.url}" width="400">
`;


} catch (err) {
breedResult.innerHTML = "❌ Server error";
}
});
}
