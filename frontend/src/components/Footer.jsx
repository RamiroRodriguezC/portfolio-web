import { useTranslation } from '../hooks/useTranslation';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-4 px-6 border-t border-google-surface text-center text-google-text-secondary text-sm">
      <p>{t('footer.copyright')}</p>
    </footer>
  );
}
