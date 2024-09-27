import Banner from "./components/Banner"
import HotDesserts from "./components/HotDesserts"
import Navber from "./components/Navber"
import StorySection from "./components/StorySection"
import ExploreOurMenu from "./components/ExploreOurMenu"
import OurMostPopularRecipies from "./components/OurMostPopularRecipies"

function App() {

  return (
    <>
      <div>
        <Navber />
        <Banner />
        <HotDesserts />
        <StorySection />
        <ExploreOurMenu />
        <OurMostPopularRecipies />
      </div>
    </>
  )
}

export default App
