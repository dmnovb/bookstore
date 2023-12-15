import { Library, Header, MaxWidthWrapper, Hero } from "./components";
function App() {
  return (
    <>
      <Header />
      <MaxWidthWrapper>
        <Hero />
        <Library />
      </MaxWidthWrapper>
    </>
  );
}

export default App;
