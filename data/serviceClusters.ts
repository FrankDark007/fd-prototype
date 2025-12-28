
// Define intelligent cross-pollination of services
// This ensures visitors flow from "Problem" to "Solution" to "Related Issues"

export const SERVICE_CLUSTERS: Record<string, string[]> = {
    // Residential Water -> Mold (Risk) + Basement (Location) + Sewage (Category)
    'res-water': ['res-mold', 'res-base', 'res-sewage', 'res-content'],

    // Residential Mold -> Water (Cause) + Air Quality (Health) + Odor (Symptom)
    'res-mold': ['res-water', 'res-odor', 'res-crawl', 'res-base'],

    // Residential Fire -> Smoke (Part) + Contents (Recovery) + Odor (Symptom)
    'res-fire': ['res-odor', 'res-content', 'res-water', 'res-struct'],

    // Residential Sewage -> Cleanliness + Health
    'res-sewage': ['res-water', 'res-mold', 'res-odor', 'res-content'],

    // Basement -> Water + Mold + Sump Pump
    'res-base': ['res-water', 'res-mold', 'res-sewage', 'res-content'],

    // Crawl Space -> Mold + Water
    'res-crawl': ['res-mold', 'res-water', 'res-base', 'res-odor'],

    // Hardwood Floor -> Water + Structural
    'res-floor': ['res-water', 'res-struct', 'res-mold', 'res-content'],

    // Roof Leak -> Water + Mold + Structural
    'res-roof': ['res-water', 'res-mold', 'res-struct', 'res-content'],

    // Flood Cleanup -> Water + Sewage + Basement
    'res-flood': ['res-water', 'res-sewage', 'res-base', 'res-mold'],

    // Structural Drying -> Water + Floor
    'res-struct': ['res-water', 'res-floor', 'res-mold', 'res-content'],

    // Storm Damage -> Water + Roof + Flood
    'res-storm': ['res-water', 'res-roof', 'res-flood', 'res-struct'],

    // Burst Pipe -> Water + Basement + Floor
    'res-burst': ['res-water', 'res-base', 'res-floor', 'res-mold'],

    // Odor -> Mold + Fire + Sewage
    'res-odor': ['res-mold', 'res-fire', 'res-sewage', 'res-content'],

    // Contents -> Fire + Water + Mold
    'res-content': ['res-fire', 'res-water', 'res-mold', 'res-odor'],

    // --- COMMERCIAL ---

    // Com Water -> Com Mold + Com Large Loss
    'com-water': ['com-mold', 'com-large', 'com-flood', 'com-sewage'],

    // Com Mold -> Com Water + Com Air Quality
    'com-mold': ['com-water', 'com-air', 'com-health', 'com-env'],

    // Com Fire -> Com Odor + Com Content
    'com-fire': ['com-water', 'com-mold', 'com-large', 'com-air'],

    // Com Large Loss -> Com Water + Com Flood
    'com-large': ['com-water', 'com-flood', 'com-mold', 'com-fire'],

    // Com Flood -> Com Water + Com Sewage
    'com-flood': ['com-water', 'com-sewage', 'com-mold', 'com-large'],

    // Com Sewage -> Com Water + Com Mold
    'com-sewage': ['com-water', 'com-mold', 'com-health', 'com-flood'],

    // Com Environmental -> Com Mold + Com Air
    'com-env': ['com-mold', 'com-air', 'com-health', 'com-water']
};
