"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Copy, Check, Crosshair, Zap, Eye, Wrench, Gauge, Map } from "lucide-react";

const COMMANDS = [
  {
    category: "Combat & PVP",
    icon: Crosshair,
    color: "text-accent",
    commands: [
      { 
        name: "Zoom Keybind", 
        description: "Press to zoom in (toggle FOV)",
        command: 'bind c "+fov 90;fov 70"'
      },
      { 
        name: "Alt Look Zoom", 
        description: "Advanced zoom with alt look (leftalt)",
        command: 'bind leftalt "+headlerp 50;headlerp 0;+fov 90;fov 70;+altlook"',
        note: "To reset: bind leftalt +altlook"
      },
      { 
        name: "ADS Zoom", 
        description: "Zoom when aiming down sights",
        command: 'bind mouse1 "+attack2;+fov 90;fov 70"',
        note: "Not recommended for bow users"
      },
      { 
        name: "ADS Sensitivity", 
        description: "Lower sens when aiming",
        command: 'bind mouse1 "+attack2;+input.sensitivity 1;input.sensitivity .5;"'
      },
      { 
        name: "Fast Alt Look", 
        description: "Faster alt look sensitivity (credit to vilsu)",
        command: 'bind leftalt +sensitivity 0.25;sensitivity 0.5;+altlook'
      },
      { 
        name: "Toggle Blood", 
        description: "Remove/add blood from screen for better visibility",
        command: 'bind j ~global.showblood 0;global.showblood 1'
      },
      { 
        name: "Combat Log", 
        description: "Instantly open console with combat log",
        command: 'bind f1 "consoletoggle;combatlog_outgoing"'
      },
    ],
  },
  {
    category: "Quick Crafting",
    icon: Zap,
    color: "text-primary",
    commands: [
      { 
        name: "Craft Bandages", 
        description: "Instant bandage crafting",
        command: 'bind b "craft.add -2072273936"'
      },
      { 
        name: "Craft Tool Cupboard", 
        description: "Quick TC crafting",
        command: 'bind mousewheelup "craft.add -97956382"'
      },
      { 
        name: "TC Craft Refresh", 
        description: "Craft TC and refresh crafting queue",
        command: 'bind j craft.add -97956382;craft.cancel -97956382;craft.add -97956382'
      },
      { 
        name: "Craft Arrows", 
        description: "Quick arrow crafting",
        command: 'bind 6 "craft.add -1234735557"'
      },
      { 
        name: "Craft Meds", 
        description: "Quick medical syringe crafting",
        command: 'bind leftbracket craft.add 1079279582'
      },
      { 
        name: "Craft Stone Wall", 
        description: "Quick wall crafting",
        command: 'bind keypad4 craft.add 1373240771'
      },
      { 
        name: "Craft White Burlap Kit", 
        description: "Full white clothing set",
        command: 'bind f6 craft.add 1877339384 1 51707;craft.add 602741290 1 51510;craft.add 1992974553 1 51509'
      },
      { 
        name: "Quick Craft Delay", 
        description: "Faster crafting response",
        command: 'inventory.quickcraftdelay 0'
      },
    ],
  },
  {
    category: "Audio & Visibility",
    icon: Eye,
    color: "text-secondary",
    commands: [
      { 
        name: "Audio Toggle", 
        description: "Toggle between quiet and normal audio",
        command: 'bind n ~audio.game 0.05;audio.game 0.6'
      },
      { 
        name: "Multi-Level Audio", 
        description: "Cycle through quiet/normal/loud audio levels",
        command: 'bind x "~audio.master 0.1;audio.master 1;audio.master 2"'
      },
      { 
        name: "Speakers Toggle", 
        description: "Toggle speaker configuration",
        command: 'bind [leftshift+o] "+audio.speakers 6;audio.speakers 1"'
      },
      { 
        name: "Set Speakers", 
        description: "Set audio to stereo",
        command: 'bind f6 audio.speakers 2'
      },
      { 
        name: "Grass Displacement", 
        description: "Toggle grass movement visibility",
        command: 'bind j ~grass.displacement d 0;grass.displacement 1'
      },
      { 
        name: "Gun FOV Scale", 
        description: "Toggle weapon FOV (more vision)",
        command: 'bind m ~graphics.vm_fov_scale 1;graphics.vm_fov_scale 0'
      },
      { 
        name: "Disable Gun FOV Scale", 
        description: "Keep gun small when using zoom",
        command: 'graphics.vm_fov_scale false'
      },
      { 
        name: "Fat/Skinny Gun Toggle", 
        description: "Toggle viewmodel FOV with toast notification",
        command: 'bind n ~meta.exec "vm_fov_scale 1" "showtoast 1 fat";meta.exec "vm_fov_scale 0" "showtoast 2 skinny"'
      },
    ],
  },
  {
    category: "Quality of Life",
    icon: Wrench,
    color: "text-accent",
    commands: [
      { 
        name: "Auto Run", 
        description: "Press to toggle auto-running",
        command: 'bind x +forward;+sprint'
      },
      { 
        name: "Auto Run/Swim", 
        description: "Alternative auto-run bind",
        command: 'bind z "forward;sprint"'
      },
      { 
        name: "Hover Loot", 
        description: "Auto-hover loot when using 'E'",
        command: 'bind e +use;+hoverloot'
      },
      { 
        name: "Fast Code Lock", 
        description: "Faster code lock menu opening",
        command: 'input.holdtime 0.1'
      },
      { 
        name: "Quick Bag Claim", 
        description: "Faster sleeping bag unclaim",
        command: 'client.bag_unclaim_duration 0.5'
      },
      { 
        name: "Toggle Underwear", 
        description: "Switch between mummy wraps and naked",
        command: 'bind y ~meta.exec "client.setunderwear mummywraps" "showtoast 2 mummy";meta.exec "client.setunderwear naked" "showtoast 1 default"'
      },
      { 
        name: "Disable Error Overlay", 
        description: "Remove error messages from screen",
        command: 'console.erroroverlay false'
      },
      { 
        name: "Suicide", 
        description: "Quick suicide keybind",
        command: 'bind k kill'
      },
      { 
        name: "Continuous Attack", 
        description: "Hold attack (useful for eco raiding)",
        command: 'bind p attack'
      },
    ],
  },
  {
    category: "Map & UI",
    icon: Map,
    color: "text-primary",
    commands: [
      { 
        name: "Centered Map", 
        description: "Opens map centered and focused",
        command: 'bind g +map;+focusmap'
      },
      { 
        name: "Map with UI Scale", 
        description: "Map with optimized UI scaling",
        command: 'bind g "+graphics.uiscale 0.8;graphics.uiscale 0.5;+map"'
      },
      { 
        name: "Advanced Map Bind", 
        description: "Map with performance optimization",
        command: 'bind g "+map;effects.maxgibs -1;headlerp_inertia false;bind mousewheelup \"\";bind mousewheeldown \"\""',
        note: "Disables mousewheel item switching, faster head return when freelooking"
      },
      { 
        name: "Map with Max Gibs", 
        description: "Map bind with gib optimization",
        command: 'bind f +focusmap;+map;maxgibs -1'
      },
    ],
  },
  {
    category: "Performance & Optimization",
    icon: Gauge,
    color: "text-secondary",
    commands: [
      { 
        name: "Comprehensive GC Cleanup", 
        description: "Full performance optimization command",
        command: 'gc.collect;pool.clear_assets;pool.clear_memory;pool.clear_prefabs;gc.alloc;decal.clear;pool.enabled;sss.enabled false;playercull.visquality 4;reflection.planarcount 0;reflection.planarreflections false;reflection.planarresolution 0;playercull.maxplayerdist 400;playercull.maxsleeperdist 20;playercull.minculldist 1000;playercull.enabled true;graphics.maxqueuedframes 3;effects.clearallgibs;decal.clear;decal.clear;gc.incremental_milliseconds 1;effects.clearallgibs;graphics.shadowmode 0 gc.buffer 4096',
        note: "Run this for significant performance boost"
      },
      { 
        name: "Shadow Mode Off", 
        description: "Disable shadows for better FPS",
        command: 'graphics.shadowmode 0'
      },
    ],
  },
];

export default function CommandsPage() {
  const [search, setSearch] = useState("");
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const filteredCommands = COMMANDS.map(category => ({
    ...category,
    commands: category.commands.filter(cmd =>
      cmd.name.toLowerCase().includes(search.toLowerCase()) ||
      cmd.description.toLowerCase().includes(search.toLowerCase()) ||
      cmd.command.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter(category => category.commands.length > 0);

  const copyToClipboard = async (command: string) => {
    try {
      await navigator.clipboard.writeText(command);
      setCopiedCommand(command);
      setTimeout(() => setCopiedCommand(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="container py-12 max-w-6xl">
      <div className="flex flex-col gap-4 mb-8">
        <h1 className="text-4xl font-bold tracking-tighter">
          <span className="gradient-text">PVP Keybinds & Commands</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          Essential console commands and keybinds to dominate in Rust PVP
        </p>
      </div>

      {/* Search */}
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search keybinds and commands..."
            className="pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Commands List */}
      <div className="space-y-6">
        {filteredCommands.map((category) => {
          const Icon = category.icon;
          return (
            <Card key={category.category} className="card-glow border-primary/10">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-primary/5 border border-primary/10`}>
                    <Icon className={`h-5 w-5 ${category.color}`} />
                  </div>
                  <div>
                    <CardTitle className={category.color}>{category.category}</CardTitle>
                    <CardDescription>
                      {category.commands.length} command{category.commands.length !== 1 ? 's' : ''}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.commands.map((cmd, idx) => (
                    <div key={idx} className="group relative border-l-2 border-primary/20 pl-4 py-3 hover:border-primary/40 transition-colors">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm mb-1">{cmd.name}</div>
                          <div className="text-sm text-muted-foreground mb-2">{cmd.description}</div>
                          <div className="font-mono text-xs bg-muted/50 p-2 rounded border border-border overflow-x-auto">
                            {cmd.command}
                          </div>
                          {cmd.note && (
                            <div className="text-xs text-muted-foreground mt-2 italic">
                              💡 {cmd.note}
                            </div>
                          )}
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="shrink-0"
                          onClick={() => copyToClipboard(cmd.command)}
                        >
                          {copiedCommand === cmd.command ? (
                            <Check className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}

        {filteredCommands.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">
                No commands found matching "{search}"
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Info Card */}
      <Card className="mt-8 border-accent/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Crosshair className="h-5 w-5 text-accent" />
            How to Use These Commands
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div>
            <strong className="text-foreground">Open Console:</strong>
            <span className="text-muted-foreground"> Press <kbd className="px-2 py-1 bg-muted rounded border">F1</kbd> in Rust</span>
          </div>
          <div>
            <strong className="text-foreground">Copy & Paste:</strong>
            <span className="text-muted-foreground"> Click the copy icon to copy any command, then paste into console</span>
          </div>
          <div>
            <strong className="text-foreground">Customize Keybinds:</strong>
            <span className="text-muted-foreground"> Replace key names (e.g., 'c', 'leftalt') with your preferred keys</span>
          </div>
          <div>
            <strong className="text-foreground">Test It:</strong>
            <span className="text-muted-foreground"> Try commands in a safe area first to ensure they work as expected</span>
          </div>
          <div className="pt-2 border-t border-border mt-4">
            <p className="text-xs text-muted-foreground italic">
              💡 Pro Tip: These are battle-tested commands used by competitive Rust players. Adjust sensitivity and key placements to match your playstyle.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
