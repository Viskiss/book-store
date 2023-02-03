import type { ChangeEvent, FormEvent } from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAppSelector } from 'src/redux/store';
import Button from 'src/ui/components/Button';

import type { CommentType } from 'src/types';

import commentApi from 'src/ui/pages/BookStore/redux/api/commentApi';

import ItemComment from './itemComment';

import StyledComments from './Comments.styles';

const Comments: React.FC = () => {
  const { bookId } = useParams();

  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<CommentType[]>([]);

  const user = useAppSelector((store) => store.userStore.user);

  useEffect(() => {
    (async () => {
      try {
        const comments = await commentApi.getComments(Number(bookId));
        setComments(comments.data);
      } catch (err) {
        const error = err as Error;
        return toast.error(error.message);
      }
    })();
  }, [bookId]);

  const handlerChangeInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  const handlerSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment && user) {
      const data = comment.trim();
      (async () => {
        try {
          const comment = await commentApi.addComment({
            userId: user.id,
            bookId: Number(bookId),
            text: data,
          });
          setComments(comment.data);
        } catch (err) {
          const error = err as Error;
          return toast.error(error.message);
        }
      })();
    }
    setComment('');
  };

  return (
    <StyledComments>
      {comments.length || user ? (
        <h2 className="comments-box__title">Comments</h2>
      ) : (
        ''
      )}
      <div className="comments-box">
        {comments &&
          comments.map((el) => (
            <ItemComment
              authorName={el.user?.email}
              date={el.createdTime}
              img={el.user.avatar}
              text={el.text}
              key={el.id}
            />
          ))}
      </div>
      {user ? (
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
      ) : (
        <h2 className="comments-box__title">No comments</h2>
      )}
    </StyledComments>
  );
};

export default Comments;
