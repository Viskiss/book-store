import { Rating } from 'react-simple-star-rating';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAppSelector, useAppDispatch } from 'src/redux/store';
import rateApi from 'src/ui/pages/BookStore/redux/api/rateBookApi';

import star from 'src/ui/assets/images/icon/Star.svg';
import arrow from 'src/ui/assets/images/icon/arrow.svg';

import { addRateThunk } from 'src/ui/pages/BookStore/redux/thunks/rateBooksThunks';
import constants from 'src/utils/constants';

import { useEffect, useState } from 'react';
import StyledBook from './StarRate.styles';

const StarRate: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { bookId } = useParams();

  const [rate, setRate] = useState(0);

  const book = useAppSelector((store) => store.bookStore.book);
  const user = useAppSelector((store) => store.userStore.user?.id);

  useEffect(() => {
    (async () => {
      try {
        if (user && bookId) {
          const rate = await rateApi.getRate(user, Number(bookId));
          setRate(rate.data.rate);
        }
      } catch (err) {
        const error = err as Error;
        return toast.error(error.message);
      }
    })();
  }, [bookId, user]);

  const handleRating = (rate: number) => {
    if (user) {
      dispatch(addRateThunk({ bookId: book.id, userId: user, rate }));
    } else {
      navigate(constants.routesLink.signIn);
    }
  };

  return (
    <StyledBook className="rate-box">
      <div className="initial-rate">
        <img className="star-rate" src={star} alt="" />
        <p className="number">{book.rate}.0</p>
      </div>
      <div className="rate-box__stars">
        <Rating
          fillColor="#BFCC94"
          onClick={handleRating}
          fillIcon={
            (<svg
              className="fillStar"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.3079 2.90797C14.5645 2.2932 15.4355 2.2932 15.6921 2.90797L18.6585 10.014C18.7611 10.2597 18.9862 10.4326 19.25 10.4683L27.0376 11.5223C27.6878 11.6103 27.9195 12.4318 27.4112 12.8466L21.3857 17.7636C21.1642 17.9443 21.0647 18.2352 21.1292 18.5137L23.0564 26.8419C23.2115 27.512 22.4579 28.02 21.8948 27.6248L15.4309 23.088C15.1723 22.9066 14.8277 22.9066 14.5691 23.088L8.10511 27.6249C7.54208 28.02 6.78848 27.5121 6.94355 26.8419L8.87063 18.5137C8.93508 18.2352 8.8356 17.9443 8.61413 17.7636L2.5888 12.8466C2.08048 12.4318 2.31222 11.6103 2.9624 11.5223L10.75 10.4683C11.0138 10.4326 11.2389 10.2597 11.3415 10.014L14.3079 2.90797Z"
                fill="#BFCC94"
                stroke="#BFCC94"
                strokeWidth="2"
                strokeMiterlimit="3.3292"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
             </svg>)
          }
          emptyIcon={
            (<svg
              className="emptyStar"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.3079 2.90797C14.5645 2.2932 15.4355 2.2932 15.6921 2.90797L18.6585 10.014C18.7611 10.2597 18.9862 10.4326 19.25 10.4683L27.0376 11.5223C27.6878 11.6103 27.9195 12.4318 27.4112 12.8466L21.3857 17.7636C21.1642 17.9443 21.0647 18.2352 21.1292 18.5137L23.0564 26.8419C23.2115 27.512 22.4579 28.02 21.8949 27.6248L15.4309 23.088C15.1723 22.9066 14.8277 22.9066 14.5691 23.088L8.10511 27.6249C7.54207 28.02 6.78848 27.5121 6.94355 26.8419L8.87063 18.5137C8.93508 18.2352 8.8356 17.9443 8.61413 17.7636L2.5888 12.8466C2.08048 12.4318 2.31222 11.6103 2.9624 11.5223L10.75 10.4683C11.0138 10.4326 11.2389 10.2597 11.3415 10.014L14.3079 2.90797Z"
                stroke="#BFCC94"
                strokeWidth="2"
                strokeMiterlimit="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
             </svg>)
          }
          size={27}
          initialValue={rate}
        />
        <div className="arrow-box">
          <img className="arrow-box__img" src={arrow} alt="" />
          <p className="rate-this-book">Rate this book</p>
        </div>
      </div>
    </StyledBook>
  );
};

export default StarRate;
