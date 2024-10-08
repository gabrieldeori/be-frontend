import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-8">
      <div className="text-2xl font-bold">Business Elevate</div>
      <nav className="space-x-4">
        <a href="#servicos" className="hover:text-gray-400">Serviços</a>
        <a href="#sobre" className="hover:text-gray-400">Sobre Nós</a>
        <a href="#contato" className="hover:text-gray-400">Contato</a>
      </nav>
    </header>
  );
}
