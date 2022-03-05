import { Blog } from "./components/Blog";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { OpenSource } from "./components/OpenSource";
import { Tweets } from "./components/Tweets";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div className="bg-lightgrey">
      <Header />
      <div className="container mx-auto">
        <div className="p-5 flex justify-center align-center">
          <div className="flex-column">
            <About></About>
            <Contact></Contact>
            <OpenSource></OpenSource>
            <Tweets></Tweets>
            <Blog></Blog>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
