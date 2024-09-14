document.addEventListener("DOMContentLoaded", () => {
    const dogImages = document.querySelectorAll(".dog-img");
    const catImages = document.querySelectorAll(".cat-img");

    dogImages.forEach(image => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data => {
                image.src = data.message;
            });
    });

    catImages.forEach(image => {
        image.src = "https://placekitten.com/200/200";
    });
});