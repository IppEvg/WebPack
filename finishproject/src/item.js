export function drawGalleryItem(item){
    const itemElement = document.createElement('div');
    itemElement.classList="gallery-item";
    if(item.type==="picture"){
    const imageElement = document.createElement('img');
    imageElement.classList="gallery-item__image";
    imageElement.src = item.resource;
    itemElement.appendChild(imageElement);
    } else if(item.type==="sound"){
        const audioElement = document.createElement('audio');
    audioElement.classList="gallery-item__image";
    audioElement.src = item.resource;
    audioElement.controls = true;
    itemElement.appendChild(audioElement);
    } else if(item.type==="video"){
        const videoElement = document.createElement('video');
        videoElement.classList="gallery-item__video";
        videoElement.src = item.resource;
        videoElement.controls = true;
        videoElement.metadata = true;
        itemElement.appendChild(videoElement);
    }
    const titleElement = document.createElement('span');
    titleElement.classList='gallery-item__title';
    titleElement.textContent=item.title;
    

    
    itemElement.appendChild(titleElement);

    return itemElement;
}