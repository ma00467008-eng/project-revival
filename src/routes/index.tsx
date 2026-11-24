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
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pakvip - Best Online Casino in Pakistan | Official VIP Gaming" },
      {
        name: "description",
        content:
          "Official Pakvip Pakistan: Win Go Lottery, Aviator, JILI Slots, Live Casino & Fishing. Fast JazzCash & EasyPaisa withdrawals with 24/7 VIP support.",
      },
      { property: "og:title", content: "Pakvip - Official Casino Pakistan" },
      {
        property: "og:description",
        content: "Play Win Go, Spribe Aviator, Chicken Road 2, and JILI Slots with instant PKR payouts.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "icon", href: "/pakvip/images/favico.ico" }],
  }),
  component: PakvipHome,
});

// Category tabs matching official Pakvip layout
const CATEGORIES = [
  { id: "lottery", labelUrdu: "لاٹری", labelEn: "Lottery", icon: "🎱", badge: "HOT" },
  { id: "original", labelUrdu: "اوریجنل", labelEn: "Original", icon: "✈️", badge: "TOP" },
  { id: "slots", labelUrdu: "سلاٹس", labelEn: "Slots", icon: "🎰", badge: "JACKPOT" },
  { id: "fishing", labelUrdu: "فشنگ", labelEn: "Fishing", icon: "🐟", badge: "NEW" },
  { id: "live", labelUrdu: "لائیو کیسینو", labelEn: "Casino", icon: "♠️", badge: "LIVE" },
  { id: "rummy", labelUrdu: "رمی کارڈز", labelEn: "Cards", icon: "🃏", badge: "VIP" },
  { id: "hot", labelUrdu: "تمام گیمز", labelEn: "All Games", icon: "🔥", badge: "BEST" },
];

// Provider filter tabs
const PROVIDERS = ["ALL", "JILI", "SPRIBE", "AR LOTTERY", "EVOLUTION", "JDB", "INOUT"];

// Rich game list strictly structured like Pakvip official catalogue
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
  // LOTTERY (Pakvip's #1 signature category)
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

  // ORIGINAL (Aviator & Fast Crash)
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

  // SLOTS (JILI signature games)
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

  // FISHING
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

  // LIVE CASINO
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

  // RUMMY & CARDS
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

// Simulated real-time payout feed for Pakistan players
const LIVE_WINNERS = [
  { phone: "0302****719", game: "Win Go 1Min", amount: "PKR 38,400", method: "JazzCash" },
  { phone: "0345****204", game: "Aviator", amount: "PKR 142,000", method: "EasyPaisa" },
  { phone: "0312****519", game: "Super Ace", amount: "PKR 88,500", method: "JazzCash" },
  { phone: "0333****772", game: "Chicken Road 2", amount: "PKR 64,100", method: "EasyPaisa" },
  { phone: "0300****928", game: "Trx Win Go", amount: "PKR 52,900", method: "JazzCash" },
];

function PakvipHome() {
  const [activeCategory, setActiveCategory] = useState("lottery");
  const [activeProvider, setActiveProvider] = useState("ALL");
  const [activeNav, setActiveNav] = useState("games");
  const [authModal, setAuthModal] = useState<"login" | "register" | "deposit" | null>(null);
  const [langModalOpen, setLangModalOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "ur">("en");
  const [chestOpen, setChestOpen] = useState(false);
  const [balance, setBalance] = useState(10000);
  const [winnerIdx, setWinnerIdx] = useState(0);

  // Winner ticker rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setWinnerIdx((prev) => (prev + 1) % LIVE_WINNERS.length);
    }, 2800);
    return () => clearInterval(timer);
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

  return (
    <div className="min-h-screen bg-[#0a0c16] text-white flex justify-center font-sans antialiased selection:bg-[#3ae48e] selection:text-black">
      {/* Mobile Frame Container */}
      <div className="w-full max-w-[430px] min-h-screen bg-[#121526] flex flex-col pb-24 relative shadow-2xl border-x border-[#1e233d]">
        {/* Top Header - Authentic Pakvip Branding */}
        <header className="sticky top-0 z-40 bg-[#121526]/95 backdrop-blur-md px-3 py-2.5 flex items-center justify-between border-b border-[#212642]">
          {/* Logo with Original Pakvip Icon */}
          <div className="flex items-center gap-2">
            <img
              src="/pakvip/images/icon-192x192.png"
              alt="Pakvip Official"
              className="w-10 h-10 rounded-full object-contain shadow-lg ring-2 ring-amber-400/60"
              onError={(e) => {
                e.currentTarget.src = "/pakvip/images/favico.ico";
              }}
            />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 leading-none">
                  PAKVIP
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

          {/* Language Selector + Auth Action Buttons */}
          <div className="flex items-center gap-1.5">
            {/* Language Switch Button with Clear Options */}
            <button
              onClick={() => setLangModalOpen(true)}
              className="flex items-center gap-1 px-2 py-1.5 rounded-lg bg-[#1a1f36] hover:bg-[#232948] text-[11px] font-bold text-amber-300 border border-[#2d345a] transition active:scale-95"
              title="Select Language"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === "ur" ? "اردو" : "ENG"}</span>
            </button>

            {/* Login button */}
            <button
              onClick={() => setAuthModal("login")}
              className="px-3 py-1.5 rounded-lg bg-[#3ae48e] hover:bg-[#32d480] text-black font-extrabold text-xs shadow-md active:scale-95 transition"
            >
              {lang === "ur" ? "لاگ ان" : "Login"}
            </button>

            {/* Register button */}
            <button
              onClick={() => setAuthModal("register")}
              className="px-3 py-1.5 rounded-lg bg-[#182935] border border-teal-500/80 hover:border-teal-400 text-teal-300 font-extrabold text-xs active:scale-95 transition"
            >
              {lang === "ur" ? "رجسٹر" : "Register"}
            </button>
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

              {/* 3 VIP Day Threshold Tables matching live site */}
              <div className="grid grid-cols-3 gap-1.5 mt-2.5 text-center">
                <div className="rounded-xl bg-[#162142]/90 border border-blue-500/40 p-1.5 shadow-inner">
                  <span className="text-[10px] font-black text-cyan-300 block mb-0.5">
                    👤 1 DAY
                  </span>
                  <p className="text-[9px] text-gray-300 leading-tight">
                    {lang === "ur" ? "ڈپازٹ" : "DEPOSIT"} <br />
                    <strong className="text-yellow-300">≥ 1,000 PKR</strong>
                  </p>
                  <span className="inline-block mt-1 text-[10px] font-black text-teal-300">
                    +80 BONUS
                  </span>
                </div>

                <div className="rounded-xl bg-[#2e1d3d]/90 border border-amber-500/40 p-1.5 shadow-inner">
                  <span className="text-[10px] font-black text-amber-300 block mb-0.5">
                    👤 7 DAYS
                  </span>
                  <p className="text-[9px] text-gray-300 leading-tight">
                    {lang === "ur" ? "ڈپازٹ" : "DEPOSIT"} <br />
                    <strong className="text-yellow-300">≥ 5,000 PKR</strong>
                  </p>
                  <span className="inline-block mt-1 text-[10px] font-black text-amber-300">
                    +300 BONUS
                  </span>
                </div>

                <div className="rounded-xl bg-[#3b1735]/90 border border-purple-500/40 p-1.5 shadow-inner">
                  <span className="text-[10px] font-black text-pink-300 block mb-0.5">
                    👤 15 DAYS
                  </span>
                  <p className="text-[9px] text-gray-300 leading-tight">
                    {lang === "ur" ? "ڈپازٹ" : "DEPOSIT"} <br />
                    <strong className="text-yellow-300">≥ 20,000 PKR</strong>
                  </p>
                  <span className="inline-block mt-1 text-[10px] font-black text-pink-300">
                    +1,000 BONUS
                  </span>
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

        {/* Live Audio / Notice Marquee with Detail Button */}
        <div className="px-3">
          <div className="bg-[#171b2d] rounded-full px-3 py-1.5 flex items-center justify-between border border-[#272d47] shadow-inner">
            <Volume2 className="w-4 h-4 text-amber-400 shrink-0" />
            <div className="overflow-hidden whitespace-nowrap text-[11px] text-gray-300 mx-2 w-full">
              <span className="inline-block animate-pulse">
                {lang === "ur"
                  ? "🔥 پاک وی آئی پی میں خوش آمدید! ایزی پیسہ اور جاز کیش سے 24 گھنٹے فوری ڈیپازٹ اور نکلوانا۔ 100% ویلکم بونس ابھی کلیم کریں!"
                  : "🔥 Welcome to Pakvip! Pakistan's No. 1 Online Casino. 100% First Deposit Bonus & Instant JazzCash / EasyPaisa 24/7 withdrawals!"}
              </span>
            </div>
            <button
              onClick={() =>
                alert(
                  lang === "ur"
                    ? "پاک وی آئی پی آفیشل آفر: جاز کیش اور ایزی پیسہ سے 100% بونس حاصل کریں!"
                    : "Pakvip Promotion: 100% Welcome Match Bonus on JazzCash & EasyPaisa deposits!"
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

        {/* Categories Bar - Circular Badges matching Real Pakvip */}
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

        {/* Section Heading: Selected Category Title & Game Count */}
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
                  ? "پاک وی آئی پی کے تصدیق شدہ اصلی گیمز"
                  : "Official certified online gaming titles with verified payouts"}
              </p>
            </div>
          </div>
          <span className="text-[10px] font-bold text-amber-300 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/30">
            24/7 FAST
          </span>
        </div>

        {/* Games Arrangement Layout - Authentic 3-Column Casino Cards */}
        <div className="grid grid-cols-3 gap-2 px-3 mt-2.5">
          {filteredGames.map((game) => (
            <div
              key={game.id}
              onClick={() => setAuthModal("login")}
              className="flex flex-col rounded-xl overflow-hidden bg-[#161929] border border-[#262c44] shadow-lg cursor-pointer hover:border-teal-400/80 active:scale-95 transition group"
            >
              {/* Card Artwork Box */}
              <div
                className={`relative aspect-[4/5] bg-gradient-to-br ${game.gradient} p-2 flex flex-col justify-between overflow-hidden`}
              >
                {/* Background glow circle */}
                <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-white/10 rounded-full blur-xl pointer-events-none" />

                {/* Top Badge & Multiplier */}
                <div className="relative z-10 flex justify-between items-start">
                  <span className={`text-[8px] font-black px-1.5 py-0.5 rounded shadow ${game.tagColor}`}>
                    {game.tag}
                  </span>
                  <span className="text-[9px] font-extrabold text-amber-300 bg-black/60 px-1 py-0.5 rounded backdrop-blur-sm">
                    {game.multiplier}
                  </span>
                </div>

                {/* Central Iconic Game Art */}
                <div className="my-auto flex flex-col items-center justify-center transform group-hover:scale-110 transition duration-300">
                  {/* Win Go / Lottery Art */}
                  {game.iconType === "wingo" && (
                    <div className="flex flex-col items-center">
                      <div className="flex items-center gap-1 mb-1">
                        <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 shadow" />
                        <span className="w-3.5 h-3.5 rounded-full bg-purple-500 shadow" />
                        <span className="w-3.5 h-3.5 rounded-full bg-red-500 shadow" />
                      </div>
                      <span className="text-2xl drop-shadow-lg">🎱</span>
                      <span className="text-[10px] font-black text-yellow-300 mt-0.5">
                        WIN GO
                      </span>
                    </div>
                  )}

                  {/* Trx Win Go */}
                  {game.iconType === "trx" && (
                    <div className="flex flex-col items-center">
                      <span className="text-3xl drop-shadow-lg">💎</span>
                      <span className="text-[10px] font-black text-amber-300 mt-0.5">
                        TRX WIN
                      </span>
                    </div>
                  )}

                  {/* 5D */}
                  {game.iconType === "5d" && (
                    <div className="flex flex-col items-center">
                      <span className="text-3xl drop-shadow-lg">🎯</span>
                      <span className="text-[10px] font-black text-purple-300 mt-0.5">
                        5D LOTRE
                      </span>
                    </div>
                  )}

                  {/* K3 */}
                  {game.iconType === "k3" && (
                    <div className="flex flex-col items-center">
                      <span className="text-3xl drop-shadow-lg">🎲</span>
                      <span className="text-[10px] font-black text-cyan-300 mt-0.5">
                        K3 DICE
                      </span>
                    </div>
                  )}

                  {/* Win Go 3Min */}
                  {game.iconType === "wingo3" && (
                    <div className="flex flex-col items-center">
                      <span className="text-3xl drop-shadow-lg">⏱️</span>
                      <span className="text-[10px] font-black text-emerald-300 mt-0.5">
                        3MIN
                      </span>
                    </div>
                  )}

                  {/* Aviator Red Supersonic Plane */}
                  {game.iconType === "aviator" && (
                    <div className="flex flex-col items-center">
                      <span className="text-3xl drop-shadow-xl text-red-500">✈️</span>
                      <span className="font-black italic text-xs text-red-400 tracking-wider mt-1">
                        Aviator
                      </span>
                    </div>
                  )}

                  {/* Chicken Road 2 */}
                  {game.iconType === "chicken2" && (
                    <div className="flex flex-col items-center">
                      <span className="text-3xl drop-shadow-lg">🐔</span>
                      <span className="font-black text-[9px] text-yellow-300 mt-1 leading-none text-center">
                        CHICKEN 2
                      </span>
                    </div>
                  )}

                  {/* Chicken Road 1 */}
                  {game.iconType === "chicken1" && (
                    <div className="flex flex-col items-center">
                      <span className="text-3xl drop-shadow-lg">🐣</span>
                      <span className="font-black text-[9px] text-white mt-1 leading-none text-center">
                        CHICKEN
                      </span>
                    </div>
                  )}

                  {/* Mines */}
                  {game.iconType === "mines" && (
                    <div className="flex flex-col items-center">
                      <span className="text-3xl drop-shadow-lg">💣</span>
                      <span className="font-black text-[10px] text-blue-300 mt-0.5">
                        MINES
                      </span>
                    </div>
                  )}

                  {/* Limbo */}
                  {game.iconType === "limbo" && (
                    <div className="flex flex-col items-center">
                      <span className="text-3xl drop-shadow-lg">🚀</span>
                      <span className="font-black text-[10px] text-teal-300 mt-0.5">
                        LIMBO
                      </span>
                    </div>
                  )}

                  {/* Plinko */}
                  {game.iconType === "plinko" && (
                    <div className="flex flex-col items-center">
                      <span className="text-3xl drop-shadow-lg">🕹️</span>
                      <span className="font-black text-[10px] text-pink-300 mt-0.5">
                        PLINKO
                      </span>
                    </div>
                  )}

                  {/* Super Ace */}
                  {game.iconType === "superace" && (
                    <div className="flex flex-col items-center">
                      <span className="text-3xl drop-shadow-lg">🃏</span>
                      <span className="font-black text-[10px] text-amber-300 mt-0.5">
                        SUPER ACE
                      </span>
                    </div>
                  )}

                  {/* Fortune Gems */}
                  {game.iconType === "fortunegems" && (
                    <div className="flex flex-col items-center">
                      <span className="text-3xl drop-shadow-lg">💎</span>
                      <span className="font-black text-[9px] text-emerald-300 mt-0.5 text-center leading-none">
                        FORTUNE GEMS
                      </span>
                    </div>
                  )}

                  {/* Money Coming */}
                  {game.iconType === "moneycoming" && (
                    <div className="flex flex-col items-center">
                      <span className="text-3xl drop-shadow-lg">💰</span>
                      <span className="font-black text-[9px] text-rose-300 mt-0.5 text-center leading-none">
                        MONEY COMING
                      </span>
                    </div>
                  )}

                  {/* Golden Empire */}
                  {game.iconType === "goldenempire" && (
                    <div className="flex flex-col items-center">
                      <span className="text-3xl drop-shadow-lg">👑</span>
                      <span className="font-black text-[9px] text-yellow-300 mt-0.5 text-center leading-none">
                        EMPIRE
                      </span>
                    </div>
                  )}

                  {/* Crazy 777 */}
                  {game.iconType === "crazy777" && (
                    <div className="flex flex-col items-center">
                      <span className="text-3xl drop-shadow-lg">🎰</span>
                      <span className="font-black text-[10px] text-red-300 mt-0.5">
                        CRAZY 777
                      </span>
                    </div>
                  )}

                  {/* Buffalo */}
                  {game.iconType === "buffalo" && (
                    <div className="flex flex-col items-center">
                      <span className="text-3xl drop-shadow-lg">🦬</span>
                      <span className="font-black text-[9px] text-amber-300 mt-0.5">
                        BUFFALO
                      </span>
                    </div>
                  )}

                  {/* Mega Fishing */}
                  {game.iconType === "megafishing" && (
                    <div className="flex flex-col items-center">
                      <span className="text-3xl drop-shadow-lg">🦈</span>
                      <span className="font-black text-[9px] text-cyan-300 mt-0.5">
                        MEGA FISH
                      </span>
                    </div>
                  )}

                  {/* Jackpot Fishing */}
                  {game.iconType === "jackpotfishing" && (
                    <div className="flex flex-col items-center">
                      <span className="text-3xl drop-shadow-lg">🐳</span>
                      <span className="font-black text-[9px] text-blue-300 mt-0.5">
                        JACKPOT FISH
                      </span>
                    </div>
                  )}

                  {/* Royal Fishing */}
                  {game.iconType === "royalfishing" && (
                    <div className="flex flex-col items-center">
                      <span className="text-3xl drop-shadow-lg">🐲</span>
                      <span className="font-black text-[9px] text-teal-300 mt-0.5">
                        ROYAL FISH
                      </span>
                    </div>
                  )}

                  {/* Crazy Time */}
                  {game.iconType === "crazytime" && (
                    <div className="flex flex-col items-center">
                      <span className="text-3xl drop-shadow-lg">🎡</span>
                      <span className="font-black text-[9px] text-purple-300 mt-0.5">
                        CRAZY TIME
                      </span>
                    </div>
                  )}

                  {/* Dragon Tiger */}
                  {game.iconType === "dragontiger" && (
                    <div className="flex flex-col items-center">
                      <span className="text-3xl drop-shadow-lg">🐉</span>
                      <span className="font-black text-[9px] text-red-400 mt-0.5">
                        DRAGON TIGER
                      </span>
                    </div>
                  )}

                  {/* Roulette */}
                  {game.iconType === "roulette" && (
                    <div className="flex flex-col items-center">
                      <span className="text-3xl drop-shadow-lg">⚡</span>
                      <span className="font-black text-[9px] text-yellow-300 mt-0.5">
                        ROULETTE
                      </span>
                    </div>
                  )}

                  {/* Teen Patti */}
                  {game.iconType === "teenpatti" && (
                    <div className="flex flex-col items-center">
                      <span className="text-3xl drop-shadow-lg">🂡</span>
                      <span className="font-black text-[9px] text-emerald-300 mt-0.5">
                        TEEN PATTI
                      </span>
                    </div>
                  )}

                  {/* Andar Bahar */}
                  {game.iconType === "andarbahar" && (
                    <div className="flex flex-col items-center">
                      <span className="text-3xl drop-shadow-lg">🂮</span>
                      <span className="font-black text-[9px] text-amber-300 mt-0.5">
                        ANDAR BAHAR
                      </span>
                    </div>
                  )}
                </div>

                {/* Bottom title & provider */}
                <div className="relative z-10">
                  <p className="text-[8px] font-bold text-gray-300 truncate">
                    {game.provider}
                  </p>
                  <h4 className="text-[11px] font-black text-white leading-tight truncate group-hover:text-yellow-300 transition">
                    {game.title}
                  </h4>
                </div>
              </div>

              {/* Bottom Win Rate / RTP bar strictly like official Pakvip */}
              <div className="bg-[#133739] border-t border-teal-500/40 px-2 py-1 flex items-center justify-between text-[10px] text-teal-300 font-extrabold">
                <span>{lang === "ur" ? "جیتنے کا" : "RTP"}</span>
                <span className="text-white font-black">{game.winRate}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Customer Support (WhatsApp) */}
        <div className="fixed right-3 bottom-24 z-30 flex flex-col items-center gap-2">
          <button
            onClick={() =>
              alert(
                lang === "ur"
                  ? "پاک وی آئی پی آفیشل 24/7 واٹس ایپ سپورٹ دستیاب ہے!"
                  : "Pakvip 24/7 Official WhatsApp Helpline ready to assist you!"
              )
            }
            className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-2xl hover:scale-105 active:scale-95 transition animate-pulse border-2 border-white/50"
            title="Customer Support"
          >
            <MessageCircle className="w-6 h-6 fill-white" />
          </button>
        </div>

        {/* Floating "Add to Home Screen" Banner with Pakvip Original Logo */}
        <div className="fixed bottom-16 left-0 right-0 z-30 flex justify-center px-4 pointer-events-none">
          <button
            onClick={() =>
              alert(
                lang === "ur"
                  ? "پاک وی آئی پی کو ہوم اسکرین پر شامل کرنے کے لیے براؤزر مینو (⋮) پر کلک کریں اور 'Add to Home screen' منتخب کریں!"
                  : "To install Pakvip: Tap browser menu (⋮) -> 'Add to Home screen'!"
              )
            }
            className="pointer-events-auto max-w-xs w-full py-2 px-3 rounded-full bg-gradient-to-r from-[#44df88] to-[#3ae48e] text-black font-black text-xs flex items-center justify-center gap-2 shadow-2xl active:scale-95 transition"
          >
            <img
              src="/pakvip/images/icon-192x192.png"
              alt="Pakvip"
              className="w-5 h-5 rounded-full object-contain"
            />
            <span>
              {lang === "ur"
                ? "پاک وی آئی پی کو ہوم اسکرین میں شامل کریں"
                : "Add Pakvip to Home Screen"}
            </span>
          </button>
        </div>

        {/* Bottom App Navigation Bar */}
        <nav className="fixed bottom-0 left-0 right-0 z-40 flex justify-center bg-[#0d0f1b]/95 backdrop-blur-md border-t border-[#1e233d]">
          <div className="w-full max-w-[430px] grid grid-cols-5 py-2 px-1 text-center items-center">
            {/* Promo */}
            <button
              onClick={() => setActiveNav("promo")}
              className={`flex flex-col items-center ${
                activeNav === "promo" ? "text-emerald-400" : "text-gray-400"
              }`}
            >
              <Heart className="w-5 h-5" />
              <span className="text-[10px] font-bold mt-0.5">
                {lang === "ur" ? "پروموشن" : "Promo"}
              </span>
            </button>

            {/* Rewards / Activity */}
            <button
              onClick={() => {
                setActiveNav("activity");
                setChestOpen(true);
              }}
              className={`flex flex-col items-center ${
                activeNav === "activity" ? "text-emerald-400" : "text-gray-400"
              }`}
            >
              <Gift className="w-5 h-5" />
              <span className="text-[10px] font-bold mt-0.5">
                {lang === "ur" ? "سرگرمی" : "Rewards"}
              </span>
            </button>

            {/* Glowing Lime Game Controller in Center */}
            <button
              onClick={() => setActiveNav("games")}
              className="flex justify-center -mt-3"
            >
              <div className="w-14 h-9 rounded-full bg-[#3ae48e] flex items-center justify-center shadow-lg active:scale-95 transition">
                <Gamepad2 className="w-6 h-6 text-black fill-black" />
              </div>
            </button>

            {/* Wallet / Purse */}
            <button
              onClick={() => setAuthModal("deposit")}
              className={`flex flex-col items-center ${
                activeNav === "wallet" ? "text-emerald-400" : "text-gray-400"
              }`}
            >
              <Wallet className="w-5 h-5" />
              <span className="text-[10px] font-bold mt-0.5">
                {lang === "ur" ? "پرس" : "Wallet"}
              </span>
            </button>

            {/* Account */}
            <button
              onClick={() => setAuthModal("login")}
              className={`flex flex-col items-center ${
                activeNav === "account" ? "text-emerald-400" : "text-gray-400"
              }`}
            >
              <User className="w-5 h-5" />
              <span className="text-[10px] font-bold mt-0.5">
                {lang === "ur" ? "کھاتہ" : "Account"}
              </span>
            </button>
          </div>
        </nav>

        {/* Dedicated Language Selector Modal */}
        {langModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="w-full max-w-xs bg-[#16192a] rounded-2xl border border-amber-500/40 p-4 relative shadow-2xl">
              <button
                onClick={() => setLangModalOpen(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-center font-black text-base text-amber-300 mb-3 flex items-center justify-center gap-1.5">
                <Globe className="w-4 h-4 text-amber-400" />
                Select Language / زبان منتخب کریں
              </h3>

              <div className="space-y-2">
                {/* English Option */}
                <button
                  onClick={() => {
                    setLang("en");
                    setLangModalOpen(false);
                  }}
                  className={`w-full p-3 rounded-xl flex items-center justify-between border transition ${
                    lang === "en"
                      ? "bg-[#183a33] border-emerald-400 text-white font-black"
                      : "bg-[#121526] border-[#252b47] text-gray-300 hover:bg-[#1a1f36]"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">🇬🇧</span>
                    <div className="text-left">
                      <div className="text-xs font-black">English</div>
                      <div className="text-[10px] text-gray-400">Default International</div>
                    </div>
                  </div>
                  {lang === "en" && <Check className="w-4 h-4 text-emerald-400" />}
                </button>

                {/* Urdu Option */}
                <button
                  onClick={() => {
                    setLang("ur");
                    setLangModalOpen(false);
                  }}
                  className={`w-full p-3 rounded-xl flex items-center justify-between border transition ${
                    lang === "ur"
                      ? "bg-[#183a33] border-emerald-400 text-white font-black"
                      : "bg-[#121526] border-[#252b47] text-gray-300 hover:bg-[#1a1f36]"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">🇵🇰</span>
                    <div className="text-left">
                      <div className="text-xs font-black">اردو (Urdu)</div>
                      <div className="text-[10px] text-gray-400">قومی زبان پاکستان</div>
                    </div>
                  </div>
                  {lang === "ur" && <Check className="w-4 h-4 text-emerald-400" />}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Lucky Treasure Chest Modal */}
        {chestOpen && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="w-full max-w-xs bg-[#16192a] rounded-2xl border border-amber-500/40 p-5 text-center relative shadow-2xl">
              <button
                onClick={() => setChestOpen(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-lg font-black text-yellow-300">
                🎁 {lang === "ur" ? "روزانہ لکی کیش انعام" : "DAILY LUCKY REWARD"}
              </h3>
              <p className="text-xs text-gray-300 mt-1">
                {lang === "ur"
                  ? "پاک وی آئی پی کی جانب سے مفت کیش انعام کلیم کریں!"
                  : "Claim your free Pakvip daily sign-in cash reward!"}
              </p>
              <div className="my-4 py-6 bg-gradient-to-b from-amber-500/10 to-transparent rounded-xl border border-amber-500/20">
                <span className="text-5xl">👑</span>
                <p className="text-xl font-black text-amber-400 mt-2">
                  + PKR 500 FREE
                </p>
              </div>
              <button
                onClick={() => {
                  setBalance((b) => b + 500);
                  setChestOpen(false);
                  alert(
                    lang === "ur"
                      ? "PKR 500 آپ کے پاک وی آئی پی اکاؤنٹ میں جمع کر دیے گئے ہیں!"
                      : "PKR 500 credited to your Pakvip account!"
                  );
                }}
                className="w-full py-2.5 bg-[#3ae48e] text-black font-black text-xs rounded-xl shadow-lg active:scale-95 transition"
              >
                {lang === "ur" ? "والٹ میں کلیم کریں" : "CLAIM TO WALLET"}
              </button>
            </div>
          </div>
        )}

        {/* Auth / Deposit Dialog with JazzCash & EasyPaisa */}
        {authModal && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="w-full max-w-xs bg-[#151829] rounded-2xl border border-teal-500/50 p-5 shadow-2xl relative">
              <button
                onClick={() => setAuthModal(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-3">
                <img
                  src="/pakvip/images/icon-192x192.png"
                  alt="Pakvip"
                  className="w-12 h-12 rounded-full object-contain mx-auto mb-2 shadow-lg ring-2 ring-amber-400"
                />
                <h3 className="font-black text-lg text-white">
                  {authModal === "deposit"
                    ? lang === "ur" ? "فوری ڈیپازٹ" : "Instant Deposit"
                    : authModal === "login"
                      ? lang === "ur" ? "لاگ ان کریں" : "Pakvip Member Login"
                      : lang === "ur" ? "نیا اکاؤنٹ بنائیں" : "Register Account"}
                </h3>
                <p className="text-[11px] text-gray-400 mt-0.5">
                  {lang === "ur"
                    ? "پاکستان کا آفیشل اور محفوظ گیمنگ نیٹ ورک"
                    : "Official Pakistan Gaming Network"}
                </p>
              </div>

              {/* Payment Methods */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="p-2 rounded-xl bg-[#1d2238] border border-red-500/40 text-center">
                  <span className="text-xs font-black text-red-400 block">
                    JazzCash
                  </span>
                  <span className="text-[9px] text-gray-400">
                    {lang === "ur" ? "فوری (0% فیس)" : "Instant (0% Fee)"}
                  </span>
                </div>
                <div className="p-2 rounded-xl bg-[#1d2238] border border-emerald-500/40 text-center">
                  <span className="text-xs font-black text-emerald-400 block">
                    EasyPaisa
                  </span>
                  <span className="text-[9px] text-gray-400">
                    {lang === "ur" ? "فوری (0% فیس)" : "Instant (0% Fee)"}
                  </span>
                </div>
              </div>

              <div className="space-y-2.5">
                <div>
                  <label className="text-[11px] font-bold text-gray-300 block mb-1">
                    {lang === "ur" ? "موبائل نمبر (پاکستان +92)" : "Mobile Number (Pakistan +92)"}
                  </label>
                  <input
                    type="tel"
                    placeholder="0300 1234567"
                    className="w-full px-3 py-2 bg-[#0c0e18] border border-[#272c47] rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-teal-400"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-gray-300 block mb-1">
                    {lang === "ur" ? "پاس ورڈ" : "Password"}
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-3 py-2 bg-[#0c0e18] border border-[#272c47] rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-teal-400"
                  />
                </div>

                <button
                  onClick={() => {
                    alert(
                      lang === "ur"
                        ? "پاک وی آئی پی میں خوش آمدید!"
                        : "Welcome to Pakvip Official Gaming!"
                    );
                    setAuthModal(null);
                  }}
                  className="w-full py-2.5 mt-2 bg-[#3ae48e] text-black font-black text-xs rounded-xl shadow-lg active:scale-95 transition"
                >
                  {authModal === "deposit"
                    ? lang === "ur" ? "ڈپازٹ جاری رکھیں" : "PROCEED TO DEPOSIT"
                    : authModal === "login"
                      ? lang === "ur" ? "لاگ ان کریں" : "LOGIN SECURELY"
                      : lang === "ur" ? "اکاؤنٹ بنائیں" : "CREATE ACCOUNT"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
