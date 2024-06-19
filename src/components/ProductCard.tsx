import Link from 'next/link';

export default function ProductCard() {
  return (
    <Link href="#">
      <div className="relative h-52 bg-gradient-to-br from-gray-200 to-gray-400">
        <small className="absolute right-1 top-1 rounded bg-black px-1 font-medium text-white">
          Best Seller
        </small>
      </div>
      <div className="px-2 pb-2 pt-1">
        <small className="text-gray-500">Men Shoes</small>
        <h2>Clima Cool Robot</h2>
        <h3 className="font-semibold">$ 39.99</h3>
      </div>
    </Link>
  );
}
