import { Header } from '@/components/header';
import { HomeSection } from '@/components/sections/home-section';
import { ProjectScopeSection } from '@/components/sections/project-scope-section';
import { MilestonesSection } from '@/components/sections/milestones-section';
import { DownloadsSection } from '@/components/sections/downloads-section';
import { AboutUsSection } from '@/components/sections/about-us-section';
import { AchievementsSection } from '@/components/sections/achievements-section';
import { ContactUsSection } from '@/components/sections/contact-us-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-16"> {/* Add padding top to account for fixed header */}
        <HomeSection />
        <ProjectScopeSection />
        <MilestonesSection />
        <DownloadsSection />
        <AboutUsSection />
        <AchievementsSection />
        <ContactUsSection />
      </div>
      <Footer />
    </main>
  );
}