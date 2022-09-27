import ("./main.scss");
import items from "./items.js";
import { drawGalleryItem } from "./item.js";

const wrap = document.getElementById('gallery');
items.map(item=> wrap.appendChild(drawGalleryItem(item)));