
import { LocationData } from '../types';

export const LOCATIONS: LocationData[] = [
  { title: 'Ashburn', path: '/locations/virginia/ashburn/', region: 'NOVA', lat: 39.0438, lng: -77.4875 },
  { title: 'Arlington', path: '/locations/virginia/arlington/', region: 'NOVA', lat: 38.8816, lng: -77.0910 },
  { title: 'Alexandria', path: '/locations/virginia/alexandria/', region: 'NOVA', lat: 38.8048, lng: -77.0469 },
  { title: 'Bethesda', path: '/locations/maryland/bethesda/', region: 'MD', lat: 38.9847, lng: -77.0947 }, // Moved to Primary
  { title: 'Fairfax', path: '/locations/virginia/fairfax/', region: 'NOVA', lat: 38.8462, lng: -77.3064 },
  { title: 'Falls Church', path: '/locations/virginia/falls-church/', region: 'NOVA', lat: 38.8823, lng: -77.1711 },
  { title: 'Great Falls', path: '/locations/virginia/great-falls/', region: 'NOVA', lat: 39.0012, lng: -77.2891 },
  { title: 'Herndon', path: '/locations/virginia/herndon/', region: 'NOVA', lat: 38.9696, lng: -77.3861 },
  { title: 'Lorton', path: '/locations/virginia/lorton/', region: 'NOVA', lat: 38.7043, lng: -77.2197 },
  { title: 'McLean', path: '/locations/virginia/mclean/', region: 'NOVA', lat: 38.9339, lng: -77.1773 },
  { title: 'Reston', path: '/locations/virginia/reston/', region: 'NOVA', lat: 38.9586, lng: -77.3570 },
  { title: 'Springfield', path: '/locations/virginia/springfield/', region: 'NOVA', lat: 38.7891, lng: -77.1872 },
  { title: 'Tysons', path: '/locations/virginia/tysons/', region: 'NOVA', lat: 38.9187, lng: -77.2311 },
  { title: 'Washington DC', path: '/locations/dc/washington/', region: 'DC', lat: 38.9072, lng: -77.0369 },
];

export const NEARBY_AREAS: LocationData[] = [
  { title: 'Silver Spring MD', path: '/locations/maryland/silver-spring/', region: 'MD', lat: 38.9907, lng: -77.0261 },
  { title: 'Potomac MD', path: '/locations/maryland/potomac/', region: 'MD', lat: 39.0180, lng: -77.2090 },
  { title: 'Vienna VA', path: '/locations/virginia/vienna/', region: 'NOVA', lat: 38.9012, lng: -77.2653 },
  { title: 'Chantilly VA', path: '/locations/virginia/chantilly/', region: 'NOVA', lat: 38.8943, lng: -77.4311 },
];