import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle } from 'lucide-react';
import { Song } from '@/types/song';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';

interface NowPlayingProps {
  currentSong: Song | null;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onNext: () => void;
  onPrevious: () => void;
  progress: number;
  currentTime: string;
  duration: string;
  isRepeat: boolean;
  isShuffle: boolean;
  onToggleRepeat: () => void;
  onToggleShuffle: () => void;
}

const NowPlaying = ({
  currentSong,
  isPlaying,
  onTogglePlay,
  onNext,
  onPrevious,
  progress,
  currentTime,
  duration,
  isRepeat,
  isShuffle,
  onToggleRepeat,
  onToggleShuffle
}: NowPlayingProps) => {
  if (!currentSong) {
    return null;
  }

  return (
    <div className="fixed bottom-0 right-0 w-[300px] bg-[#4A0404] p-4 rounded-tl-xl shadow-lg">
      <div className="text-center mb-4">
        <div className="aspect-video rounded-lg overflow-hidden mb-4 shadow-lg">
          <img 
            src={currentSong.cover} 
            alt={currentSong.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-lg font-bold mb-1">{currentSong.title}</h3>
        <p className="text-white/40 text-sm">{currentSong.artist}</p>
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xs text-white/40">{currentTime}</span>
          <Progress value={progress} className="flex-1 h-1" />
          <span className="text-xs text-white/40">{duration}</span>
        </div>
        <div className="player-controls flex items-center justify-center gap-4">
          <button 
            className={cn(
              "p-1",
              isRepeat ? "text-primary" : "text-white/40"
            )}
            onClick={onToggleRepeat}
          >
            <Repeat className="w-4 h-4" />
          </button>
          <button className="p-1 text-white/40 hover:text-white transition-colors" onClick={onPrevious}>
            <SkipBack className="w-5 h-5" />
          </button>
          <button 
            className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center bg-white",
              "hover:bg-white/90 transition-colors shadow-lg"
            )}
            onClick={onTogglePlay}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-[#4A0404]" />
            ) : (
              <Play className="w-6 h-6 text-[#4A0404] translate-x-0.5" />
            )}
          </button>
          <button className="p-1 text-white/40 hover:text-white transition-colors" onClick={onNext}>
            <SkipForward className="w-5 h-5" />
          </button>
          <button 
            className={cn(
              "p-1",
              isShuffle ? "text-primary" : "text-white/40"
            )}
            onClick={onToggleShuffle}
          >
            <Shuffle className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;