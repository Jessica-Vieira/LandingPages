import { First } from "./components/First"
import { Header } from "./components/Header"
import { Second } from "./components/Second"

function App() {
  return (
        <>
          <div className="h-screen flex flex-col bg-[url('./assets/background.png')] bg-cover px-6">
            <Header/>
            <First/>
          </div>
          <div className="h-screen">
            <Second/>
          </div>
        </>
        
      
    
    
  )
}

export default App
