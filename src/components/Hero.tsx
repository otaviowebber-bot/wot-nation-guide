import { Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-military-dark via-military-medium to-background overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzJhM2EyYSIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-military-light/50 backdrop-blur-sm rounded-full border border-gold/30">
          <Shield className="w-6 h-6 text-gold" />
          <span className="text-gold font-bold tracking-wider">WORLD OF TANKS</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Guia Completo de Nações
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
          Explore os tanques Tier 10 de cada nação e suas mecânicas especiais
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
    </section>
  );
};

export default Hero;
