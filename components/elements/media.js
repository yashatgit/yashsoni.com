import React from 'react';
import styled from 'styled-components';
import useDarkMode from 'use-dark-mode';
import Image from 'next/image';

import { spacing } from '../../styles/vars';

const noop = () => {};

const StyledImage = styled.img`
  display: block;
  margin: 0 auto ${spacing.normal};
  max-width: 100%;
  height: auto;
`;

const StyledCaption = styled.div`
  font-size: 14px;
  line-height: 14px;
  color: var(--text2);
  text-align: center;
  margin-top: 4px;
`;

const videoExtensions = new Set(['mov', 'mp4']);

const MediaWithCaption = ({ darkMode, onClick = noop, asGif, caption, className = '', ...rest }) => {
  const { src, height, width } = rest;
  const [filename, extension] = src.split('.');
  const isVideo = videoExtensions.has(extension);
  const darkModeSettings = useDarkMode();

  const classNames = `${className}${darkMode && darkModeSettings.value ? ' dark-image' : ''}`;
  let mediaComponent;

  if (asGif) {
    mediaComponent = <video classNames={classNames} onClick={onClick} loop muted autoPlay playsInline {...rest} />;
  } else if (isVideo) {
    mediaComponent = <video muted controls onClick={onClick} {...rest} />;
  } else if (height && width) {
    mediaComponent = <Image className={classNames} onClick={onClick} src={src} {...rest} />;
  } else {
    mediaComponent = (
      <StyledImage
        async
        className={classNames}
        onClick={onClick}
        decoding="async"
        importance="low"
        loading="lazy"
        src={src}
        {...rest}
      />
    );
  }
  return (
    <div>
      {mediaComponent}
      {caption && <StyledCaption>{caption}</StyledCaption>}
    </div>
  );
};

export default MediaWithCaption;
