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
import Img from '../elements/img';

const StyledCaption = styled.div`
  font-size: 16px;
  color: var(--text2);
  text-align: center;
  margin-top: -16px;
`;

const StyledGallery = styled.div`
  margin: 16px 0;
`;

const StyledImage = styled(Img)`
  margin: 16px 0;
  cursor: zoom-in;
`;

/*
photos: [
    {src: '', width: '', height: ''} //use aspect ratio for w/h
]
*/
function ImageGrid({ rowHeight, photos, className, caption = '', darkMode }) {
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
    <>
      {photos.length === 1 ? (
        <StyledImage
          caption={caption}
          src={photos[0].src}
          darkMode={darkMode}
          className={className}
          onClick={e => openLightbox(e, { index: 0 })}
        />
      ) : (
        <StyledGallery className={darkMode && darkModeSettings.value ? 'dark-gallery' : ''}>
          <Gallery targetRowHeight={rowHeight} photos={photos} onClick={openLightbox} />
          {caption && <StyledCaption>{caption}</StyledCaption>}
        </StyledGallery>
      )}
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
    </>
  );
}

export default ImageGrid;
