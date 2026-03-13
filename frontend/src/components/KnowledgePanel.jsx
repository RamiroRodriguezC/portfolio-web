import { useTranslation } from '../hooks/useTranslation';

const TECHNOLOGIES = ['React', 'Node.js', 'MongoDB', 'JavaScript'];

export function KnowledgePanel() {
  const { t } = useTranslation();

  return (
    <div className="bg-google-surface rounded-lg p-4">
      <h3 className="text-google-text font-medium mb-3">{t('knowledgePanel.about')}</h3>
      
      <div>
        <p className="text-google-text-secondary text-sm">
          {t('knowledgePanel.aboutDescription')}
        </p>
      </div>

      <div className="mt-4 pt-4 border-t border-google-hover space-y-3">
        <div>
          <p className="text-xs text-google-text-secondary uppercase">{t('knowledgePanel.born')}</p>
          <p className="text-google-text text-sm">{t('knowledgePanel.bornValue')}</p>
        </div>
        
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

        <div>
          <p className="text-xs text-google-text-secondary uppercase">{t('knowledgePanel.social')}</p>
          <div className="flex gap-3 mt-2">
            <a href="#" className="text-google-link text-sm hover:underline">{t('contact.github')}</a>
            <a href="#" className="text-google-link text-sm hover:underline">{t('contact.linkedin')}</a>
          </div>
        </div>
      </div>

    </div>
  );
}
