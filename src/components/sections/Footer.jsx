import { RevealOnScroll } from "../RevealOnScroll";
import {FaLinkedin,FaGithub,FaInstagram,FaTwitter} from 'react-icons/fa';
export const Footer =() =>
{
    return(
        <section 
      id="footer">
                <RevealOnScroll>
                    <footer className="bg-blue-500 text-white py-6 mt-10">
            <div className="container mx-auto flex flex-col items-center">
                <p className="mb-4 text-center">Connect with me</p>
                <div className="flex gap-6 text-xl">
                    <a href="https://www.linkedin.com/in/jenifer-antonimuthu07/" target="_blank" rel="nooperner noreferrer"> 
                    <FaLinkedin className="hover:text-blue-400 text-2xl transition duration-300"/>
                    </a>
                     <a href="https://github.com/JeniferA-2003" target="_blank" rel="nooperner noreferrer"> 
                    <FaGithub className="hover:text-blue-400 text-2xl transition duration-300"/>
                    </a>
                     <a href="https://www.instagram.com/_.jenifer._.josphine._/?hl=en" target="_blank" rel="nooperner noreferrer"> 
                    <FaInstagram className="hover:text-blue-400 text-2xl transition duration-300"/>
                    </a>
                     <a href="https://x.com/Jenijenifer070" target="_blank" rel="nooperner noreferrer"> 
                    <FaTwitter className="hover:text-blue-400 text-2xl transition duration-300 "/>
                    </a>
                </div>
                <p className="mt-4 text-sm text-white">@2025 Jenifer .All rights reserved.</p>
            </div> 
        </footer>

                </RevealOnScroll>
        </section>
        
    );
};
export default Footer;