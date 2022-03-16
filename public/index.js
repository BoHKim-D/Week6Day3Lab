let button = document.getElementById('deletes')
let video = document.getElementById('myVid')


function deletes() {
    if(button.id === 'deletes') {
        video.removeAttribute("src");
        button.innerText = "ADD IT BACK";
        button.setAttribute("id", "addb")
    } else if(button.id === "addb"){
        button.innerText = "Delete this stupid video."
        button.setAttribute("id", "deletes")
        video.setAttribute("src","https://www.youtube.com/embed/U9e3MFZI3zE")
    }
}

button.addEventListener('click', deletes)



