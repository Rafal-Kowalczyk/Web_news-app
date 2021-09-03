import ButtonsNav from "./components/ButtonsNav";
import SearchForm from "./components/SearchForm";
import StoriesContent from "./components/StoriesContent";

function App() {
  return (
    <main className="container">
      <SearchForm />
      <ButtonsNav />
      <StoriesContent />
    </main>
  );
}

export default App;
