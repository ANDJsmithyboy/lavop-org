import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PillarsSection from '../components/PillarsSection';
import ActionsSection from '../components/ActionsSection';
import ProgramsPreview from '../components/ProgramsPreview';
import StorePreview from '../components/StorePreview';
import SpiritualBooksSection from '../components/SpiritualBooksSection';
import CoachingSystemSection from '../components/CoachingSystemSection';
import VOPActionsSection from '../components/VOPActionsSection';
import BlogPreview from '../components/BlogPreview';
import TransparencyPreview from '../components/TransparencyPreview';
import FounderVideoSection from '../components/FounderVideoSection';
import ActivitiesGallery from '../components/ActivitiesGallery';
import SocialMediaSection from '../components/SocialMediaSection';
import DonationSection from '../components/DonationSection';
import ContactSection from '../components/ContactSection';
import AIAssistant from '../components/AIAssistant';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FounderVideoSection />
      <ActivitiesGallery />
      <SocialMediaSection />
      <PillarsSection />
      <ActionsSection />
      <ProgramsPreview />
      <StorePreview />
      <SpiritualBooksSection />
      <CoachingSystemSection />
      <VOPActionsSection />
      <BlogPreview />
      <TransparencyPreview />
      <DonationSection />
      <ContactSection />
      <AIAssistant />
    </>
  );
};

export default HomePage;
