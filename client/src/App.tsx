import { Blogs } from "./components/Blogs";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { OpenSource } from "./components/OpenSource";
import { Tweets } from "./components/Tweets";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Experience } from "./components/Experience";

export default function App() {
  return (
    <div className="bg-lightgrey">
      <Header />
      <div className="container mx-auto">
        <div className="p-5 flex justify-center align-center">
          <div className="flex-column">
            <About></About>
            <Contact></Contact>
            <OpenSource></OpenSource>
            <Blogs></Blogs>
            <Experience></Experience>
            <Tweets></Tweets>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
