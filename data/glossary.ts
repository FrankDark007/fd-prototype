export interface GlossaryTerm {
    term: string;
    definition: string;
    category: 'Water' | 'Mold' | 'Fire' | 'General';
    slug: string;
}

export const GLOSSARY_TERMS: GlossaryTerm[] = [
    {
        term: "Category 1 Water",
        definition: "Clean water from a sanitary source, such as a broken water supply line or faucet. If left untreated, it can degrade into Category 2 or 3.",
        category: "Water",
        slug: "category-1-water"
    },
    {
        term: "Category 2 Water",
        definition: "Gray water that contains substantial contamination and may cause illness (e.g., washing machine overflow, toilet with urine, sump pump failure).",
        category: "Water",
        slug: "category-2-water"
    },
    {
        term: "Category 3 Water",
        definition: "Black water that is grossly contaminated and contains pathogenic agents (e.g., sewage, flooding from rivers, toilet with feces).",
        category: "Water",
        slug: "category-3-water"
    },
    {
        term: "HEPA Filtration",
        definition: "High-Efficiency Particulate Air filters capable of trapping 99.97% of particles that are 0.3 microns in diameter. Essential for mold remediation.",
        category: "Mold",
        slug: "hepa-filtration"
    },
    {
        term: "Thermal Fogging",
        definition: "A deodorization process that uses heat to vaporize a solvent-based deodorizer, allowing it to penetrate materials similar to the way smoke does.",
        category: "Fire",
        slug: "thermal-fogging"
    },
    {
        term: "Air Mover",
        definition: "Industrial-grade equipment used to increase the rate of evaporation by blowing large volumes of air across wet surfaces.",
        category: "Water",
        slug: "air-mover"
    },
    {
        term: "Dehumidifier (LGR)",
        definition: "Low Grain Refrigerant dehumidifier. High-performance equipment designed to remove moisture from the air in difficult drying conditions.",
        category: "Water",
        slug: "lgr-dehumidifier"
    },
    {
        term: "Encapsulation",
        definition: "Applying a coating to a surface (often in crawl spaces or after mold removal) to seal it and prevent moisture or mold spores from escaping.",
        category: "Mold",
        slug: "encapsulation"
    },
    {
        term: "Negative Air Pressure",
        definition: "An isolation technique used to prevent cross-contamination. Air is exhausted from a work area to ensure contaminates do not escape to other parts of the building.",
        category: "General",
        slug: "negative-air"
    },
    {
        term: "Soot Sponges",
        definition: "Dry cleaning sponges made of vulcanized rubber, used to remove soot and smoke residue from surfaces without determining them.",
        category: "Fire",
        slug: "soot-sponge"
    }
];
