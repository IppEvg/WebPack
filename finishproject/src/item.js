export function drawGalleryItem(item){
    const itemElement = document.createElement('div')
    itemElement.classList="gallery-item"

    const imageElement = document.createElement('img')
    imageElement.classList="gallery-item__image"

    const titleElement = document.createElement('span')
    titleElement.classList='gallery-item__title'
    titleElement.textContent=item.title

    itemElement.appendChild(imageElement)
    itemElement.appendChild(titleElement)

    return itemElement

}