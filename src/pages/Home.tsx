import type { FC } from "react";
import useSWR from "swr";

import { Header } from "../components/Header";
import { ImageGrid } from "../components/ImageGrid";

export const Home: FC = () => {
  const { data: images, error } = useSWR<Image[]>("/api/images");

  return (
    <div className="max-w-6xl mx-auto p-4">
      <Header />
      <main>
        {images ? <ImageGrid images={images} /> : undefined}
        {error ? (
          <div>An unexpected error has occurred. Please try again</div>
        ) : undefined}
      </main>
    </div>
  );
};
