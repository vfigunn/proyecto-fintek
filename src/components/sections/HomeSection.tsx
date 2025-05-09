
import { Button } from "@/components/ui/button";

const HomeSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-blue-50 section-padding">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="mb-6 inline-block">
              <h2 className="text-sm font-semibold text-fintek-blue-light uppercase tracking-wider">
                Instituto de Profesorado Sedes Sapientiae
              </h2>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-fintek-blue">FINTEK</span> - Gestión de Finanzas Personales
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Una herramienta diseñada para optimizar la administración de ingresos, egresos, ahorros e inversiones. 
              Brinda a los usuarios una visión clara y en tiempo real de su situación financiera, facilitando la toma 
              de decisiones estratégicas.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-fintek-blue hover:bg-fintek-blue-dark text-white px-8"
                asChild
              >
                <a href="#project">Ver Proyecto</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-fintek-blue text-fintek-blue hover:bg-fintek-blue hover:text-white"
                asChild
              >
                <a href="#team">Conocer al Equipo</a>
              </Button>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center items-center animate-fade-in">
            <div className="relative">
              <div className="absolute -z-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-70"></div>
              <img 
                src="public/lovable-uploads/460a5a3e-a21e-482e-a0a6-80dec77bf0ff.png" 
                alt="FINTEK Logo" 
                className="relative z-10 max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
