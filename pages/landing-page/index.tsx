// "use-client";
import React, { useEffect, useState, useRef, useContext } from 'react';
import { Flex, useMantineTheme, Text, Image, FlexProps, Button } from '@mantine/core';
import classes from './landingPage.module.css';
import {
  IconWorld,
  IconChevronDown,
  IconArrowRight,
  IconPlus,
  IconMinus,
} from '@tabler/icons-react';
import { Images } from '@/public';
import { typography } from '@/themes/template/typography';
import { BaseText } from '@/components/elements/BaseText/BaseText';
import { BaseButton } from '@/components/elements/BaseButton/BaseButton';
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useViewportScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Tilt from 'react-parallax-tilt';
import Marquee from 'react-fast-marquee';
import { FaFacebookF, FaTwitter, FaApple } from 'react-icons/fa';
import { IoLogoAndroid } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';
import QuestionSection from '@/components/modules/QuestionSection/QuestionSection';
import CardSection from '@/components/modules/CardSection/CardSection';
import I18nContext from '../../context/i18nContext';

const PageTemplate = () => {
  const theme = useMantineTheme();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrollValue, setScrollValue] = useState(50);
  const [scrollValue2, setScrollValue2] = useState(50);
  const [scrollValue5, setScrollValue5] = useState(50);
  const [scrollValue6, setScrollValue6] = useState(55);
  const { scrollYProgress } = useViewportScroll();
  const [shopSection, setShopSection] = useState(false);
  const [netgiroLoan, setNetgiroLoan] = useState(false);
  const [questionSection, setQuestionSection] = useState(false);
  const matches = useMediaQuery('(max-width: 724px)');
  const maxWidthScreen = useMediaQuery('(min-width: 1600px)');
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const x = useTransform(cursorX, (value) => value);
  const y = useTransform(cursorY, (value) => value);
  const rotateX = useTransform(y, [-200, 200], [60, -60]);
  const rotateY = useTransform(x, [-200, 200], [-60, 60]);
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error('LanguageSelector must be used within an I18nProvider');
  }

  const { language, changeLanguage } = context;


  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (id: number) => {
    setOpenItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const questionAnswer = [
    {
      id: 1,
      question: {
        en: 'Lorem ipsum dolor sit amet, consectetur.',
        ar: 'لوريم إيبسوم دولور سيت أميت، كونستيتيو.',
      },
      answer: {
        en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula lorem eu mi tristique, non tincidunt urna bibendum. Sed suscipit, magna id cursus venenatis, odio nisl laoreet purus, et fermentum neque urna in metus.',
        ar: 'لوريم إيبسوم دولور سيت أميت، كونستيتيو أدبيسكينغ إيليت. دونيك فيهيكولا لوريم إيو مي تريستيك، نون تينسيدونت أورنا بيبندوم. سيد سوسيبست، ماجنا إيد كورسوس فينيناتيس، أوديو نيسل لاوريت بورس، إت فيرمنتوم نيكو أورنا إن ميتوس.',
      },
    },
    {
      id: 2,
      question: {
        en: 'Lorem ipsum dolor sit amet, consectetur adipiscing?',
        ar: 'لوريم إيبسوم دولور سيت أميت، كونستيتيو أدبيسكينغ؟',
      },
      answer: {
        en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit, odio et aliquam fermentum, neque mi ultricies purus, at faucibus sapien urna id velit. Nulla facilisi.',
        ar: 'لوريم إيبسوم دولور سيت أميت، كونستيتيو أدبيسكينغ إيليت. إن سوسيبست، أوديو إت أليكوام فيرمنتوم، نيكو مي ألتريسيس بورس، أت فاوسيبوس سابيين أورنا إيد فيليت. نولا فاسيليسي.',
      },
    },
    {
      id: 3,
      question: {
        en: 'Lorem ipsum dolor sit amet, consectetur?',
        ar: 'لوريم إيبسوم دولور سيت أميت، كونستيتيو؟',
      },
      answer: {
        en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula lorem eu sapien, et tristique nunc. Donec euismod, urna non facilisis vestibulum, neque tortor facilisis metus, vitae tempus sapien urna vel leo.',
        ar: 'لوريم إيبسوم دولور سيت أميت، كونستيتيو أدبيسكينغ إيليت. فيستيبيولوم فيهيكولا لوريم إيو سابيين، إت تريستيك نونك. دونيك إويسمود، أورنا نون فاسيليسيز فيستيبيولوم، نيكو تورتور فاسيليسيز ميتوس، فيتاي تيمبوس سابيين أورنا فيل ليو.',
      },
    },
    {
      id: 4,
      question: {
        en: 'Lorem ipsum dolor sit amet, consectetur adipiscing?',
        ar: 'لوريم إيبسوم دولور سيت أميت، كونستيتيو أدبيسكينغ؟',
      },
      answer: {
        en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a venenatis lorem. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        ar: 'لوريم إيبسوم دولور سيت أميت، كونستيتيو أدبيسكينغ إيليت. أوت أ فينيناتيس لوريم. أليكوام إيرات وولبوتات. بيليتينتيسك هابيتانت موربي تريستيك سينيكتوس إت نيتوس إت ماليسوادا فاميس أك توربيس إيجيستاس.',
      },
    },
    {
      id: 5,
      question: {
        en: 'Lorem ipsum dolor sit amet, consectetur adipiscing?',
        ar: 'لوريم إيبسوم دولور سيت أميت، كونستيتيو أدبيسكينغ؟',
      },
      answer: {
        en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, velit sit amet ultricies tincidunt, turpis felis scelerisque velit, et interdum metus sapien eu lorem.',
        ar: 'لوريم إيبسوم دولور سيت أميت، كونستيتيو أدبيسكينغ إيليت. سيد ماليسوادا، فيليت سيت أميت ألتريسيس تينسيدونت، توربيس فيليس سكيليريسك فيليت، إت إينتردوم ميتوس سابيين إيو لوريم.',
      },
    },
  ];
  

  const [isMenu, setIsMenu] = useState(false);

  const calculateY = (index: any) => {
    return 70 + 15 * index;
  };

  const calculateDelay = (index: any) => {
    return 0.1 * (index + 1);
  };

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 45 });
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [hover, setHover] = useState(0);
  const [buttonHoverEffectMoreQuestions, setButtonHoverEffectMoreQuestions] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > 20 && latest < 2700) {
      const updateScroll = (
        value: number,
        setter: React.Dispatch<React.SetStateAction<number>>
      ) => {
        if (previous !== undefined && latest !== previous) {
          const delta = latest > previous ? -0.2 : 0.2;
          setter((prev) => Math.max(20, Math.min(70, prev + delta)));
        }
      };
      updateScroll(scrollValue, setScrollValue);
      updateScroll(scrollValue2, setScrollValue2);
    }

    if (latest > 2000) {
      setHidden(true);
      if (latest >= 2500 && latest < 3400) {
        if (previous !== undefined && latest > previous) {
          if ((scrollValue5 < 70 && scrollValue5 > 20) || (scrollValue5 < 70 && scrollValue5 > 20))
            setScrollValue5((prev) => prev - 0.2);
          else {
            setScrollValue5(50);
          }
        } else if (previous !== undefined && latest < previous) {
          if (scrollValue5 < 70 && scrollValue5 > 20) setScrollValue5((prev) => prev + 0.2);
          else {
            setScrollValue5(50);
          }
        }
      }
      if (latest >= 4242 && latest < 4680) {
        if (previous !== undefined && latest > previous) {
          if ((scrollValue6 < 70 && scrollValue6 > 20) || (scrollValue6 < 70 && scrollValue6 > 20))
            setScrollValue6((prev) => prev + 0.25);
          else {
            setScrollValue6(50);
          }
        } else if (previous !== undefined && latest < previous) {
          if (scrollValue6 < 70 && scrollValue6 > 20) setScrollValue6((prev) => prev - 0.25);
          else {
            setScrollValue6(50);
          }
        }
      }
    }

    if (previous !== undefined && latest > previous) {
      if (latest > 20 && latest < 600) {
        setHidden(true);
      }
    } else if (latest > 20 && latest < 600) {
      setHidden(false);
    }

    if (previous !== undefined && latest > previous) {
      if (latest > 250 && latest < 900) {
        setShopSection(true);
      }
    } else if (latest > 250 && latest < 900) {
      setShopSection(false);
    }

    if (previous !== undefined && latest > previous) {
      if (latest > 620 && latest < 1400) {
        setNetgiroLoan(true);
      }
    } else if (latest > 620 && latest < 1400) {
      setNetgiroLoan(false);
    }

    if (previous !== undefined && latest > previous) {
      if (latest > 3400 && latest < 3900) {
        setQuestionSection(true);
      }
    } else if (latest < 3700) {
      setQuestionSection(false);
    }

    console.log('verticallyScrolled', latest, previous);
  });

  useEffect(() => {}, [scrollValue, scrollValue2]);

  const lineGrad = `linear-gradient(104.4deg, ${theme.colors.blue[3]} ${scrollValue}%, ${theme.colors.blue[0]} 0%)`;
  const lineGrad2 = `linear-gradient(104.4deg,${theme.colors.green[1]} ${scrollValue}%, ${theme.colors.green[0]} 0%)`;
  const lineGrad3 = `linear-gradient(104.4deg,${theme.colors.blue[4]} ${scrollValue2}%, ${theme.colors.blue[1]} 0%)`;
  const lineGrad4 = `linear-gradient(104.4deg,${theme.colors.yellow[1]} ${scrollValue2}%, ${theme.colors.yellow[0]} 0%)`;
  const lineGrad5 = `linear-gradient(104.4deg,${theme.colors.blue[4]} ${scrollValue5}%, ${theme.colors.blue[1]} 0%)`;
  const lineGrad6 = `linear-gradient(104.4deg,${theme.colors.blue[4]} ${scrollValue6}%, ${theme.colors.blue[1]} 0%)`;
  const lineGrad7 = `linear-gradient(104.4deg,${theme.colors.blue[4]} 50%, ${theme.colors.blue[1]} 0%)`;

  const MenuBar = () => {
    return (
      <>
        <Flex className={classes.menuButtonSection}>
          <Image src={Images.headerMenubarIcon} alt={'menu-bar-icon'} className={classes.menuBarIcon} />
          <Flex
            className={classes.hamburgerButton}
            bg={theme.colors.white[0]}
            onClick={() => {
              setIsMenu((prev) => !prev);
            }}
          >
            <Flex className={classes.hamburgerLines}>
              <Flex h={'1px'} w={'25px'} bg={theme.colors.blue[1]}></Flex>
              <Flex h={'1px'} w={'25px'} bg={theme.colors.blue[1]}></Flex>
              <Flex h={'1px'} w={'25px'} bg={theme.colors.blue[1]}></Flex>
            </Flex>
          </Flex>
        </Flex>
      </>
    );
  };

  const NavLinks = () => {
    const [buttonHoverEffectNavIndividuals, setButtonHoverEffectNavIndividuals] = useState(false);
    const [buttonHoverEffectNavCompany, setButtonHoverEffectNavCompany] = useState(false);
    const [buttonHoverEffectNavWhereCanIShop, setButtonHoverEffectNavWhereCanIShop] =
      useState(false);
    const [buttonHoverEffectNavNetgiroLoan, setButtonHoverEffectNavNetgiroLoan] = useState(false);
    const [buttonHoverEffectNavPriceList, setButtonHoverEffectNavPriceList] = useState(false);
    const [buttonHoverEffectDownloadApp, setButtonHoverEffectDownloadApp] = useState(false);
    const [buttonHoverEffectNavNetgiroCalculator, setButtonHoverEffectNavNetgiroCalculator] =
      useState(false);

    return (
      <>
        <Flex className={classes.menuBarContentInnerSection}>
          <Flex className={classes.menuBarContentInnerHeadSection}>
            <Flex className={classes.menuBarLogoSection}>
              <Image
                src={Images.headerMenubarIcon}
                alt="header-menu-icon"
                fit="contain"
                className={classes.headerMenubarIcon}
              />
              <Image
                src={Images.netgiroTextLogo}
                className={classes.netgiroTextLogo}
                alt="netgiro-text-logo"
                fit="contain"
              />
            </Flex>
            <Flex
              onClick={() => {
                setIsMenu((prev) => !prev);
              }}
            >
              <RxCross1 size={30} color={theme.colors.white[0]} />
            </Flex>
          </Flex>
          <Flex className={classes.menuNavLinks}>
            <Button
              onMouseEnter={() => setButtonHoverEffectNavIndividuals(true)}
              onMouseLeave={() => setButtonHoverEffectNavIndividuals(false)}
              bg={'transparent'}
            >
              <BaseText
                txtkey="landingPage3.individuals"
                style={typography.label[language].l6}
                color={
                  buttonHoverEffectNavIndividuals ? theme.colors.blue[0] : theme.colors.white[0]
                }
                className={
                  buttonHoverEffectNavIndividuals
                    ? classes.menuNavlinkHoverBefore
                    : classes.menuNavlinkBefore
                }
              />
              <BaseText
                txtkey="landingPage3.individuals"
                style={typography.label[language].l6}
                color={
                  buttonHoverEffectNavIndividuals ? theme.colors.blue[0] : theme.colors.white[0]
                }
                className={
                  buttonHoverEffectNavIndividuals
                    ? classes.menuNavlinkHoverAfter
                    : classes.menuNavlinkAfter
                }
              />
            </Button>
            <Button
              onMouseEnter={() => setButtonHoverEffectNavCompany(true)}
              onMouseLeave={() => setButtonHoverEffectNavCompany(false)}
              bg={'transparent'}
            >
              <BaseText
                txtkey="landingPage3.company"
                style={typography.label[language].l6}
                color={buttonHoverEffectNavCompany ? theme.colors.green[0] : theme.colors.white[0]}
                className={
                  buttonHoverEffectNavCompany
                    ? classes.menuNavlinkHoverBefore
                    : classes.menuNavlinkBefore
                }
              />
              <BaseText
                txtkey="landingPage3.company"
                style={typography.label[language].l6}
                color={buttonHoverEffectNavCompany ? theme.colors.green[0] : theme.colors.white[0]}
                className={
                  buttonHoverEffectNavCompany
                    ? classes.menuNavlinkHoverAfter
                    : classes.menuNavlinkAfter
                }
              />
            </Button>
            <Button
              onMouseEnter={() => setButtonHoverEffectNavWhereCanIShop(true)}
              onMouseLeave={() => setButtonHoverEffectNavWhereCanIShop(false)}
              bg={'transparent'}
            >
              <BaseText
                txtkey="landingPage3.whereCanIShop"
                style={typography.label[language].l6}
                color={
                  buttonHoverEffectNavWhereCanIShop ? theme.colors.yellow[0] : theme.colors.white[0]
                }
                className={
                  buttonHoverEffectNavWhereCanIShop
                    ? classes.menuNavlinkHoverBefore
                    : classes.menuNavlinkBefore
                }
              />
              <BaseText
                txtkey="landingPage3.whereCanIShop"
                style={typography.label[language].l6}
                color={
                  buttonHoverEffectNavWhereCanIShop ? theme.colors.yellow[0] : theme.colors.white[0]
                }
                className={
                  buttonHoverEffectNavWhereCanIShop
                    ? classes.menuNavlinkHoverAfter
                    : classes.menuNavlinkAfter
                }
              />
            </Button>
            <Button
              onMouseEnter={() => setButtonHoverEffectNavNetgiroLoan(true)}
              onMouseLeave={() => setButtonHoverEffectNavNetgiroLoan(false)}
              bg={'transparent'}
            >
              <BaseText
                txtkey="landingPage3.netgiroLoan"
                style={typography.label[language].l7}
                color={
                  buttonHoverEffectNavNetgiroLoan ? theme.colors.green[0] : theme.colors.white[0]
                }
                className={
                  buttonHoverEffectNavNetgiroLoan
                    ? classes.menuNavlinkHoverBefore
                    : classes.menuNavlinkBefore
                }
              />
              <BaseText
                txtkey="landingPage3.netgiroLoan"
                style={typography.label[language].l7}
                color={
                  buttonHoverEffectNavNetgiroLoan ? theme.colors.green[0] : theme.colors.white[0]
                }
                className={
                  buttonHoverEffectNavNetgiroLoan
                    ? classes.menuNavlinkHoverAfter
                    : classes.menuNavlinkAfter
                }
              />
            </Button>
            <Button
              onMouseEnter={() => setButtonHoverEffectNavNetgiroCalculator(true)}
              onMouseLeave={() => setButtonHoverEffectNavNetgiroCalculator(false)}
              bg={'transparent'}
            >
              <BaseText
                txtkey="landingPage3.netgiroCalculator"
                style={typography.label[language].l7}
                color={
                  buttonHoverEffectNavNetgiroCalculator
                    ? theme.colors.yellow[0]
                    : theme.colors.white[0]
                }
                className={
                  buttonHoverEffectNavNetgiroCalculator
                    ? classes.menuNavlinkHoverBefore
                    : classes.menuNavlinkBefore
                }
              />
              <BaseText
                txtkey="landingPage3.netgiroCalculator"
                style={typography.label[language].l7}
                color={
                  buttonHoverEffectNavNetgiroCalculator
                    ? theme.colors.yellow[0]
                    : theme.colors.white[0]
                }
                className={
                  buttonHoverEffectNavNetgiroCalculator
                    ? classes.menuNavlinkHoverAfter
                    : classes.menuNavlinkAfter
                }
              />
            </Button>
            <Button
              onMouseEnter={() => setButtonHoverEffectNavPriceList(true)}
              onMouseLeave={() => setButtonHoverEffectNavPriceList(false)}
              bg={'transparent'}
            >
              <BaseText
                txtkey="landingPage3.priceList"
                style={typography.label[language].l7}
                color={buttonHoverEffectNavPriceList ? theme.colors.blue[0] : theme.colors.white[0]}
                className={
                  buttonHoverEffectNavPriceList
                    ? classes.menuNavlinkHoverBefore
                    : classes.menuNavlinkBefore
                }
              />
              <BaseText
                txtkey="landingPage3.priceList"
                style={typography.label[language].l7}
                color={buttonHoverEffectNavPriceList ? theme.colors.blue[0] : theme.colors.white[0]}
                className={
                  buttonHoverEffectNavPriceList
                    ? classes.menuNavlinkHoverAfter
                    : classes.menuNavlinkAfter
                }
              />
            </Button>
          </Flex>
          <Flex className={classes.downloadAppButtonContainer}>
            {matches ? (
              <>
                <BaseButton w={'100%'} h={'58px'} radius={'48px'} variant={'primary'}>
                  <BaseText
                    c={theme.colors.white[0]}
                    txtkey="landingPage3.newRegistration"
                    style={typography.buttonText[language].b4}
                  />
                </BaseButton>
                <BaseButton w={'100%'} h={'58px'} radius={'48px'} variant={'bgGreen'}>
                  <BaseText
                    c={theme.colors.white[0]}
                    txtkey="landingPage3.checkIn"
                    style={typography.buttonText[language].b4}
                  />
                </BaseButton>
              </>
            ) : null}
            <BaseButton
              w={'100%'}
              h={'58px'}
              radius={'48px'}
              variant={'bgYellow'}
              onMouseEnter={() => setButtonHoverEffectDownloadApp(true)}
              onMouseLeave={() => setButtonHoverEffectDownloadApp(false)}
            >
              <Button bg={'transparent'} className={classes.downloadAppTextWidth}>
                <BaseText
                  c={theme.colors.blue[1]}
                  txtkey="landingPage3.downloadTheApp"
                  style={typography.buttonText[language].b6}
                  className={
                    buttonHoverEffectDownloadApp
                      ? classes.newRegistrationHoverBefore
                      : classes.newRegistrationBefore
                  }
                />
                <BaseText
                  c={theme.colors.blue[1]}
                  txtkey="landingPage3.downloadTheApp"
                  style={typography.buttonText[language].b6}
                  className={
                    buttonHoverEffectDownloadApp
                      ? classes.newRegistrationHoverAfter
                      : classes.newRegistrationAfter
                  }
                />
              </Button>
            </BaseButton>
          </Flex>
        </Flex>
      </>
    );
  };

  const RegisterButton = () => {
    const [buttonHoverEffectRegisterHere, setButtonHoverEffectRegisterHere] = useState(false);
    return (
      <>
        <BaseButton
          radius={'48px'}
          variant={'primary'}
          mt={'30px'}
          className={classes.registerHereButton}
          onMouseEnter={() => setButtonHoverEffectRegisterHere(true)}
          onMouseLeave={() => setButtonHoverEffectRegisterHere(false)}
        >
          <Button bg={'transparent'} className={classes.registerHereButtonWidth}>
            <BaseText
              txtkey="landingPage3.registerHere"
              c={theme.colors.white[0]}
              style={typography.headings[language].b4}
              className={
                buttonHoverEffectRegisterHere
                  ? classes.newRegistrationHoverBefore
                  : classes.newRegistrationBefore
              }
            />
            <BaseText
              txtkey="landingPage3.registerHere"
              c={theme.colors.white[0]}
              style={typography.headings[language].b4}
              className={
                buttonHoverEffectRegisterHere
                  ? classes.newRegistrationHoverAfter
                  : classes.newRegistrationAfter
              }
            />
          </Button>
        </BaseButton>
      </>
    );
  };

  const RegistrationAndLanguage = () => {
    const [buttonHoverEffect, setButtonHoverEffect] = useState(false);
    const [buttonHoverEffectCheckIn, setButtonHoverEffectCheckIn] = useState(false);
    const [isShowLanguage, setIsShowLanguage] = useState(false);

    return (
      <>
        <Flex mt={'28px'} className={classes.registrationAndLanguageSection} gap={'10px'}>
          <BaseButton
            radius={'1.875vw'}
            variant={'primary'}
            className={classes.btnText}
            onMouseEnter={() => setButtonHoverEffect(true)}
            onMouseLeave={() => setButtonHoverEffect(false)}
          >
            <Button bg={'transparent'} className={classes.newRegistrationWidth}>
              <BaseText
                c={theme.colors.white[0]}
                txtkey="landingPage3.newRegistration"
                style={typography.buttonText[language].b7}
                className={
                  buttonHoverEffect
                    ? classes.newRegistrationHoverBefore
                    : classes.newRegistrationBefore
                }
              />
              <BaseText
                c={theme.colors.white[0]}
                txtkey="landingPage3.newRegistration"
                style={typography.buttonText[language].b7}
                className={
                  buttonHoverEffect
                    ? classes.newRegistrationHoverAfter
                    : classes.newRegistrationAfter
                }
              />
            </Button>
          </BaseButton>
          <BaseButton
            radius={'1.875vw'}
            variant={'bgGreen'}
            className={classes.checkInBtn}
            onMouseEnter={() => setButtonHoverEffectCheckIn(true)}
            onMouseLeave={() => setButtonHoverEffectCheckIn(false)}
          >
            <Button bg={'transparent'} className={classes.checkInButtonWidth}>
              <BaseText
                txtkey="landingPage3.checkIn"
                c={theme.colors.white[0]}
                style={typography.buttonText[language].b7}
                className={
                  buttonHoverEffectCheckIn
                    ? classes.newRegistrationHoverBefore
                    : classes.newRegistrationBefore
                }
              />
              <BaseText
                txtkey="landingPage3.checkIn"
                c={theme.colors.white[0]}
                style={typography.buttonText[language].b7}
                className={
                  buttonHoverEffectCheckIn
                    ? classes.newRegistrationHoverAfter
                    : classes.newRegistrationAfter
                }
              />
            </Button>
          </BaseButton>
          <BaseButton
            radius={'48px'}
            variant={isShowLanguage ? 'bgGraySecond' : 'bgWhite'}
            variantColors={'bgBlue'}
            outline={true}
            className={isShowLanguage ? classes.languageSectionShadow : classes.languageSection}
            onClick={() => setIsShowLanguage((prev) => !prev)}
          >
            <Flex gap={'5px'}>
              <IconWorld color="black" stroke={1} size={23} />
              <BaseText
                className={classes.languagePreferenceSection}
                c={theme.colors.black[0]}
                txtkey="landingPage3.is"
                style={typography.buttonText[language].b7}
              />
              <IconChevronDown
                color="black"
                stroke={1.5}
                size={18}
                className={classes.downArrowIcon}
              />
            </Flex>
          </BaseButton>
          {isShowLanguage ? (
            <Flex bg={theme.colors.gray[2]} className={classes.languageDropdown}>
              <Flex gap={'5px'} >
                <BaseText
                onClick = {() => changeLanguage()}
                  className={classes.languagePreferenceSection}
                  c={theme.colors.black[0]}
                  txtkey="landingPage3.english"
                  style={typography.buttonText[language].b7}
                />
                {" "}
                /
                {" "}
                <BaseText
                onClick = {() => changeLanguage()}
                  className={classes.languagePreferenceSection}
                  c={theme.colors.black[0]}
                  txtkey="landingPage3.arabic"
                  style={typography.buttonText[language].b7}
                />
              </Flex>
            </Flex>
          ) : null}
        </Flex>
      </>
    );
  };

  const ShopContainer = () => {
    return (
      <Flex className={classes.shopContainer} bg={`${lineGrad}`}>
        <Flex className={classes.shopInnerContainer}>
          <Flex className={classes.shopLeftContainer}>
            <Flex className={classes.textSection}>
              <BaseText
                txtkey="landingPage3.whereCanIShop"
                style={typography.headings[language].h4}
                color={theme.colors.yellow[0]}
                />
              <BaseText
                txtkey="landingPage3.greatPartner"
                style={typography.paragraph[language].p1}
                color={theme.colors.white[0]}
                className={classes.greatPartnerSpacing}
              />
            </Flex>
          </Flex>
          <Flex className={classes.imageSection}>
            <Flex className={classes.bottomSectionShopContainer}>
              <BaseText
                txtkey="landingPage3.allPartners"
                style={typography.label[language].l1}
                color={theme.colors.black[0]}
              />
              <IconArrowRight color="black" stroke={1.5} size={20} />
            </Flex>
            <Image src={Images.shopIcon} alt="shop-icon" fit="contain" className={classes.shopIcon} />
          </Flex>
        </Flex>
      </Flex>
    );
  };

  const GiftsContainer = () => {
    return (
      <Flex className={classes.giftsContainer} bg={`${lineGrad2}`}>
        <Flex className={classes.giftsLeftContainer}>
          <Flex className={classes.textSection}>
            <Image src={Images.playImage} alt="play-image" className={classes.giftsImageSection} />
            <BaseText
              txtkey="landingPage3.giftCard"
              style={typography.headings[language].h4}
              color={theme.colors.black[0]}
              className={classes.giftCard}
            />
            <BaseText
              txtkey="landingPage3.giftCardForYourself"
              style={typography.paragraph[language].p2}
              color={theme.colors.black[0]}
              className={classes.giftCardForYourself}
            />
          </Flex>
          <Flex className={classes.bottomSectionLookCloser}>
            <BaseText
              txtkey="landingPage3.lookCloser"
              style={typography.label[language].l1}
              color={theme.colors.white[0]}
            />
            <IconArrowRight color="white" stroke={1.5} size={20} />
          </Flex>
        </Flex>

        <Flex>
          <Flex className={classes.giftsRightImageSection}>
            <Image
              src={Images.giftCardPlaneImage}
              alt="gift-card-plane"
              fit="contain"
              className={classes.giftCardPlaneImage}
            />
          </Flex>
        </Flex>
      </Flex>
    );
  };

  const LoanSection = () => {
    return (
      <Flex className={classes.loanContainer} bg={`${lineGrad3}`}>
        <Flex className={classes.loanLeftContainer}>
          <Flex className={classes.textContainer}>
            <BaseText
              txtkey="landingPage3.netgiroLoan"
              style={typography.headings[language].h4}
              color={theme.colors.blue[0]}
            />
            <BaseText
              txtkey="landingPage3.applyForLoan"
              style={typography.paragraph[language].p2}
              color={theme.colors.white[0]}
              className={classes.applyForLoan}
            />
          </Flex>
        </Flex>
        <Flex className={classes.loanBottomImageSection}>
          <Flex className={classes.loanBottomSection}>
            <BaseText
              txtkey="landingPage3.lookCloser"
              style={typography.label[language].l1}
              color={theme.colors.white[0]}
            />
            <IconArrowRight color="white" stroke={1.5} size={20} />
          </Flex>
          <Image
            src={Images.loanSectionImage}
            alt="loan-image"
            fit="contain"
            className={classes.loanSectionImage}
          />
        </Flex>
      </Flex>
    );
  };

  const CalculatorSection = () => {
    return (
      <Flex bg={`${lineGrad4}`} className={classes.calculatorOuterContainer}>
        <Flex className={classes.calculatorInnerContainer}>
          <Flex className={classes.loanLeftSection}>
            <Flex className={classes.loanLeftSectionDirection}>
              <BaseText
                txtkey="landingPage3.netgiroCalculator"
                style={typography.headings[language].h4}
                color={theme.colors.black[0]}
                className={classes.netgiroCalculatorText}
              />
              <BaseText
                txtkey="landingPage3.calculateCost"
                style={typography.paragraph[language].p1}
                color={theme.colors.black[0]}
                className={classes.netgiroCalculatorCostText}
              />
            </Flex>
          </Flex>
          <Flex className={classes.calculatorBottomRightImageSection}>
            <Flex className={classes.calculatorBottomLeftTextSection}>
              <BaseText
                txtkey="landingPage3.lookCloser"
                style={typography.label[language].l1}
                color={theme.colors.black[0]}
              />
              <IconArrowRight color="black" stroke={1.5} size={20} />
            </Flex>
            <Image
              src={Images.calculator}
              alt="calculator"
              fit="contain"
              className={classes.calculatorImage}
            />
          </Flex>
        </Flex>
      </Flex>
    );
  };

  const DownloadApp = () => {
    const [buttonHoverEffectAppStore, setButtonHoverEffectAppStore] = useState(false);
    const [buttonHoverEffectGooglePlay, setButtonHoverEffectGooglePlay] = useState(false);

    return (
      <>
        <Flex w={'100%'} bg={theme.colors.gray[1]}>
          <Flex bg={`${lineGrad5}`} className={classes.downloadAppContainer}>
            <Flex className={classes.downloadAppTextLeftSection}>
              <BaseText
                txtkey="landingPage3.downloadApp"
                style={typography.headings[language].h4}
                color={theme.colors.blue[0]}
                className={classes.downloadAppTextLeftSectionWidth}
              />
              <BaseText
                txtkey="landingPage3.netgyroIsSimple"
                style={typography.paragraph[language].p4}
                color={theme.colors.white[0]}
                className={classes.downloadAppTextLeftSectionWidth}
              />
              <Flex gap={'10px'} className={classes.downloadAppTextLeftSectionWidth} mt={'27px'}>
                <BaseButton
                  radius={'48px'}
                  variant={'bgWhite'}
                  variantColors={'bgBlue'}
                  outline={true}
                  className={classes.downloadApp}
                  onMouseEnter={() => setButtonHoverEffectAppStore(true)}
                  onMouseLeave={() => setButtonHoverEffectAppStore(false)}
                >
                  <Flex gap={'5px'} className={classes.appStoreOuterContainer}>
                    <Button
                      bg={'transparent'}
                      variant="transparent"
                      className={classes.appStoreTextWidth}
                    >
                      <Flex className={classes.appleIconContainer}>
                        <FaApple color="#304756" size={24} />
                      </Flex>
                      <Flex>
                        <BaseText
                          style={typography.buttonText[language].b3}
                          c={theme.colors.black[0]}
                          txtkey="landingPage3.appStore"
                          className={
                            buttonHoverEffectAppStore
                              ? classes.appStoreHoverBefore
                              : classes.appStoreBefore
                          }
                        />
                        <BaseText
                          style={typography.buttonText[language].b3}
                          c={theme.colors.black[0]}
                          txtkey="landingPage3.appStore"
                          className={
                            buttonHoverEffectAppStore
                              ? classes.appStoreHoverAfter
                              : classes.appStoreAfter
                          }
                        />
                      </Flex>
                    </Button>
                  </Flex>
                </BaseButton>
                <BaseButton
                  radius={'48px'}
                  variant={'bgWhite'}
                  variantColors={'bgBlue'}
                  outline={true}
                  className={classes.downloadApp}
                  onMouseEnter={() => setButtonHoverEffectGooglePlay(true)}
                  onMouseLeave={() => setButtonHoverEffectGooglePlay(false)}
                >
                  <Flex gap={'5px'} className={classes.googlePlayContainer}>
                    <Button
                      bg={'transparent'}
                      variant="transparent"
                      className={classes.appStoreTextWidth}
                    >
                      <Flex className={classes.googlePlayIconContainer}>
                        <IoLogoAndroid color="#304756" size={24} />
                      </Flex>
                      <Flex>
                        <BaseText
                          style={typography.buttonText[language].b3}
                          c={theme.colors.black[0]}
                          txtkey="landingPage3.googlePlay"
                          className={
                            buttonHoverEffectGooglePlay
                              ? classes.appStoreHoverBefore
                              : classes.appStoreBefore
                          }
                        />
                        <BaseText
                          style={typography.buttonText[language].b3}
                          c={theme.colors.black[0]}
                          txtkey="landingPage3.googlePlay"
                          className={
                            buttonHoverEffectGooglePlay
                              ? classes.appStoreHoverAfter
                              : classes.appStoreAfter
                          }
                        />
                      </Flex>
                    </Button>
                  </Flex>
                </BaseButton>
              </Flex>
            </Flex>
            <motion.div
              style={{
                x,
                y,
                rotateX,
                rotateY,
                z: 100,
                zIndex: 1,
              }}
              className={classes.downloadAppRightSection}
              drag
              dragElastic={0.05}
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              whileTap={{ cursor: 'grabbing' }}
            >
              <Tilt
                tiltEnable={true}
                tiltMaxAngleX={2.5}
                tiltMaxAngleY={2.5}
                transitionSpeed={1000}
              >
                <Flex className={classes.mobileFirstSection}>
                  <Flex className={classes.statusBar} bg={theme.colors.black[1]}></Flex>
                  <Flex className={classes.statusBarTwo} bg={theme.colors.black[1]}></Flex>
                  <Flex
                    className={classes.leftMobileContainer}
                  >
                    <Image
                      src={Images.phoneLeft}
                      alt="phone-left"
                      fit="cover"
                      className={classes.leftPhoneCss}
                    />
                  </Flex>
                  <Flex className={classes.rightMobileOuterContainer}>
                    <Image src={Images.phoneRight} alt="phone-right" className={classes.rightPhone} />
                  </Flex>
                </Flex>
              </Tilt>
            </motion.div>
          </Flex>
        </Flex>
      </>
    );
  };

  const Footer = () => {
    return (
      <>
        <Flex bg={`${lineGrad6}`} className={classes.footer}>
          <Flex className={classes.footerFirstSection}>
            <Flex className={classes.logoSection}>
              <Image
                src={Images.websiteLogo}
                alt="website-logo"
                fit="contain"
                className={classes.websiteLogo}
              />
            </Flex>
            <Flex className={classes.netgyroContainer}>
              <BaseText
                txtkey="landingPage3.netGyro"
                style={typography.label[language].l2}
                color={theme.colors.white[0]}
              />
              <BaseText
                txtkey="landingPage3.katrinartun"
                style={typography.label[language].l3}
                color={theme.colors.white[0]}
                className={classes.footerTextTopFiveSpacing}
              />
              <BaseText
                txtkey="landingPage3.reykjavík"
                style={typography.label[language].l3}
                color={theme.colors.white[0]}
                className={classes.footerTextTopThreeSpacing}
              />
            </Flex>
            <Flex className={classes.openingHourContainer}>
              <BaseText
                txtkey="landingPage3.openingHours"
                style={typography.label[language].l2}
                color={theme.colors.white[0]}
              />
              <BaseText
                txtkey="landingPage3.workingDays"
                style={typography.label[language].l3}
                color={theme.colors.white[0]}
                className={classes.footerTextTopFiveSpacing}
              />
              <BaseText
                txtkey="landingPage3.weekend"
                style={typography.label[language].l3}
                color={theme.colors.white[0]}
                className={classes.footerTextTopThreeSpacing}
              />
            </Flex>
            <Flex className={classes.beInTouchContainer}>
              <BaseText
                txtkey="landingPage3.beInTouch"
                style={typography.label[language].l2}
                color={theme.colors.white[0]}
              />
              <Text
                c={theme.colors.white[0]}
                style={typography.label[language].l3}
              >
                4 300 330
              </Text>
              <BaseText
                txtkey="landingPage3.netgiroEmail"
                style={typography.label[language].l3}
                color={theme.colors.white[0]}
                className={classes.footerTextTopThreeSpacing}
              />
            </Flex>
          </Flex>
          <hr className={classes.sectionSeparator} />

          <Flex className={classes.secondSection}>
            <Flex className={classes.individualContainer}>
              <BaseText
                txtkey="landingPage3.individuals"
                style={typography.label[language].l8}
                color={theme.colors.white[0]}
              />
              <BaseText
                txtkey="landingPage3.company"
                style={typography.label[language].l8}
                color={theme.colors.white[0]}
                className={classes.footerTextTopSpace}
              />
              <BaseText
                txtkey="landingPage3.netgiroLoan"
                style={typography.label[language].l8}
                color={theme.colors.white[0]}
                className={classes.footerTextTopSpace}
              />
              <BaseText
                txtkey="landingPage3.netgiro​Calculator"
                style={typography.label[language].l8}
                color={theme.colors.white[0]}
                className={classes.footerTextTopSpace}
              />
              <BaseText
                txtkey="landingPage3.contact"
                style={typography.label[language].l8}
                color={theme.colors.white[0]}
                className={classes.footerTextTopSpace}
              />
            </Flex>
            <Flex className={classes.whereCanIShopContainer}>
              <BaseText
                txtkey="landingPage3.whereCanIShop"
                style={typography.label[language].l8}
                color={theme.colors.white[0]}
              />
              <BaseText
                txtkey="landingPage3.privacyPolicy"
                style={typography.label[language].l8}
                color={theme.colors.white[0]}
                className={classes.footerTextTopSpace}
              />
              <BaseText
                txtkey="landingPage3.securityPolicy"
                style={typography.label[language].l8}
                color={theme.colors.white[0]}
                className={classes.footerTextTopSpace}
              />
              <BaseText
                txtkey="landingPage3.terms"
                style={typography.label[language].l8}
                color={theme.colors.white[0]}
                className={classes.footerTextTopSpace}
              />
              <BaseText
                txtkey="landingPage3.frequentlyAskedQuestions"
                style={typography.label[language].l8}
                color={theme.colors.white[0]}
                className={classes.footerTextTopSpace}
              />
            </Flex>
            <Flex className={classes.priceListContainer}>
              <BaseText
                txtkey="landingPage3.priceList"
                style={typography.label[language].l8}
                color={theme.colors.white[0]}
              />
              <BaseText
                txtkey="landingPage3.treatmentOfComplaints"
                style={typography.label[language].l8}
                color={theme.colors.white[0]}
                className={classes.footerTextTopSpace}
              />
              <BaseText
                txtkey="landingPage3.giftCardPlay"
                style={typography.label[language].l8}
                color={theme.colors.white[0]}
                className={classes.footerTextTopSpace}
              />
              <BaseText
                txtkey="landingPage3.developersApi"
                style={typography.label[language].l8}
                color={theme.colors.white[0]}
                className={classes.footerTextTopSpace}
              />
            </Flex>
            <Flex className={classes.netgiroOwnedContainer}>
              <BaseText
                txtkey="landingPage3.netgiroOwned"
                style={typography.label[language].l8}
                color={theme.colors.white[0]}
                className={classes.footerTextTopSpace}
              />
              <Image src={Images.footerLogo} alt="footer-logo" className={classes.footerLogo} />
            </Flex>
          </Flex>
          <hr className={classes.sectionSeparator} />
          <Flex className={classes.footerCompanyDescription}>
            <Flex className={classes.footerDescriptionLeftSection}>
              <BaseText
                txtkey="landingPage3.paymentMeditation"
                style={typography.label[language].l5}
                color={theme.colors.white[0]}
                className={classes.verticalLine}
              />
              <BaseText
                txtkey="landingPage3.kt"
                style={typography.label[language].l5}
                color={theme.colors.white[0]}
                className={classes.verticalLine}
              />
              <BaseText
                txtkey="landingPage3.address"
                style={typography.label[language].l5}
                color={theme.colors.white[0]}
                className={classes.verticalLine}
              />
              <BaseText
                txtkey="landingPage3.phone"
                style={typography.label[language].l5}
                color={theme.colors.white[0]}
                className={classes.verticalLine}
              />
              <BaseText
                txtkey="landingPage3.netgiroEmail"
                style={typography.label[language].l5}
                color={theme.colors.white[0]}
              />
            </Flex>
            <Flex className={classes.socialMediaIconContainer} gap={'12px'}>
              <FaFacebookF className={classes.icon} color={'white'} size="18px" />
              <AiFillInstagram className={classes.icon} color={'white'} size="22px" />
              <FaTwitter className={classes.icon} color={'white'} size="22px" />
            </Flex>
          </Flex>
        </Flex>

        <Flex className={classes.fixedFooter}></Flex>
      </>
    );
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#main',
        // markers: true,
        start: '38% 50%',
        end: '100% 50%',
        scrub: 2,
        pin: true,
      },
    });
    tl.to(
      '#cardOne',
      {
        top: '35%',
        duration: 4,
        ease: 'slow (0.4, 2)',
      },
      'a'
    )
      .to(
        '#cardTwo',
        {
          top: '130%',
          duration: 4,
          ease: 'slow (0.4, 2)',
        },
        'a'
      )
      .to(
        '#cardTwo',
        {
          top: '42%',
          duration: 4,
          ease: 'slow (0.4, 2)',
        },
        'b'
      )
      .to(
        '#cardOne',
        {
          width: '78%',
          // height: '65vh',
          duration: 4,
          ease: 'slow (0.4, 2)',
        },
        'b'
      )
      .to(
        '#cardThree',
        {
          top: '130%',
          duration: 4,
          ease: 'slow (0.4, 2)',
        },
        'b'
      )
      .to(
        '#cardThree',
        {
          top: '50%',
          duration: 4,
          ease: 'slow (0.4, 5)',
        },
        'c'
      )
      .to(
        '#cardTwo',
        {
          width: '83%',
          // height: '70vh',
          duration: 4,
          ease: 'slow (0.4, 2)',
        },
        'c'
      );
  }, []);

  return (
    <Flex style={{ flexDirection: 'column' }} id="my-scrollbar" ref={scrollRef}>
      <Flex
        className={classes.textVideoaFirstOuterContainer}
        bg={matches ? '' : `linear-gradient(${language=="ar"?"-104.4deg":"104.4deg"}, ${theme.colors.gray[1]} 35%, white 0%)`}
      >
        <Flex className={classes.innerContainer}>
          <Flex justify={'space-between'} className={classes.headerSection}>
            <Flex mt={'28px'} className={classes.headerMenuBarButton}>
              <motion.div
                style={{
                  background: isMenu ? `${lineGrad7}` : theme.colors.blue[1],
                }}
                className={classes.menuBarSection}
                animate={{
                  height: isMenu ? (maxWidthScreen ? '660px' : '587px') : '70px',
                  width: isMenu
                    ? matches
                      ? '350px'
                      : maxWidthScreen
                      ? '500px'
                      : '444px'
                    : '150px',
                }}
                transition={{
                  type: 'tween',
                  duration: 0.5,
                }}
              >
                <Flex
                  style={{
                    alignItems: isMenu ? '' : 'center',
                  }}
                  className={classes.menuBarItems}
                >
                  {!isMenu ? (
                    <MenuBar />
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.5, delay: 0.2 }}
                      className={classes.menuBarContentOuterSection}
                    >
                      <NavLinks />
                    </motion.div>
                  )}
                </Flex>
              </motion.div>
            </Flex>
            <RegistrationAndLanguage />
          </Flex>
          <Flex className={classes.videoTextSection} style={{border:'12px solid red !important'}}>
            <Flex className={classes.securePaymentSection}>
              <motion.div
                variants={{
                  visible: { y: 0 },
                  hidden: { y: '-70px' },
                }}
                animate={hidden ? 'hidden' : 'visible'}
                transition={{ duration: 0.7, ease: 'easeInOut', stiffness: 150, type: 'tween' }}
              >
                <BaseText
                  txtkey="landingPage3.safeAndConvenient"
                  style={
                    matches
                      ? typography.headings[language].h7
                      : typography.headings[language].h1
                  }
                  c={theme.colors.blue[1]}
                  w={'300px'}
                  mt={'120px'}
                />
              </motion.div>
              <motion.div
                variants={{
                  visible: { y: 0 },
                  hidden: { y: '-70px' },
                }}
                animate={hidden ? 'hidden' : 'visible'}
                transition={{ duration: 1, ease: 'easeInOut', type: 'tween' }}
              >
                <BaseText
                  txtkey="landingPage3.securePayment"
                  style={typography.headings[language].h2}
                  className={classes.securePaymentText}
                />
              </motion.div>
              <motion.div
                variants={{
                  visible: { y: 0 },
                  hidden: { y: '-70px' },
                }}
                animate={hidden ? 'hidden' : 'visible'}
                transition={{ duration: 1, ease: 'easeInOut', type: 'tween' }}
              >
                <RegisterButton />
              </motion.div>
            </Flex>
            <Flex className={classes.videoOuterSection}>
              <Flex className={classes.videoOuterContainer}>
                <video loop muted playsInline autoPlay className={classes.video}>
                  <source src="/demo/zesty-zap/video/demoVideo.mp4" type="video/mp4" />
                  <track kind="captions" label="English" srcLang="en" />
                  {/* <img alt="Images.heroSection" src ={} height="100%" width="100%" /> */}
                </video>
              </Flex>
            </Flex>
          </Flex>
          <Flex></Flex>
        </Flex>
      </Flex>

      <Flex className={classes.outerWrapper} bg={theme.colors.gray[1]}>
        <Flex className={classes.giftAndShopInnerContainer}>
          <motion.div
            className={classes.outerLayerShopContainer}
            variants={{
              visibleShop: { y: '-75px' },
              hiddenShop: { y: '0px' },
            }}
            animate={shopSection ? 'visibleShop' : 'hiddenShop'}
            transition={{ duration: 0.5, ease: 'easeInOut', type: 'tween' }}
          >
            <ShopContainer />
          </motion.div>
          <motion.div
            className={classes.outerLayerGiftsContainer}
            variants={{
              visibleShop: { y: '-75px' },
              hiddenShop: { y: '0px' },
            }}
            animate={shopSection ? 'visibleShop' : 'hiddenShop'}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2, type: 'tween' }}
          >
            <GiftsContainer />
          </motion.div>
        </Flex>

        <Flex className={classes.loanCalculatorOuterContainer} bg={theme.colors.gray[1]}>
          <motion.div
            className={classes.outerLayerLoanSection}
            variants={{
              visibleShop: { y: '-75px' },
              hiddenShop: { y: '0px' },
            }}
            animate={netgiroLoan ? 'visibleShop' : 'hiddenShop'}
            transition={{ duration: 0.7, ease: 'easeInOut', type: 'tween' }}
          >
            <LoanSection />
          </motion.div>
          <motion.div
            className={classes.outerLayerCalculatorSection}
            variants={{
              visibleShop: { y: '-75px' },
              hiddenShop: { y: '0px' },
            }}
            animate={netgiroLoan ? 'visibleShop' : 'hiddenShop'}
            transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.2, type: 'tween' }}
          >
            <CalculatorSection />
          </motion.div>
        </Flex>

        <CardSection
          lineGrad={lineGrad}
          lineGrad4={lineGrad4}
          lineGrad2={lineGrad2}
          smoothProgress={smoothProgress}
        />

        <DownloadApp />

        <QuestionSection
          questionSection={questionSection}
          setButtonHoverEffectMoreQuestions={setButtonHoverEffectMoreQuestions}
          buttonHoverEffectMoreQuestions={buttonHoverEffectMoreQuestions}
          questionAnswer={questionAnswer}
          maxWidthScreen={maxWidthScreen}
          matches={matches}
          toggleItem={toggleItem}
          calculateY={calculateY}
          setHover={setHover}
          openItems={openItems}
          hover={hover}
          calculateDelay={calculateDelay}
        />

        <Marquee speed={100} className={classes.marquee}>
          <BaseText
            txtkey="landingPage3.safeAndConvenient"
            style={typography.headings[language].h6}
            color={theme.colors.gray[3]}
          />
        </Marquee>
      </Flex>

      <Footer />
    </Flex>
  );
};

export default PageTemplate;
