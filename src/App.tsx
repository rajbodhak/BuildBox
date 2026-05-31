import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FlowStrip from './components/FlowStrip'
import ProjectGrid from './components/ProjectGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="w-full max-w-[1126px] mx-auto border-x border-[var(--border)] min-h-svh flex flex-col">
      <Navbar />
      <Hero />
      <FlowStrip />
      <ProjectGrid />
      <Footer />
    </div>
  )
}

export default App