import Styles from './Loading.styles';

const Loading: React.FC = () => {
  return (
  <Styles>
    <div className="lds-ellipsis">
      <div />
      <div />
      <div />
      <div />
    </div>
  </Styles>
  );
};

export default Loading;
