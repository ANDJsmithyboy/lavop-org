import { Download, FileText, Shield, Eye, CheckCircle, Users, DollarSign, Calendar } from 'lucide-react';

const TransparencySection = () => {
  const reports = [
    {
      title: "Rapport Annuel 2023",
      description: "Bilan complet de nos actions et impact financier",
      year: "2023",
      pages: "45 pages",
      downloadUrl: "/rapport-annuel-2023.pdf",
      type: "PDF"
    },
    {
      title: "Rapport Financier 2023",
      description: "Détail des revenus, dépenses et allocation des fonds",
      year: "2023",
      pages: "28 pages",
      downloadUrl: "/rapport-financier-2023.pdf",
      type: "PDF"
    },
    {
      title: "Rapport Trimestriel Q4 2023",
      description: "Activités et résultats du dernier trimestre",
      year: "Q4 2023",
      pages: "15 pages",
      downloadUrl: "#", // Remplacez par le vrai lien
      type: "PDF"
    }
  ];

  const financialBreakdown = [
    { category: "Programmes sur le terrain", percentage: 75, amount: "75%", color: "bg-[#00B0F0]" },
    { category: "Frais administratifs", percentage: 15, amount: "15%", color: "bg-[#FFD700]" },
    { category: "Collecte de fonds", percentage: 8, amount: "8%", color: "bg-[#CC3366]" },
    { category: "Réserve d'urgence", percentage: 2, amount: "2%", color: "bg-[#66CCFF]" }
  ];

  const certifications = [
    { icon: Shield, title: "Certification ONG", description: "Reconnue par les autorités gabonaises" },
    { icon: CheckCircle, title: "Transparence financière", description: "Audit externe annuel" },
    { icon: Eye, title: "Rapports publics", description: "Publication trimestrielle des comptes" },
    { icon: Users, title: "Gouvernance", description: "Conseil d'administration indépendant" }
  ];

  return (
    <section id="transparence" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003399] mb-4">
            Transparence & Gouvernance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre engagement envers la transparence totale et la responsabilité envers nos donateurs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Financial Transparency */}
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#003399] mb-6 flex items-center space-x-3">
                <DollarSign className="w-8 h-8 text-[#00B0F0]" />
                <span>Utilisation des Dons</span>
              </h3>
              
              <div className="space-y-4">
                {financialBreakdown.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-[#003399]">{item.category}</span>
                      <span className="text-[#00B0F0] font-bold">{item.amount}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full ${item.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-[#00B0F0]/10 rounded-xl">
                <p className="text-sm text-gray-600">
                  <strong>Notre engagement :</strong> 75% de chaque don va directement aux programmes sur le terrain. 
                  Nous maintenons des frais administratifs minimaux pour maximiser l'impact.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gradient-to-br from-[#003399] to-[#00B0F0] text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Nos Certifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => {
                  const IconComponent = cert.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <IconComponent className="w-6 h-6 text-[#FFD700] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold">{cert.title}</h4>
                        <p className="text-white/80 text-sm">{cert.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Reports & Documents */}
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#003399] mb-6 flex items-center space-x-3">
                <FileText className="w-8 h-8 text-[#00B0F0]" />
                <span>Rapports & Documents</span>
              </h3>
              
              <div className="space-y-4">
                {reports.map((report, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#00B0F0] transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-[#003399] mb-2">{report.title}</h4>
                        <p className="text-gray-600 text-sm mb-3">{report.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{report.year}</span>
                          </span>
                          <span>{report.pages}</span>
                          <span className="bg-[#00B0F0]/10 text-[#00B0F0] px-2 py-1 rounded-full">
                            {report.type}
                          </span>
                        </div>
                      </div>
                      <a 
                        href={report.downloadUrl}
                        className="bg-[#00B0F0] hover:bg-[#003399] text-white p-3 rounded-full transition-colors"
                        title="Télécharger le rapport"
                      >
                        <Download className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Policy Documents */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-[#003399] mb-6">Documents Légaux</h3>
              <div className="space-y-4">
                <a href="/politique-confidentialite.pdf" download className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-[#00B0F0]/10 transition-colors">
                  <div>
                    <h4 className="font-semibold text-[#003399]">Politique de Confidentialité</h4>
                    <p className="text-gray-600 text-sm">Protection de vos données personnelles</p>
                  </div>
                  <Download className="w-5 h-5 text-[#00B0F0]" />
                </a>
                
                <a href="/conditions-don.pdf" download className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-[#00B0F0]/10 transition-colors">
                  <div>
                    <h4 className="font-semibold text-[#003399]">Conditions de Don</h4>
                    <p className="text-gray-600 text-sm">Règles et conditions pour les dons</p>
                  </div>
                  <Download className="w-5 h-5 text-[#00B0F0]" />
                </a>
                
                <a href="#" className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-[#00B0F0]/10 transition-colors">
                  <div>
                    <h4 className="font-semibold text-[#003399]">Statuts de l'Association</h4>
                    <p className="text-gray-600 text-sm">Documents officiels de La VOP (À venir)</p>
                  </div>
                  <Download className="w-5 h-5 text-gray-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-[#66CCFF] to-[#00B0F0] rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Notre Engagement de Transparence</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-[#FFD700] mb-2">100%</div>
              <div className="text-white/90">Transparence financière</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FFD700] mb-2">75%</div>
              <div className="text-white/90">Des dons vont aux programmes</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FFD700] mb-2">0%</div>
              <div className="text-white/90">Frais cachés</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;
