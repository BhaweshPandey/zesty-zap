import { Images } from '@/public';
import {
  Card,
  Group,
  Text,
  Menu,
  ActionIcon,
  Image,
  SimpleGrid,
  rem,
  Flex,
  Button,
  Box,
  Progress,
  BackgroundImage,
} from '@mantine/core';
import {
  IconDiscountCheck,
  IconDots,
  IconEye,
  IconFileZip,
  IconShoppingCartStar,
  IconStar,
  IconTrash,
} from '@tabler/icons-react';
import classes from './MultiProductCard.module.css';
import WishlistItem from '@/components/elements/WishlistItem/WishlistItem';
const images = [
  Images.product_drop.shoe_red,
  Images.product_drop.shoe_red,
  Images.product_drop.shoe_red,
];

const MultiProductCard = () => {
  return (
    <Card withBorder shadow="sm" radius="md">
      <Card.Section withBorder inheritPadding py="xs">
        <Group justify="space-between">
          <Text fw={500}>Shoe</Text>
          <Menu withinPortal position="bottom-end" shadow="sm">
            <Menu.Target>
              <ActionIcon variant="subtle" color="gray">
                <IconDots style={{ width: rem(16), height: rem(16) }} />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item leftSection={<IconFileZip style={{ width: rem(14), height: rem(14) }} />}>
                Download zip
              </Menu.Item>
              <Menu.Item leftSection={<IconEye style={{ width: rem(14), height: rem(14) }} />}>
                Preview all
              </Menu.Item>
              <Menu.Item
                leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}
                color="red"
              >
                Delete all
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Card.Section>

      <Card.Section>
        <BackgroundImage  src={Images.product_drop.shoe_red} h="200">
        <Box pos="absolute" top="210px" px="xs">
            <WishlistItem />
          </Box>
        </BackgroundImage>
      </Card.Section>

      <Card.Section inheritPadding mt="sm" pb="md">
        <SimpleGrid cols={3}>
          {images.map((image) => (
            <Image src={image} key={image} radius="sm" />
          ))}
        </SimpleGrid>
      </Card.Section>
      <Card.Section>
        <Flex direction={'column'} align="center">
          <Text size="lg" fw="bold">
            Green Shoe Extreme
          </Text>
          <Flex align="center" py="lg" justify="space-between" w="250">
            <Box px="sm" px="sm">
              <IconShoppingCartStar color="green" />
            </Box>
            <Progress w="170" value={80} striped animated />
            <Box px="sm">80%</Box>
          </Flex>
          <Text c="darkgray" align="center" px="xs">
            This shoe will make you run very fast, like super fast, like overtake cars and stuff
          </Text>
          <Flex align="center" py="lg" justify="space-between">
            <IconStar fill="gold" color="gold" />
            <span>4.5</span>
            <span>|</span>
            <IconDiscountCheck color="blue" />
            <span>3500</span>
          </Flex>
          <Text size="xl" fw="bold" my="md">
            $160
          </Text>
        </Flex>
      </Card.Section>
      <Card.Section>
        <Button w="100%" size="lg" className={classes['add-to-cart']}>
          Add To Cart
        </Button>
      </Card.Section>
    </Card>
  );
};
export default MultiProductCard;
