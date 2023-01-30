import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'src/redux/store';
import Button from 'src/ui/components/Button';

import { addCommentThunk } from '../../redux/thunks/commentsThunks';
// import ItemComment from './itemComment';

import StyledComments from './Comments.styles';

const Comments: React.FC = () => {
  const dispatch = useAppDispatch();
  const { bookId } = useParams();
  const [comment, setComment] = useState('');
  const isAuth = useAppSelector((store) => store.userStore.user);
  // const comments = useAppSelector((store) => store.bookStore.comments);

  const handlerChangeInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  const handlerSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment) {
      const data = comment.trim();
      dispatch(
        addCommentThunk({
          userId: isAuth?.id || 0,
          bookId: Number(bookId) || 0,
          text: data,
        }),
      );
    }
  };

  return (
    <StyledComments>
      <h2>Comments</h2>
      {/* <div>{comments &&
    comments.map((el) => (
      <ItemComment
      authorName={el.user?.email}
      date={}
      img={}
      text= {}
      key={el.id}
      />
    ))
     }</div> */}
      {isAuth && (
        <form
          onSubmit={(e) => handlerSubmitForm(e)}
          className="comment-box__form"
        >
          <textarea
            onChange={(e) => handlerChangeInput(e)}
            value={comment}
            className="comment-box__input"
            placeholder="Share a comment"
          />
          <Button className="comment-box__button">Post a comment</Button>
        </form>
      )}
    </StyledComments>
  );
};

export default Comments;
