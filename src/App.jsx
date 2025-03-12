import Header from "./Component/Header";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import About from "./Component/About";
import Project from "./Component/Project";
import "./App.css";


const App = () => {
    return(
        <div>
            <Header/>
            <Home/>
            <About/>
            <Project/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App;