import Navbar from '@/components/Navbar';
import ProdcutSection from '@/components/ProductSection';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="ml-64 mt-16 px-5 py-3">
        <ProdcutSection title="Men Shoes" />
        <ProdcutSection title="Woman Shoes" />
        <ProdcutSection title="Popular Product" />
      </main>
    </>
  );
}

