import LogoReact from "./images/react.svg";
import LogoReact2 from "./images/react.png";
import LogoVue from "./images/vue.png";
import LogoAngular from "./images/angular.png";

import "./App.css";
import Logos from "./data.json";
// console.log(Logos);

function App() {
  return (
    <div className="App">
      <div>
        <h1>Logos</h1>

        <h3>images from public</h3>
        <img src="/vite.svg" className="logo" alt="Vite logo SVG" />
        <img src="/react.png" className="logo" alt="React logo PNG" />
        <img src="/vue.png" className="logo" alt="Vue logo PNG" />
        <img src="/angular.png" className="logo" alt="Angular logo PNG" />

        <br />
        <h3>images from public/images</h3>
        <img src="/images/vite.svg" className="logo" alt="Vite logo SVG" />
        <img src="/images/react.png" className="logo" alt="React logo PNG" />
        <img src="/images/vue.png" className="logo" alt="Vue logo PNG" />
        <img src="/images/angular.png"className="logo"alt="Angular logo PNG"  />

        <br />
        <h3>images from src/assets via import</h3>
        <img src={LogoReact} className="logo react" alt="React logo SVG" />
        <img src={LogoReact2} className="logo react" alt="React logo PNG" />
        <img src={LogoVue} className="logo react" alt="Vue logo PNG" />
        <img src={LogoAngular} className="logo react" alt="Angular logo PNG" />

        {/*  */}
        <h3>images from JSON without looping</h3>
        <img src={Logos[0].URL} className="logo" alt="Vite logo SVG" />
        <img src={Logos[1].URL} className="logo" alt="React logo PNG" />
        <img src={Logos[2].URL} className="logo" alt="Vue logo PNG" />
        <img src={Logos[3].URL} className="logo" alt="Angular logo PNG" />

        <h3>images from JSON with looping</h3>
        {Logos && Logos.map((logo) => {
          return (
          <div key={logo.id}>
            <img src={logo.URL} className="logo" alt="logo" />
            <br />
            {logo.name}
          </div>
          )}
          )
        }
      </div>
    </div>
  );
}

export default App;
