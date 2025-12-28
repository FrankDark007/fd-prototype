// Material 3 Design Tokens for Properties & Illustrations

export const materialTheme = {
    // Primary (Blue - for Water/General)
    primary: {
        98: '#FDFCFE',
        95: '#EDF2FA',
        90: '#D5E3FF',
        80: '#AAC7FF',
        40: '#005AC1',
        30: '#00458E',
        10: '#001D45',
    },
    // Secondary (Teal/Green - for Mold)
    secondary: {
        98: '#F3FDF5',
        95: '#DDF7E4',
        90: '#B6ECCA', // Mold Spore Highlight
        80: '#7CD0A4',
        40: '#006C45', // Mold Spore Dark
        10: '#002112',
    },
    // Tertiary (Orange/Red - for Fire)
    tertiary: {
        98: '#FFF8F6',
        95: '#FFEDE8',
        90: '#FFDAD1', // Flame Highlight
        80: '#FFB4A3',
        40: '#9C432E', // Flame Core
        10: '#3D0600',
    },
    // Neutral (Surfaces)
    neutral: {
        98: '#F9F9FC',
        96: '#F3F3F6', // Surface Container Low
        94: '#EEEDF1', // Surface Container
        92: '#E8E7EB', // Surface Container High
        10: '#191C20',
    },
    // Animation Easing (Google Standard)
    easing: {
        standard: [0.2, 0.0, 0, 1.0], // cubic-bezier(0.2, 0.0, 0, 1.0)
        emphasized: [0.2, 0.0, 0, 1.0],
        decelerated: [0.05, 0.7, 0.1, 1.0],
    }
};
