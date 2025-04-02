import { useLocale, useTranslations } from "use-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
// import { locales } from ""


export default function LocalSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {/* {locales.map} */}
      <div></div>
    </LocaleSwitcherSelect>
  )
}