import { useState, useEffect } from 'react';
import { Howl } from 'howler';
import { Song } from '@/types/song';
import SongList from './SongList';
import NowPlaying from './NowPlaying';

interface MusicPlayerProps {
  songs: Song[];
  currentSong: Song | null;
  setCurrentSong: (song: Song | null) => void;
}

const MusicPlayer = ({ songs, currentSong, setCurrentSong }: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState<Howl | null>(null);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);

  useEffect(() => {
    if (currentSong) {
      if (sound) {
        sound.unload();
      }
      const newSound = new Howl({
        src: [currentSong.url],
        html5: true,
        onend: () => {
          if (isRepeat) {
            newSound.play();
          } else {
            setIsPlaying(false);
            playNext();
          }
        },
        onload: () => {
          const dur = newSound.duration();
          setDuration(formatTime(dur));
        },
        onplay: () => {
          requestAnimationFrame(updateProgress);
        }
      });
      setSound(newSound);
      newSound.play();
      setIsPlaying(true);
    }
  }, [currentSong]);

  const updateProgress = () => {
    if (sound && isPlaying) {
      const seek = sound.seek();
      setCurrentTime(formatTime(seek));
      setProgress((seek / sound.duration()) * 100);
      requestAnimationFrame(updateProgress);
    }
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const togglePlay = () => {
    if (sound) {
      if (isPlaying) {
        sound.pause();
      } else {
        sound.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const playNext = () => {
    if (currentSong) {
      if (isShuffle) {
        const remainingSongs = songs.filter(song => song.id !== currentSong.id);
        const randomIndex = Math.floor(Math.random() * remainingSongs.length);
        setCurrentSong(remainingSongs[randomIndex]);
      } else {
        const currentIndex = songs.findIndex(song => song.id === currentSong.id);
        const nextSong = songs[currentIndex + 1] || songs[0];
        setCurrentSong(nextSong);
      }
    }
  };

  const playPrevious = () => {
    if (currentSong) {
      if (isShuffle) {
        const remainingSongs = songs.filter(song => song.id !== currentSong.id);
        const randomIndex = Math.floor(Math.random() * remainingSongs.length);
        setCurrentSong(remainingSongs[randomIndex]);
      } else {
        const currentIndex = songs.findIndex(song => song.id === currentSong.id);
        const previousSong = songs[currentIndex - 1] || songs[songs.length - 1];
        setCurrentSong(previousSong);
      }
    }
  };

  const toggleRepeat = () => {
    setIsRepeat(!isRepeat);
  };

  const toggleShuffle = () => {
    setIsShuffle(!isShuffle);
  };

  return (
    <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="lg:col-span-2">
        <SongList 
          songs={songs} 
          currentSong={currentSong} 
          onSongSelect={setCurrentSong} 
        />
      </div>
      <NowPlaying 
        currentSong={currentSong}
        isPlaying={isPlaying}
        onTogglePlay={togglePlay}
        onNext={playNext}
        onPrevious={playPrevious}
        progress={progress}
        currentTime={currentTime}
        duration={duration}
        isRepeat={isRepeat}
        isShuffle={isShuffle}
        onToggleRepeat={toggleRepeat}
        onToggleShuffle={toggleShuffle}
      />
    </div>
  );
};

export default MusicPlayer;