import { Center, Grid, SegmentedControl, rem } from '@mantine/core';
import { IconCode, IconExternalLink, IconEye } from '@tabler/icons-react';
import { ImageActionBanner } from "@/components/modules/Landing-Page/USP/ImageActionBanner/ImageActionBanner"

const SegmentedTabs = () => (
  <Grid>
    <Grid.Col span={4}>
      <SegmentedControl
        orientation="vertical"
        size="md"
        radius={'md'}
        color="blue"
        styles={{
          root: {
            backgroundColor: 'white',
          },
        }}
        data={[
          {
            value: 'preview',
            label: (
              <Center style={{ gap: 10 }} h={50} w={200}>
                <IconEye style={{ width: rem(16), height: rem(16) }} />
                <span>Preview</span>
              </Center>
            ),
          },
          {
            value: 'code',
            label: (
              <Center style={{ gap: 10 }} h={50} w={200}>
                <IconCode style={{ width: rem(16), height: rem(16) }} />
                <span>Code</span>
              </Center>
            ),
          },
          {
            value: 'export',
            label: (
              <Center style={{ gap: 10 }} h={50} w={200}>
                <IconExternalLink style={{ width: rem(16), height: rem(16) }} />
                <span>Export</span>
              </Center>
            ),
          },
          {
            value: 'ss',
            label: (
              <Center style={{ gap: 10 }} h={50} w={200}>
                <IconExternalLink style={{ width: rem(16), height: rem(16) }} />
                <span>Export</span>
              </Center>
            ),
          },
          {
            value: 'exddport',
            label: (
              <Center style={{ gap: 10 }} h={50} w={200}>
                <IconExternalLink style={{ width: rem(16), height: rem(16) }} />
                <span>Export</span>
              </Center>
            ),
          },
        ]}
      />
    </Grid.Col>
    <Grid.Col span={8}>
      <ImageActionBanner />
    </Grid.Col>
  </Grid>
);

export default SegmentedTabs;
