import { Download, FileText, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TransparencyPreview = () => {
  const reports = [
    {
      title: "Rapport Annuel 2023",
      description: "Bilan complet de nos actions et impact financier",
      year: "2023",
      pages: "45 pages",
      type: "PDF",
      downloadUrl: "/rapport-annuel-2023.pdf"
    },
    {
      title: "Rapport Financier 2023",
      description: "Détail des revenus, dépenses et allocation des fonds",
      year: "2023",
      pages: "28 pages",
      type: "PDF",
      downloadUrl: "/rapport-financier-2023.pdf"
    }
  ];

  const certifications = [
    { icon: Shield, title: "Certification ONG", description: "Reconnue par les autorités gabonaises" },
    { icon: CheckCircle, title: "Transparence financière", description: "Audit externe annuel" },
    { icon: FileText, title: "Rapports publics", description: "Publication trimestrielle des comptes" }
  ];

  return (
    <section id="transparence-preview" className="py-20 bg-white">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Financial Transparency */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-[#003399] mb-6">
              Utilisation des Dons
            </h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-[#003399]">Programmes sur le terrain</span>
                <span className="text-[#00B0F0] font-bold">75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="h-3 rounded-full bg-[#00B0F0]" style={{ width: '75%' }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="font-semibold text-[#003399]">Frais administratifs</span>
                <span className="text-[#FFD700] font-bold">15%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="h-3 rounded-full bg-[#FFD700]" style={{ width: '15%' }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="font-semibold text-[#003399]">Collecte de fonds</span>
                <span className="text-[#CC3366] font-bold">8%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="h-3 rounded-full bg-[#CC3366]" style={{ width: '8%' }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="font-semibold text-[#003399]">Réserve d'urgence</span>
                <span className="text-[#66CCFF] font-bold">2%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="h-3 rounded-full bg-[#66CCFF]" style={{ width: '2%' }}></div>
              </div>
            </div>

            <div className="p-4 bg-[#00B0F0]/10 rounded-xl">
              <p className="text-sm text-gray-600">
                <strong>Notre engagement :</strong> 75% de chaque don va directement aux programmes sur le terrain.
              </p>
            </div>
          </div>

          {/* Reports & Documents */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#003399] mb-6">
                Rapports & Documents
              </h3>
              
              <div className="space-y-4">
                {reports.map((report, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 hover:border-[#00B0F0] transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-[#003399] mb-2">{report.title}</h4>
                        <p className="text-gray-600 text-sm mb-3">{report.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span>{report.year}</span>
                          <span>{report.pages}</span>
                          <span className="bg-[#00B0F0]/10 text-[#00B0F0] px-2 py-1 rounded-full">
                            {report.type}
                          </span>
                        </div>
                      </div>
                      <a 
                        href={report.downloadUrl}
                        download
                        className="bg-[#00B0F0] hover:bg-[#003399] text-white p-2 rounded-full transition-colors"
                        title="Télécharger le rapport"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gradient-to-br from-[#003399] to-[#00B0F0] text-white rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Nos Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => {
                  const IconComponent = cert.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <IconComponent className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-1" />
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
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            to="/transparence" 
            className="group inline-flex items-center space-x-2 bg-[#003399] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#00B0F0] transition-colors transform hover:scale-105"
          >
            <FileText className="w-5 h-5" />
            <span>Voir tous les rapports</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TransparencyPreview;
