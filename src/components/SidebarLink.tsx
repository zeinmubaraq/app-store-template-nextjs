import Link from 'next/link';

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function SidebarLink({ href, children }: Props) {
  return (
    <li>
      <Link href={href} className="hover:underline">
        {children}
      </Link>
    </li>
  );
}
