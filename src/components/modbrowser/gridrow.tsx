import { Category, ModInstaller, ModSource } from "@prisma/client";
import { useState } from "react";
import { ModInstallerRender, ModRatingRender, ModSourceRender } from "../modbrowser";

const GridRow: React.FC<{ mod: any, addClasses: string, banner: string, descShort: string, dots: string, cat: any, catPar?: Category | null, catParIcon: string, catParLink: string | null, catIcon: string, catLink: string | null,  viewLink: string }> = ({ mod, addClasses, banner, descShort, dots, cat, catPar, catParIcon, catParLink, catIcon, catLink, viewLink }) => {
    const [sourcesMenuOpen, setSourcesMenuOpen] = useState(false);
    const [installersMenuOpen, setInstallersMenuOpen] = useState(false);

    return (
        <div key={mod.id} className={"w-4/5 md:w-96 h-[32rem] rounded bg-gradient-to-b from-cyan-800 to-cyan-900 flex flex-col shadow-lg" + addClasses}>
            <div className="relative modImage w-full max-h-64 h-64">
                <img className="w-full h-full max-h-full rounded-t" src={banner} alt="Mod Banner" />
                {mod.ownerName != null && mod.ownerName.length > 0 && (
                    <div className="absolute bottom-0 left-0 h-8 pr-4 rounded-tr bg-cyan-900/60 hover:bg-cyan-900 flex items-center">
                        <p className="text-white text-sm ml-1">{mod.ownerName}</p>
                    </div>
                )}

            </div>
            <div className="mainInfo ml-8 mr-8 mb-4 max-h-24 grow overflow-hidden text-ellipsis">
                    <h3 className="text-white text-lg md:text-xl font-bold text-center">{mod.name}</h3>
                    <p className="text-white mt-2 text-sm">{descShort.substring(0, 120)}{dots}</p>
            </div>
            {catPar != null && (
                <div className="modCategory ml-8 mr-8 mb-1 text-white flex">
                    <img src={catParIcon} className="w-6 h-6 rounded" alt="Category Icon" />
                    <span className="ml-2 mr-2">
                        {catParLink != null ? (
                            <a href={catParLink}>{catPar.name}</a>
                        ) : (
                            <span>{catPar.name}</span>
                        )}
                    </span>
                </div>
            )}
            {cat != null && (
                <div className="modCategory ml-8 mr-8 mb-1 text-white flex">
                    <img src={catIcon} className="w-6 h-6 rounded" alt="Category Icon" />
                    <span className="ml-2">
                        {catLink != null ? (
                            <a href={catLink}>{cat.name}</a>
                        ) : (
                            <span>{cat.name}</span>
                        )}
                    </span>
                </div>
            )}
            <div className="grow"></div>
            <div className="modStats flex justify-between items-center">
                <div className="relative ml-2 w-1/5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_429_11085)"><path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 12C3.60014 7.90264 7.33603 5 12 5C16.664 5 20.3999 7.90264 22 12C20.3999 16.0974 16.664 19 12 19C7.33603 19 3.60014 16.0974 2 12Z" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_429_11085"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
                    <span className="text-white text-sm ml-1">{mod.totalViews.toString()}</span>
                </div>

                <ModRatingRender
                    mod={mod}
                />

                <div className="relative mr-2 w-1/5 flex justify-end items-end flex-col">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 11L12 15M12 15L8 11M12 15V3M21 15V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V15" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span className="text-white text-sm mr-1">{mod.totalDownloads.toString()}</span>
                </div>
            </div>
            <div className="modLinks justify-between flex text-center bg-cyan-700 rounded-b">
                <a href={viewLink} className="text-white font-bold p-2 w-1/3">View</a>
                {mod.ModInstaller != null && mod.ModInstaller.length > 0 && (
                    <>
                        <div className="relative p-2 w-1/3">
                            <button id={"installerDropdownBtn" + mod.id} onClick={() => {
                                setInstallersMenuOpen(!installersMenuOpen);
                            }} className="text-white font-bold flex items-center mx-auto" type="button"><span>Install</span> {!installersMenuOpen ? (
                                <svg className="w-4 h-4 text-center ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_429_11251)"><path d="M7 10L12 15" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 15L17 10" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_429_11251"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
                            ) : (
                                <svg className="w-4 h-4 text-center ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_429_11224)"><path d="M17 14L12 9" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 9L7 14" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_429_11224"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
                            )}</button>
        
                            <ul id={"installerDropdownMenu" + mod.id} className={`absolute z-30 py-1 text-sm bg-cyan-800 ${ installersMenuOpen ? "block" : "hidden" }`} aria-labelledby={"installerDropdownBtn" + mod.id}>
                                {mod.ModInstaller.map((ins: ModInstaller) => {
                                    return (
                                        <ModInstallerRender
                                            key={mod.id + "-" + ins.sourceUrl}
                                            modIns={ins}
                                        />
                                    );
                                })}
                            </ul>
                        </div>
                    </>
                )}
                {mod.ModSource != null && mod.ModSource.length > 0 && (
                    <div className="relative p-2 w-1/3">
                        <button id={"sourceDropdownBtn" + mod.id} onClick={() => {
                            setSourcesMenuOpen(!sourcesMenuOpen);
                        }} className="text-white font-bold flex items-center mx-auto" type="button"><span>Sources</span> {!sourcesMenuOpen ? (
                            <svg className="w-4 h-4 text-center ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_429_11251)"><path d="M7 10L12 15" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 15L17 10" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_429_11251"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
                        ) : (
                            <svg className="w-4 h-4 text-center ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_429_11224)"><path d="M17 14L12 9" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 9L7 14" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_429_11224"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
                        )}</button>
    
                        <ul id={"sourceDropdownMenu" + mod.id} className={`absolute z-30 py-1 text-sm bg-cyan-800 ${ sourcesMenuOpen ? "block" : "hidden" }`} aria-labelledby={"installerDropdownBtn" + mod.id}>
                            {mod.ModSource.map((src: ModSource) => {
                                return (
                                    <ModSourceRender
                                        key={mod.id + "-" + src.sourceUrl}
                                        modSrc={src}
                                    />
                                );
                            })}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default GridRow;