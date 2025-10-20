(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Navbar = ()=>{
    var _session_user, _session_user1, _session_user2, _session_user3, _session_user4, _session_user5, _session_user6, _session_user7, _session_user8, _session_user9;
    _s();
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [activeNavItem, setActiveNavItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [lastScrollY, setLastScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const controlNavbar = {
                "Navbar.useEffect.controlNavbar": ()=>{
                    const currentScrollY = window.scrollY;
                    if (currentScrollY < 10) {
                        // Always show at top
                        setIsVisible(true);
                    } else if (currentScrollY < lastScrollY) {
                        // Scrolling up
                        setIsVisible(true);
                    } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                        // Scrolling down
                        setIsVisible(false);
                        setIsMobileMenuOpen(false);
                    }
                    setLastScrollY(currentScrollY);
                }
            }["Navbar.useEffect.controlNavbar"];
            window.addEventListener('scroll', controlNavbar);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener('scroll', controlNavbar)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        lastScrollY
    ]);
    const navigationItems = [
        {
            id: "fasilitas",
            label: "Fasilitas",
            href: "#fasilitas"
        },
        {
            id: "jadwal",
            label: "Jadwal",
            href: "#jadwal"
        },
        {
            id: "galeri",
            label: "Galeri",
            href: "#galeri"
        },
        {
            id: "faq",
            label: "FAQ",
            href: "#faq"
        },
        {
            id: "kontak",
            label: "Kontak",
            href: "#kontak"
        }
    ];
    const handleNavClick = (itemId, href)=>{
        setActiveNavItem(itemId);
        setIsMobileMenuOpen(false);
        if (href) {
            if (href.startsWith('#')) {
                // Handle anchor links - scroll to section
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            } else {
                // Handle regular navigation
                router.push(href);
            }
        }
    };
    const handleLoginClick = ()=>{
        router.push("/auth");
        setIsMobileMenuOpen(false);
    };
    const handleRegisterClick = ()=>{
        router.push("/auth");
        setIsMobileMenuOpen(false);
    };
    const handleDashboardClick = ()=>{
        router.push("/dashboard");
        setIsMobileMenuOpen(false);
    };
    const handleLogoutClick = async ()=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])({
            callbackUrl: "/"
        });
        setIsMobileMenuOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0 px-6 lg:px-8 py-3 lg:py-4 bg-white rounded-full shadow-lg border border-solid border-[#E5E5E5] text-[#1F1F1F] fixed top-2 sm:top-4 lg:top-6 left-2 sm:left-4 lg:left-1/2 right-2 sm:right-4 lg:right-auto lg:-translate-x-1/2 z-50 transition-transform duration-300 lg:max-w-6xl lg:mx-auto w-full ".concat(isVisible ? 'translate-y-0' : '-translate-y-[200%]'),
        role: "banner",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/logo.png?v=2",
                            alt: "Logo SMK Telkom Malang",
                            className: "w-full h-full object-contain"
                        }, void 0, false, {
                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#1F1F1F] font-medium text-sm lg:text-base leading-tight",
                                children: "Booking"
                            }, void 0, false, {
                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#1F1F1F] font-medium text-xs lg:text-sm leading-tight whitespace-nowrap",
                                children: "SMK Telkom Malang"
                            }, void 0, false, {
                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                lineNumber: 93,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors",
                onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                "aria-label": "Toggle mobile menu",
                "aria-expanded": isMobileMenuOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-6 h-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M6 18L18 6M6 6l12 12"
                    }, void 0, false, {
                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                        lineNumber: 128,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M4 6h16M4 12h16M4 18h16"
                    }, void 0, false, {
                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                        lineNumber: 135,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                lineNumber: 115,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "hidden lg:flex gap-2.5 px-0 py-2 items-center relative ml-[100px] mr-[100px]",
                role: "navigation",
                "aria-label": "Main navigation",
                children: navigationItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "relative px-2 py-1 text-[#1F1F1F] font-medium text-sm hover:text-[#E04E4E] focus:text-[#E04E4E] focus:outline-none transition-colors duration-200 whitespace-nowrap ".concat(activeNavItem === item.id ? "text-[#E04E4E]" : ""),
                        onClick: ()=>handleNavClick(item.id, item.href),
                        "aria-current": activeNavItem === item.id ? "page" : undefined,
                        children: item.label
                    }, item.id, false, {
                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                        lineNumber: 152,
                        columnNumber: 14
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                lineNumber: 146,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "lg:hidden flex flex-col w-full gap-2 py-4 border-t border-gray-200",
                role: "navigation",
                "aria-label": "Mobile navigation",
                children: [
                    navigationItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "w-full text-left py-3 px-4 rounded-lg transition-colors duration-200 ".concat(activeNavItem === item.id ? "bg-[#FFF0F0] text-[#E04E4E] font-semibold" : "text-primitive-neutral-700 hover:bg-gray-100"),
                            onClick: ()=>handleNavClick(item.id, item.href),
                            "aria-current": activeNavItem === item.id ? "page" : undefined,
                            children: item.label
                        }, item.id, false, {
                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                            lineNumber: 173,
                            columnNumber: 16
                        }, ("TURBOPACK compile-time value", void 0))),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2 mt-4 pt-4 border-t border-gray-200",
                        children: status === "loading" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full py-3 text-center text-[#7A7A7A]",
                            children: "Loading..."
                        }, void 0, false, {
                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                            lineNumber: 190,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)) : session ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 px-4 py-3 bg-[#FFF0F0] rounded-xl",
                                    children: [
                                        ((_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.image) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: session.user.image,
                                            alt: ((_session_user1 = session.user) === null || _session_user1 === void 0 ? void 0 : _session_user1.name) || "User",
                                            className: "w-10 h-10 rounded-full border-2 border-[#E04E4E]"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                                            lineNumber: 197,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold text-[#1F1F1F] truncate",
                                                    children: (_session_user2 = session.user) === null || _session_user2 === void 0 ? void 0 : _session_user2.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                                                    lineNumber: 204,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-[#7A7A7A] truncate",
                                                    children: (_session_user3 = session.user) === null || _session_user3 === void 0 ? void 0 : _session_user3.email
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                                                    lineNumber: 207,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                                            lineNumber: 203,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                                    lineNumber: 195,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-full bg-[#E04E4E] text-white py-3 px-5 rounded-xl font-medium cursor-pointer hover:bg-[#c93e3e] transition-colors duration-200",
                                    onClick: handleDashboardClick,
                                    type: "button",
                                    children: "Dashboard"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                                    lineNumber: 212,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-full py-3 px-5 text-[#E04E4E] border-[#E04E4E] rounded-xl bg-white border border-solid hover:bg-[#FFF0F0] transition-colors duration-200 font-medium cursor-pointer",
                                    onClick: handleLogoutClick,
                                    type: "button",
                                    children: "Logout"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                                    lineNumber: 219,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-full bg-[#E04E4E] text-white py-3 px-5 rounded-xl font-body-regular-b2 font-[number:var(--body-regular-b2-font-weight)] text-[length:var(--body-regular-b2-font-size)] cursor-pointer hover:bg-[#c93e3e] transition-colors duration-200",
                                    onClick: handleLoginClick,
                                    type: "button",
                                    "aria-label": "Login to your account",
                                    children: "Masuk"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                                    lineNumber: 229,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-full py-3 px-5 text-[#E04E4E] border-[#E04E4E] rounded-xl bg-white border border-solid hover:bg-[#E04E4E] hover:text-white transition-colors duration-200 font-body-regular-b2 font-[number:var(--body-regular-b2-font-weight)] text-[length:var(--body-regular-b2-font-size)] cursor-pointer",
                                    onClick: handleRegisterClick,
                                    type: "button",
                                    "aria-label": "Register for a new account",
                                    children: "Daftar"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                                    lineNumber: 238,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                        lineNumber: 188,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                lineNumber: 167,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden lg:flex gap-6 items-center",
                children: status === "loading" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-[#7A7A7A] text-sm",
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                    lineNumber: 255,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : session ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-[#E04E4E] text-white py-2 px-5 rounded-lg font-medium cursor-pointer focus:outline-none hover:bg-[#c93e3e] transition-colors duration-200 whitespace-nowrap text-sm",
                            onClick: handleDashboardClick,
                            type: "button",
                            children: "Dashboard"
                        }, void 0, false, {
                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                            lineNumber: 258,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex items-center gap-2 py-1.5 px-3 text-[#E04E4E] border-[#E04E4E] rounded-lg bg-white border border-solid hover:bg-[#FFF0F0] transition-colors duration-200 cursor-pointer focus:outline-none",
                                    type: "button",
                                    children: [
                                        ((_session_user4 = session.user) === null || _session_user4 === void 0 ? void 0 : _session_user4.image) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: session.user.image,
                                            alt: ((_session_user5 = session.user) === null || _session_user5 === void 0 ? void 0 : _session_user5.name) || "User",
                                            className: "w-8 h-8 rounded-full border-2 border-[#E04E4E]"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                                            lineNumber: 272,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium max-w-[120px] truncate",
                                            children: (_session_user6 = session.user) === null || _session_user6 === void 0 ? void 0 : _session_user6.name
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                                            lineNumber: 278,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M19 9l-7 7-7-7"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                                                lineNumber: 287,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                                            lineNumber: 281,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                                    lineNumber: 267,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 border-b border-gray-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold text-[#1F1F1F] truncate",
                                                    children: (_session_user7 = session.user) === null || _session_user7 === void 0 ? void 0 : _session_user7.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                                                    lineNumber: 299,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-[#7A7A7A] truncate",
                                                    children: (_session_user8 = session.user) === null || _session_user8 === void 0 ? void 0 : _session_user8.email
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                                                    lineNumber: 302,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-[#E04E4E] mt-1 font-medium",
                                                    children: ((_session_user9 = session.user) === null || _session_user9 === void 0 ? void 0 : _session_user9.role) === "ADMIN" ? "Admin" : "User"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                                                    lineNumber: 305,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                                            lineNumber: 298,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "w-full text-left px-4 py-2 text-sm text-[#1F1F1F] hover:bg-[#FFF0F0] rounded-lg transition-colors",
                                                    onClick: handleDashboardClick,
                                                    children: "📊 Dashboard"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                                                    lineNumber: 310,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors",
                                                    onClick: handleLogoutClick,
                                                    children: "🚪 Logout"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                                                    lineNumber: 316,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                                            lineNumber: 309,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                                    lineNumber: 297,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                            lineNumber: 266,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-[#E04E4E] text-white py-2.5 px-6 rounded-lg font-medium cursor-pointer focus:outline-none hover:bg-[#c93e3e] transition-colors duration-200 whitespace-nowrap text-sm",
                            onClick: handleLoginClick,
                            type: "button",
                            "aria-label": "Login to your account",
                            children: "Masuk"
                        }, void 0, false, {
                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                            lineNumber: 329,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "py-2.5 px-6 text-[#E04E4E] border-[#E04E4E] rounded-lg bg-white border border-solid hover:bg-[#E04E4E] hover:text-white transition-colors duration-200 font-medium cursor-pointer focus:outline-none whitespace-nowrap text-sm",
                            onClick: handleRegisterClick,
                            type: "button",
                            "aria-label": "Register for a new account",
                            children: "Daftar"
                        }, void 0, false, {
                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                            lineNumber: 339,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
                lineNumber: 253,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx",
        lineNumber: 86,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Navbar, "8tSjVF1SRXVfms982iMeuSMJz+Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookingHistoryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$src$2f$components$2f$navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/navbar.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function BookingHistoryPage() {
    var _session_user, _session_user1, _session_user2, _selectedBooking_user, _selectedBooking_user1, _session_user3, _session_user4;
    _s();
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [bookings, setBookings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedBookingId, setSelectedBookingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedBooking, setSelectedBooking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [bookingLoading, setBookingLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editForm, setEditForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        status: '',
        adminNotes: ''
    });
    // Check authentication
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BookingHistoryPage.useEffect": ()=>{
            if (status === "unauthenticated") {
                router.push("/auth/signin");
            }
        }
    }["BookingHistoryPage.useEffect"], [
        status,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BookingHistoryPage.useEffect": ()=>{
            if (status === "authenticated") {
                fetchBookings();
            }
        }
    }["BookingHistoryPage.useEffect"], [
        status
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BookingHistoryPage.useEffect": ()=>{
            if (selectedBookingId) {
                fetchBookingDetails(selectedBookingId);
            } else {
                setSelectedBooking(null);
            }
        }
    }["BookingHistoryPage.useEffect"], [
        selectedBookingId
    ]);
    const fetchBookings = async ()=>{
        try {
            setLoading(true);
            const response = await fetch("/api/bookings");
            if (response.ok) {
                const data = await response.json();
                setBookings(data);
            } else if (response.status === 401) {
                console.log("User not authenticated, redirecting to login...");
                router.push("/auth/signin");
            } else {
                console.error("Failed to fetch bookings:", response.status, response.statusText);
                setBookings([]);
            }
        } catch (error) {
            console.error("Error fetching bookings:", error);
            setBookings([]);
        } finally{
            setLoading(false);
        }
    };
    const fetchBookingDetails = async (bookingId)=>{
        try {
            setBookingLoading(true);
            const response = await fetch("/api/bookings/".concat(bookingId));
            if (response.ok) {
                const data = await response.json();
                setSelectedBooking(data);
                setEditForm({
                    status: data.status,
                    adminNotes: data.adminNotes || ''
                });
            } else if (response.status === 401) {
                console.log("User not authenticated, redirecting to login...");
                router.push("/auth/signin");
            } else {
                console.error("Failed to fetch booking details:", response.status, response.statusText);
                setSelectedBooking(null);
            }
        } catch (error) {
            console.error("Error fetching booking details:", error);
            setSelectedBooking(null);
        } finally{
            setBookingLoading(false);
        }
    };
    const updateBooking = async ()=>{
        try {
            setBookingLoading(true);
            const response = await fetch("/api/bookings/".concat(selectedBookingId), {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editForm)
            });
            if (response.ok) {
                const updatedBooking = await response.json();
                setSelectedBooking(updatedBooking);
                setIsEditing(false);
                // Refresh bookings list
                fetchBookings();
                alert('Booking berhasil diupdate!');
            } else {
                const error = await response.json();
                alert("Error: ".concat(error.error));
            }
        } catch (error) {
            console.error("Error updating booking:", error);
            alert('Gagal mengupdate booking');
        } finally{
            setBookingLoading(false);
        }
    };
    const getStatusColor = (status)=>{
        switch(status){
            case "PENDING":
                return "bg-yellow-100 text-yellow-800";
            case "APPROVED":
                return "bg-green-100 text-green-800";
            case "REJECTED":
                return "bg-red-100 text-red-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };
    const getStatusText = (status)=>{
        switch(status){
            case "PENDING":
                return "Menunggu";
            case "APPROVED":
                return "Disetujui";
            case "REJECTED":
                return "Ditolak";
            default:
                return status;
        }
    };
    // Show loading while checking authentication
    if (status === "loading") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-[#E04E4E] mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "Memeriksa autentikasi..."
                    }, void 0, false, {
                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                        lineNumber: 152,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                lineNumber: 150,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
            lineNumber: 149,
            columnNumber: 7
        }, this);
    }
    // Show loading if not authenticated
    if (status === "unauthenticated") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-[#E04E4E] mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                        lineNumber: 163,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "Mengalihkan ke halaman login..."
                    }, void 0, false, {
                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                lineNumber: 162,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
            lineNumber: 161,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$src$2f$components$2f$navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navbar"], {}, void 0, false, {
                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-32 pb-8 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>router.back(),
                                            className: "p-2 hover:bg-gray-100 rounded-lg transition-colors group",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-5 h-5 group-hover:-translate-x-1 transition-transform",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M15 19l-7-7 7-7"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                    lineNumber: 184,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                lineNumber: 183,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                            lineNumber: 179,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 bg-gradient-to-br from-[#E04E4E] to-[#c93e3e] rounded-xl flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-6 h-6 text-white",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                            lineNumber: 190,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                        lineNumber: 189,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                    lineNumber: 188,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                    className: "text-3xl font-bold text-[#1F1F1F]",
                                                                    children: "Riwayat Booking"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                    lineNumber: 195,
                                                                    columnNumber: 21
                                                                }, this),
                                                                (session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.role) === 'ADMIN' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "px-3 py-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-medium rounded-full",
                                                                    children: "Admin Mode"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                    lineNumber: 197,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                            lineNumber: 194,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#7A7A7A] mt-1",
                                                            children: (session === null || session === void 0 ? void 0 : (_session_user1 = session.user) === null || _session_user1 === void 0 ? void 0 : _session_user1.role) === 'ADMIN' ? "Lihat dan kelola semua booking dari semua user" : "Lihat dan kelola booking yang telah Anda buat"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                            lineNumber: 202,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                    lineNumber: 193,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                            lineNumber: 187,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-4 gap-4 mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 text-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-blue-100 text-sm",
                                                                children: "Total Booking"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                lineNumber: 217,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-2xl font-bold",
                                                                children: bookings.length
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                lineNumber: 218,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                        lineNumber: 216,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-6 h-6",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                lineNumber: 222,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                            lineNumber: 221,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                        lineNumber: 220,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                lineNumber: 215,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                            lineNumber: 214,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl p-4 text-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-yellow-100 text-sm",
                                                                children: "Menunggu"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                lineNumber: 231,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-2xl font-bold",
                                                                children: bookings.filter((b)=>b.status === 'PENDING').length
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                lineNumber: 232,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                        lineNumber: 230,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-6 h-6",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                lineNumber: 236,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                            lineNumber: 235,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                        lineNumber: 234,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                lineNumber: 229,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                            lineNumber: 228,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-4 text-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-green-100 text-sm",
                                                                children: "Disetujui"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                lineNumber: 245,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-2xl font-bold",
                                                                children: bookings.filter((b)=>b.status === 'APPROVED').length
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                lineNumber: 246,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                        lineNumber: 244,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-6 h-6",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M5 13l4 4L19 7"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                lineNumber: 250,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                            lineNumber: 249,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                        lineNumber: 248,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                lineNumber: 243,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                            lineNumber: 242,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-4 text-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-red-100 text-sm",
                                                                children: "Ditolak"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                lineNumber: 259,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-2xl font-bold",
                                                                children: bookings.filter((b)=>b.status === 'REJECTED').length
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                lineNumber: 260,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                        lineNumber: 258,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-6 h-6",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M6 18L18 6M6 6l12 12"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                lineNumber: 264,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                            lineNumber: 263,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                        lineNumber: 262,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                lineNumber: 257,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                            lineNumber: 256,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:col-span-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-24",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 bg-gradient-to-br from-[#E04E4E] to-[#c93e3e] rounded-lg flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-5 h-5 text-white",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                lineNumber: 279,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                            lineNumber: 278,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                        lineNumber: 277,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-xl font-bold text-[#1F1F1F]",
                                                        children: "Pilih Booking"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                        lineNumber: 282,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                lineNumber: 276,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-[#1F1F1F] mb-3",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            className: "w-4 h-4 text-[#E04E4E]",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: 2,
                                                                                d: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                lineNumber: 290,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                            lineNumber: 289,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        "ID Booking"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                    lineNumber: 288,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                lineNumber: 287,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: selectedBookingId,
                                                                        onChange: (e)=>setSelectedBookingId(e.target.value),
                                                                        className: "w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E04E4E] focus:border-transparent outline-none transition-all appearance-none bg-white pr-10 hover:border-gray-300",
                                                                        disabled: loading,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "",
                                                                                children: "Pilih ID Booking"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                lineNumber: 302,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            bookings.map((booking)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: booking.id,
                                                                                    children: [
                                                                                        booking.id,
                                                                                        " - ",
                                                                                        booking.facility || "Fasilitas",
                                                                                        " (",
                                                                                        new Date(booking.startDate).toLocaleDateString('id-ID'),
                                                                                        ")"
                                                                                    ]
                                                                                }, booking.id, true, {
                                                                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                    lineNumber: 304,
                                                                                    columnNumber: 27
                                                                                }, this))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                        lineNumber: 296,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            className: "w-5 h-5 text-gray-400",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: 2,
                                                                                d: "M19 9l-7 7-7-7"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                lineNumber: 311,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                            lineNumber: 310,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                        lineNumber: 309,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                lineNumber: 295,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                        lineNumber: 286,
                                                        columnNumber: 19
                                                    }, this),
                                                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center py-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "animate-spin rounded-full h-8 w-8 border-b-2 border-[#E04E4E] mx-auto"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                lineNumber: 319,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-[#7A7A7A] mt-2",
                                                                children: "Memuat data booking..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                lineNumber: 320,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                        lineNumber: 318,
                                                        columnNumber: 21
                                                    }, this),
                                                    !loading && bookings.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center py-8",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-8 h-8 text-gray-400",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                        lineNumber: 328,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                    lineNumber: 327,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                lineNumber: 326,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[#7A7A7A]",
                                                                children: "Belum ada booking"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                lineNumber: 331,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                        lineNumber: 325,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                lineNumber: 285,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                        lineNumber: 275,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                    lineNumber: 274,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:col-span-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-2xl shadow-lg border border-gray-100 p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-5 h-5 text-white",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                lineNumber: 344,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                            lineNumber: 343,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                        lineNumber: 342,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-xl font-bold text-[#1F1F1F]",
                                                        children: "Detail Booking"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                        lineNumber: 347,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                lineNumber: 341,
                                                columnNumber: 17
                                            }, this),
                                            !selectedBookingId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center py-12",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-10 h-10 text-gray-400",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                lineNumber: 354,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                            lineNumber: 353,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                        lineNumber: 352,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[#7A7A7A] text-lg",
                                                        children: "Pilih ID Booking untuk melihat detail"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                        lineNumber: 357,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                lineNumber: 351,
                                                columnNumber: 19
                                            }, this) : bookingLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center py-12",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-[#E04E4E] mx-auto mb-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                        lineNumber: 361,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[#7A7A7A]",
                                                        children: "Memuat detail booking..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                        lineNumber: 362,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                lineNumber: 360,
                                                columnNumber: 19
                                            }, this) : selectedBooking ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: editForm.status,
                                                                        onChange: (e)=>setEditForm({
                                                                                ...editForm,
                                                                                status: e.target.value
                                                                            }),
                                                                        className: "px-4 py-2 rounded-full text-sm font-medium border-2 border-blue-300 focus:border-blue-500 outline-none",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "PENDING",
                                                                                children: "Menunggu"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                lineNumber: 375,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "APPROVED",
                                                                                children: "Disetujui"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                lineNumber: 376,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "REJECTED",
                                                                                children: "Ditolak"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                lineNumber: 377,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                        lineNumber: 370,
                                                                        columnNumber: 27
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "px-4 py-2 rounded-full text-sm font-medium ".concat(getStatusColor(selectedBooking.status)),
                                                                        children: getStatusText(selectedBooking.status)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                        lineNumber: 380,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "h-6 w-px bg-gray-300"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                        lineNumber: 384,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm text-[#7A7A7A] font-mono",
                                                                        children: [
                                                                            "ID: ",
                                                                            selectedBooking.id
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                        lineNumber: 385,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                lineNumber: 368,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-right",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-[#7A7A7A]",
                                                                                children: "Booking ID"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                lineNumber: 391,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm font-medium text-[#1F1F1F]",
                                                                                children: selectedBooking.id
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                lineNumber: 392,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                        lineNumber: 390,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    (session === null || session === void 0 ? void 0 : (_session_user2 = session.user) === null || _session_user2 === void 0 ? void 0 : _session_user2.role) === 'ADMIN' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex gap-2",
                                                                        children: isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: updateBooking,
                                                                                    className: "px-3 py-1 bg-green-500 text-white text-sm rounded-lg hover:bg-green-600 transition-colors",
                                                                                    children: "Simpan"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                    lineNumber: 398,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>setIsEditing(false),
                                                                                    className: "px-3 py-1 bg-gray-500 text-white text-sm rounded-lg hover:bg-gray-600 transition-colors",
                                                                                    children: "Batal"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                    lineNumber: 404,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>setIsEditing(true),
                                                                            className: "px-3 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors",
                                                                            children: "Edit"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                            lineNumber: 412,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                        lineNumber: 395,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                lineNumber: 389,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                        lineNumber: 367,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-3 mb-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                    className: "w-5 h-5 text-white",
                                                                                    fill: "none",
                                                                                    stroke: "currentColor",
                                                                                    viewBox: "0 0 24 24",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                        strokeLinecap: "round",
                                                                                        strokeLinejoin: "round",
                                                                                        strokeWidth: 2,
                                                                                        d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                        lineNumber: 431,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                    lineNumber: 430,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                lineNumber: 429,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                className: "font-semibold text-[#1F1F1F]",
                                                                                children: "Fasilitas & Jadwal"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                lineNumber: 434,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                        lineNumber: 428,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "space-y-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "block text-xs font-medium text-[#7A7A7A] mb-1",
                                                                                        children: "Fasilitas"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                        lineNumber: 438,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-[#1F1F1F] font-medium",
                                                                                        children: selectedBooking.facility || "Tidak tersedia"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                        lineNumber: 439,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                lineNumber: 437,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "block text-xs font-medium text-[#7A7A7A] mb-1",
                                                                                        children: "Tanggal Mulai"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                        lineNumber: 443,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-[#1F1F1F]",
                                                                                        children: selectedBooking.startDate ? new Date(selectedBooking.startDate).toLocaleDateString('id-ID', {
                                                                                            weekday: 'long',
                                                                                            year: 'numeric',
                                                                                            month: 'long',
                                                                                            day: 'numeric'
                                                                                        }) : "Tidak tersedia"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                        lineNumber: 444,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                lineNumber: 442,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "block text-xs font-medium text-[#7A7A7A] mb-1",
                                                                                        children: "Waktu Mulai"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                        lineNumber: 455,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-[#1F1F1F]",
                                                                                        children: selectedBooking.startTime || "Tidak tersedia"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                        lineNumber: 456,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                lineNumber: 454,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "block text-xs font-medium text-[#7A7A7A] mb-1",
                                                                                        children: "Durasi"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                        lineNumber: 462,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-[#1F1F1F]",
                                                                                        children: [
                                                                                            selectedBooking.duration || "Tidak tersedia",
                                                                                            " jam"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                        lineNumber: 463,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                lineNumber: 461,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                        lineNumber: 436,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                lineNumber: 427,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-3 mb-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                    className: "w-5 h-5 text-white",
                                                                                    fill: "none",
                                                                                    stroke: "currentColor",
                                                                                    viewBox: "0 0 24 24",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                        strokeLinecap: "round",
                                                                                        strokeLinejoin: "round",
                                                                                        strokeWidth: 2,
                                                                                        d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                        lineNumber: 475,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                    lineNumber: 474,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                lineNumber: 473,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                className: "font-semibold text-[#1F1F1F]",
                                                                                children: "Pemohon & Kontak"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                lineNumber: 478,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                        lineNumber: 472,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "space-y-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "block text-xs font-medium text-[#7A7A7A] mb-1",
                                                                                        children: "Nama Pemohon"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                        lineNumber: 482,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-[#1F1F1F] font-medium",
                                                                                        children: ((_selectedBooking_user = selectedBooking.user) === null || _selectedBooking_user === void 0 ? void 0 : _selectedBooking_user.name) || "Tidak tersedia"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                        lineNumber: 483,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                lineNumber: 481,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "block text-xs font-medium text-[#7A7A7A] mb-1",
                                                                                        children: "Email"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                        lineNumber: 487,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-[#1F1F1F]",
                                                                                        children: ((_selectedBooking_user1 = selectedBooking.user) === null || _selectedBooking_user1 === void 0 ? void 0 : _selectedBooking_user1.email) || "Tidak tersedia"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                        lineNumber: 488,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                lineNumber: 486,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "block text-xs font-medium text-[#7A7A7A] mb-1",
                                                                                        children: "Tanggal Dibuat"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                        lineNumber: 492,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-[#1F1F1F]",
                                                                                        children: selectedBooking.createdAt ? new Date(selectedBooking.createdAt).toLocaleDateString('id-ID', {
                                                                                            weekday: 'long',
                                                                                            year: 'numeric',
                                                                                            month: 'long',
                                                                                            day: 'numeric',
                                                                                            hour: '2-digit',
                                                                                            minute: '2-digit'
                                                                                        }) : "Tidak tersedia"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                        lineNumber: 493,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                lineNumber: 491,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        className: "block text-xs font-medium text-[#7A7A7A] mb-1",
                                                                                        children: "Terakhir Diupdate"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                        lineNumber: 506,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-[#1F1F1F]",
                                                                                        children: selectedBooking.updatedAt ? new Date(selectedBooking.updatedAt).toLocaleDateString('id-ID', {
                                                                                            weekday: 'long',
                                                                                            year: 'numeric',
                                                                                            month: 'long',
                                                                                            day: 'numeric',
                                                                                            hour: '2-digit',
                                                                                            minute: '2-digit'
                                                                                        }) : "Tidak tersedia"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                        lineNumber: 507,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                lineNumber: 505,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                        lineNumber: 480,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                lineNumber: 471,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                        lineNumber: 425,
                                                        columnNumber: 21
                                                    }, this),
                                                    (selectedBooking.purpose || selectedBooking.notes || selectedBooking.adminNotes) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-4",
                                                        children: [
                                                            selectedBooking.purpose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-3 mb-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                    className: "w-5 h-5 text-white",
                                                                                    fill: "none",
                                                                                    stroke: "currentColor",
                                                                                    viewBox: "0 0 24 24",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                        strokeLinecap: "round",
                                                                                        strokeLinejoin: "round",
                                                                                        strokeWidth: 2,
                                                                                        d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                        lineNumber: 531,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                    lineNumber: 530,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                lineNumber: 529,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                className: "font-semibold text-[#1F1F1F]",
                                                                                children: "Tujuan Penggunaan"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                lineNumber: 534,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                        lineNumber: 528,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[#1F1F1F] leading-relaxed",
                                                                        children: selectedBooking.purpose
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                        lineNumber: 536,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                lineNumber: 527,
                                                                columnNumber: 27
                                                            }, this),
                                                            selectedBooking.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-100",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-3 mb-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                    className: "w-5 h-5 text-white",
                                                                                    fill: "none",
                                                                                    stroke: "currentColor",
                                                                                    viewBox: "0 0 24 24",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                        strokeLinecap: "round",
                                                                                        strokeLinejoin: "round",
                                                                                        strokeWidth: 2,
                                                                                        d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                        lineNumber: 546,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                    lineNumber: 545,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                lineNumber: 544,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                className: "font-semibold text-[#1F1F1F]",
                                                                                children: "Catatan Pemohon"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                lineNumber: 549,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                        lineNumber: 543,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[#1F1F1F] leading-relaxed",
                                                                        children: selectedBooking.notes
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                        lineNumber: 551,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                lineNumber: 542,
                                                                columnNumber: 27
                                                            }, this),
                                                            (selectedBooking.adminNotes || (session === null || session === void 0 ? void 0 : (_session_user3 = session.user) === null || _session_user3 === void 0 ? void 0 : _session_user3.role) === 'ADMIN' && isEditing) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-3 mb-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                    className: "w-5 h-5 text-white",
                                                                                    fill: "none",
                                                                                    stroke: "currentColor",
                                                                                    viewBox: "0 0 24 24",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                        strokeLinecap: "round",
                                                                                        strokeLinejoin: "round",
                                                                                        strokeWidth: 2,
                                                                                        d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                        lineNumber: 561,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                    lineNumber: 560,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                lineNumber: 559,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                className: "font-semibold text-[#1F1F1F]",
                                                                                children: "Catatan Admin"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                lineNumber: 564,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full",
                                                                                children: "Official"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                                lineNumber: 565,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                        lineNumber: 558,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    isEditing && (session === null || session === void 0 ? void 0 : (_session_user4 = session.user) === null || _session_user4 === void 0 ? void 0 : _session_user4.role) === 'ADMIN' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                        value: editForm.adminNotes,
                                                                        onChange: (e)=>setEditForm({
                                                                                ...editForm,
                                                                                adminNotes: e.target.value
                                                                            }),
                                                                        placeholder: "Tambahkan catatan admin...",
                                                                        className: "w-full p-3 border border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none resize-none",
                                                                        rows: 3
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                        lineNumber: 568,
                                                                        columnNumber: 31
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[#1F1F1F] leading-relaxed",
                                                                        children: selectedBooking.adminNotes
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                        lineNumber: 576,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                lineNumber: 557,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                        lineNumber: 524,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                lineNumber: 365,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center py-12",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-10 h-10 text-red-500",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                                lineNumber: 587,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                            lineNumber: 586,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                        lineNumber: 585,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[#7A7A7A] text-lg",
                                                        children: "Gagal memuat detail booking"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                        lineNumber: 590,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                                lineNumber: 584,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                        lineNumber: 340,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                                    lineNumber: 339,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                            lineNumber: 272,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                    lineNumber: 175,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
                lineNumber: 174,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/page.jsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
_s(BookingHistoryPage, "KFOQ4ak2Rzy028hbc53EEnO5hWs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = BookingHistoryPage;
var _c;
__turbopack_context__.k.register(_c, "BookingHistoryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_CodingProject_JHIC-2025_Booking-Infra_Competition_src_d38d2554._.js.map