import type { FC } from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";
import { jsonFetcher } from "../utils/jsonFetcher";
import { ImageGrid } from "../components/ImageGrid";

export const Home: FC = () => {
  const { data: images, error } = useSWR<Image[]>("/api/images", jsonFetcher);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <header className="flex items-center pb-20">
        <h1 className="flex-1 text-lg md:text-xl lg:text-2xl">
          Image sharing platform built on{" "}
          <a
            href="https://pages.cloudflare.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Cloudflare Pages
          </a>
        </h1>
        <nav className="ml-4">
          <ul>
            <li>
              <Link to="admin" className="underline">
                Log in
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {images ? <ImageGrid images={images} /> : undefined}
        {error ? (
          <div>An unexpected error has occurred. Please try again</div>
        ) : undefined}
      </main>
    </div>
  );
};
