import { SimpleGrid, Card, Image, Text, Container, AspectRatio, Title, Flex } from '@mantine/core';
import classes from './ArticlesCardsGrid.module.css';

const mockdata = [
  {
    title: 'Top 10 places to visit in Norway this summer',
    image: '/image/photo-1527004013197-933c4bb611b3.webp',
    date: 'August 18, 2022',
  },
  {
    title: 'Best forests to visit in North America',
    image: '/image/photo-1448375240586-882707db888b.webp',
    date: 'August 27, 2022',
  },
  {
    title: 'Hawaii beaches review: better than you think',
    image: '/image/photo-1507525428034-b723cf961d3e.webp',
    date: 'September 9, 2022',
  },
  {
    title: 'Mountains at night: 12 best locations to enjoy the view',
    image: '/image/photo-1519681393784-d120267933ba.webp',
    date: 'September 12, 2022',
  },
];

export function ArticlesCardsGrid() {
  const cards = mockdata.map((article) => (
    <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} alt="article_image" />
      </AspectRatio>
      <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));

  return (
    <Container pt="xl">
      <Flex justify="center" p="lg">
        <Title>Articles</Title>
      </Flex>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
    </Container>
  );
}
