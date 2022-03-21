import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Incipit from "./components/incipit/Incipit";
import BoxContainer from "./components/boxContainer/BoxContainer";
import ArticlesContainer from "./components/articlesContainer/ArticlesContainer";
import Footer from "./components/footer/Footer";

import "./styles.css";

export default function App() {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <Incipit />
        <BoxContainer />
        <ArticlesContainer />
      </main>
      <Footer />
    </>
  );
}
