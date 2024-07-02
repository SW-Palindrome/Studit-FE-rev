import { useTranslations } from 'next-intl'

export default function Index() {
  const t = useTranslations('splash')
  return <h1>{t('signUp')}</h1>
}
