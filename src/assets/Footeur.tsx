import { Cuboid, Facebook, Twitter, Youtube } from "lucide-react"


const Footer = () => {
    return(
      <footer className="foofer footer-center p-10  items-center justify-center text-center mt-10">
            <aside className="items-center">
            <p className=" items-center font-bold text-3xl md:text-xl">
                <Cuboid  className="w-10 h-10 ml-[49%]"/>
             <p className="mt-4"> ROLINS <span className="text-accent">DEV</span></p>
            </p>
            <p>
               
            </p>
            </aside>
            <nav>
                <div className="flex p-3 ml-[46.5%] px-3">
                    <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-6 h-6 text-current mr-3"/>
                    </a>
                    <a href="http://youtube.com" target="_blank" rel="noopener noreferrer">
                    <Youtube className="w-6 h-6 text-current"/>
                    </a>
                    <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
                    <Facebook className="w-6 h-6 text-current ml-3"/>
                    </a>
                </div>
            </nav>
      </footer>
    )
}
export default Footer