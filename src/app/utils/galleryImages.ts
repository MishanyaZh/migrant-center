import fs from "fs";
import path from "path";

const imagesDir = path.join(process.cwd(), "public", "img", "gallery");
const imageFiles = fs.readdirSync(imagesDir);

export const galleryImages = imageFiles.map((file, index) => ({
  id: index + 1,
  src: `/img/gallery/${file}`,
}));
