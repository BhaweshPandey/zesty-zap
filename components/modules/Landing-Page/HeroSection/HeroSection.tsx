import {
  BackgroundImage,
  Container,
  Title,
  Box,
  TextInput,
  rem,
  ActionIcon,
  Text,
  useMantineColorScheme,
} from '@mantine/core';
import { IconMail, IconPhone, IconArrowRight } from '@tabler/icons-react';

export default function HeroSection() {
  const { colorScheme } = useMantineColorScheme();
  console.log(colorScheme);
  const heroStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Full viewport height
    width: '100%', // Full viewport width
    background:
      colorScheme === 'light'
        ? 'linear-gradient(15deg, #13547A 0%, #80D0C7 100%)'
        : 'linear-gradient(to top, #1E3C72 0%, #1E3C72 1%, #2A5298 100%)',
  };

  return (
    <Box style={heroStyle}>
      <Container
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',

          justifyContent: 'center',
        }}
      >
        <Title style={{ color: 'white', fontSize: 60, fontWeight: 700 }}>
          Empowering Your Digital Dreams
        </Title>
        <Text size="lg" c="whitesmoke">
          Discover the frontier of digital innovation at Highpolar. Specializing in advanced Mobile
          and Web Applications, SaaS, and AI/AR technologies, we transform ideas into unique digital
          experiences. Join us in shaping the future.
        </Text>
        <Box
          my="lg"
          style={{
            display: 'flex',
            textAlign: 'center',

            justifyContent: 'center',
          }}
        >
          <TextInput
            radius="xl"
            size="md"
            w="450"
            style={{
              textAlign: 'center',
            }}
            placeholder="Want a free prototype? Fill this"
            rightSectionWidth={42}
            leftSectionWidth={50}
            leftSection={
              <>
                <IconMail style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                <IconPhone style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
              </>
            }
            rightSection={
              <ActionIcon size={32} radius="xl" variant="filled">
                <IconArrowRight style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
              </ActionIcon>
            }
          />
        </Box>
        {/* <Text
            size="md"
            my="md"
            style={{
              color: 'white',
              fontWeight: 100,
            }}
          >
            Want a free prototype?
          </Text> */}
      </Container>
    </Box>
  );
}
