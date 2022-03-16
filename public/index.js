let button = document.getElementById('deletes')
let video = document.getElementById('myVid')

function deletes() {
    video.remove();
};

button.addEventListener('click', deletes)