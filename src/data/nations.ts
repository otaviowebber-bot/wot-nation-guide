import russiaFlag from "@/assets/flags/russia.jpg";
import germanyFlag from "@/assets/flags/germany.jpg";
import usaFlag from "@/assets/flags/usa.jpg";
import chinaFlag from "@/assets/flags/china.jpg";
import ukFlag from "@/assets/flags/uk.jpg";
import franceFlag from "@/assets/flags/france.jpg";
import japanFlag from "@/assets/flags/japan.jpg";
import swedenFlag from "@/assets/flags/sweden.jpg";
import polandFlag from "@/assets/flags/poland.jpg";
import italyFlag from "@/assets/flags/italy.jpg";
import czechoslovakiaFlag from "@/assets/flags/czechoslovakia.jpg";

export const nations = [
  {
    nation: "URSS",
    flag: russiaFlag,
    color: "#DC143C",
    mechanics: ["Blindagem Pesada", "Alto Dano Alfa", "Canhões Potentes"],
    tanks: [
      { name: "IS-7", type: "Pesado", specialty: "Blindagem inclinada superior, torrão impenetrável" },
      { name: "Object 277", type: "Pesado", specialty: "Mobilidade excelente com blindagem sólida" },
      { name: "Object 140", type: "Médio", specialty: "Versatilidade e precisão superiores" },
      { name: "T-100 LT", type: "Leve", specialty: "Reconhecimento ativo com alta mobilidade" },
      { name: "Object 268/4", type: "Caça-Tanque", specialty: "Blindagem frontal extrema" },
    ]
  },
  {
    nation: "Alemanha",
    flag: germanyFlag,
    color: "#FFD700",
    mechanics: ["Precisão Excepcional", "Blindagem Frontal", "Engenharia Avançada"],
    tanks: [
      { name: "Maus", type: "Pesado", specialty: "Tanque mais pesado do jogo com armadura maciça" },
      { name: "E 100", type: "Pesado", specialty: "Enorme dano alfa e blindagem sólida" },
      { name: "Leopard 1", type: "Médio", specialty: "Precisão incomparável e mobilidade" },
      { name: "Grille 15", type: "Caça-Tanque", specialty: "Maior penetração e dano do jogo" },
      { name: "Rhm. Panzerwagen", type: "Leve", specialty: "Canhão de 15cm em chassi leve" },
    ]
  },
  {
    nation: "EUA",
    flag: usaFlag,
    color: "#3C3B6E",
    mechanics: ["Gun Depression", "Torrões Fortes", "Versatilidade"],
    tanks: [
      { name: "T110E5", type: "Pesado", specialty: "Torrão forte com gun depression de -10°" },
      { name: "M48 Patton", type: "Médio", specialty: "Excelente gun handling e flexibilidade" },
      { name: "T110E3", type: "Caça-Tanque", specialty: "Blindagem frontal impenetrável" },
      { name: "T92 HMC", type: "Artilharia", specialty: "Maior calibre de artilharia" },
      { name: "XM551 Sheridan", type: "Leve", specialty: "Míssil guiado e autoloader" },
    ]
  },
  {
    nation: "China",
    flag: chinaFlag,
    color: "#DE2910",
    mechanics: ["Híbrido Soviético-Ocidental", "Alto Dano Alfa", "Blindagem Confiável"],
    tanks: [
      { name: "113", type: "Pesado", specialty: "Pike nose com excelente mobilidade" },
      { name: "121", type: "Médio", specialty: "Alto dano alfa para um médio" },
      { name: "WZ-111 5A", type: "Pesado", specialty: "Versão melhorada do IS-7" },
      { name: "WZ-132-1", type: "Leve", specialty: "Dano alfa superior em tanque leve" },
      { name: "WZ-113G FT", type: "Caça-Tanque", specialty: "Blindagem frontal massiva" },
    ]
  },
  {
    nation: "Reino Unido",
    flag: ukFlag,
    color: "#012169",
    mechanics: ["HESH Shells", "Precisão", "Torrões Fortes"],
    tanks: [
      { name: "Super Conqueror", type: "Pesado", specialty: "Torrão impenetrável e DPM alto" },
      { name: "FV215b 183", type: "Caça-Tanque", specialty: "Maior dano alfa do jogo (1750 HESH)" },
      { name: "Centurion AX", type: "Médio", specialty: "Gun depression e HESH devastador" },
      { name: "Manticore", type: "Leve", specialty: "Invisibilidade extrema" },
      { name: "FV4005", type: "Caça-Tanque", specialty: "HESH de 183mm com dano massivo" },
    ]
  },
  {
    nation: "França",
    flag: franceFlag,
    color: "#0055A4",
    mechanics: ["Autoloader", "Mobilidade", "Burst Damage"],
    tanks: [
      { name: "AMX 50 B", type: "Pesado", specialty: "Autoloader de 4 tiros com excelente mobilidade" },
      { name: "Bat.-Châtillon 25t", type: "Médio", specialty: "Clip damage devastador (1950 HP)" },
      { name: "AMX 13 105", type: "Leve", specialty: "Autoloader em tanque leve para burst damage" },
      { name: "Foch 155", type: "Caça-Tanque", specialty: "Autoloader com blindagem frontal" },
      { name: "AMX M4 54", type: "Pesado", specialty: "Autoloader pesado com oscilação" },
    ]
  },
  {
    nation: "Japão",
    flag: japanFlag,
    color: "#BC002D",
    mechanics: ["Gun Depression", "Precisão", "Blindagem de Torrão"],
    tanks: [
      { name: "Type 5 Heavy", type: "Pesado", specialty: "Armadura super pesada e howitzer de derrick" },
      { name: "STB-1", type: "Médio", specialty: "Gun depression hidráulico (-14°)" },
      { name: "Type 5 Chi-Ri", type: "Médio", specialty: "Autoloader rápido" },
      { name: "Type 4 Heavy", type: "Pesado", specialty: "Blindagem extrema e alto HP" },
      { name: "Ho-Ri 3", type: "Caça-Tanque", specialty: "Alto dano e blindagem decente" },
    ]
  },
  {
    nation: "Suécia",
    flag: swedenFlag,
    color: "#006AA7",
    mechanics: ["Siege Mode", "Hydropneumatic", "Autoloader"],
    tanks: [
      { name: "Kranvagn", type: "Pesado", specialty: "Torrão impenetrável com autoloader de 3 tiros" },
      { name: "UDES 15/16", type: "Médio", specialty: "Hydropneumatic suspension (-15° depression)" },
      { name: "Strv 103B", type: "Caça-Tanque", specialty: "Siege mode com camuflagem extrema" },
      { name: "Emil II", type: "Pesado", specialty: "Autoloader com blindagem de torrão" },
      { name: "Strv 103-0", type: "Caça-Tanque", specialty: "Sem torrão, chassi como arma" },
    ]
  },
  {
    nation: "Polônia",
    flag: polandFlag,
    color: "#DC143C",
    mechanics: ["Reverse Speed", "Burst Autoloader", "Mobilidade"],
    tanks: [
      { name: "60TP Lewandowskiego", type: "Pesado", specialty: "Maior dano alfa (750) em tanque pesado" },
      { name: "CS-63", type: "Médio", specialty: "Modo de velocidade alternativo" },
      { name: "Manticore", type: "Leve", specialty: "Excelente camuflagem passiva" },
    ]
  },
  {
    nation: "Itália",
    flag: italyFlag,
    color: "#009246",
    mechanics: ["Autoreloader", "Mobilidade", "Gun Depression"],
    tanks: [
      { name: "Rinoceronte", type: "Pesado", specialty: "Autoreloader com boa blindagem" },
      { name: "Progetto 65", type: "Médio", specialty: "Autoreloader versátil" },
      { name: "Minotauro", type: "Caça-Tanque", specialty: "Autoloader triplo de alto DPM" },
    ]
  },
  {
    nation: "Checoslováquia",
    flag: czechoslovakiaFlag,
    color: "#11457E",
    mechanics: ["Autoloader", "Gun Depression", "Suporte"],
    tanks: [
      { name: "Vz. 55", type: "Pesado", specialty: "Double-barrel autoloader (920 dano por clipe duplo)" },
      { name: "TVP T 50/51", type: "Médio", specialty: "Autoloader de 4 tiros de alto burst" },
    ]
  }
];
