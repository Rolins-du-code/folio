import Titre from "./Titre"

import react from "../assets/react.svg"
import html from "../assets/html.png"
import css from "../assets/css.png"
import git from "../assets/git.png"
import php from "../assets/php.png"
import vue from "../assets/vue.png"
import tailwind from "../assets/tailwind.png"
import laravel from "../assets/laravel.png"
import synphony from "../assets/synphony.png"
import labtop from "../assets/photo/laptop.jpg"
import box from "../assets/photo/box.jpg"
import manette from "../assets/photo/manete.jpg"

const skills = [

    {id: 1, name: "HTML", image: html},
    {id: 2, name: "CSS", image: css},
    {id: 9, name: "PHp", image: php},
    {id: 3, name: "Github", image: git},
    {id: 4, name: "React", image: react},
    {id: 5, name: "Vue.js", image: vue},
    {id: 6, name: "Tailwind CSS", image: tailwind},
    {id: 7, name: "Synphony", image: synphony},
    {id: 8, name: "Laravel", image: laravel},
    
]

const projets = [
    {
        id: 1,
        role: "Developpeur",
        company: "code-Division",
        periode: "octobre 2025 - present",
        description: [
            "Developeur frondEnd pour une application de jeu en communote ofline"
        ],
        image: manette ,
    },
    {
        id: 2,
        role: "Developpeur FullStack",
        company: "code-Division",
        periode: "octobre 2025 - present",
        description: [
            "Developpeur de diverse solution informatique permettant de rendre la vie facile au utilisateur",
            "conception de site-web et application web de qualiter pour diverse cliants"
        ],
        image: box,
    },
    {
        id: 3,
        role: "Developpeur FullStack",
        company: "freelans",
        periode: "janvier 2025 - 0ctobre 2025",
        description: [
            "Developpeur de solution informatique pour aider divers personneetant dans le besoin",
            "mise sur pied des bases de donnees sophistique"
        ],
        image: labtop,
    }
]

const Experience = () =>{
    return(
        <div id="Experiance">
            <Titre title="Connaissance Et Realisation"/>
            <div className="flex flex-col-reverse md:flex-row justify-center items-center">
                <div className="flex flex-wrap gap-4 justify-center items-center md:w-1/3 mt-4 md:mt-0">
                    {skills.map((skills) =>(
                        <div key ={skills.id} className="flex justify-center items-center flex-col">
                            <div className="w-24 h-24 p-2 rounded-full border-1xl border-accent">
                                <img src={skills.image} alt={skills.name}  className="object-cover rounded-full w-full h-full"/>
                            </div>
                            <span className="mt-2 text-sm">{skills.name}</span>
                        </div>
                    ))}
                </div>

                <div className="md:mf-4 flex flex-col space-y-4">
                    {projets.map((projets) => (
                        <div key={projets.id} className="flex flex-col bg-base-300 rounded-xl shadow-1g">
                            <div className="flex items-center">
                                <img src={projets.image} alt={projets.company}  className="object-cover h-10 w-10"/>
                                <div className="ml-4">
                                    <h1 className="text-xl text-accent font-bold">
                                        {projets.role} , {projets.company}
                                    </h1>
                                    <span className="text-sm">
                                        {projets.periode}
                                    </span>
                                </div>
                            </div>
                            <ul className="list-disc ml-16 mt-2">
                                {   projets.description.map((desc , index)=>(
                                      <li key= {index}>
                                        {desc}
                                      </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Experience