import { Container, Title, Box } from '@mantine/core';
import React from 'react';
import { CardsCarousel } from '../../Mantine/CardsCarousel/CardsCarousel';

const CaseStudies = () => {
  return (
    <Container
        pb="lg"
        style={{
          textAlign: 'center',
        }}
      >
        <Title pb="lg" fw="bold">
          Case Studies
        </Title>
        <Box style={{ alignItems: 'center', justifyContent: 'center' }}>
          <CardsCarousel />
        </Box>
      </Container>
  );
};

export default CaseStudies;
