import { First } from "./components/First"
import { Header } from "./components/Header"

function App() {
  return (
    <div className="mx-auto h-screen w-full bg-[url('./assets/background.png')] px-20">
      <Header/>
      <First/>
    </div>
    
  )
}

export default App
