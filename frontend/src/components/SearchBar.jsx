import { useTranslation } from '../hooks/useTranslation';

export function SearchBar() {
  const { t } = useTranslation();

  return (
    <div className="relative max-w-xl mx-auto">
      <div className="flex items-center bg-google-surface border border-google-surface hover:bg-google-hover/30 hover:border-google-hover/50 rounded-full px-4 py-3 transition-all">
        <svg className="w-5 h-5 text-google-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder={t('home.searchPlaceholder')}
          className="flex-1 bg-transparent border-none outline-none text-google-text placeholder-google-text-secondary px-3"
        />
        <button className="p-1.5 hover:bg-google-hover/50 rounded-full transition-colors">
          <svg className="w-5 h-5 text-google-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
