export default function Services() {
  return (
    <section id="servicos" className="py-20 px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Desenvolvimento Web</h3>
          <p>
            Criamos sites e aplicações web de alta performance e design responsivo.
          </p>
        </div>
        <div className="bg-gray p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Aplicativos Mobile</h3>
          <p>
            Desenvolvemos apps nativos e híbridos para Android.
          </p>
        </div>
        <div className="bg-gray p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Soluções Personalizadas</h3>
          <p>
            Oferecemos soluções sob medida para atender às necessidades específicas do seu negócio.
          </p>
        </div>
      </div>
    </section>
  );
}
