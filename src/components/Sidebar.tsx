import { Home, TrendingUp, Library, Compass, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-black min-h-screen flex flex-col p-6 sticky top-0">
      <div className="flex items-center gap-2 mb-12">
        <div className="text-red-500 text-3xl">♪</div>
        <h1 className="text-xl font-semibold">
          <span className="text-red-500">Dream</span>
          <span className="text-white">Music</span>
        </h1>
      </div>

      <nav className="flex-1">
        <div className="mb-8">
          <p className="text-gray-500 text-xs uppercase tracking-wider mb-4">MENU</p>
          <ul className="space-y-4">
            <li>
              <a href="#" className="flex items-center gap-3 text-white hover:text-red-500 transition-colors">
                <Home size={20} />
                Home
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 text-white/40 hover:text-red-500 transition-colors">
                <TrendingUp size={20} />
                Trends
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 text-white/40 hover:text-red-500 transition-colors">
                <Library size={20} />
                Library
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 text-white/40 hover:text-red-500 transition-colors">
                <Compass size={20} />
                Discover
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-gray-500 text-xs uppercase tracking-wider mb-4">GENERAL</p>
          <ul className="space-y-4">
            <li>
              <a href="#" className="flex items-center gap-3 text-white/40 hover:text-red-500 transition-colors">
                <Settings size={20} />
                Settings
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 text-white/40 hover:text-red-500 transition-colors">
                <LogOut size={20} />
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;