import { Header } from "./components/Header";
import { BookList } from "./components";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import { buttonVariants } from "./components/ui/button";
function App() {
  return (
    <>
      <Header />
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Read your favourite <span className="text-primary">books</span>.
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
          <span className="text-primary">The Library</span> allows you to read
          your favourite books online and offline. Just upload your{" "}
          <span className="font-semibold underline text-primary">
            hopefully-not-pirated-pdf{" "}
          </span>
          and begin reading.
        </p>

        <a
          className={buttonVariants({
            size: "lg",
            className: "mt-5 font-extrabold bg-primary text-white",
          })}
          href="/"
        >
          Get started{" "}
          <span className="ml-1" aria-hidden="true">
            &rarr;
          </span>
        </a>
      </MaxWidthWrapper>
      <BookList />
    </>
  );
}

export default App;
