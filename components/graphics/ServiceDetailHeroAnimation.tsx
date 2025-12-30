import WaterDamageHero from './scenes/WaterDamageHero';
import MoldHero from './scenes/MoldHero';
import FireHero from './scenes/FireHero';
import HeroVisual from '../ui/illustrations/service-hero'; // Fallback for old ones

interface ServiceDetailHeroProps {
  visualKey?: string;
  className?: string;
}

const ServiceDetailHeroAnimation: React.FC<ServiceDetailHeroProps> = ({ visualKey = 'default', className }) => {
  // Simple router for visuals
  const renderVisual = () => {
    const key = visualKey.toLowerCase();

    // New Material 3 Illustrations
    if (key.includes('water')) {
      return <WaterDamageHero />;
    }
    if (key.includes('mold') || key.includes('odor')) {
      return <MoldHero />;
    }
    if (key.includes('fire') || key.includes('smoke')) {
      return <FireHero />;
    }

    // Fallback to legacy static SVGs
    return <HeroVisual visualKey={visualKey} />;
  };

  return (
    <div className={`w-full ${className}`}>
      {renderVisual()}
    </div>
  );
};

export default ServiceDetailHeroAnimation;