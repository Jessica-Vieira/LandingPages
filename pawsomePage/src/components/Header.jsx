import { Nav } from "./Nav";

export function Header() {
  return (
    <header className="h-1/6 flex justify-between font-PTsans px-6">
        <div className="h-full w-16 flex items-center justify-center">
            Pawsome
        </div>
        <Nav/>
    </header>
  )
}
