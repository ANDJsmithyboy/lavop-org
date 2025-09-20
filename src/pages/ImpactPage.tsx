import { MapPin, Calendar, FileText, Heart, Users, Globe, Award, CheckCircle } from 'lucide-react';

const ImpactPage = () => {
  const orphelinats = [
    {
      name: "Bon Samaritain",
      location: "Libreville, Gabon",
      description: "Dons réguliers en nature et en numéraire",
      lastDonation: "Décembre 2024",
      type: "Orphelinat"
    },
    {
      name: "Arc-en-ciel de Sainte-Marie",
      location: "Libreville, Gabon", 
      description: "Soutien financier et matériel éducatif",
      lastDonation: "Novembre 2024",
      type: "Orphelinat"
    }
  ];

  const aidesProvinciales = [
    {
      ville: "Lambaréné",
      besoin: "Fournitures scolaires",
      date: "Octobre 2024",
      description: "Distribution de kits scolaires pour 50 enfants"
    },
    {
      ville: "Port-Gentil",
      besoin: "Aide alimentaire",
      date: "Septembre 2024", 
      description: "Soutien nutritionnel pour familles vulnérables"
    }
  ];

  const aidesEtranger = [
    {
      pays: "USA",
      type: "Virement Cash App",
      montant: "500$",
      date: "Décembre 2024",
      description: "Aide familiale urgente"
    },
    {
      pays: "Canada",
      type: "Virement bancaire",
      montant: "300 CAD",
      date: "Novembre 2024",
      description: "Soutien étudiant"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#003399] to-[#00B0F0] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Notre Impact Concret
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Actions locales à Libreville & soutiens ponctuels à l'étranger depuis 2019
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold text-[#FFD700] mb-2">6 ans</div>
                <div className="text-white/90">D'engagement</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold text-[#FFD700] mb-2">2</div>
                <div className="text-white/90">Orphelinats soutenus</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold text-[#FFD700] mb-2">100%</div>
                <div className="text-white/90">Transparence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Orphelinats Libreville */}
      <section id="orphelinats" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#003399] mb-4">
              Orphelinats — Libreville
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dons réguliers en nature et en numéraire aux orphelinats de Libreville
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {orphelinats.map((orphelinat, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-[#00B0F0] text-white p-3 rounded-full">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#003399] mb-2">{orphelinat.name}</h3>
                    <div className="flex items-center space-x-2 text-gray-600 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{orphelinat.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>Dernier don : {orphelinat.lastDonation}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{orphelinat.description}</p>
                <div className="bg-[#00B0F0]/10 text-[#003399] px-4 py-2 rounded-full text-sm font-semibold inline-block">
                  {orphelinat.type}
                </div>
              </div>
            ))}
          </div>

          {/* Preuves */}
          <div className="bg-gradient-to-r from-[#66CCFF] to-[#00B0F0] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Preuves de nos actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <FileText className="w-12 h-12 mx-auto mb-4 text-[#FFD700]" />
                <h4 className="font-semibold mb-2">Reçus de dons</h4>
                <p className="text-white/80 text-sm">Justificatifs de nos contributions</p>
              </div>
              <div className="text-center">
                <Heart className="w-12 h-12 mx-auto mb-4 text-[#FFD700]" />
                <h4 className="font-semibold mb-2">Lettres de remerciement</h4>
                <p className="text-white/80 text-sm">Témoignages des bénéficiaires</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-[#FFD700]" />
                <h4 className="font-semibold mb-2">Photos avec consentement</h4>
                <p className="text-white/80 text-sm">Images de nos interventions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aides Provinciales */}
      <section id="provinces" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#003399] mb-4">
              Aides Provinciales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Missions d'entraide selon les besoins urgents en province
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aidesProvinciales.map((aide, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-[#CC3366] text-white p-3 rounded-full">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#003399] mb-2">{aide.ville}</h3>
                    <div className="flex items-center space-x-2 text-gray-600 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{aide.date}</span>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="bg-[#CC3366]/10 text-[#CC3366] px-3 py-1 rounded-full text-sm font-semibold">
                    {aide.besoin}
                  </span>
                </div>
                <p className="text-gray-600">{aide.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aides à l'Étranger */}
      <section id="etranger" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#003399] mb-4">
              Soutiens Financiers à l'Étranger
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Appuis ciblés via virements et applications de paiement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aidesEtranger.map((aide, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-[#FFD700] text-[#003399] p-3 rounded-full">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#003399] mb-2">{aide.pays}</h3>
                    <div className="flex items-center space-x-2 text-gray-600 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{aide.date}</span>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="bg-[#FFD700]/10 text-[#003399] px-3 py-1 rounded-full text-sm font-semibold">
                    {aide.type}
                  </span>
                  <span className="ml-2 text-2xl font-bold text-[#003399]">{aide.montant}</span>
                </div>
                <p className="text-gray-600">{aide.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparence */}
      <section className="py-20 bg-gradient-to-r from-[#003399] to-[#00B0F0] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Transparence Totale</h2>
            <p className="text-xl text-white/90">
              Politique d'utilisation des dons et rapports financiers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Utilisation des Dons</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Orphelinats Libreville</span>
                  <span className="text-[#FFD700] font-bold">60%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-3">
                  <div className="bg-[#FFD700] h-3 rounded-full" style={{ width: '60%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span>Aides provinciales</span>
                  <span className="text-[#00B0F0] font-bold">25%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-3">
                  <div className="bg-[#00B0F0] h-3 rounded-full" style={{ width: '25%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span>Soutiens à l'étranger</span>
                  <span className="text-[#CC3366] font-bold">10%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-3">
                  <div className="bg-[#CC3366] h-3 rounded-full" style={{ width: '10%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span>Fonctionnement</span>
                  <span className="text-white font-bold">5%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-3">
                  <div className="bg-white h-3 rounded-full" style={{ width: '5%' }}></div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Documents Disponibles</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FileText className="w-6 h-6 text-[#FFD700]" />
                  <span>Rapport annuel 2024</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FileText className="w-6 h-6 text-[#FFD700]" />
                  <span>Rapport financier 2024</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#FFD700]" />
                  <span>Politique de confidentialité</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#FFD700]" />
                  <span>Conditions de don</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImpactPage;
