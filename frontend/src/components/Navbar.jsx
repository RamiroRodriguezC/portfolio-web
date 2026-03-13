import { useTranslation } from '../hooks/useTranslation';

export function Navbar({ onNavigate, currentPage }) {
  const { t } = useTranslation();

  const navItems = [
    { key: 'home', label: t('nav.home') },
    { key: 'projects', label: t('nav.projects') },
    { key: 'experience', label: t('nav.experience') },
    { key: 'contact', label: t('nav.contact') },
  ];

  return (
    <nav className="flex items-center gap-1">
      {navItems.map((item) => (
        <button
          key={item.key}
          onClick={() => onNavigate?.(item.key)}
          className={`px-4 py-2 text-sm transition-colors ${
            currentPage === item.key
              ? 'text-google-link border-b-2 border-google-link'
              : 'text-google-text-secondary hover:text-google-text'
          }`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
