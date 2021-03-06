import { PureComponent } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getPictures } from '../../services/fetchService';

import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import Loader from '../Loader';
import Button from '../Button';
import Scroll from '../../helpers/Scroll';
import Modal from '../Modal';
import NoFoundImage from '../ImageError/ImageError';

import './App.css';

class App extends PureComponent {
  state = {
    page: 1,
    images: [],
    searchQuery: '',
    loading: false,
    showModal: false,
  };
  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;
    if (searchQuery !== prevState.searchQuery) {
      this.searchImage()
        .catch(err => console.log(err))
        .finally(() => this.setState({ loading: false }));
    }
  }
  searchImage = () => {
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });

    return getPictures(searchQuery, page).then(images => {
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        page: prevState.page + 1,
      }));
    });
  };

  handleSearchSubmit = searchQuery => {
    this.setState({ searchQuery, page: 1, images: [] });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onClickLargeImage = largeImage => {
    this.setState({ largeImage });
    this.toggleModal();
  };

  handleLoadMoreClick = () => {
    this.setState({ loading: true });
    this.searchImage()
      .then(() => {
        Scroll();
      })
      .catch(err => console.log(err))
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    const { images, largeImage, showModal, loading, searchQuery } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />

        {loading && <Loader />}
        {images.length !== 0 ? (
          <ImageGallery images={images} onOpenModal={this.onClickLargeImage} />
        ) : (
          searchQuery !== '' && <NoFoundImage />
        )}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img
              src={largeImage.largeImageURL}
              alt={largeImage.tag}
              id={largeImage.id}
            />
            <button type="button" onClick={this.toggleModal}>
              Close
            </button>
          </Modal>
        )}
        {!loading && images[0] && <Button onClick={this.handleLoadMoreClick} />}
        <ToastContainer
          autoClose={2000}
          position="top-center"
          hideProgressBar
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}

export default App;
