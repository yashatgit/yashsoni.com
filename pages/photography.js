import React from 'react';

import Footer from '../components/footer';
import Container from '../components/Container';
import Nav from '../components/nav';
// import styled from 'styled-components';
// import { spacing } from '../styles/vars';
// import { heading } from '../styles/mixins';

import ImageGrid from '../components/imageGrid';

const im = [
  {
    src: 'static/images/photography/abstract_1.jpg',
    width: 4496,
    height: 3000,
  },
  {
    src: 'static/images/photography/buildings_1.jpg',
    width: 4898,
    height: 3265,
  },
  {
    src: 'static/images/photography/buildings_2.jpg',
    width: 4898,
    height: 3266,
  },
  {
    src: 'static/images/photography/landscape_1.jpg',
    width: 4898,
    height: 3265,
  },
  {
    src: 'static/images/photography/landscape_2.jpg',
    width: 4951,
    height: 3231,
  },
  {
    src: 'static/images/photography/landscape_3.jpg',
    width: 4496,
    height: 2253,
  },
  {
    src: 'static/images/photography/landscape_4.jpg',
    width: 5480,
    height: 2919,
  },
  {
    src: 'static/images/photography/landscape_5.jpg',
    width: 3264,
    height: 2448,
  },
  {
    src: 'static/images/photography/landscape_6.jpg',
    width: 3264,
    height: 2448,
  },
  {
    src: 'static/images/photography/landscape_7.jpg',
    width: 3264,
    height: 2448,
  },
  {
    src: 'static/images/photography/landscape_8.jpg',
    width: 4898,
    height: 3265,
  },
  {
    src: 'static/images/photography/nature_1.jpg',
    width: 5321,
    height: 3088,
  },
  {
    src: 'static/images/photography/nature_2.jpg',
    width: 4898,
    height: 3265,
  },
  {
    src: 'static/images/photography/nature_3.jpg',
    width: 5032,
    height: 3179,
  },
  {
    src: 'static/images/photography/nature_4.jpg',
    width: 4496,
    height: 3000,
  },
  {
    src: 'static/images/photography/nature_5.jpg',
    width: 4898,
    height: 3265,
  },
  {
    src: 'static/images/photography/people_1.jpg',
    width: 4496,
    height: 3000,
  },
  {
    src: 'static/images/photography/places_1.jpg',
    width: 4898,
    height: 3265,
  },
  {
    src: 'static/images/photography/places_2.jpg',
    width: 2992,
    height: 2000,
  },
  {
    src: 'static/images/photography/places_3.jpg',
    width: 4898,
    height: 3265,
  },
  {
    src: 'static/images/photography/places_4.jpg',
    width: 3312,
    height: 2682,
  },
  {
    src: 'static/images/photography/places_5.jpg',
    width: 4898,
    height: 3265,
  },
  {
    src: 'static/images/photography/places_6.jpg',
    width: 3000,
    height: 4496,
  },
  {
    src: 'static/images/photography/places_7.jpg',
    width: 4448,
    height: 2968,
  },
  {
    src: 'static/images/photography/places_8.jpg',
    width: 4898,
    height: 3265,
  },
  {
    src: 'static/images/photography/portrait_1.jpg',
    width: 3736,
    height: 2525,
  },
  {
    src: 'static/images/photography/portrait_2.jpg',
    width: 4898,
    height: 3265,
  },
  {
    src: 'static/images/photography/portrait_3.jpg',
    width: 3315,
    height: 4825,
  },
  {
    src: 'static/images/photography/wildlife_1.jpg',
    width: 4898,
    height: 3265,
  },
];
const Index = () => (
  <>
    <Nav />
    <Container style={{ maxWidth: 1200 }}>
      <ImageGrid
        photos={[
          { src: '/static/images/photography/places_8.jpg', width: 4898, height: 3265 },
          { src: '/static/images/photography/abstract_1.jpg', width: 4496, height: 3000 },
          { src: '/static/images/photography/buildings_1.jpg', width: 4898, height: 3265 },
          { src: '/static/images/photography/landscape_1.jpg', width: 4898, height: 3265 },
          { src: '/static/images/photography/landscape_4.jpg', width: 5480, height: 2919 },
          { src: '/static/images/photography/landscape_5.jpg', width: 3264, height: 2448 },
          { src: '/static/images/photography/landscape_6.jpg', width: 3264, height: 2448 },
          // {src: '/static/images/photography/landscape_7.jpg', width: 3264, height: 2448},
          { src: '/static/images/photography/landscape_8.jpg', width: 4898, height: 3265 },
          { src: '/static/images/photography/landscape_3.jpg', width: 4496, height: 2253 },
          { src: '/static/images/photography/buildings_2.jpg', width: 4898, height: 3265 },
          { src: '/static/images/photography/landscape_2.jpg', width: 4951, height: 3231 },
          { src: '/static/images/photography/nature_1.jpg', width: 5321, height: 3088 },
          { src: '/static/images/photography/nature_2.jpg', width: 4898, height: 3265 },
          { src: '/static/images/photography/nature_3.jpg', width: 5032, height: 3179 },
          { src: '/static/images/photography/nature_4.jpg', width: 4496, height: 3000 },
          { src: '/static/images/photography/nature_5.jpg', width: 4898, height: 3265 },
          { src: '/static/images/photography/places_4.jpg', width: 3312, height: 2682 },
          { src: '/static/images/photography/people_1.jpg', width: 4496, height: 3000 },
          { src: '/static/images/photography/places_2.jpg', width: 2992, height: 2000 },
          { src: '/static/images/photography/portrait_3.jpg', width: 3315, height: 4825 },
          { src: '/static/images/photography/places_3.jpg', width: 4898, height: 3265 },
          { src: '/static/images/photography/places_5.jpg', width: 4898, height: 3265 },
          { src: '/static/images/photography/places_6.jpg', width: 3000, height: 4496 },
          { src: '/static/images/photography/portrait_1.jpg', width: 3736, height: 2525 },
          { src: '/static/images/photography/places_7.jpg', width: 4448, height: 2968 },
          { src: '/static/images/photography/portrait_2.jpg', width: 4898, height: 3265 },
          { src: '/static/images/photography/wildlife_1.jpg', width: 4898, height: 3265 },
        ]}
        rowHeight="300"
      />
    </Container>
    <Footer />
  </>
);

export default Index;
