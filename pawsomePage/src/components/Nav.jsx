import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavBar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative h-full lg:w-1/3 md:w-1/2 flex flex-col flex-wrap">
            <div className="w-full h-full hidden md:block">
                <nav className="w-full h-full">
                    <ul className="w-full h-full flex justify-between items-center gap-4">
                        <li>Home</li>
                        <li>Schedule</li>
                        <li>Products</li>
                        <li>Contact</li>
                        <li>About</li>
                    </ul>
                </nav>
            </div>
            <div className="h-full w-full md:hidden flex flex-col">
                <div className="h-full flex items-center justify-end relative">
                    <button onClick={toggleNavBar} className="p-2">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                    
                    {isOpen && (
                        <div className="absolute top-full right-0  bg-white shadow-lg p-2 w-40">
                            <nav>
                                <ul className="flex flex-col">
                                    <li className="py-1">Home</li>
                                    <li className="py-1">Schedule</li>
                                    <li className="py-1">Products</li>
                                    <li className="py-1">Contact</li>
                                    <li className="py-1">About</li>
                                </ul>
                            </nav>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

