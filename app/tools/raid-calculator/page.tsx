"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Flame, Bomb, Package, Zap } from "lucide-react";

// Icon helper component with fallback
const ItemIcon = ({ src, alt, size = 24, emoji }: { src: string; alt: string; size?: number; emoji?: string }) => {
  const [error, setError] = useState(false);
  
  if (error && emoji) {
    return <span className="text-xl">{emoji}</span>;
  }
  
  if (error) {
    return <Package className={`h-${size/4} w-${size/4}`} />;
  }
  
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="object-contain"
      onError={() => setError(true)}
      unoptimized
    />
  );
};

// Structure selection button component
const StructureButton = ({ 
  type, 
  selectedStructure, 
  onSelect 
}: { 
  type: StructureType; 
  selectedStructure: StructureType; 
  onSelect: (type: StructureType) => void;
}) => {
  const structureData = RAID_DATA[type];
  const iconData = getStructureIcon(type);
  
  return (
    <button
      onClick={() => onSelect(type)}
      className={`p-6 rounded-lg border-2 transition-all hover:border-accent hover:bg-accent/5 flex flex-col items-center ${
        selectedStructure === type 
          ? 'border-accent bg-accent/10' 
          : 'border-border bg-muted/30'
      }`}
    >
      <ItemIcon 
        src={iconData.icon} 
        alt={structureData.name}
        size={72}
        emoji={iconData.emoji}
      />
      <div className="mt-3 text-sm font-medium text-center">
        {getMaterialName(structureData.name)}
      </div>
      <div className="text-xs text-muted-foreground text-center mt-1">
        {structureData.hp} HP
      </div>
    </button>
  );
};

// Resource display component
const ResourceItem = ({ 
  iconSrc, 
  alt, 
  emoji, 
  label, 
  value 
}: { 
  iconSrc: string; 
  alt: string; 
  emoji: string; 
  label: string; 
  value: number;
}) => (
  <div className="flex items-center gap-2 text-sm">
    <ItemIcon 
      src={iconSrc} 
      alt={alt}
      size={20}
      emoji={emoji}
    />
    <div>
      <div className="text-muted-foreground text-xs">{label}</div>
      <div className="font-semibold">{value.toLocaleString()}</div>
    </div>
  </div>
);

// Structure tab content component
const StructureTabContent = ({ 
  types, 
  selectedStructure, 
  onSelect 
}: { 
  types: StructureType[]; 
  selectedStructure: StructureType; 
  onSelect: (type: StructureType) => void;
}) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
    {types.map((type) => (
      <StructureButton 
        key={type}
        type={type}
        selectedStructure={selectedStructure}
        onSelect={onSelect}
      />
    ))}
  </div>
);

// Resource configuration for display
const RESOURCE_CONFIG = [
  { key: 'metal', iconSrc: '/icons/resources/metal-fragments.png', alt: 'Metal', emoji: '🔩', label: 'Metal Frags' },
  { key: 'cloth', iconSrc: '/icons/resources/cloth.png', alt: 'Cloth', emoji: '🧵', label: 'Cloth' },
  { key: 'lowGradeFuel', iconSrc: '/icons/resources/low-grade-fuel.png', alt: 'Low Grade Fuel', emoji: '⛽', label: 'Low Grade' },
  { key: 'techTrash', iconSrc: '/icons/resources/tech-trash.png', alt: 'Tech Trash', emoji: '🔧', label: 'Tech Trash' },
  { key: 'explosives', iconSrc: '/icons/resources/explosives.png', alt: 'Explosives', emoji: '💣', label: 'Explosives' },
  { key: 'metalPipes', iconSrc: '/icons/resources/metal-pipe.png', alt: 'Metal Pipes', emoji: '🔩', label: 'Metal Pipes' },
] as const;

// Calculate total resources for a method
const calculateMethodResources = (
  method: ExplosiveMethod,
  quantity: number,
  useMixingTable: boolean
) => {
  const costs = EXPLOSIVE_COSTS[method.name];
  const totalQty = method.quantity * quantity;
  const totalSulfur = (costs?.sulfur || 0) * method.quantity * quantity;
  const totalGunpowder = (costs?.gunpowder || 0) * method.quantity * quantity;
  const totalCharcoalWithMixing = calculateCharcoal(totalGunpowder, true);
  const totalCharcoalWithoutMixing = calculateCharcoal(totalGunpowder, false);
  const totalCharcoal = useMixingTable ? totalCharcoalWithMixing : totalCharcoalWithoutMixing;
  const charcoalSavings = totalCharcoalWithoutMixing - totalCharcoalWithMixing;
  
  return {
    totalQty,
    totalSulfur,
    totalGunpowder,
    totalCharcoal,
    charcoalSavings,
    metal: (costs?.metal || 0) * method.quantity * quantity,
    cloth: (costs?.cloth || 0) * method.quantity * quantity,
    lowGradeFuel: (costs?.lowGradeFuel || 0) * method.quantity * quantity,
    techTrash: (costs?.techTrash || 0) * method.quantity * quantity,
    explosives: (costs?.explosives || 0) * method.quantity * quantity,
    metalPipes: (costs?.metalPipes || 0) * method.quantity * quantity,
  };
};

// Raid method card component
const RaidMethodCard = ({
  method,
  quantity,
  useMixingTable,
}: {
  method: ExplosiveMethod;
  quantity: number;
  useMixingTable: boolean;
}) => {
  const resources = calculateMethodResources(method, quantity, useMixingTable);
  const explosiveIcon = getExplosiveIcon(method.name);
  
  return (
    <div 
      className={`p-4 rounded-lg border-2 ${
        method.efficient 
          ? 'bg-accent/5 border-accent/30' 
          : 'bg-muted/50 border-border'
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <ItemIcon 
            src={explosiveIcon.icon} 
            alt={method.name}
            size={32}
            emoji={explosiveIcon.emoji}
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">{resources.totalQty}x {method.name}</span>
              {method.efficient && (
                <Badge variant="default" className="bg-accent text-white dark:text-white">
                  Efficient
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Gunpowder Requirements Section */}
      {resources.totalGunpowder > 0 && (
        <div className="mb-3 p-3 rounded-md bg-muted/30 border border-border/50">
          <div className="flex items-center gap-2 mb-2">
            <ItemIcon 
              src="/icons/resources/gunpowder.png" 
              alt="Gunpowder"
              size={20}
              emoji="⚫"
            />
            <span className="text-sm font-semibold">Requires {resources.totalGunpowder.toLocaleString()} Gunpowder</span>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <ItemIcon 
                src="/icons/resources/sulfur.png" 
                alt="Sulfur"
                size={18}
                emoji="🟡"
              />
              <div>
                <div className="text-muted-foreground text-xs">Sulfur</div>
                <div className="font-semibold">{resources.totalSulfur.toLocaleString()}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ItemIcon 
                src="/icons/resources/charcoal.png" 
                alt="Charcoal"
                size={18}
                emoji="⬛"
              />
              <div>
                <div className="text-muted-foreground text-xs">
                  Charcoal {useMixingTable ? "(Mixing Table)" : "(Regular)"}
                </div>
                <div className="font-semibold">
                  {resources.totalCharcoal.toLocaleString()}
                  {!useMixingTable && resources.charcoalSavings > 0 && (
                    <span className="text-xs text-accent ml-1">
                      (-{resources.charcoalSavings.toLocaleString()} w/ table)
                    </span>
                  )}
                  {useMixingTable && resources.charcoalSavings > 0 && (
                    <span className="text-xs text-green-500 ml-1">
                      (saved {resources.charcoalSavings.toLocaleString()})
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Other Resources */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {RESOURCE_CONFIG.map(({ key, iconSrc, alt, emoji, label }) => {
          const value = resources[key as keyof typeof resources];
          return value > 0 ? (
            <ResourceItem 
              key={key}
              iconSrc={iconSrc}
              alt={alt}
              emoji={emoji}
              label={label}
              value={value as number}
            />
          ) : null;
        })}
      </div>
    </div>
  );
};

type StructureType = 
  | "wood-door" | "sheet-door" | "garage-door" | "armored-door" 
  | "wood-foundation" | "stone-foundation" | "sheet-foundation" | "armored-foundation"
  | "tc" | "large-box" | "small-box" | "vending-machine"
  | "high-external-wood" | "high-external-stone";

interface ExplosiveMethod {
  name: string;
  quantity: number;
  sulfur?: number;
  gunpowder?: number;
  metal?: number;
  cloth?: number;
  lowGradeFuel?: number; // Low Grade Fuel
  techTrash?: number; // Tech Trash (for C4)
  explosives?: number; // Explosives (component for rockets/C4)
  metalPipes?: number; // Metal Pipes (for rockets)
  efficient: boolean;
  icon?: string;
  emoji?: string;
  mixingTable?: boolean; // If true, uses mixing table recipe (more efficient charcoal)
}

interface RaidData {
  name: string;
  hp: number;
  methods: ExplosiveMethod[];
  icon?: string;
  emoji?: string;
}

// Icon mapping
const getExplosiveIcon = (name: string): { icon: string; emoji: string } => {
  const iconMap: Record<string, { icon: string; emoji: string }> = {
    "Rocket": { icon: "/icons/explosives/rocket.png", emoji: "🚀" },
    "Explosive Ammo": { icon: "/icons/explosives/explosive-ammo.png", emoji: "💥" },
    "Satchel Charge": { icon: "/icons/explosives/satchel.png", emoji: "💣" },
    "Timed Explosive (C4)": { icon: "/icons/explosives/c4.png", emoji: "⏰" },
    "Incendiary Rocket": { icon: "/icons/explosives/incendiary-rocket.png", emoji: "🔥" },
    "F1 Grenade": { icon: "/icons/explosives/f1-grenade.png", emoji: "🧨" },
    "Molotov Cocktail": { icon: "/icons/explosives/molotov.png", emoji: "🍾" },
  };
  return iconMap[name] || { icon: "/icons/explosives/default.png", emoji: "💥" };
};

const getStructureIcon = (type: StructureType): { icon: string; emoji: string } => {
  const iconMap: Record<StructureType, { icon: string; emoji: string }> = {
    "wood-door": { icon: "/icons/structures/wood-door.png", emoji: "🚪" },
    "sheet-door": { icon: "/icons/structures/sheet-door.png", emoji: "🚪" },
    "garage-door": { icon: "/icons/structures/garage-door.png", emoji: "🚪" },
    "armored-door": { icon: "/icons/structures/armored-door.png", emoji: "🚪" },
    "wood-foundation": { icon: "/icons/structures/wood-foundation.png", emoji: "⬛" },
    "stone-foundation": { icon: "/icons/structures/stone-foundation.png", emoji: "⬛" },
    "sheet-foundation": { icon: "/icons/structures/sheet-foundation.png", emoji: "⬛" },
    "armored-foundation": { icon: "/icons/structures/armored-foundation.png", emoji: "⬛" },
    "tc": { icon: "/icons/structures/tc.png", emoji: "📦" },
    "large-box": { icon: "/icons/structures/large-box.png", emoji: "📦" },
    "small-box": { icon: "/icons/structures/small-box.png", emoji: "📦" },
    "vending-machine": { icon: "/icons/structures/vending-machine.png", emoji: "🏪" },
    "high-external-wood": { icon: "/icons/structures/high-external-wood-wall.png", emoji: "🧱" },
    "high-external-stone": { icon: "/icons/structures/high-external-stone-wall.png", emoji: "🧱" },
  };
  return iconMap[type];
};

// Calculate charcoal needed for gunpowder
// Regular: 30 charcoal + 20 sulfur = 10 gunpowder (3:1 ratio)
// Mixing Table: 20 charcoal + 20 sulfur = 10 gunpowder (2:1 ratio)
const calculateCharcoal = (gunpowder: number, mixingTable: boolean = false): number => {
  const ratio = mixingTable ? 2 : 3; // charcoal per gunpowder
  return Math.ceil(gunpowder * ratio);
};

// Extract material type from structure name for display
const getMaterialName = (fullName: string): string => {
  if (fullName.includes("Wooden")) return "Wood";
  if (fullName.includes("Stone")) return "Stone";
  if (fullName.includes("Sheet Metal")) return "Metal";
  if (fullName.includes("Armored")) return "HQM";
  if (fullName.includes("Garage")) return "Garage";
  // For deployables, return the full name
  return fullName;
};

// Helper to create raid methods from quantities
const createMethods = (methods: Array<{ name: string; quantity: number; efficient: boolean }>): ExplosiveMethod[] => {
  return methods;
};

// Common raid method templates
const RAID_METHODS = {
  // Wooden structures (200 HP)
  woodDoor: createMethods([
    { name: "Molotov Cocktail", quantity: 3, efficient: true },
    { name: "Incendiary Rocket", quantity: 1, efficient: true },
    { name: "Satchel Charge", quantity: 2, efficient: false },
    { name: "F1 Grenade", quantity: 6, efficient: false },
  ]),
  // Wooden structures (500 HP)
  woodWall: createMethods([
    { name: "Molotov Cocktail", quantity: 8, efficient: true },
    { name: "Incendiary Rocket", quantity: 2, efficient: true },
    { name: "Satchel Charge", quantity: 3, efficient: false },
    { name: "F1 Grenade", quantity: 15, efficient: false },
  ]),
  // Sheet Metal Door (250 HP)
  sheetDoor: createMethods([
    { name: "Rocket", quantity: 1, efficient: true },
    { name: "Explosive Ammo", quantity: 63, efficient: true },
    { name: "Satchel Charge", quantity: 4, efficient: false },
    { name: "Timed Explosive (C4)", quantity: 1, efficient: false },
  ]),
  // Garage Door (600 HP)
  garageDoor: createMethods([
    { name: "Rocket", quantity: 3, efficient: true },
    { name: "Explosive Ammo", quantity: 150, efficient: true },
    { name: "Satchel Charge", quantity: 9, efficient: false },
    { name: "Timed Explosive (C4)", quantity: 2, efficient: false },
  ]),
  // Armored Door (800 HP)
  armoredDoor: createMethods([
    { name: "Rocket", quantity: 4, efficient: true },
    { name: "Explosive Ammo", quantity: 200, efficient: true },
    { name: "Satchel Charge", quantity: 12, efficient: false },
    { name: "Timed Explosive (C4)", quantity: 2, efficient: false },
  ]),
  // Stone structures (500 HP)
  stone500: createMethods([
    { name: "Rocket", quantity: 4, efficient: true },
    { name: "Explosive Ammo", quantity: 185, efficient: true },
    { name: "Satchel Charge", quantity: 10, efficient: false },
    { name: "Timed Explosive (C4)", quantity: 2, efficient: false },
  ]),
  // Sheet Metal structures (1000 HP)
  sheet1000: createMethods([
    { name: "Rocket", quantity: 8, efficient: true },
    { name: "Explosive Ammo", quantity: 400, efficient: true },
    { name: "Satchel Charge", quantity: 23, efficient: false },
    { name: "Timed Explosive (C4)", quantity: 4, efficient: false },
  ]),
  // Armored structures (2000 HP)
  armored2000: createMethods([
    { name: "Rocket", quantity: 15, efficient: true },
    { name: "Explosive Ammo", quantity: 799, efficient: true },
    { name: "Timed Explosive (C4)", quantity: 8, efficient: false },
  ]),
  // TC/Large Box (500 HP deployables)
  deployable500: createMethods([
    { name: "Rocket", quantity: 2, efficient: true },
    { name: "Explosive Ammo", quantity: 100, efficient: true },
    { name: "Satchel Charge", quantity: 6, efficient: false },
    { name: "Timed Explosive (C4)", quantity: 1, efficient: false },
  ]),
  // Small Box (250 HP)
  smallBox: createMethods([
    { name: "Rocket", quantity: 1, efficient: true },
    { name: "Explosive Ammo", quantity: 63, efficient: true },
    { name: "Satchel Charge", quantity: 3, efficient: false },
  ]),
  // Vending Machine (500 HP)
  vendingMachine: createMethods([
    { name: "Rocket", quantity: 3, efficient: true },
    { name: "Explosive Ammo", quantity: 150, efficient: true },
    { name: "Satchel Charge", quantity: 6, efficient: false },
  ]),
};

// Per-explosive resource costs (for 1 unit of each explosive)
const EXPLOSIVE_COSTS: Record<string, Omit<ExplosiveMethod, 'name' | 'quantity' | 'efficient'>> = {
  "Rocket": { 
    sulfur: 1400, 
    gunpowder: 650, 
    metal: 100, 
    cloth: 0, 
    lowGradeFuel: 30, 
    explosives: 10, 
    metalPipes: 2 
  },
  "Explosive Ammo": { 
    sulfur: 10, 
    gunpowder: 10, 
    metal: 20, 
    cloth: 0 
  },
  "Satchel Charge": { 
    sulfur: 480, 
    gunpowder: 480, 
    metal: 80, 
    cloth: 10 
  },
  "Timed Explosive (C4)": { 
    sulfur: 2200, 
    gunpowder: 1000, 
    metal: 200, 
    cloth: 5, 
    lowGradeFuel: 60, 
    techTrash: 2, 
    explosives: 20 
  },
  "Incendiary Rocket": { 
    sulfur: 410, 
    gunpowder: 150, 
    metal: 310, 
    cloth: 30, 
    lowGradeFuel: 189, 
    explosives: 3, 
    metalPipes: 2 
  },
  "F1 Grenade": { 
    sulfur: 60, 
    gunpowder: 60, 
    metal: 0, 
    cloth: 5, 
    lowGradeFuel: 10 
  },
  "Molotov Cocktail": { 
    sulfur: 0, 
    gunpowder: 0, 
    metal: 0, 
    cloth: 5, 
    lowGradeFuel: 50 
  },
};

const RAID_DATA: Record<StructureType, RaidData> = {
  "wood-door": { name: "Wooden Door", hp: 200, methods: RAID_METHODS.woodDoor },
  "sheet-door": { name: "Sheet Metal Door", hp: 250, methods: RAID_METHODS.sheetDoor },
  "garage-door": { name: "Garage Door", hp: 600, methods: RAID_METHODS.garageDoor },
  "armored-door": { name: "Armored Door", hp: 1000, methods: RAID_METHODS.armoredDoor },
  "wood-foundation": { name: "Wooden Foundation", hp: 500, methods: RAID_METHODS.woodWall },
  "stone-foundation": { name: "Stone Foundation", hp: 100, methods: RAID_METHODS.stone500 },
  "sheet-foundation": { name: "Sheet Metal Foundation", hp: 1000, methods: RAID_METHODS.sheet1000 },
  "armored-foundation": { name: "Armored Foundation", hp: 700, methods: RAID_METHODS.armored2000 },
  "tc": { name: "Tool Cupboard", hp: 100, methods: RAID_METHODS.deployable500 },
  "large-box": { name: "Large Wood Box", hp: 300, methods: RAID_METHODS.deployable500 },
  "small-box": { name: "Small Stash / Small Box", hp: 250, methods: RAID_METHODS.smallBox },
  "vending-machine": { name: "Vending Machine", hp: 1250, methods: RAID_METHODS.vendingMachine },
  "high-external-wood": { name: "High External Wooden Wall", hp: 1250, methods: RAID_METHODS.sheet1000 },
  "high-external-stone": { name: "High External Stone Wall", hp: 2500, methods: RAID_METHODS.armored2000 },
};

export default function RaidCalculatorPage() {
  const [selectedStructure, setSelectedStructure] = useState<StructureType>("stone-foundation");
  const [quantity, setQuantity] = useState(1);
  const [useMixingTable, setUseMixingTable] = useState(false);

  const structure = RAID_DATA[selectedStructure];

  return (
    <div className="container py-12 max-w-6xl">
      <div className="flex flex-col gap-4 mb-8">
        <h1 className="text-4xl font-bold tracking-tighter">
          <span className="gradient-text">Rust Raid Calculator</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          Calculate exact explosives and resources needed to raid any structure
        </p>
      </div>

      {/* Structure Selector Tabs */}
      <Card className="card-glow border-primary/10 mb-6">
        <CardHeader>
          <CardTitle>Select Structure</CardTitle>
          <CardDescription>Choose what you want to raid</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="building-blocks" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="doors">Doors</TabsTrigger>
              <TabsTrigger value="building-blocks">Building Blocks</TabsTrigger>
              <TabsTrigger value="deployables">Deployables</TabsTrigger>
            </TabsList>
            
            <TabsContent value="doors" className="mt-4">
              <StructureTabContent 
                types={["wood-door", "sheet-door", "garage-door", "armored-door"]}
                selectedStructure={selectedStructure}
                onSelect={setSelectedStructure}
              />
            </TabsContent>
            
            <TabsContent value="building-blocks" className="mt-4">
              <StructureTabContent 
                types={["wood-foundation", "stone-foundation", "sheet-foundation", "armored-foundation"]}
                selectedStructure={selectedStructure}
                onSelect={setSelectedStructure}
              />
            </TabsContent>
            
            <TabsContent value="deployables" className="mt-4">
              <StructureTabContent 
                types={["tc", "large-box", "small-box", "vending-machine", "high-external-wood", "high-external-stone"]}
                selectedStructure={selectedStructure}
                onSelect={setSelectedStructure}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        {/* Options Panel */}
        <div className="space-y-4">
          <Card className="h-fit card-glow border-primary/10">
            <CardHeader>
              <CardTitle>Raid Options</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Quantity to Destroy</label>
              <input
                type="number"
                min="1"
                max="100"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              />
              <p className="text-xs text-muted-foreground mt-1.5">How many structures to raid</p>
            </div>

            <div className="flex items-center gap-2 p-3 rounded-lg bg-accent/10 border border-accent/20">
              <input
                type="checkbox"
                id="mixing-table"
                checked={useMixingTable}
                onChange={(e) => setUseMixingTable(e.target.checked)}
                className="w-4 h-4 rounded border-input"
              />
              <label htmlFor="mixing-table" className="text-sm font-medium cursor-pointer flex-1">
                Use Mixing Table
                <span className="block text-xs text-muted-foreground font-normal mt-0.5">
                  Saves 33% charcoal
                </span>
              </label>
            </div>
          </CardContent>
        </Card>
        
        <Card className="h-fit card-glow border-accent/10">
          <CardHeader>
            <CardTitle className="text-base">Current Target</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <ItemIcon 
                src={getStructureIcon(selectedStructure).icon} 
                alt={structure.name}
                size={48}
                emoji={getStructureIcon(selectedStructure).emoji}
              />
              <div className="text-sm">
                <div className="font-semibold text-foreground mb-1">{structure.name}</div>
                <div className="text-muted-foreground">{structure.hp.toLocaleString()} HP</div>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>

        {/* Results Panel */}
        <Card className="card-glow border-accent/10">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">Available Raid Methods</CardTitle>
                <CardDescription className="mt-1.5">
                  Resource costs to destroy <span className="font-semibold text-foreground">{quantity}x {structure.name}</span>
                </CardDescription>
              </div>
              <Badge variant="outline" className="bg-accent/10 border-accent/30 text-foreground">
                {structure.methods.filter(m => m.efficient).length} Efficient
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {structure.methods.map((method, idx) => (
                <RaidMethodCard
                  key={idx}
                  method={method}
                  quantity={quantity}
                  useMixingTable={useMixingTable}
                />
              ))}
            </div>
          </CardContent>
          </Card>
      </div>
    </div>
  );
}
