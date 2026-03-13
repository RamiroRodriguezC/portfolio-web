import { useTranslation } from '../hooks/useTranslation';

export function KnowledgePanel() {
  const { t } = useTranslation();

  return (
    <div className="bg-google-surface rounded-lg p-4">
      <div className="flex items-start gap-4">
        <div className="w-20 h-20 bg-google-hover rounded-lg flex items-center justify-center text-3xl">
          👨‍💻
        </div>
        <div className="flex-1">
          <h2 className="text-xl text-google-text font-normal">Ramiro Rodríguez</h2>
          <p className="text-google-text-secondary text-sm mt-1">Desarrollador Full Stack</p>
        </div>
      </div>
      
      <div className="mt-4 space-y-3">
        <div>
          <p className="text-xs text-google-text-secondary uppercase">Ubicación</p>
          <p className="text-google-text text-sm">Argentina</p>
        </div>
        
        <div>
          <p className="text-xs text-google-text-secondary uppercase">Universidad</p>
          <p className="text-google-text text-sm">En formación</p>
        </div>

        <div>
          <p className="text-xs text-google-text-secondary uppercase">Técnologias</p>
          <div className="flex flex-wrap gap-1 mt-1">
            {['React', 'Node.js', 'MongoDB', 'JavaScript'].map((tech) => (
              <span key={tech} className="text-xs bg-google-hover px-2 py-0.5 rounded text-google-text-secondary">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-google-hover flex gap-4">
        <a href="#" className="text-google-link text-sm hover:underline">GitHub</a>
        <a href="#" className="text-google-link text-sm hover:underline">LinkedIn</a>
        <a href="#" className="text-google-link text-sm hover:underline">Email</a>
      </div>
    </div>
  );
}
