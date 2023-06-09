import './SectionAnime.css';

// eslint-disable-next-line react/prop-types
export const SectionAnime = ({ slice = [], error = '', loading, title }) => {
  return (
    <div className='grid gap-5'>
      <div className='flex justify-between items-center'>
        <h2 className='text-4xl font-medium'>{title}</h2>
        <button className='border-2 px-1 rounded-md border-white-primary hover:text-purple-primary hover:border-purple-primary'>
          ver más
        </button>
      </div>
      {loading && <span>Cargando ...</span>}
      {error && <span>Ocurrion un error: {error}</span>}
      <div className='flex justify-between gap-4'>
        {slice?.map(el => {
          return (
            <div
              key={el.trailer?.youtube_id}
              className='container-card group'
            >
              <img
                src={el.entry?.images.webp.image_url}
                alt=''
                className='img-card'
              />
              <span className='title-card'>{el.entry?.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
