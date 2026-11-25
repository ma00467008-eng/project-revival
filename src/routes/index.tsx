import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useMemo, useRef } from "react";
import {
  Volume2,
  Gamepad2,
  Gift,
  Wallet,
  User,
  Heart,
  MessageCircle,
  Flame,
  X,
  Sparkles,
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  Globe,
  Search,
  Check,
  Play,
  Award,
  ArrowDownCircle,
  CheckCircle2,
  LogOut,
  RefreshCw,
  Trophy,
  Bell,
  HelpCircle,
  ArrowUpRight,
  Copy,
  Layers,
  History,
  Clock,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Winzo Play - Pakistan's #1 Online Casino & Gaming Platform" },
      {
        name: "description",
        content:
          "Official Winzo Play Pakistan: Win Go Lottery, Aviator, JILI Slots, Live Casino & Fishing with instant JazzCash & EasyPaisa deposits and payouts.",
      },
      {
        property: "og:title",
        content: "Winzo Play - Pakistan's #1 Online Gaming Platform",
      },
      {
        property: "og:description",
        content:
          "Play Win Go, Spribe Aviator, Chicken Road 2, and JILI Slots with instant PKR payouts.",
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
  bgL1: "#15131E", // Midnight Obsidian background
  bgL2: "#201D2B", // Deep Slate cards
  bgL3: "#282537", // Elevated card / row
  bgPill: "#38374B", // Input & secondary pill
  border: "rgba(255, 255, 255, 0.08)",
  line: "#525167",
  cyan: "#21D9CC", // Pakvip Electric Cyan
  lime: "#BED921", // Pakvip Neon Lime
  gradient: "linear-gradient(90deg, #21D9CC 0%, #BED921 100%)",
  textL1: "#E6EBF0", // Crisp light text
  textL2: "#9EA2A8", // Muted slate text
  red: "#D23838",
  green: "#17B15E",
};

interface GameItem {
  id: string;
  title: string;
  category: "lottery" | "slots" | "crash" | "live" | "fishing" | "cards";
  provider: "JILI" | "SPRIBE" | "EVOLUTION" | "JDB" | "INOUT" | "EZUGI" | "WINZO";
  rtp: string;
  hot?: boolean;
  jackpot?: string;
  image: string;
}

const ALL_GAMES: GameItem[] = [
  {
    id: "wingo-1m",
    title: "Win Go 1Min",
    category: "lottery",
    provider: "WINZO",
    rtp: "98.9%",
    hot: true,
    jackpot: "₨ 850,000",
    image:
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "aviator",
    title: "Aviator",
    category: "crash",
    provider: "SPRIBE",
    rtp: "97.0%",
    hot: true,
    jackpot: "x10,000 MAX",
    image:
      "https://images.unsplash.com/photo-1519074069444-1ba4ea16e919?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "super-ace",
    title: "Super Ace",
    category: "slots",
    provider: "JILI",
    rtp: "98.4%",
    hot: true,
    jackpot: "₨ 1,420,000",
    image:
      "https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "chicken-road-2",
    title: "Chicken Road 2",
    category: "crash",
    provider: "INOUT",
    rtp: "98.0%",
    hot: true,
    jackpot: "₨ 380,000",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "fortune-gems-2",
    title: "Fortune Gems 2",
    category: "slots",
    provider: "JILI",
    rtp: "97.8%",
    hot: true,
    jackpot: "₨ 940,000",
    image:
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "jackpot-fishing",
    title: "Jackpot Fishing",
    category: "fishing",
    provider: "JILI",
    rtp: "97.2%",
    hot: true,
    jackpot: "₨ 2,150,000",
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "money-coming",
    title: "Money Coming",
    category: "slots",
    provider: "JILI",
    rtp: "98.2%",
    jackpot: "₨ 760,000",
    image:
      "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "crazy-time",
    title: "Crazy Time Live",
    category: "live",
    provider: "EVOLUTION",
    rtp: "96.5%",
    hot: true,
    jackpot: "x25,000 MAX",
    image:
      "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "lightning-roulette",
    title: "Lightning Roulette",
    category: "live",
    provider: "EVOLUTION",
    rtp: "97.3%",
    jackpot: "500x STRIKE",
    image:
      "https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "dragon-tiger",
    title: "Dragon Tiger Live",
    category: "live",
    provider: "EVOLUTION",
    rtp: "96.8%",
    image:
      "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "mines",
    title: "Mines Turbo",
    category: "crash",
    provider: "SPRIBE",
    rtp: "97.5%",
    jackpot: "₨ 450,000",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "golden-empire",
    title: "Golden Empire",
    category: "slots",
    provider: "JILI",
    rtp: "97.0%",
    jackpot: "₨ 1,180,000",
    image:
      "https://images.unsplash.com/photo-1569701814234-a0c4f8266292?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "mega-fishing",
    title: "Mega Fishing",
    category: "fishing",
    provider: "JILI",
    rtp: "97.4%",
    jackpot: "₨ 1,890,000",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "teen-patti",
    title: "Teen Patti 20-20",
    category: "cards",
    provider: "EZUGI",
    rtp: "96.9%",
    hot: true,
    jackpot: "₨ 620,000",
    image:
      "https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "andar-bahar",
    title: "Andar Bahar Live",
    category: "cards",
    provider: "EZUGI",
    rtp: "97.8%",
    jackpot: "₨ 540,000",
    image:
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "cricket-roulette",
    title: "Cricket Roulette",
    category: "live",
    provider: "EZUGI",
    rtp: "97.3%",
    image:
      "https://images.unsplash.com/photo-1531415074868-036b1c57e329?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "charge-buffalo",
    title: "Charge Buffalo",
    category: "slots",
    provider: "JILI",
    rtp: "96.8%",
    jackpot: "4096 WAYS",
    image:
      "https://images.unsplash.com/photo-1564349683136-77e08dba1ef6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "limbo",
    title: "Limbo Multiplier",
    category: "crash",
    provider: "SPRIBE",
    rtp: "98.0%",
    jackpot: "x1,000 MAX",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
  },
];

const WINNERS = [
  { phone: "0304***982", game: "Super Ace", amount: "₨ 48,500", time: "2s ago" },
  { phone: "0321***451", game: "Aviator (x14.8)", amount: "₨ 135,200", time: "5s ago" },
  { phone: "0346***710", game: "Win Go 1Min", amount: "₨ 18,000", time: "9s ago" },
  { phone: "0312***893", game: "Crazy Time", amount: "₨ 84,000", time: "14s ago" },
  { phone: "0333***621", game: "Fortune Gems 2", amount: "₨ 32,400", time: "21s ago" },
  { phone: "0301***334", game: "Chicken Road 2", amount: "₨ 62,000", time: "28s ago" },
];

export function WinzoPlayApp() {
  const [lang, setLang] = useState<"en" | "ur">("en");
  const [activeTab, setActiveTab] = useState<"home" | "activity" | "promo" | "wallet" | "account">("home");
  const [activeCat, setActiveCat] = useState<string>("all");
  const [activeBanner, setActiveBanner] = useState(0);

  // User Authentication & Local Wallet (Decoupled from Pakvip servers)
  const [user, setUser] = useState<{ phone: string; balance: number; vip: number } | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [phoneInput, setPhoneInput] = useState("");
  const [passInput, setPassInput] = useState("");

  // Modals
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [showChestModal, setShowChestModal] = useState(false);
  const [chestOpened, setChestOpened] = useState(false);
  const [chestReward, setChestReward] = useState(0);
  const [showNoticeModal, setShowNoticeModal] = useState(false);

  // Playable Game Modals
  const [activeGame, setActiveGame] = useState<GameItem | null>(null);

  // Win Go State
  const [wingoTimer, setWingoTimer] = useState(48);
  const [wingoPeriod, setWingoPeriod] = useState(202611250421);
  const [wingoBetColor, setWingoBetColor] = useState<"green" | "violet" | "red" | null>(null);
  const [wingoBetNumber, setWingoBetNumber] = useState<number | null>(null);
  const [wingoAmount, setWingoAmount] = useState(100);
  const [wingoResult, setWingoResult] = useState<string | null>(null);

  // Aviator State
  const [aviatorRunning, setAviatorRunning] = useState(false);
  const [aviatorMultiplier, setAviatorMultiplier] = useState(1.0);
  const [aviatorCashedOut, setAviatorCashedOut] = useState(false);
  const [aviatorCrashed, setAviatorCrashed] = useState(false);
  const [aviatorBetAmount, setAviatorBetAmount] = useState(200);

  // Deposit Form State
  const [depositAmount, setDepositAmount] = useState(1000);
  const [depositMethod, setDepositMethod] = useState<"jazzcash" | "easypaisa">("jazzcash");
  const [depositTid, setDepositTid] = useState("");
  const [depositSuccessMsg, setDepositSuccessMsg] = useState("");

  // Load User from LocalStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("winzo_play_user");
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch (e) {
        // fallback
      }
    } else {
      // Default Demo User with 5,000 PKR bankroll
      const defaultUser = { phone: "03001234567", balance: 5000, vip: 1 };
      setUser(defaultUser);
      localStorage.setItem("winzo_play_user", JSON.stringify(defaultUser));
    }
  }, []);

  const saveUser = (updated: { phone: string; balance: number; vip: number }) => {
    setUser(updated);
    localStorage.setItem("winzo_play_user", JSON.stringify(updated));
  };

  // Banner carousel auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBanner((prev) => (prev + 1) % 3);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Win Go live timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setWingoTimer((prev) => {
        if (prev <= 1) {
          // New Round
          setWingoPeriod((p) => p + 1);
          const outcomeNum = Math.floor(Math.random() * 10);
          const outcomeColor = outcomeNum % 2 === 0 ? "red" : "green";
          setWingoResult(`Period draw: Number ${outcomeNum} (${outcomeColor.toUpperCase()})`);
          return 60;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Aviator loop
  useEffect(() => {
    let anim: any;
    if (aviatorRunning && !aviatorCrashed && !aviatorCashedOut) {
      anim = setInterval(() => {
        setAviatorMultiplier((prev) => {
          const next = +(prev + 0.05).toFixed(2);
          // 4% crash chance per tick after 1.5x
          if (next > 1.4 && Math.random() < 0.035) {
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

  const handleStartAviator = () => {
    if (!user || user.balance < aviatorBetAmount) {
      alert("Insufficient balance in your wallet. Please deposit first.");
      return;
    }
    saveUser({ ...user, balance: user.balance - aviatorBetAmount });
    setAviatorMultiplier(1.0);
    setAviatorCashedOut(false);
    setAviatorCrashed(false);
    setAviatorRunning(true);
  };

  const handleCashoutAviator = () => {
    if (!aviatorRunning || aviatorCrashed || aviatorCashedOut || !user) return;
    const win = Math.floor(aviatorBetAmount * aviatorMultiplier);
    saveUser({ ...user, balance: user.balance + win });
    setAviatorCashedOut(true);
    setAviatorRunning(false);
  };

  const handleWingoBet = () => {
    if (!user || user.balance < wingoAmount) {
      alert("Insufficient balance. Please deposit.");
      return;
    }
    if (!wingoBetColor && wingoBetNumber === null) {
      alert("Please select a Color or Number to bet.");
      return;
    }
    saveUser({ ...user, balance: user.balance - wingoAmount });
    alert(`Bet of ₨ ${wingoAmount} placed for Win Go round #${wingoPeriod}! Good luck.`);
  };

  const handleDepositSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    const updated = { ...user, balance: user.balance + Number(depositAmount) };
    saveUser(updated);
    setDepositSuccessMsg(`Successfully credited ₨ ${depositAmount} to your wallet!`);
    setTimeout(() => {
      setDepositSuccessMsg("");
      setShowDepositModal(false);
      setDepositTid("");
    }, 1500);
  };

  const handleOpenChest = () => {
    if (chestOpened || !user) return;
    const reward = Math.floor(Math.random() * 800) + 200; // 200 to 1000 PKR
    setChestReward(reward);
    setChestOpened(true);
    saveUser({ ...user, balance: user.balance + reward });
  };

  const filteredGames = useMemo(() => {
    if (activeCat === "all") return ALL_GAMES;
    return ALL_GAMES.filter((g) => g.category === activeCat);
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
        className="sticky top-0 z-40 px-3 py-2.5 flex items-center justify-between backdrop-blur-md border-b"
        style={{ backgroundColor: `${THEME.bgL2}F0`, borderColor: THEME.border }}
      >
        {/* Brand & Monogram Logo */}
        <div className="flex items-center gap-2.5">
          {/* Authentic WP Cyber Curved Monogram */}
          <div className="relative w-9 h-9 rounded-xl flex items-center justify-center p-1 bg-gradient-to-br from-[#21D9CC]/20 via-[#201D2B] to-[#BED921]/20 border border-[#21D9CC]/40 shadow-[0_0_15px_rgba(33,217,204,0.3)]">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow">
              <defs>
                <linearGradient id="wpNeonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#21D9CC" />
                  <stop offset="100%" stopColor="#BED921" />
                </linearGradient>
              </defs>
              {/* Futuristic W & P Interlocked Path */}
              <path
                d="M16 28 L28 72 L42 38 L54 72 L66 28"
                fill="none"
                stroke="url(#wpNeonGrad)"
                strokeWidth="9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M58 28 L78 28 C88 28 88 50 78 50 L58 50 L58 72"
                fill="none"
                stroke="#E6EBF0"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="82" cy="24" r="3" fill="#BED921" />
            </svg>
          </div>

          <div className="flex flex-col leading-none">
            <div className="flex items-center gap-1">
              <span className="font-black tracking-wider text-base uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#21D9CC] to-[#BED921]">
                WINZO PLAY
              </span>
              <span className="text-[9px] px-1 py-0.2 rounded font-bold bg-[#21D9CC]/20 text-[#21D9CC] border border-[#21D9CC]/30">
                VIP
              </span>
            </div>
            <span className="text-[10px] text-[#9EA2A8] font-medium tracking-tight">
              {lang === "ur" ? "پاکستان کا نمبر 1 کیسینو" : "Pakistan Official Casino"}
            </span>
          </div>
        </div>

        {/* Right Section: Wallet Balance & Actions */}
        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === "en" ? "ur" : "en")}
            className="flex items-center gap-1 text-[11px] px-2 py-1 rounded-lg border text-[#9EA2A8] hover:text-[#E6EBF0] transition"
            style={{ backgroundColor: THEME.bgPill, borderColor: THEME.border }}
          >
            <Globe className="w-3 h-3 text-[#21D9CC]" />
            <span>{lang === "en" ? "اردو" : "EN"}</span>
          </button>

          {user ? (
            <div className="flex items-center gap-1.5">
              {/* Balance Box */}
              <div
                onClick={() => setShowDepositModal(true)}
                className="cursor-pointer flex items-center gap-1.5 px-2.5 py-1 rounded-lg border hover:brightness-110 transition"
                style={{ backgroundColor: THEME.bgPill, borderColor: THEME.border }}
              >
                <div className="w-2 h-2 rounded-full bg-[#17B15E] animate-pulse" />
                <div className="flex flex-col text-right leading-none">
                  <span className="text-[9px] text-[#9EA2A8]">Balance</span>
                  <span className="text-xs font-bold text-[#E6EBF0]">
                    ₨ {user.balance.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Quick Deposit Button in Neon Cyan-Lime Gradient */}
              <button
                onClick={() => setShowDepositModal(true)}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-black shadow-md hover:brightness-110 active:scale-95 transition"
                style={{
                  background: THEME.gradient,
                  color: "#15131E",
                }}
              >
                <Wallet className="w-3.5 h-3.5" />
                <span>{lang === "ur" ? "جمع کروائیں" : "Deposit"}</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setAuthMode("login");
                  setShowAuthModal(true);
                }}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg border text-[#E6EBF0]"
                style={{ borderColor: THEME.border, backgroundColor: THEME.bgPill }}
              >
                Login
              </button>
              <button
                onClick={() => {
                  setAuthMode("register");
                  setShowAuthModal(true);
                }}
                className="text-xs font-bold px-3 py-1.5 rounded-lg text-[#15131E] shadow-sm"
                style={{ background: THEME.gradient }}
              >
                Register
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main Container constrained to realistic mobile/app viewport */}
      <main className="max-w-md mx-auto px-3 pt-2.5 space-y-3">
        {/* ============================================================== */}
        {/* 2. REALISTIC CASINO HERO PROMO CAROUSEL (Dark Sleek Banners)  */}
        {/* ============================================================== */}
        <section className="relative rounded-2xl overflow-hidden border shadow-lg" style={{ borderColor: THEME.border }}>
          <div className="relative h-44 w-full">
            {/* Banner 1: VIP Cashback */}
            {activeBanner === 0 && (
              <div className="absolute inset-0 bg-gradient-to-r from-[#15131E] via-[#201D2B]/90 to-transparent p-4 flex flex-col justify-between z-10">
                <div className="space-y-1">
                  <span className="inline-block text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase bg-[#21D9CC]/20 text-[#21D9CC] border border-[#21D9CC]/40">
                    VIP EXCLUSIVE
                  </span>
                  <h2 className="text-xl font-black text-[#E6EBF0] leading-tight">
                    10% DAILY REBATE
                  </h2>
                  <p className="text-xs text-[#9EA2A8]">
                    {lang === "ur"
                      ? "روزانہ خودکار کیش بیک جاز کیش اور ایزی پیسہ پر"
                      : "Instant cashback on every single bet, no turnover."}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowDepositModal(true)}
                    className="px-4 py-1.5 rounded-xl text-xs font-bold text-[#15131E] shadow-md hover:brightness-110 transition"
                    style={{ background: THEME.gradient }}
                  >
                    {lang === "ur" ? "ابھی کلیم کریں" : "Claim Now"}
                  </button>
                  <span className="text-[11px] text-[#21D9CC] font-mono">24/7 Auto Payout</span>
                </div>
              </div>
            )}

            {/* Banner 2: Aviator Tournament */}
            {activeBanner === 1 && (
              <div className="absolute inset-0 bg-gradient-to-r from-[#15131E] via-[#201D2B]/90 to-transparent p-4 flex flex-col justify-between z-10">
                <div className="space-y-1">
                  <span className="inline-block text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase bg-[#D23838]/20 text-[#D23838] border border-[#D23838]/40">
                    AVIATOR RADAR
                  </span>
                  <h2 className="text-xl font-black text-[#E6EBF0] leading-tight">
                    ₨ 10,000,000 PRIZE POOL
                  </h2>
                  <p className="text-xs text-[#9EA2A8]">
                    {lang === "ur"
                      ? "ہائی ملٹی پلائر پکڑیں اور فوری کیش آؤٹ کریں"
                      : "Hit x100+ multiplier and win the weekly grand prize."}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const avi = ALL_GAMES.find((g) => g.id === "aviator");
                      if (avi) setActiveGame(avi);
                    }}
                    className="px-4 py-1.5 rounded-xl text-xs font-bold text-[#15131E] shadow-md hover:brightness-110 transition"
                    style={{ background: THEME.gradient }}
                  >
                    {lang === "ur" ? "کھیلیں" : "Play Aviator"}
                  </button>
                  <span className="text-[11px] text-[#BED921] font-mono">Max Multiplier x10,000</span>
                </div>
              </div>
            )}

            {/* Banner 3: 100% First Deposit Match */}
            {activeBanner === 2 && (
              <div className="absolute inset-0 bg-gradient-to-r from-[#15131E] via-[#201D2B]/90 to-transparent p-4 flex flex-col justify-between z-10">
                <div className="space-y-1">
                  <span className="inline-block text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase bg-[#17B15E]/20 text-[#17B15E] border border-[#17B15E]/40">
                    WELCOME BONUS
                  </span>
                  <h2 className="text-xl font-black text-[#E6EBF0] leading-tight">
                    100% FIRST DEPOSIT
                  </h2>
                  <p className="text-xs text-[#9EA2A8]">
                    {lang === "ur"
                      ? "پہلے ڈپازٹ پر ڈبل بیلنس حاصل کریں"
                      : "Double your bankroll with JazzCash & EasyPaisa."}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowDepositModal(true)}
                    className="px-4 py-1.5 rounded-xl text-xs font-bold text-[#15131E] shadow-md hover:brightness-110 transition"
                    style={{ background: THEME.gradient }}
                  >
                    Deposit ₨ 1,000 → Get ₨ 2,000
                  </button>
                </div>
              </div>
            )}

            {/* Realistic Dark Casino Background Image */}
            <img
              src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=900&q=80"
              alt="Casino Banner"
              className="absolute inset-0 w-full h-full object-cover opacity-35"
            />
          </div>

          {/* Carousel Indicator Dots */}
          <div className="absolute bottom-2 right-3 flex items-center gap-1.5 z-20">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                onClick={() => setActiveBanner(i)}
                className={`h-1.5 rounded-full transition-all ${
                  activeBanner === i ? "w-5 bg-[#21D9CC]" : "w-1.5 bg-[#525167]"
                }`}
              />
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* 3. AUTHENTIC PAKVIP NOTICE MARQUEE TICKER (With Speaker Icon) */}
        {/* ============================================================== */}
        <section
          className="flex items-center gap-2 px-3 py-2 rounded-xl border text-xs"
          style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}
        >
          {/* Authentic Speaker Icon */}
          <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
            <img
              src="/pakvip/images/noticeBarSpeaker-Cfctxsme.svg"
              alt="Notice"
              className="w-4 h-4"
              onError={(e) => {
                // fallback if svg fails
                (e.target as HTMLElement).style.display = "none";
              }}
            />
            <Volume2 className="w-4 h-4 text-[#21D9CC] block [img:not([style*='display: none'])~&]:hidden" />
          </div>

          {/* Marquee Text */}
          <div className="flex-1 overflow-hidden whitespace-nowrap">
            <div className="inline-block animate-[marquee_20s_linear_infinite] text-[#9EA2A8] text-[11px]">
              {lang === "ur"
                ? "خوش آمدید Winzo Play پر! جاز کیش اور ایزی پیسہ سے فوری ڈیپازٹ اور نکلوانا فعال ہے۔ 24 گھنٹے لائیو سپورٹ دستیاب ہے۔"
                : "Welcome to Winzo Play! Instant JazzCash & EasyPaisa deposits & withdrawals active. 24/7 VIP Customer Support ready."}
            </div>
          </div>

          {/* Authentic Pakvip 'Detail' Button */}
          <button
            onClick={() => setShowNoticeModal(true)}
            className="flex-shrink-0 px-2 py-0.5 rounded-md text-[10px] font-bold text-[#15131E]"
            style={{ background: THEME.gradient }}
          >
            {lang === "ur" ? "تفصیل" : "Details"}
          </button>
        </section>

        {/* ============================================================== */}
        {/* 4. REALISTIC QUICK ACTION ICONS (VIP, Deposit, Chest, CS)      */}
        {/* ============================================================== */}
        <section className="grid grid-cols-4 gap-2">
          {/* VIP Rewards */}
          <div
            onClick={() => setShowNoticeModal(true)}
            className="cursor-pointer flex flex-col items-center justify-center p-2 rounded-xl border transition active:scale-95"
            style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}
          >
            <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[#21D9CC]/10 text-[#21D9CC] border border-[#21D9CC]/30 mb-1">
              <Trophy className="w-4.5 h-4.5" />
            </div>
            <span className="text-[11px] font-bold text-[#E6EBF0]">VIP Club</span>
            <span className="text-[9px] text-[#9EA2A8]">Rebates</span>
          </div>

          {/* Deposit */}
          <div
            onClick={() => setShowDepositModal(true)}
            className="cursor-pointer flex flex-col items-center justify-center p-2 rounded-xl border transition active:scale-95"
            style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}
          >
            <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[#BED921]/10 text-[#BED921] border border-[#BED921]/30 mb-1">
              <Wallet className="w-4.5 h-4.5" />
            </div>
            <span className="text-[11px] font-bold text-[#E6EBF0]">{lang === "ur" ? "ڈپازٹ" : "Deposit"}</span>
            <span className="text-[9px] text-[#9EA2A8]">0% Fee</span>
          </div>

          {/* Lucky Treasure Chest */}
          <div
            onClick={() => {
              setChestOpened(false);
              setShowChestModal(true);
            }}
            className="cursor-pointer flex flex-col items-center justify-center p-2 rounded-xl border transition active:scale-95 relative"
            style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}
          >
            <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[#D23838]/10 text-[#D23838] border border-[#D23838]/30 mb-1">
              <Gift className="w-4.5 h-4.5" />
            </div>
            <span className="text-[11px] font-bold text-[#E6EBF0]">{lang === "ur" ? "خزانہ" : "Lucky Chest"}</span>
            <span className="text-[9px] text-[#BED921]">Free PKR</span>
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#D23838] animate-ping" />
          </div>

          {/* Support */}
          <div
            onClick={() => alert("24/7 VIP Customer Support: WhatsApp: +92 300 0000000")}
            className="cursor-pointer flex flex-col items-center justify-center p-2 rounded-xl border transition active:scale-95"
            style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}
          >
            <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[#17B15E]/10 text-[#17B15E] border border-[#17B15E]/30 mb-1">
              <MessageCircle className="w-4.5 h-4.5" />
            </div>
            <span className="text-[11px] font-bold text-[#E6EBF0]">24/7 CS</span>
            <span className="text-[9px] text-[#9EA2A8]">WhatsApp</span>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 5. CATEGORY TABS (Sleek Horizontal Scroll, Pakvip Style)      */}
        {/* ============================================================== */}
        <section className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          {[
            { id: "all", label: lang === "ur" ? "تمام گیمز" : "All Games", count: 18 },
            { id: "lottery", label: lang === "ur" ? "لاٹری" : "Win Go", count: 2 },
            { id: "slots", label: lang === "ur" ? "سلاٹس" : "JILI Slots", count: 6 },
            { id: "crash", label: lang === "ur" ? "کریش" : "Aviator / Crash", count: 4 },
            { id: "live", label: lang === "ur" ? "لائیو کیسینو" : "Live Dealer", count: 4 },
            { id: "fishing", label: lang === "ur" ? "فشنگ" : "Fishing", count: 2 },
            { id: "cards", label: lang === "ur" ? "تاش" : "Cards / Rummy", count: 2 },
          ].map((cat) => {
            const isSelected = activeCat === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                className={`flex-shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 border ${
                  isSelected
                    ? "text-[#15131E] border-transparent shadow-[0_0_12px_rgba(33,217,204,0.3)]"
                    : "text-[#9EA2A8] hover:text-[#E6EBF0]"
                }`}
                style={{
                  background: isSelected ? THEME.gradient : THEME.bgL2,
                  borderColor: isSelected ? "transparent" : THEME.border,
                }}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[9px] px-1 rounded-full ${
                    isSelected ? "bg-[#15131E]/20 text-[#15131E]" : "bg-[#38374B] text-[#9EA2A8]"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </section>

        {/* ============================================================== */}
        {/* 6. GAME GRID (Realistic High-Contrast Casino Cards)           */}
        {/* ============================================================== */}
        <section className="grid grid-cols-2 gap-2.5">
          {filteredGames.map((game) => (
            <div
              key={game.id}
              onClick={() => setActiveGame(game)}
              className="group cursor-pointer relative rounded-2xl overflow-hidden border transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
              style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}
            >
              {/* Game Artwork Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#111]">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay for Realistic Casino Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#15131E] via-black/20 to-transparent" />

                {/* Top Badges: Provider & Hot Tag */}
                <div className="absolute top-2 left-2 flex items-center gap-1">
                  <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-md bg-[#15131E]/80 backdrop-blur-md text-[#E6EBF0] border border-white/10 uppercase font-mono">
                    {game.provider}
                  </span>
                  {game.hot && (
                    <span className="flex items-center gap-0.5 text-[9px] font-black px-1.5 py-0.5 rounded-md bg-[#D23838] text-white">
                      <Flame className="w-2.5 h-2.5" />
                      HOT
                    </span>
                  )}
                </div>

                {/* Top Right: RTP Badge */}
                <div className="absolute top-2 right-2">
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-[#21D9CC]/20 text-[#21D9CC] border border-[#21D9CC]/30 font-mono">
                    {game.rtp}
                  </span>
                </div>

                {/* Hover Play Button Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-[#15131E] shadow-lg transform scale-90 group-hover:scale-100 transition-transform"
                    style={{ background: THEME.gradient }}
                  >
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Card Footer: Title & Jackpot / Stats */}
              <div className="p-2.5 flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-[#E6EBF0] truncate max-w-[120px]">
                    {game.title}
                  </h3>
                  <span className="text-[10px] text-[#9EA2A8] font-mono">
                    {game.jackpot || "Instant Win"}
                  </span>
                </div>
                <button
                  className="w-7 h-7 rounded-lg flex items-center justify-center border text-[#21D9CC] group-hover:text-[#15131E] transition"
                  style={{
                    backgroundColor: THEME.bgPill,
                    borderColor: THEME.border,
                  }}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* ============================================================== */}
        {/* 7. LIVE WINNERS FEED (Pakistan Recent Payouts Ticker)         */}
        {/* ============================================================== */}
        <section
          className="rounded-2xl p-3 border space-y-2.5"
          style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#17B15E] animate-ping" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#E6EBF0]">
                {lang === "ur" ? "حالیہ جیتنے والے" : "Live Pakistani Winners"}
              </h3>
            </div>
            <span className="text-[10px] text-[#21D9CC] font-mono">Updated Real-Time</span>
          </div>

          <div className="space-y-1.5">
            {WINNERS.map((w, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-2 rounded-xl text-xs border"
                style={{ backgroundColor: THEME.bgL3, borderColor: THEME.border }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold bg-[#38374B] text-[#9EA2A8]">
                    {idx + 1}
                  </div>
                  <div>
                    <div className="font-mono text-[11px] text-[#E6EBF0] font-semibold">{w.phone}</div>
                    <div className="text-[10px] text-[#9EA2A8]">{w.game}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-[#BED921] font-mono">{w.amount}</div>
                  <div className="text-[9px] text-[#9EA2A8]">{w.time}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* 8. VIP REWARDS TABLE (Pakvip Authentic 1 / 7 / 15 Day Rebate) */}
        {/* ============================================================== */}
        <section
          className="rounded-2xl p-3.5 border space-y-3"
          style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-extrabold text-[#E6EBF0]">
                {lang === "ur" ? "VIP ڈپازٹ انعامات" : "VIP Tier Deposit Rebates"}
              </h3>
              <p className="text-[11px] text-[#9EA2A8]">
                {lang === "ur"
                  ? "ہر ڈپازٹ پر اضافی بونس حاصل کریں"
                  : "Daily automatic bonus added to your wallet."}
              </p>
            </div>
            <span className="text-xs font-bold px-2 py-0.5 rounded-md text-[#15131E]" style={{ background: THEME.gradient }}>
              ACTIVE
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="p-2.5 rounded-xl border" style={{ backgroundColor: THEME.bgL3, borderColor: THEME.border }}>
              <span className="text-[10px] text-[#9EA2A8] block">Day 1</span>
              <span className="text-sm font-black text-[#21D9CC] block font-mono">+₨ 500</span>
              <span className="text-[9px] text-[#9EA2A8]">Deposit ₨1,000</span>
            </div>
            <div className="p-2.5 rounded-xl border" style={{ backgroundColor: THEME.bgL3, borderColor: THEME.border }}>
              <span className="text-[10px] text-[#9EA2A8] block">Day 7</span>
              <span className="text-sm font-black text-[#BED921] block font-mono">+₨ 2,500</span>
              <span className="text-[9px] text-[#9EA2A8]">Deposit ₨5,000</span>
            </div>
            <div className="p-2.5 rounded-xl border" style={{ backgroundColor: THEME.bgL3, borderColor: THEME.border }}>
              <span className="text-[10px] text-[#9EA2A8] block">Day 15</span>
              <span className="text-sm font-black text-[#17B15E] block font-mono">+₨ 8,000</span>
              <span className="text-[9px] text-[#9EA2A8]">Deposit ₨10,000</span>
            </div>
          </div>
        </section>
      </main>

      {/* ============================================================== */}
      {/* 9. AUTHENTIC PAKVIP BOTTOM NAVIGATION (With Elevated Center)   */}
      {/* ============================================================== */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-40 border-t backdrop-blur-lg"
        style={{ backgroundColor: `${THEME.bgL2}F8`, borderColor: THEME.border }}
      >
        <div className="max-w-md mx-auto px-4 py-1.5 flex items-center justify-between relative">
          {/* Tab 1: Home */}
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

          {/* Tab 2: Activity */}
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

          {/* Center Elevated Button: Quick Win Go Launcher */}
          <div className="relative -top-4">
            <button
              onClick={() => {
                const wingo = ALL_GAMES.find((g) => g.id === "wingo-1m");
                if (wingo) setActiveGame(wingo);
              }}
              className="w-13 h-13 rounded-full flex items-center justify-center text-[#15131E] shadow-[0_0_20px_rgba(33,217,204,0.6)] border-4 border-[#15131E] active:scale-95 transition-transform"
              style={{ background: THEME.gradient }}
            >
              <Zap className="w-6 h-6 fill-current" />
            </button>
            <span className="block text-center text-[9px] font-extrabold text-[#21D9CC] mt-0.5">
              WIN GO
            </span>
          </div>

          {/* Tab 3: Wallet */}
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

          {/* Tab 4: Account */}
          <button
            onClick={() => {
              setActiveTab("account");
              if (!user) setShowAuthModal(true);
              else alert(`User: ${user.phone}\nBalance: ₨ ${user.balance}\nVIP Level: ${user.vip}`);
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
      {/* 10. MODAL: DEPOSIT (JazzCash & EasyPaisa - Fully Decoupled)     */}
      {/* ============================================================== */}
      {showDepositModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div
            className="w-full max-w-md rounded-t-3xl sm:rounded-3xl border p-5 space-y-4 animate-in slide-in-from-bottom duration-200"
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
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#9EA2A8] hover:text-[#E6EBF0]"
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
              <form onSubmit={handleDepositSubmit} className="space-y-4">
                {/* Channel Selector */}
                <div>
                  <label className="text-xs text-[#9EA2A8] block mb-1.5 font-semibold">
                    Select Payment Gateway
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

                {/* Amount Quick Pills */}
                <div>
                  <label className="text-xs text-[#9EA2A8] block mb-1.5 font-semibold">
                    Deposit Amount (₨ PKR)
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
                            : "bg-[#282537] text-[#E6EBF0] border-white/5 hover:border-white/20"
                        }`}
                      >
                        ₨ {amt.toLocaleString()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Account Details */}
                <div className="p-3 rounded-xl border space-y-1.5 text-xs" style={{ backgroundColor: THEME.bgL3, borderColor: THEME.border }}>
                  <div className="flex justify-between text-[#9EA2A8]">
                    <span>Official Account:</span>
                    <span className="text-[#E6EBF0] font-mono font-bold">0300-9876543</span>
                  </div>
                  <div className="flex justify-between text-[#9EA2A8]">
                    <span>Account Title:</span>
                    <span className="text-[#E6EBF0] font-bold">WINZO OFFICIAL MERCHANT</span>
                  </div>
                </div>

                {/* Transaction ID */}
                <div>
                  <label className="text-xs text-[#9EA2A8] block mb-1 font-semibold">
                    Transaction ID (TID) / Ref #
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 984512789"
                    value={depositTid}
                    onChange={(e) => setDepositTid(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border text-sm text-[#E6EBF0] outline-none focus:border-[#21D9CC]"
                    style={{ backgroundColor: THEME.bgPill, borderColor: THEME.border }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-bold text-sm text-[#15131E] shadow-lg hover:brightness-110 active:scale-95 transition"
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
      {/* 11. PLAYABLE MODAL: WIN GO 1-MIN LOTTERY                      */}
      {/* ============================================================== */}
      {activeGame?.id === "wingo-1m" && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3">
          <div
            className="w-full max-w-md rounded-3xl border p-4 space-y-4 overflow-y-auto max-h-[90vh]"
            style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: THEME.border }}>
              <div>
                <h3 className="font-black text-base text-[#E6EBF0]">Win Go 1-Minute</h3>
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

            {/* Countdown Box */}
            <div className="p-4 rounded-2xl text-center space-y-1 border" style={{ backgroundColor: THEME.bgL3, borderColor: THEME.border }}>
              <span className="text-xs text-[#9EA2A8] uppercase font-bold tracking-wider">Time Remaining</span>
              <div className="text-4xl font-black text-[#BED921] font-mono tracking-widest">
                00:{wingoTimer < 10 ? `0${wingoTimer}` : wingoTimer}
              </div>
              {wingoResult && <p className="text-xs text-[#21D9CC] font-semibold">{wingoResult}</p>}
            </div>

            {/* Color Bet Buttons */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#9EA2A8]">Select Color (x2.0 Payout)</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => {
                    setWingoBetColor("green");
                    setWingoBetNumber(null);
                  }}
                  className={`py-3 rounded-xl font-bold text-xs uppercase border transition ${
                    wingoBetColor === "green"
                      ? "bg-[#17B15E] text-white border-white"
                      : "bg-[#17B15E]/20 text-[#17B15E] border-[#17B15E]/40"
                  }`}
                >
                  Green
                </button>
                <button
                  onClick={() => {
                    setWingoBetColor("violet");
                    setWingoBetNumber(null);
                  }}
                  className={`py-3 rounded-xl font-bold text-xs uppercase border transition ${
                    wingoBetColor === "violet"
                      ? "bg-[#9B48DB] text-white border-white"
                      : "bg-[#9B48DB]/20 text-[#9B48DB] border-[#9B48DB]/40"
                  }`}
                >
                  Violet
                </button>
                <button
                  onClick={() => {
                    setWingoBetColor("red");
                    setWingoBetNumber(null);
                  }}
                  className={`py-3 rounded-xl font-bold text-xs uppercase border transition ${
                    wingoBetColor === "red"
                      ? "bg-[#D23838] text-white border-white"
                      : "bg-[#D23838]/20 text-[#D23838] border-[#D23838]/40"
                  }`}
                >
                  Red
                </button>
              </div>
            </div>

            {/* Number Bet Buttons */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#9EA2A8]">Select Number (x9.0 Payout)</label>
              <div className="grid grid-cols-5 gap-1.5">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <button
                    key={num}
                    onClick={() => {
                      setWingoBetNumber(num);
                      setWingoBetColor(null);
                    }}
                    className={`py-2 rounded-xl font-mono font-black text-sm border transition ${
                      wingoBetNumber === num
                        ? "bg-[#21D9CC] text-[#15131E] border-transparent"
                        : "bg-[#38374B] text-[#E6EBF0] border-white/5"
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Bet Amount */}
            <div className="flex items-center justify-between p-3 rounded-xl border" style={{ backgroundColor: THEME.bgL3, borderColor: THEME.border }}>
              <span className="text-xs text-[#9EA2A8]">Bet Amount:</span>
              <div className="flex items-center gap-1.5">
                {[50, 100, 500, 1000].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setWingoAmount(amt)}
                    className={`px-2 py-1 rounded-md text-xs font-mono font-bold ${
                      wingoAmount === amt ? "bg-[#BED921] text-[#15131E]" : "bg-[#201D2B] text-[#E6EBF0]"
                    }`}
                  >
                    {amt}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleWingoBet}
              className="w-full py-3 rounded-xl font-bold text-sm text-[#15131E] shadow-lg active:scale-95 transition"
              style={{ background: THEME.gradient }}
            >
              Place Bet of ₨ {wingoAmount}
            </button>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 12. PLAYABLE MODAL: SPRIBE AVIATOR                            */}
      {/* ============================================================== */}
      {activeGame?.id === "aviator" && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3">
          <div
            className="w-full max-w-md rounded-3xl border p-4 space-y-4"
            style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}
          >
            <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: THEME.border }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#D23838] animate-ping" />
                <h3 className="font-black text-base text-[#E6EBF0]">Spribe Aviator</h3>
              </div>
              <button
                onClick={() => setActiveGame(null)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#9EA2A8]"
                style={{ backgroundColor: THEME.bgPill }}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Radar Simulation Screen */}
            <div className="relative h-48 rounded-2xl overflow-hidden border flex flex-col items-center justify-center bg-[#0d0b14]" style={{ borderColor: THEME.border }}>
              {/* Multiplier Display */}
              <div
                className={`text-5xl font-black font-mono tracking-tight transition-colors ${
                  aviatorCrashed
                    ? "text-[#D23838]"
                    : aviatorCashedOut
                    ? "text-[#17B15E]"
                    : "text-[#E6EBF0]"
                }`}
              >
                {aviatorMultiplier.toFixed(2)}x
              </div>

              {aviatorCrashed && (
                <span className="text-xs font-bold text-[#D23838] uppercase tracking-widest mt-1">
                  FLEW AWAY!
                </span>
              )}

              {aviatorCashedOut && (
                <span className="text-xs font-bold text-[#17B15E] uppercase tracking-widest mt-1">
                  CASHED OUT: ₨ {Math.floor(aviatorBetAmount * aviatorMultiplier).toLocaleString()}!
                </span>
              )}
            </div>

            {/* Flight Controls */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-[#9EA2A8]">
                <span>Bet Amount: ₨ {aviatorBetAmount}</span>
                <span>Wallet: ₨ {user?.balance.toLocaleString()}</span>
              </div>

              {!aviatorRunning ? (
                <button
                  onClick={handleStartAviator}
                  className="w-full py-3.5 rounded-xl font-black text-sm text-[#15131E] shadow-lg active:scale-95 transition"
                  style={{ background: THEME.gradient }}
                >
                  START FLIGHT (₨ {aviatorBetAmount})
                </button>
              ) : (
                <button
                  onClick={handleCashoutAviator}
                  disabled={aviatorCrashed || aviatorCashedOut}
                  className="w-full py-3.5 rounded-xl font-black text-base text-white bg-[#17B15E] hover:bg-[#159f54] shadow-lg active:scale-95 transition"
                >
                  CASH OUT ₨ {Math.floor(aviatorBetAmount * aviatorMultiplier).toLocaleString()}
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 13. AUTHENTIC PAKVIP TREASURE CHEST MODAL                     */}
      {/* ============================================================== */}
      {showChestModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div
            className="w-full max-w-sm rounded-3xl border p-6 text-center space-y-4 animate-in zoom-in-95 duration-200"
            style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}
          >
            <div className="flex justify-end">
              <button
                onClick={() => setShowChestModal(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#9EA2A8]"
                style={{ backgroundColor: THEME.bgPill }}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <h3 className="text-xl font-black text-[#E6EBF0]">
              {chestOpened ? "CONGRATULATIONS!" : "DAILY LUCKY CHEST"}
            </h3>

            {/* Chest Image / Animation */}
            <div className="relative w-40 h-40 mx-auto flex items-center justify-center">
              <img
                src={
                  chestOpened
                    ? "/pakvip/images/box_open-9_JHXIXH.png"
                    : "/pakvip/images/box_closed-CHcnurtG.png"
                }
                alt="Treasure Chest"
                className="w-36 h-36 object-contain drop-shadow-[0_0_25px_rgba(33,217,204,0.4)]"
                onError={(e) => {
                  // Fallback icon if png missing
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
              <Gift className="w-24 h-24 text-[#BED921] block [img:not([style*='display: none'])~&]:hidden" />
            </div>

            {chestOpened ? (
              <div className="space-y-1">
                <span className="text-xs text-[#9EA2A8]">Added to your wallet</span>
                <div className="text-3xl font-black text-[#BED921] font-mono">
                  +₨ {chestReward.toLocaleString()}
                </div>
              </div>
            ) : (
              <p className="text-xs text-[#9EA2A8]">
                Open your daily mystery chest and receive up to ₨ 1,000 PKR instantly!
              </p>
            )}

            {!chestOpened ? (
              <button
                onClick={handleOpenChest}
                className="w-full py-3 rounded-xl font-bold text-sm text-[#15131E] shadow-lg hover:brightness-110 active:scale-95 transition"
                style={{ background: THEME.gradient }}
              >
                OPEN CHEST NOW
              </button>
            ) : (
              <button
                onClick={() => setShowChestModal(false)}
                className="w-full py-3 rounded-xl font-bold text-sm text-[#15131E]"
                style={{ background: THEME.gradient }}
              >
                DONE
              </button>
            )}
          </div>
        </div>
      )}

      {/* Notice Detail Modal */}
      {showNoticeModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            className="w-full max-w-sm rounded-3xl border p-5 space-y-3"
            style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}
          >
            <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: THEME.border }}>
              <h3 className="font-bold text-sm text-[#E6EBF0]">Platform Announcement</h3>
              <button onClick={() => setShowNoticeModal(false)}>
                <X className="w-4 h-4 text-[#9EA2A8]" />
              </button>
            </div>
            <p className="text-xs text-[#9EA2A8] leading-relaxed">
              Welcome to the official Winzo Play gaming portal. All deposits and withdrawals are processed instantly through JazzCash & EasyPaisa with 0% gateway commission. Play responsibly!
            </p>
            <button
              onClick={() => setShowNoticeModal(false)}
              className="w-full py-2.5 rounded-xl text-xs font-bold text-[#15131E]"
              style={{ background: THEME.gradient }}
            >
              Understood
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
