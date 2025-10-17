(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function DashboardLayout(param) {
    let { children } = param;
    var _session_user, _session_user_name, _session_user1, _session_user2, _session_user3, _session_user4;
    _s();
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const menuItems = [
        {
            name: "Dashboard",
            path: "/dashboard",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-6 h-6",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                }, void 0, false, {
                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                    lineNumber: 19,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                lineNumber: 18,
                columnNumber: 9
            }, this)
        },
        {
            name: "Booking Baru",
            path: "/dashboard/bookings/new",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-6 h-6",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M12 4v16m8-8H4"
                }, void 0, false, {
                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                    lineNumber: 28,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                lineNumber: 27,
                columnNumber: 9
            }, this)
        },
        {
            name: "Riwayat Booking",
            path: "/dashboard/bookings",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                    lineNumber: 37,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                lineNumber: 36,
                columnNumber: 9
            }, this)
        },
        {
            name: "Jurnal Kegiatan",
            path: "/dashboard/journal",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-6 h-6",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                }, void 0, false, {
                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                    lineNumber: 46,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                lineNumber: 45,
                columnNumber: 9
            }, this)
        },
        {
            name: "Dokumentasi",
            path: "/dashboard/documentation",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-6 h-6",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                }, void 0, false, {
                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                    lineNumber: 55,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                lineNumber: 54,
                columnNumber: 9
            }, this)
        }
    ];
    if ((session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.role) === "ADMIN") {
        menuItems.push({
            name: "Admin Panel",
            path: "/dashboard/admin",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-6 h-6",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    }, void 0, false, {
                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    }, void 0, false, {
                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                        lineNumber: 67,
                        columnNumber: 568
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                lineNumber: 66,
                columnNumber: 9
            }, this)
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen bg-gray-50 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "".concat(sidebarOpen ? "translate-x-0" : "-translate-x-full", " fixed lg:relative lg:translate-x-0 z-30 w-64 h-screen bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 p-6 border-b border-gray-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/logo.svg",
                                    alt: "Logo",
                                    className: "w-10 h-10"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg font-bold text-[#1F1F1F]",
                                            children: "Booking"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-[#7A7A7A]",
                                            children: "SMK Telkom MLG"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 p-6 bg-[#FFF0F0] border-b border-[#E04E4E]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 rounded-full bg-[#E04E4E] flex items-center justify-center text-white font-bold text-lg",
                                    children: (session === null || session === void 0 ? void 0 : (_session_user1 = session.user) === null || _session_user1 === void 0 ? void 0 : (_session_user_name = _session_user1.name) === null || _session_user_name === void 0 ? void 0 : _session_user_name.charAt(0).toUpperCase()) || "U"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-semibold text-[#1F1F1F] truncate",
                                            children: (session === null || session === void 0 ? void 0 : (_session_user2 = session.user) === null || _session_user2 === void 0 ? void 0 : _session_user2.name) || "User"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-[#7A7A7A] truncate",
                                            children: session === null || session === void 0 ? void 0 : (_session_user3 = session.user) === null || _session_user3 === void 0 ? void 0 : _session_user3.email
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this),
                                        (session === null || session === void 0 ? void 0 : (_session_user4 = session.user) === null || _session_user4 === void 0 ? void 0 : _session_user4.role) === "ADMIN" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-block mt-1 px-2 py-0.5 text-xs font-semibold text-white bg-[#E04E4E] rounded-full",
                                            children: "ADMIN"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                                            lineNumber: 104,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "flex-1 overflow-y-auto p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-2",
                                children: menuItems.map((item)=>{
                                    const isActive = pathname === item.path;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.path,
                                            className: "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ".concat(isActive ? "bg-[#E04E4E] text-white" : "text-[#7A7A7A] hover:bg-gray-100"),
                                            onClick: ()=>setSidebarOpen(false),
                                            children: [
                                                item.icon,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: item.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                                                    lineNumber: 128,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                                            lineNumber: 118,
                                            columnNumber: 21
                                        }, this)
                                    }, item.path, false, {
                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                                        lineNumber: 117,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 border-t border-gray-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])({
                                        callbackUrl: "/"
                                    }),
                                className: "flex items-center gap-3 w-full px-4 py-3 text-[#7A7A7A] hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-6 h-6",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                                            lineNumber: 143,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: "Logout"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "bg-white border-b border-gray-200 px-4 lg:px-8 py-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSidebarOpen(!sidebarOpen),
                                    className: "lg:hidden p-2 rounded-lg hover:bg-gray-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-6 h-6",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M4 6h16M4 12h16M4 18h16"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                                            lineNumber: 161,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>router.push("/"),
                                    className: "text-[#E04E4E] hover:text-[#c93e3e] font-medium flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M10 19l-7-7m0 0l7-7m-7 7h18"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                                                lineNumber: 170,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                                            lineNumber: 169,
                                            columnNumber: 15
                                        }, this),
                                        "Kembali ke Homepage"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 overflow-y-auto p-4 lg:p-8",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            sidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden",
                onClick: ()=>setSidebarOpen(false)
            }, void 0, false, {
                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
                lineNumber: 185,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_s(DashboardLayout, "pR2HDSdaB/eqv0Si/K9aWTx4Q/c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = DashboardLayout;
var _c;
__turbopack_context__.k.register(_c, "DashboardLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/new/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewBookingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$DayPicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/node_modules/react-day-picker/dist/esm/DayPicker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$src$2f$components$2f$dashboard$2f$DashboardLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/components/dashboard/DashboardLayout.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function NewBookingPage() {
    _s();
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [facilities, setFacilities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [equipment, setEquipment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        facilityId: "",
        title: "",
        description: "",
        startDate: undefined,
        endDate: undefined,
        equipment: []
    });
    const [selectedRange, setSelectedRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewBookingPage.useEffect": ()=>{
            if (status === "unauthenticated") {
                router.push("/auth/signin");
            }
        }
    }["NewBookingPage.useEffect"], [
        status,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewBookingPage.useEffect": ()=>{
            fetchData();
        }
    }["NewBookingPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewBookingPage.useEffect": ()=>{
            if ((selectedRange === null || selectedRange === void 0 ? void 0 : selectedRange.from) && (selectedRange === null || selectedRange === void 0 ? void 0 : selectedRange.to)) {
                setFormData({
                    "NewBookingPage.useEffect": (prev)=>({
                            ...prev,
                            startDate: selectedRange.from,
                            endDate: selectedRange.to
                        })
                }["NewBookingPage.useEffect"]);
            }
        }
    }["NewBookingPage.useEffect"], [
        selectedRange
    ]);
    const fetchData = async ()=>{
        try {
            const [facilitiesRes, equipmentRes] = await Promise.all([
                fetch("/api/facilities"),
                fetch("/api/equipment")
            ]);
            if (facilitiesRes.ok) {
                const facilitiesData = await facilitiesRes.json();
                setFacilities(facilitiesData);
            }
            // Note: You'll need to create this endpoint
            if (equipmentRes.ok) {
                const equipmentData = await equipmentRes.json();
                setEquipment(equipmentData);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally{
            setLoading(false);
        }
    };
    const handleEquipmentChange = (equipmentId, quantity)=>{
        setFormData((prev)=>{
            const existingIndex = prev.equipment.findIndex((e)=>e.equipmentId === equipmentId);
            if (quantity === 0 || quantity === "") {
                // Remove equipment
                return {
                    ...prev,
                    equipment: prev.equipment.filter((e)=>e.equipmentId !== equipmentId)
                };
            }
            if (existingIndex >= 0) {
                // Update quantity
                const newEquipment = [
                    ...prev.equipment
                ];
                newEquipment[existingIndex].quantity = parseInt(quantity);
                return {
                    ...prev,
                    equipment: newEquipment
                };
            } else {
                // Add new equipment
                return {
                    ...prev,
                    equipment: [
                        ...prev.equipment,
                        {
                            equipmentId,
                            quantity: parseInt(quantity)
                        }
                    ]
                };
            }
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setSubmitting(true);
        try {
            const response = await fetch("/api/bookings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                const booking = await response.json();
                alert("Booking berhasil dibuat!");
                router.push("/dashboard/bookings/".concat(booking.id));
            } else {
                const error = await response.json();
                alert(error.error || "Gagal membuat booking");
            }
        } catch (error) {
            console.error("Error creating booking:", error);
            alert("Terjadi kesalahan saat membuat booking");
        } finally{
            setSubmitting(false);
        }
    };
    if (status === "loading" || loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$src$2f$components$2f$dashboard$2f$DashboardLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-12 w-12 border-b-2 border-[#E04E4E]"
                }, void 0, false, {
                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/new/page.jsx",
                    lineNumber: 138,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/new/page.jsx",
                lineNumber: 137,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/new/page.jsx",
            lineNumber: 136,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$src$2f$components$2f$dashboard$2f$DashboardLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold text-[#1F1F1F]",
                            children: "Buat Booking Baru"
                        }, void 0, false, {
                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/new/page.jsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#7A7A7A] mt-2",
                            children: "Isi form di bawah untuk membuat booking fasilitas"
                        }, void 0, false, {
                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/new/page.jsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/new/page.jsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "bg-white rounded-xl border border-gray-200 p-6 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-[#1F1F1F] mb-2",
                                    children: "Nama Kegiatan *"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/new/page.jsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    required: true,
                                    value: formData.title,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            title: e.target.value
                                        }),
                                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E04E4E] focus:border-transparent outline-none",
                                    placeholder: "Contoh: Workshop Robotik"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/new/page.jsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/new/page.jsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-[#1F1F1F] mb-2",
                                    children: "Pilih Fasilitas *"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/new/page.jsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    required: true,
                                    value: formData.facilityId,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            facilityId: e.target.value
                                        }),
                                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E04E4E] focus:border-transparent outline-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Pilih Fasilitas"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/new/page.jsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this),
                                        facilities.map((facility)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: facility.id,
                                                children: facility.name
                                            }, facility.id, false, {
                                                fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/new/page.jsx",
                                                lineNumber: 183,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/new/page.jsx",
                                    lineNumber: 175,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/new/page.jsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-[#1F1F1F] mb-2",
                                    children: "Pilih Tanggal *"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/new/page.jsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#FFF0F0] border-2 border-[#E04E4E] rounded-lg p-4 inline-block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$DayPicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DayPicker"], {
                                        mode: "range",
                                        selected: selectedRange,
                                        onSelect: setSelectedRange,
                                        disabled: {
                                            before: new Date()
                                        },
                                        className: "!text-[#5C5C5C]",
                                        modifiersClassNames: {
                                            selected: "bg-[#E04E4E]",
                                            range_start: "bg-[#E04E4E] text-white rounded-l-full",
                                            range_end: "bg-[#E04E4E] text-white rounded-r-full",
                                            range_middle: "bg-[#FFF0F0] text-[#E04E4E]",
                                            today: "text-black font-bold"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/new/page.jsx",
                                        lineNumber: 196,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/new/page.jsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this),
                                (selectedRange === null || selectedRange === void 0 ? void 0 : selectedRange.from) && (selectedRange === null || selectedRange === void 0 ? void 0 : selectedRange.to) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-sm text-[#7A7A7A]",
                                    children: [
                                        "Dari: ",
                                        selectedRange.from.toLocaleDateString(),
                                        " - Sampai:",
                                        " ",
                                        selectedRange.to.toLocaleDateString()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/new/page.jsx",
                                    lineNumber: 212,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/new/page.jsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-[#1F1F1F] mb-2",
                                    children: "Deskripsi"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/new/page.jsx",
                                    lineNumber: 221,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: formData.description,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            description: e.target.value
                                        }),
                                    rows: 4,
                                    className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E04E4E] focus:border-transparent outline-none resize-none",
                                    placeholder: "Jelaskan detail kegiatan Anda..."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/new/page.jsx",
                                    lineNumber: 224,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/new/page.jsx",
                            lineNumber: 220,
                            columnNumber: 11
                        }, this),
                        equipment.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-[#1F1F1F] mb-2",
                                    children: "Peralatan Tambahan (Opsional)"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/new/page.jsx",
                                    lineNumber: 236,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: equipment.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#E04E4E] transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-medium text-[#1F1F1F]",
                                                            children: item.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/new/page.jsx",
                                                            lineNumber: 246,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-[#7A7A7A]",
                                                            children: [
                                                                "Tersedia: ",
                                                                item.available,
                                                                " dari ",
                                                                item.quantity
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/new/page.jsx",
                                                            lineNumber: 247,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/new/page.jsx",
                                                    lineNumber: 245,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: "0",
                                                    max: item.available,
                                                    placeholder: "0",
                                                    className: "w-20 px-3 py-2 border border-gray-300 rounded-lg text-center focus:ring-2 focus:ring-[#E04E4E] focus:border-transparent outline-none",
                                                    onChange: (e)=>handleEquipmentChange(item.id, e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/new/page.jsx",
                                                    lineNumber: 251,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/new/page.jsx",
                                            lineNumber: 241,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/new/page.jsx",
                                    lineNumber: 239,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/new/page.jsx",
                            lineNumber: 235,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>router.back(),
                                    className: "flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors",
                                    children: "Batal"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/new/page.jsx",
                                    lineNumber: 269,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: submitting || !formData.facilityId || !(selectedRange === null || selectedRange === void 0 ? void 0 : selectedRange.from) || !(selectedRange === null || selectedRange === void 0 ? void 0 : selectedRange.to),
                                    className: "flex-1 px-6 py-3 bg-[#E04E4E] text-white rounded-lg font-medium hover:bg-[#c93e3e] disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                    children: submitting ? "Memproses..." : "Buat Booking"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/new/page.jsx",
                                    lineNumber: 276,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/new/page.jsx",
                            lineNumber: 268,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/new/page.jsx",
                    lineNumber: 154,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/new/page.jsx",
            lineNumber: 146,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/dashboard/bookings/new/page.jsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
_s(NewBookingPage, "SCrQdNaPhTEUMHs3j62+M6vENo4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = NewBookingPage;
var _c;
__turbopack_context__.k.register(_c, "NewBookingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_CodingProject_JHIC-2025_Booking-Infra_Competition_src_f95046d6._.js.map