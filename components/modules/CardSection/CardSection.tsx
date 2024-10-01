import React, { useContext } from 'react';
import { Flex, useMantineTheme, Text, Image, FlexProps, Button } from '@mantine/core';
import classes from './CardSection.module.css';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { typography } from '@/themes/template/typography';
import { Images } from '@/public';
import {
  motion,
  useTransform,
} from 'framer-motion';
import I18nContext from '@/context/i18nContext';

const CardSection = (props: { 
    lineGrad: any; 
    lineGrad4: any; 
    lineGrad2: any;
    smoothProgress:any;
}) => {
  const theme = useMantineTheme();
  const rotate = useTransform(props.smoothProgress, [0, 1], [0, 400]);
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error('LanguageSelector must be used within an I18nProvider');
  }

  const { language, changeLanguage } = context;


  return (
    <Flex id="main" className={classes.outerCardContainer} bg={theme.colors.gray[1]}>
      <Flex id="cardOne" className={classes.cardOne} bg={`${props.lineGrad}`}>
        <Flex className={classes.firstCardLeftSection}>
          <Image
            src={Images.comfortableSectionPic}
            alt="boy-with-laptop"
            fit="contain"
            className={classes.comfortableSectionPic}
          />
          <Image
            src={Images.sofa}
            alt="sofa"
            fit="contain"
            className={classes.sofaContainer}
          />
          <Image
            src={Images.jacket}
            alt="jacket"
            fit="contain"
            className={classes.jacketContainer}
          />
          <Image
            src={Images.camera}
            alt="camera"
            fit="contain"
            className={classes.cameraContainer}
          />
        </Flex>
        <Flex className={classes.firstCardLeftTextSection}>
          <BaseText
            txtkey="landingPage3.comfortable"
            style={typography.headings[language].h5}
            color={theme.colors.black[0]}
          />
          <BaseText
            txtkey="landingPage3.withNetgiro"
            style={typography.paragraph[language].p3}
            color={theme.colors.white[0]}
            className={classes.withNetgiroText}
          />
        </Flex>
      </Flex>
      <Flex id="cardTwo" className={classes.cardTwo} bg={`${props.lineGrad4}`}>
        <Flex className={classes.cardTwoLeftImageSection}>
          <Image
            src={Images.shopSectionImage}
            width={300}
            height={300}
            alt="girl-with-laptop"
            fit="contain"
            className={classes.comfortableSectionPic}
          />
          <Image
            src={Images.shoe}
            alt="shoe"
            fit="contain"
            className={classes.shoeContainer}
          />
          <Image
            src={Images.coat}
            alt="shoe"
            fit="contain"
            className={classes.coatContainer}
          />
          <Image
            src={Images.tshirt}
            alt="shoe"
            fit="contain"
            className={classes.tshirtContainer}
          />
        </Flex>
        <Flex className={classes.secondCardRightTextSection}>
          <BaseText
            txtkey="landingPage3.shopWhat"
            style={typography.headings[language].h5}
            color={theme.colors.black[0]}
          />
          <BaseText
            txtkey="landingPage3.useNetgiro"
            style={typography.paragraph[language].p3}
            color={theme.colors.black[0]}
            className={classes.useNetgiro}
          />
        </Flex>
      </Flex>
      <Flex id="cardThree" className={classes.cardThree} bg={`${props.lineGrad2}`}>
        <Flex className={classes.cardThreeLeftTextSection}>
          <BaseText
            txtkey="landingPage3.splitIt"
            style={typography.headings[language].h5}
            color={theme.colors.black[0]}
            className={classes.splitIt}
          />
          <BaseText
            txtkey="landingPage3.splitPayments"
            style={typography.paragraph[language].p3}
            color={theme.colors.white[0]}
            className={classes.splitPayments}
          />
        </Flex>
        <Flex className={classes.cardThreeImageSection}>
          <motion.img
            src={Images.distributeSectionImage}
            style={{ rotate }}
            className={classes.distributeSectionImage}
            alt={'rotate-circle'}
          />
          <motion.img
            src={Images.distributeSectionBackgroundImage}
            className={classes.cardThreeBackgroundImageSection}
            alt={'circle-background-image'}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CardSection;
