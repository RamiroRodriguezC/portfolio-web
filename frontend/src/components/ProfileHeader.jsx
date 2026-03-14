import { useTranslation } from '../hooks/useTranslation';

export function ProfileHeader() {
  const { t } = useTranslation();

  return (
    <div className="mb-6">
      {/* Nombre y ocupación arriba del recuadro */}
      <div className="mb-3">
        <h1 className="text-2xl sm:text-3xl text-google-text font-normal">{t('knowledgePanel.name')}</h1>
        <p className="text-google-text-secondary text-base sm:text-lg mt-1">{t('knowledgePanel.occupation')}</p>
      </div>

      {/* Recuadro dividido: foto izquierda, CV derecha */}
      <div className="bg-google-surface rounded-lg overflow-hidden flex flex-col sm:flex-row">
        {/* Foto */}
        <div className="sm:w-1/2 flex items-center justify-center p-6 bg-google-hover">
          <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-lg flex items-center justify-center text-7xl sm:text-8xl">
            👨‍💻
          </div>
        </div>

        {/* Sección derecha: descargar CV */}
        <div className="sm:w-1/2 p-4 md:p-6 flex flex-col justify-center">
          <h3 className="text-google-text font-medium text-base mb-2">{t('profileHeader.news')}</h3>
          <p className="text-google-text-secondary text-sm mb-4">{t('profileHeader.cvDescription')}</p>
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 bg-google-link text-white text-sm font-medium px-4 py-2 rounded-full hover:opacity-90 transition-opacity w-fit"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {t('profileHeader.downloadCv')}
          </a>
        </div>
      </div>
    </div>
  );
}
