import { FC, useState } from "react";
import { Header } from "../components/Header";
import { ExternalLink } from "../components/ExternalLink";
import { AccountSelector } from "../components/AccountSelector";

export const Setup: FC = () => {
  const [accountId, setAccountId] = useState("");

  return (
    <div className="max-w-6xl mx-auto p-4">
      <Header login={false} />
      <main>
        <p>
          Thanks for trying out our full-stack application built on Cloudflare
          Pages.
        </p>
        <p className="mt-2">
          This demo app uses{" "}
          <ExternalLink
            href="https://dash.cloudflare.com/sign-up/images"
            className="underline"
          >
            Cloudflare Images
          </ExternalLink>{" "}
          and{" "}
          <ExternalLink
            href="https://dash.cloudflare.com/sign-up/teams"
            className="underline"
          >
            Cloudflare Access
          </ExternalLink>
          , so make sure you've activated these in the Cloudflare Dashboard.
        </p>
        <form className="mt-4" action="#">
          <AccountSelector onSelectAccount={setAccountId} />

          {accountId !== "" ? (
            <>
              <div>
                <h2 className="font-bold text-lg mt-8">
                  Create Cloudflare Image variants
                </h2>
                <p className="mt-4">
                  We will automatically create three variants for you:
                  'preview', 'blurred', and 'highres'.
                </p>
              </div>
              <div></div>
            </>
          ) : undefined}
        </form>
      </main>
    </div>
  );
};
