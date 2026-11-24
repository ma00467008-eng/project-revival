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
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pakvip - Best Online Casino in Pakistan | Free Bonus Games" },
      {
        name: "description",
        content:
          "Official Pakvip Casino: Aviator, JILI Slots, Live Casino & Fishing. Instant JazzCash & EasyPaisa deposits & withdrawals with 24/7 VIP support.",
      },
      { property: "og:title", content: "Pakvip - Official Casino Pakistan" },
      {
        property: "og:description",
        content: "Play Spribe Aviator, JILI Super Ace, and live games with fast payouts.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "icon", href: "/pakvip/images/favico.ico" }],
  }),
  component: PakvipProApp,
});

// Category tabs with authentic Pakvip styling
const CATEGORIES = [
  { id: "hot", labelUrdu: "Hot Slots", labelEn: "Hot Slots", badge: "HOT" },
  { id: "lottery", labelUrdu: "Lottery", labelEn: "Lottery", badge: "WIN" },
  { id: "original", labelUrdu: "Original", labelEn: "Original", badge: "TOP" },
  { id: "slots", labelUrdu: "Slots", labelEn: "Slots", badge: "JACKPOT" },
  { id: "fishing", labelUrdu: "Fishing", labelEn: "Fishing", badge: "NEW" },
  { id: "live", labelUrdu: "Live Casino", labelEn: "Live", badge: "HD" },
];

// High-resolution game cards with authentic casino artwork & providers
const GAMES_LIST = [
  {
    id: 1,
    title: "Aviator",
    category: "original",
    provider: "SPRIBE",
    winRate: "97.33%",
    multiplier: "100.00x",
    tag: "HOT",
    tagColor: "bg-red-600",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500&auto=format&fit=crop&q=80",
    gradient: "from-[#88001b] via-[#54000f] to-[#1a0004]",
    accent: "text-red-400",
  },
  {
    id: 2,
    title: "Super Ace",
    category: "slots",
    provider: "JILI",
    winRate: "98.15%",
    multiplier: "1500x",
    tag: "JACKPOT",
    tagColor: "bg-amber-500 text-black",
    image:
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=500&auto=format&fit=crop&q=80",
    gradient: "from-[#a66200] via-[#633a00] to-[#241500]",
    accent: "text-amber-400",
  },
  {
    id: 3,
    title: "Chicken Road 2",
    category: "original",
    provider: "INOUT",
    winRate: "98.50%",
    multiplier: "5000x",
    tag: "POPULAR",
    tagColor: "bg-orange-500",
    image:
      "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=500&auto=format&fit=crop&q=80",
    gradient: "from-[#b84500] via-[#6e2900] to-[#260f00]",
    accent: "text-orange-400",
  },
  {
    id: 4,
    title: "Royal Fishing",
    category: "fishing",
    provider: "JDB",
    winRate: "97.80%",
    multiplier: "1000x",
    tag: "BIG WIN",
    tagColor: "bg-cyan-500 text-black",
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=80",
    gradient: "from-[#006e88] via-[#004152] to-[#00171d]",
    accent: "text-cyan-400",
  },
  {
    id: 5,
    title: "Jackpot Fishing",
    category: "fishing",
    provider: "JILI",
    winRate: "96.90%",
    multiplier: "888x",
    tag: "TOP FISH",
    tagColor: "bg-blue-600",
    image:
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=500&auto=format&fit=crop&q=80",
    gradient: "from-[#034078] via-[#012547] to-[#000f1c]",
    accent: "text-blue-400",
  },
  {
    id: 6,
    title: "Crazy Time Live",
    category: "live",
    provider: "EVOLUTION",
    winRate: "96.08%",
    multiplier: "20,000x",
    tag: "LIVE",
    tagColor: "bg-emerald-600",
    image:
      "https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=500&auto=format&fit=crop&q=80",
    gradient: "from-[#5a189a] via-[#3c096c] to-[#10002b]",
    accent: "text-purple-400",
  },
  {
    id: 7,
    title: "Fortune Gems 2",
    category: "slots",
    provider: "JILI",
    winRate: "97.45%",
    multiplier: "1000x",
    tag: "MEGA",
    tagColor: "bg-teal-500 text-black",
    image:
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&auto=format&fit=crop&q=80",
    gradient: "from-[#007f5f] via-[#004b38] to-[#001c15]",
    accent: "text-emerald-400",
  },
  {
    id: 8,
    title: "Money Coming",
    category: "slots",
    provider: "JILI",
    winRate: "98.20%",
    multiplier: "10,000x",
    tag: "HOT",
    tagColor: "bg-rose-600",
    image:
      "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=500&auto=format&fit=crop&q=80",
    gradient: "from-[#9e2a2b] via-[#540b0e] to-[#220304]",
    accent: "text-amber-300",
  },
  {
    id: 9,
    title: "Cricket Roulette",
    category: "live",
    provider: "EZUGI",
    winRate: "97.30%",
    multiplier: "36x",
    tag: "PAKISTAN",
    tagColor: "bg-emerald-500 text-black",
    image:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=500&auto=format&fit=crop&q=80",
    gradient: "from-[#1b4332] via-[#081c15] to-[#020b08]",
    accent: "text-green-400",
  },
];

// Live simulated winnings feed for Pakistani players
const LIVE_WINNERS = [
  { phone: "0301****891", game: "Aviator", amount: "PKR 54,200", method: "JazzCash" },
  { phone: "0345****204", game: "Super Ace", amount: "PKR 142,000", method: "EasyPaisa" },
  { phone: "0312****519", game: "Chicken Road 2", amount: "PKR 88,500", method: "JazzCash" },
  { phone: "0333****772", game: "Jackpot Fishing", amount: "PKR 31,400", method: "EasyPaisa" },
];

function PakvipProApp() {
  const [activeCategory, setActiveCategory] = useState("hot");
  const [activeNav, setActiveNav] = useState("games");
  const [authModal, setAuthModal] = useState<"login" | "register" | "deposit" | null>(null);
  const [lang, setLang] = useState<"ur" | "en">("ur");
  const [chestOpen, setChestOpen] = useState(false);
  const [balance, setBalance] = useState(10000);
  const [currentWinnerIdx, setCurrentWinnerIdx] = useState(0);

  // Rotate winner ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWinnerIdx((prev) => (prev + 1) % LIVE_WINNERS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const winner = LIVE_WINNERS[currentWinnerIdx];

  const displayedGames =
    activeCategory === "hot"
      ? GAMES_LIST
      : GAMES_LIST.filter(
          (g) => g.category === activeCategory || activeCategory === "all"
        );

  return (
    <div className="min-h-screen bg-[#090b12] text-white flex justify-center font-sans antialiased selection:bg-[#3ae48e] selection:text-black">
      {/* Centered Mobile App Container */}
      <div className="w-full max-w-[430px] min-h-screen bg-[#111322] flex flex-col pb-24 relative shadow-2xl border-x border-[#1e2238]">
        {/* Top Header */}
        <header className="sticky top-0 z-40 bg-[#111322]/95 backdrop-blur-md px-3 py-2 flex items-center justify-between border-b border-[#1c2035]">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <img
                src="/pakvip/images/icon-192x192.png"
                alt="Pakvip Logo"
                className="w-9 h-9 rounded-xl object-contain drop-shadow"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-400 to-emerald-600 flex items-center justify-center font-black text-black text-sm shadow">
                RV
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-black text-lg tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-400 to-amber-300 leading-none">
                  PAKVIP
                </span>
                <span className="text-[9px] font-black px-1 rounded bg-red-600 text-white">
                  PK
                </span>
              </div>
              <p className="text-[9px] text-gray-400 font-bold tracking-widest">
                OFFICIAL CASINO
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setLang((l) => (l === "ur" ? "en" : "ur"))}
              className="px-2 py-1 rounded-md bg-[#1a1e33] text-[10px] font-extrabold text-teal-300 border border-[#2b3252]"
            >
              {lang === "ur" ? "EN" : "اردو"}
            </button>

            <button
              onClick={() => setAuthModal("login")}
              className="px-3 py-1.5 rounded-full bg-[#3ae48e] hover:bg-[#32d480] text-black font-extrabold text-xs shadow-md active:scale-95 transition"
            >
              {lang === "ur" ? "لاگ ان کریں" : "Login"}
            </button>

            <button
              onClick={() => setAuthModal("register")}
              className="px-3 py-1.5 rounded-full bg-[#172733] border border-teal-500/70 hover:border-teal-400 text-teal-300 font-extrabold text-xs active:scale-95 transition"
            >
              {lang === "ur" ? "رجسٹر کریں-" : "Register"}
            </button>
          </div>
        </header>

        {/* Hero VIP Promotion Banner */}
        <div className="p-3">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#1c1d3d] via-[#101229] to-[#0a0c1a] border border-indigo-500/40 p-4 shadow-2xl">
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-amber-400 text-black">
                  NEW PLAYER REWARDS
                </span>
                <span className="text-[10px] font-extrabold text-teal-400 flex items-center gap-1">
                  <Zap className="w-3 h-3 fill-teal-400" /> INSTANT WITHDRAWAL
                </span>
              </div>

              <h2 className="text-xl font-black italic tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-yellow-400 mt-1">
                PLAY MORE • EARN MORE • WIN BIG
              </h2>
              <p className="text-[11px] text-gray-300 mt-0.5">
                Pakistan's highest paying VIP deposit program
              </p>

              {/* 3 VIP Tables */}
              <div className="grid grid-cols-3 gap-1.5 mt-3 text-center">
                <div className="rounded-xl bg-[#15203d]/90 border border-blue-500/50 p-2 shadow-inner">
                  <span className="text-[10px] font-black text-cyan-300 block mb-0.5">
                    👤 1 DAY
                  </span>
                  <p className="text-[9px] text-gray-300 leading-tight">
                    CUMULATIVE <br />
                    <strong className="text-yellow-300">≥ 1,000 PKR</strong>
                  </p>
                  <span className="inline-block mt-1 text-[10px] font-black text-teal-300">
                    REWARD +80
                  </span>
                </div>

                <div className="rounded-xl bg-[#2d1c3a]/90 border border-amber-500/50 p-2 shadow-inner">
                  <span className="text-[10px] font-black text-amber-300 block mb-0.5">
                    👤 7 DAYS
                  </span>
                  <p className="text-[9px] text-gray-300 leading-tight">
                    CUMULATIVE <br />
                    <strong className="text-yellow-300">≥ 5,000 PKR</strong>
                  </p>
                  <span className="inline-block mt-1 text-[10px] font-black text-amber-300">
                    REWARD +300
                  </span>
                </div>

                <div className="rounded-xl bg-[#381530]/90 border border-purple-500/50 p-2 shadow-inner">
                  <span className="text-[10px] font-black text-pink-300 block mb-0.5">
                    👤 15 DAYS
                  </span>
                  <p className="text-[9px] text-gray-300 leading-tight">
                    CUMULATIVE <br />
                    <strong className="text-yellow-300">≥ 20,000 PKR</strong>
                  </p>
                  <span className="inline-block mt-1 text-[10px] font-black text-pink-300">
                    REWARD +1,000
                  </span>
                </div>
              </div>

              {/* Interactive Claim Button */}
              <div className="mt-3 flex gap-2">
                <button
                  onClick={() => setChestOpen(true)}
                  className="w-full py-2 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black font-black text-xs rounded-xl shadow-lg flex items-center justify-center gap-1 active:scale-95 transition"
                >
                  <Sparkles className="w-4 h-4" />
                  {lang === "ur" ? "روزانہ لکی چیسٹ کھولیں" : "Open Lucky Chest"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Live Announcement Marquee with Details Button */}
        <div className="px-3">
          <div className="bg-[#171a2c] rounded-full px-3 py-1.5 flex items-center justify-between border border-[#272b44] shadow-inner">
            <Volume2 className="w-4 h-4 text-cyan-400 shrink-0" />
            <div className="overflow-hidden whitespace-nowrap text-[11px] text-gray-300 mx-2 w-full">
              <span className="inline-block animate-pulse">
                {lang === "ur"
                  ? "🔥 پاک وی آئی پی - پاکستان کا نمبر 1 آن لائن کیسینو! ایزی پیسہ اور جاز کیش سے فوری ڈپازٹ اور 100% ویلکم بونس حاصل کریں!"
                  : "🔥 Pakvip Pakistan No. 1 Casino! Instant JazzCash & EasyPaisa deposits with 100% Welcome Cash Bonus!"}
              </span>
            </div>
            <button
              onClick={() =>
                alert("Pakvip Promotion: 100% Match on all First Deposits via JazzCash / EasyPaisa!")
              }
              className="px-3 py-0.5 rounded-full bg-[#3ae48e] text-black font-extrabold text-[11px] flex items-center gap-1 shrink-0 shadow active:scale-95 transition"
            >
              <Flame className="w-3 h-3 fill-black" />
              {lang === "ur" ? "تفصیل" : "Details"}
            </button>
          </div>
        </div>

        {/* Live Winners Real-Time Ticker */}
        {winner && (
          <div className="mx-3 mt-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#17203a] via-[#1c2847] to-[#17203a] border border-teal-500/30 flex items-center justify-between text-xs shadow-md">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3ae48e] animate-ping" />
              <span className="text-gray-300 text-[11px]">
                {winner.phone} won in <strong className="text-white">{winner.game}</strong>
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

        {/* Category Circular Tabs */}
        <div className="px-3 mt-3">
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
                    className={`w-14 h-14 rounded-full flex items-center justify-center p-0.5 transition shadow-lg ${
                      isSelected
                        ? "bg-gradient-to-b from-yellow-300 via-amber-500 to-amber-700 ring-2 ring-cyan-400 scale-105"
                        : "bg-gradient-to-b from-[#2e344d] to-[#161a29]"
                    }`}
                  >
                    <div className="w-full h-full rounded-full bg-[#151829] flex flex-col items-center justify-center">
                      <span className="text-[10px] font-black text-amber-300">
                        {cat.badge}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`text-[11px] font-bold mt-1 ${
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

        {/* Section Heading: Recommended Games */}
        <div className="px-3 mt-4 flex items-center gap-2">
          <span className="w-1 h-4 rounded-full bg-teal-400" />
          <div>
            <h3 className="font-extrabold text-sm text-white">
              {lang === "ur" ? "تجویز کردہ گیمز" : "Recommended Games"}
            </h3>
            <p className="text-[10px] text-gray-400">
              {lang === "ur"
                ? "کھلاڑیوں کے درمیان سب سے زیادہ مقبول الیکٹرانک گیمز"
                : "Top rated certified games by Spribe, JILI, JDB & Evolution"}
            </p>
          </div>
        </div>

        {/* Game Cards Grid (High Resolution Artworks) */}
        <div className="grid grid-cols-3 gap-2 px-3 mt-2.5">
          {displayedGames.map((game) => (
            <div
              key={game.id}
              onClick={() => setAuthModal("login")}
              className="flex flex-col rounded-xl overflow-hidden bg-[#16192a] border border-[#252a42] shadow-xl cursor-pointer hover:border-teal-400/80 active:scale-95 transition group"
            >
              {/* Card Artwork Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-black flex flex-col justify-between p-2">
                <img
                  src={game.image}
                  alt={game.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500 brightness-90 group-hover:brightness-100"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${game.gradient} opacity-60 group-hover:opacity-40 transition`} />

                {/* Top badges */}
                <div className="relative z-10 flex justify-between items-start">
                  <span className={`text-[8px] font-black px-1.5 py-0.5 rounded shadow ${game.tagColor}`}>
                    {game.tag}
                  </span>
                  <span className="text-[9px] font-black text-yellow-300 bg-black/60 px-1 py-0.5 rounded backdrop-blur-sm">
                    {game.provider}
                  </span>
                </div>

                {/* Game Title at Bottom of Poster */}
                <div className="relative z-10">
                  <h4 className="text-xs font-black text-white leading-tight drop-shadow truncate group-hover:text-yellow-300 transition">
                    {game.title}
                  </h4>
                  <p className="text-[9px] text-gray-200 font-bold">
                    Max: {game.multiplier}
                  </p>
                </div>
              </div>

              {/* Teal Win Rate Badge */}
              <div className="bg-[#143638] border-t border-teal-500/40 px-2 py-1 flex items-center justify-between text-[10px] text-teal-300 font-extrabold">
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
              alert("Pakvip 24/7 Support: Official WhatsApp helpline is available for withdrawals & deposits!")
            }
            className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-2xl hover:scale-105 active:scale-95 transition animate-pulse border-2 border-white/40"
          >
            <MessageCircle className="w-6 h-6 fill-white" />
          </button>
        </div>

        {/* Floating "Add to Home Screen" Banner */}
        <div className="fixed bottom-16 left-0 right-0 z-30 flex justify-center px-4 pointer-events-none">
          <button
            onClick={() =>
              alert("Install Pakvip Web App: Tap browser menu (⋮) -> 'Add to Home screen'!")
            }
            className="pointer-events-auto max-w-xs w-full py-2 px-3 rounded-full bg-gradient-to-r from-[#44df88] to-[#3ae48e] text-black font-black text-xs flex items-center justify-center gap-2 shadow-2xl active:scale-95 transition"
          >
            <span className="w-5 h-5 rounded bg-black text-emerald-400 text-[10px] flex items-center justify-center font-black">
              RV
            </span>
            <span>
              {lang === "ur"
                ? "ہوم اسکرین میں شامل کریں"
                : "Add Pakvip to Home Screen"}
            </span>
          </button>
        </div>

        {/* Bottom App Navigation Bar */}
        <nav className="fixed bottom-0 left-0 right-0 z-40 flex justify-center bg-[#0d0f1a]/95 backdrop-blur-md border-t border-[#1d2138]">
          <div className="w-full max-w-[430px] grid grid-cols-5 py-2 px-1 text-center items-center">
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

            {/* Glowing Lime Controller Button */}
            <button
              onClick={() => setActiveNav("games")}
              className="flex justify-center -mt-3"
            >
              <div className="w-14 h-9 rounded-full bg-[#3ae48e] flex items-center justify-center shadow-lg active:scale-95 transition">
                <Gamepad2 className="w-6 h-6 text-black fill-black" />
              </div>
            </button>

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
                🎁 DAILY LUCKY REWARD
              </h3>
              <p className="text-xs text-gray-300 mt-1">
                Claim your free Pakvip daily sign-in cash!
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
                  alert("PKR 500 credited to your Pakvip account!");
                }}
                className="w-full py-2.5 bg-[#3ae48e] text-black font-black text-xs rounded-xl shadow-lg active:scale-95 transition"
              >
                CLAIM TO WALLET
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-teal-400 to-emerald-600 flex items-center justify-center font-black text-black text-lg mx-auto mb-2 shadow">
                  RV
                </div>
                <h3 className="font-black text-lg text-white">
                  {authModal === "deposit"
                    ? "Instant Deposit"
                    : authModal === "login"
                      ? "Pakvip Member Login"
                      : "Register Account"}
                </h3>
                <p className="text-[11px] text-gray-400 mt-0.5">
                  Official Pakistan Gaming Network
                </p>
              </div>

              {/* Payment Methods */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="p-2 rounded-xl bg-[#1d2238] border border-red-500/40 text-center">
                  <span className="text-xs font-black text-red-400 block">
                    JazzCash
                  </span>
                  <span className="text-[9px] text-gray-400">Instant (0% Fee)</span>
                </div>
                <div className="p-2 rounded-xl bg-[#1d2238] border border-emerald-500/40 text-center">
                  <span className="text-xs font-black text-emerald-400 block">
                    EasyPaisa
                  </span>
                  <span className="text-[9px] text-gray-400">Instant (0% Fee)</span>
                </div>
              </div>

              <div className="space-y-2.5">
                <div>
                  <label className="text-[11px] font-bold text-gray-300 block mb-1">
                    Mobile Number (Pakistan +92)
                  </label>
                  <input
                    type="tel"
                    placeholder="0300 1234567"
                    className="w-full px-3 py-2 bg-[#0c0e18] border border-[#272c47] rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-teal-400"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-gray-300 block mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-3 py-2 bg-[#0c0e18] border border-[#272c47] rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-teal-400"
                  />
                </div>

                <button
                  onClick={() => {
                    alert("Welcome to Pakvip Official Gaming!");
                    setAuthModal(null);
                  }}
                  className="w-full py-2.5 mt-2 bg-[#3ae48e] text-black font-black text-xs rounded-xl shadow-lg active:scale-95 transition"
                >
                  {authModal === "deposit"
                    ? "PROCEED TO DEPOSIT"
                    : authModal === "login"
                      ? "LOGIN SECURELY"
                      : "CREATE ACCOUNT"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
