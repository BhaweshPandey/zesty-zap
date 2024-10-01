import { Flex, useMantineTheme, Text, Image, FlexProps, Button } from '@mantine/core';
import React, { useContext } from 'react';
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useViewportScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from 'framer-motion';
import { typography } from '@/themes/template/typography';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import {
  IconWorld,
  IconChevronDown,
  IconArrowRight,
  IconPlus,
  IconMinus,
} from '@tabler/icons-react';
import classes from './QuestionSection.module.css';
import I18nContext from '@/context/i18nContext';

interface QuestionAnswer {
    id: number;
    question: { [key: string]: string };
    answer: { [key: string]: string };
  }

const QuestionSection = (props: {
  questionSection: boolean;
  setButtonHoverEffectMoreQuestions: React.Dispatch<React.SetStateAction<boolean>>;
  buttonHoverEffectMoreQuestions: boolean;
  questionAnswer: QuestionAnswer[];
  maxWidthScreen: any;
  matches: any;
  toggleItem: (id: number) => void;
  calculateY: (index: number) => number;
  setHover: React.Dispatch<React.SetStateAction<number>>;
  openItems: Record<number, boolean>;
  hover: number;
  calculateDelay: (index: number) => number;
}) => {
  const theme = useMantineTheme();
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error('LanguageSelector must be used within an I18nProvider');
  }

  const { language, changeLanguage } = context;


  return (
    <Flex bg={theme.colors.gray[1]}>
      <Flex className={classes.questionOuterContainer}>
        <Flex className={classes.questionLeftContainer}>
          <motion.div
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: '+70px', opacity: 0.2 },
            }}
            animate={props.questionSection ? 'visible' : 'hidden'}
            transition={{ duration: 0.7, ease: 'easeInOut', type: 'tween' }}
          >
            <BaseText
              txtkey="landingPage3.anyQuestion"
              style={typography.headings[language].h4}
              color={theme.colors.black[0]}
              zIndex={100}
              className={classes.anyQuestion}
            />
          </motion.div>
          <motion.div
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: '+70px', opacity: 0.2 },
            }}
            animate={props.questionSection ? 'visible' : 'hidden'}
            transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.3, type: 'tween' }}
          >
            <BaseText
              txtkey="landingPage3.findQuestions"
              style={typography.paragraph[language].p7}
              color={theme.colors.blue[1]}
              className={classes.findQuestions}
            />
          </motion.div>
          <motion.div
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: '+70px', opacity: 0.2 },
            }}
            animate={props.questionSection ? 'visible' : 'hidden'}
            transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.5, type: 'tween' }}
          >
            <BaseButton
              radius={'1.875vw'}
              variant={'primary'}
              className={classes.moreQuestionsAndAnswersButton}
              onMouseEnter={() => props.setButtonHoverEffectMoreQuestions(true)}
              onMouseLeave={() => props.setButtonHoverEffectMoreQuestions(false)}
            >
              <Button bg={'transparent'} className={classes.moreQuestionsAndAnswersWidth}>
                <BaseText
                  txtkey="landingPage3.moreQuestionsAndAnswers"
                  c={theme.colors.white[0]}
                  style={typography.buttonText[language].b4}
                  className={
                    props.buttonHoverEffectMoreQuestions
                      ? classes.newRegistrationHoverBefore
                      : classes.newRegistrationBefore
                  }
                />
                <BaseText
                  txtkey="landingPage3.moreQuestionsAndAnswers"
                  c={theme.colors.white[0]}
                  style={typography.buttonText[language].b4}
                  className={
                    props.buttonHoverEffectMoreQuestions
                      ? classes.newRegistrationHoverAfter
                      : classes.newRegistrationAfter
                  }
                />
              </Button>
            </BaseButton>
          </motion.div>
        </Flex>
        <motion.div className={classes.questionAccordionInnerSection}>
          {props.questionAnswer.map((questionAnswerItem:any, index:any) => {
            return (
              <motion.div
                style={{
                  backgroundColor: `${theme.colors.white[0]}`,
                }}
                className={classes.questionAccordionSection}
                key={index}
                onClick={() => props.toggleItem(questionAnswerItem.id)}
                variants={{
                  visible: {
                    y: 0,
                    height: props.openItems[questionAnswerItem.id]
                      ? props.maxWidthScreen
                        ? '210px'
                        : props.matches
                        ? '280px'
                        : '170px'
                      : props.maxWidthScreen
                      ? '100px'
                      : '70px',
                  },
                  hidden: { y: `${props.calculateY(index)}px` },
                }}
                animate={props.questionSection ? 'visible' : 'hidden'}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut',
                  delay: props.calculateDelay(index),
                }}
              >
                <Flex className={classes.questionAnswerContent}>
                  <Text
                    onMouseEnter={() => props.setHover(questionAnswerItem.id)}
                    onMouseLeave={() => props.setHover(0)}
                    c={
                      props.hover === questionAnswerItem.id
                        ? theme.colors.blue[0]
                        : props.openItems[questionAnswerItem.id]
                        ? theme.colors.blue[0]
                        : theme.colors.black[0]
                    }
                    style={typography.buttonText[language].b5}
                    className={classes.questionAnswerItem}
                    // c={theme.colors.gray[6]}
                  >
                    {
                      questionAnswerItem.question[
                        language as keyof typeof questionAnswerItem.question
                      ]
                    }
                  </Text>
                  {props.openItems[questionAnswerItem.id as keyof typeof props.openItems] ? (
                    <motion.div
                      animate={{ rotate: 0 }}
                      transition={{ duration: 0.5 }}
                      className={classes.accordionIcon}
                    >
                      <IconMinus size={32} stroke={0.9} color={theme.colors.gray[6]} />
                    </motion.div>
                  ) : (
                    <motion.div
                      animate={{ rotate: 180 }}
                      transition={{ duration: 0.5 }}
                      className={classes.plusIcon}
                    >
                      <IconPlus size={32} stroke={0.9} color={theme.colors.gray[6]} />
                    </motion.div>
                  )}
                </Flex>
                <Flex>
                  {props.openItems[questionAnswerItem.id as keyof typeof props.openItems] ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.7, delay: 0.5 }}
                    >
                      <Text
                        mt={'18px'}
                        style={typography.paragraph[language].p8}
                      >
                        {
                          questionAnswerItem.answer[
                            language as keyof typeof questionAnswerItem.answer
                          ]
                        }
                      </Text>
                    </motion.div>
                  ) : null}
                </Flex>
              </motion.div>
            );
          })}
        </motion.div>
      </Flex>
    </Flex>
  );
};

export default QuestionSection;
