"use client";

/*
http://neptunian.github.io/react-photo-gallery/
http://neptunian.github.io/react-photo-gallery/examples/lightbox.html

http://jossmac.github.io/react-images/#/
*/

import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import { Caption, MediaWithCaption } from "./media";

const StyledMediaContainer = ({ children }) => {
  const isDarkMode = false;
  return <div className={`pb-6 image-container ${isDarkMode ? "dark-gallery" : ""}`}>{children}</div>;
};

// https://github.com/neptunian/react-photo-gallery/blob/master/src/Photo.js
const CustomRenderComponent = (props) => {
  const { index, onClick, photo, margin, direction, top, left, key } = props;

  const handleClick = (event) => {
    onClick(event, { photo, index });
  };
  return (
    <div key={key} style={{ margin: margin, display: "block", cursor: "zoom-in" }}>
      <MediaWithCaption {...photo} onClick={onClick ? handleClick : null} />
    </div>
  );
};

// https://jossmac.github.io/react-images/#/components
// https://github.com/jossmac/react-images/blob/master/docs/pages/CustomComponents/AlternativeMedia/index.js
const CustomGalleryViewComponent = (props) => {
  const { data, formatters, getStyles, index, isFullscreen, isModal, darkMode } = props;

  return (
    <div
      style={{
        lineHeight: 0,
        position: "relative",
        textAlign: "center",
        boxSizing: "border-box",
      }}
    >
      <MediaWithCaption
        darkMode={darkMode}
        className="react-images__view-image react-images__view-image--isModal"
        src={data.src}
        asGif={data.asGif}
        style={{ maxHeight: "100vh !important", height: "auto" }}
        caption={data.caption}
      />
    </div>
  );
};

export function MediaGrid({ rowHeight = undefined, photos, className = "", caption = "", darkMode = false }) {
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
        <StyledMediaContainer>
          <MediaWithCaption
            style={{ maxWidth: "100%", height: "auto" }}
            {...photos[0]}
            darkMode={darkMode}
            className={className}
            caption={caption}
            onClick={(e) => openLightbox(e, { index: 0 })}
          />
        </StyledMediaContainer>
      ) : (
        <StyledMediaContainer>
          <Gallery
            targetRowHeight={rowHeight}
            photos={photos}
            onClick={openLightbox}
            renderImage={CustomRenderComponent}
          />
          {caption && <Caption>{caption}</Caption>}
        </StyledMediaContainer>
      )}
      {/*@ts-ignore*/}
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((media) => ({
                ...media,
                caption: media.title || media.caption,
                srcset: media.srcSet,
              }))}
              components={{ View: CustomGalleryViewComponent }}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  );
}
