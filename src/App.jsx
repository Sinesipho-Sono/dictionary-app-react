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
            This website was coded by{" "}
            <a
              href="https://github.com/Sinesipho-Sono"
              rel="no referrer"
              target="_blank"
            >
              Sinesipho Sono
            </a>{" "}
            and it is{" "}
            <a
              href="https://github.com/Sinesipho-Sono/dictionary-app-react"
              rel="no referrer"
              target="_blank"
            >
              {" "}
              open-sourced
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
