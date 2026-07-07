
fetch("../video.json")
    .then(response => response.json())
    .then(data =>{
        const videoGrid = document.getElementById("videoGrid");

        data.videos.forEach(item =>{
            videoGrid.innerHTML += `
                <div class="video-card">

                    <video controls poster="${item.thumbnail}">
                        <source src="${item.video}" type="video/mp4">
                    </video>

                    <div class="video-info">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    </div>

                </div>
            `;
        });
    });