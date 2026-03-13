import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { useTranslation } from './hooks/useTranslation';

function HomePage() {
  const { t } = useTranslation();
  return (
    <div className="text-center py-12">
      <h2 className="text-xl text-google-text">{t('home.title')}</h2>
      <p className="text-google-text-secondary mt-2">{t('home.subtitle')}</p>
    </div>
  );
}

function ProjectsPage() {
  const { t } = useTranslation();
  return (
    <div>
      <h2 className="text-xl text-google-text mb-4">{t('projects.title')}</h2>
      <p className="text-google-text-secondary">Proyectos en desarrollo...</p>
    </div>
  );
}

function ExperiencePage() {
  const { t } = useTranslation();
  return (
    <div>
      <h2 className="text-xl text-google-text mb-4">{t('experience.title')}</h2>
      <p className="text-google-text-secondary">Experiencia en desarrollo...</p>
    </div>
  );
}

function ContactPage() {
  const { t } = useTranslation();
  return (
    <div>
      <h2 className="text-xl text-google-text mb-4">{t('contact.title')}</h2>
      <p className="text-google-text-secondary">Contacto en desarrollo...</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
