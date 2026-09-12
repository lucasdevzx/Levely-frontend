import './App.css'
import Home from "./components/features/Home/Home.jsx";
import Footer from "./components/layout/Footer/Footer.jsx";

function App() {

  return (
    <>
        <main className={"flex-1 p-6 box-border"}>

            <Home />

        </main>
        <Footer />
    </>
  )
}

export default App
