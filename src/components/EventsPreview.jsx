import React, { useState } from 'react';
import { Calendar, MapPin, ArrowRight, Sparkles, Filter } from 'lucide-react';
import { eventsList, eventCategories } from '../data/eventsData';
import { CircuitCorner } from './TechnicalDecoration';
import useScrollReveal from '../hooks/useScrollReveal';

export default function EventsPreview({ onSelectEvent, onNavigateEvents }) {
  const containerRef = useScrollReveal();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredEvents = selectedCategory === "All"
    ? eventsList
    : eventsList.filter((e) => e.category === selectedCategory || (selectedCategory === "Flagship Summit" && e.isFlagship));

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-[#F5F0E3] border-b border-[#E5DDCB] relative overflow-hidden">
      
      {/* Background Engineering Grid */}
      <div className="absolute inset-0 bg-cream-grid opacity-40 pointer-events-none"></div>

      {/* Decorative Corner Circuits */}
      <div className="absolute top-4 left-4 z-0">
        <CircuitCorner className="w-20 h-20 text-[#071A3A]/15" position="top-left" />
      </div>
      <div className="absolute bottom-4 right-4 z-0">
        <CircuitCorner className="w-20 h-20 text-[#071A3A]/15" position="bottom-right" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal-init">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4E6] border border-[#C8A962]/40 text-xs font-semibold text-[#9E741B] uppercase tracking-wider mb-3 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C99A2E] animate-pulse"></span>
              <span>07 / EVENT INITIATIVES</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#071A3A] tracking-tight">
              Our Events & Programs
            </h2>
            <p className="text-sm sm:text-base text-[#5A6B85] mt-2">
              From ISTE-approved faculty development programs to competitive AI build-sprints and the annual Meta Summit.
            </p>
          </div>

          {onNavigateEvents && (
            <button
              onClick={onNavigateEvents}
              className="btn-tech inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#071A3A] text-white text-xs font-bold hover:bg-[#0B1E40] border border-[#C99A2E]/50 shadow-tech-card self-start md:self-auto"
            >
              <span>Explore Complete Archive</span>
              <ArrowRight className="w-4 h-4 text-[#E5B842]" />
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none reveal-init">
          {eventCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`btn-tech px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#071A3A] text-white border border-[#C99A2E]/50 shadow-sm'
                  : 'bg-white text-[#5A6B85] hover:text-[#071A3A] hover:bg-[#FAF7F0] border border-[#E5DDCB]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Reference Image-First Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, idx) => (
            <div
              key={event.id}
              onClick={() => onSelectEvent && onSelectEvent(event)}
              className={`rounded-3xl bg-[#FCFAF6] border-2 ${
                event.isFlagship ? 'border-[#C99A2E] shadow-gold-glow' : 'border-[#E5DDCB] shadow-tech-card'
              } hover:shadow-tech-card-hover hover:border-[#071A3A] overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300 group reveal-init hover:-translate-y-1`}
              style={{ transitionDelay: `${(idx % 3) * 80}ms` }}
            >
              <div>
                {/* Event Banner Image with Dark Navy Gradient Overlay */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#071A3A]">
                  <img
                    src={event.banner}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-lg backdrop-blur-md ${
                      event.isFlagship
                        ? 'bg-[#7D1730]/90 text-[#E5B842] border border-[#C99A2E]/50'
                        : 'bg-[#071A3A]/90 text-white border border-white/20'
                    }`}>
                      {event.tag}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg backdrop-blur-md ${
                      event.status === 'Upcoming'
                        ? 'bg-emerald-900/90 text-emerald-200 border border-emerald-500/40'
                        : 'bg-[#071A3A]/80 text-[#FAF7F0]'
                    }`}>
                      {event.status}
                    </span>
                  </div>

                  <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#071A3A] via-[#071A3A]/60 to-transparent"></div>
                  
                  <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-[#E5B842] font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{event.date}</span>
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6">
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#071A3A] group-hover:text-[#9E741B] transition-colors leading-snug mb-2.5">
                    {event.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-[#5A6B85] leading-relaxed line-clamp-2 mb-4 font-normal">
                    {event.shortDesc}
                  </p>

                  {/* Track Pills */}
                  {event.tracks && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {event.tracks.slice(0, 3).map((tr, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-medium bg-[#FAF4E6] text-[#9E741B] px-2.5 py-0.5 rounded-lg border border-[#C8A962]/30"
                        >
                          {tr}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="p-6 pt-0">
                <div className="pt-3 border-t border-[#E5DDCB] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-[#5A6B85] text-[11px] truncate max-w-[60%] font-medium">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-[#C99A2E]" />
                    <span className="truncate">{event.venue.split(',')[0]}</span>
                  </div>
                  
                  <span className="text-xs font-bold text-[#071A3A] group-hover:text-[#C99A2E] group-hover:translate-x-1 transition-all flex items-center gap-0.5 whitespace-nowrap">
                    View Event &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
