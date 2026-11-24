import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Flame,
  Gamepad2,
  Tv,
  Trophy,
  Fish,
  Crown,
  Gift,
  Wallet,
  ArrowDownToLine,
  ArrowUpFromLine,
  Headphones,
  User,
  Home,
  Sparkles,
  Volume2,
  ChevronRight,
  X,
  CheckCircle,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pakvip - Best Online Casino in Pakistan | Free Bonus Games" },
      {
        name: "description",
        content:
          "Welcome to Pakvip, Pakistan's leading online casino and gaming platform. Play Slots, Live Casino, Sports, and claim daily bonuses.",
      },
      {
        property: "og:title",
        content: "Pakvip - Best Online Casino in Pakistan",
      },
      {
        property: "og:description",
        content: "Play online casino games with fast withdrawals and daily rewards.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "icon", href: "/pakvip/images/favico.ico" }],
  }),
  component: PakvipHome,
});

// Game category definitions
const CATEGORIES = [
  { id: "hot", label: "Hot", icon: Flame },
  { id: "slots", label: "Slots", icon: Gamepad2 },
  { id: "live", label: "Live Casino", icon: Tv },
  { id: "sports", label: "Cricket & Sports", icon: Trophy },
  { id: "fishing", label: "Fishing", icon: Fish },
  { id: "vip", label: "VIP Club", icon: Crown },
];

// Casino game list
const GAMES = [
  {
    id: 1,
    title: "Aviator",
    category: "hot",
    provider: "Spribe",
    multiplier: "99.0x",
    tag: "HOT",
    bg: "from-red-600 to-rose-900",
  },
  {
    id: 2,
    title: "Super Ace",
    category: "slots",
    provider: "JILI",
    multiplier: "1500x",
    tag: "JACKPOT",
    bg: "from-amber-500 to-yellow-800",
  },
  {
    id: 3,
    title: "Crazy Time",
    category: "live",
    provider: "Evolution",
    multiplier: "20000x",
    tag: "LIVE",
    bg: "from-purple-600 to-indigo-900",
  },
  {
    id: 4,
    title: "Fortune Gems 2",
    category: "slots",
    provider: "JILI",
    multiplier: "1000x",
    tag: "POPULAR",
    bg: "from-emerald-600 to-teal-900",
  },
  {
    id: 5,
    title: "PSL Cricket Star",
    category: "sports",
    provider: "Microgaming",
    multiplier: "500x",
    tag: "SPORTS",
    bg: "from-blue-600 to-cyan-900",
  },
  {
    id: 6,
    title: "Mega Fishing",
    category: "fishing",
    provider: "JDB",
    multiplier: "300x",
    tag: "NEW",
    bg: "from-sky-500 to-blue-800",
  },
  {
    id: 7,
    title: "Money Coming",
    category: "slots",
    provider: "JILI",
    multiplier: "10000x",
    tag: "HOT",
    bg: "from-orange-500 to-amber-800",
  },
  {
    id: 8,
    title: "Dragon Tiger Live",
    category: "live",
    provider: "Sexy Baccarat",
    multiplier: "1:1",
    tag: "LIVE",
    bg: "from-red-700 to-pink-950",
  },
  {
    id: 9,
    title: "Golden Empire",
    category: "slots",
    provider: "JILI",
    multiplier: "2000x",
    tag: "JACKPOT",
    bg: "from-yellow-600 to-amber-950",
  },
];

// Recent simulated winner feed
const RECENT_WINNERS = [
  { user: "9230****184", game: "Aviator", amount: "PKR 45,800" },
  { user: "9231****902", game: "Super Ace", amount: "PKR 128,400" },
  { user: "9234****551", game: "Crazy Time", amount: "PKR 86,250" },
  { user: "9233****819", game: "Fortune Gems", amount: "PKR 34,100" },
];

function PakvipHome() {
  const [activeCategory, setActiveCategory] = useState("hot");
  const [activeTab, setActiveTab] = useState("home");
  const [chestOpen, setChestOpen] = useState(false);
  const [chestClaimed, setChestClaimed] = useState(false);
  const [authModal, setAuthModal] = useState<"login" | "register" | null>(null);
  const [balance, setBalance] = useState(5000);
  const [winnerIndex, setWinnerIndex] = useState(0);

  // Rotate winner ticker every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setWinnerIndex((prev) => (prev + 1) % RECENT_WINNERS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const filteredGames =
    activeCategory === "hot"
      ? GAMES
      : GAMES.filter((g) => g.category === activeCategory);

  const currentWinner = RECENT_WINNERS[winnerIndex];

  return (
    <div className="min-h-screen bg-[#0f1422] text-white flex justify-center selection:bg-red-500 selection:text-white">
      {/* Mobile-first centered app shell */}
      <div className="w-full max-w-md min-h-screen bg-[#151a2d] flex flex-col pb-20 shadow-2xl relative border-x border-[#232b42]">
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-[#121626]/95 backdrop-blur-md px-3 py-2.5 flex items-center justify-between border-b border-[#222a40]">
          <div className="flex items-center gap-2">
            <img
              src="/pakvip/images/icon-192x192.png"
              alt="Pakvip Logo"
              className="w-9 h-9 rounded-full ring-2 ring-amber-400/60 shadow-md"
              onError={(e) => {
                // Fallback if image not found
                e.currentTarget.style.display = "none";
              }}
            />
            <div>
              <div className="flex items-center gap-1">
                <span className="font-black text-lg tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-red-400">
                  PAKVIP
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-red-600 text-white leading-none">
                  PK
                </span>
              </div>
              <p className="text-[10px] text-gray-400 font-medium">Official Casino</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex flex-col items-end">
              <span className="text-[10px] text-amber-400/90 font-semibold">
                Balance
              </span>
              <span className="text-xs font-black text-yellow-300">
                PKR {balance.toLocaleString()}
              </span>
            </div>
            <button
              onClick={() => setAuthModal("login")}
              className="px-3 py-1.5 text-xs font-bold rounded-lg bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-400 hover:to-red-400 text-white shadow-md active:scale-95 transition"
            >
              Deposit
            </button>
          </div>
        </header>

        {/* Live Marquee Notice */}
        <div className="bg-[#1b2238] px-3 py-1.5 flex items-center gap-2 text-xs border-b border-[#252f4c]">
          <Volume2 className="w-4 h-4 text-amber-400 shrink-0 animate-pulse" />
          <div className="overflow-hidden whitespace-nowrap text-gray-300 text-[11px] w-full">
            <span className="inline-block animate-marquee">
              🎉 Welcome to Pakvip! 100% First Deposit Bonus up to PKR 20,000! Fast JazzCash & EasyPaisa withdrawals 24/7!
            </span>
          </div>
        </div>

        {/* Hero Promotion Carousel */}
        <div className="p-3">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-red-600 via-rose-700 to-amber-700 p-4 shadow-lg border border-red-500/30">
            <div className="relative z-10 max-w-[70%]">
              <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-yellow-400 text-black">
                VIP WELCOME BONUS
              </span>
              <h2 className="text-lg font-black mt-1 leading-tight text-white drop-shadow">
                GET +100% BONUS ON FIRST DEPOSIT
              </h2>
              <p className="text-xs text-yellow-200 mt-0.5">
                Daily Lucky Chest & Free Spins
              </p>
              <button
                onClick={() => setChestOpen(true)}
                className="mt-3 px-3.5 py-1.5 bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold text-xs rounded-xl shadow-lg flex items-center gap-1 active:scale-95 transition"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Claim Gift Chest
              </button>
            </div>
            <div className="absolute right-1 -bottom-2 w-32 h-32 opacity-95 pointer-events-none">
              <img
                src="/pakvip/images/box_closed-CHcnurtG.png"
                alt="Treasure Chest"
                className="w-full h-full object-contain drop-shadow-xl animate-bounce"
                style={{ animationDuration: "3s" }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </div>
        </div>

        {/* Quick Action Navigation Grid */}
        <div className="grid grid-cols-4 gap-2 px-3 py-1">
          <button
            onClick={() => setAuthModal("login")}
            className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#1b2238] border border-[#263150] active:scale-95 transition hover:bg-[#202945]"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center shadow">
              <ArrowDownToLine className="w-4 h-4 text-white" />
            </div>
            <span className="text-[11px] font-semibold mt-1 text-gray-200">
              Deposit
            </span>
          </button>

          <button
            onClick={() => setAuthModal("login")}
            className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#1b2238] border border-[#263150] active:scale-95 transition hover:bg-[#202945]"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center shadow">
              <ArrowUpFromLine className="w-4 h-4 text-white" />
            </div>
            <span className="text-[11px] font-semibold mt-1 text-gray-200">
              Withdraw
            </span>
          </button>

          <button
            onClick={() => setChestOpen(true)}
            className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#1b2238] border border-[#263150] active:scale-95 transition hover:bg-[#202945] relative"
          >
            <span className="absolute -top-1 -right-1 px-1 bg-red-600 text-[9px] font-extrabold rounded-full">
              FREE
            </span>
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center shadow">
              <Gift className="w-4 h-4 text-black" />
            </div>
            <span className="text-[11px] font-semibold mt-1 text-gray-200">
              Rewards
            </span>
          </button>

          <button
            onClick={() => setActiveCategory("vip")}
            className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#1b2238] border border-[#263150] active:scale-95 transition hover:bg-[#202945]"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center shadow">
              <Crown className="w-4 h-4 text-white" />
            </div>
            <span className="text-[11px] font-semibold mt-1 text-gray-200">
              VIP Club
            </span>
          </button>
        </div>

        {/* Live Winners Real-Time Bar */}
        {currentWinner && (
          <div className="mx-3 my-2 p-2 rounded-xl bg-gradient-to-r from-amber-950/40 via-[#1f2842] to-amber-950/40 border border-amber-500/20 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-gray-400 text-[11px]">
                {currentWinner.user} won in{" "}
                <strong className="text-white">{currentWinner.game}</strong>
              </span>
            </div>
            <span className="font-extrabold text-amber-400">
              +{currentWinner.amount}
            </span>
          </div>
        )}

        {/* Game Categories Horizontal Scroll */}
        <div className="px-3 pt-2">
          <div className="flex gap-1.5 overflow-x-auto scrollbar-none pb-1">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-red-600 to-amber-500 text-white shadow-md scale-105"
                      : "bg-[#1b2238] text-gray-400 hover:text-white hover:bg-[#222a45]"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Games Grid */}
        <div className="p-3">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-black uppercase tracking-wider text-gray-300 flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-red-500" />
              Popular Games ({filteredGames.length})
            </h3>
            <span className="text-[10px] text-gray-500">Fast 24/7 Payouts</span>
          </div>

          <div className="grid grid-cols-3 gap-2.5">
            {filteredGames.map((game) => (
              <div
                key={game.id}
                onClick={() => setAuthModal("login")}
                className="group relative rounded-xl overflow-hidden bg-[#1a2138] border border-[#263150] hover:border-amber-500/50 cursor-pointer transition active:scale-95 flex flex-col justify-between p-2 aspect-[4/5] shadow"
              >
                {/* Background Gradient card */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${game.bg} opacity-50 group-hover:opacity-75 transition`}
                />

                {/* Badge Tag */}
                <div className="relative z-10 flex justify-between items-start">
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-black bg-black/60 backdrop-blur-sm text-yellow-300">
                    {game.tag}
                  </span>
                  <span className="text-[10px] font-extrabold text-amber-300">
                    {game.multiplier}
                  </span>
                </div>

                {/* Game Title & Provider */}
                <div className="relative z-10">
                  <p className="text-[9px] text-gray-300 font-medium truncate">
                    {game.provider}
                  </p>
                  <h4 className="text-xs font-extrabold text-white leading-tight truncate group-hover:text-yellow-300 transition">
                    {game.title}
                  </h4>
                  <div className="mt-1 w-full py-1 text-[10px] font-bold text-center bg-yellow-400 hover:bg-yellow-300 text-black rounded-lg shadow">
                    PLAY
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Gift Box Button */}
        <button
          onClick={() => setChestOpen(true)}
          className="fixed bottom-20 right-4 z-20 w-14 h-14 rounded-full bg-gradient-to-r from-red-600 to-amber-500 p-1 shadow-2xl active:scale-90 transition hover:scale-105 animate-pulse"
        >
          <img
            src="/pakvip/images/chest_btn-DT0hDMLl.png"
            alt="Treasure Chest"
            className="w-full h-full object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </button>

        {/* Bottom App Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 z-30 flex justify-center bg-[#101424]/95 backdrop-blur-lg border-t border-[#222a40]">
          <div className="w-full max-w-md grid grid-cols-5 py-2 px-1 text-center">
            <button
              onClick={() => setActiveTab("home")}
              className={`flex flex-col items-center py-1 transition ${
                activeTab === "home" ? "text-amber-400" : "text-gray-400 hover:text-gray-200"
              }`}
            >
              <Home className="w-5 h-5" />
              <span className="text-[10px] font-bold mt-0.5">Home</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("promo");
                setChestOpen(true);
              }}
              className={`flex flex-col items-center py-1 transition ${
                activeTab === "promo" ? "text-amber-400" : "text-gray-400 hover:text-gray-200"
              }`}
            >
              <Gift className="w-5 h-5" />
              <span className="text-[10px] font-bold mt-0.5">Promos</span>
            </button>

            <button
              onClick={() => setAuthModal("login")}
              className="flex flex-col items-center -mt-4 py-1"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-400 to-red-500 flex items-center justify-center shadow-xl border-2 border-[#151a2d] active:scale-95 transition">
                <Wallet className="w-5 h-5 text-black" />
              </div>
              <span className="text-[10px] font-black text-yellow-300 mt-0.5">
                Deposit
              </span>
            </button>

            <button
              onClick={() => {
                setActiveTab("support");
                alert("24/7 Customer Service: WhatsApp & Live Chat ready!");
              }}
              className={`flex flex-col items-center py-1 transition ${
                activeTab === "support" ? "text-amber-400" : "text-gray-400 hover:text-gray-200"
              }`}
            >
              <Headphones className="w-5 h-5" />
              <span className="text-[10px] font-bold mt-0.5">Support</span>
            </button>

            <button
              onClick={() => setAuthModal("login")}
              className={`flex flex-col items-center py-1 transition ${
                activeTab === "profile" ? "text-amber-400" : "text-gray-400 hover:text-gray-200"
              }`}
            >
              <User className="w-5 h-5" />
              <span className="text-[10px] font-bold mt-0.5">Account</span>
            </button>
          </div>
        </nav>

        {/* Lucky Chest Popup Modal */}
        {chestOpen && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="w-full max-w-xs bg-[#161d31] rounded-2xl border border-amber-500/40 p-5 text-center relative shadow-2xl">
              <button
                onClick={() => {
                  setChestOpen(false);
                  setChestClaimed(false);
                }}
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-lg font-black text-yellow-300">
                {chestClaimed ? "REWARD CLAIMED!" : "LUCKY TREASURE CHEST"}
              </h3>
              <p className="text-xs text-gray-300 mt-1">
                {chestClaimed
                  ? "PKR 500 has been added to your balance!"
                  : "Tap the chest to open your daily free reward!"}
              </p>

              <div className="my-5 flex justify-center">
                <img
                  src={
                    chestClaimed
                      ? "/pakvip/images/box_open-9_JHXIXH.png"
                      : "/pakvip/images/box_closed-CHcnurtG.png"
                  }
                  alt="Chest"
                  className="w-36 h-36 object-contain animate-pulse"
                />
              </div>

              {!chestClaimed ? (
                <button
                  onClick={() => {
                    setChestClaimed(true);
                    setBalance((b) => b + 500);
                  }}
                  className="w-full py-2.5 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-black font-black text-sm rounded-xl shadow-lg active:scale-95 transition"
                >
                  OPEN CHEST (FREE)
                </button>
              ) : (
                <button
                  onClick={() => {
                    setChestOpen(false);
                    setChestClaimed(false);
                  }}
                  className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-black text-sm rounded-xl shadow active:scale-95 transition"
                >
                  GREAT! CONTINUE PLAYING
                </button>
              )}
            </div>
          </div>
        )}

        {/* Login / Register Modal */}
        {authModal && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="w-full max-w-xs bg-[#161d31] rounded-2xl border border-red-500/40 p-5 shadow-2xl relative">
              <button
                onClick={() => setAuthModal(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex justify-center mb-3">
                <img
                  src="/pakvip/images/icon-192x192.png"
                  alt="Pakvip"
                  className="w-12 h-12 rounded-full ring-2 ring-amber-400"
                />
              </div>

              <h3 className="text-center font-black text-lg text-white">
                {authModal === "login" ? "Pakvip Login" : "Register Account"}
              </h3>
              <p className="text-center text-xs text-gray-400 mt-0.5 mb-4">
                Play securely with JazzCash & EasyPaisa
              </p>

              <div className="space-y-3">
                <div>
                  <label className="text-[11px] font-bold text-gray-300 block mb-1">
                    Mobile Number (Pakistan +92)
                  </label>
                  <input
                    type="tel"
                    placeholder="300 1234567"
                    className="w-full px-3 py-2 bg-[#0e1220] border border-[#2b3552] rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-gray-300 block mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full px-3 py-2 bg-[#0e1220] border border-[#2b3552] rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <button
                  onClick={() => {
                    alert("Account connected successfully!");
                    setAuthModal(null);
                  }}
                  className="w-full py-2.5 mt-2 bg-gradient-to-r from-red-600 via-rose-600 to-amber-500 text-white font-black text-xs rounded-xl shadow-lg active:scale-95 transition"
                >
                  {authModal === "login" ? "SIGN IN" : "REGISTER NOW"}
                </button>

                <div className="text-center text-[11px] text-gray-400 mt-2">
                  {authModal === "login" ? (
                    <p>
                      No account?{" "}
                      <button
                        onClick={() => setAuthModal("register")}
                        className="text-amber-400 font-bold underline"
                      >
                        Register Free
                      </button>
                    </p>
                  ) : (
                    <p>
                      Already registered?{" "}
                      <button
                        onClick={() => setAuthModal("login")}
                        className="text-amber-400 font-bold underline"
                      >
                        Login
                      </button>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
