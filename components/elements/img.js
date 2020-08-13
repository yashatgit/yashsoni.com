import React from 'react';
import styled from 'styled-components';
import useDarkMode from 'use-dark-mode';

import { spacing } from '../../styles/vars';

const StyledImage = styled.img`
  display: block;
  margin: 0 auto ${spacing.normal};
  max-width: 100%;
`;

const Image = ({ src, darkMode, className = '', ...rest }) => {
  const darkModeSettings = useDarkMode();
  const classNames = `${className}${darkMode && darkModeSettings.value ? ' dark-image' : ''}`;
  return (
    <StyledImage async className={classNames} decoding="async" importance="low" loading="lazy" src={src} {...rest} />
  );
};

export default Image;
