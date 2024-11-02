import { Menu, X } from "lucide-react";
import { useState } from "react"

export function Nav() {
    const [isOpen, setIsOpen] =useState(false);

    const toggleButton =()=>{
        setIsOpen(!isOpen);
    }

    return (
            <>
                <div className="bg-pink-600 w-1/2 hidden md:block"> 
                        <nav className="bg-pink-600 w-full">
                        <ul className="bg-blue-500 flex justify-between gap-4">
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                        <li>item 4</li>
                        </ul>
                    </nav>
                </div>
                <div className="relative md:hidden block">
                    <button onClick={toggleButton}
                            aria-expanded={isOpen} 
                            aria-controls="mobile-nav">
                                {isOpen? <X/>:<Menu/>}
                    </button>
                    {isOpen &&  
                    <nav className="bg-pink-600 block md:hidden absolute top-full right-1 w-20">
                        <ul className="bg-blue-500 flex flex-col space-y-2 p-4">
                            <li>item 1</li>
                            <li>item 2</li>
                            <li>item 3</li>
                            <li>item 4</li>
                        </ul>
                    </nav>
                    }
                </div>
                
            </>
            
    )
}
