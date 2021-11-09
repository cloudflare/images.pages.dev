import type { FC } from "react";
import moment from "moment";
import { DownloadIcon } from "./DownloadIcon";
import { EyeIcon } from "./EyeIcon";

const ImageCard: FC<{ image: Image }> = ({ image }) => {
  return (
    <div className="my-3 shadow-lg rounded-b-xl">
      <figure>
        <div className="sm:aspect-w-1 sm:aspect-h-1">
          <img
            src={image.previewURL}
            className="w-full object-contain"
            alt={image.alt}
          />
        </div>
        <figcaption className="m-3">
          <code>{image.name}</code>
          <p>
            <time dateTime={image.uploaded} className="text-sm">
              {moment(image.uploaded).fromNow()}
            </time>
          </p>
        </figcaption>
      </figure>
      <div className="flex justify-end p-2">
        <div className="flex items-center mr-2">
          <svg className="h-8 w-8 p-1">
            <EyeIcon />
          </svg>
          <span className="tabular-nums">{image.downloadCount}</span>
        </div>
        <a
          className="text-green-800 bg-green-200 rounded-md h-8 w-8 p-1"
          aria-label="Download"
          href={`/api/download?id=${image.id}`}
          download
        >
          <DownloadIcon />
        </a>
      </div>
    </div>
  );
};

export const ImageGrid: FC<{ images: Image[] }> = ({ images }) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {images.map((image) => (
        <ImageCard image={image} key={image.id} />
      ))}
    </div>
  );
};
