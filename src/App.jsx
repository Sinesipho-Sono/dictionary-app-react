import "./App.css";
import Dictionary from "./Dictionary.jsx";
function App() {
  return (
    <div className="App ">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="airport" />
        </main>
        <footer className="text-center m-5">
          <small>
            This website was coded by Sinesipho Sono and it is open-sourced
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
