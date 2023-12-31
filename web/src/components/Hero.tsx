import { MaxWidthWrapper } from ".";
import { Button, buttonVariants } from "@/components/ui/button";

export const Hero = () => {
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
              className="relative left-[calc(50% - 11rem)] aspect-[1155/678] w-[36.125rem] -translate-y-1/2 rotate-[10deg] bg-gradient-to-tr from-[#ff80b5] to-[#fcc189] opacity-30 sm:left-[calc(50% - 30rem)] sm:w-[72.1875rem]"
            />
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0.5 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            {/* <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50% - 13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#fcc189] opacity-30 sm:left-[calc(50% - 36rem)] sm:w-[72.1875rem]"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};
