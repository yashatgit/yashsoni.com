/*
http://neptunian.github.io/react-photo-gallery/
http://neptunian.github.io/react-photo-gallery/examples/lightbox.html

http://jossmac.github.io/react-images/#/
*/

import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import styled from 'styled-components';
import useDarkMode from 'use-dark-mode';

const StyledCaption = styled.div`
  font-size: 16px;
  color: ${props => props.theme.darkGrey};
  text-align: center;
`;

const StyledGallery = styled.div`
  margin: 40px 0;
`;

/*
photos: [
    {src: '', width: '', height: ''} //use aspect ratio for w/h
]
*/
function ImageGrid({ rowHeight, photos, caption = '', darkMode }) {
  const darkModeSettings = useDarkMode();
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    // convert to dark mode if props and global dark mode is set to true
    <StyledGallery className={darkMode && darkModeSettings.value ? 'dark-gallery' : ''}>
      <Gallery targetRowHeight={rowHeight} photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                caption: x.title,
                srcset: x.srcSet,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      {caption && <StyledCaption>{caption}</StyledCaption>}
    </StyledGallery>
  );
}

export default ImageGrid;
