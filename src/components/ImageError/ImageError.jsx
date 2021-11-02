import lonely from '../../img/man.jpg';

const NoFoundImage = () => {
  return (
    <div role="alert">
      <img src={lonely} width="400" alt="lonely-man" />
      <p>No match...</p>
    </div>
  );
};

export default NoFoundImage;
