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
  Share2,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Winzo Play - Pakistan's #1 Online Casino & Gaming Platform" },
      {
        name: "description",
        content:
          "Official Winzo Play Pakistan: Real JILI Slots, Spribe Aviator, Chicken Road 2, and Win Go Lottery with instant JazzCash & EasyPaisa payouts.",
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

// Authentic Pakvip Color Constants from public/pakvip/css/index-D0tVyFEX.css
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

// Official Pakvip 3D Categories from ossimg.pakvipacting.com
const CATEGORIES = [
  {
    id: "popular",
    label: "Hot Slots",
    labelUr: "مقبول گیمز",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamecategory/gamecategory_202608131718483ic9.png",
  },
  {
    id: "lottery",
    label: "Win Go",
    labelUr: "لاٹری",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamecategory/gamecategory_20260810182325juft.png",
  },
  {
    id: "slots",
    label: "JILI Slots",
    labelUr: "سلاٹس",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamecategory/gamecategory_20260810182333aqc4.png",
  },
  {
    id: "crash",
    label: "Mini Games",
    labelUr: "منی گیمز",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamecategory/gamecategory_20260813171856trpj.png",
  },
  {
    id: "fish",
    label: "Fishing",
    labelUr: "فشنگ",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamecategory/gamecategory_2026081018222762uc.png",
  },
  {
    id: "live",
    label: "Live Video",
    labelUr: "لائیو کیسینو",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamecategory/gamecategory_20260810182256xty3.png",
  },
  {
    id: "cards",
    label: "Cards / Chess",
    labelUr: "تاش گیمز",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamecategory/gamecategory_202608101822434ox5.png",
  },
];

interface GameItem {
  id: string;
  title: string;
  category: "popular" | "lottery" | "slots" | "crash" | "fish" | "live" | "cards";
  provider: "JILI" | "SPRIBE" | "INOUT" | "TB_Chess" | "JDB" | "CQ9" | "WINZO" | "EVOLUTION";
  odds: string; // Winning chance %
  hot?: boolean;
  img: string;
}

// Complete Official Pakvip Game Catalog (CDN URLs)
const OFFICIAL_GAMES: GameItem[] = [
  // --- Popular / Hot Slots ---
  {
    id: "aviator-spribe",
    title: "Aviator",
    category: "popular",
    provider: "SPRIBE",
    odds: "98.8%",
    hot: true,
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/SPRIBE/aviator_20260812174827906.png",
  },
  {
    id: "super-ace",
    title: "Super Ace",
    category: "popular",
    provider: "JILI",
    odds: "98.4%",
    hot: true,
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/JILI/51.png",
  },
  {
    id: "chicken-road-2",
    title: "Chicken Road 2",
    category: "popular",
    provider: "INOUT",
    odds: "97.9%",
    hot: true,
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/INOUT/chicken-road-two.png",
  },
  {
    id: "fortune-gems-2",
    title: "Fortune Gems 2",
    category: "popular",
    provider: "JILI",
    odds: "98.2%",
    hot: true,
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/JILI/109.png",
  },
  {
    id: "money-coming",
    title: "Money Coming",
    category: "popular",
    provider: "JILI",
    odds: "97.6%",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/JILI/58.png",
  },
  {
    id: "jackpot-fishing",
    title: "JackPot Fishing",
    category: "popular",
    provider: "JILI",
    odds: "96.8%",
    hot: true,
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/JILI/32.png",
  },

  // --- JILI Slots ---
  {
    id: "fortune-gems",
    title: "Fortune Gems",
    category: "slots",
    provider: "JILI",
    odds: "98.0%",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/JILI/49.png",
  },
  {
    id: "crazy-777",
    title: "Crazy 777",
    category: "slots",
    provider: "JILI",
    odds: "97.4%",
    hot: true,
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/JILI/43.png",
  },
  {
    id: "golden-empire",
    title: "Golden Empire",
    category: "slots",
    provider: "JILI",
    odds: "97.7%",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/JILI/48.png",
  },
  {
    id: "charge-buffalo",
    title: "Charge Buffalo",
    category: "slots",
    provider: "JILI",
    odds: "96.9%",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/JILI/77.png",
  },
  {
    id: "boxing-king",
    title: "Boxing King",
    category: "slots",
    provider: "JILI",
    odds: "97.1%",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/JILI/102.png",
  },
  {
    id: "mega-ace",
    title: "Mega Ace",
    category: "slots",
    provider: "JILI",
    odds: "98.5%",
    hot: true,
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/JILI/115.png",
  },

  // --- Lottery (Win Go / K3 / 5D) ---
  {
    id: "wingo-30s",
    title: "Win Go 30s",
    category: "lottery",
    provider: "WINZO",
    odds: "98.9%",
    hot: true,
    img: "https://ossimg.pakvipacting.com/Pakvip/lotterycategory/lotterycategory_202608101818434tdn.png",
  },
  {
    id: "k3-lottery",
    title: "K3 Lotre",
    category: "lottery",
    provider: "WINZO",
    odds: "98.3%",
    img: "https://ossimg.pakvipacting.com/Pakvip/lotterycategory/lotterycategory_20260810181852r5xt.png",
  },
  {
    id: "5d-lottery",
    title: "5D Lotre",
    category: "lottery",
    provider: "WINZO",
    odds: "98.1%",
    img: "https://ossimg.pakvipacting.com/Pakvip/lotterycategory/lotterycategory_202608101819028h63.png",
  },
  {
    id: "trx-wingo",
    title: "Trx Win Go",
    category: "lottery",
    provider: "WINZO",
    odds: "98.7%",
    hot: true,
    img: "https://ossimg.pakvipacting.com/Pakvip/lotterycategory/lotterycategory_20260810181917mlmi.png",
  },
  {
    id: "motorace",
    title: "MotoRace",
    category: "lottery",
    provider: "WINZO",
    odds: "97.5%",
    img: "https://ossimg.pakvipacting.com/Pakvip/lotterycategory/lotterycategory_20260811123643rnhj.png",
  },

  // --- Mini Games / Flash / Crash ---
  {
    id: "chicken-road",
    title: "Chicken Road",
    category: "crash",
    provider: "INOUT",
    odds: "98.0%",
    hot: true,
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/INOUT/chicken-road.png",
  },
  {
    id: "mines-jili",
    title: "Mines",
    category: "crash",
    provider: "JILI",
    odds: "97.5%",
    hot: true,
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/JILI/229.png",
  },
  {
    id: "go-rush",
    title: "Go Rush",
    category: "crash",
    provider: "JILI",
    odds: "97.8%",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/JILI/224.png",
  },
  {
    id: "plinko-spribe",
    title: "Plinko",
    category: "crash",
    provider: "SPRIBE",
    odds: "98.4%",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/SPRIBE/plinko.png",
  },
  {
    id: "limbo-tb",
    title: "Limbo",
    category: "crash",
    provider: "TB_Chess",
    odds: "98.2%",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/TB_Chess/110.png",
  },
  {
    id: "cricket-crash",
    title: "Cricket",
    category: "crash",
    provider: "TB_Chess",
    odds: "97.3%",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/TB_Chess/810.png",
  },

  // --- Fishing Games ---
  {
    id: "royal-fishing",
    title: "Royal Fishing",
    category: "fish",
    provider: "JILI",
    odds: "97.0%",
    hot: true,
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/JILI/1.png",
  },
  {
    id: "mega-fishing",
    title: "Mega Fishing",
    category: "fish",
    provider: "JILI",
    odds: "97.4%",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/JILI/74.png",
  },
  {
    id: "happy-fishing",
    title: "Happy Fishing",
    category: "fish",
    provider: "JILI",
    odds: "96.9%",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/JILI/82.png",
  },
  {
    id: "dragon-master",
    title: "Dragon Master",
    category: "fish",
    provider: "JDB",
    odds: "96.5%",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/JDB/7006.png",
  },
  {
    id: "cai-shen-fishing",
    title: "Cai Shen Fishing",
    category: "fish",
    provider: "JDB",
    odds: "96.7%",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/JDB/7003.png",
  },
  {
    id: "oneshot-fishing",
    title: "OneShot Fishing",
    category: "fish",
    provider: "CQ9",
    odds: "96.8%",
    img: "https://ossimg.pakvipacting.com/Pakvip/gamelogo/CQ9/AT01.png",
  },

  // --- Live Casino Video ---
  {
    id: "crazy-time",
    title: "Crazy Time",
    category: "live",
    provider: "EVOLUTION",
    odds: "96.5%",
    hot: true,
    img: "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "lightning-roulette",
    title: "Lightning Roulette",
    category: "live",
    provider: "EVOLUTION",
    odds: "97.3%",
    img: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "dragon-tiger",
    title: "Dragon Tiger",
    category: "live",
    provider: "EVOLUTION",
    odds: "96.8%",
    img: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=400&q=80",
  },

  // --- Cards & Chess ---
  {
    id: "teen-patti",
    title: "Teen Patti",
    category: "cards",
    provider: "TB_Chess",
    odds: "97.5%",
    hot: true,
    img: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "andar-bahar",
    title: "Andar Bahar",
    category: "cards",
    provider: "TB_Chess",
    odds: "98.0%",
    img: "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=400&q=80",
  },
];

const WINNERS = [
  { phone: "MemberZGHVEGRM", game: "WinGo 30s", amount: "₨ 24,500" },
  { phone: "0304***982", game: "Super Ace", amount: "₨ 48,500" },
  { phone: "MemberNNGQNSPE", game: "Aviator (x16.4)", amount: "₨ 135,200" },
  { phone: "0346***710", game: "Chicken Road 2", amount: "₨ 62,000" },
  { phone: "0312***893", game: "Fortune Gems 2", amount: "₨ 32,400" },
];

export function WinzoPlayApp() {
  const [lang, setLang] = useState<"en" | "ur">("ur");
  const [activeTab, setActiveTab] = useState<"home" | "activity" | "promo" | "wallet" | "account">("home");
  const [activeCat, setActiveCat] = useState<string>("popular");
  const [activeBanner, setActiveBanner] = useState(0);

  // User Local Balance
  const [user, setUser] = useState<{ phone: string; balance: number; vip: number } | null>(null);
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [showChestModal, setShowChestModal] = useState(false);
  const [chestOpened, setChestOpened] = useState(false);
  const [chestReward, setChestReward] = useState(0);

  // Playable Modals
  const [activeGame, setActiveGame] = useState<GameItem | null>(null);

  // Win Go State
  const [wingoTimer, setWingoTimer] = useState(30);
  const [wingoPeriod, setWingoPeriod] = useState(20261125089);
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
    const t = setInterval(() => setActiveBanner((prev) => (prev + 1) % 3), 4000);
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
          if (next > 1.3 && Math.random() < 0.035) {
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

  const filteredGames = useMemo(() => {
    if (activeCat === "popular") return OFFICIAL_GAMES.filter((g) => g.category === "popular");
    return OFFICIAL_GAMES.filter((g) => g.category === activeCat);
  }, [activeCat]);

  return (
    <div
      className="min-h-screen text-[#E6EBF0] font-sans select-none pb-24 antialiased"
      style={{ backgroundColor: THEME.bgL1 }}
      dir={lang === "ur" ? "rtl" : "ltr"}
    >
      {/* ============================================================== */}
      {/* 1. TOP HEADER (Authentic Pakvip Navbar with Cyber WP Monogram) */}
      {/* ============================================================== */}
      <header
        className="sticky top-0 z-40 px-3 py-2 flex items-center justify-between backdrop-blur-md border-b"
        style={{ backgroundColor: `${THEME.bgL2}F5`, borderColor: THEME.border }}
      >
        {/* Brand & Monogram */}
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
              <span className="text-[9px] px-1 py-0.2 rounded font-bold bg-[#21D9CC]/20 text-[#21D9CC]">
                VIP
              </span>
            </div>
            <span className="text-[9px] text-[#9EA2A8]">
              {lang === "ur" ? "آفیشل آن لائن گیمنگ" : "Official Online Casino"}
            </span>
          </div>
        </div>

        {/* Right Section: Balance & Deposit */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "ur" : "en")}
            className="flex items-center gap-1 text-[11px] px-2 py-1 rounded-md border text-[#9EA2A8]"
            style={{ backgroundColor: THEME.bgPill, borderColor: THEME.border }}
          >
            <Globe className="w-3 h-3 text-[#21D9CC]" />
            <span>{lang === "en" ? "اردو" : "EN"}</span>
          </button>

          {user && (
            <div className="flex items-center gap-1.5">
              <div
                onClick={() => setShowDepositModal(true)}
                className="cursor-pointer px-2.5 py-1 rounded-lg border flex items-center gap-1.5"
                style={{ backgroundColor: THEME.bgPill, borderColor: THEME.border }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#17B15E] animate-pulse" />
                <span className="text-xs font-bold text-[#E6EBF0] font-mono">
                  ₨ {user.balance.toLocaleString()}
                </span>
              </div>
              <button
                onClick={() => setShowDepositModal(true)}
                className="px-2.5 py-1.5 rounded-lg text-xs font-black text-[#15131E] shadow-sm hover:brightness-110 active:scale-95 transition"
                style={{ background: THEME.gradient }}
              >
                {lang === "ur" ? "ڈپازٹ" : "Deposit"}
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-md mx-auto px-2.5 pt-2 space-y-2.5">
        {/* ============================================================== */}
        {/* 2. AUTHENTIC HERO CAROUSEL                                     */}
        {/* ============================================================== */}
        <section className="relative rounded-2xl overflow-hidden border shadow-lg" style={{ borderColor: THEME.border }}>
          <div className="relative h-40 w-full bg-[#110e1a]">
            {activeBanner === 0 && (
              <div className="absolute inset-0 bg-gradient-to-r from-[#15131E] via-[#201D2B]/90 to-transparent p-3.5 flex flex-col justify-between z-10">
                <div>
                  <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-[#21D9CC]/20 text-[#21D9CC] border border-[#21D9CC]/40">
                    VIP EXCLUSIVE
                  </span>
                  <h2 className="text-lg font-black text-[#E6EBF0] mt-1 leading-tight">
                    10% DAILY REBATE
                  </h2>
                  <p className="text-[11px] text-[#9EA2A8]">
                    {lang === "ur" ? "خودکار روزانہ کیش بیک جاز کیش اور ایزی پیسہ پر" : "Instant cashback on every single bet."}
                  </p>
                </div>
                <button
                  onClick={() => setShowDepositModal(true)}
                  className="w-fit px-3 py-1 rounded-lg text-xs font-bold text-[#15131E]"
                  style={{ background: THEME.gradient }}
                >
                  {lang === "ur" ? "ڈپازٹ کریں" : "Deposit Now"}
                </button>
              </div>
            )}

            {activeBanner === 1 && (
              <div className="absolute inset-0 bg-gradient-to-r from-[#15131E] via-[#201D2B]/90 to-transparent p-3.5 flex flex-col justify-between z-10">
                <div>
                  <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-[#D23838]/20 text-[#D23838] border border-[#D23838]/40">
                    AVIATOR RADAR
                  </span>
                  <h2 className="text-lg font-black text-[#E6EBF0] mt-1 leading-tight">
                    ₨ 10,000,000 TOURNAMENT
                  </h2>
                  <p className="text-[11px] text-[#9EA2A8]">
                    {lang === "ur" ? "فوری اڑان بھریں اور کیش آؤٹ کریں" : "Hit x100+ multiplier and cash out instantly."}
                  </p>
                </div>
                <button
                  onClick={() => {
                    const av = OFFICIAL_GAMES.find((g) => g.id === "aviator-spribe");
                    if (av) setActiveGame(av);
                  }}
                  className="w-fit px-3 py-1 rounded-lg text-xs font-bold text-[#15131E]"
                  style={{ background: THEME.gradient }}
                >
                  {lang === "ur" ? "کھیلیں" : "Play Aviator"}
                </button>
              </div>
            )}

            {activeBanner === 2 && (
              <div className="absolute inset-0 bg-gradient-to-r from-[#15131E] via-[#201D2B]/90 to-transparent p-3.5 flex flex-col justify-between z-10">
                <div>
                  <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-[#BED921]/20 text-[#BED921] border border-[#BED921]/40">
                    WELCOME BONUS
                  </span>
                  <h2 className="text-lg font-black text-[#E6EBF0] mt-1 leading-tight">
                    100% FIRST DEPOSIT
                  </h2>
                  <p className="text-[11px] text-[#9EA2A8]">
                    {lang === "ur" ? "پہلے ڈپازٹ پر ڈبل بیلنس حاصل کریں" : "Double your bankroll with JazzCash & EasyPaisa."}
                  </p>
                </div>
                <button
                  onClick={() => setShowDepositModal(true)}
                  className="w-fit px-3 py-1 rounded-lg text-xs font-bold text-[#15131E]"
                  style={{ background: THEME.gradient }}
                >
                  Deposit ₨ 1,000 → Get ₨ 2,000
                </button>
              </div>
            )}

            <img
              src="https://ossimg.pakvipacting.com/Pakvip/gamelogo/SPRIBE/aviator_20260812174827906.png"
              alt="Hero"
              className="absolute right-2 top-2 h-36 object-contain opacity-40 drop-shadow"
            />
          </div>

          <div className="absolute bottom-2 right-3 flex items-center gap-1 z-20">
            {[0, 1, 2].map((i) => (
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
        {/* 3. AUTHENTIC NOTICE MARQUEE TICKER (Pakvip Speaker Icon)       */}
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
              {lang === "ur"
                ? "خوش آمدید Winzo Play پر! جاز کیش اور ایزی پیسہ سے فوری ڈیپازٹ اور نکلوانا فعال ہے۔ 24 گھنٹے لائیو کسٹمر سپورٹ فعال ہے۔"
                : "Welcome to Winzo Play! Instant JazzCash & EasyPaisa deposits & withdrawals active. 24/7 VIP Live Support."}
            </div>
          </div>
          <button
            onClick={() => setShowDepositModal(true)}
            className="flex-shrink-0 px-2 py-0.5 rounded text-[10px] font-bold text-[#15131E]"
            style={{ background: THEME.gradient }}
          >
            {lang === "ur" ? "تفصیل" : "Details"}
          </button>
        </section>

        {/* ============================================================== */}
        {/* 4. OFFICIAL PAKVIP 3D CATEGORY BAR (Tabs-btn from CDN)        */}
        {/* ============================================================== */}
        <section className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCat === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                className={`flex-shrink-0 flex flex-col items-center justify-center p-1.5 rounded-xl transition border min-w-[62px] ${
                  isSelected
                    ? "border-[#21D9CC] bg-[#21D9CC]/10 shadow-[0_0_12px_rgba(33,217,204,0.3)]"
                    : "border-transparent bg-[#201D2B] hover:border-white/10"
                }`}
              >
                {/* 3D Category Icon from Pakvip CDN */}
                <div className="w-11 h-11 rounded-lg flex items-center justify-center overflow-hidden mb-1">
                  <img
                    src={cat.img}
                    alt={cat.label}
                    className="w-10 h-10 object-contain drop-shadow"
                    loading="lazy"
                  />
                </div>
                <span
                  className={`text-[10px] font-bold truncate max-w-[64px] ${
                    isSelected ? "text-[#21D9CC]" : "text-[#9EA2A8]"
                  }`}
                >
                  {lang === "ur" ? cat.labelUr : cat.label}
                </span>
              </button>
            );
          })}
        </section>

        {/* ============================================================== */}
        {/* 5. AUTHENTIC 3-COLUMN POSTER GRID (Same layout like Pakvip)   */}
        {/* ============================================================== */}
        <section className="space-y-2">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-3.5 rounded-full" style={{ background: THEME.gradient }} />
              <h3 className="text-xs font-black uppercase tracking-wider text-[#E6EBF0]">
                {lang === "ur" ? "تجویز کردہ گیمز" : "Recommended Games"}
              </h3>
            </div>
            <span className="text-[10px] text-[#21D9CC] font-mono font-bold">
              {filteredGames.length} Games
            </span>
          </div>

          {/* Real Pakvip 3-Column Grid */}
          <div className="grid grid-cols-3 gap-2">
            {filteredGames.map((game) => (
              <div
                key={game.id}
                onClick={() => setActiveGame(game)}
                className="group cursor-pointer rounded-xl overflow-hidden border transition-all duration-200 hover:scale-[1.03] active:scale-95 flex flex-col justify-between"
                style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}
              >
                {/* Vertical Poster Card (124x168 aspect-[3/4]) */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#161420]">
                  <img
                    src={game.img}
                    alt={game.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Top Provider Pill */}
                  <div className="absolute top-1 left-1">
                    <span className="text-[8px] font-extrabold px-1 py-0.2 rounded bg-black/70 backdrop-blur-sm text-[#E6EBF0] uppercase font-mono">
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

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-[#15131E] shadow-lg"
                      style={{ background: THEME.gradient }}
                    >
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Pakvip Authentic Win Odds Bar (جیتنے کے امکانات) */}
                <div className="p-1.5 space-y-1 bg-[#1a1724]">
                  <div className="text-[10px] font-bold text-[#E6EBF0] truncate">
                    {game.title}
                  </div>

                  {/* Real Pakvip .win-odds container */}
                  <div className="space-y-0.5">
                    <div className="flex items-center justify-between text-[8px] text-[#9EA2A8]">
                      <span>جیتنے کے امکانات</span>
                      <span className="font-mono font-bold text-[#21D9CC]">{game.odds}</span>
                    </div>
                    {/* Animated Neon Progress Bar */}
                    <div className="w-full h-1 bg-[#282537] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: game.odds,
                          background: THEME.gradient,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* 6. PAKVIP LIVE WINNERS TICKER                                  */}
        {/* ============================================================== */}
        <section
          className="rounded-2xl p-3 border space-y-2"
          style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#17B15E] animate-ping" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#E6EBF0]">
                {lang === "ur" ? "حالیہ جیتنے والے" : "Daily Profit Rank"}
              </h3>
            </div>
            <span className="text-[10px] text-[#21D9CC] font-mono">Live</span>
          </div>

          <div className="space-y-1.5">
            {WINNERS.map((w, idx) => (
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
                    <div className="font-mono text-[11px] text-[#E6EBF0] font-semibold">{w.phone}</div>
                    <div className="text-[10px] text-[#9EA2A8]">{w.game}</div>
                  </div>
                </div>
                <div className="font-bold text-[#BED921] font-mono">{w.amount}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ============================================================== */}
      {/* 7. FLOATING LUCKY TREASURE CHEST (Native Pakvip Assets)         */}
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
      {/* 8. AUTHENTIC PAKVIP BOTTOM NAVIGATION                           */}
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
            <span className="text-[10px] font-semibold">{lang === "ur" ? "ہوم" : "Home"}</span>
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
            <span className="text-[10px] font-semibold">{lang === "ur" ? "سرگرمی" : "Activity"}</span>
            {activeTab === "activity" && <div className="w-1 h-1 rounded-full bg-[#21D9CC]" />}
          </button>

          {/* Center Elevated Win Go Gamepad */}
          <div className="relative -top-4">
            <button
              onClick={() => {
                const wg = OFFICIAL_GAMES.find((g) => g.id === "wingo-30s");
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
            <span className="text-[10px] font-semibold">{lang === "ur" ? "والٹ" : "Wallet"}</span>
            {activeTab === "wallet" && <div className="w-1 h-1 rounded-full bg-[#21D9CC]" />}
          </button>

          <button
            onClick={() => {
              setActiveTab("account");
              if (user) alert(`Account: ${user.phone}\nBalance: ₨ ${user.balance}\nVIP: ${user.vip}`);
            }}
            className={`flex flex-col items-center gap-0.5 transition ${
              activeTab === "account" ? "text-[#21D9CC]" : "text-[#9EA2A8]"
            }`}
          >
            <User className="w-5 h-5" />
            <span className="text-[10px] font-semibold">{lang === "ur" ? "اکاؤنٹ" : "Account"}</span>
            {activeTab === "account" && <div className="w-1 h-1 rounded-full bg-[#21D9CC]" />}
          </button>
        </div>
      </nav>

      {/* ============================================================== */}
      {/* 9. DEPOSIT MODAL (JazzCash & EasyPaisa - Fully Decoupled)      */}
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
                <h3 className="font-black text-base text-[#E6EBF0]">
                  {lang === "ur" ? "رقم جمع کروائیں" : "Deposit Funds (PKR)"}
                </h3>
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
                  setDepositSuccessMsg(`Successfully credited ₨ ${depositAmount} to your wallet!`);
                  setTimeout(() => {
                    setDepositSuccessMsg("");
                    setShowDepositModal(false);
                  }, 1500);
                }}
                className="space-y-3.5"
              >
                <div>
                  <label className="text-xs text-[#9EA2A8] block mb-1 font-semibold">
                    Payment Method
                  </label>
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
                  <label className="text-xs text-[#9EA2A8] block mb-1 font-semibold">
                    Amount (₨ PKR)
                  </label>
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
                        ₨ {amt.toLocaleString()}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-xl border space-y-1 text-xs" style={{ backgroundColor: THEME.bgL3, borderColor: THEME.border }}>
                  <div className="flex justify-between text-[#9EA2A8]">
                    <span>Official Account:</span>
                    <span className="text-[#E6EBF0] font-mono font-bold">0300-9876543</span>
                  </div>
                  <div className="flex justify-between text-[#9EA2A8]">
                    <span>Account Name:</span>
                    <span className="text-[#E6EBF0] font-bold">WINZO OFFICIAL</span>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-[#9EA2A8] block mb-1 font-semibold">
                    Transaction ID (TID)
                  </label>
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
                  Confirm & Credit ₨ {depositAmount.toLocaleString()}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 10. PLAYABLE WIN GO 30S LOTTERY                                */}
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
              <button
                onClick={() => setActiveGame(null)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#9EA2A8]"
                style={{ backgroundColor: THEME.bgPill }}
              >
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
                alert(`Bet of ₨ ${wingoAmount} placed for Round #${wingoPeriod}!`);
              }}
              className="w-full py-3 rounded-xl font-bold text-sm text-[#15131E] shadow-lg active:scale-95 transition"
              style={{ background: THEME.gradient }}
            >
              Place Bet of ₨ {wingoAmount}
            </button>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 11. PLAYABLE AVIATOR CRASH                                    */}
      {/* ============================================================== */}
      {activeGame?.id === "aviator-spribe" && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3">
          <div
            className="w-full max-w-md rounded-3xl border p-4 space-y-4"
            style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}
          >
            <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: THEME.border }}>
              <h3 className="font-black text-base text-[#E6EBF0]">Spribe Aviator</h3>
              <button
                onClick={() => setActiveGame(null)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#9EA2A8]"
                style={{ backgroundColor: THEME.bgPill }}
              >
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
                  START FLIGHT (₨ 200)
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
                  CASH OUT ₨ {Math.floor(200 * aviatorMultiplier).toLocaleString()}
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
                +₨ {chestReward.toLocaleString()}
              </div>
            ) : (
              <p className="text-xs text-[#9EA2A8]">
                Open your daily mystery chest and receive up to ₨ 1,000 PKR instantly!
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
