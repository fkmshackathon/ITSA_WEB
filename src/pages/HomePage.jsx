import React from 'react';
import Hero from '../components/Hero';
import DepartmentHierarchy from '../components/DepartmentHierarchy';
import StatsCounter from '../components/StatsCounter';
import AboutSection from '../components/AboutSection';
import WhySection from '../components/WhySection';
import FacultySpotlight from '../components/FacultySpotlight';
import TeamStrip from '../components/TeamStrip';
import MetaSummitTeaser from '../components/MetaSummitTeaser';
import EventsPreview from '../components/EventsPreview';
import GalleryPreview from '../components/GalleryPreview';
import EditorialCTA from '../components/EditorialCTA';

export default function HomePage({
  onNavigate,
  onSelectTeamMember,
  onSelectFaculty,
  onSelectEvent,
  onOpenLightbox
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section matching reference image */}
      <Hero
        onExploreAbout={() => onNavigate('about')}
        onExploreEvents={() => onNavigate('events')}
        onExploreSummit={() => onNavigate('meta-summit')}
      />

      {/* 2. Institutional Connection Hierarchy */}
      <DepartmentHierarchy />

      {/* 3. Verified Department Key Statistics */}
      <StatsCounter />

      {/* 4. About ITSA: 'Who We Are' + 3 Horizontal Focus Pills */}
      <AboutSection onNavigateAbout={() => onNavigate('about')} />

      {/* 5. Our Focus: 3 Iconic Dark Navy Tech Cards */}
      <WhySection />

      {/* 6. Our Faculty Advisors: Dark Navy Tech ID Cards */}
      <FacultySpotlight
        onSelectFaculty={onSelectFaculty}
        onNavigateFaculty={() => onNavigate('faculty')}
      />

      {/* 7. Meet the Student Core Team: Cream Tech Cards */}
      <TeamStrip
        onSelectMember={onSelectTeamMember}
        onNavigateTeam={() => onNavigate('team')}
      />

      {/* 8. Flagship META SUMMIT 2026 Spotlight */}
      <MetaSummitTeaser
        onExploreSummit={() => onNavigate('meta-summit')}
      />

      {/* 9. Verified Events & Technical Initiatives */}
      <EventsPreview
        onSelectEvent={onSelectEvent}
        onNavigateEvents={() => onNavigate('events')}
      />

      {/* 10. Asymmetric Visual Storytelling Gallery */}
      <GalleryPreview
        onOpenLightbox={onOpenLightbox}
        onNavigateGallery={() => onNavigate('gallery')}
      />

      {/* 11. Inspiring Editorial Call to Action */}
      <EditorialCTA
        onExploreAbout={() => onNavigate('about')}
        onExploreSummit={() => onNavigate('meta-summit')}
        onExploreTeam={() => onNavigate('team')}
      />
    </div>
  );
}

