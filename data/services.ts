
import { ServiceData } from '../types';

export const SERVICES: ServiceData[] = [
  // --- RESIDENTIAL (14 Services) ---
  
  // 1. Odor Removal
  {
    id: 'res-odor',
    title: 'Odor Removal',
    slug: '/services/residential/cleanup-services/odor-removal/',
    shortDescription: 'Professional deodorization for persistent smells.',
    audience: 'RESIDENTIAL',
    category: 'CLEANUP',
    primaryKeyword: 'odor removal services',
    secondaryKeywords: ['smoke odor removal', 'pet odor removal', 'musty smell removal'],
    heroHeading: 'Odor Removal Services',
    heroIntro: 'We do not just mask smells; we eliminate them at the source. Professional odor removal for smoke, pets, mold, and biohazards in Northern Virginia, Maryland, and DC.',
    heroVisualKey: 'odor-removal',
    thumbVisualKey: 'odor-gauge',
    infographicType: 'MOLD_AIRFLOW',
    intro_whenToCall: 'Persistent odors are often a sign of trapped bacteria, mold, or chemical residues. If over-the-counter sprays have failed, it is time for professional molecular treatment.',
    whenToCall: [
      'New Home Purchase: The house smells like cigarette smoke from previous owners.',
      'Animal Intrusion: A skunk sprayed under your house or a rodent died in the walls.',
      'Pet Urine: Strong urine odors persist even after professional carpet cleaning.',
      'Musty Smells: There is a lingering earthy smell after a water leak or high humidity.',
      'Cooking Odors: Curry, fish, or grease smells are embedded in drywall and cabinets.',
      'Post-Fire Smoke: You had a small fire and the burnt smell wont leave furniture.',
      'Tenant Turnover: Tenants left an apartment with strong organic odors.',
      'Chemical Off-gassing: New paint or furniture is releasing strong VOC fumes.',
      'Selling Your Home: You need the property to smell neutral for open houses.',
      'Sewage Residue: A backup occurred and the smell remains after cleanup.',
      'Mold Verification: You smell mold but cannot see it (requires inspection).',
      'Hoarding Cleanup: Deep odors remain after a hoarding situation is cleared.'
    ],
    intro_whatWeDo: 'Our process attacks odors on three levels: source removal, surface cleaning, and molecular neutralization. We verify the air is clean before we leave.',
    whatWeDo: [
      'Source Identification: We use UV lights and moisture meters to find the exact source of the smell.',
      'Source Removal: We physically remove the cause (e.g., pulling up saturated carpet pad).',
      'Detailed Cleaning: Our team cleans affected surfaces to remove oils, tars, and residues.',
      'Hydroxyl Treatment: We deploy hydroxyl generators to safe neutralize odors while you stay home.',
      'Ozone Treatment: For severe odors in empty homes, we use high-output ozone generators.',
      'Thermal Fogging: We apply thermal fog to penetrate porous materials like fabric and wood.',
      'Subfloor Sealing: We apply specialized sealants to lock odors into subfloors if they cannot be fully cleaned.',
      'Duct Cleaning: We clean HVAC ducts to remove trapped odor particles and dust.',
      'HEPA Filtration: We use air scrubbers with activated charcoal filters to polish the air.',
      'Urine Neutralization: We treat pet urine spots with enzymatic digesters to break down crystals.',
      'Verification: We verify the odor is gone with a final walkthrough before removing equipment.',
      'Documentation: We provide a certificate of treatment for landlords or real estate transactions.'
    ],
    whatToExpect: {
      timeline: 'Odor removal typically takes 2-4 days. Source removal happens on Day 1. Equipment (Hydroxyl/Ozone) usually runs for 24-48 hours to fully break down the odor molecules.',
      arrival: 'We arrive discreetly. Our first priority is finding the source. We may need to lift carpet corners or inspect HVAC vents. We will explain the treatment plan before setting up machines.',
      daily: 'If we use Hydroxyl generators, you can often stay in the home. If we use Ozone, the house must be empty. We will monitor the progress daily to check scent levels.',
      noise: 'Air scrubbers and fans create a moderate hum, similar to a loud box fan running in the background.'
    },
    intro_safety: 'Chemical treatments and ozone can be hazardous if not managed correctly. We follow strict safety protocols to protect your family and pets.',
    safety: {
      head: 'Odor Treatment Safety',
      items: [
        'Ozone Danger: You MUST vacate the home if Ozone generators are running (lethal to pets/plants).',
        'Ventilation: Thoroughly air out the home for at least 4 hours after Ozone treatment.',
        'Pet Safety: Remove all pets, including fish and reptiles, during aggressive treatments.',
        'Plant Safety: Move house plants outside or to a garage during Ozone cycles.',
        'Perfumes: Do not mask odors with heavy perfumes before we arrive; it makes diagnosis harder.',
        'Respiratory Issues: Inform us if anyone in the home has asthma or chemical sensitivities.',
        'Food Safety: Remove open food items (fruit bowls, bread) before thermal fogging.',
        'Pilot Lights: Turn off pilot lights if fogging involves flammable solvents (we will advise).',
        'Clothing: Wash bedding and clothes in hot water if they have absorbed the odor.',
        'Chemical Mixing: Do not mix household bleach or ammonia; it creates toxic gas.'
      ],
      kidsPets: 'Ozone is dangerous for all living things. If we use Ozone, the house must be completely empty of people, pets, and plants. Hydroxyl is generally safe for occupied spaces, but we always prioritize caution.'
    },
    intro_scenarios: 'We have seen it all. From skunks under porches to decades of cigarette smoke, we have a protocol for every odor type.',
    scenarios: [
      'Cigarette Smoke: Removing nicotine tar from a home before a new baby arrives.',
      'Pet Urine Saturation: Treating subfloors where a dog marked the same spot for years.',
      'Dead Rodent: Locating and removing a decomposed animal from a wall cavity.',
      'Skunk Spray: Neutralizing skunk oil that penetrated the foundation vents.',
      'Musty Basements: eliminating "old house smell" in a damp cellar.',
      'Curry/Spice Odors: treating walls in a rental property to remove strong cooking oil smells.',
      'Fire Smoke: Deodorizing furniture that smells like a campfire after a kitchen incident.',
      'Biohazard Decomposition: specialized odor control after an unattended death.',
      'Sewage Gas: Tracking down a dry p-trap or broken wax ring releasing sewer gas.',
      'VOC Off-gassing: Speeding up the cure time for new spray foam or paint smells.',
      'Hoarding Aftermath: Removing deep-set organic odors after a clean-out.',
      'Rotting Food: Treating a home after a freezer failure during a vacation.'
    ],
    saveVsRemove: {
      save: [
        'Hard surfaces (after deep cleaning)',
        'Structural wood (can be sanded/sealed)',
        'Most furniture (after chamber treatment)',
        'Clothing (after specialized Esporta wash)'
      ],
      remove: [
        'Carpet padding with urine saturation (always)',
        'Drywall saturated with oils/urine',
        'Insulation holding rodent urine',
        'Porous items that cannot be washed'
      ]
    },
    faqs: [
      { question: "Can you get cigarette smoke out of a house?", answer: "Yes, but it requires a comprehensive approach: cleaning walls (to remove tar), cleaning ducts, and using ozone/hydroxyl treatments. Painting over it without cleaning often fails as the smell bleeds through." },
      { question: "What is Ozone treatment?", answer: "Ozone (O3) is a gas that attacks odor molecules. It is very effective but dangerous to breathe. It is a 'shock treatment' done only when the house is empty." },
      { question: "What is a Hydroxyl generator?", answer: "It uses UV light to create hydroxyl radicals that clean the air. It is slower than ozone but generally safe for occupied spaces, so you don't have to move out." },
      { question: "Will pet urine smell come back?", answer: "If we treat the source (often the subfloor and padding), no. If you just steam clean the carpet surface, the crystals in the pad remain and the smell returns on humid days." },
      { question: "How much does odor removal cost?", answer: "It depends on the size of the area and the severity. A simple ozone treatment is affordable; removing nicotine tar from a whole house is a larger restoration project." },
      { question: "Does insurance cover odors?", answer: "If the odor comes from a covered loss (fire, water damage), yes. If it is from 'wear and tear' (like years of smoking or pets), it is usually not covered." },
      { question: "How long after Ozone can I enter?", answer: "Typically, you should wait at least 4 hours after the machine turns off to allow the ozone to revert back to oxygen. We will give you a specific time." },
      { question: "Can you remove skunk smell?", answer: "Yes. Skunk oil is potent. We use specific pairing agents and fogging to neutralize the thiols (sulfur compounds) in the oil." },
      { question: "Do you clean air ducts?", answer: "Yes, cleaning ducts is often critical for odor removal, as dust inside the system holds onto smoke and pet dander smells." },
      { question: "Is the smell harmful?", answer: "Some odors indicate harmful conditions (mold, sewage, chemical off-gassing). Others (like old smoke) are mostly irritants. We treat the health concern first." }
    ],
    relatedSearchTerms: ['cigarette smoke removal service', 'pet urine odor remover', 'ozone treatment', 'house smell removal', 'car odor removal', 'remove smell from carpet', 'odor neutralizer', 'professional deodorizer', 'nicotine removal']
  },

  // 2. Water Damage Restoration
  {
    id: 'res-water',
    title: 'Water Damage Restoration',
    slug: '/services/residential/restoration-services/water-damage-restoration/',
    shortDescription: 'Emergency water extraction and drying for homes.',
    audience: 'RESIDENTIAL',
    category: 'RESTORATION',
    primaryKeyword: 'water damage restoration',
    heroHeading: 'Water Damage Restoration',
    heroIntro: '24/7 Emergency Response. Rapid water removal, structural drying, and damage repairs for homeowners in Northern Virginia, Maryland, and DC.',
    heroVisualKey: 'water-damage',
    thumbVisualKey: 'water-damage-dash',
    infographicType: 'DRYING_TREND',
    intro_whenToCall: 'Water damage spreads fast. Call us immediately if:',
    whenToCall: [
      'Standing Water: Pools of water forming in your basement or kitchen.',
      'Active Leaks: Water dripping from the ceiling or light fixtures.',
      'Flooring Issues: Carpet feels squishy or hardwood is starting to cup.',
      'Wall Damage: Paint is bubbling, peeling, or drywall feels soft.',
      'Hidden Noises: You hear running water behind a wall when faucets are off.',
      'Appliance Failure: Washing machine or dishwasher hose disconnected.',
      'High Humidity: Windows are fogging up on the inside.',
      'Musty Odors: A persistent damp smell in a specific room.',
      'Cabinet Swelling: Vanity bases are expanding or warping.',
      'Color Changes: Water stains (yellow/brown) appearing on ceilings.',
      'Sump Pump Failure: Water rising in the sump pit.',
      'Supply Line Burst: Water spraying from a toilet or sink line.'
    ],
    intro_whatWeDo: 'We use a science-based drying protocol to save your property.',
    whatWeDo: [
      'Thermal Inspection: We use IR cameras to find hidden moisture pockets.',
      'Water Extraction: Truck-mounted pumps remove standing water instantly.',
      'Material Removal: We carefully remove unsalvageable carpet pad or drywall.',
      'Dehumidification: Industrial LGR units pull moisture from the air.',
      'Air Movement: High-velocity fans speed up evaporation from surfaces.',
      'Moisture Monitoring: We track drying progress daily with digital meters.',
      'Sanitization: We apply antimicrobials to prevent mold growth.',
      'Insurance Handling: We document everything for your claim.',
      'Pack-Out: We protect furniture by moving it to dry areas.',
      'Reconstruction: We repair drywall, paint, and flooring after drying.',
      'Final Verification: We prove the home is dry with final readings.',
      'Containment: We seal off the wet area to protect the rest of the home.'
    ],
    whatToExpect: {
      timeline: 'Standard drying takes 3-5 days. Complex projects involve daily monitoring until dry standards are met.',
      arrival: 'We arrive in 60 minutes for emergencies. We extract water first, then set up drying equipment.',
      daily: 'We visit daily to check readings and adjust equipment. You will see the progress in our daily logs.',
      noise: 'Fans and dehumidifiers run 24/7. It sounds like white noise or a loud fan. This is necessary for drying.'
    },
    intro_safety: 'Water and electricity are a dangerous mix. Stay safe until we arrive.',
    safety: {
      head: 'Water Damage Safety Checklist',
      items: [
        'Stop the Water: Shut off the main water valve immediately.',
        'Electrical Safety: Turn off breakers to wet rooms if safe to do so.',
        'Slip Hazards: Be careful on wet tile or hardwood floors.',
        'Protect Valuables: Move small electronics and keepsakes to a dry place.',
        'Furniture Protection: Place foil or blocks under furniture legs.',
        'Avoid Vacuums: Do not use a household vacuum (shock hazard).',
        'Ceiling Safety: Do not stand under sagging drywall bubbles.',
        'Sanitation: Wash hands after touching flood water.',
        'Photos: Take pictures of the damage for insurance if possible.',
        'Call Pros: Do not wait; water damage gets worse by the hour.'
      ],
      kidsPets: 'Keep children and pets away from the wet area. Wet floors are slippery, and equipment cords pose a trip hazard.'
    },
    intro_scenarios: 'We handle every type of residential water loss scenario.',
    scenarios: [
      'Burst Pipes: Frozen pipes thawing and flooding the home.',
      'Appliance Leaks: Dishwasher or washing machine failures.',
      'Toilet Overflows: Supply line breaks or clog backups.',
      'Ceiling Leaks: Water intrusion from upstairs bathrooms.',
      'Sump Pump Failure: Basement flooding during storms.',
      'Water Heater Burst: Flooding utility rooms and basements.',
      'Shower Pan Leaks: Water dripping into the ceiling below.',
      'Ice Maker Leaks: Slow leaks damaging kitchen floors.',
      'Storm Intrusion: Rain entering through windows or roofs.',
      'Sewage Backups: Contaminated water entering drains.',
      'Fire Sprinklers: Accidental discharge soaking a room.',
      'Foundation Leaks: Groundwater seeping through cracks.'
    ],
    saveVsRemove: {
      save: [
        'Structural framing (studs/joists)',
        'Concrete floors',
        'Tile flooring (usually)',
        'High-quality hardwood (if caught early)'
      ],
      remove: [
        'Carpet padding (almost always)',
        'Wet fiberglass insulation',
        'Crumbling drywall',
        'Particle board cabinets'
      ]
    },
    faqs: [
      { question: "How much does it cost?", answer: "Costs vary by scope. We bill insurance directly for covered losses." },
      { question: "Can I stay home?", answer: "Usually yes, unless noise or lack of utilities prevents it." },
      { question: "Will mold grow?", answer: "Mold can start in 24-48 hours. Rapid drying prevents it." },
      { question: "Do you fix the pipe?", answer: "We handle the water damage; a plumber fixes the pipe." },
      { question: "How long to dry?", answer: "Typically 3-5 days for standard water damage." },
      { question: "Is the equipment loud?", answer: "Yes, like a loud fan. It must run 24/7." },
      { question: "Will wood floors be saved?", answer: "We use injection drying to save them whenever possible." },
      { question: "Do you work with my insurance?", answer: "Yes, we work with all major carriers." },
      { question: "What is the dry standard?", answer: "The moisture level of a known dry material in your home." },
      { question: "Do you rebuild?", answer: "Yes, we are a full-service restoration company." }
    ],
    relatedSearchTerms: ['water mitigation', 'flood cleanup', 'emergency extraction', 'dry out service', 'restoration company', 'water damage repair near me', 'basement water cleanup', 'flooded house cleanup', 'water extraction company', 'emergency restoration services']
  },

  // 3. Fire & Smoke Cleanup
  {
    id: 'res-fire',
    title: 'Fire & Smoke Cleanup',
    slug: '/services/residential/cleanup-services/fire-smoke-cleanup/',
    shortDescription: 'Restoration for fire damage and smoke odors.',
    audience: 'RESIDENTIAL',
    category: 'CLEANUP',
    primaryKeyword: 'fire damage restoration',
    heroHeading: 'Fire & Smoke Damage Restoration',
    heroIntro: 'Professional fire restoration and smoke odor removal. We clean up soot, remove smoke smells, and restore your home.',
    heroVisualKey: 'fire-smoke',
    thumbVisualKey: 'fire-smoke',
    infographicType: 'MOLD_AIRFLOW',
    intro_whenToCall: 'Smoke and soot cause ongoing damage. Call us if:',
    whenToCall: [
      'Kitchen Fires: Grease fires that spread smoke to cabinets.',
      'Soot Residue: Black dust covering walls and furniture.',
      'Burnt Odor: Persistent smoke smell throughout the house.',
      'Water Damage: Flooding from fire hoses or sprinklers.',
      'Chemical Residue: Powder from fire extinguishers.',
      'Structural Charring: Burnt beams or drywall.',
      'Ash Intrusion: Ash entering from nearby wildfires.',
      'Electrical Fires: Burnt wiring smells behind walls.',
      'Melting: Plastics or synthetics melted by heat.',
      'HVAC Contamination: Smoke pulled into air ducts.',
      'Textile Damage: Clothes and curtains smell like smoke.',
      'Board-Up Needs: Windows or doors broken by fire department.'
    ],
    intro_whatWeDo: 'We restore the structure and the air quality.',
    whatWeDo: [
      'Emergency Board-Up: Securing windows and doors immediately.',
      'Soot Removal: Using chemical sponges to lift acidic soot.',
      'Air Scrubbing: HEPA filtration to capture airborne particles.',
      'Odor Neutralization: Hydroxyl and ozone treatments.',
      'Water Extraction: Drying out water from firefighting.',
      'Demolition: Removing charred unsalvageable materials.',
      'Content Cleaning: Packing out and cleaning belongings.',
      'Duct Cleaning: Removing soot from the HVAC system.',
      'Structural Sealing: Encapsulating framing to lock in odor.',
      'Textile Restoration: Specialized washing for clothes.',
      'Corrosion Control: Cleaning electronics to prevent damage.',
      'Reconstruction: Rebuilding the home to pre-loss condition.'
    ],
    whatToExpect: {
      timeline: 'Fire restoration takes weeks to months depending on severity. Odor removal is the first major step.',
      arrival: 'We secure the site first (board-up). Then we assess safety and begin stabilizing the environment.',
      daily: 'Cleaning soot is detailed work. Crews will wipe every inch of the affected area.',
      noise: 'Air scrubbers run 24/7. Demolition phases will be noisy during the day.'
    },
    intro_safety: 'Soot is acidic and harmful. Protect your health.',
    safety: {
      head: 'Fire Damage Safety',
      items: [
        'Do Not Enter: Wait for the Fire Marshal\'s "all clear".',
        'Avoid Touching: Soot smears and sets into fabrics if touched.',
        'Wear Masks: N95 masks protect lungs from ash particles.',
        'Food Safety: Discard food exposed to heat or smoke.',
        'Electrical: Do not use appliances until checked.',
        'Pets: Keep pets away from soot and debris.',
        'Secure Home: Board up broken windows to prevent theft.',
        'Call Insurance: Report the loss immediately.',
        'Turn Off HVAC: Prevent spreading soot through ducts.',
        'Move Valuables: Secure cash, jewelry, and documents.'
      ],
      kidsPets: 'Keep kids and pets out. Soot contains carcinogens and air quality is often unsafe.'
    },
    intro_scenarios: 'From small kitchen fires to whole-home losses.',
    scenarios: [
      'Grease Fires: Stovetop fires damaging kitchens.',
      'Electrical Shorts: Fires starting inside walls.',
      'Dryer Vents: Lint ignition causing laundry room fires.',
      'Candle Accidents: Small fires in bedrooms or living rooms.',
      'Chimney Puff-backs: Soot blowing back into the house.',
      'Space Heaters: Curtains or furniture igniting.',
      'Garage Fires: Chemical or fuel fires spreading to home.',
      'Lightning Strikes: Roof or attic fires.',
      'Arson/Vandalism: Intentional damage cleanup.',
      'Smoke Damage: Smoke from a neighbor\'s fire entering.'
    ],
    saveVsRemove: {
      save: [
        'Structural framing (if char is shallow)',
        'Glass and metal items',
        'Hardwood furniture (often cleanable)',
        'Clothing (specialized wash)'
      ],
      remove: [
        'Charred wood',
        'Insulation (holds odor)',
        'Exposed food and cosmetics',
        'Melted plastics'
      ]
    },
    faqs: [
      { question: "Can I clean soot myself?", answer: "No, household cleaners often smear soot and make it permanent." },
      { question: "Will the smell go away?", answer: "Yes, with professional source removal and deodorization." },
      { question: "Do you clean clothes?", answer: "We partner with textile specialists to restore smoke-damaged clothes." },
      { question: "Is it safe to stay?", answer: "Usually no, due to air quality and lack of utilities." },
      { question: "Do you handle reconstruction?", answer: "Yes, we rebuild after the cleanup is done." },
      { question: "What about water damage?", answer: "We dry the water from fire hoses first." },
      { question: "How long does it take?", answer: "It varies significantly based on the extent of the fire." },
      { question: "Can electronics be saved?", answer: "Sometimes, if cleaned quickly to stop corrosion." },
      { question: "What is a puff-back?", answer: "Furnace malfunction shooting soot through the house." },
      { question: "Do you bill insurance?", answer: "Yes, we work directly with your adjuster." }
    ],
    relatedSearchTerms: ['fire restoration', 'smoke cleanup', 'soot removal', 'fire damage repair', 'odor removal', 'smoke damage repair', 'fire cleanup company', 'soot cleaning services', 'fire water damage', 'emergency fire restoration']
  },

  // 4. Contents Cleaning & Pack-out
  {
    id: 'res-content',
    title: 'Contents Cleaning',
    slug: '/services/residential/cleanup-services/contents-cleaning-packout/',
    shortDescription: 'Cleaning and storage for damaged personal items.',
    audience: 'RESIDENTIAL',
    category: 'CLEANUP',
    primaryKeyword: 'contents cleaning',
    heroHeading: 'Contents Cleaning & Pack-Out',
    heroIntro: 'We restore your life, not just your walls. Professional packing, cleaning, and storage for items damaged by water, mold, or fire.',
    heroVisualKey: 'contents-packout',
    thumbVisualKey: 'contents-flow',
    infographicType: 'MOLD_AIRFLOW', // Placeholder for process
    intro_whenToCall: 'When your belongings are at risk or in the way of repairs.',
    whenToCall: [
      'Major Structural Repairs: Flooring or drywall needs total replacement.',
      'Soot Contamination: Furniture and decor are covered in smoke residue.',
      'Mold Growth: Items have visible mold or musty odors.',
      'Standing Water: Furniture is sitting in a flooded room.',
      'Security Concerns: The home is open to the elements.',
      'Need for Cleaning: Items need specialized ultrasonic or chemical cleaning.',
      'Storage Needs: You need a place to put things during a remodel.',
      'Inventory Required: Insurance needs a list of damaged items.',
      'Textile Restoration: Clothes and linens smell like smoke.',
      'Electronics Recovery: TV or computers exposed to humidity.',
      'Document Drying: Important papers are wet.',
      'Hoarding Cleanup: Organizing and clearing excessive clutter.'
    ],
    intro_whatWeDo: 'We carefully inventory, pack, clean, and store your items.',
    whatWeDo: [
      'Digital Inventory: We photo-document every item we handle.',
      'Professional Packing: Using boxes and bubble wrap to prevent damage.',
      'Transport: Moving items to our secure, climate-controlled facility.',
      'Ultrasonic Cleaning: Deep cleaning for hard items like collectibles.',
      'Ozone Treatment: Deodorizing furniture and soft goods.',
      'Textile Cleaning: Coordinating dry cleaning for clothes.',
      'Electronics Cleaning: Specialized cleaning for circuit boards.',
      'Rug Cleaning: Immersion cleaning for area rugs.',
      'Secure Storage: Keeping items safe until your home is ready.',
      'Non-Salvageable List: Documenting total loss items for insurance.',
      'Pack-Back: Delivering and placing furniture back in your home.',
      'White Glove Service: Handling high-value antiques with care.'
    ],
    whatToExpect: {
      timeline: 'Pack-out takes 1-3 days. Cleaning happens while your home is repaired. Items stay in storage until you are ready.',
      arrival: 'We arrive with boxes and wrapping materials. We scan and tag everything before it leaves the house.',
      daily: 'You will receive an inventory link. You do not need to be present for the cleaning at our facility.',
      noise: 'Packing is quiet. Moving truck loading is standard moving noise.'
    },
    intro_safety: 'Protect your belongings from further damage or theft.',
    safety: {
      head: 'Contents Safety Checklist',
      items: [
        'Secure Valuables: Keep cash, jewelry, and firearms with you.',
        'Medications: Keep immediate prescriptions separate.',
        'Important Docs: Keep passports and birth certificates handy.',
        'Don\'t Clean Soot: Wiping soot can permanently stain items.',
        'Check Electronics: Do not turn on wet devices.',
        'Clear Pathways: Help movers navigate safely.',
        'Food Disposal: Throw away open food exposed to smoke.',
        'Pet Safety: Keep pets crated during the move.',
        'Inspect Items: Point out fragile items to the crew.',
        'Review Inventory: Check the list before the truck leaves.'
      ],
      kidsPets: 'Moving involves heavy lifting and open doors. Keep kids and pets safe in a separate room or off-site.'
    },
    intro_scenarios: 'We protect items from every type of disaster.',
    scenarios: [
      'Whole Home Fire: Full pack-out for smoke cleaning.',
      'Basement Flood: Moving stored items to save them from water.',
      'Mold Remediation: Clearing a room to build containment.',
      'Roof Collapse: Removing items from a dangerous structure.',
      'Kitchen Fire: Cleaning dishes and appliances of soot.',
      'Carpet Replacement: Moving furniture for new flooring.',
      'Estate Cleanup: Sorting items in a cluttered home.',
      'Sewage Backup: Disposing of contaminated soft goods.',
      'Document Recovery: Freeze-drying wet legal papers.',
      'Rug Restoration: Cleaning expensive oriental rugs.'
    ],
    saveVsRemove: {
      save: [
        'Solid wood furniture',
        'Glass and ceramics',
        'Most clothing (after wash)',
        'Electronics (if not shorted)'
      ],
      remove: [
        'Mattresses soaked in water',
        'Particle board furniture',
        'Food and cosmetics',
        'Paper items with mold'
      ]
    },
    faqs: [
      { question: "Where do my things go?", answer: "To our secure, climate-controlled warehouse." },
      { question: "Will insurance pay?", answer: "Yes, content manipulation is usually covered." },
      { question: "Can you clean smoke smell?", answer: "Yes, we use ozone and specialized washing." },
      { question: "How do you track items?", answer: "We use a digital barcode inventory system." },
      { question: "What if something breaks?", answer: "We are insured for handling and transport." },
      { question: "Can I access my items?", answer: "Yes, with 24-48 hours notice." },
      { question: "Do you pack everything?", answer: "Yes, we prefer to pack to ensure safety." },
      { question: "Can you save wet photos?", answer: "Sometimes, if frozen and dried immediately." },
      { question: "Do you move it back?", answer: "Yes, we return items when the home is ready." },
      { question: "What about heavy furniture?", answer: "We have crews for heavy lifting." }
    ],
    relatedSearchTerms: ['pack out service', 'fire content cleaning', 'furniture restoration', 'smoke damage cleaning', 'storage for restoration', 'content restoration', 'pack out companies', 'smoke damaged clothes cleaning', 'water damaged furniture repair', 'document freeze drying']
  },

  // 5. Basement Flooding
  {
    id: 'res-base',
    title: 'Basement Flooding',
    slug: '/services/residential/specialty-services/basement-flooding/',
    shortDescription: 'Specialized solutions for flooded basements.',
    audience: 'RESIDENTIAL',
    category: 'SPECIALTY',
    primaryKeyword: 'basement flooding cleanup',
    heroHeading: 'Basement Flooding Cleanup',
    heroIntro: 'Basements flood fast. We extract water, dry the structure, and prevent mold growth in Northern Virginia basements.',
    heroVisualKey: 'basement-flooding',
    thumbVisualKey: 'basement-extract',
    infographicType: 'FLOOD_TIMELINE',
    intro_whenToCall: 'Basement water is a major mold risk. Call if:',
    whenToCall: [
      'Standing Water: Puddles or deep water on the basement floor.',
      'Sump Pump Failure: Pump stopped working during rain.',
      'Sewage Backup: Drains backing up with dark water.',
      'Wet Carpet: Squishy carpet or padding.',
      'Wall Leaks: Water seeping through foundation cracks.',
      'Musty Smells: Damp odors indicating mold growth.',
      'Mold Growth: Visible mold on baseboards or drywall.',
      'Window Well Leaks: Water entering through basement windows.',
      'Condensation: Sweating pipes or walls.',
      'Water Heater Burst: Flooding the utility area.',
      'Storage Damage: Boxes on the floor getting wet.',
      'Power Outage: Sump pump failed due to no power.'
    ],
    intro_whatWeDo: 'We pump out, clean up, and dry out.',
    whatWeDo: [
      'Water Extraction: Pumping out deep water and vacuuming floors.',
      'Carpet Removal: Removing wet pad and unsalvageable carpet.',
      'Debris Removal: Clearing out wet boxes and trash.',
      'Sump Pump Check: Verifying pump operation.',
      'Sanitization: Cleaning concrete and walls with antimicrobials.',
      'Structural Drying: Using high-capacity dehumidifiers.',
      'Heat Drying: Using heat for cooler basement environments.',
      'Content Moving: Lifting furniture onto blocks.',
      'Moisture Mapping: Finding hidden wet spots in walls.',
      'Sewage Cleanup: Specialized cleaning for backups.',
      'Mold Prevention: Treating surfaces to stop growth.',
      'Final Check: Ensuring the basement is bone dry.'
    ],
    whatToExpect: {
      timeline: 'Pump-out is fast. Drying takes 3-5 days. Basements are cool, so drying can be slower than upstairs.',
      arrival: 'We arrive ready to pump. We need access to the basement and power.',
      daily: 'We check equipment daily. Concrete holds water, so it may take time to verify dry.',
      noise: 'Fans will run 24/7. It will be loud in the basement.'
    },
    intro_safety: 'Basements have unique electrical and slip hazards.',
    safety: {
      head: 'Basement Flood Safety',
      items: [
        'Electrical Hazard: Do not step in water if outlets are submerged.',
        'Gas Leaks: Check for gas smell near appliances.',
        'Sewage Risk: Treat all backups as toxic.',
        'Slip Hazard: Wet concrete and stairs are slippery.',
        'Chemicals: Watch for floating cleaning supplies.',
        'Structural Risk: Watch for bowing walls.',
        'Protect Items: Move valuables higher up.',
        'Boots: Wear rubber boots if entering.',
        'Ventilation: Open windows if safe.',
        'Call Pros: Do not handle deep floods alone.'
      ],
      kidsPets: 'Keep the basement door locked. Flooded basements are dangerous play areas.'
    },
    intro_scenarios: 'Common basement flooding causes.',
    scenarios: [
      'Sump Pump Failure: The #1 cause of basement floods.',
      'Heavy Rain: Storm water overwhelming drainage.',
      'Sewer Backup: Municipal line clogs.',
      'Foundation Cracks: Seepage through walls.',
      'Water Heater Leak: Tank rupture.',
      'Washing Machine Hose: Burst supply line.',
      'Window Well Overflow: Clogged drains outside.',
      'Grading Issues: Water flowing toward the house.',
      'Pipe Burst: Ceiling pipes leaking down.',
      'Hydrostatic Pressure: Water pushing up through floor.'
    ],
    saveVsRemove: {
      save: [
        'Concrete floors',
        'Structural posts',
        'Plastic storage bins',
        'Furnace (if not submerged)'
      ],
      remove: [
        'Carpet padding (always)',
        'Cardboard boxes',
        'Drywall (bottom 2ft)',
        'Baseboards (MDF)'
      ]
    },
    faqs: [
      { question: "Why did my sump pump fail?", answer: "Power outage, age, or switch failure." },
      { question: "Is basement water covered?", answer: "Depends on policy (Flood vs. Water Backup)." },
      { question: "Can I dry it myself?", answer: "Shop vacs aren't enough for structural drying." },
      { question: "Will mold grow?", answer: "Yes, basements are prime mold territory." },
      { question: "Do you waterproof?", answer: "We do cleanup; we refer for waterproofing." },
      { question: "How to prevent this?", answer: "Battery backup pumps and gutter cleaning." },
      { question: "Is sewage dangerous?", answer: "Yes, it contains harmful bacteria." },
      { question: "Can you save carpet?", answer: "Only if water was clean; pad is usually tossed." },
      { question: "How much to pump out?", answer: "Varies by gallon/depth. We give estimates." },
      { question: "Do you clean the mess?", answer: "Yes, we remove mud and debris." }
    ],
    relatedSearchTerms: ['basement pump out', 'sump pump failure', 'flooded basement cleanup', 'sewage backup', 'wet basement drying', 'flooded basement help', 'sump pump overflow cleanup', 'basement water removal', 'wet basement solutions', 'sewage in basement cleanup']
  },

  // 6. Crawl Space Drying
  {
    id: 'res-crawl',
    title: 'Crawl Space Drying',
    slug: '/services/residential/specialty-services/crawl-space-drying/',
    shortDescription: 'Moisture control and drying for crawl spaces.',
    audience: 'RESIDENTIAL',
    category: 'SPECIALTY',
    primaryKeyword: 'crawl space drying',
    heroHeading: 'Crawl Space Drying & Cleanup',
    heroIntro: 'A wet crawl space rots your home from below. We extract water, remove wet insulation, and dry the structure.',
    heroVisualKey: 'crawl-space',
    thumbVisualKey: 'crawl-equipment',
    infographicType: 'MOLD_AIRFLOW',
    intro_whenToCall: 'Crawl space issues often go unnoticed until they smell. Call if:',
    whenToCall: [
      'Standing Water: Pools of water on the plastic or dirt.',
      'Falling Insulation: Pink insulation hanging from joists.',
      'Musty Odors: Smells coming up through floor vents.',
      'Cupping Floors: Hardwood above is warping.',
      'Pest Infestation: Bugs or rodents attracted to moisture.',
      'Mold Growth: White or green fuzz on wood beams.',
      'High Humidity: The house feels sticky or damp.',
      'Sweating Ducts: Condensation on HVAC lines.',
      'Rotting Wood: Soft spots in the subfloor.',
      'Pipe Leaks: Plumbing breaks under the house.',
      'Sewage Smell: Waste line leaks.',
      'Vapor Barrier Issues: Torn or missing ground cover.'
    ],
    intro_whatWeDo: 'We turn a damp, dirty space into a dry, clean one.',
    whatWeDo: [
      'Water Extraction: Pumping out puddles and standing water.',
      'Insulation Removal: Bagging and removing wet fiberglass.',
      'Debris Removal: Cleaning out trash and old plastic.',
      'Wood Cleaning: Scrubbing mold/fungus from joists.',
      'Sanitization: Spraying antimicrobials on soil and wood.',
      'Structural Drying: Using fans and dehumidifiers.',
      'Vapor Barrier: Installing new plastic ground cover.',
      'Vent Sealing: Closing vents if encapsulating.',
      'Dehumidifier Install: Setting up permanent drying units.',
      'Drainage Check: Ensuring water flows away.',
      'Sewage Cleanup: Removing contaminated soil.',
      'Moisture Verification: Checking wood moisture content.'
    ],
    whatToExpect: {
      timeline: 'Cleanup takes 1-2 days. Drying takes 3-7 days due to poor airflow.',
      arrival: 'We need access to the hatch. We wear protective suits.',
      daily: 'We monitor remotely or visit daily. It is a dirty job, but we keep your house clean.',
      noise: 'Fans under the floor create a hum.'
    },
    intro_safety: 'Crawl spaces are confined spaces with hazards.',
    safety: {
      head: 'Crawl Space Hazards',
      items: [
        'Electrical Shock: Wires in water.',
        'Pests: Spiders, snakes, and raccoons.',
        'Mold Spores: High concentration in small space.',
        'Sewage: Biohazard risk.',
        'Structural Collapse: Rotted beams.',
        'Chemicals: Old pesticides stored under house.',
        'Nails: Sharp objects in wood/dirt.',
        'Heat Stress: Hot in summer.',
        'Confined Space: Hard to exit quickly.',
        'Asbestos: Old pipe insulation.'
      ],
      kidsPets: 'Never let kids play in the crawl space. Lock the hatch.'
    },
    intro_scenarios: 'Why crawl spaces get wet.',
    scenarios: [
      'Burst Pipes: Plumbing leaks spraying water.',
      'Groundwater: Rising water table.',
      'Open Vents: Humid summer air condensing.',
      'Drainage Issues: Rain flowing toward foundation.',
      'Sewage Leaks: Broken waste lines.',
      'HVAC Leaks: Condensate line failure.',
      'Dryer Vents: Venting moisture under the house.',
      'No Vapor Barrier: Moisture rising from soil.',
      'Flood Vents: Stuck open allowing rain in.',
      'Gutters: Dumping water at foundation.'
    ],
    saveVsRemove: {
      save: [
        'Structural wood (if not rotted)',
        'Ductwork (metal)',
        'Wiring (if safe)'
      ],
      remove: [
        'Wet fiberglass insulation',
        'Contaminated soil',
        'Old vapor barrier',
        'Cardboard/debris'
      ]
    },
    faqs: [
      { question: "Why does it smell?", answer: "Mold and bacteria growing in the dark, damp space." },
      { question: "Do I need insulation?", answer: "Yes, but only after the wood is dry." },
      { question: "What is encapsulation?", answer: "Sealing the crawl space completely to control moisture." },
      { question: "Should I open vents?", answer: "Usually no in our climate; it lets humidity in." },
      { question: "How to dry dirt?", answer: "We don't; we cover it with plastic to stop evaporation." },
      { question: "Is mold dangerous?", answer: "Yes, spores travel up into the house." },
      { question: "Cost to clean?", answer: "Varies by size and contamination level." },
      { question: "Do you remove sewage?", answer: "Yes, we remove the top layer of soil." },
      { question: "How long to dry wood?", answer: "Until it reaches <16% moisture content." },
      { question: "Do you install pumps?", answer: "Yes, we can install sump pumps." }
    ],
    relatedSearchTerms: ['crawl space cleaning', 'wet insulation removal', 'crawl space dehumidifier', 'mold under house', 'vapor barrier installation', 'crawl space water removal', 'wet crawl space cleanup', 'crawl space encapsulation near me', 'mold in crawl space', 'crawl space drying']
  },

  // 7. Hardwood Floor Drying
  {
    id: 'res-floor',
    title: 'Hardwood Floor Drying',
    slug: '/services/residential/specialty-services/hardwood-floor-drying/',
    shortDescription: 'Save wet hardwood floors with injection drying.',
    audience: 'RESIDENTIAL',
    category: 'SPECIALTY',
    primaryKeyword: 'hardwood floor drying',
    heroHeading: 'Hardwood Floor Drying',
    heroIntro: 'Don’t replace your floors yet. We use advanced injection mats to draw moisture out and save your hardwood.',
    heroVisualKey: 'hardwood-drying',
    thumbVisualKey: 'floor-mat-system',
    infographicType: 'DRYING_TREND',
    intro_whenToCall: 'Hardwood reacts quickly to water. Call immediately if:',
    whenToCall: [
      'Cupping: Edges of boards are higher than the center.',
      'Spills: Large spill sitting for hours.',
      'Squishy Sound: Water squirts up when you step.',
      'Staining: Dark spots appearing in the grain.',
      'Finish Issues: Polyurethane peeling or bubbling.',
      'Buckling: Boards lifting off the subfloor.',
      'Leak Detection: Fridge or dishwasher leaked.',
      'Wet Rugs: Damp rug left on floor.',
      'Baseboard Damage: Wet trim near the floor.',
      'Mold: Growth between boards.',
      'Odor: Musty smell from the floor.',
      'Insurance Claim: Need to attempt salvage.'
    ],
    intro_whatWeDo: 'We use specialty equipment to dry from the bottom up.',
    whatWeDo: [
      'Surface Extraction: Vacuuming up standing water.',
      'Moisture Mapping: Identifying the wettest zones.',
      'Mat System: Installing vacuum mats (Injectidry).',
      'Suction Drying: Pulling moisture through the flutes.',
      'Dehumidification: Drying the air to aid evaporation.',
      'Tenting: Creating a drying chamber with plastic.',
      'Subfloor Drying: Drying from the basement below.',
      'Monitoring: Checking moisture content daily.',
      'Acclimatization: Getting wood to equilibrium.',
      'Evaluation: Determining if refinishing is needed.',
      'Documentation: Recording success for insurance.',
      'Furniture Moving: Clearing the area for mats.'
    ],
    whatToExpect: {
      timeline: 'Hardwood drying is slow. It takes 5-10 days to dry without cracking.',
      arrival: 'We assess salvageability immediately. If saveable, we set mats.',
      daily: 'We adjust mats and check readings daily. The floor may look worse briefly before flattening.',
      noise: 'The injection machine is like a loud vacuum running 24/7.'
    },
    intro_safety: 'Mats and hoses create a tripping hazard.',
    safety: {
      head: 'Floor Drying Safety',
      items: [
        'Trip Hazard: Watch out for hoses and mats.',
        'Do Not Walk: Avoid walking on the mats.',
        'Keep Running: Do not turn off equipment.',
        'Pets: Keep pets away from chewing hoses.',
        'Slippery: Floors near mats may be slick.',
        'Heat: Room will get warm.',
        'Noise: Continuous loud fan noise.',
        'Furniture: Do not move heavy items back yet.',
        'Tape: Do not peel up the seal tape.',
        'Electrical: Ensure dedicated power circuit.'
      ],
      kidsPets: 'Keep the room blocked off. The setup is delicate and hazardous for play.'
    },
    intro_scenarios: 'How hardwood gets wet.',
    scenarios: [
      'Dishwasher Leak: Slow leak under cabinets.',
      'Fridge Line: Ice maker line burst.',
      'Sink Overflow: Kitchen sink left running.',
      'Storm Door: Rain blowing under door.',
      'Planters: Overwatered plants on floor.',
      'Radiator Leak: Steam pipe burst.',
      'Toilet Overflow: Water running into hallway.',
      'Subfloor Moisture: Wet basement affecting floor above.',
      'Spills: Large drink or bucket spills.',
      'Fish Tank: Tank leak or break.'
    ],
    saveVsRemove: {
      save: [
        'Solid hardwood (Oak, Maple)',
        'Engineered (sometimes)',
        'Historic floors',
        'Slightly cupped floors'
      ],
      remove: [
        'Laminate (always)',
        'Buckled wood (detached)',
        'Moldy wood',
        'Crowned floors'
      ]
    },
    faqs: [
      { question: "Will cupping go away?", answer: "Usually yes, once moisture content equalizes." },
      { question: "How long does it take?", answer: "7-10 days typically." },
      { question: "Can you save laminate?", answer: "No, it swells permanently." },
      { question: "Do I need to refinish?", answer: "Maybe, but drying saves the wood itself." },
      { question: "Is it cheaper to dry?", answer: "Yes, much cheaper than replacement." },
      { question: "What is the mat system?", answer: "It vacuums moisture out of the wood." },
      { question: "Can I walk on it?", answer: "No, avoid the mats." },
      { question: "Will it crack?", answer: "We monitor closely to prevent checking." },
      { question: "Do you move furniture?", answer: "Yes, we clear the wet area." },
      { question: "Does insurance cover this?", answer: "Yes, they prefer saving over replacing." }
    ],
    relatedSearchTerms: ['wet hardwood repair', 'floor drying mats', 'cupped floor fix', 'water damage wood floor', 'hardwood restoration', 'hardwood floor water damage repair', 'drying wood floors', 'cupped wood floor repair', 'water damaged floorboards', 'floor drying equipment rental']
  },

  // 8. Roof Leak Water Damage
  {
    id: 'res-roof',
    title: 'Roof Leak Water Damage',
    slug: '/services/residential/specialty-services/roof-leak-water-damage/',
    shortDescription: 'Interior restoration from roof leaks.',
    audience: 'RESIDENTIAL',
    category: 'SPECIALTY',
    primaryKeyword: 'roof leak water damage',
    heroHeading: 'Roof Leak Water Damage',
    heroIntro: 'A leaking roof destroys insulation and ceilings. We stop the water, dry the attic, and repair the interior damage.',
    heroVisualKey: 'roof-leak',
    thumbVisualKey: 'roof-source-id',
    infographicType: 'STRUCTURAL_DRYING',
    intro_whenToCall: 'Ceiling stains mean water is pooling above. Call if:',
    whenToCall: [
      'Water Stains: Brown circles on the ceiling.',
      'Sagging Drywall: Ceiling bubbling or bowing down.',
      'Active Drips: Water coming from lights or vents.',
      'Wet Insulation: Attic insulation is soaked.',
      'Mold in Attic: Fuzzy growth on sheathing.',
      'Peeling Paint: Paint blistering on walls.',
      'Musty Smell: Damp odor in upper rooms.',
      'Tree Damage: Branch through the roof.',
      'Missing Shingles: Visible roof damage.',
      'Ice Dams: Winter leaks at the eaves.',
      'Chimney Leaks: Water running down fireplace.',
      'Storm Damage: Sudden leak during rain.'
    ],
    intro_whatWeDo: 'We handle the water inside and tarp the outside.',
    whatWeDo: [
      'Roof Tarping: Emergency cover to stop the rain.',
      'Attic Inspection: Checking insulation and wood.',
      'Water Extraction: Removing water from ceiling/floor.',
      'Insulation Removal: Bagging wet fiberglass.',
      'Demolition: Removing unsafe sagging drywall.',
      'Drying: Drying framing and sheathing.',
      'Antimicrobial: Treating wood to stop mold.',
      'Protection: Covering furniture and floors.',
      'Moisture Checks: Verifying attic is dry.',
      'Ventilation: Restoring airflow.',
      'Documentation: Photos for insurance.',
      'Referral: Coordinating permanent roof repair.'
    ],
    whatToExpect: {
      timeline: 'Emergency tarping Day 1. Drying 3-5 days. Repair follows.',
      arrival: 'We check the roof and the interior. We protect floors immediately.',
      daily: 'We monitor attic drying. It can be slow in winter.',
      noise: 'Fans in the attic can vibrate the ceiling.'
    },
    intro_safety: 'Collapsing ceilings are dangerous.',
    safety: {
      head: 'Roof Leak Safety',
      items: [
        'Collapse Risk: Do not stand under sagging bubbles.',
        'Bucket: Catch the water to save floors.',
        'Poke Hole: Release water pressure (if safe).',
        'Electrical: Turn off lights if wet.',
        'Roof Safety: Do not climb on wet roof.',
        'Slip Hazard: Wet attic joists.',
        'Debris: Watch for falling plaster.',
        'Mold: Wear mask in attic.',
        'Protect Items: Move furniture away.',
        'Call Pros: Do not ignore leaks.'
      ],
      kidsPets: 'Keep them out. Ceilings fall suddenly.'
    },
    intro_scenarios: 'How roofs leak.',
    scenarios: [
      'Storm Damage: Wind blowing off shingles.',
      'Tree Impact: Punctures from branches.',
      'Ice Dams: Water backing up under shingles.',
      'Flashing Failure: Leaks around chimneys/vents.',
      'Age: Old shingles cracking.',
      'Gutters: Clogged gutters backing up.',
      'Skylights: Seal failure.',
      'Vent Boots: Rubber seals cracking.',
      'Condensate: HVAC leak in attic.',
      'Solar Panels: Installation leaks.'
    ],
    saveVsRemove: {
      save: [
        'Roof trusses',
        'Attic sheathing (usually)',
        'Light fixtures (sometimes)',
        'Hardwood below (if protected)'
      ],
      remove: [
        'Wet blown-in insulation',
        'Wet batt insulation',
        'Sagging drywall',
        'Ceiling tiles'
      ]
    },
    faqs: [
      { question: "Do you fix the roof?", answer: "We tarp it; a roofer does the permanent fix." },
      { question: "Must insulation go?", answer: "Yes, wet insulation causes rot and mold." },
      { question: "Can you save the ceiling?", answer: "Only if minor; sagging usually means replacement." },
      { question: "How much for a tarp?", answer: "Covered by insurance as mitigation." },
      { question: "Will the stain return?", answer: "Not if dried and primed properly." },
      { question: "Is mold growing?", answer: "Attics are high risk; we treat for it." },
      { question: "What is an ice dam?", answer: "Ice blocking water flow at the gutter." },
      { question: "Does insurance cover this?", answer: "Interior damage yes; old roof replacement no." },
      { question: "How long to dry?", answer: "3-5 days typically." },
      { question: "Can I catch the water?", answer: "Yes, please do!" }
    ],
    relatedSearchTerms: ['ceiling leak repair', 'emergency tarping', 'attic water damage', 'wet insulation', 'roof leak help', 'ceiling water damage repair', 'leaking roof repair', 'attic water damage cleanup', 'emergency roof tarping', 'roof leak detection']
  },

  // 9. Flood Cleanup
  {
    id: 'res-flood',
    title: 'Flood Cleanup',
    slug: '/services/residential/restoration-services/flood-cleanup/',
    shortDescription: 'Rapid cleanup after storm or basement flooding.',
    audience: 'RESIDENTIAL',
    category: 'RESTORATION',
    primaryKeyword: 'flood cleanup services',
    heroHeading: 'Flood Cleanup Services',
    heroIntro: 'Fast response for basement flooding, storm damage, and groundwater intrusion. We pump out water, remove mud, and sanitize safely.',
    heroVisualKey: 'flood-cleanup',
    thumbVisualKey: 'flood-timeline',
    infographicType: 'FLOOD_TIMELINE',
    intro_whenToCall: 'Rising water requires heavy equipment. Call if:',
    whenToCall: [
      'Basement Flooding: Inches or feet of water.',
      'Storm Surge: Water entering from outside.',
      'Sump Failure: Backup during rain.',
      'River Overflow: Creek or stream breaching banks.',
      'Mud/Silt: Mud entering the home.',
      'Sewage: Municipal line backup.',
      'Window Wells: Aquarium effect on windows.',
      'Flash Flood: Sudden water entry.',
      'Structural Risk: Walls bowing from pressure.',
      'Mold Risk: Wet materials sitting for days.',
      'Electrical Risk: Water near outlets.',
      'Insurance Claim: Need documentation.'
    ],
    intro_whatWeDo: 'We manage the chaos of flooding.',
    whatWeDo: [
      'Pumping: High-volume water removal.',
      'Extraction: Vacuuming remaining water.',
      'Muck Out: Shoveling mud and debris.',
      'Demolition: Removing wet drywall/carpet.',
      'Cleaning: Pressure washing concrete.',
      'Sanitizing: Killing bacteria from flood water.',
      'Drying: Industrial dehumidification.',
      'Content Moving: Saving salvageable items.',
      'Documentation: Listing damage for FEMA/Insurance.',
      'Mold Prevention: Spraying antimicrobials.',
      'Odor Control: Removing flood smells.',
      'Final Clean: Preparing for rebuild.'
    ],
    whatToExpect: {
      timeline: 'Pumping is fast. Drying takes 3-7 days. Rebuild follows.',
      arrival: 'We prioritize getting water out to stop damage.',
      daily: 'We monitor drying progress. Mud removal is messy but necessary.',
      noise: 'Generators and pumps are loud.'
    },
    intro_safety: 'Flood water is often contaminated.',
    safety: {
      head: 'Flood Safety',
      items: [
        'Electricity: Do not walk in water with power on.',
        'Contamination: Assume water has sewage/chemicals.',
        'Structural: Watch for collapse.',
        'Gas: Check for leaks.',
        'Wildlife: Snakes/rats seeking high ground.',
        'Boots: Wear protective gear.',
        'Wash Hands: Sanitize after contact.',
        'Photos: Document water level.',
        'Food: Toss anything touched by water.',
        'Evacuate: Leave if unsafe.'
      ],
      kidsPets: 'Keep them completely away. Flood water carries disease.'
    },
    intro_scenarios: 'Types of flooding we handle.',
    scenarios: [
      'Sump Pump Failure',
      'Heavy Rain / Flash Flood',
      'River / Creek Overflow',
      'Storm Drain Backup',
      'Foundation Seepage',
      'Window Well Leaks',
      'Hurricane Damage',
      'Driveway Runoff',
      'Sewage Backup',
      'Appliance Failure'
    ],
    saveVsRemove: {
      save: [
        'Concrete',
        'Solid wood (sometimes)',
        'Metal/Glass',
        'Upper drywall'
      ],
      remove: [
        'Carpet/Pad',
        'Laminate',
        'Lower drywall',
        'Fiberglass insulation'
      ]
    },
    faqs: [
      { 
        question: "What do professional flood cleanup services include?", 
        answer: "Our comprehensive flood cleanup services in Northern Virginia include immediate water extraction, mud and silt removal, heavy-duty cleaning of concrete and structural elements, hospital-grade sanitization to kill floodwater bacteria, and industrial structural drying. We also handle debris removal and content pack-out to protect your belongings." 
      },
      { 
        question: "How much does emergency basement flood cleanup cost?", 
        answer: "The cost varies based on the water depth, affected square footage, and contamination level (category 3 water). We provide a clear estimate after a rapid on-site assessment. Most sudden accidental flooding (like sump pump failure) is covered by insurance, and we bill them directly." 
      },
      { 
        question: "Does insurance cover flood cleanup services?", 
        answer: "It depends on the source. 'Rising water' (rain entering from outside) typically requires specific Flood Insurance. Sump pump failures or pipe bursts are often covered under standard Homeowners policies or 'Water Backup' riders. We help document the source to support your claim." 
      },
      { 
        question: "How quickly can you arrive for flood extraction?", 
        answer: "We offer 24/7 emergency response and typically arrive within 60 minutes in Arlington, Fairfax, and Ashburn. Fast extraction is critical to stopping mold growth and structural damage." 
      },
      { 
        question: "Is flood water dangerous to clean myself?", 
        answer: "Yes. Flood water is often 'Category 3' (Black Water), containing sewage, runoff chemicals, and bacteria. Without proper PPE and extraction equipment, you risk serious illness. Our teams wear Tyvek suits and use HEPA filtration to keep you safe." 
      },
      { 
        question: "Do you clean up mud and silt from basements?", 
        answer: "Yes. Storm flooding often leaves behind a layer of contaminated mud. We perform a 'muck-out' service to shovel and remove solid debris before pressure washing and sanitizing the concrete floor." 
      },
      { 
        question: "Will my basement get moldy after a flood?", 
        answer: "Mold can begin growing within 24-48 hours of flooding. Our professional flood cleanup services include the application of anti-microbial agents and the use of industrial dehumidifiers to bring moisture levels below the threshold for mold growth." 
      },
      { 
        question: "What is the difference between water mitigation and flood cleanup?", 
        answer: "Water mitigation focuses on stopping the damage (drying and stopping the leak). Flood cleanup is broader, often involving the removal of gross contaminants like mud, sewage, and river water, followed by deep cleaning and drying." 
      },
      { 
        question: "Can you save carpet after a basement flood?", 
        answer: "If the water source was rain or groundwater (flood water), carpet and padding are usually considered unsalvageable due to bacterial contamination. We recommend removal to ensure the safety of your home's air quality." 
      },
      { 
        question: "Do you provide reconstruction after flood cleanup?", 
        answer: "Yes. Flood Doctor is a full-service restoration company. After the cleanup and drying are complete, our reconstruction team can repair drywall, install new flooring, and paint, returning your basement to pre-loss condition." 
      }
    ],
    relatedSearchTerms: ['basement flood pump', 'flood cleanup crew', 'water removal service', 'storm damage repair', 'emergency flood help', 'emergency flood service', 'flood restoration company', 'basement flooding repair', 'water damage cleanup', 'storm flood cleanup']
  },

  // 10. Sewage Cleanup
  {
    id: 'res-sewage',
    title: 'Sewage Cleanup',
    slug: '/services/residential/cleanup-services/sewage-cleanup/',
    shortDescription: 'Safe removal and sanitization of sewage backups.',
    audience: 'RESIDENTIAL',
    category: 'CLEANUP',
    primaryKeyword: 'sewage cleanup',
    heroHeading: 'Sewage Backup Cleanup',
    heroIntro: 'Biohazard cleanup for toilet overflows and sewer backups. We protect your family from bacteria and viruses with hospital-grade sanitization.',
    heroVisualKey: 'sewage-cleanup',
    thumbVisualKey: 'sewage-containment',
    infographicType: 'SEWAGE_CONTAINMENT',
    intro_whenToCall: 'Sewage is a health emergency. Call if:',
    whenToCall: [
      'Toilet Overflow: Water with waste spilling out.',
      'Floor Drain Backup: Black water coming up.',
      'Septic Failure: Yard or basement flooded.',
      'Smell: Sulfur/Rotten egg odor.',
      'Pipe Break: Waste line rupture.',
      'Shower Backup: Water rising in tub.',
      'Multiple Clogs: Drains failing at once.',
      'Dark Water: Unknown water color.',
      'Health Risks: Family feeling ill.',
      'Biohazard: Cleanup needed.',
      'Crawl Space: Sewage under house.',
      'Apartment: Upstairs leak.'
    ],
    intro_whatWeDo: 'We clean, sanitize, and verify safety.',
    whatWeDo: [
      'Containment: Sealing off the area.',
      'Extraction: Removing solid and liquid waste.',
      'Removal: Bagging contaminated porous materials.',
      'Cleaning: Pressure washing/scrubbing surfaces.',
      'Disinfection: Using hospital-grade biocides.',
      'Air Scrubbing: Removing airborne pathogens.',
      'Drying: Drying the structure after cleaning.',
      'Verification: ATP testing for cleanliness.',
      'Odor Control: Neutralizing smells.',
      'Disposal: Biohazard waste disposal.',
      'Documentation: Proof of sanitation.',
      'Safety: PPE for all technicians.'
    ],
    whatToExpect: {
      timeline: 'Cleanup is 1-2 days. Drying follows. Priority is safety.',
      arrival: 'We wear hazmat suits (Tyvek). We seal the room immediately.',
      daily: 'Negative air machines run 24/7. You cannot enter the zone.',
      noise: 'Air scrubbers create a hum.'
    },
    intro_safety: 'Sewage contains Hepatitis, E. Coli, and Salmonella.',
    safety: {
      head: 'Sewage Safety',
      items: [
        'Do Not Touch: Avoid contact.',
        'Evacuate: Keep kids/pets away.',
        'Shut Off HVAC: Stop spreading germs.',
        'Do Not Vacuum: Aerosolizes bacteria.',
        'Wash Hands: Thoroughly if exposed.',
        'Discard Food: If near fumes.',
        'No Bleach: Can react with ammonia.',
        'Call Pros: Requires PPE.',
        'Boots: Wear rubber protection.',
        'Seal Door: Block fumes.'
      ],
      kidsPets: 'Strictly off-limits. High disease risk.'
    },
    intro_scenarios: 'Causes of sewage backups.',
    scenarios: [
      'Main Line Blockage',
      'Toilet Overflow',
      'Septic Tank Full',
      'Tree Roots in Pipe',
      'City Sewer Backup',
      'Broken Waste Pipe',
      'Clogged Drain',
      'Backflow Failure',
      'Ejector Pump Failure',
      'RV Dump Leak'
    ],
    saveVsRemove: {
      save: [
        'Tile/Concrete (sanitized)',
        'Metal/Glass',
        'Structural wood (sealed)'
      ],
      remove: [
        'Carpet/Pad (always)',
        'Cardboard',
        'Drywall (touched)',
        'Upholstery'
      ]
    },
    faqs: [
      { question: "Is it covered?", answer: "Often yes, with specific rider." },
      { question: "Can I clean it?", answer: "Not safely without PPE." },
      { question: "Save carpet?", answer: "No, category 3 water ruins it." },
      { question: "Smell persist?", answer: "No, we remove the source." },
      { question: "Furniture safe?", answer: "Hard furniture yes; soft no." },
      { question: "Safe to stay?", answer: "If contained, yes." },
      { question: "Chemicals used?", answer: "Botanical disinfectants." },
      { question: "Fix pipe?", answer: "Plumber needed for repair." },
      { question: "Certificate?", answer: "Yes, we provide one." },
      { question: "Health risks?", answer: "Yes, serious viruses." }
    ],
    relatedSearchTerms: ['sewage cleanup', 'biohazard cleaning', 'toilet overflow', 'septic backup', 'black water cleanup', 'sewage removal service', 'basement sewage cleanup', 'toilet backup cleanup', 'sewage spill disinfection', 'emergency sewage cleanup']
  },

  // 11. Mold Remediation
  {
    id: 'res-mold',
    title: 'Mold Remediation',
    slug: '/services/residential/cleanup-services/mold-remediation/',
    shortDescription: 'Certified mold inspection and removal services.',
    audience: 'RESIDENTIAL',
    category: 'CLEANUP',
    primaryKeyword: 'mold remediation',
    heroHeading: 'Mold Remediation Services',
    heroIntro: 'Licensed mold removal. We identify the source, contain the spores, and restore your healthy home environment.',
    heroVisualKey: 'mold-remediation',
    thumbVisualKey: 'mold-neg-air',
    infographicType: 'MOLD_AIRFLOW',
    intro_whenToCall: 'Mold needs removal, not just covering up. Call if:',
    whenToCall: [
      'Visible Growth: Black, green, or white spots.',
      'Musty Smell: Earthy odor in a room.',
      'Water History: Past leak not dried properly.',
      'Health Issues: Allergies or coughing.',
      'High Humidity: Damp basement/crawl space.',
      'Real Estate: Inspector found mold.',
      'Discoloration: Stains on walls/ceilings.',
      'Peeling Paint: Moisture behind paint.',
      'HVAC Smells: Moldy smell from vents.',
      'Condensation: Wet windows.',
      'Warped Wood: Moisture damage.',
      'Hidden Growth: Suspicion behind walls.'
    ],
    intro_whatWeDo: 'We follow IICRC S520 standards.',
    whatWeDo: [
      'Inspection: Finding the moisture source.',
      'Containment: Sealing the work area.',
      'Negative Air: Preventing spore spread.',
      'Removal: Bagging moldy materials.',
      'Cleaning: HEPA vacuuming surfaces.',
      'Sanding: Removing roots from wood.',
      'Sealing: Encapsulating treated wood.',
      'Air Scrubbing: Filtering the air.',
      'Duct Cleaning: Cleaning HVAC if needed.',
      'Verification: Passing clearance tests.',
      'Documentation: Proof of remediation.',
      'Prevention: Fixing the moisture source.'
    ],
    whatToExpect: {
      timeline: '3-5 days typically. Testing adds time.',
      arrival: 'We set up plastic walls immediately.',
      daily: 'Scrubbers run 24/7. Work is inside containment.',
      noise: 'Air machines sound like box fans.'
    },
    intro_safety: 'Mold spores are respiratory irritants.',
    safety: {
      head: 'Mold Safety',
      items: [
        'Do Not Disturb: Don\'t scrape it.',
        'No Bleach: It doesn\'t kill roots on wood.',
        'Close Door: Contain the room.',
        'HVAC Off: Don\'t spread spores.',
        'Wear Mask: N95 if entering.',
        'No Fans: Don\'t blow air on it.',
        'Remove Items: Clothes/toys if clean.',
        'Fix Leak: Stop the water.',
        'Call Pros: Proper removal needed.',
        'Health Check: See doctor for symptoms.'
      ],
      kidsPets: 'Keep them away. Spores trigger asthma.'
    },
    intro_scenarios: 'Where mold hides.',
    scenarios: [
      'Bathroom Vanity',
      'Attic Sheathing',
      'Crawl Space Joists',
      'Basement Walls',
      'Behind Kitchen Cabinets',
      'Window Sills',
      'Closet Walls',
      'HVAC Ducts',
      'Garage Ceiling',
      'Laundry Room'
    ],
    saveVsRemove: {
      save: [
        'Structural wood (cleaned)',
        'Glass/Metal',
        'Contents (HEPA cleaned)'
      ],
      remove: [
        'Moldy drywall',
        'Insulation',
        'Carpet with growth',
        'Ceiling tiles'
      ]
    },
    faqs: [
      { question: "Is black mold toxic?", answer: "Color doesn't determine toxicity; we treat all mold safely." },
      { question: "Can I paint over it?", answer: "No, it will eat through paint." },
      { question: "Does bleach work?", answer: "No, effective removal requires physical cleaning." },
      { question: "Cost?", answer: "Depends on scope; estimates provided." },
      { question: "Testing needed?", answer: "We recommend 3rd party testing." },
      { question: "Will it return?", answer: "Not if moisture source is fixed." },
      { question: "Move out?", answer: "Usually no, due to containment." },
      { question: "Negative pressure?", answer: "Keeps spores inside work zone." },
      { question: "Chemicals?", answer: "EPA-registered antimicrobials." },
      { question: "Clearance test?", answer: "Verifies safe air quality." }
    ],
    relatedSearchTerms: ['mold removal', 'black mold cleanup', 'attic mold', 'mold inspection', 'remediation company', 'mold remediation cost', 'mold removal near me', 'black mold treatment', 'attic mold removal', 'basement mold remediation']
  },

  // 12. Structural Drying
  {
    id: 'res-struct',
    title: 'Structural Drying',
    slug: '/services/residential/restoration-services/structural-drying/',
    shortDescription: 'Advanced drying techniques to save walls and floors.',
    audience: 'RESIDENTIAL',
    category: 'RESTORATION',
    primaryKeyword: 'structural drying',
    heroHeading: 'Structural Drying',
    heroIntro: 'Science-based drying to save drywall, subfloors, and framing without demolition.',
    heroVisualKey: 'structural-drying',
    thumbVisualKey: 'structural-drying',
    infographicType: 'STRUCTURAL_DRYING',
    intro_whenToCall: 'Call when you want to save materials rather than replace them.',
    whenToCall: [
      'Wet Walls: Moisture inside cavities.',
      'Hardwood Cupping: Floorboards warping.',
      'Cabinet Moisture: Water under islands.',
      'Concrete: Wet slab under flooring.',
      'Complex Leaks: Multi-layer floor systems.',
      'Historic Homes: Preserving plaster.',
      'Certificate Needed: Proof of drying.',
      'High Humidity: Lingering dampness.',
      'Tile Grout: Dark wet lines.',
      'Vinyl Lifting: Bubbles in floor.',
      'Wallpaper Peeling: Moisture behind paper.',
      'Insulation Wet: Behind brick/siding.'
    ],
    intro_whatWeDo: 'We use heat and airflow to dry difficult materials.',
    whatWeDo: [
      'Thermal Mapping: Finding wet zones.',
      'LGR Dehumidifiers: Deep moisture removal.',
      'Air Movement: High-velocity fans.',
      'Injection Drying: Drying inside walls.',
      'Mat Systems: Saving hardwood floors.',
      'Monitoring: Daily atmospheric checks.',
      'Verification: Proving it\'s dry.',
      'Documentation: Logs for insurance.',
      'Drilling: Unobtrusive venting holes.',
      'Toe-Kick Removal: Drying under cabinets.',
      'Adjustments: Optimizing equipment.',
      'Mapping: Final moisture map.'
    ],
    whatToExpect: {
      timeline: '3-7 days. Dense materials take longer.',
      arrival: 'We assess salvageability first.',
      daily: 'We adjust equipment daily based on readings.',
      noise: 'Loud fans running 24/7.'
    },
    intro_safety: 'Equipment gets warm and has cords.',
    safety: {
      head: 'Drying Safety',
      items: [
        'Don\'t Unplug: Delays process.',
        'Keep Closed: Maintain chamber.',
        'Watch Cords: Trip hazard.',
        'Empty Buckets: If not pumped.',
        'Breakers: Report trips.',
        'Airflow: Don\'t block fans.',
        'Kids: Keep away from intakes.',
        'Noise: Earplugs helps.',
        'Drain Line: Check for leaks.',
        'Thermostat: Keep as set.'
      ],
      kidsPets: 'Moving parts and heat. Keep away.'
    },
    intro_scenarios: 'Complex drying situations.',
    scenarios: [
      'Wet Insulation',
      'Hardwood Floors',
      'Under Cabinets',
      'Concrete Slab',
      'Attic Structure',
      'Plaster Walls',
      'Multi-layer Floor',
      'Crawl Space',
      'Built-ins',
      'Ceiling Cavity'
    ],
    saveVsRemove: {
      save: [
        'Hardwood (usually)',
        'Drywall (painted)',
        'Framing',
        'Concrete'
      ],
      remove: [
        'Vinyl (traps water)',
        'Exterior insulation',
        'Baseboards (MDF)'
      ]
    },
    faqs: [
      { question: "Why so many fans?", answer: "To evaporate moisture quickly." },
      { question: "Turn off at night?", answer: "No, drying must be continuous." },
      { question: "Bound water?", answer: "Moisture trapped deep in cells." },
      { question: "Electric bill?", answer: "Insurance usually covers it." },
      { question: "How do you know?", answer: "Meters verify dry standard." },
      { question: "Save insulation?", answer: "Usually not fiberglass." },
      { question: "Cut holes?", answer: "Small ones to inject air." },
      { question: "Desiccant?", answer: "Special low-dewpoint dryer." },
      { question: "Dry concrete?", answer: "Yes, takes time." },
      { question: "Heat drying?", answer: "Speeds up evaporation." }
    ],
    relatedSearchTerms: ['structural drying', 'wall drying', 'hardwood floor drying', 'dehumidifier rental', 'water restoration', 'structural drying services', 'drywall water damage repair', 'drying wet walls', 'water damage restoration process', 'fast drying techniques']
  },

  // 13. Storm Damage
  {
    id: 'res-storm',
    title: 'Storm Damage Restoration',
    slug: '/services/residential/restoration-services/storm-damage-restoration/',
    shortDescription: 'Recovery from severe weather and hurricane damage.',
    audience: 'RESIDENTIAL',
    category: 'RESTORATION',
    primaryKeyword: 'storm damage restoration',
    heroHeading: 'Storm Damage Restoration',
    heroIntro: 'Emergency storm response: board-ups, roof tarping, and water damage repair for Northern Virginia homes.',
    heroVisualKey: 'storm-damage',
    thumbVisualKey: 'storm-assessment',
    infographicType: 'FLOOD_TIMELINE',
    intro_whenToCall: 'Storms cause exterior breaches. Call if:',
    whenToCall: [
      'Tree on Roof: Structural damage.',
      'Siding Gone: Wind damage.',
      'Broken Windows: Debris impact.',
      'Roof Leaks: Rain entering attic.',
      'Basement Flood: Power outage/pump fail.',
      'Hail Damage: Roof/siding pocks.',
      'Board-Up: Security needed.',
      'Structural Shift: House movement.',
      'Power Lines: Downed nearby.',
      'Blocked Access: Debris in drive.',
      'Water Stains: Post-storm leaks.',
      'Gutter Failure: Water at foundation.'
    ],
    intro_whatWeDo: 'We secure the shell, then fix the inside.',
    whatWeDo: [
      'Board-Up: Securing windows/doors.',
      'Roof Tarping: Stopping rain entry.',
      'Water Extraction: Drying the interior.',
      'Debris Removal: Clearing trees/limbs.',
      'Assessment: Checking structure.',
      'Documentation: Photo evidence.',
      'Fencing: Security perimeter.',
      'Demolition: Removing unsafe parts.',
      'Sanitization: Cleaning storm water.',
      'Reconstruction: Repairs.',
      'Crane Service: Heavy lifting.',
      'Pack-Out: Protecting contents.'
    ],
    whatToExpect: {
      timeline: 'Emergency stabilization Day 1. Repairs follow insurance approval.',
      arrival: 'Safety first. We secure the exterior.',
      daily: 'Drying checks daily. Repairs scheduled.',
      noise: 'Chainsaws and hammers.'
    },
    intro_safety: 'Storm aftermath is hazardous.',
    safety: {
      head: 'Storm Safety',
      items: [
        'Power Lines: Stay away.',
        'Structure: Don\'t enter if unsafe.',
        'Glass: Watch for shards.',
        'Lighting: Use flashlights.',
        'Gas: Check leaks.',
        'Roof: Stay off.',
        'Kids: Keep inside.',
        'Floors: Slippery.',
        'Photos: Document safely.',
        'Valuables: Secure them.'
      ],
      kidsPets: 'Sharp debris everywhere. Keep them safe.'
    },
    intro_scenarios: 'Common storm issues.',
    scenarios: [
      'Tree through roof',
      'Shingles blown off',
      'Window shattered',
      'Siding ripped',
      'Attic flood',
      'Basement flood',
      'Fence down',
      'Hail damage',
      'Chimney collapse',
      'Garage door fail'
    ],
    saveVsRemove: {
      save: [
        'Framing (if intact)',
        'Concrete',
        'Siding (some)',
        'Contents (dry)'
      ],
      remove: [
        'Wet insulation',
        'Exposed drywall',
        'Broken glass',
        'Torn shingles'
      ]
    },
    faqs: [
      { question: "Insurance for tree?", answer: "Yes if it hits house." },
      { question: "Pay upfront?", answer: "Emergency mitigation billed to insurance." },
      { question: "Fix roof?", answer: "Yes, full repair." },
      { question: "Wide disaster?", answer: "We triage by severity." },
      { question: "Flood vs Storm?", answer: "Rain entry = storm. Rising water = flood." },
      { question: "Tarp duration?", answer: "Up to 90 days." },
      { question: "Stay home?", answer: "Depends on damage." },
      { question: "Debris removal?", answer: "Yes, we haul it." },
      { question: "Custom window?", answer: "Board up now, order replacement." },
      { question: "All insurance?", answer: "Yes, we work with all." }
    ],
    relatedSearchTerms: ['roof tarping', 'storm repair', 'tree removal', 'window board up', 'wind damage', 'storm damage repair near me', 'emergency tree removal', 'wind damage restoration', 'hail damage repair', 'storm cleanup services']
  },

  // 14. Burst Pipe Cleanup
  {
    id: 'res-burst',
    title: 'Burst Pipe Cleanup',
    slug: '/services/residential/restoration-services/burst-pipe-cleanup/',
    shortDescription: 'Immediate cleanup for frozen or burst plumbing pipes.',
    audience: 'RESIDENTIAL',
    category: 'RESTORATION',
    primaryKeyword: 'burst pipe cleanup',
    heroHeading: 'Burst Pipe Cleanup',
    heroIntro: 'Frozen or burst pipes flood homes in minutes. We stop the water, extract it, and dry your property fast.',
    heroVisualKey: 'burst-pipe',
    thumbVisualKey: 'burst-pipe',
    infographicType: 'DRYING_TREND',
    intro_whenToCall: 'High-pressure leaks cause massive damage fast. Call if:',
    whenToCall: [
      'Running Water: Sound behind walls.',
      'Spraying: Water from thawed pipe.',
      'Supply Line: Sink/Toilet hose break.',
      'Standing Water: Kitchen/Bath flood.',
      'Ceiling Sag: Water bubble.',
      'Soaked Carpet: Hallway flood.',
      'No Shutoff: Can\'t find valve.',
      'Pressure Drop: Sudden loss.',
      'Garage Flood: Pipe burst.',
      'Buckling Floor: Near radiator.',
      'Sprinkler: Accidental discharge.',
      'Dripping Lights: Water in fixture.'
    ],
    intro_whatWeDo: 'We mitigate the water damage.',
    whatWeDo: [
      'Shut Off: Helping stop water.',
      'Extraction: Vacuuming water.',
      'Access: Opening wall to dry.',
      'Drying: Dehumidifiers/Fans.',
      'Imaging: Tracing water path.',
      'Sanitizing: Cleaning area.',
      'Plumber Access: Exposing pipe.',
      'Documentation: For insurance.',
      'Monitoring: Daily checks.',
      'Pack-out: Saving furniture.',
      'Reconstruction: Fixing drywall.',
      'Safety: Ensuring dry home.'
    ],
    whatToExpect: {
      timeline: '3-5 days typically. Reconstruction follows.',
      arrival: 'Immediate extraction is priority.',
      daily: 'Daily moisture checks.',
      noise: 'Loud drying equipment.'
    },
    intro_safety: 'Water + Electric = Danger.',
    safety: {
      head: 'Burst Pipe Safety',
      items: [
        'Shut Off Water: Main valve.',
        'Electricity: Breakers off.',
        'Ceilings: Don\'t stand under.',
        'Electronics: Move them.',
        'No Vacuum: Shock risk.',
        'Slips: Watch step.',
        'Hot Water: Scald risk.',
        'Kids/Pets: Keep away.',
        'Faucets: Open to drain.',
        'Photos: Document it.'
      ],
      kidsPets: 'Keep them out. Slippery and dangerous.'
    },
    intro_scenarios: 'Common pipe failures.',
    scenarios: [
      'Frozen Pipe',
      'Washing Machine Hose',
      'Toilet Supply',
      'Fridge Line',
      'Water Heater',
      'Radiator',
      'Sprinkler',
      'Main Line',
      'Attic Pipe',
      'Hose Bib'
    ],
    saveVsRemove: {
      save: [
        'Framing',
        'Concrete',
        'Tile',
        'Solid Wood (maybe)'
      ],
      remove: [
        'Pad',
        'Wet Insulation',
        'Drywall',
        'Particle Board'
      ]
    },
    faqs: [
      { question: "Plumber first?", answer: "Call us to extract; we help coord plumber." },
      { question: "Covered?", answer: "Yes, sudden bursts usually covered." },
      { question: "Turn off water?", answer: "Main valve in basement." },
      { question: "Save floors?", answer: "If dried fast, yes." },
      { question: "Why burst?", answer: "Freeze, age, pressure." },
      { question: "How long?", answer: "3-5 days drying." },
      { question: "Fix drywall?", answer: "Yes, we repair." },
      { question: "Water dangerous?", answer: "Clean initially, degrades fast." },
      { question: "Slab leak?", answer: "We dry; plumber fixes." },
      { question: "Use water?", answer: "Keep main off until fixed." }
    ],
    relatedSearchTerms: ['frozen pipe cleanup', 'water shutoff', 'pipe leak repair', 'flooded kitchen', 'burst pipe help', 'frozen pipe burst cleanup', 'water pipe burst repair', 'emergency plumber water damage', 'burst pipe insurance claim', 'water main break cleanup']
  },

  // --- COMMERCIAL (13 Services) ---

  // 15. Commercial Water Damage
  {
    id: 'com-water',
    title: 'Commercial Water Damage',
    slug: '/services/commercial/restoration-services/commercial-water-damage/',
    shortDescription: 'Fast water restoration for businesses to minimize downtime.',
    audience: 'COMMERCIAL',
    category: 'RESTORATION',
    primaryKeyword: 'commercial water damage restoration',
    heroHeading: 'Commercial Water Restoration',
    heroIntro: 'Minimize business interruption with rapid commercial water extraction and drying services in Northern Virginia, Maryland, and DC. We scale to handle any size loss, from office floods to retail leaks.',
    heroVisualKey: 'com-water',
    thumbVisualKey: 'com-water-dash',
    infographicType: 'DRYING_TREND',
    intro_whenToCall: 'Business continuity is at risk. Call us immediately for:',
    whenToCall: [
      'Sprinkler Discharge: Accidental activation flooding floors.',
      'Main Line Break: Water main failure affecting operations.',
      'Roof Leaks: Water intrusion threatening inventory/equipment.',
      'HVAC Leaks: Large scale condensate or loop failure.',
      'Sewage Backup: Health hazard closing restrooms/kitchens.',
      'Supply Line Burst: Break room or bathroom flooding.',
      'Storm Damage: Wind-driven rain entering the building.',
      'Foundation Seepage: Water entering lower levels/parking.',
      'Tenant Leaks: Water traveling between floors.',
      'Fire Suppression: Water cleanup after a fire event.',
      'Construction Accident: Pipe hit during renovation.',
      'Appliance Failure: Commercial kitchen equipment leaks.'
    ],
    intro_whatWeDo: 'We mobilize quickly to stabilize your facility and get you back to business.',
    whatWeDo: [
      'Rapid Mobilization: Dispatching crews and industrial equipment.',
      'Water Extraction: Truck-mounted extraction for large volumes.',
      'Moisture Mapping: Documenting the full extent of saturation.',
      'Asset Protection: Moving inventory and electronics to safety.',
      'Structural Drying: Using desiccant dehumidifiers for large spaces.',
      'Containment: isolating work zones to allow partial operation.',
      'Demolition: Removing damaged materials (drywall/carpet) efficiently.',
      'Sanitization: Treating areas to prevent mold and bacterial growth.',
      'Documentation: Daily logs for insurance and stakeholders.',
      'Communication: Direct line to a dedicated Project Manager.',
      'Final Clearance: Verifying dry standards are met.',
      'Reconstruction: Coordinating repairs to restore aesthetics.'
    ],
    whatToExpect: {
      timeline: 'We aim to stabilize in 24 hours. Drying typically takes 3-5 days. We work around your operational hours whenever possible.',
      arrival: 'Priority dispatch. We arrive with the manpower and equipment needed for the scale of the loss.',
      daily: 'Daily monitoring and reports sent to your facilities team. We maintain a clean, professional job site.',
      noise: 'Industrial equipment is loud. We can route ducting to minimize noise in occupied areas or work after hours.'
    },
    intro_safety: 'Safety for your employees and customers is our priority.',
    safety: {
      head: 'Operational Safety Checklist',
      items: [
        'Slip Hazards: Post wet floor signs immediately.',
        'Electrical Safety: Shut off power to wet areas.',
        'Evacuation: Clear the affected area of personnel.',
        'Elevators: Do not use elevators if water has entered the shaft.',
        'Access Control: Restrict access to the work zone.',
        'HVAC: Shut down systems to prevent spreading moisture/mold.',
        'Documents: Secure critical business files.',
        'Equipment: Protect servers and electronics.',
        'Hazards: Watch for ceiling tiles falling.',
        'Communication: Notify staff of the situation.'
      ]
    },
    intro_scenarios: 'We handle water damage in all commercial environments.',
    scenarios: [
      'Office Buildings: Multi-story leaks affecting tenants.',
      'Retail Stores: Flooding threatening merchandise.',
      'Warehouses: Large scale floor drying.',
      'Restaurants: Kitchen floods and dining room leaks.',
      'Hotels: Guest room floods and common area damage.',
      'Medical Facilities: Sensitive equipment protection.',
      'Schools: Gym floor and classroom drying.',
      'Government Buildings: Secure facility restoration.',
      'Data Centers: Precision cooling and humidity control.',
      'Apartment Complexes: Multi-unit water intrusion.'
    ],
    saveVsRemove: {
      save: [
        'Commercial Carpet (glue-down, often cleanable)',
        'Concrete Floors',
        'Steel Stud Framing',
        'Inventory (if moved quickly)'
      ],
      remove: [
        'Ceiling Tiles (water stained)',
        'Drywall (bottom 2ft)',
        'Fiberglass Insulation',
        'MDF Casework'
      ]
    },
    faqs: [
      { question: "Can we stay open during restoration?", answer: "Often yes. We use containment walls and negative air pressure to isolate the work area so the rest of your business can operate." },
      { question: "Do you work after hours?", answer: "Yes, we offer 24/7 service and can schedule loud demolition or extraction work outside of your business hours." },
      { question: "How do you handle insurance?", answer: "We use Xactimate to bill your carrier directly and provide all necessary documentation (photos, moisture maps) to expedite the claim." },
      { question: "Do you have large equipment?", answer: "Yes, we have access to trailer-mounted desiccant dehumidifiers and generators for large-scale losses." },
      { question: "What about mold?", answer: "Fast drying is the best prevention. We apply antimicrobials to inhibit growth during the drying process." },
      { question: "Can you save our carpet?", answer: "Commercial glue-down carpet can often be extracted and cleaned. Carpet tiles may need partial replacement." },
      { question: "Will you communicate with tenants?", answer: "We can coordinate access with tenants if requested, but we primarily report to the property manager or owner." },
      { question: "Is your staff background checked?", answer: "Yes, our technicians are background checked and wear uniforms for security in professional environments." },
      { question: "How fast is response time?", answer: "We prioritize commercial emergencies and aim for a 60-minute response time in Northern Virginia." },
      { question: "Do you handle reconstruction?", answer: "Yes, we are a full-service general contractor and can handle the rebuild after drying." }
    ],
    relatedSearchTerms: ['commercial water extraction', 'business flood cleanup', 'office water damage', 'retail store restoration', 'warehouse drying', 'commercial dehumidification', 'commercial restoration company', 'business water damage repair', 'office flood cleanup', 'industrial water extraction', 'commercial drying services']
  },

  // 16. Commercial Flood Cleanup
  {
    id: 'com-flood',
    title: 'Commercial Flood Cleanup',
    slug: '/services/commercial/restoration-services/commercial-flood-cleanup/',
    shortDescription: 'Large-scale flood cleanup for commercial properties.',
    audience: 'COMMERCIAL',
    category: 'RESTORATION',
    primaryKeyword: 'commercial flood cleanup',
    heroHeading: 'Commercial Flood Cleanup',
    heroIntro: 'Rapid response for storm flooding, groundwater intrusion, and major pipe bursts. We pump out water and remove mud to get your Northern Virginia business back online.',
    heroVisualKey: 'com-flood',
    thumbVisualKey: 'com-flood-zones',
    infographicType: 'FLOOD_TIMELINE',
    intro_whenToCall: 'Rising water threatens inventory, structure, and revenue. Call for:',
    whenToCall: [
      'Basement Flooding: Mechanical rooms or storage submerged.',
      'Storm Surge: Water entering from exterior doors/docks.',
      'Parking Garage Flooding: Drainage failure.',
      'Groundwater Intrusion: Hydrostatic pressure leaks.',
      'Mud/Silt: Debris entering the facility.',
      'River Overflow: Nearby water bodies breaching banks.',
      'Sprinkler Dump: Massive water volume release.',
      'Main Break: City water main flooding the property.',
      'Loading Dock Flooding: Clogged drains.',
      'Elevator Pit Water: Sump pump failure.',
      'Retail Floor Flooding: Customer area compromised.',
      'Warehouse Water: Stock sitting in water.'
    ],
    intro_whatWeDo: 'We handle the heavy lifting of flood recovery.',
    whatWeDo: [
      'Safety Assessment: Checking for structural and electrical hazards.',
      'Water Removal: Industrial pumping of deep water.',
      'Sludge Removal: Mucking out mud and debris.',
      'Pressure Washing: Cleaning concrete and surfaces.',
      'Sanitization: Treating for river/groundwater contaminants.',
      'Demolition: Removing wet drywall and flooring.',
      'Drying: High-capacity air movement and dehumidification.',
      'Contents Moving: Relocating stock/furniture.',
      'Inventory: Documenting damaged items.',
      'Odor Control: Neutralizing flood smells.',
      'Mold Prevention: Proactive treatment.',
      'Final Cleaning: Prep for reconstruction.'
    ],
    whatToExpect: {
      timeline: 'Extraction is immediate. Drying takes 3-7 days depending on saturation and materials (concrete takes longer).',
      arrival: 'Truck-mounted extractors and crews dispatched immediately.',
      daily: 'Progress reports on water recession and drying metrics.',
      noise: 'Generators and pumps are loud; we coordinate to minimize impact.'
    },
    intro_safety: 'Flood water carries risks. Protect your staff.',
    safety: {
      head: 'Flood Safety Protocols',
      items: [
        'Electrical: Do not enter wet areas until power is cut.',
        'Contamination: Assume flood water is Category 3 (black water).',
        'PPE: Staff should not enter without boots/gloves.',
        'Structural: Watch for undermined foundations.',
        'Gas: Check for leaks if lines are submerged.',
        'Slip/Fall: Wet concrete is extremely slippery.',
        'Chemicals: Watch for displaced cleaning agents.',
        'Machinery: Do not start wet equipment.',
        'Access: Block off dangerous zones.',
        'Health: Wash hands after any contact.'
      ]
    },
    intro_scenarios: 'Flooding affects every business differently.',
    scenarios: [
      'Retail Strip Mall: Water flowing between units.',
      'Underground Garage: Sump pump failure.',
      'Office Basement: Records storage flooding.',
      'Industrial Plant: Equipment pit flooding.',
      'Hotel Lobby: Storm door failure.',
      'School Cafeteria: Ground level flooding.',
      'Church Basement: Community hall damage.',
      'Distribution Center: Loading dock backup.',
      'Gym/Fitness: Wood floor flooding.',
      'Medical Clinic: Waiting room intrusion.'
    ],
    saveVsRemove: {
      save: [
        'Concrete Structures',
        'Metal Racking',
        'Heavy Machinery (if dried/cleaned)',
        'Ceramic Tile (usually)'
      ],
      remove: [
        'Drywall (touched by flood water)',
        'Carpet/Pad',
        'Cardboard Inventory',
        'Fiberglass Insulation'
      ]
    },
    faqs: [
      { question: "Is flood water contaminated?", answer: "Yes, groundwater usually contains soil, bacteria, and runoff. We treat it as contaminated." },
      { question: "Do you pump out elevator pits?", answer: "Yes, we are equipped to extract from deep pits." },
      { question: "Can you clean the mud?", answer: "Yes, we pressure wash and sanitize concrete surfaces after silt removal." },
      { question: "What about inventory?", answer: "We can help separate salvageable vs. non-salvageable stock for insurance." },
      { question: "Do you have generators?", answer: "Yes, we provide temporary power if the building's power is out." },
      { question: "How do you dry concrete?", answer: "We use specialized heat drying and desiccant dehumidifiers." },
      { question: "Is mold a risk?", answer: "Yes, flood water introduces organic material. Fast drying and sanitizing is critical." },
      { question: "Do you work with FEMA?", answer: "We work with your insurance; FEMA typically handles individual assistance, but we provide docs needed." },
      { question: "Can we save wood floors?", answer: "Flood water usually ruins wood floors due to contamination and swelling." },
      { question: "Do you handle sewage?", answer: "Yes, flood water often mixes with sewage; we have protocols for both." }
    ],
    relatedSearchTerms: ['commercial flood pump out', 'basement flood cleanup', 'storm damage business', 'water removal service', 'industrial cleaning', 'commercial flood damage', 'business flood restoration', 'warehouse flood cleanup', 'retail store water damage', 'emergency commercial cleaning']
  },

  // 17. Large Loss Restoration
  {
    id: 'com-large',
    title: 'Large Loss Restoration',
    slug: '/services/commercial/restoration-services/large-loss-restoration/',
    shortDescription: 'Disaster recovery for major catastrophe events.',
    audience: 'COMMERCIAL',
    category: 'RESTORATION',
    primaryKeyword: 'large loss restoration',
    heroHeading: 'Large Loss Restoration',
    heroIntro: 'Scalable disaster recovery for hospitals, universities, and industrial facilities in the DMV. We mobilize manpower and equipment for major catastrophe events.',
    heroVisualKey: 'large-loss',
    thumbVisualKey: 'large-loss-phases',
    infographicType: 'STRUCTURAL_DRYING',
    intro_whenToCall: 'For major events affecting 10,000+ sq ft or critical infrastructure.',
    whenToCall: [
      'Multi-Story Floods: Water cascading through 3+ floors.',
      'Major Fire Events: Whole-building smoke/soot damage.',
      'Hurricane Damage: Roof loss and water intrusion.',
      'Pipe Burst Main: Millions of gallons released.',
      'Sprinkler Discharge: Warehouse-wide wetting.',
      'Sewage Main Break: Hazardous contamination of large areas.',
      'Mold Outbreaks: Systemic growth in HVAC or walls.',
      'Freeze Events: Burst pipes in multiple units.',
      'University Floods: Dorm or lab damage.',
      'Hospital Disasters: Operating room or ward damage.',
      'Manufacturing Halts: Production line contamination.',
      'Mall/Retail: Multi-tenant water damage.'
    ],
    intro_whatWeDo: 'Project management and resource scalability are key.',
    whatWeDo: [
      'Project Management: Dedicated PM and site supervisors.',
      'Resource Scaling: Mobilizing 50+ techs if needed.',
      'Desiccant Drying: Trailer-mounted humidity control.',
      'Temporary Power: Generators for the entire facility.',
      'Climate Control: Heating/Cooling during restoration.',
      'Inventory Services: Large scale pack-out and tracking.',
      'Document Recovery: Freeze-drying wet records.',
      'Demolition: Crews for rapid material removal.',
      'Containment: Building negative pressure zones.',
      'Sanitization: Industrial fogging and cleaning.',
      'Moisture Tracking: Wireless sensor networks.',
      'Reporting: Daily stakeholder briefings.'
    ],
    whatToExpect: {
      timeline: 'Large losses are multi-phase projects taking weeks or months. We provide a Gantt chart schedule.',
      arrival: 'Immediate assessment team, followed by rolling equipment delivery.',
      daily: 'Daily meetings with your facility managers. Detailed digital logs.',
      noise: 'Significant equipment noise; we manage hearing protection zones.'
    },
    intro_safety: 'Strict safety protocols for large job sites.',
    safety: {
      head: 'Site Safety Plan',
      items: [
        'PPE Compliance: Mandatory gear for all personnel.',
        'Signage: Clear marking of hazard zones.',
        'Air Quality: Continuous monitoring for VOCs/Dust.',
        'Electrical: Lockout/Tagout procedures.',
        'Fall Protection: For lifts and roof work.',
        'Debris Management: Safe flow of waste removal.',
        'Traffic Control: Managing trucks and dumpsters.',
        'Security: Badging and access logs.',
        'Chemical Safety: SDS sheets on site.',
        'Emergency Egress: Maintaining clear exits.'
      ]
    },
    intro_scenarios: 'We handle the biggest jobs in the region.',
    scenarios: [
      'University Dorm Flood',
      'Hospital Wing Fire',
      'High-Rise Pipe Burst',
      'Hotel Sprinkler Malfunction',
      'Distribution Center Roof Leak',
      'Data Center Cooling Failure',
      'Government Archive Flood',
      'Apartment Complex Fire',
      'Mall Food Court Backup',
      'Airport Terminal Leak'
    ],
    saveVsRemove: {
      save: [
        'Structural Steel/Concrete',
        'Mechanical Systems (if possible)',
        'Hard Goods Inventory',
        'Electronics (specialized cleaning)'
      ],
      remove: [
        'Saturated Drywall',
        'Ceiling Tiles',
        'Wet Insulation',
        'Contaminated Soft Goods'
      ]
    },
    faqs: [
      { question: "Do you have the capacity?", answer: "Yes, we own our equipment and have national support partners for massive events." },
      { question: "How do you handle billing?", answer: "Time and Materials (T&M) or Xactimate, transparently tracked daily." },
      { question: "Can we stay operational?", answer: "We aim for phased restoration to keep parts of the building open." },
      { question: "Who is in charge?", answer: "A dedicated Project Manager is your single point of contact." },
      { question: "Do you provide power?", answer: "Yes, we deploy commercial generators." },
      { question: "What about security?", answer: "We can provide fencing, board-up, and site security." },
      { question: "Do you handle electronics?", answer: "We partner with specialized electronics restoration firms." },
      { question: "Document recovery?", answer: "Yes, we coordinate freeze-drying for wet records." },
      { question: "How fast can you scale?", answer: "We can ramp up manpower within 24 hours." },
      { question: "Are you insured for this?", answer: "Yes, we carry high-limit liability and pollution insurance." }
    ],
    relatedSearchTerms: ['disaster recovery services', 'commercial fire restoration', 'large loss claims', 'industrial water damage', 'emergency response team', 'disaster restoration services', 'catastrophe response team', 'large scale water damage', 'commercial disaster recovery', 'industrial loss management']
  },

  // 18. Commercial Sewage Cleanup
  {
    id: 'com-sewage',
    title: 'Commercial Sewage',
    slug: '/services/commercial/cleanup-services/commercial-sewage-cleanup/',
    shortDescription: 'Industrial biohazard and sewage cleanup.',
    audience: 'COMMERCIAL',
    category: 'CLEANUP',
    primaryKeyword: 'commercial sewage cleanup',
    heroHeading: 'Commercial Sewage Cleanup',
    heroIntro: 'Discreet, safe, and code-compliant sewage cleanup for businesses. We handle biohazards in offices, restaurants, and industrial facilities with minimal disruption.',
    heroVisualKey: 'com-sewage',
    thumbVisualKey: 'com-sewage',
    infographicType: 'SEWAGE_CONTAINMENT',
    intro_whenToCall: 'Sewage is a health code violation and liability risk. Call immediately for:',
    whenToCall: [
      'Toilet Overflow: Public restroom backups.',
      'Floor Drain Backup: Kitchen or mechanical room overflow.',
      'Main Line Blockage: Multiple fixtures backing up.',
      'Septic Failure: System backup on property.',
      'Grease Trap Overflow: Kitchen waste spills.',
      'Pipe Rupture: Waste line breaks in ceilings/walls.',
      'Odor Complaints: Sulfur/sewage smells affecting staff.',
      'Ejector Pump Failure: Basement waste flooding.',
      'Storm Sewer Backup: Municipal line issues.',
      'Biohazard Spills: Accidents involving bodily fluids.',
      'Customer Areas: Leaks in lobbies or dining rooms.',
      'Tenant Complaints: Multi-unit waste issues.'
    ],
    intro_whatWeDo: 'We protect your brand and your occupants.',
    whatWeDo: [
      'Containment: Sealing the area to prevent odor/bacteria spread.',
      'Extraction: Vacuuming waste and water.',
      'Cleaning: Pressure washing and scrubbing surfaces.',
      'Disinfection: Applying hospital-grade biocides.',
      'Removal: disposing of contaminated porous materials (carpet/drywall).',
      'Air Scrubbing: HEPA filtration for airborne pathogens.',
      'Odor Control: Neutralizing smells immediately.',
      'Verification: ATP testing for cleanliness.',
      'Documentation: Reports for health inspectors/insurance.',
      'Disposal: Legal disposal of biohazard waste.',
      'Privacy: Discreet vehicles and crews.',
      'Drying: Drying the structure after cleaning.'
    ],
    whatToExpect: {
      timeline: 'Cleanup 1-2 days. Drying 3-5 days. We work fast to reopen areas.',
      arrival: 'Immediate dispatch. Crews wear Tyvek suits and respirators.',
      daily: 'Work area is sealed. Negative air machines run 24/7.',
      noise: 'Air scrubbers create a hum; work can be done off-hours.'
    },
    intro_safety: 'Strict adherence to OSHA and health department standards.',
    safety: {
      head: 'Biohazard Safety',
      items: [
        'Isolate Area: Lock doors/put up signs.',
        'HVAC: Turn off to stop odor spread.',
        'No Contact: Keep staff away.',
        'PPE: Required for entry.',
        'Hand Washing: Enforce hygiene.',
        'Food Safety: Discard exposed items.',
        'Cleaning: Do not use standard mops.',
        'Vaccines: Hep B risk awareness.',
        'Sharps: Watch for debris.',
        'Report: Document incident.'
      ]
    },
    intro_scenarios: 'Common commercial sewage issues.',
    scenarios: [
      'Restaurant Kitchen Backup',
      'Office Building Restroom Overflow',
      'Hotel Guest Room Leak',
      'Retail Store Drain Backup',
      'Warehouse Bathroom Failure',
      'Apartment Main Line Block',
      'School Locker Room Flood',
      'Medical Facility Backup',
      'Mall Food Court Spill',
      'Municipal Building Overflow'
    ],
    saveVsRemove: {
      save: [
        'Ceramic Tile (sanitized)',
        'Concrete Floors',
        'Metal Partitions',
        'Sealed Fixtures'
      ],
      remove: [
        'Carpet/Carpet Tiles',
        'Baseboards (wood/MDF)',
        'Drywall (bottom 2ft)',
        'Cardboard Inventory'
      ]
    },
    faqs: [
      { question: "Can we stay open?", answer: "Yes, if we can isolate the area effectively. Kitchens may need to close briefly." },
      { question: "Is it safe?", answer: "Sewage contains pathogens. Isolation is key to safety." },
      { question: "Will it smell?", answer: "We use air scrubbers and masking agents to control odor immediately." },
      { question: "Do you clean grease traps?", answer: "We clean the spill, but you need a plumber/pumper for the trap itself." },
      { question: "Certificate of sanitation?", answer: "Yes, we provide documentation for health inspectors." },
      { question: "Can you save carpet?", answer: "No, category 3 water requires carpet replacement per IICRC standards." },
      { question: "How fast?", answer: "We start cleanup immediately upon arrival." },
      { question: "Is it discreet?", answer: "We can use unmarked trucks if requested for sensitive locations." },
      { question: "Do you fix the pipe?", answer: "We clean the mess; a plumber fixes the blockage." },
      { question: "Insurance cover?", answer: "Often yes, depending on your policy exclusions." }
    ],
    relatedSearchTerms: ['sewage cleanup business', 'commercial biohazard', 'toilet overflow office', 'septic backup cleanup', 'industrial cleaning', 'commercial sewage backup cleanup', 'industrial biohazard cleaning', 'business restroom flooding', 'sewage removal commercial', 'hazardous waste cleanup']
  },

  // 19. Commercial Mold Remediation
  {
    id: 'com-mold',
    title: 'Commercial Mold',
    slug: '/services/commercial/cleanup-services/commercial-mold-remediation/',
    shortDescription: 'Mold remediation for offices and public buildings.',
    audience: 'COMMERCIAL',
    category: 'CLEANUP',
    primaryKeyword: 'commercial mold remediation',
    heroHeading: 'Commercial Mold Remediation',
    heroIntro: 'Protect your workforce and tenants. We provide certified mold removal with containment protocols that keep your business running safely.',
    heroVisualKey: 'com-mold',
    thumbVisualKey: 'com-mold',
    infographicType: 'MOLD_AIRFLOW',
    intro_whenToCall: 'Mold is a liability and health issue. Call if:',
    whenToCall: [
      'Tenant Complaints: Reports of allergies or smells.',
      'Visible Growth: Spots on walls, ceiling tiles, or HVAC.',
      'Musty Odors: Persistent smells in offices or hallways.',
      'Water Leaks: Past leaks that weren\'t dried properly.',
      'High Humidity: Consistently damp environment.',
      'Real Estate Transfer: Inspection finding.',
      'Employee Health: Sick Building Syndrome symptoms.',
      'Maintenance checks: Discovery behind wallpaper/vinyl.',
      'HVAC Issues: Mold around vents or in ducts.',
      'Storage Areas: Mold on boxes or inventory.',
      'Carpet Stains: Dark spots near baseboards.',
      'Window Leaks: Mold on sills or drywall.'
    ],
    intro_whatWeDo: 'We isolate, remove, and verify.',
    whatWeDo: [
      'Inspection: Mapping the extent of growth.',
      'Containment: Building negative air chambers.',
      'Filtration: Running industrial HEPA scrubbers.',
      'Removal: Bagging and removing infected materials.',
      'Cleaning: HEPA vacuuming and damp wiping.',
      'Sanitization: Applying antimicrobial sealants.',
      'Dry Ice Blasting: For large structural cleaning.',
      'HVAC Cleaning: Coordinating duct cleaning.',
      'Testing: 3rd party clearance verification.',
      'Documentation: Detailed reports for liability.',
      'Reconstruction: Replacing drywall/finishes.',
      'Prevention: Advising on moisture control.'
    ],
    whatToExpect: {
      timeline: '3-7 days typically. We can work nights/weekends to minimize visibility.',
      arrival: 'Discreet assessment. Containment built first.',
      daily: 'Negative air machines run 24/7. Work is behind plastic.',
      noise: 'Air scrubbers sound like fans.'
    },
    intro_safety: 'Preventing spore spread to occupied areas.',
    safety: {
      head: 'Mold Safety Plan',
      items: [
        'Containment: Do not breach plastic barriers.',
        'Pressure: Maintain negative air.',
        'HVAC: Seal off vents in work zone.',
        'Access: Restricted to trained personnel.',
        'PPE: Techs wear suits/respirators.',
        'Debris: Bagged before leaving zone.',
        'Signs: Hazard signage posted.',
        'Communication: Inform key staff.',
        'Air Quality: Monitor surrounding areas.',
        'Health: Address employee concerns.'
      ]
    },
    intro_scenarios: 'Where commercial mold grows.',
    scenarios: [
      'Office Building HVAC',
      'Hotel Bathroom Exhausts',
      'School Locker Rooms',
      'Warehouse Roof Leaks',
      'Retail Store Ceiling Tiles',
      'Apartment Complex Walls',
      'Basement Archives',
      'Hospital Utility Rooms',
      'Restaurant Kitchens',
      'Gym/Spa Areas'
    ],
    saveVsRemove: {
      save: [
        'Structural Steel/Wood (cleaned)',
        'Hard Furniture (HEPA cleaned)',
        'HVAC Ducting (if metal)',
        'Glass/Metal Fixtures'
      ],
      remove: [
        'Ceiling Tiles (porous)',
        'Drywall (with growth)',
        