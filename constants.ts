
import { InventoryItem, Order, OrderStatus, ManagerRank } from "./types";

export const APP_NAME = "LORD’S BESPOKE TAILOR";

export const VIP_CATEGORIES = [
  { id: 1, title: "Royal Classic Suit", desc: "Timeless elegance for the modern gentleman." },
  { id: 2, title: "Urban Elite Set", desc: "Sharp cuts for corporate dominance." },
  { id: 3, title: "Executive Line", desc: "Understated luxury for daily power." },
  { id: 4, title: "Festive Premium", desc: "Rich fabrics for celebratory moments." },
  { id: 5, title: "Trendy Party Fit", desc: "Bold designs for the spotlight." },
  { id: 6, title: "Imperial Ceremony", desc: "Majestic attire for grand occasions." },
  { id: 7, title: "Signature Luxury", desc: "Our highest tier of bespoke craftsmanship." },
  { id: 8, title: "Lords Special Edition", desc: "Limited run exclusive fabrics." },
];

// WORKER GRADE MULTIPLIERS (Spec #11)
export const GRADE_MULTIPLIERS = {
    'A': 1.10, // Expert: +10% Bonus
    'B': 1.05, // Professional: +5% Bonus
    'C': 1.00, // Regular: Standard Rate
    'D': 0.90, // Basic: -10% (Training/New)
    'E': 0.80  // Training: -20%
};

// 6-Level Referral Commission Structure (As per 2025 Spec)
export const REFERRAL_DEDUCTION_PERCENT = 0.30; // 30% of Profit Distributed

export const REFERRAL_LEVELS = [
  { level: 1, percent: 1.5 },
  { level: 2, percent: 2.0 },
  { level: 3, percent: 3.0 },
  { level: 4, percent: 4.0 },
  { level: 5, percent: 5.0 },
  { level: 6, percent: 6.0 },
  // 7-10 Placeholder for expansion if needed
  { level: 7, percent: 0 },
  { level: 8, percent: 0 },
  { level: 9, percent: 0 },
  { level: 10, percent: 0 },
];

// --- MANAGER RANK CRITERIA ---
export const MANAGER_RANK_RULES = [
    { rank: ManagerRank.CROWN_GOLD, level: 1, minShowrooms: 2, dailyBusiness: 3000, monthlyBusiness: 90000 },
    { rank: ManagerRank.ROYAL_BLACK, level: 2, minShowrooms: 4, dailyBusiness: 6000, monthlyBusiness: 180000},
    { rank: ManagerRank.SUPER_SHINE, level: 3, minShowrooms: 6, dailyBusiness: 10000, monthlyBusiness: 300000},
    { rank: ManagerRank.MASTER_PRO, level: 4, minShowrooms: 8, dailyBusiness: 15000, monthlyBusiness: 450000},
    { rank: ManagerRank.ULTRA_PRIME, level: 5, minShowrooms: 10, dailyBusiness: 20000, monthlyBusiness: 600000 },
    { rank: ManagerRank.DIAMOND_ACE, level: 6, minShowrooms: 12, dailyBusiness: 30000, monthlyBusiness: 900000 },
    { rank: ManagerRank.SUPER_KING, level: 7, minShowrooms: 15, dailyBusiness: 50000, monthlyBusiness: 1500000 },
    { rank: ManagerRank.SMART_LINE, level: 8, minShowrooms: 20, dailyBusiness: 75000, monthlyBusiness: 2250000 },
    { rank: ManagerRank.PRIME_STAR, level: 9, minShowrooms: 25, dailyBusiness: 100000, monthlyBusiness: 3000000 },
    { rank: ManagerRank.GRAND_PLUS, level: 10, minShowrooms: 30, dailyBusiness: 200000, monthlyBusiness: 6000000 },
];

// Rates as per 2025 Spec
export const PAYOUT_RATES = {
  // Measurement Rates (New vs Old handled in logic)
  MEASUREMENT_SHIRT_NEW: 20,
  MEASUREMENT_SHIRT_OLD: 10,
  MEASUREMENT_PANT_NEW: 30,
  MEASUREMENT_PANT_OLD: 15,
  
  // Fallbacks for other types
  MEASUREMENT_COAT: 50,
  MEASUREMENT_SAFARI: 40,
  MEASUREMENT_KURTA: 25, 
  MEASUREMENT_SUIT: 75, 

  // Cutting Rates 
  CUTTING_PANT: 50,
  CUTTING_SHIRT: 40, // Assuming similar ratio or standard
  CUTTING_SUIT: 150,
  CUTTING_SAFARI: 70,
  CUTTING_PYJAMA: 30,
  CUTTING_COAT: 100,

  // Stitching (Karigar) Rates
  STITCHING_PANT: 220, // Updated
  STITCHING_SHIRT: 120, // Updated
  STITCHING_SAFARI: 250,
  STITCHING_COAT: 800,
  STITCHING_SUIT: 1000, 
  STITCHING_SHERWANI: 1200,
  STITCHING_PYJAMA: 100, 

  // Kaj Button Rates
  KAJ_BUTTON_SHIRT: 10,
  KAJ_BUTTON_PANT: 10,
  KAJ_BUTTON_COAT: 20, 

  // Material Management Rates
  MATERIAL_ENTRY: 5, 
  MATERIAL_ISSUE: 2, 

  // Others
  FINISHING: 20, // Paresh
  RETURN_TO_SHOWROOM: 20 // Showroom Return
};

export const MOCK_ORDERS: Order[] = [];

// MOCK INVENTORY WITH CUSTOM ITEMS
export const MOCK_INVENTORY: InventoryItem[] = [
  { id: 'MAT-001', name: 'Premium Thread (Reel)', type: 'Thread', quantity: 50, unit: 'Gati', status: 'In Stock', costPerUnit: 120 },
  { id: 'MAT-002', name: 'Shirt Buttons (Batan)', type: 'Button', quantity: 1000, unit: 'Pcs', status: 'In Stock', costPerUnit: 2 },
  { id: 'MAT-003', name: 'Canvas (Kenvash)', type: 'Canvas', quantity: 20, unit: 'Meters', status: 'Low Stock', costPerUnit: 45 },
  { id: 'MAT-004', name: 'Box Patti', type: 'Patti Roll', quantity: 15, unit: 'Rolls', status: 'In Stock', costPerUnit: 90 },
  { id: 'MAT-005', name: 'Button Patti', type: 'Patti Roll', quantity: 15, unit: 'Rolls', status: 'In Stock', costPerUnit: 90 },
  { id: 'MAT-006', name: 'Belt Roll', type: 'Belt Roll', quantity: 10, unit: 'Rolls', status: 'Low Stock', costPerUnit: 150 },
  { id: 'MAT-007', name: 'Hooks (Huk)', type: 'Hook', quantity: 200, unit: 'Pcs', status: 'In Stock', costPerUnit: 5 },
  { id: 'MAT-008', name: 'Zip (Chain Jip)', type: 'Zip', quantity: 100, unit: 'Pcs', status: 'In Stock', costPerUnit: 10 },
  { id: 'MAT-009', name: 'Pocketing (Pogetin)', type: 'Pocketing', quantity: 100, unit: 'Meters', status: 'In Stock', costPerUnit: 60 },
  { id: 'MAT-010', name: 'Dhoti Canvas', type: 'Canvas', quantity: 50, unit: 'Meters', status: 'In Stock', costPerUnit: 55 },
  { id: 'MAT-011', name: 'Fusing Canvas', type: 'Canvas', quantity: 50, unit: 'Meters', status: 'In Stock', costPerUnit: 65 },
];
