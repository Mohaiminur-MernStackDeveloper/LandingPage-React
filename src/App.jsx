import MainHeader from "./Components/MainHeader"
import Slider from "./Components/Slider"
import SubSlider from "./Components/SubSlider"
import TitleHeader from "./Components/TitleHeader"

function App() {

  return (
    <div>
      <TitleHeader/>
      <div className="sticky top-0 z-40">
        <MainHeader/>
      </div>
      <Slider/>
      <SubSlider/>
    </div>
  )
}

export default App
