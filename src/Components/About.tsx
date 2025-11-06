import Titre from "./Titre"
import decoS from "../assets/photo/decoS.jpg"
import { CalendarSync, LetterText, Paintbrush } from "lucide-react"

const aboutSections = [
    {
        id: 1,
        title: "Developpeur Frontend",
        description: "je suis un developpeur frontend avec une bonne experience.",
        icon: <LetterText className="text-accent scale-150" />,
    },
    {
        id: 2,
        title: "Developpeur Backend",
        description: "Je metrise les bases du backend pour cree des applications robuste et intuitive.",
        icon: <CalendarSync className="text-accent scqle-150 "/>,
    },
    {
        id: 3,
        title: "Assez interesse par l'UI/UX",
        description: "Crees des interface utilisAteur attrayante (Belle-couleur,) beau ,facile a comprendre et a utiliser est ma priorite ",
        icon: <Paintbrush className="text-accent scale-150" />,
    }
];

const About = () => {
    return(
        <div className="bg-base-300 p-10 mb-5 md:mb-32" id="About">
            <Titre title="A propos"/>
            <div className="md:h-screen flex justify-center items-center">
                <div className="hidden md:block mb-30">
                  <img src={decoS} alt="" className="w-96 h-96 object-cover rounded-2xl border-2 border-accent shadow xl"/>
                </div>

                <div className="md:ml-4 space-y-4 mb-30">
                        {aboutSections.map((section)=> (
                            <div key={section.id} className="flex flex-col md:flex-row item-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl">

                                <div className="mb-2 md:mb-0 items-center">
                                    {section.icon}
                                </div>

                                <div className="md:ml-4 text-center md:text-left">
                                    <h2 className="text-xl font-bold md-1">
                                        {section.title}
                                    </h2>
                                    <p className="text-sm">
                                        {section.description}
                                    </p>
                                </div>

                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}
export default About