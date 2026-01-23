import React from 'react';
import { Link } from 'react-scroll';
import flashlight from '../assets/flashlight.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    return (

        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                {/* Logo 区域 */}
                <div className="flex items-center gap-3">
                    <img
                        src={flashlight}
                        alt="flashlight logo"
                        className="w-10 h-10 object-contain rounded-full shadow-sm"
                    />
                    {/* 可选：加上你的项目名称 */}
                    <span className="font-black text-slate-900 uppercase tracking-tighter text-lg italic">
                        The Action
                    </span>
                </div>

                {/* 中间导航链接 */}
                <ul className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.2em] text-slate-500 font-bold items-center">
                    <li>
                        <Link to="hero" smooth={true} duration={500} offset={-100} className="cursor-pointer hover:text-slate-900 transition-colors">
                            Mission
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-slate-900 transition-colors">
                            Initiatives
                        </Link>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} duration={500} offset={-60} className="cursor-pointer hover:text-slate-900 transition-colors">
                            Purpose
                        </Link>
                    </li>
                </ul>

                {/* 右侧操作区域 */}
                <div className="flex items-center gap-8">
                    {/* Join Us: 作为次级链接 */}
                    <p className="hidden sm:block text-slate-400 hover:text-slate-900 cursor-pointer font-black transition-all duration-300 uppercase tracking-widest text-[10px]">
                        Join Us
                    </p>

                    {/* Donate: 作为主级按钮 */}
                    <button
                        onClick={() => navigate('/donate')} // 确保你在 App.js 里配置了这个路由
                        className="bg-slate-900 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-slate-700 hover:shadow-lg transition-all active:scale-95"
                    >
                        Donate
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Header;