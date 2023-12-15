import { MaxWidthWrapper } from ".";
import { Button, buttonVariants } from "@/components/ui/button";

export function Hero() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Read your favourite <span className="text-orange-600">books</span>.
        </h1>
        <p className="mt-5 max-w-prose text-zinc-200 sm:text-lg">
          The Library allows you to read your favourite books online and
          offline. Just upload your hopefully-not-pirated-pdf and begin reading.
        </p>

        <Button
          className={buttonVariants({
            size: "lg",
            className: "mt-5 ",
          })}
        >
          Get Started
        </Button>
      </MaxWidthWrapper>
      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0.5 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50% - 11rem)] aspect-[1155/678] w-[36.125rem] -translate-y-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#fcc189] opacity-30 sm:left-[calc(50% - 30rem)] sm:w-[72.1875rem]"
            />
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0.5 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50% - 13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#fcc189] opacity-30 sm:left-[calc(50% - 36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl  sm:text-5xl">
              Start reading at
              <span className="text-orange-500"> The Library.</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Carrying your books with you has never been easier.
            </p>
          </div>
        </div>

        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-extrabold text-orange-500">
                Step 1
              </span>
              <span className="text-xl font-semibold">
                {" "}
                Sign up for an account
              </span>
              <span className="mt-2 text-zinc-2">
                Either start out with a free account or choose the{" "}
                <a
                  href="/pricing"
                  className="text-orange-600 underline underline-offset-2"
                >
                  pro plan
                </a>
                .
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-extrabold text-orange-500">
                Step 2
              </span>
              <span className="text-xl font-semibold">
                {" "}
                Upload your PDF book file
              </span>
              <span className="mt-2 text-zinc-2">
                We&apos;ll sort and shelf your books alphabetically for you.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-extrabold text-orange-500">
                Step 3
              </span>
              <span className="text-xl font-semibold"> Start reading</span>
              <span className="mt-2 text-zinc-2">Anytime - anywhere.</span>
            </div>
          </li>
        </ol>
      </div>
    </>
  );
}
