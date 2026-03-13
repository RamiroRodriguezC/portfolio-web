import { useTranslation } from '../hooks/useTranslation';

const TECHNOLOGIES = ['React', 'Node.js', 'MongoDB', 'JavaScript'];

export function KnowledgePanel() {
  const { t } = useTranslation();

  return (
    <div className="bg-google-surface rounded-lg p-4">
      <div className="flex items-start gap-4">
        <div className="w-20 h-20 bg-google-hover rounded-lg flex items-center justify-center text-3xl">
          👨‍💻
        </div>
        <div className="flex-1">
          <h2 className="text-xl text-google-text font-normal">{t('knowledgePanel.title')}</h2>
          <p className="text-google-text-secondary text-sm mt-1">{t('knowledgePanel.subtitle')}</p>
        </div>
      </div>
      
      <div className="mt-4 space-y-3">
        <div>
          <p className="text-xs text-google-text-secondary uppercase">{t('knowledgePanel.location')}</p>
          <p className="text-google-text text-sm">{t('knowledgePanel.locationValue')}</p>
        </div>
        
        <div>
          <p className="text-xs text-google-text-secondary uppercase">{t('knowledgePanel.education')}</p>
          <p className="text-google-text text-sm">{t('knowledgePanel.educationValue')}</p>
        </div>

        <div>
          <p className="text-xs text-google-text-secondary uppercase">{t('knowledgePanel.technologies')}</p>
          <div className="flex flex-wrap gap-1 mt-1">
            {TECHNOLOGIES.map((tech) => (
              <span key={tech} className="text-xs bg-google-hover px-2 py-0.5 rounded text-google-text-secondary">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-google-hover flex gap-4">
        <a href="#" className="text-google-link text-sm hover:underline">{t('contact.github')}</a>
        <a href="#" className="text-google-link text-sm hover:underline">{t('contact.linkedin')}</a>
        <a href="#" className="text-google-link text-sm hover:underline">{t('contact.email')}</a>
      </div>
    </div>
  );
}
