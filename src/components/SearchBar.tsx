import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="relative flex items-center">
      <input
        type="text"
        placeholder="Michael Jackson"
        className="w-[300px] h-10 pl-10 pr-4 rounded-full bg-[#1A0808] text-sm text-white placeholder:text-white/40 border-none focus:outline-none focus:ring-1 focus:ring-red-500/20"
      />
      <div className="absolute left-3.5 flex items-center pointer-events-none">
        <Search className="h-4 w-4 text-white/40" />
      </div>
    </div>
  );
};

export default SearchBar;