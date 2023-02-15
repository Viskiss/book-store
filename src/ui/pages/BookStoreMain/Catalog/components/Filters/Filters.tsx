import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import { toast } from 'react-toastify';

import loader from 'src/ui/assets/lottieFiles/loading.json';

import options from 'src/utils/lottieOptions';

import type { GenreType } from 'src/types';
import { getAllGernes } from 'src/api';

import SortByGenre from 'src/ui/components/Filters/SortByGenre';
import SortBySelect from 'src/ui/components/Filters/SortBySelect';
import SortByPrice from 'src/ui/components/Filters/SortByPrice';

import StyledFilters from './Filters.styles';

const Filters: React.FC = () => {
  const [genres, setGenres] = useState<GenreType[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const genres = await getAllGernes();
        setGenres(genres.data.genres);
      } catch (err) {
        const error = err as Error;
        toast.error(error.message);
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
        <SortByGenre genres={genres} />
        <SortByPrice />
        <SortBySelect />
      </div>
    </StyledFilters>
  );
};

export default Filters;
