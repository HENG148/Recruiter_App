// import { createNavigation } from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'kh'],
 
  // Used when no locale matches
  defaultLocale: 'en'
});
// export type Locale = (typeof routing.locales)[number];
// export const {Link, redirect, usePathname, useRouter} = createNavigation(routing)