import ButtonsNav from "./components/ButtonsNav/ButtonsNav";
import SearchForm from "./components/SearchForm/SearchForm";
import StoriesContent from './components/StoriesContent/StoriesContent';

function App() {
  return (
    <main className="container">
      <SearchForm/>
      <ButtonsNav/>
      <StoriesContent/>
    </main>
  );
}

export default App;
