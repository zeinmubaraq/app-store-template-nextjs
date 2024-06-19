import Link from 'next/link';
import SidebarLink from './SidebarLink';

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 mt-16 w-64 overflow-y-auto border-r bg-white pl-5">
      <div className="py-3">
        <h3 className="font-semibold">Men Apparel</h3>
        <ul className="pl-5">
          <SidebarLink href="#">Shoes</SidebarLink>
          <SidebarLink href="#">TShirt</SidebarLink>
          <SidebarLink href="#">Jacket</SidebarLink>
          <SidebarLink href="#">Top</SidebarLink>
          <SidebarLink href="#">Short</SidebarLink>
          <SidebarLink href="#">Slipper</SidebarLink>
          <SidebarLink href="#">Pants</SidebarLink>
        </ul>
      </div>

      <div className="py-3">
        <h3 className="font-semibold">Woman Apparel</h3>
        <ul className="pl-5">
          <SidebarLink href="#">Shoes</SidebarLink>
          <SidebarLink href="#">TShirt</SidebarLink>
          <SidebarLink href="#">Jacket</SidebarLink>
          <SidebarLink href="#">Top</SidebarLink>
          <SidebarLink href="#">Short</SidebarLink>
          <SidebarLink href="#">Slipper</SidebarLink>
          <SidebarLink href="#">Pants</SidebarLink>
        </ul>
      </div>

      <div className="py-3">
        <h3 className="font-semibold">Kids Apparel</h3>
        <ul className="pl-5">
          <SidebarLink href="#">Shoes</SidebarLink>
          <SidebarLink href="#">TShirt</SidebarLink>
          <SidebarLink href="#">Jacket</SidebarLink>
          <SidebarLink href="#">Top</SidebarLink>
          <SidebarLink href="#">Short</SidebarLink>
          <SidebarLink href="#">Slipper</SidebarLink>
          <SidebarLink href="#">Pants</SidebarLink>
        </ul>
      </div>
    </aside>
  );
}
