
import { Button } from "@/components/ui/button";

const HomeSection = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-blue-50 section-padding">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="mb-6 inline-block">

            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-indigo-900">FINTEK</span> - <span  className="font-normal">Gestión de Finanzas Personales</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Una herramienta diseñada para optimizar la administración de ingresos, egresos, ahorros e inversiones. 
              Brinda a los usuarios una visión clara y en tiempo real de su situación financiera, facilitando la toma 
              de decisiones estratégicas.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-indigo-800 hover:bg-indigo-500 text-white px-8"
                asChild
              >
                <a href="#proyecto">Ver Proyecto</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-indigo-800 text-indigo-800 hover:bg-indigo-800 hover:text-white"
                asChild
              >
                <a href="#equipo">Conocer al Equipo</a>
              </Button>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center items-center animate-fade-in">
            <div className="relative">
              <div className="absolute -z-10 w-84 h-84 bg-blue-100 rounded-full blur-3xl opacity-70"></div>
              <img 
                src="public/assets/mockup.png" 
                alt="FINTEK Logo" 
                className="relative rounded-lg hover:shadow-2xl z-10 w-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
