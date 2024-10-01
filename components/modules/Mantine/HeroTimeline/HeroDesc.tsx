import {
    Image,
    Container,
    Title,
    Button,
    Group,
    Text,
    List,
    ThemeIcon,
    rem,
    Box,
  } from '@mantine/core';
  import { IconCheck } from '@tabler/icons-react';
  //import image from './image.svg';
  import classes from './HeroDesc.module.css';
  import { Images } from '@/public';
  import TimelineProcess from '@/components/modules/Landing-Page/Timeline/Timeline';
  
  export function HeroTimeline() {
    return (
      <Container size="md">
        <div
          className={classes.inner}
          style={{
            height: '95vh',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: "8%"
          }}
        >
          <div className={classes.content}>
            <Title className={classes.title}>
              Our <span className={classes.highlight}>Bulletproof</span> Process
            </Title>
            <Box my="lg">
              <TimelineProcess />
            </Box>
            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                Get started
              </Button>
              <Button variant="default" radius="xl" size="md" className={classes.control}>
                Source code
              </Button>
            </Group>
          </div>
          <Image src={Images.hero_who_we_are} className={classes.image} />
        </div>
      </Container>
    );
  }
  