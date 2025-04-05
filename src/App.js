import React, { useState } from 'react'; // Import useState

// --- Data Structure ---
// (Data remains the same as the previous version)
const dashboardData = {
    title: "Global Reset Signal Matrix",
    subtitle: "Empirical asset-based validation of the Nixon Shock 2.0 thesis",
    period: "Apr 2024 – Apr 2025",
    // Image URLs for each matrix
    commoditiesImageURL: "https://static.wixstatic.com/media/6072c3_7ccb94da5eb749dd811f7ed6b8591988~mv2.png",
    currenciesImageURL: "https://static.wixstatic.com/media/6072c3_7051f6d98f4743c9a2ac3d70ccd2bc7e~mv2.png",
    bondsImageURL: "https://static.wixstatic.com/media/6072c3_5e7b429c5bdb4458b5f1ed657bdb4442~mv2.png",
    equitiesImageURL: "https://static.wixstatic.com/media/6072c3_d201adbbbe554f35bf7193d0b1ea8adf~mv2.png",
    sections: [
        {
            id: "commodities",
            title: "I. COMMODITIES – Resource Stress Index",
            icon: "🔥",
            assets: [
                { name: "NG=F", signal: "Explosive rise (+150%)", summary: "reflects energy weaponization, Phase 3/4 ignition.", trend: "up" },
                { name: "GC=F", signal: "Steady rise", summary: "early institutional flight to safety.", trend: "up" },
                { name: "SI=F", signal: "Moderate rise", summary: "confirms precious metals hedging behavior.", trend: "up" },
                { name: "CL=F", signal: "Flat & volatile", summary: "demand fragility in multipolar slowdown.", trend: "flat" },
                { name: "HG=F", signal: "Moderate uptick", summary: "mild optimism on reshoring and infrastructure.", trend: "up" },
            ],
            inference: "Resource war dynamics in play. Energy and monetary metal demand preludes systemic distrust."
        },
        {
            id: "currencies",
            title: "II. CURRENCIES – Monetary Polarity Stress Map",
            icon: "💵",
            assets: [
                { name: "BTC-USD", signal: "Massive surge", summary: "digital flight = early exit door to fiat fragility.", trend: "up" },
                { name: "DXY", signal: "Slight rise", summary: "dollar retains inertia as last anchor of global confidence.", trend: "up" },
                { name: "JPY=X", signal: "Mildly positive, then reverts", summary: "waning safe-haven status.", trend: "flat" },
                { name: "CNH=X", signal: "Absent or flat", summary: "strategic opacity, reflects China’s controlled exposure.", trend: "flat" },
            ],
            inference: "Dual signaling—faith in dollar remains, but speculative capital preps exit infrastructure."
        },
        {
            id: "bonds",
            title: "III. BONDS – Sovereign Trust Gauge",
            icon: "🏛️",
            assets: [
                { name: "^TNX", signal: "Mid-year spike, Q1 crash", summary: "market price shock + panic reversal.", trend: "volatile" },
                { name: "^TYX", signal: "Rises higher than TNX, stays high", summary: "long-term risk premium building.", trend: "up" },
            ],
            inference: "Sovereign debt instruments oscillate between confidence collapse and forced safe haven. Systemic doubt growing."
        },
        {
            id: "equities",
            title: "IV. EQUITIES – Capital Allocation Compass",
            icon: "📈",
            assets: [
                { name: "GLD", signal: "Breakout leader", summary: "gold becomes strategic monetary anchor.", trend: "up" },
                { name: "QQQ", signal: "Volatile uptrend", summary: "tech fatigue as risk perception grows.", trend: "volatile" },
                { name: "SMH", signal: "Early boom, late crash", summary: "semiconductor vulnerability, esp. Taiwan tension.", trend: "down" },
                { name: "SPY", signal: "Mild strength, then fades", summary: "faith in U.S. market waning.", trend: "down" },
                { name: "XLI", signal: "Flat", summary: "reshoring strategy not yet priced in or realized.", trend: "flat" },
            ],
            inference: "Monetary hard assets lead while traditional equity instruments weaken, especially those exposed to geopolitical chokepoints."
        }
    ],
    convergence: {
        title: "STRATEGIC CONVERGENCE SUMMARY",
        icon: "🧭",
        phases: [
            { phase: 1, title: "Tariff war begins", evidence: "Equities and yield spike; SMH rises early." },
            { phase: 2, title: "Reshoring stall", evidence: "XLI fails to rise; suggests reshoring isn’t translating to investment flow." },
            { phase: 3, title: "Multipolar fracture", evidence: "BTC surges, CNH opaque, SMH drops → conflict priced in." },
            { phase: 4, title: "Asset confiscation", evidence: "Long bond risk premium (TYX), gold acceleration." },
            { phase: 5, title: "Nixon Shock 2.0", evidence: "GLD + BTC outperform → escape from fiat matrix begins." },
            { phase: 6, title: "Conflict realization", evidence: "SMH collapse, equity withdrawal → war scenario stress enters markets." },
        ]
    },
    assessment: {
        title: "Final Assessment",
        icon: "🔮",
        conclusion: "The combined signal set reveals a highly coordinated realignment of financial sentiment:",
        points: [
            "Capital is no longer purely return-seeking—it’s increasingly safety-seeking and sovereignty-aware.",
            "BTC and GLD are no longer fringe—they are strategic hedges.",
            "The global reset is no longer theory—it is being actively priced in by institutions in a fragmented, phased manner."
        ]
    },
    strategies: {
        title: "How to Make Money from the Global Reset Thesis",
        icon: "💸",
        items: [
             {
                id: 1,
                title: "Front-Run the Escape Routes (Phase 5 Alpha)",
                signal: "Surge in GLD & BTC → capital hedging future fiat stress.",
                actions: [
                    "🪙 Long GLD, SLV, BTC (spot or trust-based ETFs).",
                    "🏦 Buy call options on hard asset ETFs (e.g. GLD, GDX, BITO).",
                    "🌐 Early stakes in real asset tokenization platforms (e.g. gold-backed stablecoins, BTC lightning infra)."
                ]
            },
            {
                id: 2,
                title: "Exploit the Chokepoint Stress (Phase 3-6)",
                signal: "SMH surge then collapse = semiconductor geopolitics priced in.",
                actions: [
                    "📉 Short SMH or Taiwan-exposed chip stocks as war premium enters.",
                    "📊 Long U.S. defense/infra ETFs (e.g. ITA, XAR, PAVE).",
                    "🔁 Long India/Vietnam supply chain ETFs (e.g. INDA, VNM) as alternatives to China begin capital inflow."
                ]
            },
            {
                id: 3,
                title: "Trade the Sovereign Convulsions (Phase 4)",
                signal: "TNX ↘ TYX ↗ = bond distrust at long end.",
                actions: [
                    "🧮 Curve steepener trades: long short-dated, short long-dated Treasuries.",
                    "🛡 Buy CDS on emerging markets heavily exposed to dollar debt.",
                    "🧯 Rotate out of passive U.S. bond ETFs (e.g. TLT), hedge with inflation-protected (TIP)."
                ]
            },
            {
                id: 4,
                title: "The Reshoring Mirage (Phase 2 Trap)",
                signal: "XLI flat = industrial thesis not realized.",
                actions: [
                    "⛔ Avoid overexposure to domestic reshoring stocks.",
                    "✅ Wait for Phase 2 credibility before buying cyclicals (i.e. after actual policy execution, not just rhetoric)."
                ]
            }
        ]
    }
};

// --- Helper Function for Trend Indicator ---
const getTrendIndicator = (trend) => {
    switch (trend) {
        case 'up': return 'text-green-500';
        case 'down': return 'text-red-500';
        case 'flat': return 'text-gray-500';
        case 'volatile': return 'text-yellow-500';
        default: return 'text-gray-400';
    }
};

// --- Reusable Card Component (Used for non-tabbed sections) ---
const Card = ({ title, icon, children, className = "" }) => (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md mb-4 md:mb-6 ${className}`}>
        {title && (
            <div className="p-3 md:p-4 lg:p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200 flex items-center">
                    {icon && <span className="mr-2 text-xl md:text-2xl">{icon}</span>}
                    {title}
                </h2>
            </div>
        )}
        <div className="p-3 md:p-4 lg:p-6 text-gray-700 dark:text-gray-300 text-sm md:text-base">
            {children}
        </div>
    </div>
);

// --- Reusable Tabbed Card Component ---
const TabbedCard = ({ section, imageURL, activeTab, setActiveTab }) => {
    const tabBaseStyle = "px-3 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm font-medium rounded-t-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 dark:focus:ring-offset-gray-800 transition-colors duration-150 ease-in-out whitespace-nowrap";
    const activeTabStyle = "bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-500";
    const inactiveTabStyle = "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 border-b-2 border-transparent";
    const hasAssets = section.assets && Array.isArray(section.assets);

    return (
        <div key={section.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md mb-4 md:mb-6 flex flex-col overflow-hidden">
            <div className="p-3 md:p-4 lg:p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200 flex items-center">
                    {section.icon && <span className="mr-2 text-xl md:text-2xl">{section.icon}</span>}
                    {section.title}
                </h2>
            </div>
            <div className="border-b border-gray-200 dark:border-gray-700 px-3 md:px-4 lg:px-6">
                <nav className="-mb-px flex space-x-2 sm:space-x-4 overflow-x-auto" aria-label="Tabs">
                    <button
                        onClick={() => setActiveTab('list')}
                        className={`${tabBaseStyle} ${activeTab === 'list' ? activeTabStyle : inactiveTabStyle}`}
                        aria-current={activeTab === 'list' ? 'page' : undefined}
                    >
                        Asset List
                    </button>
                    <button
                        onClick={() => setActiveTab('chart')}
                        className={`${tabBaseStyle} ${activeTab === 'chart' ? activeTabStyle : inactiveTabStyle}`}
                        aria-current={activeTab === 'chart' ? 'page' : undefined}
                    >
                        12M Chart
                    </button>
                </nav>
            </div>
            <div className="p-3 md:p-4 lg:p-6 text-gray-700 dark:text-gray-300 flex-grow">
                {activeTab === 'list' && (
                    <>
                        {hasAssets ? (
                            <ul className="space-y-2 sm:space-y-3 mb-3 md:mb-4">
                                {section.assets.map((asset) => (
                                    <li key={asset.name} className="border-b border-gray-200 dark:border-gray-700 pb-2 last:border-b-0">
                                        <div className="flex justify-between items-start gap-2">
                                            <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm md:text-base">{asset.name}</span>
                                            <span className={`font-medium text-xs sm:text-sm text-right ${getTrendIndicator(asset.trend)}`}>
                                                {asset.signal}
                                            </span>
                                        </div>
                                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">{asset.summary}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 md:mb-4">No asset list available for this section.</p>
                        )}
                        <p className="text-xs sm:text-sm italic text-gray-500 dark:text-gray-400 mt-3 md:mt-4">
                            <span className="font-semibold">Inference:</span> {section.inference}
                        </p>
                    </>
                )}
                {activeTab === 'chart' && (
                    <div>
                        <img
                            src={imageURL}
                            alt={`${section.title} 12 Month Chart`}
                            className="w-full h-auto max-w-full rounded-md shadow-sm mb-3 md:mb-4"
                            onError={(e) => { e.target.style.display = 'none'; }}
                        />
                         <p className="text-xs sm:text-sm italic text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Inference:</span> {section.inference}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};


// --- Main Dashboard Component ---
function GeopoliticalDashboard() {
    const strategies = dashboardData.strategies;
    const [commoditiesTab, setCommoditiesTab] = useState('list');
    const [currenciesTab, setCurrenciesTab] = useState('list');
    const [bondsTab, setBondsTab] = useState('list');
    const [equitiesTab, setEquitiesTab] = useState('list');

    const getTabProps = (sectionId) => {
        switch (sectionId) {
            case 'commodities':
                return { activeTab: commoditiesTab, setActiveTab: setCommoditiesTab, imageURL: dashboardData.commoditiesImageURL };
            case 'currencies':
                return { activeTab: currenciesTab, setActiveTab: setCurrenciesTab, imageURL: dashboardData.currenciesImageURL };
            case 'bonds':
                return { activeTab: bondsTab, setActiveTab: setBondsTab, imageURL: dashboardData.bondsImageURL };
            case 'equities':
                return { activeTab: equitiesTab, setActiveTab: setEquitiesTab, imageURL: dashboardData.equitiesImageURL };
            default:
                return { activeTab: 'list', setActiveTab: () => {}, imageURL: '' };
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-2 sm:p-4 md:p-8 font-sans">
            <header className="mb-4 sm:mb-8 text-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                    {dashboardData.title}
                </h1>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                    {dashboardData.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mt-1">
                    Period Analyzed: {dashboardData.period}
                </p>
            </header>

            {/* Main Content Grid with responsive gap */}
            {/* This div controls the overall column layout */}
            {/* - grid: Enables grid layout */}
            {/* - grid-cols-1: Default to 1 column on small screens */}
            {/* - lg:grid-cols-2: Switch to 2 columns on large screens (1024px and up by default) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">

                {/* --- Render Matrix Sections using TabbedCard --- */}
                {dashboardData.sections.map((section) => {
                    const tabProps = getTabProps(section.id);
                    return (
                        <TabbedCard
                            key={section.id}
                            section={section}
                            imageURL={tabProps.imageURL}
                            activeTab={tabProps.activeTab}
                            setActiveTab={tabProps.setActiveTab}
                        />
                    );
                })}
                {/* --- End of Matrix Sections Rendering --- */}


                {/* Strategic Convergence Summary */}
                {/* This card will span one column by default, or half the width on large screens */}
                <Card title={dashboardData.convergence.title} icon={dashboardData.convergence.icon}>
                    <ol className="list-decimal list-inside space-y-1 md:space-y-2 text-sm md:text-base">
                        {dashboardData.convergence.phases.map((phase) => (
                            <li key={phase.phase}>
                                <span className="font-semibold">{`Phase ${phase.phase}: ${phase.title}`}</span>
                                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 ml-2 sm:ml-4">{phase.evidence}</p>
                            </li>
                        ))}
                    </ol>
                </Card>

                {/* Final Assessment */}
                {/* This card will span one column by default, or half the width on large screens */}
                <Card title={dashboardData.assessment.title} icon={dashboardData.assessment.icon}>
                     <p className="mb-2 md:mb-3 font-medium text-sm md:text-base">{dashboardData.assessment.conclusion}</p>
                    <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
                        {dashboardData.assessment.points.map((point, index) => (
                            <li key={index} className="text-xs sm:text-sm">{point}</li>
                        ))}
                    </ul>
                </Card>

                 {/* Strategies Section */}
                 {/* This card spans the full width on large screens (lg:col-span-2) */}
                <Card title={strategies.title} icon={strategies.icon} className="lg:col-span-2">
                    {strategies.items.map((item) => (
                        <div key={item.id} className="mb-4 md:mb-6 pb-3 md:pb-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0 last:pb-0 last:mb-0">
                            <h3 className="text-base md:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">{item.id}. {item.title}</h3>
                            {item.signal && (
                                <p className="text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 mb-1 md:mb-2 italic">
                                    <span className="font-medium">Signal:</span> {item.signal}
                                </p>
                            )}
                            {item.optionsTitle && <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mt-1 md:mt-2 mb-1">{item.optionsTitle}</p>}
                            <ul className="list-disc list-outside pl-4 sm:pl-5 space-y-1 text-xs sm:text-sm">
                                {item.actions.map((action, index) => (
                                    <li key={index} className="text-gray-600 dark:text-gray-400">{action}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    {strategies.bonus && (
                        <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-gray-200 dark:border-gray-700">
                             <h3 className="text-base md:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1 md:mb-2 flex items-center">
                                <span className="mr-2 text-lg md:text-xl">{strategies.bonus.icon}</span>
                                {strategies.bonus.title}
                            </h3>
                             <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1 md:mb-2">{strategies.bonus.intro}</p>
                             <ul className="list-disc list-outside pl-4 sm:pl-5 space-y-1 text-xs sm:text-sm">
                                {strategies.bonus.actions.map((action, index) => (
                                    <li key={index} className="text-gray-600 dark:text-gray-400">{action}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </Card>

            </div>
        </div>
    );
}

export default GeopoliticalDashboard; // Export the main component

