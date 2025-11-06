import { Cuboid } from "lucide-react"
const Navbar = () => {
    return (
        <div className="flex justify-center md:justify-between items-center p-4">
            <a href="" className="flex items-center font-bold text-3xl md:text-xl">
                <Cuboid  className="mr-2"/>
              ROLINS <span className="text-accent">DEV</span>
            </a>
            <ul className="hidden md:flex space-x-4">
                <li>
                    <a href="#Home" className="btn btn-sm btn-ghost font-serif text-2xl p-4">
                        Accueil
                    </a>
                </li>
                <li>
                    <a href="#About" className="btn btn-sm btn-ghost font-serif text-2xl p-4">
                        A Propos
                    </a>
                </li>
                <li>
                    <a href="#Experiance" className="btn btn-sm btn-ghost font-serif text-2xl p-4">
                        Mes Connaissance
                    </a>
                </li>
                 <li>
                    <a href="#Projets" className="btn btn-sm btn-ghost font-serif text-2xl p-4">
                        Mes projets
                    </a>
                </li>

            </ul>
        </div>
    )
}

export default Navbar