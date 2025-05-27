
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectSection = () => {
  return (
    <section id="proyecto" className="bg-white section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">El Proyecto FINTEK</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Una solución informática para administrar finanzas personales, desarrollada como parte de la materia 
            Práctica Profesionalizante II en la Tecnicatura Superior en Análisis y Desarrollo de Software.
          </p>
        </div>

        <Tabs defaultValue="descripcion" className="w-full max-w-4xl mx-auto animate-fade-in">
          <TabsList className="grid grid-cols-4 mb-8 bg-gray-100">
            <TabsTrigger value="descripcion" className="hover:bg-indigo-800 hover:text-white">Descripción</TabsTrigger>
            <TabsTrigger value="objetivos" className="hover:bg-indigo-800 hover:text-white">Objetivos</TabsTrigger>
            <TabsTrigger value="poster" className="hover:bg-indigo-800 hover:text-white">Póster</TabsTrigger>
            <TabsTrigger value="pantallas" className="hover:bg-indigo-800 hover:text-white">Pantallas</TabsTrigger>
          </TabsList>
          <TabsContent value="descripcion">
            <Card>
              <CardHeader className="flex text-center">
                <CardTitle>Descripción General</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-indigo-800">Contexto</h3>
                  <p className="text-gray-700">
                    En la actualidad, muchas personas enfrentan dificultades para llevar un control ordenado 
                    de sus ingresos, egresos, ahorros e inversiones. La falta de planificación financiera 
                    puede derivar en decisiones impulsivas, gastos innecesarios y dificultades para alcanzar 
                    objetivos económicos a largo plazo.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-indigo-800">Solución</h3>
                  <p className="text-gray-700">
                    <b>FINTEK</b> ofrece una solución a este problema mediante un gestor de finanzas personales que 
                    permite a los usuarios registrar y visualizar sus movimientos económicos en tiempo real. 
                    A través de una interfaz intuitiva, pueden clasificar sus ingresos y egresos, gestionar 
                    ahorros y monitorear sus inversiones.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-indigo-800">Tecnologías Aplicadas</h3>
                  <p className="text-gray-700">
                    El proyecto implementa conceptos de programación orientada a objetos, usando clases, objetos y 
                    herencia para asegurar un diseño modular y reutilizable. El sistema está diseñado siguiendo mejores 
                    prácticas de ingeniería de software para garantizar mantenibilidad y escalabilidad.
                  </p>
                </div>

                <div className="mt-6 bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="text-lg font-semibold mb-3 text-indigo-800">Principales Funcionalidades</h3>
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
              <CardHeader className="flex text-center">
                <CardTitle>Objetivos del Proyecto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-indigo-800">Objetivos Generales</h3>
                  <p className="text-gray-700 mb-4">
                    Gestionar operaciones financieras y generar reportes que ayuden a los usuarios a tomar mejores decisiones.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-indigo-800">Objetivos Específicos</h3>
                  <ul className="space-y-2 pl-5">
                    <li className="flex items-start">
                      <span className="text-indigo-800 mr-2">•</span>
                      <span className="text-gray-700">Visualización de balances entre cuentas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-800 mr-2">•</span>
                      <span className="text-gray-700">Generación de reportes con los movimientos realizados por el usuario</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-800 mr-2">•</span>
                      <span className="text-gray-700">Creación y edición de metas de ahorro</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2 text-indigo-800">Alcance del Proyecto</h3>
                  
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
                  <h3 className="text-lg font-semibold mb-2 text-indigo-800">Usuarios Destinatarios</h3>
                  <ul className="space-y-2 pl-5">
                    <li className="flex items-start">
                      <span className="text-indigo-800 mr-2">•</span>
                      <span className="text-gray-700">Personas adultas con ingresos fijos o variables</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-800 mr-2">•</span>
                      <span className="text-gray-700">Usuarios sin conocimientos técnicos que requieren una herramienta intuitiva para el control de su economía personal</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="poster">
            <Card>
              <CardHeader className="flex text-center">
                <CardTitle>Póster Académico</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3 md:col-span-2">
                    <img 
                      src="assets/poster.png" 
                      alt="Diagramas de Secuencia" 
                      className="rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <p className="text-sm text-gray-500"></p>
              </CardFooter>
            </Card>
          </TabsContent>


          <TabsContent value="pantallas">
            <Card>
              <CardHeader className="flex text-center">
                <CardTitle>Pantallas de la Aplicación</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-indigo-800"></h3>
                    <img 
                      src="assets/mockup2.png" 
                      alt="Diagrama de Clases" 
                      className="rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-semibold text-indigo-800"></h3>
                    <img 
                      src="assets/mockup.png" 
                      alt="Casos de Uso" 
                      className="rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-semibold text-indigo-800"></h3>
                    <img 
                      src="assets/iphonemockup.png" 
                      alt="Diagramas de Actividades" 
                      className="rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-semibold text-indigo-800"></h3>
                    <img 
                      src="assets/iphonemockup2.png" 
                      alt="Diagrama de Componentes" 
                      className="rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <p className="text-sm text-gray-500"></p>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectSection;
