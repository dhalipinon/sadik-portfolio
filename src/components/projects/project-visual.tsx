import Image from "next/image";
import type { ProjectVisual } from "@/content/types";
import { ACCENT_VAR } from "@/lib/accent";

function BarAbstract({ color }: { color: string }) {
  const heights = [58, 96, 74, 130, 88, 110, 66, 100];
  const barWidth = 28;
  const gap = 16;
  const baseline = 190;

  return (
    <svg viewBox="0 0 400 250" className="h-full w-full" aria-hidden="true">
      {heights.map((h, i) => (
        <rect
          key={i}
          x={24 + i * (barWidth + gap)}
          y={baseline - h}
          width={barWidth}
          height={h}
          rx={4}
          fill={color}
          opacity={i % 2 === 0 ? 0.9 : 0.45}
        />
      ))}
      <line x1={16} y1={baseline} x2={384} y2={baseline} stroke={color} strokeOpacity={0.2} strokeWidth={1} />
    </svg>
  );
}

function FlowLines({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 400 250" className="h-full w-full" aria-hidden="true">
      <path
        d="M -10 170 C 60 100, 140 210, 210 130 S 340 60, 410 110"
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        opacity={0.9}
      />
      <path
        d="M -10 120 C 80 180, 150 40, 230 100 S 330 190, 410 140"
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        opacity={0.45}
      />
      <path
        d="M -10 210 C 70 160, 160 230, 240 190 S 340 150, 410 190"
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        opacity={0.25}
      />
    </svg>
  );
}

function TerminalGlow({ color }: { color: string }) {
  const lineWidths = [140, 200, 90, 170, 60];
  return (
    <svg viewBox="0 0 400 250" className="h-full w-full" aria-hidden="true">
      <rect x={40} y={35} width={320} height={180} rx={10} fill="none" stroke={color} strokeOpacity={0.35} strokeWidth={1.5} />
      <line x1={40} y1={70} x2={360} y2={70} stroke={color} strokeOpacity={0.35} strokeWidth={1} />
      <circle cx={58} cy={53} r={5} fill={color} opacity={0.9} />
      <circle cx={76} cy={53} r={5} fill={color} opacity={0.55} />
      <circle cx={94} cy={53} r={5} fill={color} opacity={0.3} />
      {lineWidths.map((w, i) => (
        <rect key={i} x={58} y={92 + i * 24} width={w} height={8} rx={4} fill={color} opacity={i === 0 ? 0.9 : 0.35} />
      ))}
    </svg>
  );
}

function NetworkNodes({ color }: { color: string }) {
  const nodes = [
    { x: 80, y: 70, r: 10 },
    { x: 190, y: 45, r: 7 },
    { x: 300, y: 80, r: 12 },
    { x: 120, y: 150, r: 8 },
    { x: 240, y: 160, r: 9 },
    { x: 330, y: 175, r: 6 },
    { x: 60, y: 190, r: 6 },
  ];
  const edges: [number, number][] = [
    [0, 1],
    [1, 2],
    [0, 3],
    [1, 4],
    [2, 4],
    [3, 4],
    [3, 6],
    [4, 5],
  ];

  return (
    <svg viewBox="0 0 400 250" className="h-full w-full" aria-hidden="true">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke={color}
          strokeOpacity={0.35}
          strokeWidth={1.5}
        />
      ))}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={n.r} fill={color} stroke="var(--surface)" strokeWidth={3} />
      ))}
    </svg>
  );
}

function DataGrid({ color }: { color: string }) {
  const cols = 10;
  const rows = 6;
  const cell = 26;
  const gap = 6;
  const seed = [
    0.9, 0.2, 0.5, 0.8, 0.3, 0.1, 0.6, 0.4, 0.7, 0.2, 0.3, 0.9, 0.2, 0.5, 0.1, 0.8, 0.3, 0.6, 0.2, 0.4, 0.5, 0.3, 0.8,
    0.2, 0.6, 0.9, 0.1, 0.4, 0.7, 0.2, 0.2, 0.6, 0.3, 0.9, 0.4, 0.1, 0.5, 0.7, 0.2, 0.8, 0.7, 0.3, 0.5, 0.2, 0.9, 0.4,
    0.1, 0.6, 0.3, 0.5, 0.4, 0.8, 0.2, 0.6, 0.3, 0.1, 0.9, 0.5, 0.2, 0.7,
  ];

  return (
    <svg viewBox="0 0 400 250" className="h-full w-full" aria-hidden="true">
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((__, c) => (
          <rect
            key={`${r}-${c}`}
            x={30 + c * (cell + gap)}
            y={30 + r * (cell + gap)}
            width={cell}
            height={cell}
            rx={4}
            fill={color}
            opacity={0.15 + seed[(r * cols + c) % seed.length] * 0.6}
          />
        )),
      )}
    </svg>
  );
}

const MOTIFS = {
  "bar-abstract": BarAbstract,
  "flow-lines": FlowLines,
  "terminal-glow": TerminalGlow,
  "network-nodes": NetworkNodes,
  "data-grid": DataGrid,
};

export function ProjectVisual({ visual, priority = false }: { visual: ProjectVisual; priority?: boolean }) {
  if (visual.kind === "real-image" && visual.src) {
    return (
      <div className="bg-surface relative aspect-[16/10] overflow-hidden rounded-xl">
        <Image
          src={visual.src}
          alt={visual.alt ?? ""}
          width={visual.width}
          height={visual.height}
          priority={priority}
          className="h-full w-full object-cover object-top"
        />
      </div>
    );
  }

  const Motif = visual.motif ? MOTIFS[visual.motif] : BarAbstract;
  const color = ACCENT_VAR[visual.accentColor];

  return (
    <div className="bg-surface relative aspect-[16/10] overflow-hidden rounded-xl">
      <div
        className="absolute -top-1/4 -right-1/4 h-3/4 w-3/4 rounded-full opacity-20 blur-3xl"
        style={{ background: color }}
        aria-hidden="true"
      />
      <div className="relative flex h-full items-center justify-center p-6">
        <Motif color={color} />
      </div>
    </div>
  );
}
