import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { CustomerPortal } from './components/CustomerPortal';
import { AdminDashboard } from './components/AdminDashboard';
import { WorkerPanel } from './components/WorkerPanel';
import { VIPShowcase } from './components/VIPShowcase';
import { MaterialPanel } from './components/MaterialPanel';
import { FinishingPanel } from './components/FinishingPanel';
import { Login } from './components/Login';
import { ShowroomPanel } from './components/ShowroomPanel';
import { MeasurementPanel } from './components/MeasurementPanel';
import { ManagerPanel } from './components/ManagerPanel'; 
import { BookingMasterPanel } from './components/BookingMasterPanel'; 
import { InvestorPanel } from './components/InvestorPanel'; 
import { SocialConnect } from './components/SocialConnect'; // NEW
import { WorkerRole } from './types';
import { DataProvider, useData } from './DataContext';
import { ThemeProvider } from './ThemeContext';
import { 
  User, Scissors, Menu, X, Trophy, Users, Star, CheckCircle, 
  Ruler, Truck, ArrowRight, PenTool, Box, ShieldCheck, Crown,
  Briefcase, Activity, ShoppingBag, Layers, Gift
} from 'lucide-react';

const MainApp: React.FC = () => {
  const { currentUser, logout } = useData();
  const [view, setView] = React.useState<string>('DASHBOARD');

  if (!currentUser) {
    return <LandingPage />;
  }

  // Route based on Role
  const renderContent = () => {
    switch (currentUser.role) {
      case WorkerRole.ADMIN:
        // --- ADMIN SUPER ACCESS SWITCHER ---
        if (view === 'SHOWROOM') return <ShowroomPanel />;
        if (view === 'MEASUREMENT') return <MeasurementPanel />;
        if (view === 'CUTTING') return <WorkerPanel role={WorkerRole.CUTTING} />;
        if (view === 'STITCHING') return <WorkerPanel role={WorkerRole.STITCHING} />;
        if (view === 'FINISHING') return <FinishingPanel />;
        if (view === 'DELIVERY') return <WorkerPanel role={WorkerRole.DELIVERY} />;
        if (view === 'MATERIAL') return <MaterialPanel />;
        if (view === 'MANAGER') return <ManagerPanel />;
        if (view === 'INVESTOR') return <InvestorPanel />;
        if (view === 'BOOKING') return <BookingMasterPanel />;
        if (view === 'SOCIAL') return <SocialConnect />;
        // Default Admin Dashboard
        return <AdminDashboard />;
      
      case WorkerRole.MANAGER: 
        return <ManagerPanel />;

      case WorkerRole.SHOWROOM:
        if (view === 'SOCIAL') return <SocialConnect />;
        return <ShowroomPanel />;
      
      case WorkerRole.BOOKING_MASTER:
        return <BookingMasterPanel />;

      case WorkerRole.INVESTOR: 
        return <InvestorPanel />;

      case WorkerRole.MATERIAL:
        return <MaterialPanel />;

      case WorkerRole.CUTTING:
        return <WorkerPanel role={WorkerRole.CUTTING} />;

      // New Specific Roles
      case WorkerRole.SHIRT_MAKER:
        return <WorkerPanel role={WorkerRole.SHIRT_MAKER} />;
      case WorkerRole.PANT_MAKER:
        return <WorkerPanel role={WorkerRole.PANT_MAKER} />;
      case WorkerRole.COAT_MAKER:
        return <WorkerPanel role={WorkerRole.COAT_MAKER} />;
      case WorkerRole.SAFARI_MAKER:
        return <WorkerPanel role={WorkerRole.SAFARI_MAKER} />;
      case WorkerRole.SHERWANI_MAKER:
        return <WorkerPanel role={WorkerRole.SHERWANI_MAKER} />;
      
      case WorkerRole.KAJ_BUTTON:
        return <WorkerPanel role={WorkerRole.KAJ_BUTTON} />;
      case WorkerRole.DELIVERY:
        return <WorkerPanel role={WorkerRole.DELIVERY} />;

      case WorkerRole.STITCHING:
        return <WorkerPanel role={WorkerRole.STITCHING} />;
        
      case WorkerRole.FINISHING:
        return <FinishingPanel />;
        
      case WorkerRole.MEASUREMENT:
        return <MeasurementPanel />;

      default:
        return <div className="text-white text-center mt-20">Access Restricted</div>;
    }
  };

  const navButtonClass = (viewName: string) => 
    `text-xs font-bold uppercase tracking-wider py-2 px-4 whitespace-nowrap rounded-lg border transition-all flex items-center gap-2 ${view === viewName ? 'bg-gold-600 text-black border-gold-600 shadow-[0_0_15px_rgba(234,179,8,0.4)]' : 'text-neutral-400 border-neutral-800 hover:border-gold-500 hover:text-white'}`;

  return (
    <Layout role={currentUser.role} onLogout={logout}>
       {currentUser.role === WorkerRole.ADMIN && (
          <div className="mb-8">
             <div className="flex gap-2 pb-4 overflow-x-auto custom-scrollbar items-center">
                 <button onClick={() => setView('DASHBOARD')} className={navButtonClass('DASHBOARD')}>
                    <Activity className="h-3 w-3" /> Admin
                 </button>
                 <div className="w-px h-6 bg-neutral-800 mx-1"></div>
                 
                 <button onClick={() => setView('SHOWROOM')} className={navButtonClass('SHOWROOM')}>
                    <ShoppingBag className="h-3 w-3" /> Showroom
                 </button>
                 <button onClick={() => setView('SOCIAL')} className={navButtonClass('SOCIAL')}>
                    <Gift className="h-3 w-3" /> Birthday
                 </button>
                 <button onClick={() => setView('MEASUREMENT')} className={navButtonClass('MEASUREMENT')}>
                    <Ruler className="h-3 w-3" /> Measure
                 </button>
                 <button onClick={() => setView('CUTTING')} className={navButtonClass('CUTTING')}>
                    <Scissors className="h-3 w-3" /> Cutting
                 </button>
                 <button onClick={() => setView('STITCHING')} className={navButtonClass('STITCHING')}>
                    <PenTool className="h-3 w-3" /> Stitching
                 </button>
                 <button onClick={() => setView('FINISHING')} className={navButtonClass('FINISHING')}>
                    <CheckCircle className="h-3 w-3" /> Finish
                 </button>
                 <button onClick={() => setView('DELIVERY')} className={navButtonClass('DELIVERY')}>
                    <Truck className="h-3 w-3" /> Delivery
                 </button>
                 <button onClick={() => setView('MATERIAL')} className={navButtonClass('MATERIAL')}>
                    <Layers className="h-3 w-3" /> Material
                 </button>
                 <div className="w-px h-6 bg-neutral-800 mx-1"></div>
                 <button onClick={() => setView('MANAGER')} className={navButtonClass('MANAGER')}>
                    <Briefcase className="h-3 w-3" /> Manager
                 </button>
                 <button onClick={() => setView('INVESTOR')} className={navButtonClass('INVESTOR')}>
                    <ShieldCheck className="h-3 w-3" /> Investor
                 </button>
                 <button onClick={() => setView('BOOKING')} className={navButtonClass('BOOKING')}>
                    <Users className="h-3 w-3" /> Agent
                 </button>
             </div>
          </div>
       )}
       {currentUser.role === WorkerRole.SHOWROOM && (
           <div className="mb-8 flex gap-3">
               <button onClick={() => setView('SHOWROOM')} className={navButtonClass('SHOWROOM')}><ShoppingBag className="h-3 w-3"/> Showroom</button>
               <button onClick={() => setView('SOCIAL')} className={navButtonClass('SOCIAL')}><Gift className="h-3 w-3"/> Birthdays</button>
           </div>
       )}
       {renderContent()}
    </Layout>
  );
};

const LandingPage: React.FC = () => {
  const [mode, setMode] = React.useState<'LANDING' | 'CUSTOMER_TRACK' | 'STAFF_LOGIN'>('LANDING');
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  if (mode === 'STAFF_LOGIN') return <Login />;
  
  if (mode === 'CUSTOMER_TRACK') {
     return (
        <div className="bg-black min-h-screen p-4">
            <button onClick={() => setMode('LANDING')} className="text-white mb-4 flex items-center gap-2 font-bold">
              <ArrowRight className="h-4 w-4 rotate-180" /> Back Home
            </button>
            <CustomerPortal />
            <div className="mt-12"><VIPShowcase /></div>
        </div>
     );
  }

  return (
      <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-gold-500 selection:text-black">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Crown className="h-6 w-6 text-gold-500" />
              <div>
                <h1 className="text-lg font-serif font-bold tracking-wider text-white uppercase">LORDS BESPOKE</h1>
                <p className="text-[10px] text-gold-500 tracking-[0.2em] uppercase">Bespoke Tailoring</p>
              </div>
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 bg-black pt-24 px-6 animate-fade-in">
             <div className="space-y-6 text-2xl font-serif">
                <button onClick={() => setMode('CUSTOMER_TRACK')} className="block text-gold-500 w-full text-left hover:text-white transition-colors">Track Order</button>
                <button onClick={() => setMode('STAFF_LOGIN')} className="block text-white w-full text-left hover:text-gold-500 transition-colors">Staff Login</button>
                <a href="#" className="block text-neutral-500 hover:text-white transition-colors">About Us</a>
                <a href="#" className="block text-neutral-500 hover:text-white transition-colors">Contact</a>
             </div>
          </div>
        )}

        <div className="pt-24 px-4 pb-12 max-w-lg mx-auto space-y-16">
          
          {/* Hero Section */}
          <div className="space-y-4 pt-4 animate-fade-in">
             <p className="text-gold-500 text-xs font-bold uppercase tracking-widest">Bespoke Tailoring</p>
             <h2 className="text-5xl font-serif leading-tight">
               From the <span className="text-gold-500">atelier</span>
             </h2>
             <p className="text-neutral-400 text-lg leading-relaxed">
               Stories on style, craft, and care. Experience the pinnacle of sartorial excellence.
             </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
             <div className="bg-[#111] border border-[#222] p-6 rounded-2xl flex flex-col items-start gap-4 hover:border-gold-800 transition-colors">
                <Trophy className="h-6 w-6 text-gold-500" />
                <div>
                   <h3 className="text-2xl font-bold text-gold-500">25+</h3>
                   <p className="text-gold-500 text-lg font-bold">yrs</p>
                   <p className="text-xs text-neutral-500 mt-1">Tailoring heritage</p>
                </div>
             </div>
             <div className="bg-[#111] border border-[#222] p-6 rounded-2xl flex flex-col items-start gap-4 hover:border-gold-800 transition-colors">
                <Users className="h-6 w-6 text-gold-500" />
                <div>
                   <h3 className="text-2xl font-bold text-gold-500">10k+</h3>
                   <p className="text-xs text-neutral-500 mt-1">Delighted clients</p>
                </div>
             </div>
             <div className="bg-[#111] border border-[#222] p-6 rounded-2xl flex flex-col items-start gap-4 hover:border-gold-800 transition-colors">
                <Scissors className="h-6 w-6 text-gold-500" />
                <div>
                   <h3 className="text-2xl font-bold text-gold-500">500+</h3>
                   <p className="text-xs text-neutral-500 mt-1">Expert tailors</p>
                </div>
             </div>
             <div className="bg-[#111] border border-[#222] p-6 rounded-2xl flex flex-col items-start gap-4 hover:border-gold-800 transition-colors">
                <ShieldCheck className="h-6 w-6 text-gold-500" />
                <div>
                   <h3 className="text-2xl font-bold text-gold-500 flex items-center gap-1">4.9 <Star className="h-4 w-4 fill-gold-500" /></h3>
                   <p className="text-xs text-neutral-500 mt-1">Avg rating</p>
                </div>
             </div>
          </div>

          {/* Features Section */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
             <h3 className="text-3xl font-serif text-white">How it <span className="text-gold-500">works</span></h3>
             <p className="text-neutral-400 text-sm">From measurement to delivery, we make bespoke effortless.</p>
             
             <div className="grid gap-4">
                <div className="bg-[#111] border border-[#222] p-6 rounded-2xl flex items-start gap-4">
                   <div className="p-3 bg-gold-900/20 rounded-xl text-gold-500">
                      <PenTool className="h-6 w-6" />
                   </div>
                   <div>
                      <h4 className="text-lg font-bold text-white mb-1">Book & Measure</h4>
                      <p className="text-sm text-neutral-500">Schedule a visit or doorstep measurement.</p>
                   </div>
                </div>
                <div className="bg-[#111] border border-[#222] p-6 rounded-2xl flex items-start gap-4">
                   <div className="p-3 bg-gold-900/20 rounded-xl text-gold-500">
                      <Ruler className="h-6 w-6" />
                   </div>
                   <div>
                      <h4 className="text-lg font-bold text-white mb-1">Tailor Assigned</h4>
                      <p className="text-sm text-neutral-500">A master tailor crafts your garment.</p>
                      <ArrowRight className="h-4 w-4 text-gold-500 mt-2" />
                   </div>
                </div>
                <div className="bg-[#111] border border-[#222] p-6 rounded-2xl flex items-start gap-4">
                   <div className="p-3 bg-gold-900/20 rounded-xl text-gold-500">
                      <Truck className="h-6 w-6" />
                   </div>
                   <div>
                      <h4 className="text-lg font-bold text-white mb-1">Track & Delivery</h4>
                      <p className="text-sm text-neutral-500">Follow progress in your dashboard.</p>
                   </div>
                </div>
             </div>
          </div>

          <div className="pt-8 border-t border-neutral-900 space-y-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
             <div>
                <h2 className="text-4xl font-serif leading-tight mb-4">
                   Bespoke <br/><span className="text-gold-500">Elegance</span><br/> Redefined
                </h2>
                <p className="text-neutral-400 text-sm mb-8">
                   Experience luxury tailoring with our advanced platform. Track orders, manage measurements, and earn rewards.
                </p>
                
                <div className="flex gap-4">
                   <button 
                     onClick={() => setMode('CUSTOMER_TRACK')}
                     className="flex-1 bg-gold-500 hover:bg-gold-400 text-black font-bold py-4 rounded-full transition-colors flex items-center justify-center gap-2 shadow-lg shadow-gold-900/20"
                   >
                      Get Started <ArrowRight className="h-4 w-4" />
                   </button>
                   <button 
                     onClick={() => setMode('STAFF_LOGIN')}
                     className="flex-1 border border-neutral-700 hover:border-gold-500 text-white font-bold py-4 rounded-full transition-colors"
                   >
                      Sign In
                   </button>
                </div>
             </div>

             <div className="flex justify-between items-center pt-8 border-t border-neutral-900 text-center">
                <div>
                   <p className="text-2xl font-bold text-gold-500">500+</p>
                   <p className="text-[10px] text-neutral-500 uppercase">Expert Tailors</p>
                </div>
                <div className="w-px h-8 bg-neutral-800"></div>
                <div>
                   <p className="text-2xl font-bold text-gold-500">50K+</p>
                   <p className="text-[10px] text-neutral-500 uppercase">Orders Delivered</p>
                </div>
                <div className="w-px h-8 bg-neutral-800"></div>
                <div>
                   <p className="text-2xl font-bold text-gold-500 flex items-center justify-center gap-1">4.9 <Star className="h-3 w-3 fill-gold-500"/></p>
                   <p className="text-[10px] text-neutral-500 uppercase">Customer Rating</p>
                </div>
             </div>
          </div>

        </div>
      </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <DataProvider>
        <MainApp />
      </DataProvider>
    </ThemeProvider>
  );
};

export default App;