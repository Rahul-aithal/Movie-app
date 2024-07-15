import React, { useState } from 'react';
import useFetchMovies from '../Hooks/useFetchMovies';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import CardComponet from '../components/CardComponet';


function Home() {
  const { data, loading, error } = useFetchMovies();
  const [movie, setMovie] = useState(null)
  const [open, setOpen] = useState(true)
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data || data.length === 0) return <div>No movies found.</div>;
  const handleMovieClick =(movie)=>{
    setMovie(movie);
    setOpen(!open)
  }
// console.log(data);
  return (
    <div className='grid md:grid-cols-4 grid-cols-2 gap-2 m-2 place-items-center '>

      {data.map((movie) => (
        <div className='cursor-pointer rounded shadow-2xl  shadow-black' key={movie.imdbID} onClick={()=>{handleMovieClick(movie)}}>
          <CardComponet title={movie.Title} poster={movie.Poster} />
          </div>

      ))}

{movie && <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10 ">
  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

  <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div className="bg-gray-700 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <DialogTitle as="h3" className="text-lg font-semibold leading-6 text-white">
                Movie details
              </DialogTitle>
              <div className="mt-2 flex gap-2 justify-center">
                <p className="text-md text-center ">
                  <img src={movie.Poster} alt={movie.Title} />
                </p>
                <p className="text-md text-white ">
                  <p>Title:</p>
                   <span className="font-bold">{movie.Title}</span>
                </p>
                <p className="text-md text-white ">
                  Year: <span className="font-bold">{movie.Year}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 p-4 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              setMovie(null);
            }}
            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
          >
            Close
          </button>
        </div>
      </DialogPanel>
    </div>
  </div>
</Dialog>
}
      
    </div>
  );
}

export default Home;
