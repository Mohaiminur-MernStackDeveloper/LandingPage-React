import AboutResto from "./Components/AboutResto"
import GalleryStore from "./Components/GalleryStore"
import MainHeader from "./Components/MainHeader"
import MenuList from "./Components/MenuList"
import NewItems from "./Components/NewItems"
import OurExperties from "./Components/OurExperties"
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
      <AboutResto/>
      <NewItems/>
      <MenuList/>
      <GalleryStore/>
      <OurExperties/>
    </div>
  )
}

export default App
