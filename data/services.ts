
import { ServiceData } from '../types';

export const SERVICES: ServiceData[] = [
  // --- RESIDENTIAL ---
  
  // Restoration
  {
    id: 'res-water',
    title: 'Water Damage Restoration',
    slug: '/services/residential/restoration-services/water-damage-restoration/',
    shortDescription: 'Emergency water extraction and drying for homes.',
    audience: 'RESIDENTIAL',
    category: 'RESTORATION',
    primaryKeyword: 'water damage restoration',
    secondaryKeywords: ['water removal', 'emergency water removal', 'water mitigation', 'water extraction', 'structural drying', 'drying equipment', 'moisture monitoring'],
    heroHeading: 'Emergency Water Damage Restoration',
    heroIntro: 'Rapid water removal, structural drying, and damage repairs for homeowners in Northern Virginia, Maryland, and DC. We arrive in 60 minutes or less to protect your property from secondary damage and mold.',
    infographicType: 'DRYING_TREND',
    whenToCall: [
      'You have standing water from a burst pipe or appliance failure.',
      'Water is dripping through your ceiling or light fixtures.',
      'Carpet or hardwood floors feel spongy, squishy, or are cupping.',
      'You discover a leak that has been active for an unknown amount of time.',
      'Your supply line to the washing machine or refrigerator disconnected.',
      'You see visible water stains spreading on drywall or baseboards.',
      'You hear running water behind a wall but all faucets are off.',
      'A toilet overflowed and water has seeped into the subfloor.',
      'Your water heater tank failed and flooded the utility room.',
      'Condensation is forming on windows or walls due to high humidity.',
      'Paint is bubbling or peeling on walls or ceilings.'
    ],
    whatWeDo: [
      'Perform a thermal imaging inspection to locate all hidden moisture pockets.',
      'Extract standing water immediately using truck-mounted industrial pumps.',
      'Remove non-salvageable wet materials like soaked carpet padding.',
      'Deploy commercial-grade LGR dehumidifiers and high-velocity air movers.',
      'Monitor moisture levels daily to ensure the structure reaches a dry standard.',
      'Clean and sanitize affected areas to prevent mold growth.',
      'Coordinate directly with your insurance company for billing and documentation.',
      'Provide a final Certificate of Drying upon project completion.'
    ],
    whatToExpect: {
      timeline: 'Most standard water damage projects take 3 to 5 days to dry completely. Reconstruction, if needed, happens after verification.',
      arrival: 'Our certified crew arrives in a branded vehicle. We identify the source, stop the water (if you haven’t already), and start extraction immediately.',
      daily: 'We visit daily to check equipment, take moisture readings, and update your drying log. You will know exactly how the process is tracking.',
      noise: 'Drying equipment must run 24/7 to be effective. It sounds like a loud fan or white noise. We know it is disruptive, so we aim to finish as fast as physically possible.'
    },
    safety: {
      head: 'Safety Checklist: What to Do Right Now',
      items: [
        'Shut off the main water valve if the leak is from a pipe.',
        'Turn off electricity to wet rooms via the breaker box if safe to do so.',
        'Do not walk on wet carpet with colored socks (dye transfer).',
        'Move light furniture and valuables to dry areas.',
        'Do not use a household vacuum to remove water (electric shock risk).',
        'Watch for slip and fall hazards on wet tile or hardwood.',
        'Keep children and pets away from the affected area.',
        'Do not enter rooms where the ceiling is sagging from water weight.'
      ],
      kidsPets: 'Keep children and pets away from the affected area. Wet floors are slippery, and the water may be contaminated depending on the source.'
    },
    scenarios: [
      'Ceiling leaks from upstairs bathrooms or pipe failures.',
      'Burst pipes during winter freezes.',
      'Washing machine or dishwasher supply line failures.',
      'Hardwood floor cupping due to slow refrigerator leaks.',
      'Water heater failure flooding the utility room and basement.',
      'Sump pump failure during heavy rain.',
      'Toilet overflow affecting hallway and bedroom carpet.',
      'Kitchen sink drain leak damaging cabinets.',
      'Shower pan failure causing leaks to the floor below.',
      'HVAC condensate line backup causing attic water damage.'
    ],
    saveVsRemove: {
      save: [
        'Structural framing (studs) if dried quickly',
        'Concrete floors and subfloors',
        'High-quality hardwood (if we catch it early)',
        'Tile flooring',
        'Cabinets (using injection drying)'
      ],
      remove: [
        'Carpet padding (almost always)',
        'Insulation that got soaked',
        'Crumbling or moldy drywall',
        'Particle board furniture',
        'Laminate flooring (it swells permanently)'
      ]
    },
    faqs: [
      {
        question: "How much does water damage restoration cost?",
        answer: "The cost varies based on the size of the area and the category of water. For most homeowners, this is covered by property insurance, and you are only responsible for your deductible. We bill insurance directly using Xactimate pricing standards."
      },
      {
        question: "Can I stay in my home during the drying process?",
        answer: "In most cases, yes. Unless the damage is extensive (like a whole-home flood) or involves sewage, you can usually stay. However, the equipment is noisy, and some rooms may be off-limits."
      },
      {
        question: "Do you repair the drywall and floors after drying?",
        answer: "Yes. We are a full-service restoration company. Once drying is verified, we can transition to the reconstruction phase to install new drywall, flooring, and paint, returning your home to pre-loss condition."
      },
      {
        question: "How do you find water behind the walls?",
        answer: "We use non-invasive thermal imaging cameras and moisture meters. These tools allow us to detect temperature differences and moisture content inside wall cavities without tearing them open unnecessarily."
      },
      {
        question: "Will my wood floors be ruined?",
        answer: "Not necessarily. If we catch it early (typically within 24 hours), we can often save hardwood floors using specialized injectable drying mats. Cupping can often reverse once the wood returns to its normal moisture content."
      },
      {
        question: "What if the water was from a toilet?",
        answer: "If the water is clean (tank water), we treat it like a pipe burst. If it contains waste, it is Category 3 (black water), and we must remove porous materials like carpet and pad for safety."
      },
      {
        question: "How long does it take for mold to grow?",
        answer: "Mold can begin to grow on damp surfaces in as little as 24 to 48 hours. That is why immediate extraction and drying are critical to preventing a larger, more expensive problem."
      },
      {
        question: "Do I need to call a plumber first?",
        answer: "If you cannot stop the water yourself (e.g., by the main shut-off), call a plumber or us immediately. We handle the water cleanup, but a licensed plumber is required to fix the actual broken pipe."
      },
      {
        question: "Will my insurance cover this?",
        answer: "Most standard home insurance policies cover 'sudden and accidental' water damage, like a burst pipe. They typically do not cover flood damage from outside storms unless you have specific flood insurance."
      },
      {
        question: "Do you offer a warranty?",
        answer: "Yes, we provide a satisfaction guarantee on our restoration work. We ensure the property meets dry standards before we remove equipment."
      }
    ],
    relatedSearchTerms: [
      'water mitigation near me',
      'emergency water removal',
      'wet carpet drying',
      'ceiling leak repair',
      'water damage cleanup cost',
      'basement water extraction',
      '24 hour water restoration',
      'flood damage repair',
      'burst pipe cleanup',
      'home drying service'
    ]
  },
  {
    id: 'res-flood',
    title: 'Flood Cleanup',
    slug: '/services/residential/restoration-services/flood-cleanup/',
    shortDescription: 'Rapid cleanup after storm or basement flooding.',
    audience: 'RESIDENTIAL',
    category: 'RESTORATION',
    primaryKeyword: 'flood cleanup',
    secondaryKeywords: ['flood water removal', 'basement flood cleanup', 'storm flooding cleanup', 'groundwater intrusion', 'sump pump failure cleanup', 'mud cleanup', 'disinfection'],
    heroHeading: 'Emergency Flood Cleanup & Water Removal',
    heroIntro: 'Fast response for basement flooding, storm damage, and groundwater intrusion in Northern Virginia, Maryland, and DC. We pump out water, remove mud, and sanitize your home safely.',
    infographicType: 'FLOOD_TIMELINE',
    whenToCall: [
      'Your basement is filled with standing water after a heavy storm.',
      'Your sump pump failed and water is rising.',
      'Groundwater is seeping through your foundation walls.',
      'A nearby creek or river has overflowed into your property.',
      'Mud and debris have entered your garage or lower level.',
      'You need high-volume water extraction immediately.',
      'Sewage has backed up due to municipal system overload.',
      'Window wells have filled with water and are leaking into the basement.',
      'Your home has suffered structural damage from storm surge.',
      'You detect a strong musty odor after a rain event.',
      'Carpets are soaked from hydrostatic pressure pushing water through the slab.'
    ],
    whatWeDo: [
      'Deploy high-capacity submersible pumps to remove thousands of gallons quickly.',
      'Extract residual water from carpets, concrete, and flooring.',
      'Remove flood-damaged contents and debris (mud, silt, trash).',
      'Cut out wet drywall and insulation to prevent mold spread.',
      'Clean and sanitize all surfaces with industrial-grade antimicrobials.',
      'Set up heavy-duty drying equipment to stabilize the humidity.',
      'Help you document the loss for flood insurance claims.',
      'Dispose of damaged materials according to local regulations.'
    ],
    whatToExpect: {
      timeline: 'Flood cleanup is intense. Pumping out water takes hours. Drying the structure typically takes 3-7 days depending on the saturation.',
      arrival: 'We arrive with truck-mounted extractors. Our priority is getting the bulk water out. Then we focus on moving your belongings to safety.',
      daily: 'We monitor the drying progress. Since flood water is often contaminated, we may need to remove more materials (like carpet) than with clean water leaks.',
      noise: 'Expect loud equipment. Industrial air movers and dehumidifiers are powerful. We need them to run continuously to prevent mold.'
    },
    safety: {
      head: 'Flood Water Safety Warnings',
      items: [
        'Do not enter a flooded basement if the power is on. Electrocution risk is high.',
        'Avoid contact with flood water; it may contain sewage, chemicals, or bacteria.',
        'Wear rubber boots and gloves if you must enter the area.',
        'Take photos of the water level for insurance before we pump it out.',
        'Watch for snakes or pests that may have entered with storm water.',
        'Do not use gas-powered pumps indoors (carbon monoxide risk).',
        'Keep children and pets completely away from flood water.',
        'Wash your hands thoroughly after any contact with flood debris.'
      ],
      kidsPets: 'Keep children and pets completely away from flood water. It is not safe to play in, even if it looks clear.'
    },
    scenarios: [
      'Basement flooding from sump pump failure.',
      'Heavy rain causing window well leakage.',
      'Groundwater hydrostatic pressure seeping through foundation.',
      'Storm sewer backup into the home.',
      'Garage flooding from driveway runoff.',
      'River or creek overflow affecting the first floor.',
      'Flash flooding entering through basement doors.',
      'Mudslide or silt intrusion into living areas.',
      'Utility room flooding from main line backup.',
      'Crawl space flooding causing floor buckling.'
    ],
    saveVsRemove: {
      save: [
        'Concrete foundation and slab',
        'Solid wood furniture (if not submerged long)',
        'Non-porous items (metal, glass, plastic)',
        'Upper drywall (above the cut line)'
      ],
      remove: [
        'Carpet and padding (always, due to contamination)',
        'Drywall touched by flood water',
        'Fiberglass insulation',
        'Mattresses and upholstered furniture',
        'Cardboard boxes and paper documents'
      ]
    },
    faqs: [
      {
        question: "Does homeowners insurance cover flooding?",
        answer: "Standard policies usually do NOT cover rising water from outside (rain, rivers). You typically need a separate Flood Insurance policy. Sump pump failure is often an add-on rider. We can help you check your policy."
      },
      {
        question: "Can you save my carpet after a flood?",
        answer: "If the water came from outside (groundwater, storm), the carpet and pad must usually be discarded due to contamination. If it was a clean water sump pump failure, we might be able to save it, but pad replacement is likely."
      },
      {
        question: "How do you get the smell out?",
        answer: "Flood water smells because of bacteria and organic growth. We use professional antimicrobial agents, HEPA air scrubbers, and hydroxyl generators to kill the bacteria causing the odor."
      },
      {
        question: "What is the difference between flood and water damage?",
        answer: "In insurance terms, 'Flood' is rising water from outside. 'Water Damage' is usually internal (pipe burst). The cleanup process is similar, but the safety protocols for floods are stricter due to contamination."
      },
      {
        question: "Do I need to throw away everything?",
        answer: "Non-porous items (plastic, metal, glass) can be cleaned and sanitized. Porous items (mattresses, particle board furniture, cardboard) touched by flood water usually need to be discarded."
      },
      {
        question: "How quickly can you pump out a basement?",
        answer: "Our industrial pumps can move thousands of gallons per hour. A standard flooded basement can often be drained in 2-4 hours once we are set up."
      },
      {
        question: "Will mold grow after a flood?",
        answer: "Yes, flood water carries organic material that feeds mold. Mold can start in 24 hours. Immediate removal of wet drywall and thorough drying is the only way to prevent it."
      },
      {
        question: "Can you bill FEMA or my flood insurance?",
        answer: "We work with all flood insurance carriers and can assist with the documentation required for FEMA claims if a disaster declaration is in place."
      },
      {
        question: "Is the mud and silt dangerous?",
        answer: "Yes, silt from flood water often contains agricultural runoff, sewage, or chemicals. We remove it safely and sanitize the concrete underneath."
      },
      {
        question: "What about my furnace and water heater?",
        answer: "If your mechanical systems were submerged, do not turn them on. They need to be inspected by a licensed HVAC technician or electrician before use."
      }
    ],
    relatedSearchTerms: [
      'basement flood cleanup',
      'sump pump failure water removal',
      'emergency water pump out',
      'storm damage restoration',
      'flooded house cleanup',
      'sewage cleanup services',
      'water damage repair near me',
      'flood remediation company',
      'basement water extraction',
      'flood restoration cost'
    ]
  },
  {
    id: 'res-sewage',
    title: 'Sewage Cleanup',
    slug: '/services/residential/cleanup-services/sewage-cleanup/',
    shortDescription: 'Safe removal and sanitization of sewage backups.',
    audience: 'RESIDENTIAL',
    category: 'CLEANUP',
    primaryKeyword: 'sewage cleanup',
    secondaryKeywords: ['sewage backup cleanup', 'sewage removal', 'contaminated water cleanup', 'black water cleanup', 'sanitation and disinfection', 'containment', 'odor control'],
    heroHeading: 'Sewage Backup Cleanup & Sanitization',
    heroIntro: 'Certified biohazard cleanup for toilet overflows and sewer backups in Northern Virginia, Maryland, and DC. We protect your family from harmful bacteria and viruses with hospital-grade sanitization.',
    infographicType: 'SEWAGE_CONTAINMENT',
    whenToCall: [
      'Dark or smelly water is coming up through your drains or toilet.',
      'A toilet overflowed with solids or waste present.',
      'A septic tank backup has flooded your yard or basement.',
      'You smell a strong sulfur or rotten egg odor.',
      'Water from a pipe burst has been sitting for more than 72 hours (Category 3).',
      'You need documentation that the area is sanitary for tenants or family.',
      'Multiple drains in your home are backing up simultaneously.',
      'You see raw sewage pooling in your crawl space.',
      'A municipal sewer line blockage has affected your property.',
      'You suspect a broken sewer lateral line in your yard.'
    ],
    whatWeDo: [
      'Set up containment zones to stop the spread of bacteria and fumes.',
      'Extract sewage using specialized biohazard equipment.',
      'Remove and dispose of porous materials (carpet, pad, drywall) that cannot be sanitized.',
      'Clean and disinfect all salvageable surfaces with EPA-registered biocides.',
      'Scrub the air using HEPA filtration devices to remove airborne pathogens.',
      'Verify cleanliness with ATP testing (if requested).',
      'Handle safe disposal of biohazardous waste.',
      'Pressure wash and sanitize affected concrete or exterior areas.'
    ],
    whatToExpect: {
      timeline: 'Sewage cleanup is urgent. We prioritize extraction and sanitization (1-2 days). Drying and reconstruction follow. Safety is the main driver.',
      arrival: 'Our technicians wear full PPE (Tyvek suits, respirators). It looks intense, but it is necessary for safety. We seal off the affected area immediately.',
      daily: 'We maintain negative air pressure to keep odors from spreading to the rest of the house. You may not be able to enter the containment zone.',
      noise: 'Air scrubbers run 24/7 to clean the air. They sound like white noise machines. This helps remove the "sewage smell" quickly.'
    },
    safety: {
      head: 'Critical Sewage Safety Steps',
      items: [
        'Treat all sewage water as toxic. Do not touch it or breathe the mist.',
        'Keep children, elderly, and pets completely out of the house or area.',
        'Do not run the HVAC system (it spreads airborne bacteria).',
        'Do not try to vacuum sewage (it ruins the vacuum and aerosolizes germs).',
        'Wash your hands thoroughly if you have been near the area.',
        'Discard any food items that may have been exposed to fumes.',
        'Do not use bleach on porous materials (it is ineffective and creates fumes).',
        'Call a professional immediately; this is a Category 3 loss.'
      ],
      kidsPets: 'This is a Category 3 Biohazard. It contains viruses (E. coli, Hepatitis, etc.). Relocating kids and pets until sanitization is complete is strongly recommended.'
    },
    scenarios: [
      'Main sewer line blockage causing basement drain backup.',
      'Toilet overflow affecting hallway and bedroom carpet.',
      'Septic tank failure flooding the yard and crawl space.',
      'Shower drain backing up with black water.',
      'Long-term stagnant water that has turned septic.',
      'Root intrusion in sewer lines causing backups.',
      'Municipal sewer surge during heavy storms.',
      'Washing machine drain line backflow.',
      'Broken soil stack leaking inside walls.',
      'Commercial kitchen grease trap overflow.'
    ],
    saveVsRemove: {
      save: [
        'Non-porous tile and concrete (after sanitization)',
        'Metal and glass furniture',
        'Structural framing (if cleaned and sealed)',
        'Hard plastic items'
      ],
      remove: [
        'Carpet, padding, and rugs (cannot be sanitized)',
        'Drywall and baseboards touched by sewage',
        'Upholstered furniture and mattresses',
        'Cardboard, books, and paper',
        'Laminate flooring (traps bacteria underneath)'
      ]
    },
    faqs: [
      {
        question: "Is sewage cleanup covered by insurance?",
        answer: "Often, yes, but it may be a specific rider for 'Water Backup and Sump Discharge.' Standard policies sometimes exclude it. Check your policy for 'Backup of Sewers and Drains'."
      },
      {
        question: "Can I clean sewage myself?",
        answer: "We strongly advise against it. Household bleach is not enough for porous materials, and the health risks (Hepatitis, Salmonella, E. Coli) are serious. Professional equipment is needed to protect you."
      },
      {
        question: "Do I have to throw away my carpet?",
        answer: "Yes. Industry standards (IICRC S500) dictate that porous materials like carpet and padding touched by sewage cannot be safely salvaged. They must be removed and replaced."
      },
      {
        question: "What is 'Category 3' water?",
        answer: "Category 3 is 'Grossly Unsanitary' water containing pathogens. This includes sewage, flood water from rivers, and standing water that has fostered bacterial growth."
      },
      {
        question: "How long does the smell last?",
        answer: "Once we extract the source and sanitize the area, the smell dissipates quickly, usually within 24 hours of our treatment. We use air scrubbers to speed this up."
      },
      {
        question: "Can you save my furniture?",
        answer: "Hard, non-porous furniture (wood, metal) can often be sanitized. Upholstered furniture touched by sewage usually needs to be discarded for safety."
      },
      {
        question: "Is it safe to stay in the house?",
        answer: "If the backup is small (one bathroom) and contained, yes. If it is a whole-basement backup affecting the HVAC, we may recommend staying elsewhere for a night or two."
      },
      {
        question: "What chemicals do you use?",
        answer: "We use EPA-registered botanical or hospital-grade disinfectants designed to kill bacteria and viruses without leaving toxic residues."
      },
      {
        question: "Do you fix the broken pipe?",
        answer: "We handle the cleanup and sanitization. You will need a licensed plumber to snake the drain or repair the sewer line. We can work alongside them."
      },
      {
        question: "Will I get a certificate of sanitization?",
        answer: "We provide documentation of the work performed and the protocols followed, which serves as proof of professional remediation for insurance or future home sales."
      }
    ],
    relatedSearchTerms: [
      'sewage backup cleanup cost',
      'basement drain backup',
      'biohazard cleaning services',
      'septic backup cleanup',
      'toilet overflow water damage',
      'emergency sewage removal',
      'black water cleanup',
      'sewer line backup repair',
      'professional sanitization services',
      'sewage damage restoration'
    ]
  },
  {
    id: 'res-mold',
    title: 'Mold Remediation',
    slug: '/services/residential/cleanup-services/mold-remediation/',
    shortDescription: 'Certified mold inspection and removal services.',
    audience: 'RESIDENTIAL',
    category: 'CLEANUP',
    primaryKeyword: 'mold remediation',
    secondaryKeywords: ['mold removal', 'mold inspection', 'microbial growth', 'containment', 'HEPA filtration', 'post-water damage mold', 'musty odor removal'],
    heroHeading: 'Mold Remediation & Removal',
    heroIntro: 'Licensed and certified mold removal in Northern Virginia, Maryland, and DC. We identify the source, contain the spores, and restore your healthy home environment with hospital-grade filtration.',
    infographicType: 'MOLD_AIRFLOW',
    whenToCall: [
      'You see visible mold growth (black, green, or white) on walls or ceilings.',
      'You smell a persistent musty or earthy odor.',
      'You had a water leak recently and are now coughing or sneezing.',
      'You are buying or selling a home and the inspection flagged mold.',
      'There is high humidity in your basement or crawl space.',
      'You found discoloration behind furniture or in a closet.',
      'Your HVAC system is blowing air that smells dusty or moldy.',
      'You have experienced recent flooding and are worried about hidden growth.',
      'Wood floors are buckling or warping (a sign of trapped moisture).',
      'You see condensation gathering on windows or cold surfaces.'
    ],
    whatWeDo: [
      'Inspect and assess the extent of mold growth (using moisture meters).',
      'Build containment barriers to prevent spores from spreading to clean rooms.',
      'Establish negative air pressure using HEPA scrubbers.',
      'Remove mold-infested materials (drywall, insulation, carpet) safely.',
      'Physically clean and sand structural wood (HEPA-vacuuming and damp wiping).',
      'Apply antimicrobial sealants to inhibit future growth.',
      'Arrange for post-remediation verification (clearance testing) by a third party.',
      'Provide detailed documentation of the remediation process.'
    ],
    whatToExpect: {
      timeline: 'Typical remediation takes 3-5 days depending on the scope. We prioritize containment first to protect the rest of the home.',
      arrival: 'We arrive discreetly. Our team sets up plastic walls (containment) immediately. This protects the rest of your home from dust and spores.',
      daily: 'Work happens inside the containment zone. You will hear air scrubbers running. We adhere to strict IICRC S520 standards.',
      noise: 'The air scrubbers run 24/7. They sound like a box fan. This is essential to continuously filter the air.'
    },
    safety: {
      head: 'Mold Safety Precautions',
      items: [
        'Do not disturb the mold! Scraping it sends spores into the air.',
        'Do not use bleach. It often bleaches the color but leaves the roots.',
        'Keep the door to the affected room closed.',
        'Turn off HVAC to avoid spreading spores through ductwork.',
        'If you have asthma or immune issues, avoid the area completely.',
        'Do not use a standard vacuum on mold (it spreads spores).',
        'Wear an N95 mask if you must enter the area.',
        'Address the moisture source (leak) immediately.'
      ],
      kidsPets: 'Keep kids and pets away. Mold spores can trigger allergies and asthma attacks. Our containment walls are there to protect them.'
    },
    scenarios: [
      'Black mold in the bathroom vanity after a slow leak.',
      'Attic mold from poor ventilation or roof leaks.',
      'Crawl space mold caused by high humidity.',
      'Basement drywall mold after a flood.',
      'Mold behind kitchen cabinets from a dishwasher leak.',
      'Window sill mold from condensation.',
      'Mold growing on closet walls backing to a cold exterior.',
      'HVAC duct mold from high humidity.',
      'Garage mold from roof runoff.',
      'Mold on furniture stored in a damp basement.'
    ],
    saveVsRemove: {
      save: [
        'Structural lumber (studs/joists) can be sanded and cleaned',
        'Non-porous surfaces (glass, metal, some tile)',
        'Contents that can be HEPA vacuumed and wiped'
      ],
      remove: [
        'Moldy drywall (it is porous and cannot be deep cleaned)',
        'Insulation (impossible to clean)',
        'Carpeting and padding with visible growth',
        'Ceiling tiles'
      ]
    },
    faqs: [
      {
        question: "Is black mold dangerous?",
        answer: "All mold can be an allergen and irritant. 'Toxic black mold' (Stachybotrys) produces mycotoxins, but color alone doesn't identify toxicity. We treat all mold requiring removal with the same high safety standards."
      },
      {
        question: "Can I just paint over the mold?",
        answer: "No. Painting over mold does not kill it; the mold will eventually eat through the paint. You must physically remove the mold and the moisture source first."
      },
      {
        question: "Does bleach kill mold?",
        answer: "Bleach is rarely effective on porous surfaces like drywall or wood. It kills surface mold but the moisture in bleach can actually feed the roots deep inside. Professional removal is required."
      },
      {
        question: "How much does mold removal cost?",
        answer: "It depends heavily on the scope. A small bathroom job is different from a whole-attic remediation. We provide a detailed estimate after an inspection. Insurance may cover it if it resulted from a covered water loss."
      },
      {
        question: "Do you test for mold?",
        answer: "We can do visual inspections and moisture testing. For official air quality lab reports (Pre-test and Clearance), we recommend using an independent third-party industrial hygienist to avoid a conflict of interest."
      },
      {
        question: "Will the mold come back?",
        answer: "Not if the moisture source is fixed. Mold needs water to grow. Our process removes the mold, and your repair (fixing the leak/humidity) prevents it from returning."
      },
      {
        question: "Do I have to move out?",
        answer: "Usually no. We build containment chambers to seal off the work area. You can live in the rest of the house safely. If the kitchen or only bathroom is affected, temporary relocation might be needed."
      },
      {
        question: "What is negative air pressure?",
        answer: "It means we pump air OUT of the work zone through a filter. This creates a vacuum effect so that when a door opens, air rushes IN, keeping spores from floating OUT into your home."
      },
      {
        question: "Are your chemicals safe?",
        answer: "Yes, we use EPA-registered antimicrobials. However, we primarily rely on physical removal (HEPA vacuuming, sanding) rather than just spraying chemicals."
      },
      {
        question: "How long does a clearance test take?",
        answer: "After we finish, a tester takes air samples. Lab results typically take 24-48 hours. We leave our scrubbers running until you pass the test."
      }
    ],
    relatedSearchTerms: [
      'black mold removal near me',
      'attic mold remediation',
      'basement mold cleanup',
      'mold inspection cost',
      'crawl space encapsulation',
      'mold remediation companies',
      'air quality testing',
      'mold abatement services',
      'professional mold cleaners',
      'remove mold from drywall'
    ]
  },
  {
    id: 'res-struct',
    title: 'Structural Drying',
    slug: '/services/residential/restoration-services/structural-drying/',
    shortDescription: 'Advanced drying techniques to save walls and floors.',
    audience: 'RESIDENTIAL',
    category: 'RESTORATION',
    primaryKeyword: 'structural drying',
    secondaryKeywords: ['dehumidification', 'drying wall cavities', 'subfloor drying', 'drying hardwood', 'moisture mapping', 'psychrometrics', 'drying verification'],
    heroHeading: 'Structural Drying & Dehumidification',
    heroIntro: 'Advanced drying science to save your drywall, subfloors, and framing without unnecessary demolition in Northern Virginia, Maryland, and DC. We dry it in place whenever possible.',
    infographicType: 'STRUCTURAL_DRYING',
    whenToCall: [
      'You had a leak and want to verify if the walls are still wet.',
      'Another company extracted water but left the house feeling humid.',
      'You are trying to save expensive hardwood flooring from cupping.',
      'Water has seeped into complex areas like cabinets or kitchen islands.',
      'You smell a musty odor but see no visible water.',
      'You need a "Certificate of Drying" for a real estate transaction.',
      'You had a roof leak that traveled down inside the walls.',
      'Tile grout lines are darkening or staying wet.',
      'Vinyl flooring is bubbling or lifting.',
      'You want to avoid tearing out your custom kitchen cabinets.'
    ],
    whatWeDo: [
      'Use thermal cameras to map moisture migration in walls and ceilings.',
      'Deploy low-grain refrigerant (LGR) dehumidifiers to pull deep moisture.',
      'Set up high-velocity air movers to accelerate evaporation.',
      'Utilize cavity injection drying systems for walls and cabinets.',
      'Monitor atmospheric readings (Temperature, RH, GPP) daily.',
      'Verify the structure meets dry standards before removing equipment.',
      'Provide detailed documentation proving the structure is dry.',
      'Use mat drying systems to save hardwood floors.'
    ],
    whatToExpect: {
      timeline: 'Structural drying is a science. It typically takes 3-5 days. Dense materials like hardwood or plaster may take 7-10 days.',
      arrival: 'We assess the materials. If we can save them, we set up specialized equipment. We might drill small holes (toe kicks) to inject air into hidden spaces.',
      daily: 'We adjust equipment placement daily based on moisture meter readings. Our goal is to dry it "in-place" to save you reconstruction costs.',
      noise: 'It will be loud. Air movers create a wind tunnel effect. This is necessary to break the boundary layer of moisture on surfaces.'
    },
    safety: {
      head: 'Living with Drying Equipment',
      items: [
        'Do not turn off the dehumidifiers or fans; it delays the process.',
        'Keep windows and doors closed to maintain the drying chamber.',
        'Watch your step around power cords and ducting.',
        'Empty dehumidifier buckets if they are not self-draining (ours usually pump out automatically).',
        'Report any tripped breakers to us immediately.',
        'Do not cover air movers with blankets or furniture.',
        'Keep children away from equipment intakes and exhaust.',
        'Notify us if the noise becomes unmanageable at night.'
      ],
      kidsPets: 'The equipment gets warm and has moving parts. Keep toddlers and curious pets away from air intakes and power cords.'
    },
    scenarios: [
      'Drying wet insulation inside wall cavities.',
      'Saving hardwood floors with injection mats.',
      'Drying under kitchen cabinets without removing them.',
      'Concrete subfloor drying after tile removal.',
      'Attic structure drying after roof leaks.',
      'Drying plaster walls in historic homes.',
      'Complex drying of multi-layer flooring systems.',
      'Crawl space drying with desiccant dehumidifiers.',
      'Drying behind built-in bookshelves.',
      'Ceiling cavity drying after a pipe burst.'
    ],
    saveVsRemove: {
      save: [
        'Hardwood floors (if no buckling or finish damage)',
        'Drywall (if painted with non-gloss and not swollen)',
        'Framing lumber',
        'Concrete and tile'
      ],
      remove: [
        'Vapor barriers (vinyl flooring) that trap water',
        'Insulation in exterior walls (hard to dry effectively)',
        'Baseboards (often removed to dry the wall behind)'
      ]
    },
    faqs: [
      {
        question: "Why do you need so many fans?",
        answer: "Fans (air movers) evaporate moisture from wet materials into the air. Dehumidifiers then pull that moisture out of the air. You need a balanced system of both to dry a structure effectively."
      },
      {
        question: "Can I turn the equipment off at night?",
        answer: "We strongly advise against it. Turning equipment off stops the drying process and allows mold a chance to grow. If the noise is unbearable, call us to discuss options, but 24/7 runtime is standard."
      },
      {
        question: "What is 'bound water'?",
        answer: "Bound water is moisture trapped deep inside the cellular structure of materials (like wood studs or subfloors). It takes longer to remove than surface water, requiring specialized heat and airflow."
      },
      {
        question: "Will drying raise my electric bill?",
        answer: "Yes, running industrial equipment uses energy. However, it is far cheaper than the cost of mold remediation or reconstruction. Your insurance adjuster is accustomed to these utility costs."
      },
      {
        question: "How do you know it is dry?",
        answer: "We don't guess. We compare moisture readings of the wet materials against a 'dry standard' (a dry area of your home). We only stop when the readings match."
      },
      {
        question: "Can you dry wet insulation?",
        answer: "Fiberglass insulation often loses its R-value and holds water like a sponge, making it hard to dry. We usually recommend replacing wet exterior wall insulation, but we can sometimes dry interior cavities."
      },
      {
        question: "Do you have to cut holes in my walls?",
        answer: "Sometimes. To dry the wall cavity, we might remove the baseboard and drill small holes to inject air. This is much less invasive than tearing out the entire wall."
      },
      {
        question: "What is a desiccant dehumidifier?",
        answer: "It is a specialized machine that uses chemical drying agents instead of condensation. We use them for dense materials like hardwood or concrete, or in very cold environments."
      },
      {
        question: "Can you dry concrete?",
        answer: "Yes, but it is slow. Concrete looks dry on top but holds moisture deep down. We use specific meters to ensure the slab is dry enough to accept new flooring."
      },
      {
        question: "Is heat drying better?",
        answer: "Heat drying is a specific technique we use for difficult materials. It speeds up evaporation but requires careful monitoring to avoid damaging the property."
      }
    ],
    relatedSearchTerms: [
      'hardwood floor drying service',
      'structural drying company',
      'wet wall repair',
      'industrial dehumidifier rental',
      'water damage drying process',
      'moisture meter inspection',
      'flood restoration equipment',
      'desiccant drying service',
      'drying wet insulation',
      'concrete slab drying'
    ]
  },

  // ... (Other services remain, but would need updates later to match type definition)
  {
    id: 'res-storm',
    title: 'Storm Damage Restoration',
    slug: '/services/residential/restoration-services/storm-damage-restoration/',
    shortDescription: 'Recovery from severe weather and hurricane damage.',
    audience: 'RESIDENTIAL',
    category: 'RESTORATION'
  },
  {
    id: 'res-burst',
    title: 'Burst Pipe Cleanup',
    slug: '/services/residential/restoration-services/burst-pipe-cleanup/',
    shortDescription: 'Immediate cleanup for frozen or burst plumbing pipes.',
    audience: 'RESIDENTIAL',
    category: 'RESTORATION'
  },
  {
    id: 'res-fire',
    title: 'Fire & Smoke Cleanup',
    slug: '/services/residential/cleanup-services/fire-smoke-cleanup/',
    shortDescription: 'Restoration for fire damage and smoke odors.',
    audience: 'RESIDENTIAL',
    category: 'CLEANUP'
  },
  {
    id: 'res-odor',
    title: 'Odor Removal',
    slug: '/services/residential/cleanup-services/odor-removal/',
    shortDescription: 'Professional deodorization for persistent smells.',
    audience: 'RESIDENTIAL',
    category: 'CLEANUP'
  },
  {
    id: 'res-content',
    title: 'Contents Cleaning',
    slug: '/services/residential/cleanup-services/contents-cleaning-packout/',
    shortDescription: 'Cleaning and storage for damaged personal items.',
    audience: 'RESIDENTIAL',
    category: 'CLEANUP'
  },
  {
    id: 'res-base',
    title: 'Basement Flooding',
    slug: '/services/residential/specialty-services/basement-flooding/',
    shortDescription: 'Specialized solutions for flooded basements.',
    audience: 'RESIDENTIAL',
    category: 'SPECIALTY'
  },
  {
    id: 'res-crawl',
    title: 'Crawl Space Drying',
    slug: '/services/residential/specialty-services/crawl-space-drying/',
    shortDescription: 'Moisture control and drying for crawl spaces.',
    audience: 'RESIDENTIAL',
    category: 'SPECIALTY'
  },
  {
    id: 'res-floor',
    title: 'Hardwood Floor Drying',
    slug: '/services/residential/specialty-services/hardwood-floor-drying/',
    shortDescription: 'Save wet hardwood floors with injection drying.',
    audience: 'RESIDENTIAL',
    category: 'SPECIALTY'
  },
  {
    id: 'res-roof',
    title: 'Roof Leak Water Damage',
    slug: '/services/residential/specialty-services/roof-leak-water-damage/',
    shortDescription: 'Interior restoration from roof leaks.',
    audience: 'RESIDENTIAL',
    category: 'SPECIALTY'
  },
  {
    id: 'com-water',
    title: 'Commercial Water Damage',
    slug: '/services/commercial/restoration-services/commercial-water-damage/',
    shortDescription: 'Fast water restoration for businesses to minimize downtime.',
    audience: 'COMMERCIAL',
    category: 'RESTORATION'
  },
  {
    id: 'com-flood',
    title: 'Commercial Flood Cleanup',
    slug: '/services/commercial/restoration-services/commercial-flood-cleanup/',
    shortDescription: 'Large-scale flood cleanup for commercial properties.',
    audience: 'COMMERCIAL',
    category: 'RESTORATION'
  },
  {
    id: 'com-large',
    title: 'Large Loss Restoration',
    slug: '/services/commercial/restoration-services/large-loss-restoration/',
    shortDescription: 'Disaster recovery for major catastrophe events.',
    audience: 'COMMERCIAL',
    category: 'RESTORATION'
  },
  {
    id: 'com-sewage',
    title: 'Commercial Sewage',
    slug: '/services/commercial/cleanup-services/commercial-sewage-cleanup/',
    shortDescription: 'Industrial biohazard and sewage cleanup.',
    audience: 'COMMERCIAL',
    category: 'CLEANUP'
  },
  {
    id: 'com-mold',
    title: 'Commercial Mold',
    slug: '/services/commercial/cleanup-services/commercial-mold-remediation/',
    shortDescription: 'Mold remediation for offices and public buildings.',
    audience: 'COMMERCIAL',
    category: 'CLEANUP'
  },
  {
    id: 'com-fire',
    title: 'Commercial Fire',
    slug: '/services/commercial/cleanup-services/commercial-fire-smoke-cleanup/',
    shortDescription: 'Smoke and fire damage cleanup for businesses.',
    audience: 'COMMERCIAL',
    category: 'CLEANUP'
  },
  {
    id: 'com-moist',
    title: 'Moisture Mapping',
    slug: '/services/commercial/technical-services/moisture-mapping-consulting/',
    shortDescription: 'Thermal imaging and moisture detection consulting.',
    audience: 'COMMERCIAL',
    category: 'TECHNICAL'
  },
  {
    id: 'com-air',
    title: 'Indoor Air Quality',
    slug: '/services/commercial/technical-services/indoor-air-quality/',
    shortDescription: 'Air quality testing and improvement.',
    audience: 'COMMERCIAL',
    category: 'TECHNICAL'
  },
  {
    id: 'com-env',
    title: 'Environmental Testing',
    slug: '/services/commercial/technical-services/environmental-testing/',
    shortDescription: 'Testing for hazards and environmental safety.',
    audience: 'COMMERCIAL',
    category: 'TECHNICAL'
  },
  {
    id: 'com-health',
    title: 'Healthcare Facilities',
    slug: '/services/commercial/specialty-services/healthcare-facilities/',
    shortDescription: 'Restoration for hospitals and clinics.',
    audience: 'COMMERCIAL',
    category: 'SPECIALTY'
  },
  {
    id: 'com-hospitality',
    title: 'Hospitality & Multifamily',
    slug: '/services/commercial/specialty-services/hospitality-multifamily/',
    shortDescription: 'Hotels, apartments, and condo complex restoration.',
    audience: 'COMMERCIAL',
    category: 'SPECIALTY'
  },
  {
    id: 'com-muni',
    title: 'Municipal & Education',
    slug: '/services/commercial/specialty-services/municipal-education/',
    shortDescription: 'Services for schools and government buildings.',
    audience: 'COMMERCIAL',
    category: 'SPECIALTY'
  },
  {
    id: 'com-ind',
    title: 'Industrial Facilities',
    slug: '/services/commercial/specialty-services/industrial-facilities/',
    shortDescription: 'Warehouses and manufacturing plant restoration.',
    audience: 'COMMERCIAL',
    category: 'SPECIALTY'
  },
];

export const getServicesByAudience = (audience: string) => SERVICES.filter(s => s.audience === audience);
export const getServicesByCategory = (category: string) => SERVICES.filter(s => s.category === category);
