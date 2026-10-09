import React, { useState } from 'react';
import { Calendar, MapPin, Search, Tag, Sparkles, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { eventsList, eventCategories } from '../data/eventsData';
import { CircuitCorner } from '../components/TechnicalDecoration';
import useScrollReveal from '../hooks/useScrollReveal';

export default function EventsPage({ onSelectEvent }) {
  const containerRef = useScrollReveal();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCat, setSelectedCat] = useState('All');

  const filteredEvents = eventsList.filter((event) => {
    const matchesSearch = 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.tag.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCat = 
      selectedCat === 'All' || 
      event.category === selectedCat ||
      (selectedCat === 'Flagship Summit' && event.isFlagship);

    return matchesSearch && matchesCat;
  });

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen bg-[#F5F0E3]">
      
      {/* Events Hero Header */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-24 bg-[#FAF7F0] border-b border-[#E5DDCB] relative overflow-hidden">
        <div className="absolute inset-0 bg-cream-grid opacity-50 pointer-events-none"></div>
        
        <div className="absolute top-4 left-4 z-0">
          <CircuitCorner className="w-20 h-20 text-[#071A3A]/15" position="top-left" />
        </div>
        <div className="absolute top-4 right-4 z-0">
          <CircuitCorner className="w-20 h-20 text-[#071A3A]/15" position="top-right" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl reveal-init">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4E6] border border-[#C8A962]/40 text-xs font-mono font-bold text-[#9E741B] uppercase tracking-wider mb-4 shadow-sm">
              <span>07 / EVENTS ARCHIVE & SYMPOSIA</span>
            </div>
            
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#071A3A] tracking-tight leading-[1.08] mb-6">
              PROGRAMS, LABS & <br />
              <span className="text-[#C99A2E]">TECHNICAL SYMPOSIA</span>.
            </h1>

            <p className="text-base sm:text-lg text-[#323F52] leading-relaxed font-normal">
              Explore the complete portfolio of technical workshops, competitive hackathons, ISTE-approved faculty development cohorts, and flagship summits hosted by the Department of IT and ITSA.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-6 bg-[#FAF7F0] border-b border-[#E5DDCB] sticky top-[72px] z-30 backdrop-blur-md bg-[#FAF7F0]/95 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#5A6B85] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search events, workshops, summits..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-[#E5DDCB] text-xs font-medium text-[#071A3A] focus:outline-none focus:border-[#071A3A] shadow-sm"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {eventCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`btn-tech px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap ${
                  selectedCat === cat
                    ? 'bg-[#071A3A] text-white border border-[#C99A2E]/50 shadow-sm'
                    : 'bg-white text-[#5A6B85] hover:bg-[#FAF4E6] border border-[#E5DDCB]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Events List Grid */}
      <section className="py-14 md:py-20 bg-[#F5F0E3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, idx) => (
              <div
                key={event.id}
                onClick={() => onSelectEvent && onSelectEvent(event)}
                className={`rounded-3xl bg-[#FCFAF6] border-2 ${
                  event.isFlagship ? 'border-[#C99A2E] shadow-gold-glow' : 'border-[#E5DDCB] shadow-tech-card'
                } hover:shadow-tech-card-hover hover:border-[#071A3A] overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300 group reveal-init hover:-translate-y-1`}
                style={{ transitionDelay: `${(idx % 3) * 90}ms` }}
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-[#071A3A]">
                    <img
                      src={event.banner}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    <div className="absolute top-3 left-3">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg backdrop-blur-md ${
                        event.isFlagship
                          ? 'bg-[#7D1730]/90 text-[#E5B842] border border-[#C99A2E]/50'
                          : 'bg-[#071A3A]/90 text-white border border-white/20'
                      }`}>
                        {event.tag}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg backdrop-blur-md ${
                        event.status === 'Upcoming'
                          ? 'bg-emerald-900/90 text-emerald-200 border border-emerald-500/40'
                          : 'bg-[#071A3A]/80 text-[#FAF7F0]'
                      }`}>
                        {event.status}
                      </span>
                    </div>

                    <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#071A3A] to-transparent"></div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#9E741B] font-bold mb-2">
                      <Calendar className="w-3.5 h-3.5 text-[#C99A2E]" />
                      <span>{event.date}</span>
                      <span className="text-[#5A6B85]">•</span>
                      <span>{event.duration}</span>
                    </div>

                    <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#071A3A] group-hover:text-[#9E741B] transition-colors leading-snug mb-2.5">
                      {event.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#5A6B85] leading-relaxed line-clamp-3 mb-4">
                      {event.shortDesc}
                    </p>

                    {event.highlights && (
                      <div className="space-y-1.5 pt-3 border-t border-[#E5DDCB]">
                        {event.highlights.slice(0, 2).map((hl, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-1.5 text-xs text-[#071A3A] font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C99A2E] flex-shrink-0" />
                            <span className="truncate">{hl}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-3 border-t border-[#E5DDCB] flex items-center justify-between text-xs font-mono">
                    <span className="text-[11px] text-[#5A6B85] truncate max-w-[60%]">
                      {event.venue.split(',')[0]}
                    </span>
                    <span className="text-xs font-bold text-[#071A3A] group-hover:text-[#C99A2E] group-hover:translate-x-0.5 transition-all flex items-center gap-1">
                      <span>{event.registrationOpen ? 'Register Now' : 'View Summary'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="py-20 text-center bg-white rounded-3xl border border-[#E5DDCB] p-8 reveal-init">
              <Calendar className="w-12 h-12 text-[#5A6B85] mx-auto mb-3 opacity-50" />
              <h4 className="font-heading font-bold text-lg text-[#071A3A]">
                No events found matching your search.
              </h4>
              <p className="text-xs text-[#5A6B85] mt-1 mb-4">
                Try selecting 'All' categories or searching with different keywords.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCat('All'); }}
                className="btn-tech px-5 py-2.5 rounded-full bg-[#071A3A] text-white text-xs font-bold"
              >
                Reset Event Filters
              </button>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}

