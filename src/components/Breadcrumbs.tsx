'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs: React.FC = () => {
  const pathname = usePathname(); // This works in Next.js App Router (pages using "app" directory)
  
  if (!pathname) return null; // Ensure it's defined

  const pathnames = pathname.split("/").filter((x) => x);

  if (pathname === '/job') return null;
  let breadcrumbPath = "";

  return (
    <div className="breadcrumbs">
      <Link href="/">Home</Link>
      {pathnames.map((name, index) => {
        breadcrumbPath += `/${name}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <span key={breadcrumbPath}> / {decodeURIComponent(name)}</span>
        ) : (
          <span key={breadcrumbPath}>
            {" "}
            / <Link href={breadcrumbPath}>{decodeURIComponent(name)}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;