import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Tank {
  name: string;
  type: string;
  specialty: string;
}

interface NationCardProps {
  nation: string;
  flag: string;
  color: string;
  tanks: Tank[];
  mechanics: string[];
}

const NationCard = ({ nation, flag, color, tanks, mechanics }: NationCardProps) => {
  return (
    <Card className="bg-card hover:bg-card/80 transition-all duration-300 border-2 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/20">
      <CardHeader>
        <div className="flex items-center gap-3 mb-4">
          <img src={flag} alt={`Bandeira ${nation}`} className="w-16 h-10 object-cover rounded shadow-md" />
          <CardTitle className="text-2xl font-bold" style={{ color }}>{nation}</CardTitle>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold text-gold">Mecânicas Especiais:</h4>
          <div className="flex flex-wrap gap-2">
            {mechanics.map((mechanic, idx) => (
              <Badge key={idx} variant="secondary" className="bg-military-light text-foreground">
                {mechanic}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <h4 className="font-semibold mb-3 text-gold">Tanques Tier 10:</h4>
        <div className="space-y-3">
          {tanks.map((tank, idx) => (
            <div key={idx} className="p-3 bg-military-dark/30 rounded-lg border border-military-light">
              <div className="flex justify-between items-start mb-1">
                <span className="font-bold text-foreground">{tank.name}</span>
                <Badge variant="outline" className="text-xs border-gold/50 text-gold">{tank.type}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{tank.specialty}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NationCard;
