import { createFileRoute } from '@tanstack/react-router'
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
  Copy,
  Share2,
  Users,
  Calendar,
  CreditCard,
  Lock,
  ArrowDownCircle,
  ArrowUpCircle,
  Clock,
  LogOut,
  RefreshCw,
  QrCode,
  DollarSign,
  Sparkles,
  Download,
  Smartphone,
  Search,
  Crown,
  ChevronDown,
  Check
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WinZO - Pakistan's #1 Online Casino & Gaming Platform" },
      {
        name: "description",
        content: "Official WinZO: Pakistan's #1 Online Casino, Live Win Go, Lottery, Aviator, JILI Slots, JazzCash & EasyPaisa 24/7 Fast Payouts.",
      },
      {
        property: "og:title",
        content: "WinZO - Pakistan's #1 Online Casino & Gaming Platform",
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
  component: WinzoApp,
});

// Authentic pakvip21.com Theme Colors
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

// 2. Top Games
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
    provider: "WinZO",
    rtp: "98.90%",
    hot: true,
    img: "https://ossimg.pakvipacting.com/Pakvip/lotterycategory/lotterycategory_202608101818434tdn.png",
  },
  {
    id: "k3-lottery",
    title: "K3 Lotre",
    provider: "WinZO",
    rtp: "98.30%",
    img: "https://ossimg.pakvipacting.com/Pakvip/lotterycategory/lotterycategory_20260810181852r5xt.png",
  },
  {
    id: "5d-lottery",
    title: "5D Lotre",
    provider: "WinZO",
    rtp: "98.15%",
    img: "https://ossimg.pakvipacting.com/Pakvip/lotterycategory/lotterycategory_202608101819028h63.png",
  },
  {
    id: "trx-wingo",
    title: "Trx Win Go",
    provider: "WinZO",
    rtp: "98.70%",
    hot: true,
    img: "https://ossimg.pakvipacting.com/Pakvip/lotterycategory/lotterycategory_20260810181917mlmi.png",
  },
  {
    id: "motorace",
    title: "MotoRace",
    provider: "WinZO",
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
  { user: "92300***781", game: "Aviator", amount: "Rs 1,240,500", time: "Just now" },
  { user: "Ali_Khan***92", game: "Super Ace", amount: "Rs 48,200", time: "1m ago" },
  { user: "92345***824", game: "Win Go 30s", amount: "Rs 350,000", time: "2m ago" },
  { user: "Malik***110", game: "Fortune Gems 2", amount: "Rs 18,900", time: "3m ago" },
  { user: "92312***993", game: "Space XY", amount: "Rs 92,600", time: "4m ago" },
  { user: "Farhan***567", game: "Cai Shen Fishing", amount: "Rs 64,000", time: "5m ago" },
  { user: "92333***812", game: "Chicken Road 2", amount: "Rs 115,000", time: "6m ago" },
  { user: "Raja***404", game: "Boxing King", amount: "Rs 27,800", time: "7m ago" },
];


export function WinzoApp() {
  // Navigation Tabs: home | activity | promo | wallet | account
  const [activeTab, setActiveTab] = useState<"home" | "activity" | "promo" | "wallet" | "account">("home");
  const [activeBanner, setActiveBanner] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("popular");
  const [slotVendor, setSlotVendor] = useState("ALL");

  // User Local Storage Wallet (with pakvip_user key & migration from winzo_play_user)
  const [user, setUser] = useState<{ phone: string; balance: number; vip: number } | null>(null);
  
  // Modals
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [showChestModal, setShowChestModal] = useState(false);
  const [showTurntableModal, setShowTurntableModal] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [showNoticeModal, setShowNoticeModal] = useState(false);
  const [chestOpened, setChestOpened] = useState(false);
  const [chestReward, setChestReward] = useState(0);

  // Active Playable Game Modal
  const [activeGame, setActiveGame] = useState<GameItem | null>(null);

  // Progressive Jackpot live ticker
  const [jackpot, setJackpot] = useState(88492150.8);

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

  // Turntable State
  const [turntableSpinning, setTurntableSpinning] = useState(false);
  const [turntableAngle, setTurntableAngle] = useState(0);
  const [turntablePrize, setTurntablePrize] = useState<string | null>(null);

  // Deposit Form State
  const [depositAmount, setDepositAmount] = useState(1000);
  const [depositMethod, setDepositMethod] = useState<"jazzcash" | "easypaisa" | "bank" | "usdt">("jazzcash");
  const [depositTid, setDepositTid] = useState("");
  const [depositSuccessMsg, setDepositSuccessMsg] = useState("");

  // Activity Tab State: Gift Code & Attendance
  const [giftCode, setGiftCode] = useState("");
  const [giftClaimMsg, setGiftClaimMsg] = useState("");
  const [attendanceDay, setAttendanceDay] = useState(1);
  const [attendanceClaimed, setAttendanceClaimed] = useState(false);

  // Wallet Tab Sub-tabs
  const [walletSubTab, setWalletSubTab] = useState<"deposit" | "withdraw" | "records">("deposit");
  const [withdrawAmount, setWithdrawAmount] = useState(1000);
  const [withdrawMethod, setWithdrawMethod] = useState<"jazzcash" | "easypaisa">("jazzcash");
  const [withdrawAccountTitle, setWithdrawAccountTitle] = useState("");
  const [withdrawPhone, setWithdrawPhone] = useState("");
  const [withdrawMsg, setWithdrawMsg] = useState("");

  // Toast / Copy notification
  const [copyToast, setCopyToast] = useState("");

  // Transactions Log
  const [transactions, setTransactions] = useState<
    { id: string; type: "Deposit" | "Withdraw" | "Win"; amount: number; time: string; status: string }[]
  >([
    { id: "TX984102", type: "Deposit", amount: 1000, time: "2026-11-25 15:40", status: "Success" },
    { id: "TX984101", type: "Win", amount: 2400, time: "2026-11-25 14:12", status: "Completed" },
  ]);

  const triggerToast = (msg: string) => {
    setCopyToast(msg);
    setTimeout(() => setCopyToast(""), 2500);
  };

  useEffect(() => {
    // Check pakvip_user first, fallback to winzo_play_user
    const saved = localStorage.getItem("winzo_user") || localStorage.getItem("pakvip_user") || localStorage.getItem("winzo_play_user");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setUser(parsed);
        localStorage.setItem("winzo_user", JSON.stringify(parsed));
      } catch (e) {}
    } else {
      const defaultUser = { phone: "03001234567", balance: 5000, vip: 1 };
      setUser(defaultUser);
      localStorage.setItem("winzo_user", JSON.stringify(defaultUser));
    }
  }, []);

  const saveUser = (updated: { phone: string; balance: number; vip: number }) => {
    setUser(updated);
    localStorage.setItem("winzo_user", JSON.stringify(updated));
  };

  // Carousel timer
  useEffect(() => {
    const t = setInterval(() => setActiveBanner((prev) => (prev + 1) % 2), 4000);
    return () => clearInterval(t);
  }, []);

  // Progressive Jackpot incrementer
  useEffect(() => {
    const t = setInterval(() => {
      setJackpot((prev) => +(prev + (Math.random() * 0.4 + 0.1)).toFixed(2));
    }, 1200);
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

  // Lucky Turntable Spin
  const spinTurntable = () => {
    if (turntableSpinning || !user) return;
    setTurntableSpinning(true);
    setTurntablePrize(null);
    const prizes = [
      { label: "Rs 100", amount: 100 },
      { label: "Rs 200", amount: 200 },
      { label: "Rs 500", amount: 500 },
      { label: "Rs 1,000", amount: 1000 },
      { label: "Rs 50", amount: 50 },
      { label: "Rs 2,000", amount: 2000 },
      { label: "Rs 300", amount: 300 },
      { label: "Rs 5,000", amount: 5000 },
    ];
    const pickedIdx = Math.floor(Math.random() * prizes.length);
    const degrees = 360 * 5 + (pickedIdx * 45) + 22.5;
    setTurntableAngle((prev) => prev + degrees);

    setTimeout(() => {
      setTurntableSpinning(false);
      const won = prizes[pickedIdx];
      setTurntablePrize(won.label);
      saveUser({ ...user, balance: user.balance + won.amount });
    }, 3800);
  };

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

  // 3-Column Poster Card Component (Pakvip21 exact 124x168)
  const GameCard = ({ game }: { game: GameItem }) => (
    <div
      onClick={() => setActiveGame(game)}
      className="group cursor-pointer rounded-xl overflow-hidden border transition-all duration-200 hover:scale-[1.03] active:scale-95 flex flex-col justify-between"
      style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#161420]">
        <img
          src={game.img}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
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
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#15131E] shadow-lg"
            style={{ background: THEME.gradient }}
          >
            <Play className="w-4 h-4 fill-current ml-0.5" />
          </div>
        </div>
      </div>
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
      {/* Toast Notification */}
      {copyToast && (
        <div className="fixed top-14 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-[#17B15E] text-white text-xs font-bold shadow-xl flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>{copyToast}</span>
        </div>
      )}

      {/* ============================================================== */}
      {/* 1. TOP HEADER (pakvip21.com layout)                            */}
      {/* ============================================================== */}
      <header
        className="sticky top-0 z-40 px-3 py-2 flex items-center justify-between backdrop-blur-md border-b"
        style={{ backgroundColor: `${THEME.bgL2}F5`, borderColor: THEME.border }}
      >
        <div className="flex items-center gap-2">
          {/* WinZO Official Gaming Logo */}
          <div className="relative w-8 h-8 rounded-lg flex items-center justify-center p-0.5 bg-gradient-to-br from-[#FFDE30] via-[#21D9CC] to-[#BED921] shadow-[0_0_12px_rgba(255,222,48,0.35)]">
            <div className="w-full h-full rounded-[6px] bg-[#161420] flex items-center justify-center overflow-hidden p-1">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow">
                <defs>
                  <linearGradient id="winzoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFDE30" />
                    <stop offset="50%" stopColor="#21D9CC" />
                    <stop offset="100%" stopColor="#BED921" />
                  </linearGradient>
                  <linearGradient id="winzoPlay" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFDE30" />
                    <stop offset="100%" stopColor="#FFA500" />
                  </linearGradient>
                </defs>
                {/* Stylized geometric WinZO 'W' */}
                <path
                  d="M14 26 L28 76 L44 38 L52 56 L62 26"
                  fill="none"
                  stroke="url(#winzoGrad)"
                  strokeWidth="11"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Integrated dynamic Play triangle in the ZO spark */}
                <polygon
                  points="62,42 86,56 62,70"
                  fill="url(#winzoPlay)"
                />
                {/* Accent jewel */}
                <circle cx="86" cy="30" r="4.5" fill="#BED921" />
              </svg>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5 leading-none">
              <span className="font-black text-sm tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#FFDE30] via-[#21D9CC] to-[#BED921]">
                WinZO
              </span>
              <span className="text-[8px] px-1 py-0.2 rounded font-black bg-gradient-to-r from-[#FFDE30] to-[#BED921] text-[#15131E]">
                VIP
              </span>
            </div>
            <span className="text-[9px] text-[#9EA2A8] font-medium">Official Gaming Platform</span>
          </div>
        </div>

        {/* Right Section: Header Controls & Balance & Deposit */}
        <div className="flex items-center gap-1.5">
          {/* Quick CS Icon */}
          <button
            onClick={() => setShowSupportModal(true)}
            className="w-7 h-7 rounded-lg flex items-center justify-center text-[#21D9CC] border border-white/5 bg-[#282537] hover:bg-[#38374B] transition"
            title="24/7 Customer Support"
          >
            <Headphones className="w-3.5 h-3.5" />
          </button>

          {/* Quick Notice Bell */}
          <button
            onClick={() => setShowNoticeModal(true)}
            className="w-7 h-7 rounded-lg flex items-center justify-center text-[#BED921] border border-white/5 bg-[#282537] hover:bg-[#38374B] transition"
            title="Official Announcements"
          >
            <Bell className="w-3.5 h-3.5" />
          </button>

          {user ? (
            <>
              <div
                onClick={() => setShowDepositModal(true)}
                className="cursor-pointer px-2 py-1 rounded-lg border flex items-center gap-1.5 hover:border-[#21D9CC]/50 transition"
                style={{ backgroundColor: THEME.bgPill, borderColor: THEME.border }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#17B15E] animate-pulse" />
                <span className="text-xs font-bold text-[#E6EBF0] font-mono">
                  Rs {user.balance.toLocaleString()}
                </span>
                <RefreshCw
                  onClick={(e) => {
                    e.stopPropagation();
                    triggerToast("Balance refreshed!");
                  }}
                  className="w-2.5 h-2.5 text-[#9EA2A8] hover:text-[#21D9CC]"
                />
              </div>
              <button
                onClick={() => setShowDepositModal(true)}
                className="px-2.5 py-1.5 rounded-lg text-xs font-black text-[#15131E] shadow-sm hover:brightness-110 active:scale-95 transition"
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

      {/* ============================================================== */}
      {/* 2. TAB CONTENT SWITCHER                                        */}
      {/* ============================================================== */}
      <main className="max-w-md mx-auto px-2.5 pt-2">
        {/* ============================================================== */}
        {/* TAB 1: HOME SECTION                                           */}
        {/* ============================================================== */}
        {activeTab === "home" && (
          <div className="space-y-4">
            {/* Banner Carousel */}
            <section className="relative rounded-2xl overflow-hidden border shadow-lg" style={{ borderColor: THEME.border }}>
              <div className="relative h-40 w-full bg-[#110e1a]">
                {activeBanner === 0 ? (
                  <img
                    src="https://ossimg.pakvipacting.com/Pakvip/banner/Banner_20260823173234k1c5.png"
                    alt="PakVIP Featured Promotions"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src="https://ossimg.pakvipacting.com/Pakvip/banner/Banner_20260823172133g2ho.png"
                    alt="PakVIP First Recharge Bonus"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              {/* Quick VIP Tag */}
              <div className="absolute top-2 left-2 z-20">
                <span className="text-[9px] font-black px-2 py-0.5 rounded-full bg-[#15131E]/80 backdrop-blur-md border border-[#21D9CC]/50 text-[#21D9CC] flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" />
                  +100% First Deposit Bonus
                </span>
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

            {/* Notice Marquee */}
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
                  Welcome to WinZO Official Platform! Instant JazzCash & EasyPaisa deposits & withdrawals active 24/7 with zero fee. Download the WinZO app to claim Rs 500 bonus!
                </div>
              </div>
              <button
                onClick={() => setShowNoticeModal(true)}
                className="flex-shrink-0 px-2 py-0.5 rounded text-[10px] font-bold text-[#15131E]"
                style={{ background: THEME.gradient }}
              >
                Detail
              </button>
            </section>

            {/* 3D Category Bar (pakvip21 exact) */}
            <section className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      const el = document.getElementById(`sec-${cat.id}`);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`flex-shrink-0 flex flex-col items-center justify-center p-1.5 rounded-xl transition border min-w-[62px] ${
                      isSelected
                        ? "border-[#21D9CC] bg-[#21D9CC]/15 shadow-[0_0_10px_rgba(33,217,204,0.3)]"
                        : "border-transparent bg-[#201D2B] hover:border-white/10 active:scale-95"
                    }`}
                  >
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
                      {cat.label}
                    </span>
                  </button>
                );
              })}
            </section>

            {/* Super Progressive Jackpot Pool (pakvip21 bigaward) */}
            <section
              className="p-3 rounded-2xl border space-y-1 relative overflow-hidden bg-gradient-to-r from-[#201D2B] via-[#282537] to-[#201D2B]"
              style={{ borderColor: THEME.border }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Crown className="w-4 h-4 text-[#BED921] animate-bounce" />
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#BED921]">
                    Super Progressive Jackpot
                  </span>
                </div>
                <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-[#BED921]/20 text-[#BED921] font-bold">
                  LIVE POOL
                </span>
              </div>
              <div className="text-center py-1">
                <div className="font-mono font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#BED921] via-[#21D9CC] to-[#BED921] tracking-wider">
                  PKR {jackpot.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <p className="text-[9px] text-[#9EA2A8] mt-0.5">
                  Play any JILI Slot or Win Go round to qualify for the Mega Drop
                </p>
              </div>
            </section>

            {/* Section 1: Recommended Games */}
            <section id="sec-popular" className="space-y-2">
              <SectionHeader
                title="Recommended Games"
                subtitle="The most popular electronic games among Pakistani players"
              />
              <div className="grid grid-cols-3 gap-2">
                {RECOMMENDED_GAMES.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            </section>

            {/* Section 2: Top Games */}
            <section className="space-y-2">
              <SectionHeader title="Top Games" subtitle="Recently played and trending games" />
              <div className="grid grid-cols-3 gap-2">
                {TOP_GAMES.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            </section>

            {/* Section 3: Lottery */}
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

            {/* Section 4: Original (Mini Games) */}
            <section id="sec-original" className="space-y-2">
              <SectionHeader
                title="Original"
                subtitle="The games are independently developed by WinZO, fun, fair, and safe"
              />
              <div className="grid grid-cols-3 gap-2">
                {ORIGINAL_GAMES.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            </section>

            {/* Section 5: Slots */}
            <section id="sec-slots" className="space-y-2">
              <SectionHeader
                title="Slots"
                subtitle="Online real-time game dealers, all verified fair games"
              />
              {/* Vendor Filter Buttons */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
                {["ALL", "JILI", "BGAMING", "INOUT", "CQ9", "JDB", "TURBO", "PP"].map((prov) => (
                  <button
                    key={prov}
                    onClick={() => setSlotVendor(prov)}
                    className={`flex-shrink-0 text-[9px] font-mono font-bold px-2 py-0.5 rounded-md border transition ${
                      slotVendor === prov
                        ? "bg-[#21D9CC] text-[#15131E] border-transparent font-black"
                        : "bg-[#282537] text-[#9EA2A8] border-white/5 hover:text-[#E6EBF0]"
                    }`}
                  >
                    {prov}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-2">
                {SLOT_GAMES.filter((g) => slotVendor === "ALL" || g.provider.toUpperCase().includes(slotVendor)).map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            </section>

            {/* Section 6: Fishing */}
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

            {/* Section 7: Casino */}
            <section id="sec-casino" className="space-y-2">
              <SectionHeader title="Casino" subtitle="Real dealers, immersive experience" />
              <div className="grid grid-cols-3 gap-2">
                {CASINO_GAMES.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            </section>

            {/* Section 8: PVC */}
            <section id="sec-pvc" className="space-y-2">
              <SectionHeader title="PVC" subtitle="Traditional card games" moreCount={2} />
              <div className="grid grid-cols-3 gap-2">
                {PVC_GAMES.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            </section>

            {/* Section 9: Winning Information (pakvip21 winner.vue) */}
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
                <span className="text-[10px] text-[#21D9CC] font-mono font-bold">● Live Broadcast</span>
              </div>
              <div className="space-y-1.5">
                {LIVE_WINNERS.map((w, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2 rounded-xl text-xs border transition hover:border-[#21D9CC]/30"
                    style={{ backgroundColor: THEME.bgL3, borderColor: THEME.border }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black bg-gradient-to-br from-[#282537] to-[#15131E] border border-white/10 text-[#21D9CC]">
                        {idx + 1}
                      </div>
                      <div>
                        <div className="font-mono text-[11px] text-[#E6EBF0] font-semibold">{w.user}</div>
                        <div className="text-[9px] text-[#9EA2A8]">{w.game} • {w.time}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-[#BED921] font-mono">{w.amount}</div>
                      <span className="text-[8px] text-[#17B15E]">Paid to JazzCash/EP</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 10: Today's Earnings Chart (pakvip21 DailyProfitRank) */}
            <section
              className="rounded-2xl p-3.5 border space-y-3"
              style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Trophy className="w-4 h-4 text-[#BED921]" />
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#E6EBF0]">
                    Today's Earnings Ranking
                  </h3>
                </div>
                <span className="text-[10px] text-[#21D9CC] font-mono font-bold">Daily Profit</span>
              </div>

              {/* 3D Authentic Top 3 Podium */}
              <div className="grid grid-cols-3 gap-2 text-center pt-3 items-end">
                {/* Rank 2 (Left, Silver) */}
                <div className="p-2.5 rounded-xl border flex flex-col justify-end bg-[#201D2B]" style={{ borderColor: THEME.border }}>
                  <div className="relative mx-auto mb-1">
                    <div className="w-9 h-9 rounded-full bg-[#9EA2A8]/20 border-2 border-[#9EA2A8] text-[#9EA2A8] flex items-center justify-center font-black text-sm">
                      2
                    </div>
                  </div>
                  <span className="text-[10px] text-[#E6EBF0] font-bold truncate">92321***410</span>
                  <span className="text-[9px] text-[#9EA2A8]">Silver VIP</span>
                  <span className="text-xs font-black text-[#BED921] font-mono mt-1">Rs 1,740,200</span>
                </div>

                {/* Rank 1 (Center, Elevated, Gold) */}
                <div className="p-3.5 rounded-xl border-2 border-[#BED921] flex flex-col justify-end bg-[#252233] shadow-[0_0_20px_rgba(190,217,33,0.35)] relative -top-2">
                  <Crown className="w-5 h-5 text-[#BED921] mx-auto mb-0.5 animate-bounce" />
                  <div className="relative mx-auto mb-1">
                    <div className="w-10 h-10 rounded-full bg-[#BED921] text-[#15131E] flex items-center justify-center font-black text-base shadow-lg">
                      1
                    </div>
                  </div>
                  <span className="text-[11px] text-[#E6EBF0] font-black truncate">92300***892</span>
                  <span className="text-[9px] text-[#BED921] font-bold">Crown Champion</span>
                  <span className="text-sm font-black text-[#21D9CC] font-mono mt-1">Rs 2,890,500</span>
                </div>

                {/* Rank 3 (Right, Bronze) */}
                <div className="p-2.5 rounded-xl border flex flex-col justify-end bg-[#201D2B]" style={{ borderColor: THEME.border }}>
                  <div className="relative mx-auto mb-1">
                    <div className="w-9 h-9 rounded-full bg-[#DD9138]/20 border-2 border-[#DD9138] text-[#DD9138] flex items-center justify-center font-black text-sm">
                      3
                    </div>
                  </div>
                  <span className="text-[10px] text-[#E6EBF0] font-bold truncate">92345***653</span>
                  <span className="text-[9px] text-[#9EA2A8]">Bronze VIP</span>
                  <span className="text-xs font-black text-[#BED921] font-mono mt-1">Rs 960,000</span>
                </div>
              </div>

              {/* Ranks 4 to 7 Leaderboard List */}
              <div className="space-y-1 pt-1 border-t border-white/5">
                {[
                  { rank: 4, user: "92314***901", profit: "Rs 680,400" },
                  { rank: 5, user: "92333***219", profit: "Rs 520,000" },
                  { rank: 6, user: "92308***544", profit: "Rs 445,100" },
                  { rank: 7, user: "92318***872", profit: "Rs 389,000" },
                ].map((item) => (
                  <div key={item.rank} className="flex items-center justify-between p-2 rounded-lg bg-[#282537] text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-4 text-center font-mono font-bold text-[#9EA2A8]">{item.rank}</span>
                      <span className="text-[#E6EBF0] font-mono text-[11px]">{item.user}</span>
                    </div>
                    <span className="font-mono font-bold text-[#21D9CC] text-xs">{item.profit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 11: PAKVIP Platform Info & Basic Tools */}
            <section
              className="rounded-2xl p-3.5 border space-y-3 text-xs"
              style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-black text-[#E6EBF0] uppercase tracking-wider text-[11px]">
                  WinZO Official Platform Tools
                </h3>
                <span className="text-[9px] text-[#FFDE30]">winzoplay.com</span>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center text-[#9EA2A8]">
                <div onClick={() => triggerToast("Language: English (Pakistan)")} className="p-2 rounded-xl bg-[#282537] cursor-pointer hover:text-[#E6EBF0] transition">
                  <Globe className="w-4 h-4 mx-auto mb-1 text-[#21D9CC]" />
                  <span className="text-[10px] font-bold">Language</span>
                </div>
                <div onClick={() => setShowNoticeModal(true)} className="p-2 rounded-xl bg-[#282537] cursor-pointer hover:text-[#E6EBF0] transition">
                  <Bell className="w-4 h-4 mx-auto mb-1 text-[#BED921]" />
                  <span className="text-[10px] font-bold">Notice</span>
                </div>
                <div onClick={() => setShowSupportModal(true)} className="p-2 rounded-xl bg-[#282537] cursor-pointer hover:text-[#E6EBF0] transition">
                  <Headphones className="w-4 h-4 mx-auto mb-1 text-[#17B15E]" />
                  <span className="text-[10px] font-bold">24/7 CS</span>
                </div>
                <div onClick={() => alert("WinZO v3.8.2 Official Pakistani Gaming Platform")} className="p-2 rounded-xl bg-[#282537] cursor-pointer hover:text-[#E6EBF0] transition">
                  <HelpCircle className="w-4 h-4 mx-auto mb-1 text-[#9EA2A8]" />
                  <span className="text-[10px] font-bold">About</span>
                </div>
              </div>

              {/* Responsible Gaming & License Notice */}
              <div className="p-3 rounded-xl bg-[#15131E]/60 border border-white/5 space-y-1">
                <div className="flex items-center gap-1.5 text-[#17B15E]">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-bold text-[10px]">Certified Fair Play & 100% Guaranteed Payouts</span>
                </div>
                <p className="text-[9px] text-[#9EA2A8] leading-tight">
                  WinZO is officially licensed. Fast deposits and withdrawals via JazzCash, EasyPaisa, and Bank Transfer with 0% processing fee. 18+ Only.
                </p>
              </div>
            </section>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 2: ACTIVITY SECTION (pakvip21.com/#/activity)              */}
        {/* ============================================================== */}
        {activeTab === "activity" && (
          <div className="space-y-3.5 animate-in fade-in duration-200">
            {/* Top Activity Header */}
            <div className="p-4 rounded-2xl border bg-gradient-to-r from-[#21D9CC]/20 via-[#201D2B] to-[#BED921]/20 flex items-center justify-between" style={{ borderColor: THEME.border }}>
              <div>
                <span className="text-[10px] font-mono font-bold text-[#21D9CC] uppercase tracking-wider">
                  WinZO Activity Center
                </span>
                <h2 className="text-lg font-black text-[#E6EBF0]">Super Jackpot & Rewards</h2>
                <p className="text-[11px] text-[#9EA2A8]">Complete daily missions and claim instant PKR cash</p>
              </div>
              <Trophy className="w-10 h-10 text-[#BED921] flex-shrink-0" />
            </div>

            {/* Lucky Turntable Wheel Quick Launch Card */}
            <div
              onClick={() => setShowTurntableModal(true)}
              className="p-3.5 rounded-2xl border cursor-pointer bg-gradient-to-r from-[#BED921]/20 via-[#282537] to-[#21D9CC]/20 flex items-center justify-between hover:border-[#21D9CC]/50 transition"
              style={{ borderColor: THEME.border }}
            >
              <div className="space-y-0.5">
                <span className="text-[9px] font-black px-1.5 py-0.2 rounded bg-[#BED921] text-[#15131E] uppercase">
                  Daily Free Spin
                </span>
                <h3 className="text-sm font-black text-[#E6EBF0]">WinZO Lucky Turntable</h3>
                <p className="text-[10px] text-[#9EA2A8]">Spin the wheel to win up to Rs 5,000 cash rewards!</p>
              </div>
              <button
                className="px-3 py-1.5 rounded-xl text-xs font-black text-[#15131E] shadow-md flex items-center gap-1"
                style={{ background: THEME.gradient }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Spin Now</span>
              </button>
            </div>

            {/* Gift Redemption Code Box */}
            <div className="p-3.5 rounded-2xl border space-y-2.5" style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}>
              <div className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-[#21D9CC]" />
                <h3 className="text-xs font-black uppercase text-[#E6EBF0]">Gifts / Redemption Code</h3>
              </div>
              <p className="text-[10px] text-[#9EA2A8]">
                Enter your redemption code (e.g. WINZO2026 or WINZO888) to receive instant gift balance.
              </p>
              {giftClaimMsg ? (
                <div className="p-2 rounded-xl bg-[#17B15E]/20 text-[#17B15E] text-xs font-bold text-center">
                  {giftClaimMsg}
                </div>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter Redemption Code (e.g. WINZO2026)"
                    value={giftCode}
                    onChange={(e) => setGiftCode(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-xl border text-xs text-[#E6EBF0] outline-none"
                    style={{ backgroundColor: THEME.bgPill, borderColor: THEME.border }}
                  />
                  <button
                    onClick={() => {
                      if (!giftCode.trim()) return alert("Please enter a redemption code");
                      const clean = giftCode.trim().toUpperCase();
                      if (user) {
                        if (clean.includes("WINZO") || clean.includes("PAKVIP") || clean.includes("VIP")) {
                          saveUser({ ...user, balance: user.balance + 500 });
                          setGiftClaimMsg("Success! Rs 500 WinZO Gift Reward added to your balance!");
                          setGiftCode("");
                          setTimeout(() => setGiftClaimMsg(""), 3000);
                        } else {
                          alert("Invalid code. Try WINZO2026 or WINZO888");
                        }
                      }
                    }}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-[#15131E]"
                    style={{ background: THEME.gradient }}
                  >
                    Receive
                  </button>
                </div>
              )}
            </div>

            {/* Attendance Bonus Check-in */}
            <div className="p-3.5 rounded-2xl border space-y-3" style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-black uppercase text-[#E6EBF0]">Attendance Bonus</h3>
                  <p className="text-[10px] text-[#9EA2A8]">
                    Sign in consecutively for 7 days to claim higher rewards.
                  </p>
                </div>
                <Calendar className="w-5 h-5 text-[#BED921]" />
              </div>

              {/* 7-Day Matrix */}
              <div className="grid grid-cols-7 gap-1 text-center">
                {[1, 2, 3, 4, 5, 6, 7].map((day) => {
                  const isChecked = day <= attendanceDay;
                  return (
                    <div
                      key={day}
                      className={`p-1.5 rounded-xl border text-[10px] ${
                        isChecked
                          ? "bg-[#21D9CC]/20 border-[#21D9CC] text-[#21D9CC]"
                          : "bg-[#282537] border-white/5 text-[#9EA2A8]"
                      }`}
                    >
                      <span className="block font-bold">Day {day}</span>
                      <span className="block font-mono font-black mt-0.5">
                        +{day * 100}
                      </span>
                    </div>
                  );
                })}
              </div>

              <button
                disabled={attendanceClaimed}
                onClick={() => {
                  if (attendanceClaimed || !user) return;
                  const rew = attendanceDay * 100;
                  saveUser({ ...user, balance: user.balance + rew });
                  setAttendanceClaimed(true);
                  triggerToast(`Checked in! Rs ${rew} credited to your wallet!`);
                }}
                className={`w-full py-2.5 rounded-xl text-xs font-bold transition ${
                  attendanceClaimed
                    ? "bg-[#38374B] text-[#9EA2A8]"
                    : "text-[#15131E] shadow-lg active:scale-95"
                }`}
                style={{ background: attendanceClaimed ? undefined : THEME.gradient }}
              >
                {attendanceClaimed ? "Already Signed In Today" : "Sign In & Claim Reward"}
              </button>
            </div>

            {/* Activity Reward Promotions List (pakvip21 exact) */}
            <div className="space-y-2">
              <h3 className="text-xs font-black uppercase tracking-wider text-[#E6EBF0] px-1">
                WinZO Official Promotions
              </h3>
              {[
                { title: "FIRST DEPOSIT BIG REWARDS", desc: "Double your first deposit with 100% matching bonus up to Rs 20,000.", tag: "DEPOSIT" },
                { title: "AVIATOR ADDITIONAL REWARDS", desc: "Get an extra 5% cash rebate on every cashout above x50.00.", tag: "SPRIBE" },
                { title: "WINGO WIN STREAK BONUS", desc: "Win 5 rounds consecutively in Win Go 30s to claim Rs 5,000 cash.", tag: "LOTTERY" },
                { title: "LUCKY 10 DAYS OF INTEREST", desc: "Keep balance in your wallet to receive 0.8% daily compounded interest.", tag: "PASSIVE" },
                { title: "CREATIVE VIDEO CONTENT REWARDS", desc: "Upload gameplay video on TikTok / YouTube and claim Rs 2,000 bounty.", tag: "BOUNTY" },
                { title: "DAILY SLOTS TREASURE CHEST CHALLENGE", desc: "Bet 100 times in JILI Slots to unlock the Golden Mystery Chest.", tag: "CHEST" },
                { title: "INVITE & EARN REWARDS", desc: "Receive Rs 500 instantly for every friend who registers and deposits.", tag: "REFERRAL" },
              ].map((act, i) => (
                <div
                  key={i}
                  className="p-3 rounded-2xl border flex items-center justify-between transition hover:border-white/20"
                  style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}
                >
                  <div className="space-y-1 max-w-[280px]">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-[#21D9CC]/15 text-[#21D9CC]">
                        {act.tag}
                      </span>
                      <h4 className="text-xs font-bold text-[#E6EBF0] truncate">{act.title}</h4>
                    </div>
                    <p className="text-[10px] text-[#9EA2A8] leading-tight">{act.desc}</p>
                  </div>
                  <button
                    onClick={() => setShowDepositModal(true)}
                    className="px-2.5 py-1 rounded-lg text-[10px] font-bold text-[#15131E]"
                    style={{ background: THEME.gradient }}
                  >
                    Join
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 3: PROMOTION SECTION (pakvip21.com/#/promotion)            */}
        {/* ============================================================== */}
        {activeTab === "promo" && (
          <div className="space-y-3.5 animate-in fade-in duration-200">
            {/* Header Banner */}
            <div className="p-4 rounded-2xl border bg-gradient-to-r from-[#21D9CC]/20 via-[#201D2B] to-[#BED921]/20 space-y-1" style={{ borderColor: THEME.border }}>
              <span className="text-[10px] font-mono font-bold text-[#21D9CC] uppercase">
                WinZO Agency Program
              </span>
              <h2 className="text-lg font-black text-[#E6EBF0]">Agency Promotion Center</h2>
              <p className="text-[11px] text-[#9EA2A8]">
                Invite friends and earn up to 0.7% multi-tier lifetime commission on every bet.
              </p>
            </div>

            {/* Dashboard Overview */}
            <div className="p-3.5 rounded-2xl border grid grid-cols-3 gap-2 text-center" style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}>
              <div className="p-2 rounded-xl bg-[#282537]">
                <span className="text-[9px] text-[#9EA2A8] block">Yesterday's Total</span>
                <span className="text-sm font-black text-[#BED921] font-mono">Rs 4,120.00</span>
              </div>
              <div className="p-2 rounded-xl bg-[#282537]">
                <span className="text-[9px] text-[#9EA2A8] block">Direct Subordinates</span>
                <span className="text-sm font-black text-[#21D9CC] font-mono">42</span>
              </div>
              <div className="p-2 rounded-xl bg-[#282537]">
                <span className="text-[9px] text-[#9EA2A8] block">Team Members</span>
                <span className="text-sm font-black text-[#E6EBF0] font-mono">198</span>
              </div>
            </div>

            {/* Invite Links & Code Box */}
            <div className="p-3.5 rounded-2xl border space-y-3" style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}>
              <h3 className="text-xs font-black uppercase text-[#E6EBF0]">Your Exclusive Invitation</h3>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2.5 rounded-xl border text-xs" style={{ backgroundColor: THEME.bgPill, borderColor: THEME.border }}>
                  <div>
                    <span className="text-[9px] text-[#9EA2A8] block">Invitation Code</span>
                    <span className="font-mono font-black text-[#21D9CC] text-sm tracking-wider">WINZO7788</span>
                  </div>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText("WINZO7788");
                      triggerToast("Invitation Code copied to clipboard!");
                    }}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-[#15131E]"
                    style={{ background: THEME.gradient }}
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Code</span>
                  </button>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl border text-xs" style={{ backgroundColor: THEME.bgPill, borderColor: THEME.border }}>
                  <div className="truncate max-w-[200px]">
                    <span className="text-[9px] text-[#9EA2A8] block">Invitation Link</span>
                    <span className="font-mono text-[#E6EBF0] text-[11px] truncate">https://pakvip21.com/register?r=WINZO7788</span>
                  </div>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText("https://pakvip21.com/register?r=WINZO7788");
                      triggerToast("Invitation Link copied to clipboard!");
                    }}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-[#15131E]"
                    style={{ background: THEME.gradient }}
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Copy Link</span>
                  </button>
                </div>
              </div>
            </div>

            {/* 6 Subordinate Levels Commission Table */}
            <div className="p-3.5 rounded-2xl border space-y-2.5" style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}>
              <h3 className="text-xs font-black uppercase text-[#E6EBF0]">
                【Promotion Partner】Commission Tier Rates
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { tier: "Tier 1 (Direct)", rate: "0.7% Rebate" },
                  { tier: "Tier 2", rate: "0.4% Rebate" },
                  { tier: "Tier 3", rate: "0.2% Rebate" },
                  { tier: "Tier 4", rate: "0.1% Rebate" },
                  { tier: "Tier 5", rate: "0.05% Rebate" },
                  { tier: "Tier 6", rate: "0.02% Rebate" },
                ].map((item, i) => (
                  <div key={i} className="p-2 rounded-xl bg-[#282537] flex justify-between items-center border border-white/5">
                    <span className="text-[#9EA2A8] text-[11px]">{item.tier}</span>
                    <span className="font-mono font-bold text-[#BED921]">{item.rate}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rules (pakvip21 exact) */}
            <div className="p-3.5 rounded-2xl border space-y-2 text-xs text-[#9EA2A8]" style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}>
              <h3 className="font-bold text-[#E6EBF0] uppercase text-[11px]">WinZO Promotion Rules</h3>
              <p><strong>01.</strong> There are 6 subordinate levels in inviting friends. If A invites B, B is level 1 of A. If B invites C, C is level 2 of A.</p>
              <p><strong>02.</strong> When inviting friends to register, you must send the invitation link provided or enter the invitation code manually.</p>
              <p><strong>03.</strong> The commission is calculated automatically every night at 00:00 and credited directly to your withdrawable wallet.</p>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 4: WALLET SECTION (pakvip21.com/#/wallet)                  */}
        {/* ============================================================== */}
        {activeTab === "wallet" && (
          <div className="space-y-3.5 animate-in fade-in duration-200">
            {/* Balance Overview Card */}
            <div className="p-4 rounded-2xl border bg-gradient-to-br from-[#201D2B] via-[#282537] to-[#15131E] space-y-3" style={{ borderColor: THEME.border }}>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#9EA2A8] font-semibold">Total Balance</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#17B15E]/20 text-[#17B15E] font-bold">
                  ACTIVE
                </span>
              </div>
              <div className="text-3xl font-black text-[#E6EBF0] font-mono">
                Rs {user?.balance.toLocaleString() || "0.00"}
              </div>

              {/* Main Wallet vs 3rd Party Wallet */}
              <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                <div className="p-2.5 rounded-xl bg-[#15131E]/60 border border-white/5">
                  <span className="text-[10px] text-[#9EA2A8] block">Main Wallet (100%)</span>
                  <span className="font-mono font-bold text-[#21D9CC]">
                    Rs {user?.balance.toLocaleString() || "0.00"}
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#15131E]/60 border border-white/5">
                  <span className="text-[10px] text-[#9EA2A8] block">3rd Party Wallet (0%)</span>
                  <span className="font-mono font-bold text-[#9EA2A8]">Rs 0.00</span>
                </div>
              </div>

              {/* Main Wallet Transfer Button */}
              <button
                onClick={() => triggerToast("All 3rd party game balances have been recycled to your Main Wallet!")}
                className="w-full py-2 rounded-xl text-xs font-bold border flex items-center justify-center gap-1.5 text-[#21D9CC] border-[#21D9CC]/30 hover:bg-[#21D9CC]/10 transition"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Main Wallet Transfer (Recycle)</span>
              </button>
            </div>

            {/* Quick Actions (Deposit & Withdraw) */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setWalletSubTab("deposit");
                  setShowDepositModal(true);
                }}
                className="p-3 rounded-2xl font-black text-sm text-[#15131E] flex items-center justify-center gap-2 shadow-lg active:scale-95 transition"
                style={{ background: THEME.gradient }}
              >
                <ArrowDownCircle className="w-5 h-5" />
                <span>Deposit</span>
              </button>
              <button
                onClick={() => setWalletSubTab("withdraw")}
                className="p-3 rounded-2xl font-black text-sm text-[#E6EBF0] border flex items-center justify-center gap-2 active:scale-95 transition"
                style={{ backgroundColor: THEME.bgPill, borderColor: THEME.border }}
              >
                <ArrowUpCircle className="w-5 h-5 text-[#BED921]" />
                <span>Withdraw</span>
              </button>
            </div>

            {/* Withdraw Section (if selected) */}
            {walletSubTab === "withdraw" && (
              <div className="p-3.5 rounded-2xl border space-y-3" style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}>
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-black uppercase text-[#E6EBF0]">Withdrawal Request</h3>
                  <button onClick={() => setWalletSubTab("deposit")} className="text-xs text-[#9EA2A8]">Cancel</button>
                </div>

                {withdrawMsg ? (
                  <div className="p-3 rounded-xl bg-[#17B15E]/20 text-[#17B15E] text-xs font-bold text-center">
                    {withdrawMsg}
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (!user || user.balance < withdrawAmount) return alert("Insufficient balance");
                      if (withdrawAmount < 500) return alert("Minimum withdrawal is Rs 500");
                      saveUser({ ...user, balance: user.balance - withdrawAmount });
                      setTransactions((prev) => [
                        { id: `TX${Math.floor(Math.random() * 900000)}`, type: "Withdraw", amount: withdrawAmount, time: "Just now", status: "Processing" },
                        ...prev,
                      ]);
                      setWithdrawMsg(`Withdrawal of Rs ${withdrawAmount.toLocaleString()} submitted to ${withdrawMethod.toUpperCase()}!`);
                      setTimeout(() => {
                        setWithdrawMsg("");
                        setWalletSubTab("deposit");
                      }, 2500);
                    }}
                    className="space-y-3"
                  >
                    <div>
                      <label className="text-[11px] text-[#9EA2A8] block mb-1">Withdrawal Method</label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setWithdrawMethod("jazzcash")}
                          className={`p-2.5 rounded-xl border text-xs font-bold ${
                            withdrawMethod === "jazzcash" ? "border-[#21D9CC] bg-[#21D9CC]/15 text-[#E6EBF0]" : "border-white/5 text-[#9EA2A8]"
                          }`}
                        >
                          JazzCash
                        </button>
                        <button
                          type="button"
                          onClick={() => setWithdrawMethod("easypaisa")}
                          className={`p-2.5 rounded-xl border text-xs font-bold ${
                            withdrawMethod === "easypaisa" ? "border-[#BED921] bg-[#BED921]/15 text-[#E6EBF0]" : "border-white/5 text-[#9EA2A8]"
                          }`}
                        >
                          EasyPaisa
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] text-[#9EA2A8] block mb-1">Account Title</label>
                      <input
                        type="text"
                        required
                        placeholder="Account Holder Name"
                        value={withdrawAccountTitle}
                        onChange={(e) => setWithdrawAccountTitle(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border text-xs text-[#E6EBF0] outline-none"
                        style={{ backgroundColor: THEME.bgPill, borderColor: THEME.border }}
                      />
                    </div>

                    <div>
                      <label className="text-[11px] text-[#9EA2A8] block mb-1">Mobile Account Number</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 03001234567"
                        value={withdrawPhone}
                        onChange={(e) => setWithdrawPhone(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border text-xs text-[#E6EBF0] outline-none"
                        style={{ backgroundColor: THEME.bgPill, borderColor: THEME.border }}
                      />
                    </div>

                    <div>
                      <label className="text-[11px] text-[#9EA2A8] block mb-1">Amount (Rs) - Min Rs 500</label>
                      <div className="grid grid-cols-3 gap-2">
                        {[500, 1000, 2000, 5000, 10000, 20000].map((amt) => (
                          <button
                            type="button"
                            key={amt}
                            onClick={() => setWithdrawAmount(amt)}
                            className={`py-1.5 rounded-xl border text-xs font-mono font-bold ${
                              withdrawAmount === amt ? "bg-[#BED921] text-[#15131E] border-transparent" : "bg-[#282537] text-[#9EA2A8] border-white/5"
                            }`}
                          >
                            Rs {amt.toLocaleString()}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl font-bold text-xs text-[#15131E]"
                      style={{ background: THEME.gradient }}
                    >
                      Submit Withdrawal (Rs {withdrawAmount.toLocaleString()})
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* Transaction Records List */}
            <div className="p-3.5 rounded-2xl border space-y-2.5" style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}>
              <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: THEME.border }}>
                <h3 className="text-xs font-black uppercase text-[#E6EBF0]">Transaction History</h3>
                <span className="text-[10px] text-[#9EA2A8]">Recent entries</span>
              </div>

              <div className="space-y-1.5">
                {transactions.map((tx) => (
                  <div key={tx.id} className="p-2.5 rounded-xl bg-[#282537] flex items-center justify-between text-xs border border-white/5">
                    <div>
                      <div className="font-bold text-[#E6EBF0]">{tx.type} ({tx.id})</div>
                      <div className="text-[10px] text-[#9EA2A8]">{tx.time}</div>
                    </div>
                    <div className="text-right">
                      <div className={`font-mono font-bold ${tx.type === "Withdraw" ? "text-[#D23838]" : "text-[#17B15E]"}`}>
                        {tx.type === "Withdraw" ? `-${tx.amount}` : `+${tx.amount}`} Rs
                      </div>
                      <span className="text-[9px] text-[#21D9CC]">{tx.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 5: ACCOUNT SECTION (pakvip21.com/#/main)                   */}
        {/* ============================================================== */}
        {activeTab === "account" && (
          <div className="space-y-3.5 animate-in fade-in duration-200">
            {/* User Profile Card */}
            <div className="p-4 rounded-2xl border bg-gradient-to-br from-[#201D2B] via-[#282537] to-[#15131E] space-y-3" style={{ borderColor: THEME.border }}>
              <div className="flex items-center gap-3">
                <div className="w-13 h-13 rounded-full flex items-center justify-center p-0.5 bg-gradient-to-tr from-[#21D9CC] to-[#BED921]">
                  <div className="w-full h-full rounded-full bg-[#15131E] flex items-center justify-center text-[#21D9CC]">
                    <User className="w-7 h-7" />
                  </div>
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-sm text-[#E6EBF0]">{user?.phone || "03001234567"}</span>
                    <span className="text-[9px] font-black px-1.5 py-0.2 rounded bg-[#BED921] text-[#15131E]">
                      VIP {user?.vip || 1}
                    </span>
                  </div>
                  <div className="text-[10px] font-mono text-[#9EA2A8]">UID: PAK954821</div>
                </div>
              </div>

              {/* VIP Progress Bar */}
              <div className="p-2.5 rounded-xl bg-[#15131E]/60 border border-white/5 space-y-1.5">
                <div className="flex justify-between text-[10px]">
                  <span className="text-[#9EA2A8]">VIP 1 Privilege Level</span>
                  <span className="font-mono text-[#21D9CC] font-bold">VIP 2 (65%)</span>
                </div>
                <div className="w-full h-1.5 bg-[#282537] rounded-full overflow-hidden">
                  <div className="h-full rounded-full w-[65%]" style={{ background: THEME.gradient }} />
                </div>
              </div>
            </div>

            {/* Feature Menu List (pakvip21 exact) */}
            <div className="p-2 rounded-2xl border space-y-1" style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}>
              {[
                { label: "VIP Center", icon: Trophy, color: "#BED921", action: () => alert("VIP Center: Level-up bonus Rs 1,000 available at VIP 2!") },
                { label: "Safe Center (Security)", icon: Lock, color: "#21D9CC", action: () => alert("Safe Center: 2FA & Withdrawal PIN active.") },
                { label: "Bank Card / E-Wallet Binding", icon: CreditCard, color: "#17B15E", action: () => alert("Bound: JazzCash (0300***1234) & EasyPaisa.") },
                { label: "Transaction Records", icon: Clock, color: "#9EA2A8", action: () => setActiveTab("wallet") },
                { label: "Notifications & Messages", icon: Bell, color: "#BED921", action: () => setShowNoticeModal(true) },
                { label: "24/7 VIP Customer Service", icon: Headphones, color: "#21D9CC", action: () => setShowSupportModal(true) },
                { label: "About WinZO", icon: HelpCircle, color: "#9EA2A8", action: () => alert("WinZO v3.8.2 Official Pakistani Gaming Platform") },
              ].map((item, i) => (
                <button
                  key={i}
                  onClick={item.action}
                  className="w-full p-3 rounded-xl flex items-center justify-between text-xs text-[#E6EBF0] hover:bg-[#282537] transition"
                >
                  <div className="flex items-center gap-2.5">
                    <item.icon className="w-4 h-4" style={{ color: item.color }} />
                    <span className="font-semibold">{item.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#9EA2A8]" />
                </button>
              ))}
            </div>

            {/* Log Out Button */}
            <button
              onClick={() => {
                if (confirm("Are you sure you want to log out?")) {
                  localStorage.removeItem("winzo_user"); localStorage.removeItem("pakvip_user");
                  localStorage.removeItem("winzo_play_user");
                  setUser(null);
                  triggerToast("Logged out successfully.");
                }
              }}
              className="w-full py-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold text-[#D23838] border-[#D23838]/30 hover:bg-[#D23838]/10 transition"
            >
              <LogOut className="w-4 h-4" />
              <span>Log Out</span>
            </button>
          </div>
        )}
      </main>

      {/* ============================================================== */}
      {/* 3. FLOATING LUCKY TREASURE CHEST & TURNTABLE                   */}
      {/* ============================================================== */}
      <div className="fixed bottom-20 right-3 z-30 flex flex-col items-center gap-2">
        {/* Lucky Turntable Floating Button */}
        <button
          onClick={() => setShowTurntableModal(true)}
          className="w-12 h-12 rounded-full flex items-center justify-center p-1 bg-gradient-to-br from-[#BED921] to-[#21D9CC] shadow-[0_0_15px_rgba(190,217,33,0.5)] animate-pulse hover:scale-110 transition-transform"
          title="Lucky Spin Wheel"
        >
          <div className="w-full h-full rounded-full bg-[#15131E] flex items-center justify-center text-[#BED921]">
            <Sparkles className="w-6 h-6 fill-current" />
          </div>
        </button>

        {/* Lucky Treasure Chest */}
        <button
          onClick={() => {
            setChestOpened(false);
            setShowChestModal(true);
          }}
          className="w-14 h-14 relative flex items-center justify-center animate-bounce hover:scale-110 transition-transform"
          title="Daily Treasure Chest"
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
      {/* 4. AUTHENTIC 5-TAB BOTTOM NAVIGATION BAR (pakvip21 exact)     */}
      {/* ============================================================== */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-40 border-t backdrop-blur-lg"
        style={{ backgroundColor: `${THEME.bgL2}F8`, borderColor: THEME.border }}
      >
        <div className="max-w-md mx-auto px-4 py-1.5 flex items-center justify-between relative">
          {/* Tab 1: Home */}
          <button
            onClick={() => {
              setActiveTab("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`flex flex-col items-center gap-0.5 transition ${
              activeTab === "home" ? "text-[#21D9CC]" : "text-[#9EA2A8]"
            }`}
          >
            <Gamepad2 className="w-5 h-5" />
            <span className="text-[10px] font-semibold">Home</span>
            {activeTab === "home" && <div className="w-1 h-1 rounded-full bg-[#21D9CC]" />}
          </button>

          {/* Tab 2: Activity */}
          <button
            onClick={() => setActiveTab("activity")}
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

          {/* Tab 3: Promotion */}
          <button
            onClick={() => setActiveTab("promo")}
            className={`flex flex-col items-center gap-0.5 transition ${
              activeTab === "promo" ? "text-[#21D9CC]" : "text-[#9EA2A8]"
            }`}
          >
            <Users className="w-5 h-5" />
            <span className="text-[10px] font-semibold">Promotion</span>
            {activeTab === "promo" && <div className="w-1 h-1 rounded-full bg-[#21D9CC]" />}
          </button>

          {/* Tab 4: Wallet */}
          <button
            onClick={() => setActiveTab("wallet")}
            className={`flex flex-col items-center gap-0.5 transition ${
              activeTab === "wallet" ? "text-[#21D9CC]" : "text-[#9EA2A8]"
            }`}
          >
            <Wallet className="w-5 h-5" />
            <span className="text-[10px] font-semibold">Wallet</span>
            {activeTab === "wallet" && <div className="w-1 h-1 rounded-full bg-[#21D9CC]" />}
          </button>

          {/* Tab 5: Account */}
          <button
            onClick={() => setActiveTab("account")}
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
      {/* 5. DEPOSIT MODAL (JazzCash & EasyPaisa & Bank & USDT)           */}
      {/* ============================================================== */}
      {showDepositModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div
            className="w-full max-w-md rounded-t-3xl sm:rounded-3xl border p-5 space-y-4 max-h-[90vh] overflow-y-auto"
            style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}
          >
            <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: THEME.border }}>
              <div className="flex items-center gap-2">
                <Wallet className="w-5 h-5 text-[#21D9CC]" />
                <h3 className="font-black text-base text-[#E6EBF0]">Deposit Funds (WinZO Official)</h3>
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
                  setTransactions((prev) => [
                    { id: `TX${Math.floor(Math.random() * 900000)}`, type: "Deposit", amount: depositAmount, time: "Just now", status: "Success" },
                    ...prev,
                  ]);
                  setDepositSuccessMsg(`Successfully credited Rs ${depositAmount.toLocaleString()} to your balance!`);
                  setTimeout(() => {
                    setDepositSuccessMsg("");
                    setShowDepositModal(false);
                  }, 1500);
                }}
                className="space-y-3.5"
              >
                <div>
                  <label className="text-xs text-[#9EA2A8] block mb-1 font-semibold">Payment Gateway (Pakistan)</label>
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
                  <label className="text-xs text-[#9EA2A8] block mb-1 font-semibold">Deposit Amount (PKR)</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[300, 500, 1000, 2000, 5000, 10000, 25000, 50000].map((amt) => (
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
                  <div className="flex justify-between items-center text-[#9EA2A8]">
                    <span>Official Merchant Account:</span>
                    <div className="flex items-center gap-1">
                      <span className="text-[#E6EBF0] font-mono font-bold">0300-9876543</span>
                      <Copy
                        onClick={() => {
                          navigator.clipboard.writeText("03009876543");
                          triggerToast("Merchant number copied!");
                        }}
                        className="w-3.5 h-3.5 text-[#21D9CC] cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between text-[#9EA2A8]">
                    <span>Account Name:</span>
                    <span className="text-[#BED921] font-bold">WINZO OFFICIAL</span>
                  </div>
                  <div className="flex justify-between text-[#9EA2A8]">
                    <span>Bonus:</span>
                    <span className="text-[#17B15E] font-bold">+10% Extra on first deposit</span>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-[#9EA2A8] block mb-1 font-semibold">Transaction ID (TID)</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter 11-digit TID from SMS"
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
      {/* 6. PLAYABLE WIN GO 30S LOTTERY                                 */}
      {/* ============================================================== */}
      {activeGame?.id === "wingo-30s" && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3">
          <div
            className="w-full max-w-md rounded-3xl border p-4 space-y-3.5"
            style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}
          >
            <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: THEME.border }}>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-black text-base text-[#E6EBF0]">Win Go 30s</h3>
                  <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-[#FFDE30]/20 text-[#FFDE30]">WINZO</span>
                </div>
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
                alert(`Bet of Rs ${wingoAmount} placed on Round #${wingoPeriod}! Good luck!`);
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
      {/* 7. PLAYABLE AVIATOR CRASH                                      */}
      {/* ============================================================== */}
      {activeGame?.id === "aviator-spribe" && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3">
          <div
            className="w-full max-w-md rounded-3xl border p-4 space-y-4"
            style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}
          >
            <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: THEME.border }}>
              <div className="flex items-center gap-1.5">
                <h3 className="font-black text-base text-[#E6EBF0]">Aviator</h3>
                <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-[#D23838] text-white">SPRIBE</span>
              </div>
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

      {/* ============================================================== */}
      {/* 8. LUCKY TREASURE CHEST MODAL                                  */}
      {/* ============================================================== */}
      {showChestModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
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
                Open your daily WinZO mystery chest and receive up to Rs 1,000 instantly!
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

      {/* ============================================================== */}
      {/* 9. LUCKY TURNTABLE WHEEL MODAL                                 */}
      {/* ============================================================== */}
      {showTurntableModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            className="w-full max-w-sm rounded-3xl border p-5 text-center space-y-4"
            style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}
          >
            <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: THEME.border }}>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#BED921]" />
                <h3 className="font-black text-sm text-[#E6EBF0]">WinZO Lucky Turntable</h3>
              </div>
              <button onClick={() => setShowTurntableModal(false)} className="w-8 h-8 rounded-full flex items-center justify-center text-[#9EA2A8]" style={{ backgroundColor: THEME.bgPill }}>
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Turntable Wheel */}
            <div className="relative w-56 h-56 mx-auto my-2 flex items-center justify-center">
              {/* Pointer */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20 w-0 h-0 border-x-8 border-x-transparent border-t-[18px] border-t-[#D23838] drop-shadow-lg" />
              {/* Wheel Body */}
              <div
                className="w-full h-full rounded-full border-4 border-[#21D9CC] shadow-[0_0_25px_rgba(33,217,204,0.4)] flex items-center justify-center overflow-hidden transition-transform duration-[3800ms] cubic-bezier(0.17, 0.67, 0.12, 0.99)"
                style={{
                  transform: `rotate(${turntableAngle}deg)`,
                  background: "conic-gradient(#201D2B 0deg 45deg, #282537 45deg 90deg, #201D2B 90deg 135deg, #282537 135deg 180deg, #201D2B 180deg 225deg, #282537 225deg 270deg, #201D2B 270deg 315deg, #282537 315deg 360deg)",
                }}
              >
                {/* Visual Segments */}
                <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-[#BED921]">
                  <span className="absolute top-2">Rs 100</span>
                  <span className="absolute right-3">Rs 200</span>
                  <span className="absolute bottom-2">Rs 500</span>
                  <span className="absolute left-3">Rs 1,000</span>
                </div>
              </div>
              {/* Center Hub */}
              <div
                onClick={spinTurntable}
                className="absolute z-10 w-14 h-14 rounded-full flex items-center justify-center cursor-pointer font-black text-xs text-[#15131E] shadow-xl active:scale-95 border-2 border-white/20"
                style={{ background: THEME.gradient }}
              >
                SPIN
              </div>
            </div>

            {turntablePrize ? (
              <div className="p-3 rounded-2xl bg-[#17B15E]/20 border border-[#17B15E] text-[#17B15E] font-black text-sm">
                🎉 Won {turntablePrize}! Credited to your wallet!
              </div>
            ) : (
              <p className="text-[11px] text-[#9EA2A8]">
                Tap SPIN to rotate the lucky wheel. Free daily spin for VIP players!
              </p>
            )}

            <button
              onClick={spinTurntable}
              disabled={turntableSpinning}
              className={`w-full py-3 rounded-xl font-black text-sm transition ${
                turntableSpinning ? "bg-[#38374B] text-[#9EA2A8]" : "text-[#15131E] shadow-lg active:scale-95"
              }`}
              style={{ background: turntableSpinning ? undefined : THEME.gradient }}
            >
              {turntableSpinning ? "Spinning..." : "SPIN THE WHEEL NOW"}
            </button>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 10. 24/7 CUSTOMER SUPPORT MODAL                                */}
      {/* ============================================================== */}
      {showSupportModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            className="w-full max-w-sm rounded-3xl border p-5 space-y-4"
            style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}
          >
            <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: THEME.border }}>
              <div className="flex items-center gap-1.5">
                <Headphones className="w-4 h-4 text-[#21D9CC]" />
                <h3 className="font-black text-sm text-[#E6EBF0]">WinZO 24/7 Customer Care</h3>
              </div>
              <button onClick={() => setShowSupportModal(false)} className="w-8 h-8 rounded-full flex items-center justify-center text-[#9EA2A8]" style={{ backgroundColor: THEME.bgPill }}>
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2">
              <a
                href="https://t.me/prediction_officials"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-[#282537] hover:bg-[#38374B] flex items-center justify-between border border-white/5 transition"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#21D9CC]/20 text-[#21D9CC] flex items-center justify-center font-bold">
                    TG
                  </div>
                  <div className="text-left">
                    <span className="block text-xs font-bold text-[#E6EBF0]">Official Telegram Channel</span>
                    <span className="text-[10px] text-[#9EA2A8]">@prediction_officials</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-[#9EA2A8]" />
              </a>

              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-[#282537] hover:bg-[#38374B] flex items-center justify-between border border-white/5 transition"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#17B15E]/20 text-[#17B15E] flex items-center justify-center font-bold">
                    WA
                  </div>
                  <div className="text-left">
                    <span className="block text-xs font-bold text-[#E6EBF0]">WhatsApp VIP Support</span>
                    <span className="text-[10px] text-[#9EA2A8]">+92 300 1234567</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-[#9EA2A8]" />
              </a>

              <button
                onClick={() => {
                  setShowSupportModal(false);
                  triggerToast("Connecting to live agent in Pakistan...");
                }}
                className="w-full p-3 rounded-xl bg-[#21D9CC]/15 text-[#21D9CC] border border-[#21D9CC]/30 font-bold text-xs flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Start Live Chat Support</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 11. OFFICIAL NOTICE MODAL                                      */}
      {/* ============================================================== */}
      {showNoticeModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            className="w-full max-w-sm rounded-3xl border p-5 space-y-3.5"
            style={{ backgroundColor: THEME.bgL2, borderColor: THEME.border }}
          >
            <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: THEME.border }}>
              <div className="flex items-center gap-1.5">
                <Bell className="w-4 h-4 text-[#BED921]" />
                <h3 className="font-black text-sm text-[#E6EBF0]">WinZO Official Announcement</h3>
              </div>
              <button onClick={() => setShowNoticeModal(false)} className="w-8 h-8 rounded-full flex items-center justify-center text-[#9EA2A8]" style={{ backgroundColor: THEME.bgPill }}>
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-3 rounded-xl bg-[#282537] text-xs text-[#9EA2A8] space-y-2 leading-relaxed">
              <p className="font-bold text-[#E6EBF0]">Dear WinZO Members,</p>
              <p>
                1. JazzCash and EasyPaisa automatic deposit and withdrawal channels are running at 100% capacity with 0% fee.
              </p>
              <p>
                2. First recharge players receive an instant 100% matching cash bonus up to Rs 20,000.
              </p>
              <p>
                3. Download the official WinZO Android APK from the homepage for faster loading and exclusive daily check-in gifts.
              </p>
            </div>

            <button
              onClick={() => setShowNoticeModal(false)}
              className="w-full py-2.5 rounded-xl font-bold text-xs text-[#15131E]"
              style={{ background: THEME.gradient }}
            >
              I Understand
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
