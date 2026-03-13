import { useTranslation } from '../hooks/useTranslation';

export function ProfileHeader() {
  const { t } = useTranslation();

  return (
    <div className="bg-google-surface rounded-lg p-6 mb-6">
      <div className="flex items-start gap-6">
        <div className="w-32 h-32 bg-google-hover rounded-lg flex items-center justify-center text-7xl shrink-0">
          👨‍💻
        </div>
        <div className="flex-1">
          <h1 className="text-3xl text-google-text font-normal">{t('knowledgePanel.name')}</h1>
          <p className="text-google-text-secondary text-lg mt-1">{t('knowledgePanel.occupation')}</p>
          
          <div className="flex gap-3 mt-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-20 h-20 bg-google-hover rounded-lg flex items-center justify-center text-3xl">
                📷
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
