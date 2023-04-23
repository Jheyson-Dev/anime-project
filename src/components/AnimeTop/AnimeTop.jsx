import './AnimeTop.css';

// eslint-disable-next-line react/prop-types
export const AnimeTop = ({ animes = [] }) => {
  return (
    <div>
      <h2>Top Anime Series</h2>
      <div>
        <div>
          <div className='grid grid-cols-8 bg-purple-primary text-center border-table italic text-xl'>
            <div className='border-table'>Rank</div>
            <div className='border-table col-span-6'>Title</div>
            <div className='border-table'>Score</div>
          </div>
          {animes.map((el, index) => {
            return (
              <div
                className='grid grid-cols-8 bg-black-secondary border-table group'
                key={index}
              >
                <div className='border-table-item item-table-center'>
                  {el.rank === null ? 'null' : index + 1}
                </div>
                <div className='flex items-center gap-2 col-span-6 border-table-item px-2'>
                  <div className=''>
                    <img
                      src={el.images.webp.image_url}
                      alt=''
                      className='w-28'
                    />
                  </div>
                  <div className='grid'>
                    <span className='text-lg font-medium italic'>
                      {el.title}
                    </span>
                    <div className='opacity-50'>{`${el.type}(${el.episodes} episodes)`}</div>
                    <div className='opacity-50'>
                      <span>
                        {new Date(el.aired.from).toLocaleDateString()}
                      </span>
                      <span> - </span>
                      <span>
                        {el.aired.to === null
                          ? '?'
                          : new Date(el.aired.to).toLocaleDateString()}
                      </span>
                    </div>
                    <div className='opacity-50'>Members: {el.members}</div>
                    <div>
                      {el.airing ? (
                        <Airing text={'En emision'} />
                      ) : (
                        <Finishin estado={el.status} />
                      )}
                    </div>
                    <div className='flex gap-2 items-center'>
                      Generos:
                      {el.genres.map((item, index) => {
                        return (
                          <span
                            className='bg-blue-primary px-1 text-xs font-semibold rounded-md'
                            key={index}
                          >
                            {item.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className='border-table-item item-table-center'>
                  {el.score === null ? 'null' : el.score}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Airing = () => {
  return (
    <span className='bg-green-primary text-xs px-1 rounded-md font-semibold'>
      Currently Emision
    </span>
  );
};
// eslint-disable-next-line react/prop-types
const Finishin = ({ estado = '' }) => {
  if (estado === 'Not yet aired') {
    return (
      <span className='bg-gray-500 text-xs px-1 rounded-sm font-semibold'>
        {estado}
      </span>
    );
  }

  return (
    <span className='bg-red-primary text-xs px-1 rounded-sm font-semibold'>
      {estado}
    </span>
  );
};
