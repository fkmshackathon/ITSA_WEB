import React, { useState } from 'react';
import { Search, BookOpen, GraduationCap, Mail, ExternalLink, Filter, Sparkles, Award } from 'lucide-react';
import { facultyList } from '../data/facultyData';
import { CircuitCorner } from '../components/TechnicalDecoration';
import useScrollReveal from '../hooks/useScrollReveal';

export default function FacultyPage({ onSelectFaculty }) {
  const containerRef = useScrollReveal();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDesignation, setSelectedDesignation] = useState('All');
  const [selectedDomain, setSelectedDomain] = useState('All');

  const designationTabs = ['All', 'Leadership', 'Professor', 'Associate Professor', 'Assistant Professor'];
  const domainTags = ['All', 'AI / ML', 'Cyber Security', 'Networks', 'Cloud', 'Data Science', 'IoT', 'Software Engineering'];

  const filteredFaculty = facultyList.filter((faculty) => {
    const matchesSearch = 
      faculty.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faculty.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faculty.qualification.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDesignation = 
      selectedDesignation === 'All' ||
      faculty.roleCategory.toLowerCase().includes(selectedDesignation.toLowerCase()) ||
      faculty.designation.toLowerCase().includes(selectedDesignation.toLowerCase());

    const matchesDomain = 
      selectedDomain === 'All' ||
      (faculty.domainTags && faculty.domainTags.some(tag => tag.toLowerCase().includes(selectedDomain.toLowerCase()))) ||
      faculty.specialization.toLowerCase().includes(selectedDomain.toLowerCase());

    return matchesSearch && matchesDesignation && matchesDomain;
  });

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen bg-[#F5F0E3]">
      
      {/* Faculty Hero Header */}
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
              <span>04 / ACADEMIC FACULTY DIRECTORY</span>
            </div>
            
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#071A3A] tracking-tight leading-[1.08] mb-6">
              ACCOMPLISHED <br />
              <span className="text-[#C99A2E]">FACULTY & MENTORS</span>.
            </h1>

            <p className="text-base sm:text-lg text-[#323F52] leading-relaxed font-normal">
              Discover the distinguished professors, associate professors, and researchers delivering NBA-accredited pedagogy and guiding undergraduate innovation across 6 specialized laboratories.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-6 bg-[#FAF7F0] border-b border-[#E5DDCB] sticky top-[72px] z-30 backdrop-blur-md bg-[#FAF7F0]/95 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#5A6B85] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search faculty, domain, research..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-[#E5DDCB] text-xs font-medium text-[#071A3A] focus:outline-none focus:border-[#071A3A] shadow-sm"
            />
          </div>

          {/* Designation Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {designationTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedDesignation(tab)}
                className={`btn-tech px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap ${
                  selectedDesignation === tab
                    ? 'bg-[#071A3A] text-white border border-[#C99A2E]/50 shadow-sm'
                    : 'bg-white text-[#5A6B85] hover:bg-[#FAF4E6] border border-[#E5DDCB]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

        </div>

        {/* Domain Tags Filter Strip */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-3 flex items-center gap-2 overflow-x-auto scrollbar-none">
          <span className="text-[11px] font-mono font-bold text-[#5A6B85] uppercase whitespace-nowrap flex items-center gap-1">
            <Filter className="w-3 h-3 text-[#C99A2E]" /> Specialisation:
          </span>
          {domainTags.map((dom) => (
            <button
              key={dom}
              onClick={() => setSelectedDomain(dom)}
              className={`btn-tech px-3 py-1 rounded-full text-[11px] font-medium whitespace-nowrap ${
                selectedDomain === dom
                  ? 'bg-[#C99A2E] text-[#071A3A] font-bold shadow-sm'
                  : 'bg-white text-[#5A6B85] hover:bg-[#FAF4E6] border border-[#E5DDCB]'
              }`}
            >
              {dom}
            </button>
          ))}
        </div>
      </section>

      {/* Main Faculty Roster Grid */}
      <section className="py-14 md:py-20 bg-[#F5F0E3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#E5DDCB] reveal-init">
            <span className="text-xs font-mono font-bold text-[#071A3A] uppercase">
              Showing {filteredFaculty.length} Verified Faculty Members
            </span>
            <span className="text-xs font-mono text-[#5A6B85]">
              Department Strength: 20+ Faculty
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFaculty.map((faculty, idx) => (
              <div
                key={faculty.id}
                onClick={() => onSelectFaculty && onSelectFaculty(faculty)}
                className="rounded-3xl bg-white border-2 border-[#E5DDCB] shadow-tech-card hover:shadow-tech-card-hover hover:border-[#C99A2E] p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 group reveal-init hover:-translate-y-1"
                style={{ transitionDelay: `${(idx % 3) * 80}ms` }}
              >
                <div>
                  {/* Top Header Lockup */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative p-1 rounded-2xl bg-[#FAF4E6] border border-[#C8A962]/40 flex-shrink-0">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-[#071A3A]">
                        {faculty.image ? (
                          <img
                            src={faculty.image}
                            alt={faculty.name}
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-[#E5B842]">
                            <GraduationCap className="w-8 h-8 opacity-70" />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#9E741B] bg-[#FAF4E6] px-2 py-0.5 rounded border border-[#C8A962]/30 w-max mb-1">
                        {faculty.roleCategory}
                      </span>
                      <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#071A3A] group-hover:text-[#9E741B] transition-colors leading-snug">
                        {faculty.name}
                      </h3>
                      <span className="text-xs text-[#5A6B85] font-medium mt-0.5">
                        {faculty.designation}
                      </span>
                    </div>
                  </div>

                  {/* Qualifications */}
                  <div className="text-[11px] text-[#5A6B85] bg-[#FAF7F0] p-2.5 rounded-xl border border-[#E5DDCB] mb-3 line-clamp-2">
                    <span className="font-bold text-[#071A3A]">Qual: </span>
                    {faculty.qualification}
                  </div>

                  {/* Specialization */}
                  <div className="mb-4">
                    <div className="text-[10px] font-mono font-bold text-[#5A6B85] uppercase mb-1">
                      Area of Specialisation
                    </div>
                    <p className="text-xs text-[#071A3A] font-medium line-clamp-2 leading-relaxed">
                      {faculty.specialization}
                    </p>
                  </div>
                </div>

                {/* Bottom Stats */}
                <div className="pt-3 border-t border-[#E5DDCB] flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-[#9E741B] font-bold flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-[#C99A2E]" />
                    <span>{faculty.publications}</span>
                  </span>
                  <span className="text-xs font-bold text-[#071A3A] group-hover:text-[#C99A2E] group-hover:translate-x-0.5 transition-transform">
                    View Dossier &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredFaculty.length === 0 && (
            <div className="py-20 text-center bg-white rounded-3xl border border-[#E5DDCB] p-8 reveal-init">
              <GraduationCap className="w-12 h-12 text-[#5A6B85] mx-auto mb-3 opacity-50" />
              <h4 className="font-heading font-bold text-lg text-[#071A3A]">
                No faculty members match your filter criteria.
              </h4>
              <p className="text-xs text-[#5A6B85] mt-1 mb-4">
                Try clearing search terms or selecting 'All' designations.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedDesignation('All'); setSelectedDomain('All'); }}
                className="btn-tech px-5 py-2.5 rounded-full bg-[#071A3A] text-white text-xs font-bold"
              >
                Reset All Filters
              </button>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}

