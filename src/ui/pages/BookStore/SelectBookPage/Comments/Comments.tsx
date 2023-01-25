import { useAppSelector } from 'src/redux/store';
import Button from 'src/ui/components/Button';
import StyledComments from './Comments.styles';

const Comments: React.FC = () => {
  const isAuth = useAppSelector((store) => store.userStore.user);
  return (
    <StyledComments>
    <h2>Comments</h2>
    <div>List Comments</div>
    {isAuth && (
            <form><input type="text" />
    <Button className="simple-button">Post a comment</Button>
            </form>
    )}
    </StyledComments>
  );
};

export default Comments;
