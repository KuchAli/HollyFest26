fetch("../gallery.json")
    .then(response => response.json())
    .then(data => {
        const gallery = document.getElementById("galleryGrid");

        data.gallery.forEach(item => {
            gallery.innerHTML += `
                <div class="gallery-card">
                    <img src="${item.image}" alt="${item.title}">

                    <div class="gallery-info">
                        <h3>${item.title}</h3>
                        <p>${item.date}</p>
                    </div>
                </div>
            `;
        });
    })