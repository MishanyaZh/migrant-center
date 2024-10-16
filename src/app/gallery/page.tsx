import Image from "next/image";
import { galleryImages } from "../utils/galleryImages";
import { spinnerUrl } from "../constants";

export default function Page() {
  const imageWidth = 300;
  const imageHeight = 100;
  return (
    <div className="py-2 flex flex-col justify-center">
      <div className="gallery-box">
        {galleryImages.map(({ id, src }) => (
          <Image
            key={id}
            src={src}
            alt="image"
            priority={true}
            width={imageWidth}
            height={imageHeight}
            blurDataURL={spinnerUrl}
            className="w-full mb-2"
          />
        ))}
      </div>
    </div>
  );
}
