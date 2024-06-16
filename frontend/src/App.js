import "./App.css";
import Langingpage from "./Screens/Landing Page/langingpage";
import MyNotes from "./Screens/MyNotes/MyNotes";
import Header from "./components/Header/header";
import Footer from "./components/footer/footer";
import { BrowserRouter, Route } from "react-router-dom"

const App = () => {
  <BrowserRouter>
    <Header />
    <main >
    <Route path="/" Component={Langingpage} exact />
    <Route path="/mynotes" Component={() => <MyNotes />} />
    </main>
    <Footer />
  </BrowserRouter>;
};

export default App;
