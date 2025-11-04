import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TankStats {
  name: string;
  nation: string;
  hp: number;
  armor: string;
  gun: string;
  mobility: string;
  specialty: string;
}

interface ComparisonTableProps {
  title: string;
  icon: string;
  tanks: TankStats[];
}

const ComparisonTable = ({ title, icon, tanks }: ComparisonTableProps) => {
  return (
    <Card className="bg-card border-2 border-military-light">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <span className="text-3xl">{icon}</span>
          <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
            {title}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-military-light hover:bg-military-dark/30">
                <TableHead className="text-gold font-bold">Tanque</TableHead>
                <TableHead className="text-gold font-bold">Nação</TableHead>
                <TableHead className="text-gold font-bold">HP</TableHead>
                <TableHead className="text-gold font-bold">Blindagem</TableHead>
                <TableHead className="text-gold font-bold">Canhão</TableHead>
                <TableHead className="text-gold font-bold">Mobilidade</TableHead>
                <TableHead className="text-gold font-bold">Especialidade</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tanks.map((tank, idx) => (
                <TableRow key={idx} className="border-military-light hover:bg-military-dark/20">
                  <TableCell className="font-bold text-foreground">{tank.name}</TableCell>
                  <TableCell className="text-muted-foreground">{tank.nation}</TableCell>
                  <TableCell className="text-foreground">{tank.hp}</TableCell>
                  <TableCell className="text-muted-foreground">{tank.armor}</TableCell>
                  <TableCell className="text-muted-foreground">{tank.gun}</TableCell>
                  <TableCell className="text-muted-foreground">{tank.mobility}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{tank.specialty}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ComparisonTable;
