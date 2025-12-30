
// Define intelligent cross-pollination of services
// This ensures visitors flow from "Problem" to "Solution" to "Related Issues"

export const SERVICE_CLUSTERS: Record<string, string[]> = {
    // Residential Water -> Mold (Risk) + Basement (Location) + Sewage (Category)
    'res-water': ['res-mold', 'res-base', 'res-sewage', 'res-content'],

    // Residential Mold -> Water (Cause) + Air Quality (Health) + Odor (Symptom)
    'res-mold': ['res-water', 'res-odor', 'res-testing', 'res-base'],

    // Residential Fire -> Smoke (Part) + Contents (Recovery) + Odor (Symptom)
    'res-fire': ['res-smoke', 'res-content', 'res-odor', 'res-water'],

    // Residential Sewage -> Cleanliness + Health
    'res-sewage': ['res-water', 'res-mold', 'res-odor', 'res-clean'],

    // Basement -> Water + Mold + Sump Pump
    'res-base': ['res-water', 'res-mold', 'res-sump', 'res-sewage']
};
