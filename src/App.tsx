import { Navbar } from "./components/Header/Header";
import { QRCodeGenerator } from "./components/Main/QRCodeGenerator";

import "./App.css";
import { LocationSearch } from "./components/Main/LocationSearch";

export function App() {
  return (
    <>
      <header className="flex justify-center w-full ">
        <Navbar />
      </header>
      <main>
        <QRCodeGenerator />
        <LocationSearch />
      </main>
    </>
  );
}
