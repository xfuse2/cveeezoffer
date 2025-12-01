import React from 'react';

const ThreeDCVVisual: React.FC = () => {
    return (
        <div className="relative w-full h-[350px] md:h-[500px] flex items-center justify-center" style={{ perspective: '1200px' }}>
            {/* Main Card Container with 3D Transform */}
            <div 
                className="relative w-56 h-72 md:w-80 md:h-[450px] bg-white rounded-xl shadow-2xl border border-slate-100 transition-all duration-700 ease-out hover:[transform:rotateX(0deg)_rotateY(0deg)_scale(1.05)] cursor-pointer group"
                style={{ 
                    transform: 'rotateX(5deg) rotateY(-12deg) rotateZ(2deg)',
                    transformStyle: 'preserve-3d',
                    animation: 'float 6s ease-in-out infinite'
                }}
            >
                {/* Glossy Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-transparent rounded-xl z-20 pointer-events-none group-hover:opacity-50 transition-opacity"></div>

                {/* CV Content Skeleton */}
                <div className="p-4 md:p-6 h-full flex flex-col gap-3 md:gap-4 opacity-95">
                    {/* Header */}
                    <div className="flex gap-3 md:gap-4 items-center border-b border-slate-100 pb-3 md:pb-4">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-brand-100 border-2 border-white shadow-sm flex items-center justify-center">
                            <span className="text-2xl">👤</span>
                        </div>
                        <div className="flex-1 space-y-2">
                            <div className="h-3 md:h-4 bg-gray-800 rounded w-3/4"></div>
                            <div className="h-2 md:h-3 bg-brand-500 rounded w-1/2"></div>
                        </div>
                    </div>
                    
                    <div className="flex flex-1 gap-3 md:gap-4">
                        {/* Sidebar */}
                        <div className="w-1/3 space-y-2 pt-2 border-l pl-2 border-slate-50">
                            <div className="h-1.5 md:h-2 bg-gray-200 rounded w-full"></div>
                            <div className="h-1.5 md:h-2 bg-gray-200 rounded w-5/6"></div>
                            <div className="h-1.5 md:h-2 bg-gray-200 rounded w-4/6"></div>
                            <div className="h-1.5 md:h-2 bg-gray-200 rounded w-full"></div>
                            <div className="mt-4 h-16 bg-brand-50 rounded w-full"></div>
                        </div>
                        
                        {/* Main Body */}
                        <div className="w-2/3 space-y-2 pt-2">
                            <div className="h-2.5 md:h-3 bg-gray-300 rounded w-1/3 mb-1"></div>
                            <div className="h-1.5 bg-gray-100 rounded w-full"></div>
                            <div className="h-1.5 bg-gray-100 rounded w-full"></div>
                            <div className="h-1.5 bg-gray-100 rounded w-5/6"></div>

                            <div className="h-2.5 md:h-3 bg-gray-300 rounded w-1/3 mb-1 mt-3"></div>
                            <div className="h-1.5 bg-gray-100 rounded w-full"></div>
                            <div className="h-1.5 bg-gray-100 rounded w-4/5"></div>
                            
                            <div className="mt-4 p-2 bg-green-50 rounded border border-green-100 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <div className="h-1.5 bg-green-200 rounded w-2/3"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3D Floating Elements */}
                
                {/* 1. ATS Badge (Top Right) */}
                <div 
                    className="absolute -right-8 top-8 md:-right-12 md:top-12 bg-white text-gray-800 p-2 md:p-3 rounded-lg shadow-xl border-l-4 border-green-500 flex flex-col items-center gap-1 z-30"
                    style={{ 
                        transform: 'translateZ(50px)', 
                        animation: 'float 7s ease-in-out 1s infinite' 
                    }}
                >
                    <span className="text-[8px] md:text-[10px] uppercase font-bold text-gray-400 tracking-wider">ATS Score</span>
                    <span className="text-xl md:text-2xl font-black text-green-600 font-mono">98%</span>
                </div>

                {/* 2. LinkedIn Icon (Bottom Left) */}
                <div 
                    className="absolute -left-4 bottom-16 md:-left-8 md:bottom-24 bg-[#0077b5] p-2 md:p-3 rounded-xl shadow-lg z-30 flex items-center justify-center"
                    style={{ 
                        transform: 'translateZ(80px) rotate(-10deg)', 
                        animation: 'float 8s ease-in-out 2s infinite' 
                    }}
                >
                    <svg className="w-6 h-6 md:w-8 md:h-8 fill-white" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>

                {/* 3. Decorative Sphere (Top Left) */}
                 <div 
                    className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-gradient-to-br from-brand-300 to-brand-600 shadow-lg z-10 opacity-80"
                    style={{ 
                        transform: 'translateZ(20px)',
                        animation: 'float 5s ease-in-out 0.5s infinite'
                    }}
                 ></div>
            </div>

            {/* Depth Layers (Back cards) */}
            <div 
                className="absolute w-52 h-64 md:w-72 md:h-96 bg-brand-200 rounded-xl opacity-30 -z-10"
                style={{ 
                    transform: 'translateZ(-40px) translateX(30px) rotate(5deg)',
                    animation: 'float 6s ease-in-out 0.5s infinite' 
                }}
            ></div>
            
            {/* Glow Effect */}
            <div className="absolute w-64 h-64 bg-brand-400 rounded-full mix-blend-screen filter blur-[60px] opacity-30 -z-20 animate-pulse"></div>
        </div>
    );
};

export default ThreeDCVVisual;