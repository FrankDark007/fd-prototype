import React, { useState } from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import { GLOSSARY_TERMS } from '../../data/glossary';
import { Search, BookOpen, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Glossary: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const categories = Array.from(new Set(GLOSSARY_TERMS.map(term => term.category)));

    const filteredTerms = GLOSSARY_TERMS.filter(term => {
        const matchesSearch = term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
            term.definition.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory ? term.category === selectedCategory : true;
        return matchesSearch && matchesCategory;
    });

    return (
        <main className="flex-grow bg-white">
            <PageMeta
                title="Restoration Glossary | Flood Doctor"
                description="Understand the terminology used in water damage restoration, mold remediation, and fire cleanup."
            />

            <div className="bg-subtle border-b border-border pt-12 pb-24">
                <div className="max-w-[1440px] mx-auto px-6 text-center">
                    <Breadcrumbs items={[{ label: 'Resources', path: '/resources/' }, { label: 'Glossary', path: '#' }]} />

                    <h1 className="font-display text-4xl md:text-5xl font-medium text-text mt-8 mb-6">
                        Restoration Terminology
                    </h1>
                    <p className="font-sans text-xl text-muted max-w-2xl mx-auto mb-10">
                        Confused by industry jargon? Search our knowledge base to understand exactly what is happening in your home.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search size={20} className="text-muted group-focus-within:text-primary transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search terms (e.g. 'HEPA', 'Class 3')..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="block w-full pl-12 pr-4 py-4 rounded-full border-2 border-transparent bg-white shadow-google text-lg placeholder-gray-400 focus:outline-none focus:border-primary/30 focus:shadow-lg transition-all"
                        />
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-2 mt-8">
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${!selectedCategory ? 'bg-gray-800 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                        >
                            All Terms
                        </button>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === cat ? 'bg-primary text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-[1440px] mx-auto px-6 -mt-12 relative z-20 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTerms.map((term) => (
                        <div key={term.slug} className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all group">
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-blue-50 text-primary rounded-xl">
                                    <BookOpen size={24} />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wide text-gray-400 bg-gray-50 px-2 py-1 rounded">
                                    {term.category}
                                </span>
                            </div>
                            <h3 className="font-display text-xl font-medium text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                {term.term}
                            </h3>
                            <p className="text-gray-500 leading-relaxed text-sm">
                                {term.definition}
                            </p>
                        </div>
                    ))}

                    {filteredTerms.length === 0 && (
                        <div className="col-span-full py-20 text-center">
                            <p className="text-gray-400 text-lg">No terms found matching "{searchQuery}".</p>
                            <button onClick={() => setSearchQuery('')} className="text-primary font-medium mt-2 hover:underline">Clear Search</button>
                        </div>
                    )}
                </div>
            </div>

            {/* Contextual Footer CTA */}
            <div className="bg-gray-50 border-t border-gray-200 py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="font-display text-2xl font-medium text-gray-900 mb-4">Still have questions?</h2>
                    <p className="text-gray-500 mb-8">Our certified project managers are happy to explain any part of the process.</p>
                    <Link to="/contact/" className="inline-flex items-center gap-2 bg-white border border-gray-300 px-6 py-3 rounded-full font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">
                        Contact Support <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default Glossary;
