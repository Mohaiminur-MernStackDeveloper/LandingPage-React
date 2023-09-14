import MainHeader from "./Components/MainHeader"
import Slider from "./Components/Slider"
import TitleHeader from "./Components/TitleHeader"

function App() {

  return (
    <div>
      <TitleHeader/>
      <div className="sticky top-0 z-40">
        <MainHeader/>
      </div>
      <Slider/>
    </div>
  )
}

export default App
