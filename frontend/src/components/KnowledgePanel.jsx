import { useTranslation } from '../hooks/useTranslation';

const TECHNOLOGIES = ['React', 'Node.js', 'MongoDB', 'JavaScript'];

export function KnowledgePanel() {
  const { t } = useTranslation();

  return (
    <div className="space-y-4">
      <div className="bg-google-surface rounded-lg p-4">
        <div className="flex items-start gap-4">
          <div className="w-24 h-24 bg-google-hover rounded-lg flex items-center justify-center text-5xl shrink-0">
            👨‍💻
          </div>
          <div className="flex-1">
            <h2 className="text-2xl text-google-text font-normal">{t('knowledgePanel.name')}</h2>
            <p className="text-google-text-secondary text-base mt-1">{t('knowledgePanel.occupation')}</p>
          </div>
        </div>
        
        <div className="flex gap-2 mt-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-16 h-16 bg-google-hover rounded-lg flex items-center justify-center text-2xl">
              📷
            </div>
          ))}
        </div>
        
        <div className="mt-4 space-y-3">
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

        <div className="mt-4 pt-4 border-t border-google-hover">
          <h3 className="text-google-text font-medium mb-2">{t('knowledgePanel.about')}</h3>
          <p className="text-google-text-secondary text-sm">
            {t('knowledgePanel.aboutDescription')}
          </p>
          <div className="mt-3 pt-3 border-t border-google-hover">
            <div className="flex gap-2">
              <a href="#" className="text-google-link text-sm hover:underline">GitHub</a>
              <span className="text-google-text-secondary">·</span>
              <a href="#" className="text-google-link text-sm hover:underline">LinkedIn</a>
              <span className="text-google-text-secondary">·</span>
              <a href="#" className="text-google-link text-sm hover:underline">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
