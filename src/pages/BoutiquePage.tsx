import StoreSection from '../components/StoreSection';
import OfficialShopSection from '../components/OfficialShopSection';
import ContradoPricing from '../components/ContradoPricing';

const BoutiquePage = () => {
  return (
    <div className="pt-16">
      <OfficialShopSection />
      <div className="container mx-auto px-4 py-8">
        <ContradoPricing />
      </div>
      <StoreSection />
    </div>
  );
};

export default BoutiquePage;
