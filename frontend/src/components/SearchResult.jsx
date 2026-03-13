import { useTranslation } from '../hooks/useTranslation';

export function SearchResult({ project }) {
  const { t } = useTranslation();

  return (
    <div className="py-3 px-2 hover:bg-google-hover/20 rounded-lg transition-colors cursor-pointer group">
      <div className="flex items-center gap-2 mb-1">
        <svg className="w-4 h-4 text-google-link" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
        <span className="text-google-text-secondary text-sm truncate">github.com/RamiroRodriguezC</span>
      </div>
      
      <h3 className="text-google-link text-lg hover:underline group-hover:underline">
        {project.title}
      </h3>
      
      <p className="text-google-text-secondary text-sm mt-1 line-clamp-2">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-1 mt-2">
        {project.tags?.map((tag, index) => (
          <span key={index} className="text-xs text-google-text-secondary">
            {tag}{index < project.tags.length - 1 ? ' · ' : ''}
          </span>
        ))}
      </div>
    </div>
  );
}
