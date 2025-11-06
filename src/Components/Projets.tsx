import Titre from "./Titre"
import escalier from "../assets/photo/escalier.jpg"
import Cube from "../assets/photo/cube-noir.jpg"
import Grottes from "../assets/photo/Grottes.jpg"
import { Github, Video } from "lucide-react"

const proj = [
    {
        id: 1,
        titre: "Gestion des taches",
        description: "Est une application qui permet a un utilisateur, de pouvoir gerer ses taches en fonction de leurs importances",
        technologies: ["React", "Tailwind"],
        demoLink: "#",
        repoLink: "#",
        image: escalier,
    },
    {
        id: 2,
        titre: "Site-E-commerce",
        description: "site destine la vente en ligne de divers elenents permettant de proposer une large gamme de produits  de nature differentes",
        technologies: ["html" , "Tailwind", "synphony"],
        demonLink: "#",
        repoLink: "#",
        image: Cube,
    },
    {
        id: 3,
        titre: "Stagia-Track",
        description: "Applicatioin permettant de faciliter la gestion des stagiaires au sien d'une entreprise et d'assurer le bon deroulement de leurs stages",
        technologies: ["HTML", "CSS", "javascript", "php"],
        demoLink: "#",
        repoLink: "#",
        image: Grottes,
    }
]

const Projet = () =>{
    return(
        <div className="mt-10" id="Projets">
            <Titre title="Mes projets"/>
            <div className="grid md:grid-cols-3 gap-4">
                {proj.map((projs) =>(
                    <div key={projs.id} className="bg-base-300 p-5 h-fit rounded-fil shadow-lg">
                        <img src={projs.image} alt={projs.titre} className="w-full rounded-xl h-56 object-cover"/>
                        <div>
                            <h1 className="my-2 font-bold">
                                {projs.titre}
                            </h1>
                            <p className="text-sm">
                                {projs.description}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2 my-4">
                            {projs.technologies.map((tech) =>(
                                <span className="badge  badge-accent badge-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex">
                            <a href={projs.demoLink} className="btn btn-accent w-2/3">Demo < Video className="w-4"/></a>
                            <a href={projs.repoLink} className="btn btn-neutral w-1/3 ml-2"> < Github className="w-4"/></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Projet