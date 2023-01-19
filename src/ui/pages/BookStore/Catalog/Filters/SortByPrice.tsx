import React, { useState } from 'react';
import ReactSlider from 'react-slider';

const SortByPrice: React.FC = () => {
  const [price, setPrice] = useState<number[]>([20, 37]);

  // const selectPrice = 0;

  // // const dispatch = useAppDispatch();

  // const handleChangePrice = (
  //   event: Event,
  //   newValue: number | number[],
  //   activeThumb: number,
  // ) => {
  //   if (!Array.isArray(newValue)) {
  //     return;
  //   }

  //   if (activeThumb === 0) {
  //     setPrice([Math.min(newValue[0], price[1] - 10), price[1]]);
  //   } else {
  //     setPrice([price[0], Math.max(newValue[1], price[0] + 10)]);
  //   }
  // };

  // const hangleSearchPrice = (e: SelectChangeEvent<number>) => {
  //   // eslint-disable-next-line no-console
  //   console.log(e.target.value);
  // };

  return (
    <ReactSlider
    className="horizontal-slider"
    thumbClassName="example-thumb"
    trackClassName="example-track"
    defaultValue={[0, 100]}
    ariaLabelledby={['first-slider-label', 'second-slider-label']}
    ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
    pearling
    minDistance={10}
/>
  );
};

export default SortByPrice;
