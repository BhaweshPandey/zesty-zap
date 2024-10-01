import { Container, Title } from '@mantine/core';
import React from 'react';
import SegmentedTabs from './SegmentedTabs';

const USP = () => {
  return (
    <Container my="md" mt={'8%'}>
      <Title pb="sm" fw="bold">
        Our USP
      </Title>
      <SegmentedTabs />
    </Container>
  );
};

export default USP;
