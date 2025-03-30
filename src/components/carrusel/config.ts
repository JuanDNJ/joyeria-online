import type { ImageInputFormat } from "astro"
import item1 from "./images/099ba28f-089c-42ee-acae-62d8e8660362.png"
import item2 from "./images/443e67f9-3aaa-4926-8d4b-3346504030e5.png"
import item3 from "./images/46a86d79-eb24-4c1f-8e30-fdd7dd710e17.png"
import item4 from "./images/77094dc4-e17a-49f6-854f-b81ecc64116f.png"
import item5 from "./images/d72bc375-6ce9-46ae-a44e-f3d904dcf6ad.png"
import mookCarrusel from "../../mook/carrusel.json"
export type ImageMetadata = {
    src: string;
    width: number;
    height: number;
    format: string;
    orientation?: number;
    ["isESMImport"]?: true;
}
export type CarruselItem = {
    id: number; 
    alt: string;
    brand?: string;
    src: string;
    width: number;
    height: number;
    format?: string;
    orientation?: number;
    ["isESMImport"]?: true;
   
}


let CARRUSEL_ITEMS: CarruselItem[] = [
    { id: 1, src: item1.src, brand:"Ocean", alt: "Ocean", width: 512, height: 512, orientation: 1, format: "png", ["isESMImport"]: true },
    { id: 2, src: item2.src, brand:"Aureno" ,alt: "Aureno", width: 512, height: 512, orientation: 1, format: "png", ["isESMImport"]: true },
    { id: 3, src: item3.src, brand:"Brillar", alt: "Brillar", width: 512, height: 512, orientation: 1, format: "png", ["isESMImport"]: true },
    { id: 4, src: item4.src, brand:"Roma", alt: "Roma", width: 512, height: 512, orientation: 1, format: "png", ["isESMImport"]: true },
    { id: 5, src: item5.src, brand:"Diamond", alt: "Diamond", width: 512, height: 512, orientation: 1, format: "png", ["isESMImport"]: true },
];

CARRUSEL_ITEMS = CARRUSEL_ITEMS.map((item: CarruselItem, index) => {
    return {
        id:  mookCarrusel.carrusel[index].id,
        src:  item.src,
        alt:  mookCarrusel.carrusel[index].alt,
        brand:  mookCarrusel.carrusel[index].brand,
        width:  mookCarrusel.carrusel[index].width,
        height:  mookCarrusel.carrusel[index].height,
        orientation: mookCarrusel.carrusel[index].orientation,
        format: mookCarrusel.carrusel[index].format,
    };
})
export  {
    CARRUSEL_ITEMS
}
