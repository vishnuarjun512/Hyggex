import CreateFlashCard from "./components/CreateFlashCard";
import FAQ from "./components/FAQ";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="md:w-[90%] flex flex-col justify-center p-2 gap-2">
        <Header />
        <Main />
        <CreateFlashCard />
        <FAQ />
      </div>
    </div>
  );
}

export default App;
