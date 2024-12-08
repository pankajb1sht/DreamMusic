import { useState } from 'react';
import MusicPlayer from '@/components/MusicPlayer';
import { Song } from '@/types/song';
import Sidebar from '@/components/Sidebar';
import SearchBar from '@/components/SearchBar';

const songs: Song[] = [
  {
    id: '1',
    title: 'Billie Jean',
    artist: 'Michael Jackson',
    album: 'Thriller',
    duration: '4:53',
    plays: '1,040,811,084',
    cover: '/pic1.png',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    releaseYear: 1982,
    isExplicit: false,
    genre: 'Pop'
  },
  {
    id: '2',
    title: 'Beat It',
    artist: 'Michael Jackson',
    album: 'Thriller',
    duration: '4:18',
    plays: '643,786,045',
    cover: '/pic1.png',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    releaseYear: 1982,
    isExplicit: false,
    genre: 'Pop Rock'
  },
  {
    id: '3',
    title: 'Smooth Criminal',
    artist: 'Michael Jackson',
    album: 'Bad',
    duration: '4:17',
    plays: '407,234,004',
    cover: '/pic1.png',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    releaseYear: 1987,
    isExplicit: false,
    genre: 'Pop'
  },
  {
    id: '4',
    title: "Don't Stop 'Til You Get Enough",
    artist: 'Michael Jackson',
    album: 'Off The Wall',
    duration: '6:05',
    plays: '316,391,952',
    cover: '/pic1.png',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    releaseYear: 1979,
    isExplicit: false,
    genre: 'Disco'
  },
  {
    id: '5',
    title: 'Rock With You',
    artist: 'Michael Jackson',
    album: 'Off The Wall',
    duration: '3:40',
    plays: '268,187,218',
    cover: '/pic1.png',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    releaseYear: 1979,
    isExplicit: false,
    genre: 'R&B'
  }
];

const Index = () => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);

  return (
    <div className="flex min-h-screen bg-[#0A0A0A]">
      <Sidebar />
      <div className="flex-1 mx-8">
        <main className="w-full p-8 pr-[340px]">
          <div className="flex items-center justify-between mb-8">
            <div className="flex gap-12">
              <button className="text-white font-semibold hover:text-primary transition-colors">Music</button>
              <button className="text-white/40 hover:text-primary transition-colors">Podcast</button>
              <button className="text-white/40 hover:text-primary transition-colors">Live</button>
              <button className="text-white/40 hover:text-primary transition-colors">Radio</button>
            </div>
            <SearchBar />
          </div>
          <div className="mt-8">
            <div className="relative h-[300px] w-full rounded-[32px] overflow-hidden mb-12">
              <img 
                src="/pic2.png" 
                alt="Artist Banner" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div className="absolute bottom-12 left-12 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-[#0EA5E9] p-1.5 rounded">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Verified Artist</span>
                </div>
                <h1 className="text-6xl font-bold mb-3">Michael Jackson</h1>
                <p className="text-lg text-white/60">27,852,501 monthly listeners</p>
              </div>
            </div>
            <MusicPlayer songs={songs} currentSong={currentSong} setCurrentSong={setCurrentSong} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;