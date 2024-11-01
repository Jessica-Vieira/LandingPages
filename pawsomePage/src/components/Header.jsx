export function Header() {
  return (
    <header className=" h-16 flex justify-between">
        <div className="h-full w-16 flex items-center justify-center">
            Pawsome
        </div>
        <nav className="w-2/5">
            <ul className="h-full flex justify-between items-center">
                <li>Home</li>
                <li>Schedule</li>
                <li>Products</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
        </nav>
    </header>
  )
}
