import React from 'react';
import styled from 'styled-components';
import useDarkMode from 'use-dark-mode';

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

const Image = ({ src, darkMode, caption, className = '', ...rest }) => {
  const darkModeSettings = useDarkMode();
  const classNames = `${className}${darkMode && darkModeSettings.value ? ' dark-image' : ''}`;
  return (
    <div>
      <StyledImage async className={classNames} decoding="async" importance="low" loading="lazy" src={src} {...rest} />
      {caption && <StyledCaption>{caption}</StyledCaption>}
    </div>
  );
};

export default Image;
