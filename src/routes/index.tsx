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
  Sparkles,
  Flame,
  X,
  ExternalLink,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pakvip - Best Online Casino in Pakistan | Free Bonus Games" },
      {
        name: "description",
        content:
          "Welcome to Pakvip, Pakistan's leading online casino. Play Aviator, Slots, Fishing, and Live Casino with fast JazzCash and EasyPaisa withdrawals.",
      },
      { property: "og:title", content: "Pakvip - Best Online Casino in Pakistan" },
      {
        property: "og:description",
        content: "Play online casino games with fast withdrawals and daily rewards.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "icon", href: "/pakvip/images/favico.ico" }],
  }),
  component: PakvipRealHome,
});

// Category definition matching live site
const CATEGORIES = [
  { id: "hot", labelUrdu: "Hot Slots", labelEn: "Hot Slots", icon: "🎰", bg: "from-amber-600 to-yellow-800" },
  { id: "lottery", labelUrdu: "Lottery", labelEn: "Lottery", icon: "🎱", bg: "from-orange-600 to-red-800" },
  { id: "original", labelUrdu: "Original", labelEn: "Original", icon: "✈️", bg: "from-red-600 to-rose-900" },
  { id: "slots", labelUrdu: "Slots", labelEn: "Slots", icon: "👑", bg: "from-blue-600 to-indigo-900" },
  { id: "fishing", labelUrdu: "Fishing", labelEn: "Fishing", icon: "🐉", bg: "from-teal-600 to-cyan-900" },
];

// Exact games from the live Pakvip interface
const FEATURED_GAMES = [
  {
    id: 1,
    title: "Aviator",
    type: "CRASH",
    winRate: "97.33%",
    bg: "from-[#8b001a] via-[#590010] to-[#260007]",
    iconType: "aviator1",
  },
  {
    id: 2,
    title: "AVIATOR",
    type: "ORIGINAL",
    winRate: "96.71%",
    bg: "from-[#a30b2e] via-[#6e0019] to-[#38000a]",
    iconType: "aviator2",
  },
  {
    id: 3,
    title: "Chicken Road 2",
    type: "SLOT",
    winRate: "98.15%",
    bg: "from-[#ff6b2b] via-[#bd3c07] to-[#451200]",
    hasBonus: true,
    iconType: "chicken2",
  },
  {
    id: 4,
    title: "Chicken Road",
    type: "CASUAL",
    winRate: "97.80%",
    bg: "from-[#4ade80] via-[#16a34a] to-[#14532d]",
    iconType: "chicken1",
  },
  {
    id: 5,
    title: "Jackpot Fishing",
    type: "JILI",
    winRate: "96.90%",
    bg: "from-[#0284c7] via-[#0369a1] to-[#082f49]",
    iconType: "shark",
  },
  {
    id: 6,
    title: "Royal Fishing",
    type: "JDB",
    winRate: "98.40%",
    bg: "from-[#06b6d4] via-[#0891b2] to-[#164e63]",
    iconType: "dragon",
  },
];

function PakvipRealHome() {
  const [activeCategory, setActiveCategory] = useState("hot");
  const [activeNav, setActiveNav] = useState("games");
  const [authModal, setAuthModal] = useState<"login" | "register" | null>(null);
  const [lang, setLang] = useState<"ur" | "en">("ur");
  const [detailsOpen, setDetailsOpen] = useState(false);

  // Marquee announcement text
  const marqueeText =
    lang === "ur"
      ? "🔥 پاک وی آئی پی میں خوش آمدید! پاکستان کا نمبر 1 آن لائن کیسینو - نیا پلیئر کیش بونس اور روزانہ لکی چیسٹ ابھی حاصل کریں!"
      : "🔥 Welcome to Pakvip! Pakistan's No. 1 Online Casino - Claim 100% First Deposit Bonus & Daily Lucky Chest Rewards!";

  return (
    <div className="min-h-screen bg-[#0d0e17] text-white flex justify-center font-sans antialiased selection:bg-[#3ae48e] selection:text-black">
      {/* Mobile-first centered shell */}
      <div className="w-full max-w-[430px] min-h-screen bg-[#141624] flex flex-col pb-24 relative shadow-2xl border-x border-[#212438]">
        {/* Top Header */}
        <header className="sticky top-0 z-40 bg-[#141624]/95 backdrop-blur-md px-3 py-2.5 flex items-center justify-between border-b border-[#212438]">
          {/* Logo */}
          <div className="flex items-center gap-1.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-emerald-600 flex items-center justify-center shadow-lg font-black text-black text-sm">
              RV
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-400 to-amber-300 leading-none">
                PAKVIP
              </span>
              <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">
                Official VIP
              </span>
            </div>
          </div>

          {/* Language Switcher + Auth Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang((l) => (l === "ur" ? "en" : "ur"))}
              className="px-2 py-1 rounded bg-[#202438] text-[10px] font-bold text-gray-300 hover:text-white border border-[#2d334d]"
            >
              {lang === "ur" ? "English" : "اردو"}
            </button>

            {/* Login button (Bright Lime Green) */}
            <button
              onClick={() => setAuthModal("login")}
              className="px-3 py-1.5 rounded-full bg-[#3ae48e] hover:bg-[#33d480] text-black font-extrabold text-xs shadow-md transition active:scale-95"
            >
              {lang === "ur" ? "لاگ ان کریں" : "Login"}
            </button>

            {/* Register button (Dark Teal Border) */}
            <button
              onClick={() => setAuthModal("register")}
              className="px-3 py-1.5 rounded-full bg-[#162933] border border-teal-500/70 hover:border-teal-400 text-teal-300 font-extrabold text-xs transition active:scale-95"
            >
              {lang === "ur" ? "رجسٹر کریں-" : "Register"}
            </button>
          </div>
        </header>

        {/* Hero Banner: New Player Rewards */}
        <div className="p-3">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#1b1c3b] via-[#101229] to-[#0c0d1c] border border-indigo-500/30 p-3.5 shadow-2xl">
            {/* Ambient glows */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-purple-600/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-amber-500/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              {/* Header inside banner */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span className="w-5 h-5 rounded bg-teal-400 text-black font-black text-xs flex items-center justify-center">
                    RV
                  </span>
                  <span className="font-extrabold text-xs text-teal-300 tracking-wider">
                    PAKVIP
                  </span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40">
                  PAKISTAN
                </span>
              </div>

              <h2 className="text-xl font-black italic tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-amber-300 mt-1 drop-shadow-md">
                NEW PLAYER REWARDS
              </h2>
              <p className="text-[11px] font-bold text-amber-400 tracking-wider">
                PLAY MORE • EARN MORE • WIN BIG
              </p>

              {/* 3 VIP Tables matching the live screenshot */}
              <div className="grid grid-cols-3 gap-1.5 mt-2.5 text-center">
                {/* 1 Day */}
                <div className="rounded-lg bg-[#192242]/90 border border-blue-500/40 p-1.5 shadow">
                  <div className="text-[10px] font-black text-cyan-300 bg-blue-900/60 rounded py-0.5 mb-1">
                    👤 1 DAY
                  </div>
                  <div className="text-[9px] text-gray-300 leading-tight">
                    DEPOSIT <br />
                    <strong className="text-yellow-300">≥ 1,000 PKR</strong>
                  </div>
                  <div className="mt-1 pt-1 border-t border-blue-500/20 text-[9px] text-teal-300 font-bold">
                    REWARD +80
                  </div>
                </div>

                {/* 7 Days */}
                <div className="rounded-lg bg-[#2e1d42]/90 border border-amber-500/40 p-1.5 shadow">
                  <div className="text-[10px] font-black text-amber-300 bg-amber-900/60 rounded py-0.5 mb-1">
                    👤 7 DAYS
                  </div>
                  <div className="text-[9px] text-gray-300 leading-tight">
                    DEPOSIT <br />
                    <strong className="text-yellow-300">≥ 5,000 PKR</strong>
                  </div>
                  <div className="mt-1 pt-1 border-t border-amber-500/20 text-[9px] text-amber-300 font-bold">
                    REWARD +300
                  </div>
                </div>

                {/* 15 Days */}
                <div className="rounded-lg bg-[#3b1735]/90 border border-purple-500/40 p-1.5 shadow">
                  <div className="text-[10px] font-black text-pink-300 bg-purple-900/60 rounded py-0.5 mb-1">
                    👤 15 DAYS
                  </div>
                  <div className="text-[9px] text-gray-300 leading-tight">
                    DEPOSIT <br />
                    <strong className="text-yellow-300">≥ 20,000 PKR</strong>
                  </div>
                  <div className="mt-1 pt-1 border-t border-purple-500/20 text-[9px] text-pink-300 font-bold">
                    REWARD +1,000
                  </div>
                </div>
              </div>

              {/* Bottom bar inside hero */}
              <div className="mt-2.5 py-1 px-2 rounded-lg bg-black/60 border border-yellow-500/30 flex items-center justify-between text-[10px]">
                <span className="font-extrabold text-yellow-300 flex items-center gap-1">
                  🎁 COMPLETE CHALLENGES
                </span>
                <span className="text-white font-bold">UNLOCK BIGGER REWARDS!</span>
              </div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center items-center gap-1.5 mt-2.5">
              <span className="w-4 h-1.5 rounded-full bg-cyan-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
              <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
              <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
              <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
              <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
            </div>
          </div>
        </div>

        {/* Marquee Notice Bar with Lime "تفصیل" Button */}
        <div className="px-3">
          <div className="bg-[#1b1e2e] rounded-full px-3 py-1.5 flex items-center justify-between border border-[#2b3047] shadow-inner">
            <Volume2 className="w-4 h-4 text-cyan-400 shrink-0" />
            <div className="overflow-hidden whitespace-nowrap text-[11px] text-gray-300 mx-2 w-full">
              <span className="inline-block animate-pulse">{marqueeText}</span>
            </div>
            <button
              onClick={() => setDetailsOpen(true)}
              className="px-3 py-1 rounded-full bg-[#3ae48e] hover:bg-[#34d480] text-black font-extrabold text-[11px] flex items-center gap-1 shrink-0 active:scale-95 shadow transition"
            >
              <Flame className="w-3 h-3 fill-black" />
              {lang === "ur" ? "تفصیل" : "Details"}
            </button>
          </div>
        </div>

        {/* Category Circular Badges */}
        <div className="px-3 mt-3.5">
          <div className="flex items-center justify-between gap-1 overflow-x-auto pb-1 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="flex flex-col items-center group active:scale-95 transition"
                >
                  {/* Round badge with golden ring */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center p-0.5 transition-all shadow-lg ${
                      isSelected
                        ? "bg-gradient-to-b from-yellow-300 via-amber-500 to-amber-700 ring-2 ring-cyan-400"
                        : "bg-gradient-to-b from-[#3a4059] to-[#1c2030] group-hover:from-amber-400"
                    }`}
                  >
                    <div
                      className={`w-full h-full rounded-full bg-gradient-to-br ${cat.bg} flex items-center justify-center text-xl shadow-inner`}
                    >
                      {cat.icon}
                    </div>
                  </div>
                  <span
                    className={`text-[11px] font-bold mt-1 tracking-tight ${
                      isSelected ? "text-amber-300" : "text-gray-300"
                    }`}
                  >
                    {lang === "ur" ? cat.labelUrdu : cat.labelEn}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Section Heading: "تجویز کردہ گیمز" (Recommended Games) */}
        <div className="px-3 mt-4 flex items-center gap-2">
          <span className="w-1 h-4 rounded-full bg-teal-400" />
          <div>
            <h3 className="font-extrabold text-sm text-white">
              {lang === "ur" ? "تجویز کردہ گیمز" : "Recommended Games"}
            </h3>
            <p className="text-[10px] text-gray-400">
              {lang === "ur"
                ? "کھلاڑیوں کے درمیان سب سے زیادہ مقبول الیکٹرانک گیمز"
                : "Most popular electronic games among Pakistani players"}
            </p>
          </div>
        </div>

        {/* Game Cards Grid (3 Columns with Win Rates) */}
        <div className="grid grid-cols-3 gap-2.5 px-3 mt-2.5">
          {FEATURED_GAMES.map((game) => (
            <div
              key={game.id}
              onClick={() => setAuthModal("login")}
              className="flex flex-col rounded-xl overflow-hidden bg-[#181b2c] border border-[#272c45] shadow-lg cursor-pointer hover:border-teal-400/60 active:scale-95 transition group"
            >
              {/* Game Poster Art */}
              <div
                className={`relative aspect-[4/5] bg-gradient-to-br ${game.bg} p-2 flex flex-col justify-between items-center text-center overflow-hidden`}
              >
                {/* Floating tags */}
                <div className="w-full flex justify-between items-center">
                  <span className="text-[8px] font-black px-1 py-0.5 rounded bg-black/60 text-yellow-300">
                    {game.type}
                  </span>
                  {game.hasBonus && (
                    <span className="text-[8px] font-black px-1 py-0.5 rounded bg-red-600 text-white animate-pulse">
                      GIFT
                    </span>
                  )}
                </div>

                {/* Central Icon / Artwork */}
                <div className="my-auto transform group-hover:scale-110 transition duration-300">
                  {game.iconType === "aviator1" && (
                    <div className="flex flex-col items-center">
                      <span className="text-3xl drop-shadow-lg">🛩️</span>
                      <span className="font-black italic text-sm text-red-400 tracking-wider">
                        Aviator
                      </span>
                    </div>
                  )}

                  {game.iconType === "aviator2" && (
                    <div className="flex flex-col items-center">
                      <span className="text-2xl opacity-90">✈️</span>
                      <span className="font-extrabold text-xs text-white tracking-widest mt-1">
                        AVIATOR
                      </span>
                    </div>
                  )}

                  {game.iconType === "chicken2" && (
                    <div className="flex flex-col items-center">
                      <span className="text-3xl drop-shadow-md">🐔</span>
                      <span className="font-black text-[10px] text-yellow-300 leading-none mt-1">
                        CHICKEN ROAD 2
                      </span>
                    </div>
                  )}

                  {game.iconType === "chicken1" && (
                    <div className="flex flex-col items-center">
                      <span className="text-3xl drop-shadow-md">🐣</span>
                      <span className="font-black text-[10px] text-white leading-none mt-1">
                        CHICKEN ROAD
                      </span>
                    </div>
                  )}

                  {game.iconType === "shark" && (
                    <div className="flex flex-col items-center">
                      <span className="text-3xl drop-shadow-md">🦈</span>
                      <span className="font-black text-[10px] text-cyan-200 leading-none mt-1">
                        JACKPOT FISHING
                      </span>
                    </div>
                  )}

                  {game.iconType === "dragon" && (
                    <div className="flex flex-col items-center">
                      <span className="text-3xl drop-shadow-md">🐲</span>
                      <span className="font-black text-[10px] text-teal-200 leading-none mt-1">
                        ROYAL FISHING
                      </span>
                    </div>
                  )}
                </div>

                {/* Subtitle / CTA */}
                <span className="text-[9px] font-bold text-gray-200 bg-black/40 px-2 py-0.5 rounded-full">
                  PLAY NOW
                </span>
              </div>

              {/* Exact Teal Win Rate Badge from live site */}
              <div className="bg-[#194042] border-t border-teal-500/30 px-1.5 py-1 flex items-center justify-between text-[10px] text-teal-300 font-extrabold">
                <span>{lang === "ur" ? "جیتنے کا" : "Win Rate"}</span>
                <span className="text-white">{game.winRate}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Right Widgets (Dragon VIP & WhatsApp CS) */}
        <div className="fixed right-3 bottom-24 z-30 flex flex-col items-center gap-2">
          {/* Dragon VIP badge */}
          <button
            onClick={() => setAuthModal("login")}
            className="w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-300 p-0.5 shadow-2xl active:scale-95 transition hover:scale-105"
          >
            <div className="w-full h-full rounded-full bg-[#122622] flex items-center justify-center text-xl">
              🐲
            </div>
          </button>

          {/* WhatsApp / CS Chat Bubble */}
          <button
            onClick={() =>
              alert("Pakvip 24/7 Official Support is ready to assist you!")
            }
            className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-2xl hover:scale-105 active:scale-95 transition animate-pulse"
          >
            <MessageCircle className="w-6 h-6 fill-white" />
          </button>
        </div>

        {/* Floating "ہوم اسکرین میں شامل کریں" (Add to Home Screen) Banner */}
        <div className="fixed bottom-16 left-0 right-0 z-30 flex justify-center px-4 pointer-events-none">
          <button
            onClick={() =>
              alert("To install Pakvip: Tap browser menu (⋮) -> 'Add to Home screen'")
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

        {/* Bottom App Navigation Bar (Exact 5 items from screenshot) */}
        <nav className="fixed bottom-0 left-0 right-0 z-40 flex justify-center bg-[#0d0e17]/95 backdrop-blur-md border-t border-[#202438]">
          <div className="w-full max-w-[430px] grid grid-cols-5 py-2 px-1 text-center items-center">
            {/* Promotion */}
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

            {/* Activity / Rewards */}
            <button
              onClick={() => setActiveNav("activity")}
              className={`flex flex-col items-center ${
                activeNav === "activity" ? "text-emerald-400" : "text-gray-400"
              }`}
            >
              <Gift className="w-5 h-5" />
              <span className="text-[10px] font-bold mt-0.5">
                {lang === "ur" ? "سرگرمی" : "Activity"}
              </span>
            </button>

            {/* Center Big Game Controller Button (Lime green) */}
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
              onClick={() => setAuthModal("login")}
              className={`flex flex-col items-center ${
                activeNav === "wallet" ? "text-emerald-400" : "text-gray-400"
              }`}
            >
              <Wallet className="w-5 h-5" />
              <span className="text-[10px] font-bold mt-0.5">
                {lang === "ur" ? "پرس" : "Wallet"}
              </span>
            </button>

            {/* Account / Profile */}
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

        {/* Details Dialog Modal */}
        {detailsOpen && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="w-full max-w-xs bg-[#171a2a] rounded-2xl border border-teal-500/40 p-4 shadow-2xl relative text-center">
              <button
                onClick={() => setDetailsOpen(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-base font-black text-amber-300">
                {lang === "ur" ? "خصوصی رعایت اور تفصیلات" : "Pakvip Official Notice"}
              </h3>
              <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                {lang === "ur"
                  ? "پاک وی آئی پی میں ڈپازٹ اور نکلوانا 24 گھنٹے دستیاب ہے۔ ایزی پیسہ اور جاز کیش کی تصدیق صرف 2 منٹ میں مکمل ہو جاتی ہے۔"
                  : "Instant 24/7 JazzCash & EasyPaisa deposits & withdrawals with zero commission fee."}
              </p>
              <button
                onClick={() => setDetailsOpen(false)}
                className="mt-4 w-full py-2 bg-[#3ae48e] text-black font-extrabold text-xs rounded-xl"
              >
                OK
              </button>
            </div>
          </div>
        )}

        {/* Login / Register Dialog */}
        {authModal && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="w-full max-w-xs bg-[#161928] rounded-2xl border border-teal-500/40 p-5 shadow-2xl relative">
              <button
                onClick={() => setAuthModal(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-600 flex items-center justify-center font-black text-black text-lg">
                  RV
                </div>
              </div>

              <h3 className="text-center font-black text-lg text-white">
                {authModal === "login"
                  ? lang === "ur"
                    ? "لاگ ان کریں"
                    : "Pakvip Login"
                  : lang === "ur"
                    ? "رجسٹر کریں"
                    : "Create Account"}
              </h3>
              <p className="text-center text-[11px] text-gray-400 mb-4">
                JazzCash • EasyPaisa • Instant Payouts
              </p>

              <div className="space-y-3">
                <div>
                  <label className="text-[11px] font-bold text-gray-300 block mb-1">
                    {lang === "ur" ? "موبائل نمبر" : "Phone Number (+92)"}
                  </label>
                  <input
                    type="tel"
                    placeholder="300 1234567"
                    className="w-full px-3 py-2 bg-[#0e101a] border border-[#2b3047] rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-teal-400"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-gray-300 block mb-1">
                    {lang === "ur" ? "پاس ورڈ" : "Password"}
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-3 py-2 bg-[#0e101a] border border-[#2b3047] rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-teal-400"
                  />
                </div>

                <button
                  onClick={() => {
                    alert("Welcome to Pakvip!");
                    setAuthModal(null);
                  }}
                  className="w-full py-2.5 mt-2 bg-[#3ae48e] text-black font-black text-xs rounded-xl shadow-lg active:scale-95 transition"
                >
                  {authModal === "login"
                    ? lang === "ur"
                      ? "لاگ ان"
                      : "LOGIN"
                    : lang === "ur"
                      ? "اکاؤنٹ بنائیں"
                      : "REGISTER"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
