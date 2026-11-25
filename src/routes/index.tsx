import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
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
  component: WinzoPlayHome,
});

// Category tabs
const CATEGORIES = [
  { id: "lottery", labelUrdu: "لاٹری", labelEn: "Lottery", icon: "🎱", badge: "HOT" },
  { id: "original", labelUrdu: "اوریجنل", labelEn: "Original", icon: "✈️", badge: "TOP" },
  { id: "slots", labelUrdu: "سلاٹس", labelEn: "Slots", icon: "🎰", badge: "JACKPOT" },
  { id: "fishing", labelUrdu: "فشنگ", labelEn: "Fishing", icon: "🐟", badge: "NEW" },
  { id: "live", labelUrdu: "لائیو کیسینو", labelEn: "Casino", icon: "♠️", badge: "LIVE" },
  { id: "rummy", labelUrdu: "رمی کارڈز", labelEn: "Cards", icon: "🃏", badge: "VIP" },
  { id: "hot", labelUrdu: "تمام گیمز", labelEn: "All Games", icon: "🔥", badge: "BEST" },
];

const PROVIDERS = ["ALL", "JILI", "SPRIBE", "AR LOTTERY", "EVOLUTION", "JDB", "INOUT"];

interface GameItem {
  id: number;
  title: string;
  category: "lottery" | "original" | "slots" | "fishing" | "live" | "rummy";
  provider: string;
  winRate: string;
  multiplier: string;
  tag: string;
  tagColor: string;
  iconType: string;
  gradient: string;
  accent: string;
}

const GAMES_CATALOGUE: GameItem[] = [
  {
    id: 101,
    title: "Win Go 1Min",
    category: "lottery",
    provider: "AR LOTTERY",
    winRate: "98.80%",
    multiplier: "9.0x",
    tag: "1 MIN",
    tagColor: "bg-red-600 text-white",
    iconType: "wingo",
    gradient: "from-[#800d1d] via-[#480c14] to-[#1a0407]",
    accent: "text-red-400",
  },
  {
    id: 102,
    title: "Trx Win Go",
    category: "lottery",
    provider: "AR LOTTERY",
    winRate: "98.50%",
    multiplier: "9.0x",
    tag: "TRON",
    tagColor: "bg-amber-500 text-black",
    iconType: "trx",
    gradient: "from-[#8a4f00] via-[#522f00] to-[#1f1200]",
    accent: "text-amber-400",
  },
  {
    id: 103,
    title: "Win Go 3Min",
    category: "lottery",
    provider: "AR LOTTERY",
    winRate: "98.20%",
    multiplier: "9.0x",
    tag: "3 MIN",
    tagColor: "bg-emerald-600 text-white",
    iconType: "wingo3",
    gradient: "from-[#084c30] via-[#042d1c] to-[#01140c]",
    accent: "text-emerald-400",
  },
  {
    id: 104,
    title: "5D Lotre",
    category: "lottery",
    provider: "AR LOTTERY",
    winRate: "97.90%",
    multiplier: "9.0x",
    tag: "5D",
    tagColor: "bg-purple-600 text-white",
    iconType: "5d",
    gradient: "from-[#4c1d95] via-[#2e1065] to-[#12052b]",
    accent: "text-purple-400",
  },
  {
    id: 105,
    title: "K3 Lotre",
    category: "lottery",
    provider: "AR LOTTERY",
    winRate: "97.75%",
    multiplier: "216x",
    tag: "DICE",
    tagColor: "bg-cyan-600 text-white",
    iconType: "k3",
    gradient: "from-[#0e7490] via-[#155e75] to-[#083344]",
    accent: "text-cyan-400",
  },
  {
    id: 201,
    title: "Aviator",
    category: "original",
    provider: "SPRIBE",
    winRate: "97.33%",
    multiplier: "100.0x",
    tag: "HOT",
    tagColor: "bg-red-600 text-white",
    iconType: "aviator",
    gradient: "from-[#99001f] via-[#5e0013] to-[#240007]",
    accent: "text-red-400",
  },
  {
    id: 202,
    title: "Chicken Road 2",
    category: "original",
    provider: "INOUT",
    winRate: "98.50%",
    multiplier: "5000x",
    tag: "TOP",
    tagColor: "bg-amber-500 text-black",
    iconType: "chicken2",
    gradient: "from-[#9a3412] via-[#632007] to-[#2c0e03]",
    accent: "text-orange-400",
  },
  {
    id: 203,
    title: "Chicken Road",
    category: "original",
    provider: "INOUT",
    winRate: "97.80%",
    multiplier: "2000x",
    tag: "CLASSIC",
    tagColor: "bg-yellow-500 text-black",
    iconType: "chicken1",
    gradient: "from-[#a16207] via-[#653e04] to-[#261701]",
    accent: "text-yellow-400",
  },
  {
    id: 204,
    title: "Mines",
    category: "original",
    provider: "SPRIBE",
    winRate: "98.20%",
    multiplier: "10000x",
    tag: "MINES",
    tagColor: "bg-blue-600 text-white",
    iconType: "mines",
    gradient: "from-[#1e3a8a] via-[#172554] to-[#0a1027]",
    accent: "text-blue-400",
  },
  {
    id: 205,
    title: "Limbo",
    category: "original",
    provider: "SPRIBE",
    winRate: "98.10%",
    multiplier: "1000x",
    tag: "FAST",
    tagColor: "bg-teal-600 text-white",
    iconType: "limbo",
    gradient: "from-[#115e59] via-[#134e4a] to-[#042f2e]",
    accent: "text-teal-400",
  },
  {
    id: 206,
    title: "Plinko",
    category: "original",
    provider: "SPRIBE",
    winRate: "98.00%",
    multiplier: "1000x",
    tag: "DROP",
    tagColor: "bg-pink-600 text-white",
    iconType: "plinko",
    gradient: "from-[#831843] via-[#500724] to-[#1f020e]",
    accent: "text-pink-400",
  },
  {
    id: 301,
    title: "Super Ace",
    category: "slots",
    provider: "JILI",
    winRate: "98.15%",
    multiplier: "1500x",
    tag: "JACKPOT",
    tagColor: "bg-amber-400 text-black",
    iconType: "superace",
    gradient: "from-[#9a3412] via-[#5c1c04] to-[#210901]",
    accent: "text-amber-400",
  },
  {
    id: 302,
    title: "Fortune Gems 2",
    category: "slots",
    provider: "JILI",
    winRate: "97.45%",
    multiplier: "1000x",
    tag: "POPULAR",
    tagColor: "bg-emerald-500 text-black",
    iconType: "fortunegems",
    gradient: "from-[#065f46] via-[#064e3b] to-[#022c22]",
    accent: "text-emerald-400",
  },
  {
    id: 303,
    title: "Money Coming",
    category: "slots",
    provider: "JILI",
    winRate: "98.20%",
    multiplier: "10000x",
    tag: "MEGA",
    tagColor: "bg-rose-600 text-white",
    iconType: "moneycoming",
    gradient: "from-[#9f1239] via-[#4c0519] to-[#1f0209]",
    accent: "text-rose-400",
  },
  {
    id: 304,
    title: "Golden Empire",
    category: "slots",
    provider: "JILI",
    winRate: "97.10%",
    multiplier: "2000x",
    tag: "GOLD",
    tagColor: "bg-yellow-500 text-black",
    iconType: "goldenempire",
    gradient: "from-[#854d0e] via-[#532e05] to-[#211201]",
    accent: "text-yellow-300",
  },
  {
    id: 305,
    title: "Crazy 777",
    category: "slots",
    provider: "JILI",
    winRate: "98.00%",
    multiplier: "3333x",
    tag: "HOT 777",
    tagColor: "bg-red-500 text-white",
    iconType: "crazy777",
    gradient: "from-[#b91c1c] via-[#6f1111] to-[#2b0606]",
    accent: "text-red-400",
  },
  {
    id: 306,
    title: "Charge Buffalo",
    category: "slots",
    provider: "JILI",
    winRate: "96.90%",
    multiplier: "4000x",
    tag: "BUFFALO",
    tagColor: "bg-amber-600 text-white",
    iconType: "buffalo",
    gradient: "from-[#78350f] via-[#451a03] to-[#1c0a01]",
    accent: "text-amber-500",
  },
  {
    id: 401,
    title: "Mega Fishing",
    category: "fishing",
    provider: "JDB",
    winRate: "97.50%",
    multiplier: "1000x",
    tag: "MEGA",
    tagColor: "bg-cyan-500 text-black",
    iconType: "megafishing",
    gradient: "from-[#0891b2] via-[#0e7490] to-[#083344]",
    accent: "text-cyan-400",
  },
  {
    id: 402,
    title: "Jackpot Fishing",
    category: "fishing",
    provider: "JILI",
    winRate: "96.90%",
    multiplier: "888x",
    tag: "JACKPOT",
    tagColor: "bg-blue-600 text-white",
    iconType: "jackpotfishing",
    gradient: "from-[#1d4ed8] via-[#1e40af] to-[#0f172a]",
    accent: "text-blue-400",
  },
  {
    id: 403,
    title: "Royal Fishing",
    category: "fishing",
    provider: "JDB",
    winRate: "97.80%",
    multiplier: "1000x",
    tag: "ROYAL",
    tagColor: "bg-teal-500 text-black",
    iconType: "royalfishing",
    gradient: "from-[#0f766e] via-[#115e59] to-[#042f2e]",
    accent: "text-teal-400",
  },
  {
    id: 501,
    title: "Crazy Time Live",
    category: "live",
    provider: "EVOLUTION",
    winRate: "96.08%",
    multiplier: "20000x",
    tag: "LIVE SHOW",
    tagColor: "bg-purple-600 text-white",
    iconType: "crazytime",
    gradient: "from-[#6b21a8] via-[#4c1d95] to-[#1e0838]",
    accent: "text-purple-300",
  },
  {
    id: 502,
    title: "Dragon Tiger Live",
    category: "live",
    provider: "EVOLUTION",
    winRate: "96.50%",
    multiplier: "1:1",
    tag: "FAST",
    tagColor: "bg-red-600 text-white",
    iconType: "dragontiger",
    gradient: "from-[#991b1b] via-[#5c1010] to-[#240404]",
    accent: "text-red-400",
  },
  {
    id: 503,
    title: "Lightning Roulette",
    category: "live",
    provider: "EVOLUTION",
    winRate: "97.30%",
    multiplier: "500x",
    tag: "LIGHTNING",
    tagColor: "bg-yellow-500 text-black",
    iconType: "roulette",
    gradient: "from-[#854d0e] via-[#452706] to-[#1a0e01]",
    accent: "text-yellow-400",
  },
  {
    id: 601,
    title: "Teen Patti",
    category: "rummy",
    provider: "JILI",
    winRate: "97.80%",
    multiplier: "100x",
    tag: "POPULAR",
    tagColor: "bg-emerald-600 text-white",
    iconType: "teenpatti",
    gradient: "from-[#047857] via-[#065f46] to-[#022c22]",
    accent: "text-emerald-400",
  },
  {
    id: 602,
    title: "Andar Bahar",
    category: "rummy",
    provider: "JILI",
    winRate: "97.50%",
    multiplier: "1:1",
    tag: "VIP",
    tagColor: "bg-amber-500 text-black",
    iconType: "andarbahar",
    gradient: "from-[#b45309] via-[#78350f] to-[#291102]",
    accent: "text-amber-400",
  },
];

const LIVE_WINNERS = [
  { phone: "0302****719", game: "Win Go 1Min", amount: "PKR 38,400", method: "JazzCash" },
  { phone: "0345****204", game: "Aviator", amount: "PKR 142,000", method: "EasyPaisa" },
  { phone: "0312****519", game: "Super Ace", amount: "PKR 88,500", method: "JazzCash" },
  { phone: "0333****772", game: "Chicken Road 2", amount: "PKR 64,100", method: "EasyPaisa" },
  { phone: "0300****928", game: "Trx Win Go", amount: "PKR 52,900", method: "JazzCash" },
];

function WinzoPlayHome() {
  const [activeCategory, setActiveCategory] = useState("lottery");
  const [activeProvider, setActiveProvider] = useState("ALL");
  const [activeNav, setActiveNav] = useState("games");

  // Standalone user accounts & local balance (Completely decoupled from real Pakvip)
  const [user, setUser] = useState<{ phone: string; balance: number } | null>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("winzo_user");
      return saved ? JSON.parse(saved) : null;
    }
    return null;
  });

  const [authModal, setAuthModal] = useState<"login" | "register" | null>(null);
  const [authPhone, setAuthPhone] = useState("");
  const [authPass, setAuthPass] = useState("");
  const [depositModal, setDepositModal] = useState(false);
  const [depositMethod, setDepositMethod] = useState<"JazzCash" | "EasyPaisa">("JazzCash");
  const [depositAmount, setDepositAmount] = useState("1000");
  const [depositAccountNo, setDepositAccountNo] = useState("");
  const [depositSuccessMsg, setDepositSuccessMsg] = useState("");

  const [langModalOpen, setLangModalOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "ur">("en");
  const [chestOpen, setChestOpen] = useState(false);
  const [winnerIdx, setWinnerIdx] = useState(0);

  // Playable interactive game preview state
  const [activeGameModal, setActiveGameModal] = useState<GameItem | null>(null);
  const [wingoTimer, setWingoTimer] = useState(48);

  // Winner rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setWinnerIdx((prev) => (prev + 1) % LIVE_WINNERS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  // Win Go countdown timer
  useEffect(() => {
    const t = setInterval(() => {
      setWingoTimer((prev) => (prev <= 1 ? 60 : prev - 1));
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const winner = LIVE_WINNERS[winnerIdx];

  // Game filtering
  const filteredGames = GAMES_CATALOGUE.filter((g) => {
    const matchesCategory =
      activeCategory === "hot" ? true : g.category === activeCategory;
    const matchesProvider =
      activeProvider === "ALL" ? true : g.provider.toUpperCase().includes(activeProvider);
    return matchesCategory && matchesProvider;
  });

  // Handle Standalone Login / Register (Local & Private to Winzo Play)
  const handleAuthSubmit = () => {
    if (!authPhone.trim()) {
      alert(lang === "ur" ? "براہ کرم موبائل نمبر درج کریں" : "Please enter mobile number");
      return;
    }
    const newUser = {
      phone: authPhone,
      balance: user?.balance || 5000, // 5000 PKR starting welcome bonus
    };
    setUser(newUser);
    if (typeof window !== "undefined") {
      localStorage.setItem("winzo_user", JSON.stringify(newUser));
    }
    setAuthModal(null);
    setAuthPhone("");
    setAuthPass("");
  };

  const handleLogout = () => {
    setUser(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("winzo_user");
    }
  };

  // Handle Standalone Deposit (Local & Private to Winzo Play)
  const handleDepositSubmit = () => {
    const amt = parseFloat(depositAmount) || 0;
    if (amt < 100) {
      alert("Minimum deposit is 100 PKR");
      return;
    }
    const updatedBalance = (user?.balance || 0) + amt;
    const updatedUser = {
      phone: user?.phone || "0300****123",
      balance: updatedBalance,
    };
    setUser(updatedUser);
    if (typeof window !== "undefined") {
      localStorage.setItem("winzo_user", JSON.stringify(updatedUser));
    }
    setDepositSuccessMsg(
      lang === "ur"
        ? `آپ کا ڈپازٹ (PKR ${amt.toLocaleString()}) ریکارڈ ہو گیا ہے!`
        : `Deposit of PKR ${amt.toLocaleString()} recorded successfully!`
    );
    setTimeout(() => {
      setDepositSuccessMsg("");
      setDepositModal(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0a0c16] text-white flex justify-center font-sans antialiased selection:bg-[#3ae48e] selection:text-black">
      {/* Mobile Frame Container */}
      <div className="w-full max-w-[430px] min-h-screen bg-[#121526] flex flex-col pb-24 relative shadow-2xl border-x border-[#1e233d]">
        
        {/* Top Header - Winzo Play Branding */}
        <header className="sticky top-0 z-40 bg-[#121526]/95 backdrop-blur-md px-3 py-2.5 flex items-center justify-between border-b border-[#212642]">
          
          {/* Logo with Curved Monogram "WP" */}
          <div className="flex items-center gap-2">
            <div className="relative w-10 h-10 shrink-0">
              <svg
                className="w-10 h-10 rounded-full shadow-lg ring-2 ring-amber-400/80"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="48" fill="url(#wpBg)" stroke="url(#wpBorder)" strokeWidth="3" />
                <defs>
                  <linearGradient id="wpBg" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1a1c36" />
                    <stop offset="0.6" stopColor="#0e1124" />
                    <stop offset="1" stopColor="#070914" />
                  </linearGradient>
                  <linearGradient id="wpGold" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#fef08a" />
                    <stop offset="0.4" stopColor="#f59e0b" />
                    <stop offset="1" stopColor="#d97706" />
                  </linearGradient>
                  <linearGradient id="wpBorder" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#fbbf24" />
                    <stop offset="0.5" stopColor="#d97706" />
                    <stop offset="1" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>
                {/* Intertwined Curved W and P */}
                <path
                  d="M23 35 L33 67 L44 43 L54 67 L61 43"
                  stroke="url(#wpGold)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M54 35 L54 67 M54 35 H68 C76 35 80 41 80 47 C80 53 76 59 68 59 H54"
                  stroke="url(#wpGold)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="50" cy="50" r="44" stroke="#fbbf24" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
              </svg>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 leading-none">
                  WINZO PLAY
                </span>
                <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-red-600 text-white leading-none">
                  PK
                </span>
              </div>
              <p className="text-[9px] text-gray-400 font-extrabold tracking-widest mt-0.5 uppercase">
                {lang === "ur" ? "آفیشل کیسینو" : "Official Casino"}
              </p>
            </div>
          </div>

          {/* Right Header Buttons: Language + Auth / Deposit */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setLangModalOpen(true)}
              className="flex items-center gap-1 px-2 py-1.5 rounded-lg bg-[#1a1f36] hover:bg-[#232948] text-[11px] font-bold text-amber-300 border border-[#2d345a] transition active:scale-95"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === "ur" ? "اردو" : "ENG"}</span>
            </button>

            {user ? (
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setDepositModal(true)}
                  className="px-2.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-black text-xs shadow-md active:scale-95 transition flex items-center gap-1"
                >
                  <Wallet className="w-3.5 h-3.5" />
                  <span>PKR {user.balance.toLocaleString()}</span>
                </button>
                <button
                  onClick={handleLogout}
                  title="Logout"
                  className="p-1.5 rounded-lg bg-[#1a1f36] border border-[#2d345a] text-gray-400 hover:text-white"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => setAuthModal("login")}
                  className="px-3 py-1.5 rounded-lg bg-[#3ae48e] hover:bg-[#32d480] text-black font-extrabold text-xs shadow-md active:scale-95 transition"
                >
                  {lang === "ur" ? "لاگ ان" : "Login"}
                </button>
                <button
                  onClick={() => setAuthModal("register")}
                  className="px-3 py-1.5 rounded-lg bg-[#182935] border border-teal-500/80 hover:border-teal-400 text-teal-300 font-extrabold text-xs active:scale-95 transition"
                >
                  {lang === "ur" ? "رجسٹر" : "Register"}
                </button>
              </>
            )}
          </div>
        </header>

        {/* Hero Promotion Banner - VIP Rewards */}
        <div className="p-3">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#1d1f3d] via-[#12142b] to-[#0a0c1a] border border-amber-500/30 p-3.5 shadow-2xl">
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black uppercase tracking-wider">
                  {lang === "ur" ? "وی آئی پی انعامات" : "VIP WELCOME REWARDS"}
                </span>
                <span className="text-[10px] font-extrabold text-teal-400 flex items-center gap-1">
                  <Zap className="w-3 h-3 fill-teal-400" />
                  {lang === "ur" ? "فوری نکلوانا" : "Instant Payout"}
                </span>
              </div>

              <h2 className="text-xl font-black italic tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-yellow-400 mt-1">
                {lang === "ur"
                  ? "زیادہ کھیلیں • زیادہ کمائیں • بڑا جیتیں"
                  : "PLAY MORE • EARN MORE • WIN BIG"}
              </h2>
              <p className="text-[11px] text-gray-300 font-medium">
                {lang === "ur"
                  ? "پاکستان کا نمبر 1 محفوظ اور قابل اعتماد گیمنگ پلیٹ فارم"
                  : "Pakistan's #1 Certified Gaming Platform with JazzCash & EasyPaisa"}
              </p>

              {/* 3 VIP Day Threshold Tables */}
              <div className="grid grid-cols-3 gap-1.5 mt-2.5 text-center">
                <div className="rounded-xl bg-[#162142]/90 border border-blue-500/40 p-1.5 shadow-inner">
                  <span className="text-[10px] font-black text-cyan-300 block mb-0.5">👤 1 DAY</span>
                  <p className="text-[9px] text-gray-300 leading-tight">
                    {lang === "ur" ? "ڈپازٹ" : "DEPOSIT"} <br />
                    <strong className="text-yellow-300">≥ 1,000 PKR</strong>
                  </p>
                  <span className="inline-block mt-1 text-[10px] font-black text-teal-300">+80 BONUS</span>
                </div>

                <div className="rounded-xl bg-[#2e1d3d]/90 border border-amber-500/40 p-1.5 shadow-inner">
                  <span className="text-[10px] font-black text-amber-300 block mb-0.5">👤 7 DAYS</span>
                  <p className="text-[9px] text-gray-300 leading-tight">
                    {lang === "ur" ? "ڈپازٹ" : "DEPOSIT"} <br />
                    <strong className="text-yellow-300">≥ 5,000 PKR</strong>
                  </p>
                  <span className="inline-block mt-1 text-[10px] font-black text-amber-300">+300 BONUS</span>
                </div>

                <div className="rounded-xl bg-[#3b1735]/90 border border-purple-500/40 p-1.5 shadow-inner">
                  <span className="text-[10px] font-black text-pink-300 block mb-0.5">👤 15 DAYS</span>
                  <p className="text-[9px] text-gray-300 leading-tight">
                    {lang === "ur" ? "ڈپازٹ" : "DEPOSIT"} <br />
                    <strong className="text-yellow-300">≥ 20,000 PKR</strong>
                  </p>
                  <span className="inline-block mt-1 text-[10px] font-black text-pink-300">+1,000 BONUS</span>
                </div>
              </div>

              {/* Action Banner Row */}
              <div className="mt-2.5 flex items-center justify-between gap-2">
                <button
                  onClick={() => setChestOpen(true)}
                  className="w-full py-2 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black font-black text-xs rounded-xl shadow-lg flex items-center justify-center gap-1 active:scale-95 transition"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  {lang === "ur" ? "روزانہ مفت لکی چیسٹ کھولیں" : "Claim Daily Lucky Chest"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Live Audio / Notice Marquee */}
        <div className="px-3">
          <div className="bg-[#171b2d] rounded-full px-3 py-1.5 flex items-center justify-between border border-[#272d47] shadow-inner">
            <Volume2 className="w-4 h-4 text-amber-400 shrink-0" />
            <div className="overflow-hidden whitespace-nowrap text-[11px] text-gray-300 mx-2 w-full">
              <span className="inline-block animate-pulse">
                {lang === "ur"
                  ? "🔥 ونزو پلے میں خوش آمدید! ایزی پیسہ اور جاز کیش سے 24 گھنٹے فوری ڈیپازٹ اور نکلوانا۔ 100% ویلکم بونس ابھی حاصل کریں!"
                  : "🔥 Welcome to Winzo Play! Pakistan's No. 1 Online Casino. 100% First Deposit Bonus & Instant JazzCash / EasyPaisa 24/7 withdrawals!"}
              </span>
            </div>
            <button
              onClick={() =>
                alert(
                  lang === "ur"
                    ? "ونزو پلے آفر: جاز کیش اور ایزی پیسہ سے 100% ویلکم میچ بونس حاصل کریں!"
                    : "Winzo Play Promotion: 100% Welcome Match Bonus on JazzCash & EasyPaisa deposits!"
                )
              }
              className="px-2.5 py-0.5 rounded-full bg-[#3ae48e] text-black font-extrabold text-[10px] flex items-center gap-1 shrink-0 shadow active:scale-95 transition"
            >
              <Flame className="w-3 h-3 fill-black" />
              {lang === "ur" ? "تفصیل" : "Details"}
            </button>
          </div>
        </div>

        {/* Real-time Live Winners Bar */}
        {winner && (
          <div className="mx-3 mt-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#172038] via-[#1d2947] to-[#172038] border border-teal-500/30 flex items-center justify-between text-xs shadow-md">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3ae48e] animate-ping" />
              <span className="text-gray-300 text-[11px]">
                {winner.phone} {lang === "ur" ? "نے جیتا" : "won in"}{" "}
                <strong className="text-white">{winner.game}</strong>
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-amber-300">{winner.amount}</span>
              <span className="text-[9px] px-1 py-0.5 rounded bg-black/50 text-gray-300">
                {winner.method}
              </span>
            </div>
          </div>
        )}

        {/* Categories Bar */}
        <div className="px-3 mt-3.5">
          <div className="flex items-center justify-between gap-1 overflow-x-auto pb-1 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="flex flex-col items-center group active:scale-95 transition shrink-0"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center p-0.5 transition-all shadow-lg ${
                      isSelected
                        ? "bg-gradient-to-b from-yellow-300 via-amber-500 to-amber-700 ring-2 ring-teal-400 scale-105"
                        : "bg-gradient-to-b from-[#2a3047] to-[#161a29] hover:from-[#3a4263]"
                    }`}
                  >
                    <div className="w-full h-full rounded-2xl bg-[#141727] flex flex-col items-center justify-center">
                      <span className="text-xl drop-shadow">{cat.icon}</span>
                      <span
                        className={`text-[8px] font-black uppercase mt-0.5 ${
                          isSelected ? "text-yellow-300" : "text-gray-400"
                        }`}
                      >
                        {cat.badge}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`text-[11px] font-extrabold mt-1 tracking-tight ${
                      isSelected ? "text-amber-300" : "text-gray-400"
                    }`}
                  >
                    {lang === "ur" ? cat.labelUrdu : cat.labelEn}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Provider Pills Row */}
        <div className="px-3 mt-3 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {PROVIDERS.map((prov) => {
            const isSelected = activeProvider === prov;
            return (
              <button
                key={prov}
                onClick={() => setActiveProvider(prov)}
                className={`px-3 py-1 rounded-full text-[10px] font-black tracking-wider transition shrink-0 ${
                  isSelected
                    ? "bg-[#3ae48e] text-black shadow-md scale-105"
                    : "bg-[#181c2e] text-gray-400 hover:text-white border border-[#272d47]"
                }`}
              >
                {prov}
              </button>
            );
          })}
        </div>

        {/* Section Heading */}
        <div className="px-3 mt-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-4 rounded-full bg-gradient-to-b from-amber-400 to-teal-400" />
            <div>
              <h3 className="font-extrabold text-sm text-white">
                {lang === "ur"
                  ? `${CATEGORIES.find((c) => c.id === activeCategory)?.labelUrdu} (${filteredGames.length})`
                  : `${CATEGORIES.find((c) => c.id === activeCategory)?.labelEn} (${filteredGames.length})`}
              </h3>
              <p className="text-[10px] text-gray-400">
                {lang === "ur"
                  ? "ونزو پلے کے تصدیق شدہ اصلی گیمز"
                  : "Official certified online gaming titles with verified payouts"}
              </p>
            </div>
          </div>
          <span className="text-[10px] font-bold text-amber-300 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/30">
            24/7 FAST
          </span>
        </div>

        {/* 3-Column Casino Games Grid */}
        <div className="grid grid-cols-3 gap-2 px-3 mt-2.5">
          {filteredGames.map((game) => (
            <div
              key={game.id}
              onClick={() => {
                if (!user) {
                  setAuthModal("login");
                } else {
                  setActiveGameModal(game);
                }
              }}
              className="flex flex-col rounded-xl overflow-hidden bg-[#161929] border border-[#262c44] shadow-lg cursor-pointer hover:border-teal-400/80 active:scale-95 transition group"
            >
              <div
                className={`relative aspect-[4/5] bg-gradient-to-br ${game.gradient} p-2 flex flex-col justify-between overflow-hidden`}
              >
                <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-white/10 rounded-full blur-xl pointer-events-none" />

                <div className="relative z-10 flex justify-between items-start">
                  <span className={`text-[8px] font-black px-1.5 py-0.5 rounded shadow ${game.tagColor}`}>
                    {game.tag}
                  </span>
                  <span className="text-[9px] font-extrabold text-amber-300 bg-black/60 px-1 py-0.5 rounded backdrop-blur-sm">
                    {game.multiplier}
                  </span>
                </div>

                <div className="my-auto flex flex-col items-center justify-center transform group-hover:scale-110 transition duration-300">
                  {game.iconType === "wingo" && (
                    <div className="flex flex-col items-center">
                      <div className="flex items-center gap-1 mb-1">
                        <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 shadow" />
                        <span className="w-3.5 h-3.5 rounded-full bg-purple-500 shadow" />
                        <span className="w-3.5 h-3.5 rounded-full bg-red-500 shadow" />
                      </div>
                      <span className="text-2xl drop-shadow-lg">🎱</span>
                      <span className="text-[10px] font-black text-yellow-300 mt-0.5">WIN GO</span>
                    </div>
                  )}
                  {game.iconType === "aviator" && (
                    <div className="flex flex-col items-center">
                      <span className="text-3xl drop-shadow-xl text-red-500">✈️</span>
                      <span className="font-black italic text-xs text-red-400 tracking-wider mt-1">Aviator</span>
                    </div>
                  )}
                  {game.iconType === "chicken2" && (
                    <div className="flex flex-col items-center">
                      <span className="text-3xl drop-shadow-lg">🐔</span>
                      <span className="font-black text-[9px] text-yellow-300 mt-1 leading-none text-center">CHICKEN 2</span>
                    </div>
                  )}
                  {game.iconType === "superace" && (
                    <div className="flex flex-col items-center">
                      <span className="text-3xl drop-shadow-lg">🃏</span>
                      <span className="font-black text-[10px] text-amber-300 mt-0.5">SUPER ACE</span>
                    </div>
                  )}
                  {game.iconType === "fortunegems" && (
                    <div className="flex flex-col items-center">
                      <span className="text-3xl drop-shadow-lg">💎</span>
                      <span className="font-black text-[9px] text-emerald-300 mt-0.5 text-center leading-none">FORTUNE GEMS</span>
                    </div>
                  )}
                  {game.iconType === "moneycoming" && (
                    <div className="flex flex-col items-center">
                      <span className="text-3xl drop-shadow-lg">💰</span>
                      <span className="font-black text-[9px] text-rose-300 mt-0.5 text-center leading-none">MONEY COMING</span>
                    </div>
                  )}
                  {game.iconType === "megafishing" && (
                    <div className="flex flex-col items-center">
                      <span className="text-3xl drop-shadow-lg">🦈</span>
                      <span className="font-black text-[9px] text-cyan-300 mt-0.5">MEGA FISH</span>
                    </div>
                  )}
                  {!["wingo", "aviator", "chicken2", "superace", "fortunegems", "moneycoming", "megafishing"].includes(
                    game.iconType
                  ) && (
                    <div className="flex flex-col items-center">
                      <span className="text-2xl drop-shadow">🎰</span>
                      <span className="text-[10px] font-black text-amber-300 mt-0.5 uppercase">{game.title}</span>
                    </div>
                  )}
                </div>

                <div className="relative z-10 flex items-center justify-between text-[8px] font-bold text-gray-300">
                  <span className="truncate max-w-[55px] text-gray-400">{game.provider}</span>
                  <span className="text-teal-300 font-extrabold">{game.winRate}</span>
                </div>
              </div>

              <div className="p-2 bg-[#121526] flex items-center justify-between">
                <span className="text-[11px] font-extrabold truncate text-white">{game.title}</span>
                <Play className="w-3 h-3 text-[#3ae48e] shrink-0" />
              </div>
            </div>
          ))}
        </div>

        {/* Deposit Shortcut Bar */}
        <div className="p-3 mt-4">
          <div className="rounded-2xl bg-gradient-to-r from-[#172338] via-[#152a42] to-[#121c2d] border border-teal-500/40 p-3.5 flex items-center justify-between shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-400/40 flex items-center justify-center">
                <Wallet className="w-5 h-5 text-teal-300" />
              </div>
              <div>
                <h4 className="font-black text-xs text-white">
                  {lang === "ur" ? "فوری ڈیپازٹ اور نکلوانا" : "INSTANT DEPOSIT & WITHDRAWAL"}
                </h4>
                <p className="text-[10px] text-gray-300">JazzCash • EasyPaisa • Instant PKR</p>
              </div>
            </div>
            <button
              onClick={() => {
                if (!user) {
                  setAuthModal("login");
                } else {
                  setDepositModal(true);
                }
              }}
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-400 to-[#3ae48e] text-black font-black text-xs shadow-lg active:scale-95 transition"
            >
              {lang === "ur" ? "ڈپازٹ کریں" : "DEPOSIT"}
            </button>
          </div>
        </div>

        {/* Bottom Navigation Bar */}
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-[#0d101d]/98 backdrop-blur-lg border-t border-[#1f253d] py-2 px-3 flex items-center justify-around z-40">
          <button
            onClick={() => setActiveNav("games")}
            className={`flex flex-col items-center gap-1 active:scale-95 transition ${
              activeNav === "games" ? "text-amber-300" : "text-gray-400"
            }`}
          >
            <Gamepad2 className="w-5 h-5" />
            <span className="text-[10px] font-black">{lang === "ur" ? "گیمز" : "Games"}</span>
          </button>

          <button
            onClick={() => setChestOpen(true)}
            className={`flex flex-col items-center gap-1 active:scale-95 transition ${
              activeNav === "activity" ? "text-amber-300" : "text-gray-400"
            }`}
          >
            <Gift className="w-5 h-5" />
            <span className="text-[10px] font-black">{lang === "ur" ? "سرگرمیاں" : "Activity"}</span>
          </button>

          <button
            onClick={() => {
              if (!user) {
                setAuthModal("login");
              } else {
                setDepositModal(true);
              }
            }}
            className="flex flex-col items-center -mt-6 group active:scale-95 transition"
          >
            <div className="w-13 h-13 rounded-full bg-gradient-to-b from-yellow-300 via-amber-500 to-amber-700 p-0.5 shadow-xl ring-4 ring-[#0d101d]">
              <div className="w-full h-full rounded-full bg-[#161a2e] flex flex-col items-center justify-center">
                <Wallet className="w-6 h-6 text-yellow-400 group-hover:scale-110 transition" />
              </div>
            </div>
            <span className="text-[10px] font-black text-yellow-400 mt-1">
              {lang === "ur" ? "ڈپازٹ" : "Deposit"}
            </span>
          </button>

          <button
            onClick={() =>
              alert(
                lang === "ur"
                  ? "ونزو پلے پرومو کوڈ: WINZO100 لگا کر 100% بونس کلیم کریں!"
                  : "Use Promo Code: WINZO100 to claim a 100% Welcome Bonus!"
              )
            }
            className={`flex flex-col items-center gap-1 active:scale-95 transition ${
              activeNav === "promotion" ? "text-amber-300" : "text-gray-400"
            }`}
          >
            <Award className="w-5 h-5" />
            <span className="text-[10px] font-black">{lang === "ur" ? "پروموشن" : "Promotion"}</span>
          </button>

          <button
            onClick={() => {
              if (!user) {
                setAuthModal("login");
              } else {
                alert(`Logged in as: ${user.phone}\nBalance: PKR ${user.balance.toLocaleString()}`);
              }
            }}
            className={`flex flex-col items-center gap-1 active:scale-95 transition ${
              activeNav === "account" ? "text-amber-300" : "text-gray-400"
            }`}
          >
            <User className="w-5 h-5" />
            <span className="text-[10px] font-black">{lang === "ur" ? "اکاؤنٹ" : "Account"}</span>
          </button>
        </nav>

        {/* Lucky Chest Modal */}
        {chestOpen && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative w-full max-w-sm rounded-2xl bg-[#161a2e] border border-amber-500/50 p-5 text-center shadow-2xl animate-in fade-in zoom-in-95">
              <button
                onClick={() => setChestOpen(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="text-5xl my-2 animate-bounce">🎁</div>
              <h3 className="text-lg font-black text-amber-300">
                {lang === "ur" ? "روزانہ لکی چیسٹ" : "DAILY LUCKY CHEST"}
              </h3>
              <p className="text-xs text-gray-300 mt-1">
                {lang === "ur"
                  ? "مفت بونس وصول کرنے کے لیے نیچے بٹن دبائیں!"
                  : "Open your mystery box to receive up to 5,000 PKR instant gaming credits!"}
              </p>
              <button
                onClick={() => {
                  const bonus = Math.floor(Math.random() * 800) + 200;
                  if (user) {
                    const updated = { ...user, balance: user.balance + bonus };
                    setUser(updated);
                    localStorage.setItem("winzo_user", JSON.stringify(updated));
                  }
                  alert(
                    lang === "ur"
                      ? `مبارک ہو! آپ کو PKR ${bonus} بونس ملا ہے!`
                      : `Congratulations! You received PKR ${bonus} bonus credits!`
                  );
                  setChestOpen(false);
                }}
                className="w-full mt-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-black text-xs shadow-lg active:scale-95 transition"
              >
                {lang === "ur" ? "چیسٹ کھولیں" : "OPEN LUCKY CHEST"}
              </button>
            </div>
          </div>
        )}

        {/* Language Modal */}
        {langModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="w-full max-w-xs rounded-2xl bg-[#161a2e] border border-[#272d47] p-4 text-center shadow-2xl">
              <h3 className="text-sm font-black text-amber-300 mb-3">SELECT LANGUAGE / زبان منتخب کریں</h3>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setLang("en");
                    setLangModalOpen(false);
                  }}
                  className={`py-3 rounded-xl font-black text-xs border ${
                    lang === "en"
                      ? "bg-[#3ae48e] text-black border-teal-400"
                      : "bg-[#111422] text-gray-300 border-[#272d47]"
                  }`}
                >
                  English (ENG)
                </button>
                <button
                  onClick={() => {
                    setLang("ur");
                    setLangModalOpen(false);
                  }}
                  className={`py-3 rounded-xl font-black text-xs border ${
                    lang === "ur"
                      ? "bg-[#3ae48e] text-black border-teal-400"
                      : "bg-[#111422] text-gray-300 border-[#272d47]"
                  }`}
                >
                  اردو (Urdu)
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Standalone User Auth Modal (Disconnected from real Pakvip) */}
        {authModal && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative w-full max-w-sm rounded-2xl bg-[#151829] border border-amber-500/40 p-5 shadow-2xl animate-in fade-in zoom-in-95">
              <button
                onClick={() => setAuthModal(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 flex items-center justify-center text-black font-black text-xs">
                  WP
                </div>
                <div>
                  <h3 className="font-black text-sm text-amber-300">
                    {authModal === "login"
                      ? lang === "ur"
                        ? "لاگ ان ونزو پلے"
                        : "LOGIN TO WINZO PLAY"
                      : lang === "ur"
                        ? "اکاؤنٹ بنائیں"
                        : "CREATE WINZO PLAY ACCOUNT"}
                  </h3>
                  <p className="text-[10px] text-gray-400">
                    {lang === "ur" ? "محفوظ ذاتی اکاؤنٹ" : "Private & Secure Account"}
                  </p>
                </div>
              </div>

              <div className="space-y-3 mt-4">
                <div>
                  <label className="text-[11px] font-bold text-gray-300 block mb-1">
                    {lang === "ur" ? "موبائل فون نمبر" : "Mobile Phone (03xx-xxxxxxx)"}
                  </label>
                  <input
                    type="tel"
                    placeholder="03001234567"
                    value={authPhone}
                    onChange={(e) => setAuthPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#0e101c] border border-[#262c44] text-white text-xs outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-gray-300 block mb-1">
                    {lang === "ur" ? "پاس ورڈ" : "Password"}
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={authPass}
                    onChange={(e) => setAuthPass(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#0e101c] border border-[#262c44] text-white text-xs outline-none focus:border-amber-400"
                  />
                </div>

                <button
                  onClick={handleAuthSubmit}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-black text-xs shadow-lg active:scale-95 transition mt-2"
                >
                  {authModal === "login"
                    ? lang === "ur"
                      ? "لاگ ان کریں"
                      : "LOG IN"
                    : lang === "ur"
                      ? "اکاؤنٹ بنائیں (+5,000 PKR بونس)"
                      : "REGISTER & CLAIM 5,000 PKR"}
                </button>

                <div className="text-center pt-2">
                  <button
                    onClick={() => setAuthModal(authModal === "login" ? "register" : "login")}
                    className="text-[11px] text-teal-400 hover:underline"
                  >
                    {authModal === "login"
                      ? lang === "ur"
                        ? "نیا اکاؤنٹ بنائیں"
                        : "Don't have an account? Register"
                      : lang === "ur"
                        ? "پہلے سے اکاؤنٹ ہے؟ لاگ ان"
                        : "Already have an account? Login"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Standalone Deposit Modal (Disconnected from real Pakvip) */}
        {depositModal && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative w-full max-w-sm rounded-2xl bg-[#151829] border border-teal-500/50 p-5 shadow-2xl animate-in fade-in zoom-in-95">
              <button
                onClick={() => setDepositModal(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-teal-500/20 border border-teal-400 flex items-center justify-center">
                  <Wallet className="w-4 h-4 text-teal-300" />
                </div>
                <div>
                  <h3 className="font-black text-sm text-white">
                    {lang === "ur" ? "ڈپازٹ فنڈز (ونزو پلے)" : "DEPOSIT FUNDS (WINZO PLAY)"}
                  </h3>
                  <p className="text-[10px] text-gray-400">
                    Current Balance: <strong className="text-yellow-300">PKR {user?.balance.toLocaleString()}</strong>
                  </p>
                </div>
              </div>

              {depositSuccessMsg ? (
                <div className="py-6 text-center">
                  <CheckCircle2 className="w-12 h-12 text-teal-400 mx-auto mb-2 animate-bounce" />
                  <p className="text-xs font-black text-teal-300">{depositSuccessMsg}</p>
                </div>
              ) : (
                <div className="space-y-3 mt-3">
                  <div>
                    <label className="text-[11px] font-bold text-gray-300 block mb-1">
                      {lang === "ur" ? "ادائیگی کا طریقہ منتخب کریں" : "Select Payment Method"}
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setDepositMethod("JazzCash")}
                        className={`py-2 rounded-xl text-xs font-black border transition ${
                          depositMethod === "JazzCash"
                            ? "bg-red-950/60 border-red-500 text-red-300"
                            : "bg-[#0f1220] border-[#252a42] text-gray-400"
                        }`}
                      >
                        🔴 JazzCash
                      </button>
                      <button
                        onClick={() => setDepositMethod("EasyPaisa")}
                        className={`py-2 rounded-xl text-xs font-black border transition ${
                          depositMethod === "EasyPaisa"
                            ? "bg-emerald-950/60 border-emerald-500 text-emerald-300"
                            : "bg-[#0f1220] border-[#252a42] text-gray-400"
                        }`}
                      >
                        🟢 EasyPaisa
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-gray-300 block mb-1">
                      {lang === "ur" ? "رقم منتخب کریں (PKR)" : "Deposit Amount (PKR)"}
                    </label>
                    <div className="grid grid-cols-3 gap-1.5 mb-2">
                      {["500", "1000", "2000", "5000", "10000"].map((amt) => (
                        <button
                          key={amt}
                          onClick={() => setDepositAmount(amt)}
                          className={`py-1.5 rounded-lg text-xs font-black border ${
                            depositAmount === amt
                              ? "bg-amber-400 text-black border-amber-300"
                              : "bg-[#0f1220] border-[#252a42] text-gray-300"
                          }`}
                        >
                          {amt}
                        </button>
                      ))}
                    </div>
                    <input
                      type="number"
                      value={depositAmount}
                      onChange={(e) => setDepositAmount(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-[#0e101c] border border-[#262c44] text-white text-xs outline-none focus:border-teal-400"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-gray-300 block mb-1">
                      {depositMethod} {lang === "ur" ? "اکاؤنٹ نمبر" : "Account Number"}
                    </label>
                    <input
                      type="tel"
                      placeholder="03xxxxxxxxx"
                      value={depositAccountNo}
                      onChange={(e) => setDepositAccountNo(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-[#0e101c] border border-[#262c44] text-white text-xs outline-none focus:border-teal-400"
                    />
                  </div>

                  <p className="text-[9px] text-gray-400 leading-tight">
                    * Ready for your Admin Panel: Submitting this credits your player's balance and records the request
                    for your future backend. No funds go to Pakvip.
                  </p>

                  <button
                    onClick={handleDepositSubmit}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-[#3ae48e] text-black font-black text-xs shadow-lg active:scale-95 transition"
                  >
                    {lang === "ur" ? "ڈپازٹ کی تصدیق کریں" : "CONFIRM DEPOSIT"}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Playable Game Preview Modal (Win Go / Aviator / Slots) */}
        {activeGameModal && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative w-full max-w-sm rounded-2xl bg-[#161a2e] border border-amber-500/40 p-4 shadow-2xl">
              <button
                onClick={() => setActiveGameModal(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">🎮</span>
                <div>
                  <h3 className="font-black text-sm text-amber-300">{activeGameModal.title}</h3>
                  <p className="text-[10px] text-gray-400">
                    Provider: {activeGameModal.provider} • RTP: {activeGameModal.winRate}
                  </p>
                </div>
              </div>

              {/* Win Go Interactive Live Round */}
              {activeGameModal.iconType === "wingo" ? (
                <div className="bg-[#0f1220] rounded-xl p-3 border border-[#242b45] text-center">
                  <div className="flex justify-between items-center text-xs text-gray-300 mb-2">
                    <span>Period: 2026112501</span>
                    <span className="text-amber-400 font-black">Time Left: {wingoTimer}s</span>
                  </div>
                  <div className="flex justify-center gap-2 my-3">
                    <button
                      onClick={() => alert("Bet placed on GREEN!")}
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-black text-xs"
                    >
                      Green (2x)
                    </button>
                    <button
                      onClick={() => alert("Bet placed on VIOLET!")}
                      className="px-3 py-1.5 rounded-lg bg-purple-600 text-white font-black text-xs"
                    >
                      Violet (4.5x)
                    </button>
                    <button
                      onClick={() => alert("Bet placed on RED!")}
                      className="px-3 py-1.5 rounded-lg bg-red-600 text-white font-black text-xs"
                    >
                      Red (2x)
                    </button>
                  </div>
                  <div className="grid grid-cols-5 gap-1.5 mt-2">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                      <button
                        key={n}
                        onClick={() => alert(`Bet placed on Number ${n} (9x)!`)}
                        className="py-1.5 rounded bg-[#1a2038] hover:bg-amber-500 hover:text-black font-black text-xs border border-[#2b3353]"
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>
              ) : activeGameModal.iconType === "aviator" ? (
                /* Aviator Live Flight Simulation */
                <div className="bg-[#0f1220] rounded-xl p-4 border border-[#242b45] text-center">
                  <div className="text-4xl my-3 animate-pulse">✈️</div>
                  <div className="text-3xl font-black text-red-500 mb-2">2.45x</div>
                  <p className="text-xs text-gray-400 mb-4">FLEW AWAY!</p>
                  <button
                    onClick={() => alert("Bet placed for next round!")}
                    className="w-full py-2.5 rounded-xl bg-emerald-500 text-black font-black text-xs shadow-lg"
                  >
                    BET 100 PKR (NEXT ROUND)
                  </button>
                </div>
              ) : (
                /* Standard Game Screen */
                <div className="bg-[#0f1220] rounded-xl p-4 border border-[#242b45] text-center">
                  <div className="text-4xl my-3">🎰</div>
                  <h4 className="text-xs font-black text-white">{activeGameModal.title} Ready</h4>
                  <p className="text-[10px] text-gray-400 my-2">Max Multiplier: {activeGameModal.multiplier}</p>
                  <button
                    onClick={() => {
                      if (user && user.balance >= 50) {
                        const win = Math.random() > 0.4;
                        const diff = win ? 150 : -50;
                        const updated = { ...user, balance: user.balance + diff };
                        setUser(updated);
                        localStorage.setItem("winzo_user", JSON.stringify(updated));
                        alert(win ? "YOU WON PKR 150!" : "Round lost: PKR 50");
                      } else {
                        alert("Please deposit to play!");
                        setDepositModal(true);
                      }
                    }}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-black text-xs shadow-lg"
                  >
                    SPIN (50 PKR)
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
