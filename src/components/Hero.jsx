import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { X, Globe, Zap } from 'lucide-react';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const regions = [
    {
        id: 'new-york',
        name: 'New York',
        coordinates: [-74.006, 40.7128],
        phase: 'Phase 1 & 2',
        location: 'Chinese Consulate',
        desc: 'Utilizing high-lumen GOBO technology to project messages of freedom and democracy directly onto the diplomatic facade.'
    },
    {
        id: 'berlin',
        name: 'Berlin',
        coordinates: [13.405, 52.52],
        phase: 'Phase 3',
        location: 'Chinese Embassy',
        desc: 'Extending the global reach of our visual activism to Europe, ensuring the call for democracy resonates across borders.'
    }
];

const Hero = () => {
    const [selectedRegion, setSelectedRegion] = useState(null);
    const themeColor = "#D2DEEB";

    return (
        <section id="hero" className="relative w-full h-screen bg-white overflow-hidden flex flex-col">

            {/* 1. 文字区域：上移并修复点击冲突 */}
            <div className="relative z-20 pt-32 pl-10 md:pl-20 w-full md:w-5/12 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="pointer-events-auto"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <Zap size={14} className="text-[#8BA4C1]" fill="currentColor" />
                        <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-400">
                            Global Projection Initiative
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
                        Global <br /> Projections
                    </h1>

                    <div className="border-l-[3px] border-[#D2DEEB] pl-6 max-w-sm">
                        <h2 className="text-base font-bold text-slate-800 mb-3 italic">
                            "Visualizing a Democratic China"
                        </h2>
                        <p className="text-slate-500 text-xs leading-relaxed font-medium">
                            We project symbols of resistance onto global diplomatic landmarks, challenging totalitarian narratives through light and public space.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* 2. 地图区域：颜色调浅，位置上移 */}
            <div className="absolute -bottom-[3%] -right-20 w-[85%] h-[85%] z-10 opacity-95">
                <ComposableMap
                    projectionConfig={{
                        rotate: [-10, 0, 0],
                        center: [15, -10],
                        scale: 210
                    }}
                    style={{ width: "100%", height: "100%" }}
                >
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill="#DDE7F0" // 调浅后的板块颜色
                                    stroke="#BCCCDD" // 调浅后的边界颜色
                                    strokeWidth={0.8}
                                    style={{
                                        default: { outline: "none" },
                                        hover: { fill: "#D2DEEB", outline: "none" }
                                    }}
                                />
                            ))
                        }
                    </Geographies>

                    {regions.map((region) => (
                        <Marker key={region.id} coordinates={region.coordinates}>
                            <g onClick={() => setSelectedRegion(region)} className="cursor-pointer group">
                                <circle r={14} fill={themeColor} className="animate-pulse opacity-50" />
                                <circle r={6} fill="#2D3748" className="group-hover:fill-blue-700 transition-colors" />
                                <text
                                    textAnchor="middle"
                                    y={-20}
                                    className="text-[9px] font-black fill-slate-700 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest"
                                >
                                    {region.name}
                                </text>
                            </g>
                        </Marker>
                    ))}
                </ComposableMap>
            </div>

            {/* 3. 弹窗 */}
            <AnimatePresence>
                {selectedRegion && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setSelectedRegion(null)}
                            className="absolute inset-0 bg-slate-900/5 backdrop-blur-[2px] z-30"
                        />
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 100, opacity: 0 }}
                            style={{ backgroundColor: themeColor }}
                            className="absolute right-8 top-12 bottom-12 w-full max-w-[380px] rounded-[3.5rem] p-12 z-40 shadow-2xl flex flex-col justify-between border border-white/50"
                        >
                            <div>
                                <button onClick={() => setSelectedRegion(null)} className="absolute -top-4 -left-4 p-2 hover:bg-white/40 rounded-full transition-colors">
                                    <X size={24} />
                                </button>
                                <div className="mt-8 text-left">
                                    <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight tracking-tighter uppercase italic">
                                        {selectedRegion.name}
                                    </h2>
                                    <p className="text-lg text-slate-700 leading-relaxed font-semibold">
                                        {selectedRegion.desc}
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white/40 p-6 rounded-[2rem] backdrop-blur-md text-center">
                                <div className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-1">Target Site</div>
                                <div className="text-base font-black text-slate-900 leading-none">{selectedRegion.location}</div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Hero;