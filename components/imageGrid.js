/*
http://neptunian.github.io/react-photo-gallery/
http://neptunian.github.io/react-photo-gallery/examples/lightbox.html

http://jossmac.github.io/react-images/#/
*/

import React, {useState, useCallback} from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, {Modal, ModalGateway} from 'react-images';
import styled from 'styled-components';

const StyledCaption = styled.div`
    font-size: 16px;
    color: ${(props) => props.theme.darkGrey};
    text-align: center;
`;

function ImageGrid({images, height = 1, width = 1, caption = ''}) {
    const photosForGallery = [...images].map((image) => {
        const imgConfig = typeof image === 'object' ? image : {src: image};

        return {
            ...imgConfig,
            height: imgConfig.height || height,
            width: imgConfig.width || width
        };
    });
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, {photo, index}) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div>
            <Gallery photos={photosForGallery} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photosForGallery.map((x) => ({
                                ...x,
                                caption: x.title,
                                srcset: x.srcSet
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
            {caption && <StyledCaption>{caption}</StyledCaption>}
        </div>
    );
}

export default ImageGrid;
