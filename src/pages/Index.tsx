import Hero from "@/components/Hero";
import NationCard from "@/components/NationCard";
import ComparisonTable from "@/components/ComparisonTable";
import { nations } from "@/data/nations";
import { heavyTanks, mediumTanks, tankDestroyers, lightTanks } from "@/data/comparisons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      <main className="container mx-auto px-4 py-16">
        {/* Nations Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
            Nações e Suas Características
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Cada nação possui mecânicas únicas e tanques especializados
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nations.map((nation, idx) => (
              <NationCard
                key={idx}
                nation={nation.nation}
                flag={nation.flag}
                color={nation.color}
                tanks={nation.tanks}
                mechanics={nation.mechanics}
              />
            ))}
          </div>
        </section>

        {/* Comparison Tables Section */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
            Comparação de Tanques Tier 10
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Compare estatísticas e especialidades por classe
          </p>

          <Tabs defaultValue="heavy" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 bg-military-dark/50 border border-military-light">
              <TabsTrigger value="heavy" className="data-[state=active]:bg-gold data-[state=active]:text-primary-foreground">
                🛡️ Pesados
              </TabsTrigger>
              <TabsTrigger value="medium" className="data-[state=active]:bg-gold data-[state=active]:text-primary-foreground">
                ⚔️ Médios
              </TabsTrigger>
              <TabsTrigger value="td" className="data-[state=active]:bg-gold data-[state=active]:text-primary-foreground">
                🎯 Caça-Tanques
              </TabsTrigger>
              <TabsTrigger value="light" className="data-[state=active]:bg-gold data-[state=active]:text-primary-foreground">
                ⚡ Leves
              </TabsTrigger>
            </TabsList>

            <TabsContent value="heavy" className="space-y-4">
              <ComparisonTable
                title="Tanques Pesados Tier 10"
                icon="🛡️"
                tanks={heavyTanks}
              />
            </TabsContent>

            <TabsContent value="medium" className="space-y-4">
              <ComparisonTable
                title="Tanques Médios Tier 10"
                icon="⚔️"
                tanks={mediumTanks}
              />
            </TabsContent>

            <TabsContent value="td" className="space-y-4">
              <ComparisonTable
                title="Caça-Tanques Tier 10"
                icon="🎯"
                tanks={tankDestroyers}
              />
            </TabsContent>

            <TabsContent value="light" className="space-y-4">
              <ComparisonTable
                title="Tanques Leves Tier 10"
                icon="⚡"
                tanks={lightTanks}
              />
            </TabsContent>
          </Tabs>
        </section>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-gold/30 text-center">
          <p className="text-muted-foreground">
            Guia completo de World of Tanks - Todas as nações e seus tanques Tier 10
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Estatísticas e mecânicas podem variar com atualizações do jogo
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
