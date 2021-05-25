import './App.css';
import Nav from "./components/Nav";
import SearchContainer from "./SearchContainer";

function App() {
  return (
    <div className="App">
		<div className="Nav">
			<Nav />
		</div>
		<div className="MainContents">
			<SearchContainer />
		</div>
    </div>
  );
}

export default App;
