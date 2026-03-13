import { useTranslation } from '../hooks/useTranslation';

export function ProfileHeader() {
  const { t } = useTranslation();

  return (
    <div className="bg-google-surface rounded-lg p-4 md:p-6 mb-6">
      <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
        <div className="w-24 h-24 sm:w-32 sm:h-32 bg-google-hover rounded-lg flex items-center justify-center text-5xl sm:text-7xl shrink-0">
          👨‍💻
        </div>
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl text-google-text font-normal">{t('knowledgePanel.name')}</h1>
          <p className="text-google-text-secondary text-base sm:text-lg mt-1">{t('knowledgePanel.occupation')}</p>
          
          <div className="flex gap-2 sm:gap-3 mt-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-14 h-14 sm:w-20 sm:h-20 bg-google-hover rounded-lg flex items-center justify-center text-2xl sm:text-3xl">
                📷
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
