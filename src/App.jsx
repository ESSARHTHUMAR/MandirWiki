import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { Footer, Footfall, Header, HowToReach, Registration, Stay, Temple, Temprature, TimeToVisit, Timings, TrekDistance } from "./containers";

function App() {
  return (
    <div className="app">
    <Navbar />
      <Header />
      <Temple/>
      <TimeToVisit />
      <HowToReach />
      <Registration />
      <TrekDistance />
      <Footfall />
      <Temprature />
      <Stay />
      <Timings />
      <Footer />
    </div>
  );
}

export default App;
