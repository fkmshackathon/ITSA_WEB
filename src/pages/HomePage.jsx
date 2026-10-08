import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import WhySection from '../components/WhySection';
import DepartmentHierarchy from '../components/DepartmentHierarchy';
import StatsCounter from '../components/StatsCounter';
import FacultySpotlight from '../components/FacultySpotlight';
import TimelineSection from '../components/TimelineSection';
import TeamStrip from '../components/TeamStrip';
import EventsPreview from '../components/EventsPreview';
import GalleryPreview from '../components/GalleryPreview';
import MetaSummitTeaser from '../components/MetaSummitTeaser';
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
      {/* 01. Hero Section with 3D Layered Centerpiece & Mouse Parallax */}
      <Hero
        onExploreAbout={() => onNavigate('about')}
        onExploreEvents={() => onNavigate('events')}
        onExploreSummit={() => onNavigate('meta-summit')}
      />

      {/* 02. ITSA Identity & Focus Pillars: 'Who We Are' */}
      <AboutSection onNavigateAbout={() => onNavigate('about')} />

      {/* 03. Institutional Connection Hierarchy & Verified Department Metrics */}
      <DepartmentHierarchy />
      <StatsCounter />
      <WhySection />

      {/* 04. Academic Leadership: Continuous Auto-Scrolling Faculty Rail */}
      <FacultySpotlight
        onSelectFaculty={onSelectFaculty}
        onNavigateFaculty={() => onNavigate('faculty')}
      />

      {/* 05. ITSA Data Stream Journey: Interactive Scroll-Controlled Growing Timeline */}
      <TimelineSection />

      {/* 06. Student Core Leadership Strip */}
      <TeamStrip
        onSelectMember={onSelectTeamMember}
        onNavigateTeam={() => onNavigate('team')}
      />

      {/* 07. Verified Events & Technical Initiatives */}
      <EventsPreview
        onSelectEvent={onSelectEvent}
        onNavigateEvents={() => onNavigate('events')}
      />

      {/* 08. Asymmetric Visual Storytelling Gallery */}
      <GalleryPreview
        onOpenLightbox={onOpenLightbox}
        onNavigateGallery={() => onNavigate('gallery')}
      />

      {/* 09. Flagship META SUMMIT 2026 Spotlight */}
      <MetaSummitTeaser
        onExploreSummit={() => onNavigate('meta-summit')}
      />

      {/* 10. Inspiring Editorial Call to Action */}
      <EditorialCTA
        onExploreAbout={() => onNavigate('about')}
        onExploreSummit={() => onNavigate('meta-summit')}
        onExploreTeam={() => onNavigate('team')}
      />
    </div>
  );
}
