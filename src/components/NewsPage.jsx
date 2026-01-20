import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Users, ChevronLeft } from 'lucide-react';

const newsData = [
    {
        id: 1,
        source: "The New York Times",
        title: "Art as Resistance: Global Projections Challenge Censorship",
        date: "Dec 12, 2025",
        content: "Activists in New York and Berlin are using high-lumen projectors to transform the facades of diplomatic landmarks into messages of freedom. The 'China Action' initiative has successfully projected tributes to Liu Xiaobo...",
    },
    {
        id: 2,
        source: "The Guardian",
        title: "Berlin Landmark Becomes Canvas for Human Rights Tributes",
        date: "Jan 02, 2026",
        content: "As the clock struck midnight on New Year's Day, the city of Berlin witnessed a powerful display of digital activism. Images of prisoners of conscience were projected, demanding an end to totalitarian narratives...",
    },
    // 可以继续添加更多新闻数据
];

const NewsPage = () => {
    const [selectedNews, setSelectedNews] = useState(newsData[0]);

    return (
        <div className="flex h-screen bg-[#F8FAFC] text-slate-900 overflow-hidden font-sans">

            {/* 左侧：新闻标题列表 (3/12 宽度) */}
            <div className="w-1/3 md:w-1/4 border-r border-slate-200 bg-white overflow-y-auto px-6 py-12">
                <div className="mb-10 flex items-center gap-2 text-[#8BA4C1] uppercase tracking-widest text-[10px] font-bold">
                    <ChevronLeft size={14} /> Back to Map
                </div>

                <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-8 px-2">
                    Media Coverage
                </h3>

                <div className="space-y-2">
                    {newsData.map((news) => (
                        <div
                            key={news.id}
                            onClick={() => setSelectedNews(news)}
                            className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 group ${
                                selectedNews.id === news.id
                                    ? "bg-[#D2DEEB] shadow-sm"
                                    : "hover:bg-slate-50"
                            }`}
                        >
                            <p className={`text-[10px] font-bold mb-1 uppercase tracking-tight ${
                                selectedNews.id === news.id ? "text-slate-700" : "text-slate-400"
                            }`}>
                                {news.source} • {news.date}
                            </p>
                            <h4 className={`text-sm font-bold leading-tight ${
                                selectedNews.id === news.id ? "text-slate-900" : "text-slate-600 group-hover:text-slate-900"
                            }`}>
                                {news.title}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>

            {/* 右侧：新闻详情内容 (9/12 宽度) */}
            <div className="flex-1 overflow-y-auto bg-white relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedNews.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="max-w-3xl mx-auto px-10 py-20"
                    >
                        {/* 新闻头部 */}
                        <div className="mb-12">
                            <span className="bg-[#D2DEEB] text-slate-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                                {selectedNews.source}
                            </span>
                            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-6 mb-4 tracking-tighter italic">
                                {selectedNews.title}
                            </h1>
                            <p className="text-slate-400 text-sm font-medium">{selectedNews.date}</p>
                        </div>

                        {/* 新闻主体内容 */}
                        <div className="prose prose-slate max-w-none mb-20">
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                {selectedNews.content}
                            </p>
                            {/* 这里可以继续添加更多长段落 */}
                        </div>

                        {/* Join Us 按钮区域 */}
                        <div className="border-t border-slate-100 pt-16 flex flex-col items-center">
                            <div className="bg-[#D2DEEB]/30 p-10 rounded-[3rem] w-full text-center border border-[#D2DEEB]/50">
                                <h3 className="text-2xl font-black text-slate-900 mb-4 italic uppercase">Be Part of the Action</h3>
                                <p className="text-slate-500 text-sm mb-8 max-w-md mx-auto font-medium">
                                    Our movement grows through global solidarity. Join us in demanding justice for those silenced.
                                </p>
                                <button className="flex items-center justify-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-slate-800 transition-all shadow-xl group">
                                    <Users size={18} />
                                    Join Us
                                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default NewsPage;