import React from "react";

export const Hero = () => {
    return (
        <div className="hero-root">
            <div className="badge">
                <span>QSBS just got better in July 2025</span>
                <svg viewBox="0 0 16 16" width="16" height="16" fill="none" className="badge-icon">
                    <path stroke="#1E1F25" strokeLinecap="round" strokeLinejoin="round" strokeOpacity=".5" strokeWidth="1.25" d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5" data-label="path"></path></svg>
            </div>
            
            <h1 className="hero-title">
                <span className="hero-title-line-1">Magically simplify</span>
                <span className="hero-title-line-2">accounting and taxes</span>
            </h1>
            <p className="hero-subtitle">
            Automated bookkeeping, effortless tax filing, real‑time insights. Set up in 10 mins. Back to building by 4:20pm.
            </p>
            <div className="hero-cta">
                <button className="btn">Start free trial</button>
                <button className="btn btn-secondary"><span>Pricing</span>
                <svg viewBox="0 0 16 16" width="16" height="16" fill="none" className="badge-icon">
                <path stroke="#1E1F25" strokeLinecap="round" strokeLinejoin="round" strokeOpacity=".5" strokeWidth="1.25" d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5" data-label="path"></path></svg>
                </button>
            </div>
        </div>
    );
};