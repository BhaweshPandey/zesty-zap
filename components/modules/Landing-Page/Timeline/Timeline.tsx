import { ThemeIcon, Text, Avatar, Timeline, Box, Container } from '@mantine/core';
import { IconSun, IconVideo } from '@tabler/icons-react';
import { Dispatch, SetStateAction, useState } from 'react';
import { motion } from 'framer-motion';

export default function TimelineProcess() {
  const TIMELINE_ITEMS = [
    {
      text: `  Default bullet without anythingDefault bullet without anythingDefault bullet without
          anythingDefault bullet without anything Default bullet without anythingDefault bullet
          without anythingDefault bullet without anythingDefault bullet without anything Default
          bullet without anythingDefault bullet without anythingDefault bullet without
          anythingDefault bullet without anything Default bullet without anythingDefault bullet
          without anythingDefault bullet without anythingDefault bullet without anything`,
      icon: <IconSun size="1rem" />,
    },
    {
      text: `  Default bullet without anythingDefault bullet without anythingDefault bullet without
          anythingDefault bullet without anything Default bullet without anythingDefault bullet
          without anythingDefault bullet without anythingDefault bullet without anything Default
          bullet without anythingDefault bullet without anythingDefault bullet without
          anythingDefault bullet without anything Default bullet without anythingDefault bullet
          without anythingDefault bullet without anythingDefault bullet without anything`,
      icon: <IconSun size="1rem" />,
    },
    {
      text: `  Default bullet without anythingDefault bullet without anythingDefault bullet without
          anythingDefault bullet without anything Default bullet without anythingDefault bullet
          without anythingDefault bullet without anythingDefault bullet without anything Default
          bullet without anythingDefault bullet without anythingDefault bullet without
          anythingDefault bullet without anything Default bullet without anythingDefault bullet
          without anythingDefault bullet without anythingDefault bullet without anything`,
      icon: <IconSun size="1rem" />,
    },
    {
      text: `  Default bullet without anythingDefault bullet without anythingDefault bullet without
          anythingDefault bullet without anything Default bullet without anythingDefault bullet
          without anythingDefault bullet without anythingDefault bullet without anything Default
          bullet without anythingDefault bullet without anythingDefault bullet without
          anythingDefault bullet without anything Default bullet without anythingDefault bullet
          without anythingDefault bullet without anythingDefault bullet without anything`,
      icon: <IconSun size="1rem" />,
    },
  ];
  interface TimelineItemType {
    isActive: boolean;
    setActiveIndex: Dispatch<SetStateAction<number>>;
    item: Record<string, any>;
    idx: SetStateAction<number>;
  }
  const TimelineItem = ({ item, isActive, setActiveIndex, idx }: TimelineItemType) => (
    <Timeline.Item
      title="Icon"
      bullet={
        <ThemeIcon size={22} variant="gradient" gradient={{ from: 'lime', to: 'cyan' }} radius="xl">
          {item.icon}
        </ThemeIcon>
      }
      lineVariant={isActive ? 'dashed' : 'solid'}
      onClick={() => {
        setActiveIndex(idx);
      }}
    >
      <Text c="dimmed" size="sm">
        {isActive ? item.text : item.text.slice(0, 50)}
      </Text>
    </Timeline.Item>
  );
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  return (
    <Timeline bulletSize={24}>
      <motion.div layout>
        {TIMELINE_ITEMS.map((item, idx) => (
          <TimelineItem
            item={item}
            isActive={activeItemIndex == idx}
            setActiveIndex={setActiveItemIndex}
            idx={idx}
          />
        ))}
      </motion.div>
    </Timeline>
  );
}
