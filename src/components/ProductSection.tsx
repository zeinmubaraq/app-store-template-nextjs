import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface Props {
  title: string;
}
export default function ProdcutSection({ title }: Props) {
  return (
    <section className="my-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <Link href="#" className="flex items-center gap-x-1 font-medium">
          View More
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
      <div className="mb-10 mt-4 grid grid-cols-2 gap-2 lg:grid-cols-5 lg:gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}
