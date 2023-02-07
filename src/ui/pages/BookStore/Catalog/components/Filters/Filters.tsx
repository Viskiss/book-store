import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import { toast } from 'react-toastify';

import loader from 'src/ui/assets/lottieFiles/loading.json';

import options from 'src/utils/lottieOptions';

import type { GenreType } from 'src/types';
import { getAllGernes } from 'src/api';
import Genre from './Sorting/SortByGenre';

import StyledFilters from './Filters.styles';
import FilterSelect from './Sorting/FilterSelect';
import SortByPrice from './Sorting/SortByPrice';

const Filters: React.FC = () => {
  const [genres, setGenres] = useState<GenreType[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const genres = await getAllGernes();
        setGenres(genres.data.genres);
      } catch (err) {
        const error = err as Error;
        return toast.error(error.message);
      }
    })();
  }, []);

  if (!genres.length) {
    return <Lottie style={options.loadingStyles} animationData={loader} />;
  }

  return (
    <StyledFilters>
      <h2 className="filters__title">Catalog</h2>
      <div className="filters__book-filter">
        <Genre genres={genres} />
        <SortByPrice />
        <FilterSelect />
      </div>
    </StyledFilters>
  );
};

export default Filters;
