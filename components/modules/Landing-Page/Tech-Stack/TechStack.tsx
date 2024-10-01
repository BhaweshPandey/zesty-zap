import { Container, Title, Grid, Skeleton } from '@mantine/core';
import React from 'react';

const TechStack = () => {
  const child = <Skeleton height={140} radius="md" animate={false} />;

  return (
    <>
      <Container my="md" mt={'5%'}>
        <Title pb="lg" fw="bold">
          Our Tech Stack
        </Title>
        <Grid>
          <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
          <Grid.Col span={{ base: 12, xs: 8 }}>{child}</Grid.Col>
          <Grid.Col span={{ base: 12, xs: 8 }}>{child}</Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
          <Grid.Col span={{ base: 12, xs: 3 }}>{child}</Grid.Col>
          <Grid.Col span={{ base: 12, xs: 3 }}>{child}</Grid.Col>
          <Grid.Col span={{ base: 12, xs: 6 }}>{child}</Grid.Col>
        </Grid>
      </Container>
    </>
  );
};

export default TechStack;
