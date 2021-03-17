import React from 'react';
import styled from 'styled-components';
import useDarkMode from 'use-dark-mode';
import Image from 'next/image';

import { spacing } from '../../styles/vars';

const StyledImage = styled.img`
  display: block;
  margin: 0 auto ${spacing.normal};
  max-width: 100%;
`;

const StyledCaption = styled.div`
  font-size: 16px;
  color: var(--text2);
  text-align: center;
`;

const ImageWithCaption = ({ src, darkMode, caption, className = '', ...rest }) => {
  const darkModeSettings = useDarkMode();
  const { height, width } = rest;
  const classNames = `${className}${darkMode && darkModeSettings.value ? ' dark-image' : ''}`;
  return (
    <div>
      {height && width ? (
        <Image className={classNames} src={src} {...rest} />
      ) : (
        <StyledImage
          async
          className={classNames}
          decoding="async"
          importance="low"
          loading="lazy"
          src={src}
          {...rest}
        />
      )}

      {caption && <StyledCaption>{caption}</StyledCaption>}
    </div>
  );
};

export default ImageWithCaption;
