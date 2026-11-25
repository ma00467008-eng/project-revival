import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useMemo } from "react";
import {
  Volume2,
  Gamepad2,
  Gift,
  Wallet,
  User,
  Flame,
  X,
  ChevronRight,
  Globe,
  Play,
  Trophy,
  MessageCircle,
  Zap,
  CheckCircle2,
  Bell,
  Headphones,
  HelpCircle,
  ShieldCheck,
  TrendingUp,
  Award,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Winzo Play - Pakistan's #1 Online Casino & Gaming Platform" },
      {
        name: "description",
        content:
          "Official Winzo Play: Recommended Games, JILI Slots, Spribe Aviator, Win Go Lottery, and Live Casino with instant JazzCash & EasyPaisa payouts.",
      },
      {
        property: "og:title",
        content: "Winzo Play - Pakistan's #1 Online Gaming Platform",
      },
      {
        property: "og:description",
        content: "Play Super Ace, Aviator, Fortune Gems 2, and Win Go with instant PKR payouts.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "icon", href: "/pakvip/images/favico.ico" }],
  }),
  component: WinzoPlayApp,
});

// Authentic pakvip21.com Colors
const THEME = {
  bgL1: "#15131E",
  bgL2: "#201D2B",
  bgL3: "#282537",
  bgPill: "#38374B",
  border: "rgba(255, 255, 255, 0.08)",
  cyan: "#21D9CC",
  lime: "#BED921",
  gradient: "linear-gradient(90deg, #21D9CC 0%, #BED921 100%)",
  textL1: "#E6EBF0",
  textL2: "#9EA2A8",
};

// Official 3D Category Tabs from pakvip21 CDN
const CATEGORIES = [
  {
    id: "popular",
    label: "Hot Slots",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamecategory/gamecategory_202608131718483ic9.png",
  },
  {
    id: "lottery",
    label: "Lottery",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamecategory/gamecategory_20260810182325juft.png",
  },
  {
    id: "original",
    label: "Original",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamecategory/gamecategory_20260813171856trpj.png",
  },
  {
    id: "slots",
    label: "Slots",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamecategory/gamecategory_20260810182333aqc4.png",
  },
  {
    id: "fishing",
    label: "Fishing",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamecategory/gamecategory_2026081018222762uc.png",
  },
  {
    id: "casino",
    label: "Casino",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamecategory/gamecategory_20260810182256xty3.png",
  },
  {
    id: "pvc",
    label: "PVC",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamecategory/gamecategory_202608101822434ox5.png",
  },
  {
    id: "sports",
    label: "Sports",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamecategory/gamecategory_20260810182310dacc.png",
  },
];

interface GameItem {
  id: string;
  title: string;
  provider: string;
  rtp: string;
  hot?: boolean;
  img: string;
}

// 1. Recommended Games (pakvip21 exact)
const RECOMMENDED_GAMES: GameItem[] = [
  {
    id: "aviator-spribe",
    title: "Aviator",
    provider: "SPRIBE",
    rtp: "96.66%",
    hot: true,
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/SPRIBE/aviator_20260812174827906.png",
  },
  {
    id: "aviator-tb",
    title: "Aviator",
    provider: "TB_Chess",
    rtp: "97.01%",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/TB_Chess/800_20260812175121657.png",
  },
  {
    id: "chicken-road-tb",
    title: "Chicken Road 2",
    provider: "TB_Chess",
    rtp: "97.68%",
    hot: true,
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/TB_Chess/121.png",
  },
  {
    id: "chicken-road-inout",
    title: "Chicken Road 2",
    provider: "INOUT",
    rtp: "97.55%",
    hot: true,
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/INOUT/chicken-road-two.png",
  },
  {
    id: "jackpot-fishing",
    title: "JackPot Fishing",
    provider: "JILI",
    rtp: "97.96%",
    hot: true,
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/JILI/32.png",
  },
  {
    id: "royal-fishing",
    title: "Royal Fishing",
    provider: "JILI",
    rtp: "96.49%",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/JILI/1.png",
  },
];

// 2. Top Games (Recently played hits)
const TOP_GAMES: GameItem[] = [
  {
    id: "super-ace",
    title: "Super Ace",
    provider: "JILI",
    rtp: "98.40%",
    hot: true,
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/JILI/51.png",
  },
  {
    id: "fortune-gems-2",
    title: "Fortune Gems 2",
    provider: "JILI",
    rtp: "98.12%",
    hot: true,
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/JILI/109.png",
  },
  {
    id: "money-coming",
    title: "Money Coming",
    provider: "JILI",
    rtp: "97.80%",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/JILI/58.png",
  },
  {
    id: "crazy-777",
    title: "Crazy 777",
    provider: "JILI",
    rtp: "97.45%",
    hot: true,
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/JILI/43.png",
  },
  {
    id: "golden-empire",
    title: "Golden Empire",
    provider: "JILI",
    rtp: "97.60%",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/JILI/48.png",
  },
  {
    id: "mega-ace",
    title: "Mega Ace",
    provider: "JILI",
    rtp: "98.50%",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/JILI/115.png",
  },
];

// 3. Lottery Games
const LOTTERY_GAMES: GameItem[] = [
  {
    id: "wingo-30s",
    title: "Win Go 30s",
    provider: "WINZO",
    rtp: "98.90%",
    hot: true,
    img: "https://ossimg.pakvipacting.com/Pakvip/lotterycategory/lotterycategory_202608101818434tdn.png",
  },
  {
    id: "k3-lottery",
    title: "K3 Lotre",
    provider: "WINZO",
    rtp: "98.30%",
    img: "https://ossimg.pakvipacting.com/Pakvip/lotterycategory/lotterycategory_20260810181852r5xt.png",
  },
  {
    id: "5d-lottery",
    title: "5D Lotre",
    provider: "WINZO",
    rtp: "98.15%",
    img: "https://ossimg.pakvipacting.com/Pakvip/lotterycategory/lotterycategory_202608101819028h63.png",
  },
  {
    id: "trx-wingo",
    title: "Trx Win Go",
    provider: "WINZO",
    rtp: "98.70%",
    hot: true,
    img: "https://ossimg.pakvipacting.com/Pakvip/lotterycategory/lotterycategory_20260810181917mlmi.png",
  },
  {
    id: "motorace",
    title: "MotoRace",
    provider: "WINZO",
    rtp: "97.50%",
    img: "https://ossimg.pakvipacting.com/Pakvip/lotterycategory/lotterycategory_20260811123643rnhj.png",
  },
];

// 4. Original / Mini Games
const ORIGINAL_GAMES: GameItem[] = [
  {
    id: "mines-jili",
    title: "Mines",
    provider: "JILI",
    rtp: "97.50%",
    hot: true,
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/JILI/229.png",
  },
  {
    id: "plinko-spribe",
    title: "Plinko",
    provider: "SPRIBE",
    rtp: "98.40%",
    hot: true,
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/SPRIBE/plinko.png",
  },
  {
    id: "go-rush",
    title: "Go Rush",
    provider: "JILI",
    rtp: "97.80%",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/JILI/224.png",
  },
  {
    id: "limbo-tb",
    title: "Limbo",
    provider: "TB_Chess",
    rtp: "98.20%",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/TB_Chess/110.png",
  },
  {
    id: "cricket-tb",
    title: "Cricket",
    provider: "TB_Chess",
    rtp: "97.30%",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/TB_Chess/810.png",
  },
  {
    id: "chicken-road-original",
    title: "Chicken Road",
    provider: "INOUT",
    rtp: "98.00%",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/INOUT/chicken-road.png",
  },
];

// 5. Slots (JILI, BGAMING, INOUT)
const SLOT_GAMES: GameItem[] = [
  {
    id: "fortune-gems",
    title: "Fortune Gems",
    provider: "JILI",
    rtp: "98.00%",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/JILI/49.png",
  },
  {
    id: "charge-buffalo",
    title: "Charge Buffalo",
    provider: "JILI",
    rtp: "96.90%",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/JILI/77.png",
  },
  {
    id: "boxing-king",
    title: "Boxing King",
    provider: "JILI",
    rtp: "97.10%",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/JILI/102.png",
  },
  {
    id: "all-lucky-clover",
    title: "All Lucky Clover",
    provider: "BGAMING",
    rtp: "97.40%",
    hot: true,
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/BGAMING/AllLuckyClover.png",
  },
  {
    id: "space-xy",
    title: "Space XY",
    provider: "BGAMING",
    rtp: "97.60%",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/BGAMING/SpaceXY.png",
  },
  {
    id: "aviamasters",
    title: "Aviamasters",
    provider: "BGAMING",
    rtp: "97.20%",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/BGAMING/Aviamasters.png",
  },
];

// 6. Fishing Games
const FISHING_GAMES: GameItem[] = [
  {
    id: "mega-fishing",
    title: "Mega Fishing",
    provider: "JILI",
    rtp: "97.40%",
    hot: true,
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/JILI/74.png",
  },
  {
    id: "happy-fishing",
    title: "Happy Fishing",
    provider: "JILI",
    rtp: "96.90%",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/JILI/82.png",
  },
  {
    id: "dragon-master",
    title: "Dragon Master",
    provider: "JDB",
    rtp: "96.50%",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/JDB/7006.png",
  },
  {
    id: "oneshot-fishing",
    title: "OneShot Fishing",
    provider: "CQ9",
    rtp: "96.80%",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/CQ9/AT01.png",
  },
  {
    id: "bombing-fishing",
    title: "Bombing Fishing",
    provider: "JILI",
    rtp: "97.10%",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/JILI/20.png",
  },
  {
    id: "cai-shen-fishing",
    title: "Cai Shen Fishing",
    provider: "JDB",
    rtp: "96.70%",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/JDB/7003.png",
  },
];

// 7. Live Casino Games
const CASINO_GAMES: GameItem[] = [
  {
    id: "crazy-time",
    title: "Crazy Time Live",
    provider: "EVOLUTION",
    rtp: "96.50%",
    hot: true,
    img: "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "lightning-roulette",
    title: "Lightning Roulette",
    provider: "EVOLUTION",
    rtp: "97.30%",
    img: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "dragon-tiger",
    title: "Dragon Tiger",
    provider: "EVOLUTION",
    rtp: "96.80%",
    img: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=400&q=80",
  },
];

// 8. PVC / Cards
const PVC_GAMES: GameItem[] = [
  {
    id: "teen-patti",
    title: "Teen Patti 20-20",
    provider: "TB_Chess",
    rtp: "97.50%",
    hot: true,
    img: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "andar-bahar",
    title: "Andar Bahar",
    provider: "TB_Chess",
    rtp: "98.00%",
    img: "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "card-365",
    title: "Card 365",
    provider: "Card365",
    rtp: "97.20%",
    img: "https://ossimg.pakvipacting.com/Pakvip/vendorlogo/vendorlogo_20260810181404ot98.png",
  },
];

// Live Winning Information from pakvip21 API
const LIVE_WINNERS = [
  { user: "MemberNNGQNSPE", game: "Aviator", amount: "Rs 7,390,180" },
  { user: "MemberZGHVEGRM", game: "WinGo 30 sec", amount: "Rs 24,500" },
  { user: "MemberXTYUIOPQ", game: "Super Ace", amount: "Rs 148,000" },
  { user: "MemberKLMNOPQR", game: "Chicken Road 2", amount: "Rs 62,400" },
  { user: "MemberABCDWXYZ", game: "Fortune Gems 2", amount: "Rs 89,500" },
];

export function WinzoPlayApp() {
  const [activeTab, setActiveTab] = useState<"home" | "activity" | "promo" | "wallet" | "account">("home");
  const [activeBanner, setActiveBanner] = useState(0);

  // User Local Storage Wallet (Decoupled from real servers)
  const [user, setUser] = useState<{ phone: string; balance: number; vip: number } | null>(null);
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [showChestModal, setShowChestModal] = useState(false);
  const [chestOpened, setChestOpened] = useState(false);
  const [chestReward, setChestReward] = useState(0);

  // Active Game Modal
  const [activeGame, setActiveGame] = useState<GameItem | null>(null);

  // Win Go State
  const [wingoTimer, setWingoTimer] = useState(30);
  const [wingoPeriod, setWingoPeriod] = useState(20261125091);
  const [wingoBetColor, setWingoBetColor] = useState<"green" | "violet" | "red" | null>(null);
  const [wingoBetNum, setWingoBetNum] = useState<number | null>(null);
  const [wingoAmount, setWingoAmount] = useState(100);

  // Aviator State
  const [aviatorRunning, setAviatorRunning] = useState(false);
  const [aviatorMultiplier, setAviatorMultiplier] = useState(1.0);
  const [aviatorCrashed, setAviatorCrashed] = useState(false);
  const [aviatorCashedOut, setAviatorCashedOut] = useState(false);

  // Deposit Form
  const [depositAmount, setDepositAmount] = useState(1000);
  const [depositMethod, setDepositMethod] = useState<"jazzcash" | "easypaisa">("jazzcash");
  const [depositTid, setDepositTid] = useState("");
  const [depositSuccessMsg, setDepositSuccessMsg] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("winzo_play_user");
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch (e) {}
    } else {
      const defaultUser = { phone: "03001234567", balance: 5000, vip: 1 };
      setUser(defaultUser);
      localStorage.setItem("winzo_play_user", JSON.stringify(defaultUser));
    }
  }, []);

  const saveUser = (updated: { phone: string; balance: number; vip: number }) => {
    setUser(updated);
    localStorage.setItem("winzo_play_user", JSON.stringify(updated));
  };

  // Carousel timer
  useEffect(() => {
    const t = setInterval(() => setActiveBanner((prev) => (prev + 1) % 2), 4000);
    return () => clearInterval(t);
  }, []);

  // Win Go countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setWingoTimer((prev) => {
        if (prev <= 1) {
          setWingoPeriod((p) => p + 1);
          return 30;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Aviator Loop
  useEffect(() => {
    let anim: any;
    if (aviatorRunning && !aviatorCrashed && !aviatorCashedOut) {
      anim = setInterval(() => {
        setAviatorMultiplier((prev) => {
          const next = +(prev + 0.06).toFixed(2);
          if (next > 1.35 && Math.random() < 0.035) {
            setAviatorCrashed(true);
            setAviatorRunning(false);
            return next;
          }
          return next;
        });
      }, 100);
    }
    return () => clearInterval(anim);
  }, [aviatorRunning, aviatorCrashed, aviatorCashedOut]);

  // Section Header Component (Pakvip21 style)
  const SectionHeader = ({
    title,
    subtitle,
    moreCount,
    onMore,
  }: {
    title: string;
    subtitle: string;
    moreCount?: number;
    onMore?: () => void;
  }) => (
    <div className="flex items-center justify-between pt-1">
      <div>
        <div className="flex items-center gap-1.5">
          <span className="w-1 h-3.5 rounded-full" style={{ background: THEME.gradient }} />
          <h3 className="text-sm font-black text-[#E6EBF0] uppercase tracking-wide">{title}</h3>
        </div>
        <p className="text-[10px] text-[#9EA2A8] mt-0.5">{subtitle}</p>
      </div>
      {moreCount && (
        <button
          onClick={onMore}
          className="flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[10px] font-bold text-[#21D9CC] border border-[#21D9CC]/30 bg-[#21D9CC]/10 hover:bg-[#21D9CC]/20 transition"
        >
          <span>More {moreCount}</span>
          <ChevronRight className="w-3 h-3" />
        </button>
      )}
    </div>
  );

  // 3-Column Poster Card Component (Pakvip21 exact)
  const GameCard = ({ game }: { game: GameItem }) => (
    <div
      onClick={() => setActiveGame(game)}
      className="group cursor-pointer rounded-xl overflow-hidden border transition-all duration-200 hover:scale-[1.03] active:scale-95 flex flex-col justify-between"
      style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}
    >
      {/* Poster Image (124x168 aspect-[3/4]) */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#161420]">
        <img
          src={game.img}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />

        {/* Top Provider Tag */}
        <div className="absolute top-1 left-1">
          <span className="text-[8px] font-extrabold px-1 py-0.2 rounded bg-black/75 backdrop-blur-sm text-[#E6EBF0] uppercase font-mono">
            {game.provider}
          </span>
        </div>

        {game.hot && (
          <div className="absolute top-1 right-1">
            <span className="text-[8px] font-black px-1 py-0.2 rounded bg-[#D23838] text-white flex items-center gap-0.5">
              <Flame className="w-2 h-2" />
              HOT
            </span>
          </div>
        )}

        {/* Play Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#15131E] shadow-lg"
            style={{ background: THEME.gradient }}
          >
            <Play className="w-4 h-4 fill-current ml-0.5" />
          </div>
        </div>
      </div>

      {/* pakvip21 .win-odds Box */}
      <div className="p-1.5 space-y-1 bg-[#1a1724]">
        <div className="text-[10px] font-bold text-[#E6EBF0] truncate">{game.title}</div>
        <div className="space-y-0.5">
          <div className="flex items-center justify-between text-[8px] text-[#9EA2A8]">
            <span>RTP</span>
            <span className="font-mono font-bold text-[#21D9CC]">{game.rtp}</span>
          </div>
          <div className="w-full h-1 bg-[#282537] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: game.rtp,
                background: THEME.gradient,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="min-h-screen text-[#E6EBF0] font-sans select-none pb-24 antialiased"
      style={{ backgroundColor: THEME.bgL1 }}
      dir="ltr"
    >
      {/* ============================================================== */}
      {/* 1. TOP HEADER (pakvip21.com layout)                            */}
      {/* ============================================================== */}
      <header
        className="sticky top-0 z-40 px-3 py-2 flex items-center justify-between backdrop-blur-md border-b"
        style={{ backgroundColor: `${THEME.bgL2}F5`, borderColor: THEME.border }}
      >
        {/* Left: Brand Monogram & Name */}
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8 rounded-lg flex items-center justify-center p-1 bg-gradient-to-br from-[#21D9CC]/20 to-[#BED921]/20 border border-[#21D9CC]/50">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow">
              <defs>
                <linearGradient id="wpNeon" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#21D9CC" />
                  <stop offset="100%" stopColor="#BED921" />
                </linearGradient>
              </defs>
              <path
                d="M16 28 L28 72 L42 38 L54 72 L66 28"
                fill="none"
                stroke="url(#wpNeon)"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M58 28 L78 28 C88 28 88 50 78 50 L58 50 L58 72"
                fill="none"
                stroke="#E6EBF0"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-1 leading-none">
              <span className="font-black text-sm tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#21D9CC] to-[#BED921]">
                WINZO PLAY
              </span>
              <span className="text-[8px] px-1 py-0.2 rounded font-bold bg-[#21D9CC]/20 text-[#21D9CC]">
                VIP
              </span>
            </div>
            <span className="text-[9px] text-[#9EA2A8]">Official Online Casino</span>
          </div>
        </div>

        {/* Right: Wallet & Deposit Buttons */}
        <div className="flex items-center gap-1.5">
          {user ? (
            <>
              <div
                onClick={() => setShowDepositModal(true)}
                className="cursor-pointer px-2.5 py-1 rounded-lg border flex items-center gap-1.5"
                style={{ backgroundColor: THEME.bgPill, borderColor: THEME.border }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#17B15E] animate-pulse" />
                <span className="text-xs font-bold text-[#E6EBF0] font-mono">
                  Rs {user.balance.toLocaleString()}
                </span>
              </div>
              <button
                onClick={() => setShowDepositModal(true)}
                className="px-2.5 py-1 rounded-lg text-xs font-black text-[#15131E] shadow-sm hover:brightness-110 active:scale-95 transition"
                style={{ background: THEME.gradient }}
              >
                Deposit
              </button>
            </>
          ) : (
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setShowDepositModal(true)}
                className="px-2.5 py-1 rounded-lg text-xs font-semibold text-[#E6EBF0] border"
                style={{ backgroundColor: THEME.bgPill, borderColor: THEME.border }}
              >
                Log in
              </button>
              <button
                onClick={() => setShowDepositModal(true)}
                className="px-2.5 py-1 rounded-lg text-xs font-bold text-[#15131E]"
                style={{ background: THEME.gradient }}
              >
                Register
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main App Container */}
      <main className="max-w-md mx-auto px-2.5 pt-2 space-y-4">
        {/* ============================================================== */}
        {/* 2. OFFICIAL PAKVIP21 BANNER CAROUSEL                           */}
        {/* ============================================================== */}
        <section className="relative rounded-2xl overflow-hidden border shadow-lg" style={{ borderColor: THEME.border }}>
          <div className="relative h-40 w-full bg-[#110e1a]">
            {activeBanner === 0 ? (
              <img
                src="https://ossimg.pakvipacting.com/Pakvip/banner/Banner_20260823173234k1c5.png"
                alt="Banner 1"
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src="https://ossimg.pakvipacting.com/Pakvip/banner/Banner_20260823172133g2ho.png"
                alt="Banner 2"
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="absolute bottom-2 right-3 flex items-center gap-1 z-20">
            {[0, 1].map((i) => (
              <button
                key={i}
                onClick={() => setActiveBanner(i)}
                className={`h-1 rounded-full transition-all ${
                  activeBanner === i ? "w-4 bg-[#21D9CC]" : "w-1 bg-[#525167]"
                }`}
              />
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* 3. NOTICE TICKER (pakvip21 Speaker + Detail)                   */}
        {/* ============================================================== */}
        <section
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs"
          style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}
        >
          <img
            src="/pakvip/images/noticeBarSpeaker-Cfctxsme.svg"
            alt="Speaker"
            className="w-4 h-4 flex-shrink-0"
            onError={(e) => {
              (e.target as HTMLElement).style.display = "none";
            }}
          />
          <Volume2 className="w-4 h-4 text-[#21D9CC] flex-shrink-0 [img:not([style*='display: none'])~&]:hidden" />
          <div className="flex-1 overflow-hidden whitespace-nowrap">
            <div className="inline-block animate-[marquee_20s_linear_infinite] text-[#9EA2A8] text-[11px]">
              Welcome to Winzo Play! Instant JazzCash & EasyPaisa deposits and withdrawals active with zero fee. 24/7 VIP Customer Support.
            </div>
          </div>
          <button
            onClick={() => setShowDepositModal(true)}
            className="flex-shrink-0 px-2 py-0.5 rounded text-[10px] font-bold text-[#15131E]"
            style={{ background: THEME.gradient }}
          >
            Detail
          </button>
        </section>

        {/* ============================================================== */}
        {/* 4. OFFICIAL 3D CATEGORIES (Horizontal Scroll)                  */}
        {/* ============================================================== */}
        <section className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                const el = document.getElementById(`sec-${cat.id}`);
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex-shrink-0 flex flex-col items-center justify-center p-1.5 rounded-xl transition border min-w-[62px] border-transparent bg-[#201D2B] hover:border-white/10 active:scale-95"
            >
              <div className="w-11 h-11 rounded-lg flex items-center justify-center overflow-hidden mb-1">
                <img
                  src={cat.img}
                  alt={cat.label}
                  className="w-10 h-10 object-contain drop-shadow"
                  loading="lazy"
                />
              </div>
              <span className="text-[10px] font-bold text-[#9EA2A8] truncate max-w-[64px]">
                {cat.label}
              </span>
            </button>
          ))}
        </section>

        {/* ============================================================== */}
        {/* SECTION 1: Recommended Games                                  */}
        {/* ============================================================== */}
        <section id="sec-popular" className="space-y-2">
          <SectionHeader
            title="Recommended Games"
            subtitle="The most popular electronic games among players"
          />
          <div className="grid grid-cols-3 gap-2">
            {RECOMMENDED_GAMES.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 2: Top Games                                          */}
        {/* ============================================================== */}
        <section className="space-y-2">
          <SectionHeader
            title="Top Games"
            subtitle="Recently played games"
          />
          <div className="grid grid-cols-3 gap-2">
            {TOP_GAMES.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 3: Lottery                                            */}
        {/* ============================================================== */}
        <section id="sec-lottery" className="space-y-2">
          <SectionHeader
            title="Lottery"
            subtitle="Fair and diverse lottery gameplay"
            moreCount={5}
            onMore={() => {
              const wg = LOTTERY_GAMES.find((g) => g.id === "wingo-30s");
              if (wg) setActiveGame(wg);
            }}
          />
          <div className="grid grid-cols-3 gap-2">
            {LOTTERY_GAMES.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 4: Original (Mini Games)                              */}
        {/* ============================================================== */}
        <section id="sec-original" className="space-y-2">
          <SectionHeader
            title="Original"
            subtitle="The games are independently developed by our team, fun, fair, and safe"
          />
          <div className="grid grid-cols-3 gap-2">
            {ORIGINAL_GAMES.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 5: Slots (JILI, BGAMING, INOUT)                        */}
        {/* ============================================================== */}
        <section id="sec-slots" className="space-y-2">
          <SectionHeader
            title="Slots"
            subtitle="Online real-time game dealers, all verified fair games"
          />
          {/* Provider Pills Row from pakvip21 */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            {["JILI", "BGAMING", "INOUT", "CQ9", "JDB", "TURBO", "PP"].map((prov) => (
              <span
                key={prov}
                className="flex-shrink-0 text-[9px] font-mono font-bold px-2 py-0.5 rounded-md bg-[#282537] text-[#9EA2A8] border border-white/5"
              >
                {prov}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {SLOT_GAMES.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 6: Fishing                                            */}
        {/* ============================================================== */}
        <section id="sec-fishing" className="space-y-2">
          <SectionHeader
            title="Fishing"
            subtitle="Classic arcade gameplay, super cool special effects"
          />
          <div className="grid grid-cols-3 gap-2">
            {FISHING_GAMES.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 7: Casino (Live Video)                                */}
        {/* ============================================================== */}
        <section id="sec-casino" className="space-y-2">
          <SectionHeader
            title="Casino"
            subtitle="Real dealers, immersive experience"
          />
          <div className="grid grid-cols-3 gap-2">
            {CASINO_GAMES.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 8: PVC (Cards & Chess)                                */}
        {/* ============================================================== */}
        <section id="sec-pvc" className="space-y-2">
          <SectionHeader
            title="PVC"
            subtitle="Traditional card games"
            moreCount={2}
          />
          <div className="grid grid-cols-3 gap-2">
            {PVC_GAMES.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 9: Winning Information (pakvip21 live ticker)         */}
        {/* ============================================================== */}
        <section
          className="rounded-2xl p-3 border space-y-2"
          style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#17B15E] animate-ping" />
              <h3 className="text-xs font-black uppercase tracking-wider text-[#E6EBF0]">
                Winning information
              </h3>
            </div>
            <span className="text-[10px] text-[#21D9CC] font-mono">Live</span>
          </div>

          <div className="space-y-1.5">
            {LIVE_WINNERS.map((w, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-2 rounded-xl text-xs border"
                style={{ backgroundColor: THEME.bgL3, borderColor: THEME.border }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold bg-[#38374B] text-[#9EA2A8]">
                    {idx + 1}
                  </div>
                  <div>
                    <div className="font-mono text-[11px] text-[#E6EBF0] font-semibold">{w.user}</div>
                    <div className="text-[10px] text-[#9EA2A8]">{w.game}</div>
                  </div>
                </div>
                <div className="font-bold text-[#BED921] font-mono">{w.amount}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 10: Today's Earnings Chart (pakvip21 podium)          */}
        {/* ============================================================== */}
        <section
          className="rounded-2xl p-3 border space-y-3"
          style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Trophy className="w-4 h-4 text-[#BED921]" />
              <h3 className="text-xs font-black uppercase tracking-wider text-[#E6EBF0]">
                Today's earnings chart
              </h3>
            </div>
            <span className="text-[10px] text-[#9EA2A8]">Daily Rank</span>
          </div>

          {/* Top 3 Podium */}
          <div className="grid grid-cols-3 gap-2 text-center pt-2">
            {/* 2nd Place */}
            <div className="p-2.5 rounded-xl border flex flex-col justify-end" style={{ backgroundColor: THEME.bgL3, borderColor: THEME.border }}>
              <div className="w-7 h-7 mx-auto rounded-full bg-[#9EA2A8]/20 text-[#9EA2A8] flex items-center justify-center font-bold text-xs mb-1">
                2
              </div>
              <span className="text-[10px] text-[#9EA2A8] truncate">Member347216</span>
              <span className="text-xs font-bold text-[#BED921] font-mono mt-1">Rs 4,120,000</span>
            </div>

            {/* 1st Place */}
            <div className="p-3 rounded-xl border-2 border-[#21D9CC] flex flex-col justify-end shadow-[0_0_15px_rgba(33,217,204,0.3)]" style={{ backgroundColor: THEME.bgL3 }}>
              <div className="w-8 h-8 mx-auto rounded-full bg-[#21D9CC] text-[#15131E] flex items-center justify-center font-black text-sm mb-1">
                1
              </div>
              <span className="text-[10px] text-[#E6EBF0] font-bold truncate">MemberNNGQNSPE</span>
              <span className="text-xs font-black text-[#21D9CC] font-mono mt-1">Rs 7,390,180</span>
            </div>

            {/* 3rd Place */}
            <div className="p-2.5 rounded-xl border flex flex-col justify-end" style={{ backgroundColor: THEME.bgL3, borderColor: THEME.border }}>
              <div className="w-7 h-7 mx-auto rounded-full bg-[#DD9138]/20 text-[#DD9138] flex items-center justify-center font-bold text-xs mb-1">
                3
              </div>
              <span className="text-[10px] text-[#9EA2A8] truncate">MemberZGHVEG</span>
              <span className="text-xs font-bold text-[#BED921] font-mono mt-1">Rs 2,890,000</span>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 11: Basic Tools (pakvip21 bottom utility block)       */}
        {/* ============================================================== */}
        <section
          className="rounded-2xl p-3 border space-y-2 text-xs"
          style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}
        >
          <h3 className="font-bold text-[#E6EBF0] uppercase tracking-wider text-[11px]">
            Basic Tools
          </h3>
          <div className="grid grid-cols-4 gap-2 text-center text-[#9EA2A8]">
            <div
              onClick={() => alert("Language: English (Official)")}
              className="p-2 rounded-xl bg-[#282537] cursor-pointer hover:text-[#E6EBF0]"
            >
              <Globe className="w-4 h-4 mx-auto mb-1 text-[#21D9CC]" />
              <span className="text-[10px]">Language</span>
            </div>
            <div
              onClick={() => alert("Notifications: All systems operational.")}
              className="p-2 rounded-xl bg-[#282537] cursor-pointer hover:text-[#E6EBF0]"
            >
              <Bell className="w-4 h-4 mx-auto mb-1 text-[#BED921]" />
              <span className="text-[10px]">Notice</span>
            </div>
            <div
              onClick={() => alert("24/7 VIP Customer Support: WhatsApp +92 300 0000000")}
              className="p-2 rounded-xl bg-[#282537] cursor-pointer hover:text-[#E6EBF0]"
            >
              <Headphones className="w-4 h-4 mx-auto mb-1 text-[#17B15E]" />
              <span className="text-[10px]">24/7 CS</span>
            </div>
            <div
              onClick={() => alert("Winzo Play - Licensed & Secured Gaming Platform.")}
              className="p-2 rounded-xl bg-[#282537] cursor-pointer hover:text-[#E6EBF0]"
            >
              <HelpCircle className="w-4 h-4 mx-auto mb-1 text-[#9EA2A8]" />
              <span className="text-[10px]">About</span>
            </div>
          </div>
        </section>
      </main>

      {/* ============================================================== */}
      {/* FLOATING LUCKY CHEST (pakvip21 style)                          */}
      {/* ============================================================== */}
      <div className="fixed bottom-20 right-3 z-30 flex flex-col items-center">
        <button
          onClick={() => {
            setChestOpened(false);
            setShowChestModal(true);
          }}
          className="w-14 h-14 relative flex items-center justify-center animate-bounce hover:scale-110 transition-transform"
        >
          <img
            src="/pakvip/images/box_closed-CHcnurtG.png"
            alt="Chest"
            className="w-13 h-13 object-contain drop-shadow-[0_0_15px_rgba(33,217,204,0.6)]"
            onError={(e) => {
              (e.target as HTMLElement).style.display = "none";
            }}
          />
          <Gift className="w-8 h-8 text-[#BED921] block [img:not([style*='display: none'])~&]:hidden" />
        </button>
      </div>

      {/* ============================================================== */}
      {/* BOTTOM NAVIGATION (pakvip21 5 tabs + elevated center)          */}
      {/* ============================================================== */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-40 border-t backdrop-blur-lg"
        style={{ backgroundColor: `${THEME.bgL2}F8`, borderColor: THEME.border }}
      >
        <div className="max-w-md mx-auto px-4 py-1.5 flex items-center justify-between relative">
          <button
            onClick={() => setActiveTab("home")}
            className={`flex flex-col items-center gap-0.5 transition ${
              activeTab === "home" ? "text-[#21D9CC]" : "text-[#9EA2A8]"
            }`}
          >
            <Gamepad2 className="w-5 h-5" />
            <span className="text-[10px] font-semibold">Home</span>
            {activeTab === "home" && <div className="w-1 h-1 rounded-full bg-[#21D9CC]" />}
          </button>

          <button
            onClick={() => {
              setActiveTab("activity");
              setShowChestModal(true);
            }}
            className={`flex flex-col items-center gap-0.5 transition ${
              activeTab === "activity" ? "text-[#21D9CC]" : "text-[#9EA2A8]"
            }`}
          >
            <Gift className="w-5 h-5" />
            <span className="text-[10px] font-semibold">Activity</span>
            {activeTab === "activity" && <div className="w-1 h-1 rounded-full bg-[#21D9CC]" />}
          </button>

          {/* Center Elevated Win Go Gamepad */}
          <div className="relative -top-4">
            <button
              onClick={() => {
                const wg = LOTTERY_GAMES.find((g) => g.id === "wingo-30s");
                if (wg) setActiveGame(wg);
              }}
              className="w-12 h-12 rounded-full flex items-center justify-center text-[#15131E] shadow-[0_0_20px_rgba(33,217,204,0.6)] border-4 border-[#15131E] active:scale-95 transition-transform"
              style={{ background: THEME.gradient }}
            >
              <Zap className="w-6 h-6 fill-current" />
            </button>
            <span className="block text-center text-[9px] font-black text-[#21D9CC] mt-0.5">
              WIN GO
            </span>
          </div>

          <button
            onClick={() => {
              setActiveTab("wallet");
              setShowDepositModal(true);
            }}
            className={`flex flex-col items-center gap-0.5 transition ${
              activeTab === "wallet" ? "text-[#21D9CC]" : "text-[#9EA2A8]"
            }`}
          >
            <Wallet className="w-5 h-5" />
            <span className="text-[10px] font-semibold">Wallet</span>
            {activeTab === "wallet" && <div className="w-1 h-1 rounded-full bg-[#21D9CC]" />}
          </button>

          <button
            onClick={() => {
              setActiveTab("account");
              if (user) alert(`Account: ${user.phone}\nBalance: Rs ${user.balance}\nVIP: ${user.vip}`);
            }}
            className={`flex flex-col items-center gap-0.5 transition ${
              activeTab === "account" ? "text-[#21D9CC]" : "text-[#9EA2A8]"
            }`}
          >
            <User className="w-5 h-5" />
            <span className="text-[10px] font-semibold">Account</span>
            {activeTab === "account" && <div className="w-1 h-1 rounded-full bg-[#21D9CC]" />}
          </button>
        </div>
      </nav>

      {/* ============================================================== */}
      {/* DEPOSIT MODAL (JazzCash & EasyPaisa)                           */}
      {/* ============================================================== */}
      {showDepositModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div
            className="w-full max-w-md rounded-t-3xl sm:rounded-3xl border p-5 space-y-4"
            style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}
          >
            <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: THEME.border }}>
              <div className="flex items-center gap-2">
                <Wallet className="w-5 h-5 text-[#21D9CC]" />
                <h3 className="font-black text-base text-[#E6EBF0]">Deposit Funds (PKR)</h3>
              </div>
              <button
                onClick={() => setShowDepositModal(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#9EA2A8]"
                style={{ backgroundColor: THEME.bgPill }}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {depositSuccessMsg ? (
              <div className="p-4 rounded-2xl bg-[#17B15E]/20 border border-[#17B15E] text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-[#17B15E] mx-auto" />
                <p className="font-bold text-[#E6EBF0] text-sm">{depositSuccessMsg}</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!user) return;
                  saveUser({ ...user, balance: user.balance + Number(depositAmount) });
                  setDepositSuccessMsg(`Successfully credited Rs ${depositAmount.toLocaleString()}!`);
                  setTimeout(() => {
                    setDepositSuccessMsg("");
                    setShowDepositModal(false);
                  }, 1500);
                }}
                className="space-y-3.5"
              >
                <div>
                  <label className="text-xs text-[#9EA2A8] block mb-1 font-semibold">Payment Method</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setDepositMethod("jazzcash")}
                      className={`p-3 rounded-xl border flex items-center gap-2 transition ${
                        depositMethod === "jazzcash"
                          ? "border-[#21D9CC] bg-[#21D9CC]/10 text-[#E6EBF0]"
                          : "border-white/10 text-[#9EA2A8]"
                      }`}
                    >
                      <div className="w-3 h-3 rounded-full border border-current flex items-center justify-center">
                        {depositMethod === "jazzcash" && <div className="w-1.5 h-1.5 rounded-full bg-[#21D9CC]" />}
                      </div>
                      <span className="font-bold text-xs">JazzCash</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setDepositMethod("easypaisa")}
                      className={`p-3 rounded-xl border flex items-center gap-2 transition ${
                        depositMethod === "easypaisa"
                          ? "border-[#BED921] bg-[#BED921]/10 text-[#E6EBF0]"
                          : "border-white/10 text-[#9EA2A8]"
                      }`}
                    >
                      <div className="w-3 h-3 rounded-full border border-current flex items-center justify-center">
                        {depositMethod === "easypaisa" && <div className="w-1.5 h-1.5 rounded-full bg-[#BED921]" />}
                      </div>
                      <span className="font-bold text-xs">EasyPaisa</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-[#9EA2A8] block mb-1 font-semibold">Amount (Rs)</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[500, 1000, 2000, 5000, 10000, 25000].map((amt) => (
                      <button
                        type="button"
                        key={amt}
                        onClick={() => setDepositAmount(amt)}
                        className={`py-2 rounded-xl border text-xs font-mono font-bold transition ${
                          depositAmount === amt
                            ? "bg-[#21D9CC] text-[#15131E] border-transparent"
                            : "bg-[#282537] text-[#E6EBF0] border-white/5"
                        }`}
                      >
                        Rs {amt.toLocaleString()}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-xl border space-y-1 text-xs" style={{ backgroundColor: THEME.bgL3, borderColor: THEME.border }}>
                  <div className="flex justify-between text-[#9EA2A8]">
                    <span>Merchant Account:</span>
                    <span className="text-[#E6EBF0] font-mono font-bold">0300-9876543</span>
                  </div>
                  <div className="flex justify-between text-[#9EA2A8]">
                    <span>Account Name:</span>
                    <span className="text-[#E6EBF0] font-bold">WINZO OFFICIAL</span>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-[#9EA2A8] block mb-1 font-semibold">Transaction ID (TID)</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 984512789"
                    value={depositTid}
                    onChange={(e) => setDepositTid(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border text-sm text-[#E6EBF0] outline-none"
                    style={{ backgroundColor: THEME.bgPill, borderColor: THEME.border }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-bold text-sm text-[#15131E] shadow-lg active:scale-95 transition"
                  style={{ background: THEME.gradient }}
                >
                  Confirm & Credit Rs {depositAmount.toLocaleString()}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* PLAYABLE WIN GO 30S LOTTERY                                    */}
      {/* ============================================================== */}
      {activeGame?.id === "wingo-30s" && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3">
          <div
            className="w-full max-w-md rounded-3xl border p-4 space-y-3.5"
            style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}
          >
            <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: THEME.border }}>
              <div>
                <h3 className="font-black text-base text-[#E6EBF0]">Win Go 30s</h3>
                <span className="text-[10px] text-[#9EA2A8]">Period #{wingoPeriod}</span>
              </div>
              <button onClick={() => setActiveGame(null)} className="w-8 h-8 rounded-full flex items-center justify-center text-[#9EA2A8]" style={{ backgroundColor: THEME.bgPill }}>
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-3.5 rounded-2xl text-center border" style={{ backgroundColor: THEME.bgL3, borderColor: THEME.border }}>
              <span className="text-xs text-[#9EA2A8] uppercase font-bold">Time Remaining</span>
              <div className="text-4xl font-black text-[#BED921] font-mono tracking-widest mt-1">
                00:{wingoTimer < 10 ? `0${wingoTimer}` : wingoTimer}
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#9EA2A8]">Color Bet (x2.0 Payout)</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => {
                    setWingoBetColor("green");
                    setWingoBetNum(null);
                  }}
                  className={`py-2.5 rounded-xl font-bold text-xs uppercase border ${
                    wingoBetColor === "green" ? "bg-[#17B15E] text-white border-white" : "bg-[#17B15E]/20 text-[#17B15E] border-[#17B15E]/40"
                  }`}
                >
                  Green
                </button>
                <button
                  onClick={() => {
                    setWingoBetColor("violet");
                    setWingoBetNum(null);
                  }}
                  className={`py-2.5 rounded-xl font-bold text-xs uppercase border ${
                    wingoBetColor === "violet" ? "bg-[#9B48DB] text-white border-white" : "bg-[#9B48DB]/20 text-[#9B48DB] border-[#9B48DB]/40"
                  }`}
                >
                  Violet
                </button>
                <button
                  onClick={() => {
                    setWingoBetColor("red");
                    setWingoBetNum(null);
                  }}
                  className={`py-2.5 rounded-xl font-bold text-xs uppercase border ${
                    wingoBetColor === "red" ? "bg-[#D23838] text-white border-white" : "bg-[#D23838]/20 text-[#D23838] border-[#D23838]/40"
                  }`}
                >
                  Red
                </button>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#9EA2A8]">Number Bet (x9.0 Payout)</label>
              <div className="grid grid-cols-5 gap-1.5">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <button
                    key={num}
                    onClick={() => {
                      setWingoBetNum(num);
                      setWingoBetColor(null);
                    }}
                    className={`py-2 rounded-xl font-mono font-black text-sm border ${
                      wingoBetNum === num ? "bg-[#21D9CC] text-[#15131E] border-transparent" : "bg-[#38374B] text-[#E6EBF0] border-white/5"
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                if (!user || user.balance < wingoAmount) return alert("Insufficient balance");
                saveUser({ ...user, balance: user.balance - wingoAmount });
                alert(`Bet of Rs ${wingoAmount} placed for Round #${wingoPeriod}!`);
              }}
              className="w-full py-3 rounded-xl font-bold text-sm text-[#15131E] shadow-lg active:scale-95 transition"
              style={{ background: THEME.gradient }}
            >
              Place Bet of Rs {wingoAmount}
            </button>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* PLAYABLE AVIATOR CRASH                                         */}
      {/* ============================================================== */}
      {activeGame?.id === "aviator-spribe" && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3">
          <div
            className="w-full max-w-md rounded-3xl border p-4 space-y-4"
            style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}
          >
            <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: THEME.border }}>
              <h3 className="font-black text-base text-[#E6EBF0]">Spribe Aviator</h3>
              <button onClick={() => setActiveGame(null)} className="w-8 h-8 rounded-full flex items-center justify-center text-[#9EA2A8]" style={{ backgroundColor: THEME.bgPill }}>
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative h-44 rounded-2xl overflow-hidden border flex flex-col items-center justify-center bg-[#0d0b14]" style={{ borderColor: THEME.border }}>
              <div
                className={`text-5xl font-black font-mono tracking-tight ${
                  aviatorCrashed ? "text-[#D23838]" : aviatorCashedOut ? "text-[#17B15E]" : "text-[#E6EBF0]"
                }`}
              >
                {aviatorMultiplier.toFixed(2)}x
              </div>
              {aviatorCrashed && <span className="text-xs font-bold text-[#D23838] uppercase mt-1">FLEW AWAY!</span>}
              {aviatorCashedOut && <span className="text-xs font-bold text-[#17B15E] uppercase mt-1">CASHED OUT!</span>}
            </div>

            <div className="space-y-2">
              {!aviatorRunning ? (
                <button
                  onClick={() => {
                    if (!user || user.balance < 200) return alert("Insufficient balance");
                    saveUser({ ...user, balance: user.balance - 200 });
                    setAviatorMultiplier(1.0);
                    setAviatorCashedOut(false);
                    setAviatorCrashed(false);
                    setAviatorRunning(true);
                  }}
                  className="w-full py-3.5 rounded-xl font-black text-sm text-[#15131E] shadow-lg active:scale-95 transition"
                  style={{ background: THEME.gradient }}
                >
                  START FLIGHT (Rs 200)
                </button>
              ) : (
                <button
                  onClick={() => {
                    if (!aviatorRunning || aviatorCrashed || !user) return;
                    const win = Math.floor(200 * aviatorMultiplier);
                    saveUser({ ...user, balance: user.balance + win });
                    setAviatorCashedOut(true);
                    setAviatorRunning(false);
                  }}
                  disabled={aviatorCrashed || aviatorCashedOut}
                  className="w-full py-3.5 rounded-xl font-black text-base text-white bg-[#17B15E] hover:bg-[#159f54] shadow-lg active:scale-95 transition"
                >
                  CASH OUT Rs {Math.floor(200 * aviatorMultiplier).toLocaleString()}
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Lucky Chest Modal */}
      {showChestModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div
            className="w-full max-w-sm rounded-3xl border p-5 text-center space-y-4"
            style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}
          >
            <div className="flex justify-end">
              <button onClick={() => setShowChestModal(false)} className="w-8 h-8 rounded-full flex items-center justify-center text-[#9EA2A8]" style={{ backgroundColor: THEME.bgPill }}>
                <X className="w-4 h-4" />
              </button>
            </div>
            <h3 className="text-xl font-black text-[#E6EBF0]">
              {chestOpened ? "CONGRATULATIONS!" : "DAILY LUCKY CHEST"}
            </h3>
            <div className="w-32 h-32 mx-auto flex items-center justify-center">
              <img
                src={chestOpened ? "/pakvip/images/box_open-9_JHXIXH.png" : "/pakvip/images/box_closed-CHcnurtG.png"}
                alt="Chest"
                className="w-28 h-28 object-contain drop-shadow-[0_0_20px_rgba(33,217,204,0.5)]"
              />
            </div>
            {chestOpened ? (
              <div className="text-2xl font-black text-[#BED921] font-mono">
                +Rs {chestReward.toLocaleString()}
              </div>
            ) : (
              <p className="text-xs text-[#9EA2A8]">
                Open your daily mystery chest and receive up to Rs 1,000 instantly!
              </p>
            )}
            {!chestOpened ? (
              <button
                onClick={() => {
                  if (chestOpened || !user) return;
                  const rew = Math.floor(Math.random() * 800) + 200;
                  setChestReward(rew);
                  setChestOpened(true);
                  saveUser({ ...user, balance: user.balance + rew });
                }}
                className="w-full py-3 rounded-xl font-bold text-sm text-[#15131E]"
                style={{ background: THEME.gradient }}
              >
                OPEN CHEST NOW
              </button>
            ) : (
              <button onClick={() => setShowChestModal(false)} className="w-full py-3 rounded-xl font-bold text-sm text-[#15131E]" style={{ background: THEME.gradient }}>
                DONE
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
