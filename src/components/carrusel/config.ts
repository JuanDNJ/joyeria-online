import type { ImageInputFormat } from "astro"
import item1 from "./images/099ba28f-089c-42ee-acae-62d8e8660362.png"
import item2 from "./images/443e67f9-3aaa-4926-8d4b-3346504030e5.png"
import item3 from "./images/46a86d79-eb24-4c1f-8e30-fdd7dd710e17.png"
import item4 from "./images/77094dc4-e17a-49f6-854f-b81ecc64116f.png"
import item5 from "./images/d72bc375-6ce9-46ae-a44e-f3d904dcf6ad.png"

export type ImageMetadata = {
    src: string;
    width: number;
    height: number;
    format: ImageInputFormat;
    orientation?: number;
    ["isESMImport"]?: true;
}
export type CarruselItem = {
    id: number; 
    alt: string;
    mark?: string;
   
} & ImageMetadata

export const CARRUSEL_ITEMS: CarruselItem[] = [
    { id: 1, src: item1.src, mark:"Ocean", alt: "Ocean", width: 512, height: 512, orientation: 1, format: "png", ["isESMImport"]: true },
    { id: 2, src: item2.src, mark:"Aureno" ,alt: "Aureno", width: 512, height: 512, orientation: 1, format: "png", ["isESMImport"]: true },
    { id: 3, src: item3.src, mark:"Brillar", alt: "Brillar", width: 512, height: 512, orientation: 1, format: "png", ["isESMImport"]: true },
    { id: 4, src: item4.src, mark:"Roma", alt: "Roma", width: 512, height: 512, orientation: 1, format: "png", ["isESMImport"]: true },
    { id: 5, src: item5.src, mark:"Diamond", alt: "Diamond", width: 512, height: 512, orientation: 1, format: "png", ["isESMImport"]: true },
];
