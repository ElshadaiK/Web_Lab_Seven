const container = document.getElementById('container');

document.addEventListener("DOMContentLoaded", () => {
    display_image();
})



async function load_image() {

    //open the request 
    let response = await fetch("https://picsum.photos/v2/list?page=5&limit=50");
    let data = await response.json();

    return data;

}

async function display_image() {

    load_image().then(function(images) {
            let output = '';
            images.forEach(image => {
                let imgUrl = image.download_url.slice(0, image.download_url.length - 9) + "400/400"
                imgUrl
                output += `<div class="five wide column">
                        <div class="item">
                            <div class="images">
                                <img src="${imgUrl}" alt="">
                            </div>
                            <div class="content">
                                <div class="header author">${image.author}</div>
                            </div>
                        </div>
                    </div>`
            });
            container.innerHTML += output;

        })
        .catch(function(err) {
            // console.log(err);
        });


}