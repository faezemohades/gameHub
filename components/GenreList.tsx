import React from 'react';
import useGenres, { Genre } from '@/hooks/useGenreList';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenerList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <span className="loading loading-dots loading-md"></span>;

  return (
    <>
    <span className="text-xl font-bold text-gray-900 sm:truncate sm:tracking-tight p-2">Genre</span>
    <ul className="list-none px-3">
      {data.map((genre) => (
        <li key={genre.id}>
          <div className="flex my-1">
            <img className="rounded-md" src={genre.image_background} alt="img" width={42} height={32} />
            <button
              onClick={() => onSelectGenre(genre)}
              className={`btn px-2 bg-transparent border-0 py-0 ${
                genre.id === selectedGenre?.id ? 'font-bold' : 'font-light'
              }`}>
              {genre.name}
            </button>
          </div>
        </li>
      ))}
    </ul>
      </>
  );
};

export default GenerList;
