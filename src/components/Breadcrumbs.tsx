'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs: React.FC = () => {
  const pathname = usePathname();
  
  if (!pathname) return null;

  const pathnames = pathname.split("/").filter((x) => x);

  if (pathname === '/job') return null;
  let breadcrumbPath = "";

  return (
    <div className="breadcrumbs">
      <Link className="text-main font-semibold" href="/">Home</Link>
      {pathnames.map((name, index) => {
        breadcrumbPath += `/${name}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <span className=" pl-2 " key={breadcrumbPath}> / {decodeURIComponent(name)}</span>
        ) : (
          <span key={breadcrumbPath} className="pl-2 ">
            {" "}
            / <Link className="pl-2 text-main font-semibold" href={breadcrumbPath}>{decodeURIComponent(name)}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;