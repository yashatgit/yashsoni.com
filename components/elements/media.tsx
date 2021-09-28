import React from 'react';
import Image from 'next/image';
import { useTheme } from 'components/hooks/useTheme';
const noop = () => {};

const videoExtensions = new Set(['mov', 'mp4']);

export const Caption = ({ children, style = {} }) => (
  <div
    style={style}
    className="block max-w-full text-center text-sm text-gray-500 dark:text-white leading-3"
  >
    {children}
  </div>
);

const MediaWithCaption = ({
  darkMode,
  onClick = noop,
  asGif,
  caption,
  className = '',
  ...rest
}) => {
  const { src, height, width } = rest;
  const [filename, extension] = src.split('.');
  const isVideo = videoExtensions.has(extension);
  const { isDarkMode } = useTheme();

  const classNames = `block max-w-full h-auto m-auto ${className}${
    darkMode && isDarkMode ? ' dark-image' : ''
  }`;
  let mediaComponent;

  if (asGif) {
    mediaComponent = (
      <video
        className={classNames}
        onClick={onClick}
        loop
        muted
        autoPlay
        playsInline
        {...rest}
      />
    );
  } else if (isVideo) {
    mediaComponent = (
      <video
        muted
        controls
        className={classNames}
        onClick={onClick}
        {...rest}
      />
    );
  } else if (height && width) {
    mediaComponent = (
      <Image
        alt=""
        className={classNames}
        onClick={onClick}
        src={src}
        {...rest}
      />
    );
  } else {
    mediaComponent = (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        alt=""
        className={classNames}
        onClick={onClick}
        decoding="async"
        loading="lazy"
        src={src}
        {...rest}
      />
    );
  }
  return (
    <div>
      {mediaComponent}
      {caption && <Caption style={{ width }}>{caption}</Caption>}
    </div>
  );
};

export default MediaWithCaption;
