// Página principal con tres secciones: Información, Servicios y Contacto
// Diseño minimalista sin animaciones ni efectos complejos

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header - Encabezado con navegación */}
      <header className="border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Mi Sitio Web</h1>
            <nav>
              <ul className="flex gap-6">
                <li>
                  <a href="#informacion" className="hover:text-muted-foreground">
                    Información
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="hover:text-muted-foreground">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="hover:text-muted-foreground">
                    Contacto
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Contenido principal - Main content */}
      <main>
        {/* Sección 1: Información */}
        <section id="informacion" className="py-16 border-b border-border">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Información</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Bienvenido a nuestro sitio web. Somos una empresa dedicada a ofrecer
                soluciones simples y efectivas para nuestros clientes.
              </p>
              <p>
                Nuestra misión es proporcionar servicios de calidad con un enfoque
                minimalista y directo. Creemos en la simplicidad y la eficiencia.
              </p>
              <p>
                Con años de experiencia en el sector, hemos desarrollado una metodología
                de trabajo que prioriza las necesidades de nuestros clientes.
              </p>
            </div>
          </div>
        </section>

        {/* Sección 2: Servicios */}
        <section id="servicios" className="py-16 bg-muted border-b border-border">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Servicios</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-4">
                <h3 className="text-xl font-semibold mb-2">Consultoría</h3>
                <p className="text-muted-foreground">
                  Ofrecemos asesoramiento profesional adaptado a las necesidades
                  específicas de cada proyecto.
                </p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h3 className="text-xl font-semibold mb-2">Desarrollo</h3>
                <p className="text-muted-foreground">
                  Creamos soluciones personalizadas con código limpio y mantenible.
                </p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h3 className="text-xl font-semibold mb-2">Soporte</h3>
                <p className="text-muted-foreground">
                  Brindamos asistencia continua para garantizar el correcto funcionamiento
                  de todos nuestros servicios.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 3: Contacto */}
        <section id="contacto" className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Contacto</h2>
            <div className="space-y-4">
              <p className="text-lg">
                ¿Tienes alguna pregunta o consulta? No dudes en ponerte en contacto con
                nosotros.
              </p>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">Email:</span>{" "}
                  contacto@ejemplo.com
                </p>
                <p>
                  <span className="font-semibold text-foreground">Teléfono:</span> +34 123
                  456 789
                </p>
                <p>
                  <span className="font-semibold text-foreground">Dirección:</span> Calle
                  Principal 123, 28001 Madrid
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Horario de atención: Lunes a Viernes, 9:00 - 18:00
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Pie de página */}
      <footer className="border-t border-border py-8 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Mi Sitio Web. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
