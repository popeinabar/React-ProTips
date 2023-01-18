import Navbar from "./components/Navbar"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Form from "./components/Form"
import { Route, Routes } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/1" element={<Contact/>} />
          <Route path="/2" element={<Form/>} />
        </Routes>
      </div>
    </>
  )
}

export default App