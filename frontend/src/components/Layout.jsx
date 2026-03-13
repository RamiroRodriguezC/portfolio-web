import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { SearchBar } from './SearchBar';

export function Layout({ children, showSearchBar = true, onNavigate, currentPage }) {
  return (
    <div className="min-h-screen flex flex-col bg-google-bg">
      <header className="py-4 px-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 via-red-500 to-yellow-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
            </div>
            {showSearchBar && <SearchBar />}
          </div>
          <Navbar onNavigate={onNavigate} currentPage={currentPage} />
        </div>
      </header>
      <main className="flex-1 px-6 py-4">
        <div className="max-w-5xl mx-auto">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
