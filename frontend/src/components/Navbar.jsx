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
          className={`px-3 py-1.5 text-sm rounded-full transition-all ${
            currentPage === item.key
              ? 'text-google-link bg-google-hover/50'
              : 'text-google-text-secondary hover:text-google-text hover:bg-google-hover/30'
          }`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
