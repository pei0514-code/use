
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

// --- 品牌常數定義 ---
const Brand = {
  MCDONALDS: 'MCDONALDS',
  KFC: 'KFC',
  PIZZAHUT: 'PIZZAHUT',
  STARBUCKS: 'STARBUCKS'
};

const BRAND_CONFIG = {
  [Brand.MCDONALDS]: { name: '麥當勞', icon: '🍔', color: 'bg-red-600', textColor: 'text-red-600' },
  [Brand.KFC]: { name: '肯德基', icon: '🍗', color: 'bg-red-700', textColor: 'text-red-700' },
  [Brand.PIZZAHUT]: { name: '必勝客', icon: '🍕', color: 'bg-orange-600', textColor: 'text-orange-600' },
  [Brand.STARBUCKS]: { name: '星巴克', icon: '☕', color: 'bg-green-800', textColor: 'text-green-800' }
};

// --- 子組件：品牌專屬說明 ---
const BrandDetail = ({ brand }: { brand: string }) => {
  if (brand === Brand.MCDONALDS) {
    return (
      <div className="space-y-4 animate-in fade-in duration-500">
        <section className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
          <h4 className="font-bold text-red-600 mb-2 flex items-center">
            <span className="mr-2">🏪</span> 一、櫃檯使用方式
          </h4>
          <p className="text-sm text-slate-600 pl-7 leading-relaxed">告知店員欲使用電子商品卷，提供<span className="font-bold text-red-500 underline">截圖</span>給店員掃描。</p>
        </section>

        <section className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
          <h4 className="font-bold text-red-600 mb-2 flex items-center">
            <span className="mr-2">🚗</span> 二、得來速使用方式
          </h4>
          <p className="text-sm text-slate-600 pl-7 leading-relaxed">告知點餐對講機欲使用電子商品卷，再到下一窗口掃描電子商品卷。</p>
        </section>

        <section className="bg-red-50 p-5 rounded-3xl shadow-sm border border-red-100">
          <h4 className="font-bold text-red-600 mb-3 flex items-center">
            <span className="mr-2">🖥️</span> 三、自助點餐機使用方式
          </h4>
          <div className="text-sm text-slate-700 space-y-3">
            <p className="flex items-start gap-2"><span className="bg-red-200 text-red-700 w-5 h-5 flex items-center justify-center rounded-full text-xs shrink-0 mt-0.5">1</span> 點選開始 → 選擇用餐方式(外帶或內用)</p>
            <p className="flex items-start gap-2"><span className="bg-red-200 text-red-700 w-5 h-5 flex items-center justify-center rounded-full text-xs shrink-0 mt-0.5">2</span> 左上角選「<span className="font-bold">電子商品卷</span>」</p>
            <p className="flex items-start gap-2"><span className="bg-red-200 text-red-700 w-5 h-5 flex items-center justify-center rounded-full text-xs shrink-0 mt-0.5">3</span> 點選「請掃描電子商品卷」</p>
            <p className="flex items-start gap-2"><span className="bg-red-200 text-red-700 w-5 h-5 flex items-center justify-center rounded-full text-xs shrink-0 mt-0.5">4</span> 打開截圖放在掃描區進行感應</p>
            <p className="flex items-start gap-2"><span className="bg-red-200 text-red-700 w-5 h-5 flex items-center justify-center rounded-full text-xs shrink-0 mt-0.5">5</span> 確認餐點（可特製去冰等）</p>
            <div className="bg-white/60 p-3 rounded-xl border border-red-200 text-xs italic text-red-800">
              ※ １次最多掃描 5 張，但可重複多次兌換。
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (brand === Brand.KFC) {
    return (
      <div className="space-y-4 animate-in fade-in duration-500">
        <section className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
          <h4 className="font-bold text-red-700 mb-3 flex items-center">
            <span className="mr-2">🌐</span> 四、肯德基線上點餐
          </h4>
          <div className="pl-7 space-y-3">
            <div>
              <p className="text-sm font-bold text-slate-800 underline underline-offset-4">1. 肯德基官網兌換：</p>
              <p className="text-sm text-slate-600 mt-1">至官網【優惠券】區輸入序號即可兌換。建議使用【預訂快取】取餐更方便。</p>
              <a href="https://www.kfcclub.com.tw/Coupon" target="_blank" className="inline-block mt-2 px-4 py-1.5 bg-red-700 text-white text-xs rounded-full font-bold shadow-sm">前往官網兌換 →</a>
            </div>
          </div>
        </section>

        <section className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
          <h4 className="font-bold text-red-700 mb-2 flex items-center">
            <span className="mr-2">🏪</span> 門市兌換方式
          </h4>
          <p className="text-sm text-slate-600 pl-7 leading-relaxed">
            請告知人員選擇「<span className="font-bold">兌換掃券</span>」按鍵進行核銷。不接受手抄或口說序號。<span className="text-red-600 font-medium italic">自助點餐機亦可使用。</span>
          </p>
        </section>

        <div className="bg-slate-100 p-4 rounded-2xl text-xs text-slate-500">
          <p>※ 外送服務、點餐車道不適用。</p>
          <a href="https://www.edenred.com.tw/index.php/store/kfc/" target="_blank" className="text-blue-500 underline mt-1 block">查看不適用門市清單</a>
        </div>
      </div>
    );
  }

  if (brand === Brand.PIZZAHUT) {
    return (
      <div className="space-y-4 animate-in fade-in duration-500">
        <section className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
          <h4 className="font-bold text-orange-600 mb-3 flex items-center">
            <span className="mr-2">🍕</span> 五、必勝客點餐方式
          </h4>
          <div className="pl-7 space-y-4">
            <div>
              <p className="text-sm font-bold text-slate-800">(1) 官網及 PK 雙響卡 APP：</p>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                選單點選「優惠券兌換」→「輸入電子禮券序號」。輸入 <span className="bg-slate-100 px-1 font-mono text-orange-700 font-bold">VP</span> 開頭之 20 碼序號。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800">(2) 門市現場兌換：</p>
              <p className="text-sm text-slate-600 mt-1">告知人員選擇「兌換掃券」按鍵，結帳前請出示截圖。</p>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800">(3) 電話訂餐：</p>
              <p className="text-sm text-slate-600 mt-1">市話撥打 412-9889，提供 20 碼序號，取餐時出示截圖。</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (brand === Brand.STARBUCKS) {
    return (
      <div className="space-y-4 animate-in fade-in duration-500">
        <section className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
          <h4 className="font-bold text-green-800 mb-2 flex items-center">
            <span className="mr-2">☕</span> 星巴克櫃檯使用
          </h4>
          <p className="text-sm text-slate-600 pl-7 leading-relaxed">
            請告知店員欲使用電子商品卷，並提供手機<span className="font-bold underline text-green-700">截圖</span>給店員進行條碼掃描即可。
          </p>
        </section>
        <div className="bg-green-50 p-4 rounded-2xl border border-green-100 text-xs text-green-800 italic">
          請於兌換前確認商品容量規格（大、中、小杯）是否符合。
        </div>
      </div>
    );
  }
  return null;
};

// --- 主程式組件 ---
const App = () => {
  const [profile, setProfile] = useState({ displayName: '○○○' });
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  useEffect(() => {
    const init = async () => {
      try {
        await (window as any).liff.init({ liffId: 'YOUR_LIFF_ID' }); // 請替換真實 ID
        if ((window as any).liff.isLoggedIn()) {
          const user = await (window as any).liff.getProfile();
          setProfile(user);
        }
      } catch (err) {
        console.log('LIFF 無法初始化，使用預設名稱。');
      }
    };
    init();
  }, []);

  return (
    <div className="min-h-screen max-w-md mx-auto bg-slate-50 flex flex-col shadow-2xl overflow-hidden">
      {/* 頁首：招呼語 */}
      <header className="bg-gradient-to-br from-red-600 to-orange-500 text-white p-8 pb-14 rounded-b-[3.5rem] shadow-xl relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
        <div className="relative z-10 space-y-2">
          <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Mai Mai Store</p>
          <h1 className="text-xl">
            親愛的 LINE 會員 <span className="font-bold border-b-2 border-yellow-300 pb-0.5">{profile.displayName}</span> 您好
          </h1>
          <h2 className="text-2xl font-black mt-2">請選擇您購買的商品種類</h2>
        </div>
      </header>

      {/* 品牌選擇器 */}
      <main className="px-6 -mt-8 flex-grow relative z-20">
        <div className="grid grid-cols-2 gap-4 mb-8">
          {(Object.keys(Brand) as Array<keyof typeof Brand>).map((key) => {
            const b = Brand[key];
            const config = BRAND_CONFIG[b];
            const isActive = selectedBrand === b;
            return (
              <button
                key={b}
                onClick={() => setSelectedBrand(b)}
                className={`flex flex-col items-center justify-center p-5 rounded-[2.5rem] bg-white border-2 transition-all duration-300 shadow-sm ${
                  isActive ? 'border-red-500 ring-4 ring-red-100 scale-105' : 'border-white hover:border-slate-100'
                }`}
              >
                <span className="text-4xl mb-1">{config.icon}</span>
                <span className={`text-xs font-bold ${isActive ? config.textColor : 'text-slate-500'}`}>{config.name}</span>
              </button>
            );
          })}
        </div>

        {/* 說明顯示區 */}
        {selectedBrand ? (
          <div className="mb-8">
            <BrandDetail brand={selectedBrand} />
            
            {/* 試算表連結 */}
            <a 
              href="https://docs.google.com/spreadsheets/d/1HR_0C9BW8ib7dxPG5Iic0K31i0xKk500Dfkvbxhwq5Y/edit?gid=1812571023#gid=1812571023"
              target="_blank"
              className="mt-6 flex items-center justify-center gap-2 w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm shadow-md active:scale-95 transition-transform"
            >
              📊 點此查看完整商品清單總表
            </a>
          </div>
        ) : (
          <div className="py-16 text-center bg-slate-100/50 rounded-[3rem] border-2 border-dashed border-slate-200 mb-8">
            <p className="text-slate-400 text-sm font-medium leading-relaxed">
              👆 請點擊上方圖標<br/>即刻展開兌換教學
            </p>
          </div>
        )}

        {/* 注意事項 */}
        <section className="bg-amber-50 rounded-[2.5rem] p-7 border border-amber-100 shadow-inner mb-10">
          <h3 className="text-amber-800 font-black text-lg mb-4 flex items-center gap-2">
            <span className="bg-amber-200 w-8 h-8 flex items-center justify-center rounded-full text-lg">📝</span> 
            注意事項
          </h3>
          <ul className="space-y-4 text-xs text-amber-900/80 font-medium pl-6 list-decimal leading-relaxed">
            <li>請將以上<span className="text-red-600 font-bold underline">截圖保存</span>下來，期限為取得後約 <span className="font-bold underline italic">30天內</span> 兌換，請儘速兌換以免遺忘。</li>
            <li>兌換時再開啟截圖畫面給櫃台人員或機台使用即可。</li>
            <li>請記得在<span className="text-red-700 font-bold">使用期限內</span>兌換，逾期將失效恕無法補發或退款。</li>
            <li>本電子兌換憑證每次交易可兌換 <span className="text-red-600 font-bold underline">5 張</span>，可多次重複使用。</li>
            <li>若於兌換前查詢或取消使用，序號將被鎖定 <span className="bg-amber-200 px-1">5 分鐘</span>，請稍候再試。</li>
          </ul>
        </section>
      </main>

      <footer className="text-center py-8 opacity-20 text-[10px] tracking-[0.2em] font-bold">
        MAI MAI STORE • TICKET GUIDE 2025
      </footer>
    </div>
  );
};

// 渲染根節點
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
