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
  Button,
  Box,
  Badge,
  Flex,
  BackgroundImage,
  Progress,
} from '@mantine/core';
import {
  IconDiscountCheck,
  IconDots,
  IconEye,
  IconFileZip,
  IconHeartFilled,
  IconShoppingCartStar,
  IconStar,
  IconStarHalf,
  IconStarHalfFilled,
  IconTrash,
} from '@tabler/icons-react';
import classes from './SingleProductCard.module.css';
import { IconHeart } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useStores } from '@/models';
import WishlistItem from '@/components/elements/WishlistItem/WishlistItem';


const SingleProductCard = () => {
  const { i18nStore } = useStores();
  return (
    <Card withBorder shadow="sm" radius="md" pt="0">
      <Card.Section
        inheritPadding
        pt="xs"
        pos="absolute"
        w="100%"
        style={{
          background: '#00000000',
        }}
      >
        <Group justify="space-between">
          <Box></Box>
          <Menu withinPortal position="bottom-end" shadow="sm">
            <Menu.Target>
              <ActionIcon variant="subtle" color="gray">
                <IconDots style={{ width: rem(16), height: rem(16) }} />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item leftSection={<IconFileZip style={{ width: rem(14), height: rem(14) }} />}>
                Add to List
              </Menu.Item>
              <Menu.Item leftSection={<IconEye style={{ width: rem(14), height: rem(14) }} />}>
                Some option
              </Menu.Item>
              <Menu.Item
                leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}
                color="red"
              >
                Report Item
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Card.Section>
      <Card.Section>
        <BackgroundImage src={Images.product_drop.shoe_green} h="300">
          <Box
            px="sm"
            py="5"
            bg="grape"
            pos="absolute"
            w="50"
            className={i18nStore.isRTL ? classes['badge-rtl'] : classes.badge}
          >
            <Text fw="600" size="xs" c="white">
              New
            </Text>
          </Box>
          <Box pos="absolute" top="265px" px="xs">
            <WishlistItem />
          </Box>
        </BackgroundImage>
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
export default SingleProductCard;
