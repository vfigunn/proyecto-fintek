
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const TeamMember = ({ name, role, bio, image }: TeamMemberProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-fintek-blue-dark">{name}</CardTitle>
        <CardDescription>{role}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 text-sm">{bio}</p>
      </CardContent>
      <CardFooter className="flex justify-center pt-0">
        <div className="flex space-x-3">
          <a href="#" className="text-gray-500 hover:text-fintek-blue">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-500 hover:text-fintek-blue">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-500 hover:text-fintek-blue">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
            </svg>
          </a>
        </div>
      </CardFooter>
    </Card>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Valentín Figún",
      role: "Desarrollador / Analista",
      bio: "Especializado en el diseño de la arquitectura del sistema y el desarrollo de la lógica de negocio. Responsable de la implementación del módulo de inversiones.",
      image: "public/lovable-uploads/83934356-0ff5-4932-be8c-6ae5fd123539.png"
    },
    {
      name: "Matías Valentino Morales",
      role: "Desarrollador / Tester",
      bio: "Encargado del desarrollo de interfaces de usuario y la integración de componentes. Responsable de las pruebas y aseguramiento de calidad del sistema.",
      image: "public/lovable-uploads/25d96fb9-e833-42cc-a1f9-e6c67edfc719.png"
    },
    {
      name: "Paula Rocío Haunau",
      role: "Analista / Documentadora",
      bio: "Especializada en análisis de requerimientos y documentación técnica. Responsable del diseño de la experiencia de usuario y la redacción de manuales.",
      image: "public/lovable-uploads/08cf11d7-15fc-439d-8c97-7bd729199b4e.png"
    }
  ];

  return (
    <section id="team" className="bg-gray-50 section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestro Equipo</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conozca a los profesionales detrás del desarrollo de FINTEK, un proyecto académico del 
            Instituto de Profesorado Sedes Sapientiae.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-fade-in">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
            />
          ))}
        </div>
        
        <div className="mt-20 text-center animate-fade-in">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Proceso de Desarrollo</h3>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              La metodología de desarrollo adoptada para este proyecto se basó en un enfoque 
              colaborativo y autodirigido, centrado en el trabajo grupal fuera del horario de clases.
              Si bien no se siguió de forma estricta una metodología ágil formal como Scrum, se 
              tomaron elementos fundamentales de este tipo de enfoques, tales como la planificación 
              por etapas, la distribución de tareas, y la coordinación constante entre los integrantes del equipo.
            </p>
            <p className="text-gray-700">
              Durante el proceso, cada integrante asumió un rol activo en distintas fases del proyecto: 
              análisis, documentación, diseño de diagramas, redacción del marco conceptual, organización 
              de los entregables, entre otros. La flexibilidad de esta metodología permitió adaptarse a los 
              tiempos y disponibilidades de los participantes, respetando los plazos establecidos para la 
              entrega sin comprometer la calidad del producto final.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
