import ("./main.scss")
import items from "./items"
import { drawGalleryItem } from "./item"

const wrap = document.getElementById('gallery')
items.map(item=> wrap.appendChild(drawGalleryItem(item)))