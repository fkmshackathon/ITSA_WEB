import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BrandedLoader from './components/BrandedLoader';
import TeamModal from './components/TeamModal';
import FacultyModal from './components/FacultyModal';
import EventModal from './components/EventModal';
import Lightbox from './components/Lightbox';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import EventsPage from './pages/EventsPage';
import MetaSummitPage from './pages/MetaSummitPage';
import GalleryPage from './pages/GalleryPage';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState('home');
  
  // Modal states
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [lightboxState, setLightboxState] = useState({ isOpen: false, index: 0, items: [] });

  const handleNavigate = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLightbox = (item, index) => {
    setLightboxState({ isOpen: true, index, items: Array.isArray(item) ? item : [item] });
  };

  const handleCloseLightbox = () => {
    setLightboxState({ isOpen: false, index: 0, items: [] });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F0E3] text-[#323F52] selection:bg-[#071A3A] selection:text-[#E5B842] relative">
      
      {/* 1. Minimal Initial Branded Loader */}
      {loading && <BrandedLoader onComplete={() => setLoading(false)} />}

      {/* 2. Global Sticky Navigation */}
      <Navbar
        activePage={activePage}
        setActivePage={handleNavigate}
        onOpenMetaSummit={() => handleNavigate('meta-summit')}
      />

      {/* 3. Dynamic Page View Router with smooth page transition */}
      <main key={activePage} className="flex-grow page-transition-enter">
        {activePage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectTeamMember={setSelectedTeamMember}
            onSelectFaculty={setSelectedFaculty}
            onSelectEvent={setSelectedEvent}
            onOpenLightbox={(item, idx) => setLightboxState({ isOpen: true, index: idx, items: [item] })}
          />
        )}

        {activePage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onSelectFaculty={setSelectedFaculty}
          />
        )}

        {activePage === 'team' && (
          <TeamPage
            onSelectMember={setSelectedTeamMember}
            onSelectFaculty={setSelectedFaculty}
          />
        )}

        {activePage === 'events' && (
          <EventsPage
            onSelectEvent={setSelectedEvent}
          />
        )}

        {activePage === 'meta-summit' && (
          <MetaSummitPage
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'gallery' && (
          <GalleryPage
            onOpenLightbox={(item, idx) => setLightboxState({ isOpen: true, index: idx, items: [item] })}
          />
        )}
      </main>

      {/* 4. Authoritative Institutional Footer (Home uses Section 5 Volumetric Studio) */}
      {activePage !== 'home' && <Footer onNavigate={handleNavigate} />}

      {/* 5. Global Modals & Lightbox Overlays */}
      {selectedTeamMember && (
        <TeamModal
          member={selectedTeamMember}
          onClose={() => setSelectedTeamMember(null)}
        />
      )}

      {selectedFaculty && (
        <FacultyModal
          faculty={selectedFaculty}
          onClose={() => setSelectedFaculty(null)}
        />
      )}

      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}

      {lightboxState.isOpen && (
        <Lightbox
          items={lightboxState.items}
          currentIndex={lightboxState.index}
          onClose={handleCloseLightbox}
          onNavigate={(newIndex) => setLightboxState(prev => ({ ...prev, index: newIndex }))}
        />
      )}
    </div>
  );
}

