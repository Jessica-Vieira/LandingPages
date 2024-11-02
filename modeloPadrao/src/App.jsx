import { Nav } from "./components/Nav"

function App() { return (
    <div className="bg-slate-800 h-screen w-full flex flex-col">

        <header className="bg-red-400 flex justify-between items-center p-6">
          <div className="bg-purple-800 h-16 w-16 flex items-center justify-center">
              logo
          </div>
          <Nav/>
        </header>

        <main className="bg-yellow-700 w-full flex flex-1 flex-col-reverse md:flex-row">
          <div className="bg-green-400 flex flex-1 flex-col items-start justify-center text-left p-6">
            <h1>titulo</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque.</p>
            <button>botao</button>
          </div>

          <div className="bg-violet-950 flex flex-1 justify-center items-center">
            <div className="bg-slate-500 bg-cover bg-center w-64 h-64 flex justify-center items-center">imagem</div>
          </div>
        </main>

    </div>
  )
}

export default App
