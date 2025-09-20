import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Marie Mbongo",
      location: "Libreville, Gabon",
      role: "Veuve et mère de 4 enfants",
      image: "https://images.pexels.com/photos/8088458/pexels-photo-8088458.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "La VOP a transformé ma vie. Après la mort de mon mari, j'étais désespérée. Grâce au soutien de Daniel Jonathan et de l'équipe, mes enfants vont à l'école et j'ai découvert l'amour de Christ. Que Dieu bénisse cette œuvre !",
      rating: 5,
      impact: "Formation professionnelle reçue"
    },
    {
      id: 2,
      name: "Jean-Baptiste Nkomo",
      location: "Douala, Cameroun",
      role: "Ancien orphelin, maintenant pasteur",
      image: "https://images.pexels.com/photos/8078200/pexels-photo-8078200.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "Orphelin à 8 ans, La VOP m'a soutenu spirituellement et matériellement. Aujourd'hui, je suis pasteur et j'aide d'autres orphelins. Dieu utilise Daniel Jonathan et La VOP pour changer des destinées.",
      rating: 5,
      impact: "Éducation complète financée"
    },
    {
      id: 3,
      name: "Sarah Williams",
      location: "Londres, Royaume-Uni",
      role: "Partenaire et donatrice",
      image: "https://images.pexels.com/photos/8083590/pexels-photo-8083590.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "Soutenir La VOP a donné un sens profond à ma vie chrétienne. Voir l'impact concret des actions de Daniel Jonathan et la transparence de l'organisation me pousse à donner toujours plus pour cette œuvre de Dieu.",
      rating: 5,
      impact: "30 familles aidées grâce à ses dons"
    },
    {
      id: 4,
      name: "Pierre Mvoula",
      location: "Libreville, Gabon",
      role: "Leader jeunesse VOP",
      image: "https://images.pexels.com/photos/8089000/pexels-photo-8089000.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "VOP Youth m'a donné les outils pour évangéliser ma génération. Avec Daniel Jonathan comme mentor, nous organisons des événements et nous voyons des jeunes donner leur vie à Christ chaque semaine.",
      rating: 5,
      impact: "Leader de 150+ jeunes"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-[#003399] via-[#00B0F0] to-[#66CCFF]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Témoignages de Transformation
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Découvrez comment Dieu transforme des vies à travers le ministère de La VOP
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={current.image} 
                  alt={current.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Quote Icon */}
                <div className="absolute top-6 left-6">
                  <div className="bg-[#00B0F0] p-3 rounded-full">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Impact Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 px-4 py-2 rounded-full text-[#003399] font-semibold text-sm text-center">
                    {current.impact}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#FFD700] fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-8 italic">
                  "{current.quote}"
                </blockquote>

                {/* Author */}
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-[#003399]">{current.name}</h4>
                  <p className="text-[#00B0F0] font-semibold">{current.role}</p>
                  <p className="text-gray-600">{current.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button 
              onClick={prevTestimonial}
              className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial
                      ? 'bg-[#FFD700] scale-125'
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={nextTestimonial}
              className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Votre Histoire Peut Être la Prochaine
            </h3>
            <p className="text-white/90 mb-6">
              Rejoignez des milliers de personnes dont la vie a été transformée par l'amour de Christ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#FFD700] text-[#003399] px-8 py-3 rounded-full font-bold hover:bg-white transition-colors">
                Demander de l'Aide
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#003399] transition-all">
                Partager Mon Témoignage
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;