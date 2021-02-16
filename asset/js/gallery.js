const image = document.getElementsByClassName('carousel-item');
document.addEventListener("DOMContentLoaded", () => {
    //load_fromPlaceHolder();
    setInterval(
        loadDataNew, 6000
    );
});
async function load_fromPlaceHolder_new() {

    //open the request 
    let response = await fetch('https://picsum.photos/seed/picsum/200/300');

    let data = await response.url;

    return data;

}

function loadDataNew() {
    load_fromPlaceHolder_new().then(function(posts) {
            //iterate over each post [100 posts]
            let output = '';
            console.log(posts)
            output += `<img src=${posts}>`;
            image[0].innerHTML = output;
        })
        .catch(function(err) {
            console.log(err);
        });

}