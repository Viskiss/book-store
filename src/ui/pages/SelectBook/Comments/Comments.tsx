import type { ChangeEvent, FormEvent } from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import io from 'socket.io-client';

import { useAppSelector } from 'src/redux/store';
import Button from 'src/ui/components/Button';

import config from 'src/utils/config';
import type { CommentType } from 'src/types';

import { addComment } from 'src/api';

import ItemComment from './itemComment';

import StyledComments from './Comments.styles';

const Comments: React.FC = () => {
  const { bookId } = useParams();

  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<CommentType[]>([]);

  const user = useAppSelector((store) => store.userStore.user);

  const socket = io(config.configSocket.apiBaseUrl);

  // eslint-disable-next-line no-console
  console.log(socket);

  useEffect(() => {
    socket.on('connect', () => {
      // eslint-disable-next-line no-console
      console.log(socket.id);
    });

    socket.emit('getComments', { bookId });

    socket.on('getComments', (data) => {
      setComments(data);
      // eslint-disable-next-line no-console
      console.log(data);
      return () => {
        socket.removeAllListeners();
      };
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const comments = await getComments(Number(bookId));
  //       setComments(comments.data);
  //     } catch (err) {
  //       const error = err as Error;
  //       return toast.error(error.message);
  //     }
  //   })();
  // }, [bookId]);

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
          const comment = await addComment({
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
      {user && (
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
      ) }
    </StyledComments>
  );
};

export default Comments;
