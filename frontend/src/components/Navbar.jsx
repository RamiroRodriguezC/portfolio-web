import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';

export function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();

  const navItems = [
    { path: '/', label: t('nav.home'), key: 'home' },
    { path: '/projects', label: t('nav.projects'), key: 'projects' },
    { path: '/experience', label: t('nav.experience'), key: 'experience' },
    { path: '/contact', label: t('nav.contact'), key: 'contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="flex gap-1 p-1 bg-google-surface rounded-full">
      {navItems.map((item) => (
        <Link
          key={item.key}
          to={item.path}
          className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
            isActive(item.path)
              ? 'bg-google-hover text-google-text'
              : 'text-google-text-secondary hover:text-google-text hover:bg-google-hover/50'
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
