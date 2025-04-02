'use client'

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const Breadcrumbs: React.FC = () => {

  const pathname = usePathname();
  const searchParams = useSearchParams();
  if (!pathname) return null;

  const pathnames = pathname.split("/").filter((x) => x && x !== 'en'); // remove the 'en' from the link

  if (pathname === '/job') return null;
  let breadcrumbPath = "";

  return (
    <div className="breadcrumbs">
      <Link className="text-main font-semibold" href="/">Home</Link>
      {pathnames.map((name, index) => {
        breadcrumbPath += `/${name}`;
        const isLast = index === pathnames.length - 1;
        
        if (pathnames[0] === 'media' && index === 1) {
          const mediaTitle = searchParams.get('title');
          return (
            <span key={breadcrumbPath} className="pl-2">
              {'/'}{mediaTitle ? decodeURIComponent(mediaTitle) : name}
            </span>
          )
        }

        return isLast ? (
          <span key={breadcrumbPath}> / {decodeURIComponent(name)}</span>
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

        // if (isLast && name === 'media' && pathnames.length > 1) {
        //   const mediaTitle = searchParams.get('title');
        //   if (mediaTitle) {
        //     return (
        //       <span key={breadcrumbPath} className="pl-2">
        //         {'/'}{decodeURIComponent(mediaTitle)}
        //       </span>
        //     )
        //   }
        // }