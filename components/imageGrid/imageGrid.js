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
import Image from 'next/image';
import ImageWithCaption from '../elements/img';

const StyledCaption = styled.div`
  font-size: 16px;
  color: var(--text2);
  text-align: center;
  margin-top: -16px;
`;

const StyledImageContainer = styled.div`
  margin: 16px 0;
  cursor: zoom-in;
`;

// https://github.com/neptunian/react-photo-gallery/blob/master/src/Photo.js
const CustomRenderComponent = props => {
  const { index, onClick, photo, margin, direction, top, left, key } = props;
  const imgStyle = { margin: margin, display: 'block', cursor: 'zoom-in' };

  const handleClick = event => {
    onClick(event, { photo, index });
  };
  return (
    <div style={imgStyle}>
      <Image {...photo} key={key} onClick={onClick ? handleClick : null} />
    </div>
  );
};

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
        <StyledImageContainer>
          <ImageWithCaption
            caption={caption}
            src={photos[0].src}
            height={photos[0].height}
            width={photos[0].width}
            darkMode={darkMode}
            className={className}
            onClick={e => openLightbox(e, { index: 0 })}
          />
        </StyledImageContainer>
      ) : (
        <StyledImageContainer className={darkMode && darkModeSettings.value ? 'dark-gallery' : ''}>
          <Gallery
            targetRowHeight={rowHeight}
            photos={photos}
            onClick={openLightbox}
            renderImage={CustomRenderComponent}
          />
          {caption && <StyledCaption>{caption}</StyledCaption>}
        </StyledImageContainer>
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
