import { Song } from '@/types/song';
import { cn } from '@/lib/utils';
import { formatNumber } from '../lib/format';

interface SongListProps {
  songs: Song[];
  currentSong: Song | null;
  onSongSelect: (song: Song) => void;
}

const SongList = ({ songs, currentSong, onSongSelect }: SongListProps) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold">Popular</h2>
          <p className="text-sm text-white/40 mt-1">From the album Thriller</p>
        </div>
        <button className="text-primary hover:text-primary/80 transition-colors text-sm font-medium">
          See All
        </button>
      </div>
      <div className="space-y-2">
        <div className="grid grid-cols-[5%_45%_30%_10%_10%] text-xs uppercase tracking-wider text-white/40 px-4 py-2">
          <div>#</div>
          <div>Title</div>
          <div>Plays</div>
          <div>Time</div>
          <div>Album</div>
        </div>
        {songs.map((song, index) => (
          <div
            key={song.id}
            className={cn(
              "song-item grid grid-cols-[5%_45%_30%_10%_10%] items-center p-4 rounded-xl cursor-pointer group",
              currentSong?.id === song.id ? "bg-[#4A0404]" : "hover:bg-white/5"
            )}
            onClick={() => onSongSelect(song)}
          >
            <div className="text-sm font-medium group-hover:text-primary transition-colors">{index + 1}</div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/5 relative group-hover:shadow-lg transition-all">
                <img 
                  src={song.cover} 
                  alt={song.title} 
                  className="w-full h-full object-cover"
                />
                {song.isExplicit && (
                  <span className="absolute top-1 right-1 bg-white/10 text-[10px] px-1 rounded">E</span>
                )}
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">{song.title}</h3>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-white/40">{song.artist}</p>
                  <span className="text-white/20">•</span>
                  <p className="text-xs text-white/40">{song.releaseYear}</p>
                </div>
              </div>
            </div>
            <div className="text-white/40 text-sm">
              {formatNumber(parseInt(song.plays.replace(/,/g, '')))} plays
            </div>
            <div className="text-white/40 text-sm">
              {song.duration}
            </div>
            <div className="text-white/40 text-sm truncate">
              {song.album}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongList;