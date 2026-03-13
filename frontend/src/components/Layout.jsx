import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-google-bg">
      <header className="py-4 px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl text-google-text font-normal">Ramiro Rodríguez</h1>
            <Navbar />
          </div>
        </div>
      </header>
      <main className="flex-1 px-6 py-4">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
