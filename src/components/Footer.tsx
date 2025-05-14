
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <img src="logos/icon.png" alt="FINTEK Logo" className="h-10 w-auto mr-2" />
              <span className="font-bold text-xl">FINTEK</span>
            </div>
            <p className="text-gray-400">
              Gestión de finanzas personales desarrollado como proyecto académico para el Instituto de Profesorado Sedes Sapientiae.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-white transition duration-200">Inicio</a>
              </li>
              <li>
                <a href="#proyecto" className="text-gray-400 hover:text-white transition duration-200">Proyecto</a>
              </li>
              <li>
                <a href="#equipo" className="text-gray-400 hover:text-white transition duration-200">Equipo</a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contacto</h3>
            <p className="text-gray-400">
              <a href="https://sedessapientiae.vercel.app/" target="_blank" className="hover:text-blue-300 hover:underline">Instituto de Profesorado Sedes Sapientiae<br/></a>
            </p>
          </div>
        </div>

        <div className="border-t w-full border-gray-800 mt-10 pt-8 flex items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0 flex w-full text-center justify-center">&copy; {currentYear} FINTEK. Todos los derechos reservados.</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
