import type { FC } from "react";
import { Link } from "react-router-dom";

export const Home: FC = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="admin">Login</Link>
            </li>
          </ul>
        </nav>
        <h1>Image sharing platform built on Cloudflare Pages</h1>
      </header>
      <main></main>
    </div>
  );
};
