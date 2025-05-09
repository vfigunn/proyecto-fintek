
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectSection = () => {
  return (
    <section id="project" className="bg-white section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">El Proyecto FINTEK</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una solución informática para administrar finanzas personales, desarrollada como parte de la materia 
            Práctica Profesionalizante en la Tecnicatura Superior en Análisis y Desarrollo de Software.
          </p>
        </div>

        <Tabs defaultValue="descripcion" className="w-full max-w-4xl mx-auto animate-fade-in">
          <TabsList className="grid grid-cols-3 mb-8 bg-gray-100">
            <TabsTrigger value="descripcion">Descripción</TabsTrigger>
            <TabsTrigger value="objetivos">Objetivos</TabsTrigger>
            <TabsTrigger value="pantallas">Pantallas</TabsTrigger>
          </TabsList>
          <TabsContent value="descripcion">
            <Card>
              <CardHeader>
                <CardTitle>Descripción General</CardTitle>
                <CardDescription>
                  Información sobre el proyecto FINTEK
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-fintek-blue-dark">Contexto</h3>
                  <p className="text-gray-700">
                    En la actualidad, muchas personas enfrentan dificultades para llevar un control ordenado 
                    de sus ingresos, egresos, ahorros e inversiones. La falta de planificación financiera 
                    puede derivar en decisiones impulsivas, gastos innecesarios y dificultades para alcanzar 
                    objetivos económicos a largo plazo.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-fintek-blue-dark">La Solución</h3>
                  <p className="text-gray-700">
                    FINTEK ofrece una solución a este problema mediante un gestor de finanzas personales que 
                    permite a los usuarios registrar y visualizar sus movimientos económicos en tiempo real. 
                    A través de una interfaz intuitiva, pueden clasificar sus ingresos y egresos, gestionar 
                    ahorros y monitorear sus inversiones.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-fintek-blue-dark">Tecnologías Aplicadas</h3>
                  <p className="text-gray-700">
                    El proyecto implementa conceptos de programación orientada a objetos, usando clases, objetos y 
                    herencia para asegurar un diseño modular y reutilizable. El sistema está diseñado siguiendo mejores 
                    prácticas de ingeniería de software para garantizar mantenibilidad y escalabilidad.
                  </p>
                </div>

                <div className="mt-6 bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="text-lg font-semibold mb-3 text-fintek-blue-dark">Principales Funcionalidades</h3>
                  <ul className="space-y-2 list-disc pl-5">
                    <li className="text-gray-700">Gestión completa de ingresos, egresos, ahorros e inversiones</li>
                    <li className="text-gray-700">Visualización gráfica de balances</li>
                    <li className="text-gray-700">Reportes personalizados por período o categoría</li>
                    <li className="text-gray-700">Creación y edición de metas de ahorro</li>
                    <li className="text-gray-700">Interfaz intuitiva adaptada para usuarios sin conocimientos técnicos</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="objetivos">
            <Card>
              <CardHeader>
                <CardTitle>Objetivos del Proyecto</CardTitle>
                <CardDescription>
                  Metas y alcance de FINTEK
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-fintek-blue-dark">Objetivos Generales</h3>
                  <p className="text-gray-700 mb-4">
                    Gestionar operaciones financieras y generar reportes que ayuden a los usuarios a tomar mejores decisiones.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-fintek-blue-dark">Objetivos Específicos</h3>
                  <ul className="space-y-2 pl-5">
                    <li className="flex items-start">
                      <span className="text-fintek-blue mr-2">•</span>
                      <span className="text-gray-700">Visualización de balances entre cuentas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-fintek-blue mr-2">•</span>
                      <span className="text-gray-700">Generación de reportes con los movimientos realizados por el usuario</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-fintek-blue mr-2">•</span>
                      <span className="text-gray-700">Creación y edición de metas de ahorro</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2 text-fintek-blue-dark">Alcance del Proyecto</h3>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">Incluye:</h4>
                    <ul className="space-y-2 pl-5">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-700">Registro, modificación y eliminación de usuarios</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-700">Gestión completa de ingresos, egresos, ahorros e inversiones</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-700">Visualización gráfica de balances</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-700">Reportes personalizados por período o categoría</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">No incluye:</h4>
                    <ul className="space-y-2 pl-5">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        <span className="text-gray-700">Operaciones de compra/venta de activos en línea</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2 text-fintek-blue-dark">Usuarios Destinatarios</h3>
                  <ul className="space-y-2 pl-5">
                    <li className="flex items-start">
                      <span className="text-fintek-blue mr-2">•</span>
                      <span className="text-gray-700">Personas adultas con ingresos fijos o variables</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-fintek-blue mr-2">•</span>
                      <span className="text-gray-700">Usuarios sin conocimientos técnicos que requieren una herramienta intuitiva para el control de su economía personal</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="pantallas">
            <Card>
              <CardHeader>
                <CardTitle>Pantallas de la Aplicación</CardTitle>
                <CardDescription>
                  Mockups y diagramas del proyecto FINTEK
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-fintek-blue-dark">Diagrama de Clases</h3>
                    <img 
                      src="public/lovable-uploads/6922f279-dde4-4510-9978-387c8b7bae9b.png" 
                      alt="Diagrama de Clases" 
                      className="rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-semibold text-fintek-blue-dark">Casos de Uso</h3>
                    <img 
                      src="public/lovable-uploads/c9a84763-be5c-4373-bb5a-dd497a7d2454.png" 
                      alt="Casos de Uso" 
                      className="rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                  
                  <div className="space-y-3 md:col-span-2">
                    <h3 className="font-semibold text-fintek-blue-dark">Diagramas de Secuencia</h3>
                    <img 
                      src="public/lovable-uploads/79090f3e-3c80-4ddf-9e9d-a256d3bab74e.png" 
                      alt="Diagramas de Secuencia" 
                      className="rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-semibold text-fintek-blue-dark">Diagramas de Actividades</h3>
                    <img 
                      src="public/lovable-uploads/3bf38640-56c9-4d14-9daf-8a91e1350e3a.png" 
                      alt="Diagramas de Actividades" 
                      className="rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-semibold text-fintek-blue-dark">Diagrama de Componentes</h3>
                    <img 
                      src="public/lovable-uploads/8469cb43-96b6-487d-95f6-1fa7d7961d6a.png" 
                      alt="Diagrama de Componentes" 
                      className="rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <p className="text-sm text-gray-500">Los diagramas muestran la estructura y funcionamiento del sistema FINTEK</p>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectSection;
