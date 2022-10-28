import "./App.css";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="flex flex-col lg:flex-row">
      <Navbar />
      <div className="w-screen lg:w-11/12 lg:px-4 bg-black min-h-max lg:h-screen">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
