(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/PixelEffect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PixelEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
class Pixel {
    width;
    height;
    ctx;
    x;
    y;
    color;
    speed;
    size;
    sizeStep;
    minSize;
    maxSizeInteger;
    maxSize;
    delay;
    counter;
    counterStep;
    isIdle;
    isReverse;
    isShimmer;
    constructor(canvas, context, x, y, color, speed, delay){
        this.width = canvas.width;
        this.height = canvas.height;
        this.ctx = context;
        this.x = x;
        this.y = y;
        this.color = color;
        this.speed = this.getRandomValue(0.1, 0.9) * speed;
        this.size = 0;
        this.sizeStep = Math.random() * 0.4;
        this.minSize = 0.5;
        this.maxSizeInteger = 2;
        this.maxSize = this.getRandomValue(this.minSize, this.maxSizeInteger);
        this.delay = delay;
        this.counter = 0;
        this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01;
        this.isIdle = false;
        this.isReverse = false;
        this.isShimmer = false;
    }
    getRandomValue(min, max) {
        return Math.random() * (max - min) + min;
    }
    draw() {
        const centerOffset = this.maxSizeInteger * 0.5 - this.size * 0.5;
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x + centerOffset, this.y + centerOffset, this.size, this.size);
    }
    appear() {
        this.isIdle = false;
        if (this.counter <= this.delay) {
            this.counter += this.counterStep;
            return;
        }
        if (this.size >= this.maxSize) {
            this.isShimmer = true;
        }
        if (this.isShimmer) {
            this.shimmer();
        } else {
            this.size += this.sizeStep;
        }
        this.draw();
    }
    disappear() {
        this.isShimmer = false;
        this.counter = 0;
        if (this.size <= 0) {
            this.isIdle = true;
            return;
        } else {
            this.size -= 0.1;
        }
        this.draw();
    }
    shimmer() {
        if (this.size >= this.maxSize) {
            this.isReverse = true;
        } else if (this.size <= this.minSize) {
            this.isReverse = false;
        }
        if (this.isReverse) {
            this.size -= this.speed;
        } else {
            this.size += this.speed;
        }
    }
}
function getEffectiveSpeed(value, reducedMotion) {
    const min = 0;
    const max = 100;
    const throttle = 0.001;
    if (value <= min || reducedMotion) {
        return min;
    } else if (value >= max) {
        return max * throttle;
    } else {
        return value * throttle;
    }
}
function PixelEffect(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "8a1d826eec2dcc8d7b9c582d8d8c0e20118152081fc420c3e6fec7e9e4a98624") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8a1d826eec2dcc8d7b9c582d8d8c0e20118152081fc420c3e6fec7e9e4a98624";
    }
    const { gap: t1, speed: t2, colors: t3, isActive: t4 } = t0;
    const gap = t1 === undefined ? 4 : t1;
    const speed = t2 === undefined ? 50 : t2;
    const colors = t3 === undefined ? "#3b82f6,#60a5fa,#93c5fd" : t3;
    const isActive = t4 === undefined ? false : t4;
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t5;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = [];
        $[1] = t5;
    } else {
        t5 = $[1];
    }
    const pixelsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t5);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timePreviousRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const reducedMotionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    let t6;
    let t7;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "PixelEffect[useEffect()]": ()=>{
                timePreviousRef.current = performance.now();
                if ("TURBOPACK compile-time truthy", 1) {
                    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                }
            }
        })["PixelEffect[useEffect()]"];
        t7 = [];
        $[2] = t6;
        $[3] = t7;
    } else {
        t6 = $[2];
        t7 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    let t8;
    if ($[4] !== colors || $[5] !== gap || $[6] !== speed) {
        t8 = ({
            "PixelEffect[initPixels]": ()=>{
                if (!canvasRef.current) {
                    return;
                }
                const rect = canvasRef.current.getBoundingClientRect();
                const width = Math.floor(rect.width);
                const height = Math.floor(rect.height);
                const ctx = canvasRef.current.getContext("2d");
                if (!ctx) {
                    return;
                }
                canvasRef.current.width = width;
                canvasRef.current.height = height;
                const colorsArray = colors.split(",");
                const pxs = [];
                for(let x = 0; x < width; x = x + gap, x){
                    for(let y = 0; y < height; y = y + gap, y){
                        const color = colorsArray[Math.floor(Math.random() * colorsArray.length)];
                        const dx = x - width / 2;
                        const dy = y - height / 2;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        const delay = reducedMotionRef.current ? 0 : distance * 0.5;
                        pxs.push(new Pixel(canvasRef.current, ctx, x, y, color, getEffectiveSpeed(speed, reducedMotionRef.current), delay));
                    }
                }
                pixelsRef.current = pxs;
            }
        })["PixelEffect[initPixels]"];
        $[4] = colors;
        $[5] = gap;
        $[6] = speed;
        $[7] = t8;
    } else {
        t8 = $[7];
    }
    const initPixels = t8;
    let t9;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        const doAnimate = {
            "PixelEffect[doAnimate]": (fnName)=>{
                animationRef.current = requestAnimationFrame({
                    "PixelEffect[doAnimate > requestAnimationFrame()]": ()=>doAnimate(fnName)
                }["PixelEffect[doAnimate > requestAnimationFrame()]"]);
                const timeNow = performance.now();
                const timePassed = timeNow - timePreviousRef.current;
                if (timePassed < 16.666666666666668) {
                    return;
                }
                timePreviousRef.current = timeNow - timePassed % 16.666666666666668;
                const ctx_0 = canvasRef.current?.getContext("2d");
                if (!ctx_0 || !canvasRef.current) {
                    return;
                }
                ctx_0.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                let allIdle = true;
                for(let i = 0; i < pixelsRef.current.length; i++){
                    const pixel = pixelsRef.current[i];
                    pixel[fnName]();
                    if (!pixel.isIdle) {
                        allIdle = false;
                    }
                }
                if (allIdle && animationRef.current) {
                    cancelAnimationFrame(animationRef.current);
                }
            }
        }["PixelEffect[doAnimate]"];
        t9 = ({
            "PixelEffect[handleAnimation]": (name)=>{
                if (animationRef.current !== null) {
                    cancelAnimationFrame(animationRef.current);
                }
                animationRef.current = requestAnimationFrame({
                    "PixelEffect[handleAnimation > requestAnimationFrame()]": ()=>doAnimate(name)
                }["PixelEffect[handleAnimation > requestAnimationFrame()]"]);
            }
        })["PixelEffect[handleAnimation]"];
        $[8] = t9;
    } else {
        t9 = $[8];
    }
    const handleAnimation = t9;
    let t10;
    if ($[9] !== initPixels) {
        t10 = ({
            "PixelEffect[useEffect()]": ()=>{
                initPixels();
                return ()=>{
                    if (animationRef.current !== null) {
                        cancelAnimationFrame(animationRef.current);
                    }
                };
            }
        })["PixelEffect[useEffect()]"];
        $[9] = initPixels;
        $[10] = t10;
    } else {
        t10 = $[10];
    }
    let t11;
    if ($[11] !== colors || $[12] !== gap || $[13] !== speed) {
        t11 = [
            gap,
            speed,
            colors
        ];
        $[11] = colors;
        $[12] = gap;
        $[13] = speed;
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t10, t11);
    let t12;
    let t13;
    if ($[15] !== isActive) {
        t12 = ({
            "PixelEffect[useEffect()]": ()=>{
                if (isActive) {
                    handleAnimation("appear");
                } else {
                    handleAnimation("disappear");
                }
            }
        })["PixelEffect[useEffect()]"];
        t13 = [
            isActive
        ];
        $[15] = isActive;
        $[16] = t12;
        $[17] = t13;
    } else {
        t12 = $[16];
        t13 = $[17];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t12, t13);
    let t14;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            className: "absolute inset-0 w-full h-full pointer-events-none",
            style: {
                width: "100%",
                height: "100%"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/PixelEffect.tsx",
            lineNumber: 295,
            columnNumber: 11
        }, this);
        $[18] = t14;
    } else {
        t14 = $[18];
    }
    return t14;
}
_s(PixelEffect, "+40K9RPzxoYkJfAetP6kFsrNHuc=");
_c = PixelEffect;
var _c;
__turbopack_context__.k.register(_c, "PixelEffect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ThemeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const ThemeToggle = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "0b5d72e21e6352a4eb05d43a6657c7f7d3683d7edb2f9b3c3a501efcd223f2a1") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0b5d72e21e6352a4eb05d43a6657c7f7d3683d7edb2f9b3c3a501efcd223f2a1";
    }
    const { theme, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sunRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const moonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    let t1;
    if ($[1] !== theme) {
        t0 = ()=>{
            if (!sunRef.current || !moonRef.current) {
                return;
            }
            if (theme === "dark") {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(sunRef.current, {
                    opacity: 0,
                    rotate: 180,
                    scale: 0.5,
                    duration: 0.3,
                    ease: "power2.out"
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(moonRef.current, {
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(sunRef.current, {
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(moonRef.current, {
                    opacity: 0,
                    rotate: -180,
                    scale: 0.5,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        };
        t1 = [
            theme
        ];
        $[1] = theme;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[4] !== toggleTheme) {
        t2 = ()=>{
            if (buttonRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(buttonRef.current, {
                    scale: 0.9,
                    duration: 0.1,
                    yoyo: true,
                    repeat: 1,
                    ease: "power2.inOut"
                });
            }
            toggleTheme();
        };
        $[4] = toggleTheme;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const handleClick = t2;
    const t3 = theme === "light" ? 1 : 0;
    let t4;
    if ($[6] !== t3) {
        t4 = {
            opacity: t3
        };
        $[6] = t3;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        }, void 0, false, {
            fileName: "[project]/src/components/ThemeToggle.tsx",
            lineNumber: 103,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== t4) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            ref: sunRef,
            className: "absolute w-6 h-6 text-accent-primary",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            style: t4,
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/components/ThemeToggle.tsx",
            lineNumber: 110,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t4;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    const t7 = theme === "dark" ? 1 : 0;
    let t8;
    if ($[11] !== t7) {
        t8 = {
            opacity: t7
        };
        $[11] = t7;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        }, void 0, false, {
            fileName: "[project]/src/components/ThemeToggle.tsx",
            lineNumber: 129,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            ref: moonRef,
            className: "absolute w-6 h-6 text-accent-secondary",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            style: t8,
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/components/ThemeToggle.tsx",
            lineNumber: 136,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t8;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] !== handleClick || $[17] !== t10 || $[18] !== t6) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            ref: buttonRef,
            onClick: handleClick,
            className: "relative w-12 h-12 rounded-full bg-nav-bg border border-nav-border shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center overflow-hidden",
            "aria-label": "Toggle theme",
            suppressHydrationWarning: true,
            children: [
                t6,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ThemeToggle.tsx",
            lineNumber: 144,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = handleClick;
        $[17] = t10;
        $[18] = t6;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    return t11;
};
_s(ThemeToggle, "/lmUikA/eTPUCFgOZlcXhGcEvqY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggle;
const __TURBOPACK__default__export__ = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PixelEffect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PixelEffect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ThemeToggle.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const Navbar = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(34);
    if ($[0] !== "54bb4707669369fb59b80dd81582790063f744c7b5aae39fd9f3c1d6a790e10b") {
        for(let $i = 0; $i < 34; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "54bb4707669369fb59b80dd81582790063f744c7b5aae39fd9f3c1d6a790e10b";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                name: "Home",
                href: "#home"
            },
            {
                name: "About",
                href: "#about"
            },
            {
                name: "Skills",
                href: "#skills"
            },
            {
                name: "Projects",
                href: "#projects"
            },
            {
                name: "Certificates",
                href: "#certificates"
            },
            {
                name: "Internships",
                href: "#internships"
            },
            {
                name: "Contact",
                href: "#contact"
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const navItems = t0;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [hoveredIndex, setHoveredIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const circleRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const tlRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t2);
    const activeTweenRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const logoImgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const logoTweenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hamburgerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mobileMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const navItemsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const logoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = (e, href, index)=>{
            e.preventDefault();
            setActiveIndex(index);
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({
                    behavior: "smooth"
                });
            }
        };
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const handleScroll = t3;
    let t4;
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ()=>{
            const layout = ()=>{
                circleRefs.current.forEach((circle)=>{
                    if (!circle?.parentElement) {
                        return;
                    }
                    const pill = circle.parentElement;
                    const rect = pill.getBoundingClientRect();
                    const { width: w, height: h } = rect;
                    const R = (w * w / 4 + h * h) / (2 * h);
                    const D = Math.ceil(2 * R) + 2;
                    const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - w * w / 4))) + 1;
                    const originY = D - delta;
                    circle.style.width = `${D}px`;
                    circle.style.height = `${D}px`;
                    circle.style.bottom = `-${delta}px`;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(circle, {
                        xPercent: -50,
                        scale: 0,
                        transformOrigin: `50% ${originY}px`
                    });
                    const label = pill.querySelector(".pill-label");
                    const white = pill.querySelector(".pill-label-hover");
                    if (label) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(label, {
                            y: 0
                        });
                    }
                    if (white) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(white, {
                            y: h + 12,
                            opacity: 0
                        });
                    }
                    const index_0 = circleRefs.current.indexOf(circle);
                    if (index_0 === -1) {
                        return;
                    }
                    tlRefs.current[index_0]?.kill();
                    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                        paused: true
                    });
                    tl.to(circle, {
                        scale: 1.2,
                        xPercent: -50,
                        duration: 2,
                        ease: "power3.easeOut",
                        overwrite: "auto"
                    }, 0);
                    if (label) {
                        tl.to(label, {
                            y: -(h + 8),
                            duration: 2,
                            ease: "power3.easeOut",
                            overwrite: "auto"
                        }, 0);
                    }
                    if (white) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(white, {
                            y: Math.ceil(h + 100),
                            opacity: 0
                        });
                        tl.to(white, {
                            y: 0,
                            opacity: 1,
                            duration: 2,
                            ease: "power3.easeOut",
                            overwrite: "auto"
                        }, 0);
                    }
                    tlRefs.current[index_0] = tl;
                });
            };
            layout();
            const onResize = ()=>layout();
            window.addEventListener("resize", onResize);
            if (document.fonts) {
                document.fonts.ready.then(layout).catch(_temp);
            }
            const menu = mobileMenuRef.current;
            if (menu) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(menu, {
                    visibility: "hidden",
                    opacity: 0,
                    scaleY: 1,
                    y: 0
                });
            }
            const logo = logoRef.current;
            const navItemsDiv = navItemsRef.current;
            if (logo) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(logo, {
                    scale: 0
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(logo, {
                    scale: 1,
                    duration: 0.6,
                    ease: "power3.easeOut"
                });
            }
            if (navItemsDiv) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(navItemsDiv, {
                    width: 0,
                    overflow: "hidden"
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(navItemsDiv, {
                    width: "auto",
                    duration: 0.6,
                    ease: "power3.easeOut"
                });
            }
            const observerOptions = {
                root: null,
                rootMargin: "-50% 0px -50% 0px",
                threshold: 0
            };
            const observerCallback = (entries)=>{
                entries.forEach((entry)=>{
                    if (entry.isIntersecting) {
                        const sectionId = entry.target.id;
                        const index_1 = navItems.findIndex((item)=>item.href === `#${sectionId}`);
                        if (index_1 !== -1) {
                            setActiveIndex(index_1);
                        }
                    }
                });
            };
            const observer = new IntersectionObserver(observerCallback, observerOptions);
            navItems.forEach((item_0)=>{
                const sectionId_0 = item_0.href.replace("#", "");
                const section = document.getElementById(sectionId_0);
                if (section) {
                    observer.observe(section);
                }
            });
            return ()=>{
                window.removeEventListener("resize", onResize);
                observer.disconnect();
            };
        };
        t5 = [];
        $[5] = t4;
        $[6] = t5;
    } else {
        t4 = $[5];
        t5 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    const handleEnter = (i)=>{
        setHoveredIndex(i);
        const tl_0 = tlRefs.current[i];
        if (!tl_0) {
            return;
        }
        activeTweenRefs.current[i]?.kill();
        activeTweenRefs.current[i] = tl_0.tweenTo(tl_0.duration(), {
            duration: 0.3,
            ease: "power3.easeOut",
            overwrite: "auto"
        });
    };
    const handleLeave = (i_0)=>{
        setHoveredIndex(null);
        const tl_1 = tlRefs.current[i_0];
        if (!tl_1) {
            return;
        }
        activeTweenRefs.current[i_0]?.kill();
        activeTweenRefs.current[i_0] = tl_1.tweenTo(0, {
            duration: 0.2,
            ease: "power3.easeOut",
            overwrite: "auto"
        });
    };
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ()=>{
            const img = logoImgRef.current;
            if (!img) {
                return;
            }
            logoTweenRef.current?.kill();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(img, {
                rotate: 0
            });
            logoTweenRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(img, {
                rotate: 360,
                duration: 0.5,
                ease: "power2.easeOut",
                overwrite: "auto"
            });
        };
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    const handleLogoEnter = t6;
    let t7;
    if ($[8] !== isMobileMenuOpen) {
        t7 = ()=>{
            const newState = !isMobileMenuOpen;
            setIsMobileMenuOpen(newState);
            const hamburger = hamburgerRef.current;
            const menu_0 = mobileMenuRef.current;
            if (hamburger) {
                const lines = hamburger.querySelectorAll(".hamburger-line");
                if (newState) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(lines[0], {
                        rotation: 45,
                        y: 8,
                        duration: 0.3,
                        ease: "power3.easeOut"
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(lines[1], {
                        opacity: 0,
                        duration: 0.2,
                        ease: "power3.easeOut"
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(lines[2], {
                        rotation: -45,
                        y: -8,
                        duration: 0.3,
                        ease: "power3.easeOut"
                    });
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(lines[0], {
                        rotation: 0,
                        y: 0,
                        duration: 0.3,
                        ease: "power3.easeOut"
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(lines[1], {
                        opacity: 1,
                        duration: 0.2,
                        ease: "power3.easeOut"
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(lines[2], {
                        rotation: 0,
                        y: 0,
                        duration: 0.3,
                        ease: "power3.easeOut"
                    });
                }
            }
            if (menu_0) {
                if (newState) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(menu_0, {
                        visibility: "visible"
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(menu_0, {
                        opacity: 0,
                        y: -10
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 0.3,
                        ease: "power3.easeOut"
                    });
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(menu_0, {
                        opacity: 0,
                        y: -10,
                        duration: 0.2,
                        ease: "power3.easeOut",
                        onComplete: ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(menu_0, {
                                visibility: "hidden"
                            });
                        }
                    });
                }
            }
        };
        $[8] = isMobileMenuOpen;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    const toggleMobileMenu = t7;
    const t8 = "sticky top-0 left-0 right-0 z-50 w-full px-4 py-4 transition-colors duration-300";
    const t9 = "w-full max-w-7xl mx-auto flex items-center justify-between px-4 py-2 nav-gradient backdrop-blur-md border border-nav-border rounded-full shadow-2xl transition-colors duration-300";
    let t10;
    if ($[10] !== handleScroll) {
        t10 = (e_0)=>handleScroll(e_0, "#home", 0);
        $[10] = handleScroll;
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/ap_logo.png",
            alt: "Logo",
            width: 64,
            height: 64,
            ref: logoImgRef,
            className: "w-full h-full object-contain"
        }, void 0, false, {
            fileName: "[project]/src/components/nav.tsx",
            lineNumber: 386,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#home",
            onClick: t10,
            "aria-label": "Home",
            onMouseEnter: handleLogoEnter,
            ref: logoRef,
            className: "inline-flex items-center justify-center overflow-visible w-[64px] h-[64px] hover:scale-110 transition-transform",
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/components/nav.tsx",
            lineNumber: 393,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t10;
        $[14] = t12;
    } else {
        t12 = $[14];
    }
    const t13 = "relative items-center hidden md:flex";
    const t14 = "list-none flex items-stretch m-0 h-full gap-6";
    const t15 = navItems.map((item_1, i_1)=>{
        const isActive = activeIndex === i_1;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "flex h-full items-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: item_1.href,
                onClick: (e_1)=>handleScroll(e_1, item_1.href, i_1),
                className: `relative overflow-hidden inline-flex items-center justify-center h-full no-underline rounded-full box-border font-semibold text-[13px] leading-[0] uppercase tracking-[0.8px] whitespace-nowrap cursor-pointer px-5 py-2 transition-colors duration-300 ${isActive ? "bg-nav-active-bg text-accent-secondary" : "bg-transparent text-nav-text hover:bg-nav-active-bg hover:text-nav-text-hover"}`,
                onMouseEnter: ()=>handleEnter(i_1),
                onMouseLeave: ()=>handleLeave(i_1),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PixelEffect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        isActive: isActive || hoveredIndex === i_1,
                        gap: 3,
                        speed: isActive ? 40 : 60,
                        colors: isActive ? "#fbbf24,#f59e0b,#d97706" : "#3b82f6,#60a5fa,#93c5fd"
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav.tsx",
                        lineNumber: 403,
                        columnNumber: 621
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none bg-accent-primary",
                        style: {
                            willChange: "transform"
                        },
                        "aria-hidden": "true",
                        ref: (el)=>{
                            circleRefs.current[i_1] = el;
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav.tsx",
                        lineNumber: 403,
                        columnNumber: 789
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "relative inline-block leading-[1] z-[2]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `pill-label relative z-[2] inline-block leading-[1] ${isActive ? "text-accent-secondary font-bold" : ""}`,
                                style: {
                                    willChange: "transform"
                                },
                                children: item_1.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/nav.tsx",
                                lineNumber: 407,
                                columnNumber: 72
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `pill-label-hover absolute left-0 top-0 z-[3] inline-block ${isActive ? "text-accent-secondary" : "text-nav-text-hover"}`,
                                style: {
                                    willChange: "transform, opacity"
                                },
                                "aria-hidden": "true",
                                children: item_1.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/nav.tsx",
                                lineNumber: 409,
                                columnNumber: 34
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/nav.tsx",
                        lineNumber: 407,
                        columnNumber: 14
                    }, ("TURBOPACK compile-time value", void 0)),
                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute left-1/2 -bottom-[6px] -translate-x-1/2 w-2 h-2 rounded-full z-[4] bg-accent-secondary animate-pulse",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav.tsx",
                        lineNumber: 411,
                        columnNumber: 73
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/nav.tsx",
                lineNumber: 403,
                columnNumber: 71
            }, ("TURBOPACK compile-time value", void 0))
        }, item_1.href, false, {
            fileName: "[project]/src/components/nav.tsx",
            lineNumber: 403,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    });
    let t16;
    if ($[15] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: navItemsRef,
            className: t13,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: t14,
                children: t15
            }, void 0, false, {
                fileName: "[project]/src/components/nav.tsx",
                lineNumber: 415,
                columnNumber: 50
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/nav.tsx",
            lineNumber: 415,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t15;
        $[16] = t16;
    } else {
        t16 = $[16];
    }
    let t17;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/nav.tsx",
            lineNumber: 423,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t17;
    } else {
        t17 = $[17];
    }
    let t18;
    let t19;
    let t20;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "hamburger-line w-5 h-0.5 rounded origin-center bg-nav-text"
        }, void 0, false, {
            fileName: "[project]/src/components/nav.tsx",
            lineNumber: 432,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "hamburger-line w-5 h-0.5 rounded origin-center bg-nav-text"
        }, void 0, false, {
            fileName: "[project]/src/components/nav.tsx",
            lineNumber: 433,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "hamburger-line w-5 h-0.5 rounded origin-center bg-nav-text"
        }, void 0, false, {
            fileName: "[project]/src/components/nav.tsx",
            lineNumber: 434,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t18;
        $[19] = t19;
        $[20] = t20;
    } else {
        t18 = $[18];
        t19 = $[19];
        t20 = $[20];
    }
    let t21;
    if ($[21] !== isMobileMenuOpen || $[22] !== toggleMobileMenu) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    ref: hamburgerRef,
                    onClick: toggleMobileMenu,
                    "aria-label": "Toggle menu",
                    "aria-expanded": isMobileMenuOpen,
                    className: "md:hidden rounded-full flex flex-col items-center justify-center gap-1.5 cursor-pointer p-0 bg-nav-active-bg w-[48px] h-[48px] shadow-lg border border-nav-border",
                    children: [
                        t18,
                        t19,
                        t20
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/nav.tsx",
                    lineNumber: 445,
                    columnNumber: 57
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/nav.tsx",
            lineNumber: 445,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = isMobileMenuOpen;
        $[22] = toggleMobileMenu;
        $[23] = t21;
    } else {
        t21 = $[23];
    }
    let t22;
    if ($[24] !== t12 || $[25] !== t16 || $[26] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: t9,
            children: [
                t12,
                t16,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/nav.tsx",
            lineNumber: 454,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t12;
        $[25] = t16;
        $[26] = t21;
        $[27] = t22;
    } else {
        t22 = $[27];
    }
    let t23;
    if ($[28] !== handleScroll || $[29] !== toggleMobileMenu) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: mobileMenuRef,
            className: "md:hidden absolute top-[80px] left-4 right-4 rounded-2xl shadow-2xl nav-gradient backdrop-blur-lg origin-top border border-nav-border",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "list-none m-0 p-2 flex flex-col gap-1",
                children: navItems.map((item_2, index_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: item_2.href,
                            onClick: (e_2)=>{
                                handleScroll(e_2, item_2.href, index_2);
                                toggleMobileMenu();
                            },
                            className: "block py-3 px-5 text-base font-semibold rounded-full bg-nav-active-bg text-nav-text hover:bg-card-bg-hover hover:text-nav-text-hover transition-all duration-200",
                            children: item_2.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/nav.tsx",
                            lineNumber: 464,
                            columnNumber: 293
                        }, ("TURBOPACK compile-time value", void 0))
                    }, item_2.href, false, {
                        fileName: "[project]/src/components/nav.tsx",
                        lineNumber: 464,
                        columnNumber: 271
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/nav.tsx",
                lineNumber: 464,
                columnNumber: 182
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/nav.tsx",
            lineNumber: 464,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = handleScroll;
        $[29] = toggleMobileMenu;
        $[30] = t23;
    } else {
        t23 = $[30];
    }
    let t24;
    if ($[31] !== t22 || $[32] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            children: [
                t22,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/nav.tsx",
            lineNumber: 476,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = t22;
        $[32] = t23;
        $[33] = t24;
    } else {
        t24 = $[33];
    }
    return t24;
};
_s(Navbar, "f7y40UfOprmuG1NkZAHieAQ54Vw=");
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
function _temp() {}
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/PixelBlast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
// @ts-nocheck
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/postprocessing/build/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const createTouchTexture = ()=>{
    const size = 64;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('2D context not available');
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"](canvas);
    texture.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"];
    texture.magFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"];
    texture.generateMipmaps = false;
    const trail = [];
    let last = null;
    const maxAge = 64;
    let radius = 0.1 * size;
    const speed = 1 / maxAge;
    const clear = ()=>{
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    const drawPoint = (p)=>{
        const pos = {
            x: p.x * size,
            y: (1 - p.y) * size
        };
        let intensity = 1;
        const easeOutSine = (t)=>Math.sin(t * Math.PI / 2);
        const easeOutQuad = (t)=>-t * (t - 2);
        if (p.age < maxAge * 0.3) intensity = easeOutSine(p.age / (maxAge * 0.3));
        else intensity = easeOutQuad(1 - (p.age - maxAge * 0.3) / (maxAge * 0.7)) || 0;
        intensity *= p.force;
        const color = `${(p.vx + 1) / 2 * 255}, ${(p.vy + 1) / 2 * 255}, ${intensity * 255}`;
        const offset = size * 5;
        ctx.shadowOffsetX = offset;
        ctx.shadowOffsetY = offset;
        ctx.shadowBlur = radius;
        ctx.shadowColor = `rgba(${color},${0.22 * intensity})`;
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255,0,0,1)';
        ctx.arc(pos.x - offset, pos.y - offset, radius, 0, Math.PI * 2);
        ctx.fill();
    };
    const addTouch = (norm)=>{
        let force = 0;
        let vx = 0;
        let vy = 0;
        if (last) {
            const dx = norm.x - last.x;
            const dy = norm.y - last.y;
            if (dx === 0 && dy === 0) return;
            const dd = dx * dx + dy * dy;
            const d = Math.sqrt(dd);
            vx = dx / (d || 1);
            vy = dy / (d || 1);
            force = Math.min(dd * 10000, 1);
        }
        last = {
            x: norm.x,
            y: norm.y
        };
        trail.push({
            x: norm.x,
            y: norm.y,
            age: 0,
            force,
            vx,
            vy
        });
    };
    const update = ()=>{
        clear();
        for(let i = trail.length - 1; i >= 0; i--){
            const point = trail[i];
            const f = point.force * speed * (1 - point.age / maxAge);
            point.x += point.vx * f;
            point.y += point.vy * f;
            point.age++;
            if (point.age > maxAge) trail.splice(i, 1);
        }
        for(let i = 0; i < trail.length; i++)drawPoint(trail[i]);
        texture.needsUpdate = true;
    };
    return {
        canvas,
        texture,
        addTouch,
        update,
        set radiusScale (v){
            radius = 0.1 * size * v;
        },
        get radiusScale () {
            return radius / (0.1 * size);
        },
        size
    };
};
const createLiquidEffect = (texture, opts)=>{
    const fragment = `
    uniform sampler2D uTexture;
    uniform float uStrength;
    uniform float uTime;
    uniform float uFreq;

    void mainUv(inout vec2 uv) {
      vec4 tex = texture2D(uTexture, uv);
      float vx = tex.r * 2.0 - 1.0;
      float vy = tex.g * 2.0 - 1.0;
      float intensity = tex.b;

      float wave = 0.5 + 0.5 * sin(uTime * uFreq + intensity * 6.2831853);

      float amt = uStrength * intensity * wave;

      uv += vec2(vx, vy) * amt;
    }
    `;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Effect"]('LiquidEffect', fragment, {
        uniforms: new Map([
            [
                'uTexture',
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](texture)
            ],
            [
                'uStrength',
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](opts?.strength ?? 0.025)
            ],
            [
                'uTime',
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](0)
            ],
            [
                'uFreq',
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](opts?.freq ?? 4.5)
            ]
        ])
    });
};
const SHAPE_MAP = {
    square: 0,
    circle: 1,
    triangle: 2,
    diamond: 3
};
const VERTEX_SRC = `
void main() {
  gl_Position = vec4(position, 1.0);
}
`;
const FRAGMENT_SRC = `
precision highp float;

uniform vec3  uColor;
uniform vec2  uResolution;
uniform float uTime;
uniform float uPixelSize;
uniform float uScale;
uniform float uDensity;
uniform float uPixelJitter;
uniform int   uEnableRipples;
uniform float uRippleSpeed;
uniform float uRippleThickness;
uniform float uRippleIntensity;
uniform float uEdgeFade;

uniform int   uShapeType;
const int SHAPE_SQUARE   = 0;
const int SHAPE_CIRCLE   = 1;
const int SHAPE_TRIANGLE = 2;
const int SHAPE_DIAMOND  = 3;

const int   MAX_CLICKS = 10;

uniform vec2  uClickPos  [MAX_CLICKS];
uniform float uClickTimes[MAX_CLICKS];

out vec4 fragColor;

float Bayer2(vec2 a) {
  a = floor(a);
  return fract(a.x / 2. + a.y * a.y * .75);
}
#define Bayer4(a) (Bayer2(.5*(a))*0.25 + Bayer2(a))
#define Bayer8(a) (Bayer4(.5*(a))*0.25 + Bayer2(a))

#define FBM_OCTAVES     5
#define FBM_LACUNARITY  1.25
#define FBM_GAIN        1.0

float hash11(float n){ return fract(sin(n)*43758.5453); }

float vnoise(vec3 p){
  vec3 ip = floor(p);
  vec3 fp = fract(p);
  float n000 = hash11(dot(ip + vec3(0.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n100 = hash11(dot(ip + vec3(1.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n010 = hash11(dot(ip + vec3(0.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n110 = hash11(dot(ip + vec3(1.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n001 = hash11(dot(ip + vec3(0.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n101 = hash11(dot(ip + vec3(1.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n011 = hash11(dot(ip + vec3(0.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  float n111 = hash11(dot(ip + vec3(1.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  vec3 w = fp*fp*fp*(fp*(fp*6.0-15.0)+10.0);
  float x00 = mix(n000, n100, w.x);
  float x10 = mix(n010, n110, w.x);
  float x01 = mix(n001, n101, w.x);
  float x11 = mix(n011, n111, w.x);
  float y0  = mix(x00, x10, w.y);
  float y1  = mix(x01, x11, w.y);
  return mix(y0, y1, w.z) * 2.0 - 1.0;
}

float fbm2(vec2 uv, float t){
  vec3 p = vec3(uv * uScale, t);
  float amp = 1.0;
  float freq = 1.0;
  float sum = 1.0;
  for (int i = 0; i < FBM_OCTAVES; ++i){
    sum  += amp * vnoise(p * freq);
    freq *= FBM_LACUNARITY;
    amp  *= FBM_GAIN;
  }
  return sum * 0.5 + 0.5;
}

float maskCircle(vec2 p, float cov){
  float r = sqrt(cov) * .25;
  float d = length(p - 0.5) - r;
  float aa = 0.5 * fwidth(d);
  return cov * (1.0 - smoothstep(-aa, aa, d * 2.0));
}

float maskTriangle(vec2 p, vec2 id, float cov){
  bool flip = mod(id.x + id.y, 2.0) > 0.5;
  if (flip) p.x = 1.0 - p.x;
  float r = sqrt(cov);
  float d  = p.y - r*(1.0 - p.x);
  float aa = fwidth(d);
  return cov * clamp(0.5 - d/aa, 0.0, 1.0);
}

float maskDiamond(vec2 p, float cov){
  float r = sqrt(cov) * 0.564;
  return step(abs(p.x - 0.49) + abs(p.y - 0.49), r);
}

void main(){
  float pixelSize = uPixelSize;
  vec2 fragCoord = gl_FragCoord.xy - uResolution * .5;
  float aspectRatio = uResolution.x / uResolution.y;

  vec2 pixelId = floor(fragCoord / pixelSize);
  vec2 pixelUV = fract(fragCoord / pixelSize);

  float cellPixelSize = 8.0 * pixelSize;
  vec2 cellId = floor(fragCoord / cellPixelSize);
  vec2 cellCoord = cellId * cellPixelSize;
  vec2 uv = cellCoord / uResolution * vec2(aspectRatio, 1.0);

  float base = fbm2(uv, uTime * 0.05);
  base = base * 0.5 - 0.65;

  float feed = base + (uDensity - 0.5) * 0.3;

  float speed     = uRippleSpeed;
  float thickness = uRippleThickness;
  const float dampT     = 1.0;
  const float dampR     = 10.0;

  if (uEnableRipples == 1) {
    for (int i = 0; i < MAX_CLICKS; ++i){
      vec2 pos = uClickPos[i];
      if (pos.x < 0.0) continue;
      float cellPixelSize = 8.0 * pixelSize;
      vec2 cuv = (((pos - uResolution * .5 - cellPixelSize * .5) / (uResolution))) * vec2(aspectRatio, 1.0);
      float t = max(uTime - uClickTimes[i], 0.0);
      float r = distance(uv, cuv);
      float waveR = speed * t;
      float ring  = exp(-pow((r - waveR) / thickness, 2.0));
      float atten = exp(-dampT * t) * exp(-dampR * r);
      feed = max(feed, ring * atten * uRippleIntensity);
    }
  }

  float bayer = Bayer8(fragCoord / uPixelSize) - 0.5;
  float bw = step(0.5, feed + bayer);

  float h = fract(sin(dot(floor(fragCoord / uPixelSize), vec2(127.1, 311.7))) * 43758.5453);
  float jitterScale = 1.0 + (h - 0.5) * uPixelJitter;
  float coverage = bw * jitterScale;
  float M;
  if      (uShapeType == SHAPE_CIRCLE)   M = maskCircle (pixelUV, coverage);
  else if (uShapeType == SHAPE_TRIANGLE) M = maskTriangle(pixelUV, pixelId, coverage);
  else if (uShapeType == SHAPE_DIAMOND)  M = maskDiamond(pixelUV, coverage);
  else                                   M = coverage;

  if (uEdgeFade > 0.0) {
    vec2 norm = gl_FragCoord.xy / uResolution;
    float edge = min(min(norm.x, norm.y), min(1.0 - norm.x, 1.0 - norm.y));
    float fade = smoothstep(0.0, uEdgeFade, edge);
    M *= fade;
  }

  vec3 color = uColor;
  fragColor = vec4(color, M);
}
`;
const MAX_CLICKS = 10;
const PixelBlast = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27);
    if ($[0] !== "12c7da3d9c6d79c47ffd750b84bfbcb490e1713a643d7780402c8df15e928b14") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "12c7da3d9c6d79c47ffd750b84bfbcb490e1713a643d7780402c8df15e928b14";
    }
    const { variant: t1, pixelSize: t2, color: t3, className, style, antialias: t4, patternScale: t5, patternDensity: t6, liquid: t7, liquidStrength: t8, liquidRadius: t9, pixelSizeJitter: t10, enableRipples: t11, rippleIntensityScale: t12, rippleThickness: t13, rippleSpeed: t14, liquidWobbleSpeed: t15, autoPauseOffscreen: t16, speed: t17, transparent: t18, edgeFade: t19, noiseAmount: t20 } = t0;
    const variant = t1 === undefined ? "circle" : t1;
    const pixelSize = t2 === undefined ? 6 : t2;
    const color = t3 === undefined ? "#B19EEF" : t3;
    const antialias = t4 === undefined ? true : t4;
    const patternScale = t5 === undefined ? 3 : t5;
    const patternDensity = t6 === undefined ? 1.2 : t6;
    const liquid = t7 === undefined ? true : t7;
    const liquidStrength = t8 === undefined ? 0.12 : t8;
    const liquidRadius = t9 === undefined ? 1.2 : t9;
    const pixelSizeJitter = t10 === undefined ? 0.5 : t10;
    const enableRipples = t11 === undefined ? true : t11;
    const rippleIntensityScale = t12 === undefined ? 1.5 : t12;
    const rippleThickness = t13 === undefined ? 0.12 : t13;
    const rippleSpeed = t14 === undefined ? 0.4 : t14;
    const liquidWobbleSpeed = t15 === undefined ? 5 : t15;
    const autoPauseOffscreen = t16 === undefined ? true : t16;
    const speed = t17 === undefined ? 0.6 : t17;
    const transparent = t18 === undefined ? true : t18;
    const edgeFade = t19 === undefined ? 0.25 : t19;
    const noiseAmount = t20 === undefined ? 0 : t20;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t21;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = {
            visible: true
        };
        $[1] = t21;
    } else {
        t21 = $[1];
    }
    const visibilityRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t21);
    const speedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(speed);
    const threeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const prevConfigRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t22;
    let t23;
    if ($[2] !== antialias || $[3] !== autoPauseOffscreen || $[4] !== color || $[5] !== edgeFade || $[6] !== enableRipples || $[7] !== liquid || $[8] !== liquidRadius || $[9] !== liquidStrength || $[10] !== liquidWobbleSpeed || $[11] !== noiseAmount || $[12] !== patternDensity || $[13] !== patternScale || $[14] !== pixelSize || $[15] !== pixelSizeJitter || $[16] !== rippleIntensityScale || $[17] !== rippleSpeed || $[18] !== rippleThickness || $[19] !== speed || $[20] !== transparent || $[21] !== variant) {
        t22 = ()=>{
            const container = containerRef.current;
            if (!container) {
                return;
            }
            speedRef.current = speed;
            const needsReinitKeys = [
                "antialias",
                "liquid",
                "noiseAmount"
            ];
            const cfg = {
                antialias,
                liquid,
                noiseAmount
            };
            let mustReinit = false;
            if (!threeRef.current) {
                mustReinit = true;
            } else {
                if (prevConfigRef.current) {
                    for (const k of needsReinitKeys){
                        if (prevConfigRef.current[k] !== cfg[k]) {
                            mustReinit = true;
                            break;
                        }
                    }
                }
            }
            if (mustReinit) {
                if (threeRef.current) {
                    const t = threeRef.current;
                    t.resizeObserver?.disconnect();
                    cancelAnimationFrame(t.raf);
                    t.quad?.geometry.dispose();
                    t.material.dispose();
                    t.composer?.dispose();
                    t.renderer.dispose();
                    if (t.renderer.domElement.parentElement === container) {
                        container.removeChild(t.renderer.domElement);
                    }
                    threeRef.current = null;
                }
                const canvas = document.createElement("canvas");
                const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                    canvas,
                    antialias,
                    alpha: true,
                    powerPreference: "high-performance"
                });
                renderer.domElement.style.width = "100%";
                renderer.domElement.style.height = "100%";
                renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
                container.appendChild(renderer.domElement);
                if (transparent) {
                    renderer.setClearAlpha(0);
                } else {
                    renderer.setClearColor(0, 1);
                }
                const uniforms = {
                    uResolution: {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, 0)
                    },
                    uTime: {
                        value: 0
                    },
                    uColor: {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](color)
                    },
                    uClickPos: {
                        value: Array.from({
                            length: MAX_CLICKS
                        }, _temp)
                    },
                    uClickTimes: {
                        value: new Float32Array(MAX_CLICKS)
                    },
                    uShapeType: {
                        value: SHAPE_MAP[variant] ?? 0
                    },
                    uPixelSize: {
                        value: pixelSize * renderer.getPixelRatio()
                    },
                    uScale: {
                        value: patternScale
                    },
                    uDensity: {
                        value: patternDensity
                    },
                    uPixelJitter: {
                        value: pixelSizeJitter
                    },
                    uEnableRipples: {
                        value: enableRipples ? 1 : 0
                    },
                    uRippleSpeed: {
                        value: rippleSpeed
                    },
                    uRippleThickness: {
                        value: rippleThickness
                    },
                    uRippleIntensity: {
                        value: rippleIntensityScale
                    },
                    uEdgeFade: {
                        value: edgeFade
                    }
                };
                const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
                const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrthographicCamera"](-1, 1, 1, -1, 0, 1);
                const material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
                    vertexShader: VERTEX_SRC,
                    fragmentShader: FRAGMENT_SRC,
                    uniforms,
                    transparent: true,
                    depthTest: false,
                    depthWrite: false,
                    glslVersion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLSL3"]
                });
                const quadGeom = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](2, 2);
                const quad = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](quadGeom, material);
                scene.add(quad);
                const clock = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clock"]();
                const setSize = ()=>{
                    const w = container.clientWidth || 1;
                    const h = container.clientHeight || 1;
                    renderer.setSize(w, h, false);
                    uniforms.uResolution.value.set(renderer.domElement.width, renderer.domElement.height);
                    if (threeRef.current?.composer) {
                        threeRef.current.composer.setSize(renderer.domElement.width, renderer.domElement.height);
                    }
                    uniforms.uPixelSize.value = pixelSize * renderer.getPixelRatio();
                };
                setSize();
                const ro = new ResizeObserver(setSize);
                ro.observe(container);
                const randomFloat = _temp2;
                const timeOffset = randomFloat() * 1000;
                let composer;
                let touch;
                let liquidEffect;
                if (liquid) {
                    touch = createTouchTexture();
                    touch.radiusScale = liquidRadius;
                    composer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectComposer"](renderer);
                    const renderPass = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderPass"](scene, camera);
                    liquidEffect = createLiquidEffect(touch.texture, {
                        strength: liquidStrength,
                        freq: liquidWobbleSpeed
                    });
                    const effectPass = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectPass"](camera, liquidEffect);
                    effectPass.renderToScreen = true;
                    composer.addPass(renderPass);
                    composer.addPass(effectPass);
                }
                if (noiseAmount > 0) {
                    if (!composer) {
                        composer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectComposer"](renderer);
                        composer.addPass(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderPass"](scene, camera));
                    }
                    const noiseEffect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Effect"]("NoiseEffect", "uniform float uTime; uniform float uAmount; float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);} void mainUv(inout vec2 uv){} void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){ float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0)); float g=(n-0.5)*uAmount; outputColor=inputColor+vec4(vec3(g),0.0);} ", {
                        uniforms: new Map([
                            [
                                "uTime",
                                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](0)
                            ],
                            [
                                "uAmount",
                                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](noiseAmount)
                            ]
                        ])
                    });
                    const noisePass = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectPass"](camera, noiseEffect);
                    noisePass.renderToScreen = true;
                    if (composer && composer.passes.length > 0) {
                        composer.passes.forEach(_temp3);
                    }
                    composer.addPass(noisePass);
                }
                if (composer) {
                    composer.setSize(renderer.domElement.width, renderer.domElement.height);
                }
                const mapToPixels = (e)=>{
                    const rect = renderer.domElement.getBoundingClientRect();
                    const scaleX = renderer.domElement.width / rect.width;
                    const scaleY = renderer.domElement.height / rect.height;
                    const fx = (e.clientX - rect.left) * scaleX;
                    const fy = (rect.height - (e.clientY - rect.top)) * scaleY;
                    return {
                        fx,
                        fy,
                        w: renderer.domElement.width,
                        h: renderer.domElement.height
                    };
                };
                const onPointerDown = (e_0)=>{
                    const { fx: fx_0, fy: fy_0 } = mapToPixels(e_0);
                    const ix = threeRef.current?.clickIx ?? 0;
                    uniforms.uClickPos.value[ix].set(fx_0, fy_0);
                    uniforms.uClickTimes.value[ix] = uniforms.uTime.value;
                    if (threeRef.current) {
                        threeRef.current.clickIx = (ix + 1) % MAX_CLICKS;
                    }
                };
                let lastMoveTime = 0;
                const onPointerMove = (e_1)=>{
                    if (!touch) {
                        return;
                    }
                    const { fx: fx_1, fy: fy_1, w: w_0, h: h_0 } = mapToPixels(e_1);
                    touch.addTouch({
                        x: fx_1 / w_0,
                        y: fy_1 / h_0
                    });
                    const now = Date.now();
                    if (now - lastMoveTime > 50) {
                        const ix_0 = threeRef.current?.clickIx ?? 0;
                        uniforms.uClickPos.value[ix_0].set(fx_1, fy_1);
                        uniforms.uClickTimes.value[ix_0] = uniforms.uTime.value;
                        if (threeRef.current) {
                            threeRef.current.clickIx = (ix_0 + 1) % MAX_CLICKS;
                        }
                        lastMoveTime = now;
                    }
                };
                renderer.domElement.addEventListener("pointerdown", onPointerDown, {
                    passive: true
                });
                renderer.domElement.addEventListener("pointermove", onPointerMove, {
                    passive: true
                });
                let raf = 0;
                const animate = ()=>{
                    if (autoPauseOffscreen && !visibilityRef.current.visible) {
                        raf = requestAnimationFrame(animate);
                        return;
                    }
                    uniforms.uTime.value = timeOffset + clock.getElapsedTime() * speedRef.current;
                    if (liquidEffect) {
                        liquidEffect.uniforms.get("uTime").value = uniforms.uTime.value;
                    }
                    if (composer) {
                        if (touch) {
                            touch.update();
                        }
                        composer.passes.forEach((p_0)=>{
                            const effs = p_0.effects;
                            if (effs) {
                                effs.forEach((eff)=>{
                                    const u = eff.uniforms?.get("uTime");
                                    if (u) {
                                        u.value = uniforms.uTime.value;
                                    }
                                });
                            }
                        });
                        composer.render();
                    } else {
                        renderer.render(scene, camera);
                    }
                    raf = requestAnimationFrame(animate);
                };
                raf = requestAnimationFrame(animate);
                threeRef.current = {
                    renderer,
                    scene,
                    camera,
                    material,
                    clock,
                    clickIx: 0,
                    uniforms,
                    resizeObserver: ro,
                    raf,
                    quad,
                    timeOffset,
                    composer,
                    touch,
                    liquidEffect
                };
            } else {
                const t_0 = threeRef.current;
                t_0.uniforms.uShapeType.value = SHAPE_MAP[variant] ?? 0;
                t_0.uniforms.uPixelSize.value = pixelSize * t_0.renderer.getPixelRatio();
                t_0.uniforms.uColor.value.set(color);
                t_0.uniforms.uScale.value = patternScale;
                t_0.uniforms.uDensity.value = patternDensity;
                t_0.uniforms.uPixelJitter.value = pixelSizeJitter;
                t_0.uniforms.uEnableRipples.value = enableRipples ? 1 : 0;
                t_0.uniforms.uRippleIntensity.value = rippleIntensityScale;
                t_0.uniforms.uRippleThickness.value = rippleThickness;
                t_0.uniforms.uRippleSpeed.value = rippleSpeed;
                t_0.uniforms.uEdgeFade.value = edgeFade;
                if (transparent) {
                    t_0.renderer.setClearAlpha(0);
                } else {
                    t_0.renderer.setClearColor(0, 1);
                }
                if (t_0.liquidEffect) {
                    const uStrength = t_0.liquidEffect.uniforms.get("uStrength");
                    if (uStrength) {
                        uStrength.value = liquidStrength;
                    }
                    const uFreq = t_0.liquidEffect.uniforms.get("uFreq");
                    if (uFreq) {
                        uFreq.value = liquidWobbleSpeed;
                    }
                }
                if (t_0.touch) {
                    t_0.touch.radiusScale = liquidRadius;
                }
            }
            prevConfigRef.current = cfg;
            return ()=>{
                if (threeRef.current && mustReinit) {
                    return;
                }
                if (!threeRef.current) {
                    return;
                }
                const t_1 = threeRef.current;
                t_1.resizeObserver?.disconnect();
                cancelAnimationFrame(t_1.raf);
                t_1.quad?.geometry.dispose();
                t_1.material.dispose();
                t_1.composer?.dispose();
                t_1.renderer.dispose();
                if (t_1.renderer.domElement.parentElement === container) {
                    container.removeChild(t_1.renderer.domElement);
                }
                threeRef.current = null;
            };
        };
        t23 = [
            antialias,
            liquid,
            noiseAmount,
            pixelSize,
            patternScale,
            patternDensity,
            enableRipples,
            rippleIntensityScale,
            rippleThickness,
            rippleSpeed,
            pixelSizeJitter,
            edgeFade,
            transparent,
            liquidStrength,
            liquidRadius,
            liquidWobbleSpeed,
            autoPauseOffscreen,
            variant,
            color,
            speed
        ];
        $[2] = antialias;
        $[3] = autoPauseOffscreen;
        $[4] = color;
        $[5] = edgeFade;
        $[6] = enableRipples;
        $[7] = liquid;
        $[8] = liquidRadius;
        $[9] = liquidStrength;
        $[10] = liquidWobbleSpeed;
        $[11] = noiseAmount;
        $[12] = patternDensity;
        $[13] = patternScale;
        $[14] = pixelSize;
        $[15] = pixelSizeJitter;
        $[16] = rippleIntensityScale;
        $[17] = rippleSpeed;
        $[18] = rippleThickness;
        $[19] = speed;
        $[20] = transparent;
        $[21] = variant;
        $[22] = t22;
        $[23] = t23;
    } else {
        t22 = $[22];
        t23 = $[23];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t22, t23);
    const t24 = `w-full h-full relative overflow-hidden ${className ?? ""}`;
    let t25;
    if ($[24] !== style || $[25] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            className: t24,
            style: style,
            "aria-label": "PixelBlast interactive background"
        }, void 0, false, {
            fileName: "[project]/src/components/PixelBlast.tsx",
            lineNumber: 772,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = style;
        $[25] = t24;
        $[26] = t25;
    } else {
        t25 = $[26];
    }
    return t25;
};
_s(PixelBlast, "4/F70/x0+L7nAfXxnp+Tig683DM=");
_c = PixelBlast;
const __TURBOPACK__default__export__ = PixelBlast;
function _temp() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](-1, -1);
}
function _temp2() {
    if (("TURBOPACK compile-time value", "object") !== "undefined" && window.crypto?.getRandomValues) {
        const u32 = new Uint32Array(1);
        window.crypto.getRandomValues(u32);
        return u32[0] / 4294967295;
    }
    return Math.random();
}
function _temp3(p) {
    return p.renderToScreen = false;
}
var _c;
__turbopack_context__.k.register(_c, "PixelBlast");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Home.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typed$2e$js$2f$dist$2f$typed$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/typed.js/dist/typed.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/autoplay.mjs [app-client] (ecmascript) <export default as Autoplay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$effect$2d$fade$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EffectFade$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/effect-fade.mjs [app-client] (ecmascript) <export default as EffectFade>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/pagination.mjs [app-client] (ecmascript) <export default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PixelBlast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PixelBlast.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
const Home = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "d8b0c7885e0960acff8c31fe17bd031367975a96d2d813537053ce31be6f9712") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d8b0c7885e0960acff8c31fe17bd031367975a96d2d813537053ce31be6f9712";
    }
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const subtitleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const typedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ctaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const socialRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ()=>{
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                defaults: {
                    ease: "power3.out"
                }
            });
            tl.fromTo(titleRef.current, {
                opacity: 0,
                y: 50
            }, {
                opacity: 1,
                y: 0,
                duration: 1
            }).fromTo(subtitleRef.current, {
                opacity: 0,
                y: 30
            }, {
                opacity: 1,
                y: 0,
                duration: 0.8
            }, "-=0.5").fromTo(ctaRef.current, {
                opacity: 0,
                scale: 0.8
            }, {
                opacity: 1,
                scale: 1,
                duration: 0.6
            }, "-=0.4").fromTo(socialRef.current, {
                opacity: 0,
                y: 20
            }, {
                opacity: 1,
                y: 0,
                duration: 0.6
            }, "-=0.3");
            if (typedRef.current) {
                const typed = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typed$2e$js$2f$dist$2f$typed$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](typedRef.current, {
                    strings: [
                        "Full Stack Developer",
                        "Python Developer",
                        "AI/ML Developer & Data Analyst",
                        "ReactJS & JavaScript Developer",
                        "C++ Programmer",
                        "RPA Developer (Robotic Process Automation)",
                        "Cybersecurity Learner",
                        "Google Student Ambassador",
                        "Motivational Speaker"
                    ],
                    typeSpeed: 100,
                    backSpeed: 40,
                    loop: true
                });
                return ()=>{
                    typed.destroy();
                };
            }
        };
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 z-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PixelBlast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                variant: "circle",
                pixelSize: 6,
                color: "rgb(118, 244, 133)",
                patternScale: 3,
                patternDensity: 1.2,
                liquid: true,
                liquidStrength: 0.18,
                liquidRadius: 1.8,
                pixelSizeJitter: 0.5,
                enableRipples: true,
                rippleIntensityScale: 2.5,
                rippleThickness: 0.2,
                rippleSpeed: 0.5,
                liquidWobbleSpeed: 5,
                transparent: true,
                edgeFade: 0.25,
                speed: 0.6
            }, void 0, false, {
                fileName: "[project]/src/components/Home.tsx",
                lineNumber: 86,
                columnNumber: 48
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Home.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"
        }, void 0, false, {
            fileName: "[project]/src/components/Home.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 overflow-hidden z-0",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse",
                    style: {
                        animationDelay: "1s"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/Home.tsx",
                    lineNumber: 100,
                    columnNumber: 68
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Home.tsx",
            lineNumber: 100,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-text-secondary",
            children: "HI,"
        }, void 0, false, {
            fileName: "[project]/src/components/Home.tsx",
            lineNumber: 110,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/src/components/Home.tsx",
            lineNumber: 111,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t5;
        $[7] = t6;
    } else {
        t5 = $[6];
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            ref: titleRef,
            className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight",
            children: [
                t5,
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-text-primary",
                    children: [
                        "I Am ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-accent-secondary",
                            children: "Arshad Pasha"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Home.tsx",
                            lineNumber: 120,
                            columnNumber: 164
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Home.tsx",
                    lineNumber: 120,
                    columnNumber: 123
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/src/components/Home.tsx",
                    lineNumber: 120,
                    columnNumber: 230
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    ref: typedRef,
                    className: "text-accent-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                }, void 0, false, {
                    fileName: "[project]/src/components/Home.tsx",
                    lineNumber: 120,
                    columnNumber: 236
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Home.tsx",
            lineNumber: 120,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "https://www.linkedin.com/in/arshad-pasha/",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "transition-all duration-300 transform hover:scale-110",
            "aria-label": "LinkedIn",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
                alt: "LinkedIn",
                className: "w-10 h-10 sm:w-12 sm:h-12"
            }, void 0, false, {
                fileName: "[project]/src/components/Home.tsx",
                lineNumber: 127,
                columnNumber: 192
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Home.tsx",
            lineNumber: 127,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "https://wa.me/+917760554350",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "transition-all duration-300 transform hover:scale-110",
            "aria-label": "WhatsApp",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
                alt: "WhatsApp",
                className: "w-10 h-10 sm:w-12 sm:h-12"
            }, void 0, false, {
                fileName: "[project]/src/components/Home.tsx",
                lineNumber: 134,
                columnNumber: 178
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Home.tsx",
            lineNumber: 134,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "https://www.instagram.com/arshadpasha65?igsh=MWs1YnQyOXdpZzd1eQ==",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "transition-all duration-300 transform hover:scale-110",
            "aria-label": "Instagram",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
                alt: "Instagram",
                className: "w-10 h-10 sm:w-12 sm:h-12"
            }, void 0, false, {
                fileName: "[project]/src/components/Home.tsx",
                lineNumber: 141,
                columnNumber: 218
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Home.tsx",
            lineNumber: 141,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "/MAIN Oct Resume.pdf",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "transition-all duration-300 transform hover:scale-110",
            "aria-label": "Resume",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "https://cdn-icons-png.flaticon.com/512/909/909212.png",
                alt: "Resume",
                className: "w-10 h-10 sm:w-12 sm:h-12"
            }, void 0, false, {
                fileName: "[project]/src/components/Home.tsx",
                lineNumber: 148,
                columnNumber: 170
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Home.tsx",
            lineNumber: 148,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: socialRef,
            className: "flex justify-center lg:justify-start gap-4 mb-8 flex-wrap",
            children: [
                t8,
                t9,
                t10,
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "https://github.com/pashaarshad",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "transition-all duration-300 transform hover:scale-110",
                    "aria-label": "GitHub",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
                        alt: "GitHub",
                        className: "w-10 h-10 sm:w-12 sm:h-12 dark:filter dark:invert dark:brightness-200"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Home.tsx",
                        lineNumber: 155,
                        columnNumber: 289
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Home.tsx",
                    lineNumber: 155,
                    columnNumber: 120
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Home.tsx",
            lineNumber: 155,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center lg:text-left",
            children: [
                t7,
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: ctaRef,
                    className: "flex flex-wrap gap-4 justify-center lg:justify-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#projects",
                            className: "group relative inline-flex items-center gap-2 bg-gradient-to-r from-accent-primary to-blue-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-accent-primary/50 text-sm sm:text-base",
                            children: [
                                "View Projects",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M13 7l5 5m0 0l-5 5m5-5H6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Home.tsx",
                                        lineNumber: 162,
                                        columnNumber: 645
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Home.tsx",
                                    lineNumber: 162,
                                    columnNumber: 505
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Home.tsx",
                            lineNumber: 162,
                            columnNumber: 145
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#contact",
                            className: "inline-flex items-center gap-2 bg-transparent border-2 border-accent-secondary text-accent-secondary px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-accent-secondary hover:text-bg-primary transition-all duration-300 transform hover:scale-105 text-sm sm:text-base",
                            children: "Get In Touch"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Home.tsx",
                            lineNumber: 162,
                            columnNumber: 753
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Home.tsx",
                    lineNumber: 162,
                    columnNumber: 62
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Home.tsx",
            lineNumber: 162,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$effect$2d$fade$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EffectFade$3e$__["EffectFade"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"]
        ];
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    let t16;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = {
            delay: 2000,
            disableOnInteraction: false
        };
        t16 = {
            clickable: true,
            dynamicBullets: true
        };
        $[16] = t15;
        $[17] = t16;
    } else {
        t15 = $[16];
        t16 = $[17];
    }
    let t17;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative group overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/arshad_infosysLogo.jpg",
                        alt: "Arshad Pasha - Infosys",
                        className: "w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Home.tsx",
                        lineNumber: 193,
                        columnNumber: 72
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Home.tsx",
                        lineNumber: 193,
                        columnNumber: 246
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Home.tsx",
                lineNumber: 193,
                columnNumber: 24
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Home.tsx",
            lineNumber: 193,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    let t18;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "home",
            className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-gradient-start via-bg-secondary to-gradient-end px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300 -mt-32 pt-40",
            children: [
                t2,
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto w-full relative z-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center",
                        children: [
                            t13,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                                    modules: t14,
                                    effect: "fade",
                                    autoplay: t15,
                                    pagination: t16,
                                    loop: true,
                                    className: "rounded-2xl shadow-2xl overflow-hidden",
                                    children: [
                                        t17,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative group overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/arshad_sap_home.jpg",
                                                        alt: "Arshad Pasha - SAP",
                                                        className: "w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 619
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Home.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 786
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Home.tsx",
                                                lineNumber: 200,
                                                columnNumber: 571
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Home.tsx",
                                            lineNumber: 200,
                                            columnNumber: 558
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Home.tsx",
                                    lineNumber: 200,
                                    columnNumber: 422
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Home.tsx",
                                lineNumber: 200,
                                columnNumber: 396
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Home.tsx",
                        lineNumber: 200,
                        columnNumber: 313
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Home.tsx",
                    lineNumber: 200,
                    columnNumber: 257
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Home.tsx",
            lineNumber: 200,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t18;
    } else {
        t18 = $[19];
    }
    return t18;
};
_s(Home, "YKdP+7e3RY//ZqnTX7LEIhDTc8Q=");
_c = Home;
const __TURBOPACK__default__export__ = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/About.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/autoplay.mjs [app-client] (ecmascript) <export default as Autoplay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$effect$2d$cube$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EffectCube$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/effect-cube.mjs [app-client] (ecmascript) <export default as EffectCube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/pagination.mjs [app-client] (ecmascript) <export default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/navigation.mjs [app-client] (ecmascript) <export default as Navigation>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const About = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(31);
    if ($[0] !== "40b321fc24822b908c5431eb6eb3f5936180fedff26b30eb3fed453465af2813") {
        for(let $i = 0; $i < 31; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "40b321fc24822b908c5431eb6eb3f5936180fedff26b30eb3fed453465af2813";
    }
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const summaryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context(()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from(titleRef.current, {
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 80%"
                    },
                    opacity: 0,
                    y: 50,
                    duration: 1,
                    ease: "power3.out"
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from(summaryRef.current, {
                    scrollTrigger: {
                        trigger: summaryRef.current,
                        start: "top 80%"
                    },
                    opacity: 0,
                    y: 30,
                    duration: 1,
                    delay: 0.2,
                    ease: "power3.out"
                });
                if (cardsRef.current) {
                    const cards = cardsRef.current.querySelectorAll(".about-card");
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from(cards, {
                        scrollTrigger: {
                            trigger: cardsRef.current,
                            start: "top 80%"
                        },
                        opacity: 0,
                        y: 50,
                        stagger: 0.2,
                        duration: 0.8,
                        ease: "power3.out"
                    });
                }
            }, sectionRef);
            return ()=>ctx.revert();
        };
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            ref: titleRef,
            className: "text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary mb-12 text-center",
            children: [
                "About ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-accent-secondary",
                    children: "Me"
                }, void 0, false, {
                    fileName: "[project]/src/components/About.tsx",
                    lineNumber: 79,
                    columnNumber: 126
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/About.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$effect$2d$cube$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EffectCube$3e$__["EffectCube"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"]
        ];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    let t5;
    let t6;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94
        };
        t5 = {
            delay: 4000,
            disableOnInteraction: false
        };
        t6 = {
            clickable: true
        };
        $[5] = t4;
        $[6] = t5;
        $[7] = t6;
    } else {
        t4 = $[5];
        t5 = $[6];
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/arshad_about.jpg",
                        alt: "Arshad Pasha - About",
                        className: "w-full h-[500px] object-cover"
                    }, void 0, false, {
                        fileName: "[project]/src/components/About.tsx",
                        lineNumber: 118,
                        columnNumber: 55
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    }, void 0, false, {
                        fileName: "[project]/src/components/About.tsx",
                        lineNumber: 118,
                        columnNumber: 155
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/About.tsx",
                lineNumber: 118,
                columnNumber: 23
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/About.tsx",
            lineNumber: 118,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/arshad_sap_about.jpg",
                        alt: "Arshad Pasha - SAP",
                        className: "w-full h-[500px] object-cover"
                    }, void 0, false, {
                        fileName: "[project]/src/components/About.tsx",
                        lineNumber: 125,
                        columnNumber: 55
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    }, void 0, false, {
                        fileName: "[project]/src/components/About.tsx",
                        lineNumber: 125,
                        columnNumber: 157
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/About.tsx",
                lineNumber: 125,
                columnNumber: 23
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/About.tsx",
            lineNumber: 125,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
            modules: t3,
            effect: "cube",
            grabCursor: true,
            cubeEffect: t4,
            autoplay: t5,
            pagination: t6,
            navigation: true,
            loop: true,
            className: "rounded-2xl shadow-2xl overflow-hidden about-swiper",
            children: [
                t7,
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/arshad_infosys_about.jpg",
                                alt: "Arshad Pasha - Infosys",
                                className: "w-full h-[500px] object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/components/About.tsx",
                                lineNumber: 132,
                                columnNumber: 256
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            }, void 0, false, {
                                fileName: "[project]/src/components/About.tsx",
                                lineNumber: 132,
                                columnNumber: 366
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/About.tsx",
                        lineNumber: 132,
                        columnNumber: 224
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/About.tsx",
                    lineNumber: 132,
                    columnNumber: 211
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/About.tsx",
            lineNumber: 132,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                id: "aboutExperienceCirclePath",
                d: "M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            }, void 0, false, {
                fileName: "[project]/src/components/About.tsx",
                lineNumber: 139,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/About.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-full h-full animate-spin-slow",
            viewBox: "0 0 200 200",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    className: "text-[11px] sm:text-[13px] font-bold uppercase tracking-[0.15em]",
                    fill: "#000",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textPath", {
                        xlinkHref: "#aboutExperienceCirclePath",
                        startOffset: "0%",
                        children: "YEARS OF BEST AND SUCCESSFUL WORK EXPERIENCE •"
                    }, void 0, false, {
                        fileName: "[project]/src/components/About.tsx",
                        lineNumber: 146,
                        columnNumber: 182
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/About.tsx",
                    lineNumber: 146,
                    columnNumber: 87
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/About.tsx",
            lineNumber: 146,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative order-2 lg:order-1",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-[7%] -right-8 sm:-right-4 z-20 w-36 h-36 sm:w-48 sm:h-48",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full h-full bg-white rounded-full shadow-2xl border-[3px] border-black",
                        children: [
                            t11,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-5xl sm:text-6xl font-bold bg-clip-text text-transparent experience-number-bg",
                                    style: {
                                        backgroundImage: "url(/arshad_about.jpg)",
                                        backgroundSize: "150px 150px",
                                        backgroundPosition: "center",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        filter: "contrast(1.1) brightness(0.9)",
                                        fontFamily: "\"Times New Roman\", Times, serif"
                                    },
                                    children: "1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/About.tsx",
                                    lineNumber: 153,
                                    columnNumber: 321
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/About.tsx",
                                lineNumber: 153,
                                columnNumber: 254
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/About.tsx",
                        lineNumber: 153,
                        columnNumber: 150
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/About.tsx",
                    lineNumber: 153,
                    columnNumber: 60
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/About.tsx",
            lineNumber: 153,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl sm:text-3xl font-bold text-accent-secondary mb-4 sm:mb-6",
            children: "Professional Summary"
        }, void 0, false, {
            fileName: "[project]/src/components/About.tsx",
            lineNumber: 168,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-accent-primary font-semibold",
            children: "Front-end"
        }, void 0, false, {
            fileName: "[project]/src/components/About.tsx",
            lineNumber: 175,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-accent-primary font-semibold",
            children: "Back-end"
        }, void 0, false, {
            fileName: "[project]/src/components/About.tsx",
            lineNumber: 182,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    let t16;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-accent-secondary font-semibold",
            children: "10+ real-world projects"
        }, void 0, false, {
            fileName: "[project]/src/components/About.tsx",
            lineNumber: 189,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t16;
    } else {
        t16 = $[17];
    }
    let t17;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-green-500 font-semibold",
            children: "Google Cloud"
        }, void 0, false, {
            fileName: "[project]/src/components/About.tsx",
            lineNumber: 196,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    let t18;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-green-500 font-semibold",
            children: " Infosys Springboard"
        }, void 0, false, {
            fileName: "[project]/src/components/About.tsx",
            lineNumber: 203,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t18;
    } else {
        t18 = $[19];
    }
    let t19;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: summaryRef,
                    className: "bg-card-bg backdrop-blur-sm border border-card-border rounded-2xl p-6 sm:p-8 shadow-2xl transition-colors duration-300 order-1 lg:order-2 flex flex-col justify-center",
                    children: [
                        t13,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base sm:text-lg text-text-secondary leading-relaxed",
                            children: [
                                "Motivated Full Stack Web Developer with expertise in ",
                                t14,
                                " and ",
                                t15,
                                " development using ReactJS, NextJS, and MySQL, along with strong skills in Automation and cybersecurity. Experienced in delivering ",
                                t16,
                                ", including UiPath-powered RPA workflows, expert use of GitHub and GitLab for version control, and secure applications with Encryption and Ethical hacking practices. Certified in ",
                                t17,
                                ",",
                                t18,
                                ", and ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-green-500 font-semibold",
                                    children: "Oracle Cloud"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/About.tsx",
                                    lineNumber: 210,
                                    columnNumber: 765
                                }, ("TURBOPACK compile-time value", void 0)),
                                ", with practical exposure to Vertex AI, API integration, and data-driven solutions."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/About.tsx",
                            lineNumber: 210,
                            columnNumber: 293
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/About.tsx",
                    lineNumber: 210,
                    columnNumber: 87
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/About.tsx",
            lineNumber: 210,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t19;
    } else {
        t19 = $[20];
    }
    let t20;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 mb-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-blue-500 p-3 rounded-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-6 h-6 text-white",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        }, void 0, false, {
                            fileName: "[project]/src/components/About.tsx",
                            lineNumber: 217,
                            columnNumber: 191
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/About.tsx",
                        lineNumber: 217,
                        columnNumber: 101
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/About.tsx",
                    lineNumber: 217,
                    columnNumber: 57
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-bold text-gray-800 dark:text-white",
                    children: "Education"
                }, void 0, false, {
                    fileName: "[project]/src/components/About.tsx",
                    lineNumber: 217,
                    columnNumber: 519
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/About.tsx",
            lineNumber: 217,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t20;
    } else {
        t20 = $[21];
    }
    let t21;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "about-card bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-blue-500/50",
            children: [
                t20,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold text-blue-700 dark:text-blue-400",
                                    children: "BCA - 9.2 CGPA"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/About.tsx",
                                    lineNumber: 224,
                                    columnNumber: 269
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-800 dark:text-gray-300",
                                    children: "Seshadripuram Degree College"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/About.tsx",
                                    lineNumber: 224,
                                    columnNumber: 349
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-600 dark:text-gray-400",
                                    children: "2023 - 2026"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/About.tsx",
                                    lineNumber: 224,
                                    columnNumber: 437
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/About.tsx",
                            lineNumber: 224,
                            columnNumber: 264
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold text-blue-700 dark:text-blue-400",
                                    children: "PU - 81.50%"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/About.tsx",
                                    lineNumber: 224,
                                    columnNumber: 519
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-800 dark:text-gray-300",
                                    children: "St. Joseph's Composite PU College"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/About.tsx",
                                    lineNumber: 224,
                                    columnNumber: 596
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-600 dark:text-gray-400",
                                    children: "2021 - 2023"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/About.tsx",
                                    lineNumber: 224,
                                    columnNumber: 689
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/About.tsx",
                            lineNumber: 224,
                            columnNumber: 514
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/About.tsx",
                    lineNumber: 224,
                    columnNumber: 237
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/About.tsx",
            lineNumber: 224,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t21;
    } else {
        t21 = $[22];
    }
    let t22;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 mb-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-yellow-500 p-3 rounded-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-6 h-6 text-white",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        }, void 0, false, {
                            fileName: "[project]/src/components/About.tsx",
                            lineNumber: 231,
                            columnNumber: 193
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/About.tsx",
                        lineNumber: 231,
                        columnNumber: 103
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/About.tsx",
                    lineNumber: 231,
                    columnNumber: 57
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-bold text-gray-800 dark:text-white",
                    children: "Leadership"
                }, void 0, false, {
                    fileName: "[project]/src/components/About.tsx",
                    lineNumber: 231,
                    columnNumber: 383
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/About.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t22;
    } else {
        t22 = $[23];
    }
    let t23;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "flex items-start gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-yellow-600 dark:text-yellow-400 mt-1",
                    children: "★"
                }, void 0, false, {
                    fileName: "[project]/src/components/About.tsx",
                    lineNumber: 238,
                    columnNumber: 50
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-800 dark:text-gray-300",
                    children: "Education Vice-Captain – PU College"
                }, void 0, false, {
                    fileName: "[project]/src/components/About.tsx",
                    lineNumber: 238,
                    columnNumber: 118
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/About.tsx",
            lineNumber: 238,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t23;
    } else {
        t23 = $[24];
    }
    let t24;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "flex items-start gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-yellow-600 dark:text-yellow-400 mt-1",
                    children: "★"
                }, void 0, false, {
                    fileName: "[project]/src/components/About.tsx",
                    lineNumber: 245,
                    columnNumber: 50
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-800 dark:text-gray-300",
                    children: "Class Representative – Degree College"
                }, void 0, false, {
                    fileName: "[project]/src/components/About.tsx",
                    lineNumber: 245,
                    columnNumber: 118
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/About.tsx",
            lineNumber: 245,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t24;
    } else {
        t24 = $[25];
    }
    let t25;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "about-card bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-6 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-yellow-500/50",
            children: [
                t22,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-2 text-sm",
                    children: [
                        t23,
                        t24,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-start gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-yellow-600 dark:text-yellow-400 mt-1",
                                    children: "★"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/About.tsx",
                                    lineNumber: 252,
                                    columnNumber: 328
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-800 dark:text-gray-300",
                                    children: "Open-Source Contributor: SSOC"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/About.tsx",
                                    lineNumber: 252,
                                    columnNumber: 396
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/About.tsx",
                            lineNumber: 252,
                            columnNumber: 289
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/About.tsx",
                    lineNumber: 252,
                    columnNumber: 245
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/About.tsx",
            lineNumber: 252,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t25;
    } else {
        t25 = $[26];
    }
    let t26;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 mb-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-green-500 p-3 rounded-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-6 h-6 text-white",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        }, void 0, false, {
                            fileName: "[project]/src/components/About.tsx",
                            lineNumber: 259,
                            columnNumber: 192
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/About.tsx",
                        lineNumber: 259,
                        columnNumber: 102
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/About.tsx",
                    lineNumber: 259,
                    columnNumber: 57
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-bold text-gray-800 dark:text-white",
                    children: "Awards"
                }, void 0, false, {
                    fileName: "[project]/src/components/About.tsx",
                    lineNumber: 259,
                    columnNumber: 701
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/About.tsx",
            lineNumber: 259,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t26;
    } else {
        t26 = $[27];
    }
    let t27;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "flex items-start gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "mt-1",
                    children: "🏆"
                }, void 0, false, {
                    fileName: "[project]/src/components/About.tsx",
                    lineNumber: 266,
                    columnNumber: 50
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-800 dark:text-gray-300",
                    children: "1st Prize – Inter-College Website Development"
                }, void 0, false, {
                    fileName: "[project]/src/components/About.tsx",
                    lineNumber: 266,
                    columnNumber: 82
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/About.tsx",
            lineNumber: 266,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t27;
    } else {
        t27 = $[28];
    }
    let t28;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "flex items-start gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "mt-1",
                    children: "🏆"
                }, void 0, false, {
                    fileName: "[project]/src/components/About.tsx",
                    lineNumber: 273,
                    columnNumber: 50
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-gray-800 dark:text-gray-300",
                    children: "2nd Prize – PU Level Web Development"
                }, void 0, false, {
                    fileName: "[project]/src/components/About.tsx",
                    lineNumber: 273,
                    columnNumber: 82
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/About.tsx",
            lineNumber: 273,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t28;
    } else {
        t28 = $[29];
    }
    let t29;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            ref: sectionRef,
            id: "about",
            className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-gradient-start via-bg-secondary to-gradient-end py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto w-full",
                children: [
                    t2,
                    t19,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: cardsRef,
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                        children: [
                            t21,
                            t25,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "about-card bg-gradient-to-br from-green-600/20 to-green-800/20 backdrop-blur-sm border border-green-500/30 rounded-xl p-6 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-green-500/50",
                                children: [
                                    t26,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2 text-sm",
                                        children: [
                                            t27,
                                            t28,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mt-1",
                                                        children: "🏆"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 679
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-800 dark:text-gray-300",
                                                        children: "Infosys Global Hackathon Participant"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 711
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/About.tsx",
                                                lineNumber: 280,
                                                columnNumber: 640
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/About.tsx",
                                        lineNumber: 280,
                                        columnNumber: 596
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/About.tsx",
                                lineNumber: 280,
                                columnNumber: 366
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/About.tsx",
                        lineNumber: 280,
                        columnNumber: 286
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/About.tsx",
                lineNumber: 280,
                columnNumber: 235
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/About.tsx",
            lineNumber: 280,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = t29;
    } else {
        t29 = $[30];
    }
    return t29;
};
_s(About, "jgb4flQAu1/UJeTnZRBCO2v8hbg=");
_c = About;
const __TURBOPACK__default__export__ = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Skills.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
// Tech icons with their image URLs (using devicons CDN)
const techIcons = [
    {
        name: 'TypeScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
    },
    {
        name: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
        name: 'React',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
        name: 'Next.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
    },
    {
        name: 'Python',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    {
        name: 'Node.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    {
        name: 'HTML5',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    {
        name: 'CSS3',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    {
        name: 'Git',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    {
        name: 'GitHub',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
    },
    {
        name: 'Docker',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
    },
    {
        name: 'MySQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },
    {
        name: 'PostgreSQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
    },
    {
        name: 'Firebase',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
    },
    {
        name: 'TailwindCSS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
    },
    {
        name: 'Flutter',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg'
    },
    {
        name: 'Java',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    },
    {
        name: 'C++',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
    },
    {
        name: 'Linux',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg'
    },
    {
        name: 'AWS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
    },
    {
        name: 'GitLab',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg'
    },
    {
        name: 'Figma',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
    },
    {
        name: 'VSCode',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
    },
    {
        name: 'Android',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg'
    }
];
const Skills = ()=>{
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sphereRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isHovering, setIsHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const rotationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const targetRotationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const velocityRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 10,
        y: 15
    }); // Base auto-rotation velocity
    // Fix hydration - only render sphere on client
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Skills.useEffect": ()=>{
            setIsMounted(true);
        }
    }["Skills.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Skills.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "Skills.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from(titleRef.current, {
                        scrollTrigger: {
                            trigger: titleRef.current,
                            start: 'top 80%'
                        },
                        opacity: 0,
                        y: 50,
                        duration: 1,
                        ease: 'power3.out'
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from(contentRef.current, {
                        scrollTrigger: {
                            trigger: contentRef.current,
                            start: 'top 80%'
                        },
                        opacity: 0,
                        x: -50,
                        duration: 1,
                        delay: 0.3,
                        ease: 'power3.out'
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].from(sphereRef.current, {
                        scrollTrigger: {
                            trigger: sphereRef.current,
                            start: 'top 80%'
                        },
                        opacity: 0,
                        scale: 0.5,
                        duration: 1,
                        delay: 0.5,
                        ease: 'power3.out'
                    });
                }
            }["Skills.useEffect.ctx"], sectionRef);
            return ({
                "Skills.useEffect": ()=>ctx.revert()
            })["Skills.useEffect"];
        }
    }["Skills.useEffect"], []);
    // Smooth animation loop
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Skills.useEffect": ()=>{
            if (!isMounted) return;
            let lastTime = Date.now();
            const animate = {
                "Skills.useEffect.animate": ()=>{
                    const currentTime = Date.now();
                    const deltaTime = (currentTime - lastTime) / 1000;
                    lastTime = currentTime;
                    if (isHovering) {
                        // Smooth interpolation towards target rotation when hovering
                        const smoothFactor = 0.08; // Lower = smoother
                        rotationRef.current.x += (targetRotationRef.current.x - rotationRef.current.x) * smoothFactor;
                        rotationRef.current.y += (targetRotationRef.current.y - rotationRef.current.y) * smoothFactor;
                    } else {
                        // Auto-rotate with smooth velocity
                        rotationRef.current.x += velocityRef.current.x * deltaTime;
                        rotationRef.current.y += velocityRef.current.y * deltaTime;
                    }
                    animationRef.current = requestAnimationFrame(animate);
                }
            }["Skills.useEffect.animate"];
            animationRef.current = requestAnimationFrame(animate);
            return ({
                "Skills.useEffect": ()=>{
                    if (animationRef.current) {
                        cancelAnimationFrame(animationRef.current);
                    }
                }
            })["Skills.useEffect"];
        }
    }["Skills.useEffect"], [
        isHovering,
        isMounted
    ]);
    const handleMouseMove = (e)=>{
        if (!sphereRef.current) return;
        const rect = sphereRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        // Normalized mouse position (-1 to 1)
        const x = (e.clientX - centerX) / (rect.width / 2);
        const y = (e.clientY - centerY) / (rect.height / 2);
        // Set target rotation based on mouse position
        // Moving right increases Y rotation (rotates right)
        // Moving down increases X rotation (rotates down)
        const sensitivity = 50;
        targetRotationRef.current.y = rotationRef.current.y + x * sensitivity;
        targetRotationRef.current.x = rotationRef.current.x + y * sensitivity;
    };
    const handleMouseLeave = ()=>{
        setIsHovering(false);
        // Smoothly continue from current rotation
        targetRotationRef.current = {
            ...rotationRef.current
        };
    };
    // Calculate 3D position for each icon on the sphere
    const getIconPosition = (index, total)=>{
        const phi = Math.acos(-1 + 2 * index / total);
        const theta = Math.sqrt(total * Math.PI) * phi;
        const baseX = Math.cos(theta) * Math.sin(phi);
        const baseY = Math.sin(theta) * Math.sin(phi);
        const baseZ = Math.cos(phi);
        // Apply rotation
        const rotX = rotationRef.current.x * (Math.PI / 180);
        const rotY = rotationRef.current.y * (Math.PI / 180);
        // Rotate around Y axis
        const x1 = baseX * Math.cos(rotY) - baseZ * Math.sin(rotY);
        const z1 = baseX * Math.sin(rotY) + baseZ * Math.cos(rotY);
        // Rotate around X axis
        const y2 = baseY * Math.cos(rotX) - z1 * Math.sin(rotX);
        const z2 = baseY * Math.sin(rotX) + z1 * Math.cos(rotX);
        const radius = 180;
        const scale = (z2 + 1.5) / 2.5;
        const opacity = Math.max(0.3, (z2 + 1) / 2);
        return {
            x: Number(x1 * radius).toFixed(2),
            y: Number(y2 * radius).toFixed(2),
            z: z2,
            scale: Number(scale).toFixed(4),
            opacity: Number(opacity).toFixed(2)
        };
    };
    const [, setTick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Skills.useEffect": ()=>{
            if (!isMounted) return;
            const interval = setInterval({
                "Skills.useEffect.interval": ()=>{
                    setTick({
                        "Skills.useEffect.interval": (t)=>t + 1
                    }["Skills.useEffect.interval"]);
                }
            }["Skills.useEffect.interval"], 50);
            return ({
                "Skills.useEffect": ()=>clearInterval(interval)
            })["Skills.useEffect"];
        }
    }["Skills.useEffect"], [
        isMounted
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "skills",
        className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-gradient-start via-bg-secondary to-gradient-end py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    ref: titleRef,
                    className: "text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary mb-16 text-center",
                    children: [
                        "Technical ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-accent-secondary",
                            children: "Skills"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Skills.tsx",
                            lineNumber: 238,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Skills.tsx",
                    lineNumber: 237,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: contentRef,
                            className: "space-y-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-accent-primary font-semibold text-lg uppercase tracking-wider",
                                            children: "Services"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Skills.tsx",
                                            lineNumber: 245,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight",
                                            children: [
                                                "I offer a Full-cycle of ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-accent-secondary",
                                                    children: "Web Development"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Skills.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " Services"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Skills.tsx",
                                            lineNumber: 246,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 dark:text-gray-300 text-lg leading-relaxed",
                                            children: [
                                                "With more than ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-accent-primary font-semibold",
                                                    children: "1+ years"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Skills.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 32
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " of experience, I have been accomplishing projects with modern Web Development, new generation programming languages, and Full Stack development to deliver cost-effective solutions."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Skills.tsx",
                                            lineNumber: 249,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Skills.tsx",
                                    lineNumber: 244,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-card-bg backdrop-blur-sm border border-card-border rounded-xl p-5 hover:scale-105 transition-all duration-300 group shadow-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-gradient-to-br from-blue-500 to-blue-700 p-2.5 rounded-lg group-hover:scale-110 transition-transform shadow-md",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                                                                alt: "Full Stack",
                                                                className: "w-7 h-7"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Skills.tsx",
                                                                lineNumber: 261,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Skills.tsx",
                                                            lineNumber: 260,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-bold text-gray-900 dark:text-white",
                                                            children: "Full Stack Development"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Skills.tsx",
                                                            lineNumber: 263,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Skills.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 dark:text-gray-400 text-sm",
                                                    children: "End-to-end web applications with React, Next.js, and Node.js"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Skills.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Skills.tsx",
                                            lineNumber: 258,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-card-bg backdrop-blur-sm border border-card-border rounded-xl p-5 hover:scale-105 transition-all duration-300 group shadow-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-gradient-to-br from-green-500 to-green-700 p-2.5 rounded-lg group-hover:scale-110 transition-transform shadow-md",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
                                                                alt: "UI/UX",
                                                                className: "w-7 h-7"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Skills.tsx",
                                                                lineNumber: 271,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Skills.tsx",
                                                            lineNumber: 270,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-bold text-gray-900 dark:text-white",
                                                            children: "UI/UX Design"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Skills.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Skills.tsx",
                                                    lineNumber: 269,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 dark:text-gray-400 text-sm",
                                                    children: "Beautiful, responsive interfaces with modern design principles"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Skills.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Skills.tsx",
                                            lineNumber: 268,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-card-bg backdrop-blur-sm border border-card-border rounded-xl p-5 hover:scale-105 transition-all duration-300 group shadow-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-gradient-to-br from-purple-500 to-purple-700 p-2.5 rounded-lg group-hover:scale-110 transition-transform shadow-md",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
                                                                alt: "AI/ML",
                                                                className: "w-7 h-7"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Skills.tsx",
                                                                lineNumber: 281,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Skills.tsx",
                                                            lineNumber: 280,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-bold text-gray-900 dark:text-white",
                                                            children: "AI/ML Integration"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Skills.tsx",
                                                            lineNumber: 283,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Skills.tsx",
                                                    lineNumber: 279,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 dark:text-gray-400 text-sm",
                                                    children: "Integrating AI APIs and ML models into applications"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Skills.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Skills.tsx",
                                            lineNumber: 278,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-card-bg backdrop-blur-sm border border-card-border rounded-xl p-5 hover:scale-105 transition-all duration-300 group shadow-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-gradient-to-br from-orange-500 to-orange-700 p-2.5 rounded-lg group-hover:scale-110 transition-transform shadow-md",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
                                                                alt: "Cybersecurity",
                                                                className: "w-7 h-7"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Skills.tsx",
                                                                lineNumber: 291,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Skills.tsx",
                                                            lineNumber: 290,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-bold text-gray-900 dark:text-white",
                                                            children: "Cybersecurity"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Skills.tsx",
                                                            lineNumber: 293,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Skills.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 dark:text-gray-400 text-sm",
                                                    children: "Secure applications with encryption and ethical hacking practices"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Skills.tsx",
                                                    lineNumber: 295,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Skills.tsx",
                                            lineNumber: 288,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Skills.tsx",
                                    lineNumber: 257,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Skills.tsx",
                            lineNumber: 243,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: sphereRef,
                            className: "relative w-full h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing",
                            onMouseMove: handleMouseMove,
                            onMouseEnter: ()=>setIsHovering(true),
                            onMouseLeave: handleMouseLeave,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-80 h-80 bg-accent-primary/10 rounded-full blur-3xl animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Skills.tsx",
                                        lineNumber: 304,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Skills.tsx",
                                    lineNumber: 303,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-[400px] h-[400px]",
                                    children: isMounted && techIcons.map((tech, index_0)=>{
                                        const pos = getIconPosition(index_0, techIcons.length);
                                        // Calculate how far back the icon is (0 = front, 1 = back)
                                        const backAmount = (1 - pos.z) / 2;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            title: tech.name,
                                            className: "absolute pointer-events-none",
                                            style: {
                                                left: `calc(50% + ${pos.x}px)`,
                                                top: `calc(50% + ${pos.y}px)`,
                                                transform: `translate(-50%, -50%) scale(${pos.scale})`,
                                                opacity: pos.opacity,
                                                zIndex: Math.round((pos.z + 1) * 10)
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: tech.icon,
                                                alt: tech.name,
                                                className: "w-12 h-12 sm:w-14 sm:h-14 drop-shadow-lg",
                                                style: {
                                                    filter: pos.z < 0 ? `grayscale(${0.3 + backAmount * 0.5}) brightness(${1 - backAmount * 0.3}) opacity(${0.7 - backAmount * 0.2})` : 'none'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Skills.tsx",
                                                lineNumber: 320,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, tech.name, false, {
                                            fileName: "[project]/src/components/Skills.tsx",
                                            lineNumber: 313,
                                            columnNumber: 22
                                        }, ("TURBOPACK compile-time value", void 0));
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Skills.tsx",
                                    lineNumber: 308,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Skills.tsx",
                            lineNumber: 301,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Skills.tsx",
                    lineNumber: 241,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Skills.tsx",
            lineNumber: 236,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Skills.tsx",
        lineNumber: 235,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Skills, "rRDP7D1ehedbJ7jOOvLuK8lru1I=");
_c = Skills;
const __TURBOPACK__default__export__ = Skills;
var _c;
__turbopack_context__.k.register(_c, "Skills");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Projects.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const Projects = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(55);
    if ($[0] !== "68b15696191ce402a0e483ee5a5df0ae1da6e2ca1585e70e2da15ad90fe39689") {
        for(let $i = 0; $i < 55; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "68b15696191ce402a0e483ee5a5df0ae1da6e2ca1585e70e2da15ad90fe39689";
    }
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [showAll, setShowAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedProject, setSelectedProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let categories;
    let closeModal;
    let displayedProjects;
    let filteredProjects;
    let openModal;
    let t0;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    if ($[1] !== activeCategory || $[2] !== showAll) {
        categories = [
            {
                key: "all",
                label: "All Projects",
                icon: "\uD83C\uDFAF"
            },
            {
                key: "web-development",
                label: "Web Development",
                icon: "\uD83C\uDF10"
            },
            {
                key: "ai-ml",
                label: "AI & ML",
                icon: "\uD83E\uDD16"
            },
            {
                key: "automation",
                label: "Automation",
                icon: "\u2699\uFE0F"
            },
            {
                key: "cybersecurity",
                label: "Cybersecurity",
                icon: "\uD83D\uDD10"
            },
            {
                key: "birthday-gifts",
                label: "Birthday Gifts",
                icon: "\uD83C\uDF82"
            },
            {
                key: "hackathons",
                label: "Hackathons",
                icon: "\uD83C\uDFC6"
            }
        ];
        let t7;
        if ($[15] !== activeCategory) {
            const projects = [
                {
                    title: "PUC College Website",
                    description: "This is the first website of my PU college, created in the year 2021\u201322.",
                    image: "/assets/img/arshad786.42web.io.png",
                    link: "https://arshadpuc.netlify.app/",
                    category: [
                        "web-development"
                    ]
                },
                {
                    title: "My Personal Website",
                    description: "Personal website to store personal files, created in 2022.",
                    image: "/assets/img/arshad65.42web.io.png",
                    link: "https://arshadold.netlify.app/",
                    category: [
                        "web-development"
                    ]
                },
                {
                    title: "Degree College Website V2",
                    description: "The 2nd website of my Seshadripuram Degree college, created in 2023.",
                    image: "/assets/img/sdcvo.png",
                    link: "https://sdcarshad.netlify.app/",
                    category: [
                        "web-development"
                    ]
                },
                {
                    title: "Our Rashmi Mam",
                    description: "First client website for practicing, created in 2024.",
                    image: "/assets/img/rashami.png",
                    link: "https://rashmiweb.netlify.app/",
                    category: [
                        "web-development"
                    ]
                },
                {
                    title: "Rashmi Mam V2 - Professional",
                    description: "Fully Professional, Responsive Website with Kannada Language Support.",
                    image: "/assets/img/rashmi-newv2.png",
                    link: "https://rashmik.netlify.app/",
                    category: [
                        "web-development"
                    ]
                },
                {
                    title: "My Friend Website",
                    description: "First website gifted as a Birthday Gift on 06/03/2024.",
                    image: "/assets/img/tfweb.png",
                    link: "https://tauqeerweb.netlify.app/",
                    category: [
                        "web-development",
                        "birthday-gifts"
                    ]
                },
                {
                    title: "Khazi Friend Website",
                    description: "Created on 03/07/2024.",
                    image: "/assets/img/khazi.png",
                    link: "https://khazi.netlify.app/",
                    category: [
                        "web-development",
                        "birthday-gifts"
                    ]
                },
                {
                    title: "Project 0 - Library Management",
                    description: "Library management system project.",
                    image: "/assets/img/project0.png",
                    link: "https://project0lms.netlify.app/",
                    category: [
                        "web-development"
                    ]
                },
                {
                    title: "Our Masjid Website",
                    description: "Community masjid website.",
                    image: "/assets/img/masjid.png",
                    link: "https://arshadupcoming.netlify.app/",
                    category: [
                        "web-development"
                    ]
                },
                {
                    title: "Sandhya Birthday Gift",
                    description: "Birthday gift website for Library Mam on 21/9/24.",
                    image: "/assets/img/httpssandhyaachari.netlify.app.png",
                    link: "https://sandhyaachari.netlify.app/",
                    category: [
                        "web-development",
                        "birthday-gifts"
                    ]
                },
                {
                    title: "1st Professional Website",
                    description: "First professional client website.",
                    image: "/assets/img/bharathi_mam_vap.png",
                    link: "https://bharathishankar.netlify.app/",
                    category: [
                        "web-development"
                    ]
                },
                {
                    title: "Full Animated Website",
                    description: "Fully animated website created on 20/1/25.",
                    image: "/assets/img/p1.png",
                    link: "https://65project1.netlify.app/",
                    category: [
                        "web-development"
                    ]
                },
                {
                    title: "Advanced TODO List App",
                    description: "Advanced TODO app with localStorage on 29/6/25.",
                    image: "/assets/img/todo.png",
                    link: "https://arshadtodoapp.netlify.app/",
                    category: [
                        "web-development"
                    ]
                },
                {
                    title: "QR Code Generator",
                    description: "QR Code generator with URL and Text on 5/06/25.",
                    image: "/assets/img/qrcode.png",
                    link: "https://qr-code-website.onrender.com/",
                    category: [
                        "web-development"
                    ]
                },
                {
                    title: "Happy Birthday Gift Website",
                    description: "Birthday gift website for Lohit Sir.",
                    image: "/assets/img/happy_website1.png",
                    link: "https://lohitsir.netlify.app/",
                    category: [
                        "web-development",
                        "birthday-gifts"
                    ]
                },
                {
                    title: "UI/UX to React Coding",
                    description: "Converting UI/UX design to ReactJS code.",
                    image: "/assets/img/Uiuxtocode.png",
                    link: "https://ui-ux-degiin-to-codeing-5xa80ovk3.vercel.app/",
                    category: [
                        "web-development"
                    ]
                },
                {
                    title: "Next.js TODO App",
                    description: "TODO app built with ReactJS and Next.js.",
                    image: "/assets/img/todolistnextjs.png",
                    link: "https://todo-app-with-react-js-and-next-js-chi.vercel.app/",
                    category: [
                        "web-development"
                    ]
                },
                {
                    title: "Company Website Redesign",
                    description: "Redesigned company website on 31/08/2025.",
                    image: "/assets/img/rahul-class-Redigsied-Real_website.png",
                    link: "https://rahulsir-redesign-by-arshad.netlify.app/",
                    category: [
                        "web-development"
                    ]
                },
                {
                    title: "Think41 E-Commerce",
                    description: "E-Commerce website created for interview project.",
                    image: "/assets/img/think41-e.png",
                    link: "https://think41-e-commerce.netlify.app/",
                    category: [
                        "web-development"
                    ]
                },
                {
                    title: "My First Game",
                    description: "First game created using Next.js.",
                    image: "/assets/img/first-game.png",
                    link: "https://first-game-arshad-euge94wgj-arshad-pashas-projects-d7ff6964.vercel.app/",
                    category: [
                        "web-development"
                    ]
                },
                {
                    title: "Digital Art Sample Website",
                    description: "Sample digital art website with WhatsApp integration.",
                    image: "/assets/img/digital-art.png",
                    link: "https://sample-digital-art.netlify.app/",
                    category: [
                        "web-development"
                    ]
                },
                {
                    title: "Myntra Clone",
                    description: "Myntra clone using JavaScript on 6/9/2025.",
                    image: "/assets/img/myntra-clone.png",
                    link: "https://arshad-project11.netlify.app/",
                    category: [
                        "web-development"
                    ]
                },
                {
                    title: "Criminal Identification System",
                    description: "Criminal identification system using Python on 03/07/2024.",
                    video: "https://www.youtube.com/embed/0lMsasNGoFA?si=6MN3SDWZu9Xyq1TM",
                    isVideo: true,
                    category: [
                        "ai-ml"
                    ]
                },
                {
                    title: "Library Management System",
                    description: "Library management system project on 10/06/2025.",
                    video: "https://www.youtube.com/embed/ULIltpxyJu0?si=ctn2WwGBxJP5Nmvo",
                    isVideo: true,
                    category: [
                        "ai-ml",
                        "automation"
                    ]
                },
                {
                    title: "ElementMix - Chemical Simulator",
                    description: "Chemical reaction simulator ISRO project on 3/06/25.",
                    image: "/assets/img/elementmix.png",
                    link: "https://elementmix-isro-project.onrender.com",
                    category: [
                        "ai-ml"
                    ]
                },
                {
                    title: "Image to Text Website",
                    description: "OCR-based image to text converter.",
                    image: "/assets/img/project10.png",
                    link: "https://youtu.be/C-tSQfC5huw?si=loKCZs04CWpDi8z5",
                    category: [
                        "ai-ml"
                    ]
                },
                {
                    title: "Pro 7 Automation Bot",
                    description: "Automation bot built in 2024.",
                    video: "https://www.youtube.com/embed/0J1fgZZZkXE?si=96MBmtZSkl6K9C7B",
                    isVideo: true,
                    category: [
                        "automation"
                    ]
                },
                {
                    title: "Auto Excel Mail Project",
                    description: "Automated Excel email project in 2024.",
                    video: "https://www.youtube.com/embed/6-Sw3ylBdmo?si=oeuwNzhr8xH7vOvX",
                    isVideo: true,
                    category: [
                        "automation"
                    ]
                },
                {
                    title: "Word Auto PDF Project",
                    description: "Automated Word to PDF conversion in 2024.",
                    video: "https://www.youtube.com/embed/SmrUFrmVXxo?si=mGnPHkdeSd0wjeK4",
                    isVideo: true,
                    category: [
                        "automation"
                    ]
                },
                {
                    title: "ChatGPT Book Creator",
                    description: "Making book using ChatGPT in 2024.",
                    video: "https://www.youtube.com/embed/RRLkaKEX_sc?si=Qt7FuZ7l_1AeMbXV",
                    isVideo: true,
                    category: [
                        "automation",
                        "ai-ml"
                    ]
                },
                {
                    title: "Data Entry UiPath Project",
                    description: "Advanced automation project with UiPath 2024/2025.",
                    video: "https://www.youtube.com/embed/MiwuCoPdHPU?si=FCmnvBhWaOC6flsJ",
                    isVideo: true,
                    category: [
                        "automation"
                    ]
                },
                {
                    title: "KIOSK OS Library System",
                    description: "Real-time working system in college - 2025.",
                    video: "https://www.youtube.com/embed/ztMWIy6vX5k?si=ty4XuA4NLNhwNfVr",
                    isVideo: true,
                    category: [
                        "automation"
                    ]
                },
                {
                    title: "Chrome Extension",
                    description: "Custom Chrome extension project.",
                    image: "/assets/img/project9new.png",
                    link: "https://youtu.be/rNEbBEcnUtc?si=aT-Yzc_W2FbsVRoC",
                    category: [
                        "automation"
                    ]
                },
                {
                    title: "Encrypt Decrypt Project",
                    description: "Encryption/Decryption cybersecurity project on 23/06/2025.",
                    image: "/assets/img/project5.png",
                    link: "https://project-5-encrypt-decrypt-project-w9hq.onrender.com/",
                    category: [
                        "cybersecurity"
                    ]
                },
                {
                    title: "Total Wellness Hackathon",
                    description: "First competition website at Hindustan College, Mysore on 22/03/2024.",
                    image: "/assets/img/totalwellness.netlify.app.png",
                    link: "https://totalwellness.netlify.app/",
                    category: [
                        "hackathons",
                        "web-development"
                    ]
                },
                {
                    title: "Infosys Smart Recycling",
                    description: "Smart recycling solution at Infosys 48-hour hackathon on 11-12 July 2025.",
                    image: "/assets/img/infosys_hackthon.png",
                    link: "https://smart-recyle.netlify.app/",
                    category: [
                        "hackathons",
                        "web-development"
                    ]
                }
            ];
            bb0: {
                if (activeCategory === "all") {
                    t7 = projects;
                    break bb0;
                }
                t7 = projects.filter((project)=>project.category.includes(activeCategory));
            }
            $[15] = activeCategory;
            $[16] = t7;
        } else {
            t7 = $[16];
        }
        filteredProjects = t7;
        let t8;
        if ($[17] !== filteredProjects || $[18] !== showAll) {
            t8 = showAll ? filteredProjects : filteredProjects.slice(0, 6);
            $[17] = filteredProjects;
            $[18] = showAll;
            $[19] = t8;
        } else {
            t8 = $[19];
        }
        displayedProjects = t8;
        let t9;
        if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = (project_0)=>{
                setSelectedProject(project_0);
            };
            $[20] = t9;
        } else {
            t9 = $[20];
        }
        openModal = t9;
        let t10;
        if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
            t10 = ()=>{
                setSelectedProject(null);
            };
            $[21] = t10;
        } else {
            t10 = $[21];
        }
        closeModal = t10;
        t5 = "projects";
        t6 = "min-h-screen bg-gradient-to-br from-gradient-start via-bg-secondary to-gradient-end py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300";
        t3 = "max-w-7xl mx-auto w-full";
        if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-8 sm:mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-accent-secondary",
                                children: "Featured"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Projects.tsx",
                                lineNumber: 335,
                                columnNumber: 137
                            }, ("TURBOPACK compile-time value", void 0)),
                            " Projects"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Projects.tsx",
                        lineNumber: 335,
                        columnNumber: 55
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-text-secondary text-base sm:text-lg max-w-2xl mx-auto",
                        children: "Explore my collection of projects across various domains including web development, AI/ML, automation, and more."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Projects.tsx",
                        lineNumber: 335,
                        columnNumber: 206
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Projects.tsx",
                lineNumber: 335,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[22] = t4;
        } else {
            t4 = $[22];
        }
        t2 = "mb-8 sm:mb-10";
        t0 = "flex flex-wrap justify-center gap-2 sm:gap-3";
        t1 = categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>{
                    setActiveCategory(cat.key);
                    setShowAll(false);
                },
                className: `
                  flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium
                  transition-all duration-300 border
                  ${activeCategory === cat.key ? "bg-accent-primary text-white border-accent-primary shadow-lg shadow-accent-primary/30 scale-105" : "bg-card-bg text-text-secondary border-card-border hover:bg-card-bg-hover hover:text-text-primary hover:border-accent-primary/50"}
                `,
                suppressHydrationWarning: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: cat.icon
                    }, void 0, false, {
                        fileName: "[project]/src/components/Projects.tsx",
                        lineNumber: 349,
                        columnNumber: 52
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hidden sm:inline",
                        children: cat.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/Projects.tsx",
                        lineNumber: 349,
                        columnNumber: 75
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sm:hidden",
                        children: cat.label.split(" ")[0]
                    }, void 0, false, {
                        fileName: "[project]/src/components/Projects.tsx",
                        lineNumber: 349,
                        columnNumber: 128
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, cat.key, true, {
                fileName: "[project]/src/components/Projects.tsx",
                lineNumber: 342,
                columnNumber: 32
            }, ("TURBOPACK compile-time value", void 0)));
        $[1] = activeCategory;
        $[2] = showAll;
        $[3] = categories;
        $[4] = closeModal;
        $[5] = displayedProjects;
        $[6] = filteredProjects;
        $[7] = openModal;
        $[8] = t0;
        $[9] = t1;
        $[10] = t2;
        $[11] = t3;
        $[12] = t4;
        $[13] = t5;
        $[14] = t6;
    } else {
        categories = $[3];
        closeModal = $[4];
        displayedProjects = $[5];
        filteredProjects = $[6];
        openModal = $[7];
        t0 = $[8];
        t1 = $[9];
        t2 = $[10];
        t3 = $[11];
        t4 = $[12];
        t5 = $[13];
        t6 = $[14];
    }
    let t7;
    if ($[23] !== t0 || $[24] !== t1) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t0,
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/components/Projects.tsx",
            lineNumber: 380,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t0;
        $[24] = t1;
        $[25] = t7;
    } else {
        t7 = $[25];
    }
    let t8;
    if ($[26] !== displayedProjects.length || $[27] !== filteredProjects.length) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-text-tertiary text-sm",
                children: [
                    "Showing ",
                    displayedProjects.length,
                    " of ",
                    filteredProjects.length,
                    " projects"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Projects.tsx",
                lineNumber: 389,
                columnNumber: 44
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Projects.tsx",
            lineNumber: 389,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = displayedProjects.length;
        $[27] = filteredProjects.length;
        $[28] = t8;
    } else {
        t8 = $[28];
    }
    let t9;
    if ($[29] !== t2 || $[30] !== t7 || $[31] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: [
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Projects.tsx",
            lineNumber: 398,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t2;
        $[30] = t7;
        $[31] = t8;
        $[32] = t9;
    } else {
        t9 = $[32];
    }
    let t10;
    if ($[33] !== categories || $[34] !== displayedProjects || $[35] !== openModal) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8",
            children: displayedProjects.map((project_1, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "group bg-card-bg backdrop-blur-sm border border-card-border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-accent-primary/10 transition-all duration-500 hover:-translate-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-48 sm:h-52 overflow-hidden",
                            children: [
                                project_1.isVideo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                        width: "100%",
                                        height: "100%",
                                        src: project_1.video,
                                        title: project_1.title,
                                        frameBorder: "0",
                                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                        allowFullScreen: true,
                                        className: "object-cover",
                                        loading: "lazy"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Projects.tsx",
                                        lineNumber: 408,
                                        columnNumber: 475
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Projects.tsx",
                                    lineNumber: 408,
                                    columnNumber: 444
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: project_1.image,
                                            alt: project_1.title,
                                            fill: true,
                                            sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
                                            className: "object-cover transition-transform duration-500 group-hover:scale-110",
                                            loading: "lazy"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Projects.tsx",
                                            lineNumber: 408,
                                            columnNumber: 745
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Projects.tsx",
                                            lineNumber: 408,
                                            columnNumber: 971
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>openModal(project_1),
                                                        className: "bg-accent-primary hover:bg-accent-hover text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg",
                                                        suppressHydrationWarning: true,
                                                        children: "View Details"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Projects.tsx",
                                                        lineNumber: 408,
                                                        columnNumber: 1289
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    project_1.link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: project_1.link,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "bg-accent-secondary hover:bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg",
                                                        children: "Live Demo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Projects.tsx",
                                                        lineNumber: 408,
                                                        columnNumber: 1576
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Projects.tsx",
                                                lineNumber: 408,
                                                columnNumber: 1261
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Projects.tsx",
                                            lineNumber: 408,
                                            columnNumber: 1132
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-3 left-3 flex flex-wrap gap-1",
                                    children: project_1.category.slice(0, 2).map((cat_0, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full",
                                            children: categories.find((c)=>c.key === cat_0)?.icon
                                        }, i, false, {
                                            fileName: "[project]/src/components/Projects.tsx",
                                            lineNumber: 408,
                                            columnNumber: 1953
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Projects.tsx",
                                    lineNumber: 408,
                                    columnNumber: 1843
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Projects.tsx",
                            lineNumber: 408,
                            columnNumber: 368
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg sm:text-xl font-bold text-text-primary mb-2 group-hover:text-accent-primary transition-colors line-clamp-1",
                                    children: project_1.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Projects.tsx",
                                    lineNumber: 408,
                                    columnNumber: 2144
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-text-secondary text-sm line-clamp-2 mb-4",
                                    children: project_1.description || "An exciting project showcasing creative development skills."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Projects.tsx",
                                    lineNumber: 408,
                                    columnNumber: 2297
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>openModal(project_1),
                                            className: "flex-1 text-accent-primary hover:text-accent-hover font-medium text-sm flex items-center justify-center gap-2 py-2 border border-accent-primary/30 rounded-lg hover:bg-accent-primary/10 transition-all duration-300",
                                            suppressHydrationWarning: true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Projects.tsx",
                                                            lineNumber: 408,
                                                            columnNumber: 2859
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Projects.tsx",
                                                            lineNumber: 408,
                                                            columnNumber: 2965
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Projects.tsx",
                                                    lineNumber: 408,
                                                    columnNumber: 2780
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "View"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Projects.tsx",
                                            lineNumber: 408,
                                            columnNumber: 2478
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        project_1.link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: project_1.link,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "flex-1 bg-accent-primary hover:bg-accent-hover text-white font-medium text-sm flex items-center justify-center gap-2 py-2 rounded-lg transition-all duration-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Projects.tsx",
                                                        lineNumber: 408,
                                                        columnNumber: 3515
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Projects.tsx",
                                                    lineNumber: 408,
                                                    columnNumber: 3436
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Visit"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Projects.tsx",
                                            lineNumber: 408,
                                            columnNumber: 3196
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Projects.tsx",
                                    lineNumber: 408,
                                    columnNumber: 2450
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Projects.tsx",
                            lineNumber: 408,
                            columnNumber: 2116
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, index, true, {
                    fileName: "[project]/src/components/Projects.tsx",
                    lineNumber: 408,
                    columnNumber: 144
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/src/components/Projects.tsx",
            lineNumber: 408,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[33] = categories;
        $[34] = displayedProjects;
        $[35] = openModal;
        $[36] = t10;
    } else {
        t10 = $[36];
    }
    let t11;
    if ($[37] !== filteredProjects.length || $[38] !== showAll) {
        t11 = filteredProjects.length > 6 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mt-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setShowAll(!showAll),
                className: "group inline-flex items-center gap-3 bg-gradient-to-r from-accent-primary to-accent-hover hover:from-accent-hover hover:to-accent-primary text-white px-8 py-3.5 rounded-full font-semibold text-base shadow-lg shadow-accent-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent-primary/40",
                suppressHydrationWarning: true,
                children: showAll ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Show Less"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Projects.tsx",
                            lineNumber: 418,
                            columnNumber: 503
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-5 h-5 transition-transform group-hover:-translate-y-1",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M5 15l7-7 7 7"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Projects.tsx",
                                lineNumber: 418,
                                columnNumber: 652
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Projects.tsx",
                            lineNumber: 418,
                            columnNumber: 525
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "View All ",
                                filteredProjects.length,
                                " Projects"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Projects.tsx",
                            lineNumber: 418,
                            columnNumber: 753
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-5 h-5 transition-transform group-hover:translate-y-1",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M19 9l-7 7-7-7"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Projects.tsx",
                                lineNumber: 418,
                                columnNumber: 935
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Projects.tsx",
                            lineNumber: 418,
                            columnNumber: 809
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/components/Projects.tsx",
                lineNumber: 418,
                columnNumber: 77
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Projects.tsx",
            lineNumber: 418,
            columnNumber: 42
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = filteredProjects.length;
        $[38] = showAll;
        $[39] = t11;
    } else {
        t11 = $[39];
    }
    let t12;
    if ($[40] !== t10 || $[41] !== t11 || $[42] !== t3 || $[43] !== t4 || $[44] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t9,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Projects.tsx",
            lineNumber: 427,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = t10;
        $[41] = t11;
        $[42] = t3;
        $[43] = t4;
        $[44] = t9;
        $[45] = t12;
    } else {
        t12 = $[45];
    }
    let t13;
    if ($[46] !== categories || $[47] !== closeModal || $[48] !== selectedProject) {
        t13 = selectedProject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm",
            onClick: closeModal,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative bg-bg-secondary border border-card-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl",
                onClick: _temp,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: closeModal,
                        className: "absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110",
                        suppressHydrationWarning: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-6 h-6",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M6 18L18 6M6 6l12 12"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Projects.tsx",
                                lineNumber: 439,
                                columnNumber: 627
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Projects.tsx",
                            lineNumber: 439,
                            columnNumber: 548
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Projects.tsx",
                        lineNumber: 439,
                        columnNumber: 306
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-64 sm:h-80 md:h-96",
                        children: selectedProject.isVideo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            width: "100%",
                            height: "100%",
                            src: selectedProject.video,
                            title: selectedProject.title,
                            frameBorder: "0",
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                            allowFullScreen: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/Projects.tsx",
                            lineNumber: 439,
                            columnNumber: 810
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: selectedProject.image,
                            alt: selectedProject.title,
                            fill: true,
                            sizes: "(max-width: 1024px) 100vw, 896px",
                            className: "object-cover"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Projects.tsx",
                            lineNumber: 439,
                            columnNumber: 1044
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Projects.tsx",
                        lineNumber: 439,
                        columnNumber: 736
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 sm:p-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2 mb-4",
                                children: selectedProject.category.map((cat_1, i_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-accent-primary/20 text-accent-primary text-xs px-3 py-1 rounded-full font-medium",
                                        children: [
                                            categories.find((c_0)=>c_0.key === cat_1)?.icon,
                                            " ",
                                            categories.find((c_1)=>c_1.key === cat_1)?.label
                                        ]
                                    }, i_0, true, {
                                        fileName: "[project]/src/components/Projects.tsx",
                                        lineNumber: 439,
                                        columnNumber: 1311
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Projects.tsx",
                                lineNumber: 439,
                                columnNumber: 1222
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl sm:text-3xl font-bold text-text-primary mb-3",
                                children: selectedProject.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/Projects.tsx",
                                lineNumber: 439,
                                columnNumber: 1538
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-text-secondary text-base sm:text-lg mb-6",
                                children: selectedProject.description || "An exciting project showcasing creative development skills and innovative solutions."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Projects.tsx",
                                lineNumber: 439,
                                columnNumber: 1636
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-3",
                                children: [
                                    selectedProject.link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: selectedProject.link,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "inline-flex items-center gap-2 bg-accent-primary hover:bg-accent-hover text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-5 h-5",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Projects.tsx",
                                                    lineNumber: 439,
                                                    columnNumber: 2208
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Projects.tsx",
                                                lineNumber: 439,
                                                columnNumber: 2129
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Visit Live Demo"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Projects.tsx",
                                        lineNumber: 439,
                                        columnNumber: 1883
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: closeModal,
                                        className: "inline-flex items-center gap-2 bg-card-bg hover:bg-card-bg-hover text-text-primary border border-card-border px-6 py-3 rounded-full font-medium transition-all duration-300",
                                        suppressHydrationWarning: true,
                                        children: "Close"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Projects.tsx",
                                        lineNumber: 439,
                                        columnNumber: 2384
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Projects.tsx",
                                lineNumber: 439,
                                columnNumber: 1820
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Projects.tsx",
                        lineNumber: 439,
                        columnNumber: 1194
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Projects.tsx",
                lineNumber: 439,
                columnNumber: 153
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Projects.tsx",
            lineNumber: 439,
            columnNumber: 30
        }, ("TURBOPACK compile-time value", void 0));
        $[46] = categories;
        $[47] = closeModal;
        $[48] = selectedProject;
        $[49] = t13;
    } else {
        t13 = $[49];
    }
    let t14;
    if ($[50] !== t12 || $[51] !== t13 || $[52] !== t5 || $[53] !== t6) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: t5,
            className: t6,
            children: [
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Projects.tsx",
            lineNumber: 449,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[50] = t12;
        $[51] = t13;
        $[52] = t5;
        $[53] = t6;
        $[54] = t14;
    } else {
        t14 = $[54];
    }
    return t14;
};
_s(Projects, "GPIEqdWhZftdLgStgRzXfktrAqE=");
_c = Projects;
const __TURBOPACK__default__export__ = Projects;
function _temp(e) {
    return e.stopPropagation();
}
var _c;
__turbopack_context__.k.register(_c, "Projects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Certificates.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const Certificates = ()=>{
    _s();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [selectedCert, setSelectedCert] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pdfPreviews, setPdfPreviews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [visibleCards, setVisibleCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [showAll, setShowAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const observerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pdfLibLoadedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const categories = [
        {
            key: 'all',
            label: 'All Certificates',
            icon: '📜',
            color: 'from-blue-500 to-purple-500'
        },
        {
            key: 'professional',
            label: 'Professional',
            icon: '🏆',
            color: 'from-yellow-500 to-orange-500'
        },
        {
            key: 'courses',
            label: 'Courses',
            icon: '📚',
            color: 'from-green-500 to-teal-500'
        },
        {
            key: 'hackathons',
            label: 'Hackathons',
            icon: '💻',
            color: 'from-purple-500 to-pink-500'
        },
        {
            key: 'college',
            label: 'Academic',
            icon: '🎓',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            key: 'other',
            label: 'Awards & Competitions',
            icon: '🥇',
            color: 'from-red-500 to-orange-500'
        }
    ];
    const certificates = [
        // Professional Certifications
        {
            filename: 'AI Foundations Associate.pdf',
            title: 'AI Foundations Associate',
            folder: 'main_professional_certifications',
            category: 'professional',
            organization: 'Oracle'
        },
        {
            filename: 'Data Science Professional.pdf',
            title: 'Data Science Professional',
            folder: 'main_professional_certifications',
            category: 'professional',
            organization: 'Oracle'
        },
        {
            filename: 'Generative AI Professional_arshad.pdf',
            title: 'Generative AI Professional',
            folder: 'main_professional_certifications',
            category: 'professional',
            organization: 'Oracle'
        },
        // Course Certifications
        {
            filename: 'Agile Scrum in Practice.pdf',
            title: 'Agile Scrum in Practice',
            folder: 'Cources',
            category: 'courses',
            description: 'Professional development course'
        },
        {
            filename: 'Introduction to Artificial Intelligence.pdf',
            title: 'Introduction to Artificial Intelligence',
            folder: 'Cources',
            category: 'courses',
            description: 'AI fundamentals course'
        },
        {
            filename: 'Introduction to Data Science.pdf',
            title: 'Introduction to Data Science',
            folder: 'Cources',
            category: 'courses',
            description: 'Data Science basics'
        },
        {
            filename: 'OpenAI Generative Pre-trained Transformer 3 (GPT-3) for developers.pdf',
            title: 'GPT-3 for Developers',
            folder: 'Cources',
            category: 'courses',
            description: 'OpenAI GPT-3 development course'
        },
        {
            filename: 'photo_1_2025-09-09_23-04-19.jpg',
            title: 'Course Certificate 1',
            folder: 'Cources',
            category: 'courses'
        },
        {
            filename: 'photo_2_2025-09-09_23-04-19.jpg',
            title: 'Course Certificate 2',
            folder: 'Cources',
            category: 'courses'
        },
        {
            filename: '1-5fa0208d-f0b5-4247-ab58-2f5f0d9aa895.pdf',
            title: 'Online Course Certificate',
            folder: 'Cources',
            category: 'courses'
        },
        {
            filename: '1-92b0c280-65cc-4d41-8dd9-a58dd785278d.pdf',
            title: 'Professional Course Certificate',
            folder: 'Cources',
            category: 'courses'
        },
        {
            filename: '1-a45203d8-42a8-4be4-a6f3-445c419e3b3e.pdf',
            title: 'Technical Course Certificate',
            folder: 'Cources',
            category: 'courses'
        },
        // Hackathon Certificates
        {
            filename: 'photo_5_2025-09-09_23-04-19.jpg',
            title: 'Hackathon Achievement 1',
            folder: 'Hackthons',
            category: 'hackathons',
            description: 'Programming competition'
        },
        {
            filename: 'photo_6_2025-09-09_23-04-19.jpg',
            title: 'Hackathon Achievement 2',
            folder: 'Hackthons',
            category: 'hackathons',
            description: 'Coding challenge'
        },
        {
            filename: 'photo_7_2025-09-09_23-04-19.jpg',
            title: 'Hackathon Achievement 3',
            folder: 'Hackthons',
            category: 'hackathons',
            description: 'Tech competition'
        },
        {
            filename: 'photo_8_2025-09-09_23-04-19.jpg',
            title: 'Hackathon Achievement 4',
            folder: 'Hackthons',
            category: 'hackathons',
            description: 'Innovation challenge'
        },
        {
            filename: 'photo_10_2025-09-09_23-04-19.jpg',
            title: 'Hackathon Achievement 5',
            folder: 'Hackthons',
            category: 'hackathons',
            description: 'Development marathon'
        },
        // College/Academic Certificates
        {
            filename: 'photo_13_2025-09-09_23-04-19.jpg',
            title: 'Academic Achievement 1',
            folder: 'College',
            category: 'college'
        },
        {
            filename: 'photo_14_2025-09-09_23-04-19.jpg',
            title: 'Academic Achievement 2',
            folder: 'College',
            category: 'college'
        },
        {
            filename: 'photo_15_2025-09-09_23-04-19.jpg',
            title: 'Academic Achievement 3',
            folder: 'College',
            category: 'college'
        },
        {
            filename: 'photo_16_2025-09-09_23-04-19.jpg',
            title: 'Academic Achievement 4',
            folder: 'College',
            category: 'college'
        },
        {
            filename: 'photo_17_2025-09-09_23-04-19.jpg',
            title: 'Academic Achievement 5',
            folder: 'College',
            category: 'college'
        },
        {
            filename: 'photo_18_2025-09-09_23-04-19.jpg',
            title: 'Academic Achievement 6',
            folder: 'College',
            category: 'college'
        },
        {
            filename: 'photo_19_2025-09-09_23-04-19.jpg',
            title: 'Academic Achievement 7',
            folder: 'College',
            category: 'college'
        },
        {
            filename: 'photo_20_2025-09-09_23-04-19.jpg',
            title: 'Academic Achievement 8',
            folder: 'College',
            category: 'college'
        },
        {
            filename: 'photo_21_2025-09-09_23-04-19.jpg',
            title: 'Academic Achievement 9',
            folder: 'College',
            category: 'college'
        },
        {
            filename: 'photo_22_2025-09-09_23-04-19.jpg',
            title: 'Academic Achievement 10',
            folder: 'College',
            category: 'college'
        },
        // Other/Awards & Competitions
        {
            filename: 'RBI Quize.jpg',
            title: 'RBI Quiz Certificate',
            folder: 'Other',
            category: 'other',
            description: 'State level competition'
        },
        {
            filename: 'Eassy English.jpg',
            title: 'Essay Competition Certificate',
            folder: 'Other',
            category: 'other',
            description: 'English essay competition'
        }
    ];
    // Load PDF.js library
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Certificates.useEffect": ()=>{
            if (!pdfLibLoadedRef.current && ("TURBOPACK compile-time value", "object") !== 'undefined') {
                const script = document.createElement('script');
                script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
                script.async = true;
                script.onload = ({
                    "Certificates.useEffect": ()=>{
                        if (window.pdfjsLib) {
                            window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
                            pdfLibLoadedRef.current = true;
                        }
                    }
                })["Certificates.useEffect"];
                document.body.appendChild(script);
                return ({
                    "Certificates.useEffect": ()=>{
                        if (document.body.contains(script)) {
                            document.body.removeChild(script);
                        }
                    }
                })["Certificates.useEffect"];
            }
        }
    }["Certificates.useEffect"], []);
    // Intersection Observer for lazy loading
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Certificates.useEffect": ()=>{
            observerRef.current = new IntersectionObserver({
                "Certificates.useEffect": (entries)=>{
                    entries.forEach({
                        "Certificates.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                const key = entry.target.getAttribute('data-cert-key');
                                if (key) {
                                    setVisibleCards({
                                        "Certificates.useEffect": (prev)=>new Set(prev).add(key)
                                    }["Certificates.useEffect"]);
                                }
                            }
                        }
                    }["Certificates.useEffect"]);
                }
            }["Certificates.useEffect"], {
                rootMargin: '150px',
                threshold: 0.1
            });
            return ({
                "Certificates.useEffect": ()=>{
                    if (observerRef.current) {
                        observerRef.current.disconnect();
                    }
                }
            })["Certificates.useEffect"];
        }
    }["Certificates.useEffect"], []);
    // Load cached previews from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Certificates.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                try {
                    const cached = localStorage.getItem('pdfPreviewsCache');
                    if (cached) {
                        const parsedCache = JSON.parse(cached);
                        // Check if cache is not too old (7 days)
                        if (parsedCache.timestamp && Date.now() - parsedCache.timestamp < 7 * 24 * 60 * 60 * 1000) {
                            setPdfPreviews(parsedCache.previews || {});
                        }
                    }
                } catch (e) {
                    console.log('Cache read error:', e);
                }
            }
        }
    }["Certificates.useEffect"], []);
    // Save previews to localStorage when they change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Certificates.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") !== 'undefined' && Object.keys(pdfPreviews).length > 0) {
                try {
                    const cacheData = {
                        timestamp: Date.now(),
                        previews: pdfPreviews
                    };
                    localStorage.setItem('pdfPreviewsCache', JSON.stringify(cacheData));
                } catch (e_0) {
                    // localStorage might be full, clear old data
                    try {
                        localStorage.removeItem('pdfPreviewsCache');
                    } catch  {}
                }
            }
        }
    }["Certificates.useEffect"], [
        pdfPreviews
    ]);
    const generatePdfPreview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Certificates.useCallback[generatePdfPreview]": async (pdfUrl, key_0)=>{
            if (pdfPreviews[key_0]) return;
            try {
                const pdfjsLib = window.pdfjsLib;
                if (!pdfjsLib) return;
                const loadingTask = pdfjsLib.getDocument({
                    url: pdfUrl,
                    cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/cmaps/',
                    cMapPacked: true,
                    disableAutoFetch: true,
                    disableStream: true
                });
                const pdf = await loadingTask.promise;
                const page = await pdf.getPage(1);
                // Use smaller scale for faster rendering
                const viewport = page.getViewport({
                    scale: 0.5
                });
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d', {
                    alpha: false
                });
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                await page.render({
                    canvasContext: context,
                    viewport: viewport
                }).promise;
                // Use lower quality for smaller file size and faster caching
                const imageUrl = canvas.toDataURL('image/jpeg', 0.5);
                setPdfPreviews({
                    "Certificates.useCallback[generatePdfPreview]": (prev_0)=>({
                            ...prev_0,
                            [key_0]: imageUrl
                        })
                }["Certificates.useCallback[generatePdfPreview]"]);
                pdf.destroy();
            } catch (error) {
                console.error('Error generating PDF preview:', error);
            }
        }
    }["Certificates.useCallback[generatePdfPreview]"], [
        pdfPreviews
    ]);
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Certificates.useCallback[cardRef]": (node, key_1)=>{
            if (node && observerRef.current) {
                node.setAttribute('data-cert-key', key_1);
                observerRef.current.observe(node);
            }
        }
    }["Certificates.useCallback[cardRef]"], []);
    const filteredCertificates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Certificates.useMemo[filteredCertificates]": ()=>{
            if (activeCategory === 'all') return certificates;
            return certificates.filter({
                "Certificates.useMemo[filteredCertificates]": (cert)=>cert.category === activeCategory
            }["Certificates.useMemo[filteredCertificates]"]);
        }
    }["Certificates.useMemo[filteredCertificates]"], [
        activeCategory
    ]);
    const displayedCertificates = showAll ? filteredCertificates : filteredCertificates.slice(0, 6);
    const openModal = (path)=>setSelectedCert(path);
    const closeModal = ()=>setSelectedCert(null);
    const getCategoryColor = (category)=>{
        return categories.find((c)=>c.key === category)?.color || 'from-gray-500 to-gray-600';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "certificates",
        className: "min-h-screen bg-gradient-to-br from-gradient-start via-bg-secondary to-gradient-end py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-8 sm:mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-accent-secondary",
                                        children: "Certificates"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Certificates.tsx",
                                        lineNumber: 369,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " & Achievements"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Certificates.tsx",
                                lineNumber: 368,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-text-secondary text-base sm:text-lg max-w-2xl mx-auto",
                                children: "Professional certifications, course completions, and academic achievements showcasing continuous learning."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Certificates.tsx",
                                lineNumber: 371,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Certificates.tsx",
                        lineNumber: 367,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8 sm:mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap justify-center gap-2 sm:gap-3",
                                children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setActiveCategory(cat.key);
                                            setShowAll(false);
                                        },
                                        className: `
                  flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium
                  transition-all duration-300 border
                  ${activeCategory === cat.key ? 'bg-accent-secondary text-black border-accent-secondary shadow-lg shadow-accent-secondary/30 scale-105' : 'bg-card-bg text-text-secondary border-card-border hover:bg-card-bg-hover hover:text-text-primary hover:border-accent-secondary/50'}
                `,
                                        suppressHydrationWarning: true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: cat.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Certificates.tsx",
                                                lineNumber: 387,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "hidden sm:inline",
                                                children: cat.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Certificates.tsx",
                                                lineNumber: 388,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sm:hidden",
                                                children: cat.label.split(' ')[0]
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Certificates.tsx",
                                                lineNumber: 389,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, cat.key, true, {
                                        fileName: "[project]/src/components/Certificates.tsx",
                                        lineNumber: 379,
                                        columnNumber: 36
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Certificates.tsx",
                                lineNumber: 378,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mt-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-text-tertiary text-sm",
                                    children: [
                                        "Showing ",
                                        displayedCertificates.length,
                                        " of ",
                                        filteredCertificates.length,
                                        " certificates"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Certificates.tsx",
                                    lineNumber: 394,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Certificates.tsx",
                                lineNumber: 393,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Certificates.tsx",
                        lineNumber: 377,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8",
                        children: displayedCertificates.map((cert_0, index)=>{
                            const filePath = `/assets/certificates/${cert_0.folder}/${cert_0.filename}`;
                            const isPDF = cert_0.filename.toLowerCase().endsWith('.pdf');
                            const previewKey = `cert-${cert_0.folder}-${index}`;
                            const isVisible = visibleCards.has(previewKey);
                            if (isPDF && ("TURBOPACK compile-time value", "object") !== 'undefined' && isVisible && !pdfPreviews[previewKey] && pdfLibLoadedRef.current) {
                                setTimeout(()=>generatePdfPreview(filePath, previewKey), 50);
                            }
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: (node_0)=>cardRef(node_0, previewKey),
                                className: "group bg-card-bg backdrop-blur-sm border border-card-border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-accent-secondary/10 transition-all duration-500 hover:-translate-y-2 cursor-pointer",
                                onClick: ()=>openModal(filePath),
                                suppressHydrationWarning: true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-48 sm:h-56 overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `absolute inset-0 bg-gradient-to-br ${getCategoryColor(cert_0.category)} opacity-10 group-hover:opacity-20 transition-opacity duration-300`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Certificates.tsx",
                                                lineNumber: 414,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            isPDF ? !isVisible ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-center h-full bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-5xl mb-3 animate-spin",
                                                            style: {
                                                                animationDuration: '2s'
                                                            },
                                                            children: "⏳"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Certificates.tsx",
                                                            lineNumber: 418,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-text-secondary text-sm font-medium",
                                                            children: "Scroll to load..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Certificates.tsx",
                                                            lineNumber: 421,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Certificates.tsx",
                                                    lineNumber: 417,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Certificates.tsx",
                                                lineNumber: 416,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)) : pdfPreviews[previewKey] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: pdfPreviews[previewKey],
                                                alt: cert_0.title,
                                                className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                                                loading: "lazy"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Certificates.tsx",
                                                lineNumber: 423,
                                                columnNumber: 58
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-center h-full bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-5xl mb-3 animate-spin",
                                                            style: {
                                                                animationDuration: '2s'
                                                            },
                                                            children: "⏳"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Certificates.tsx",
                                                            lineNumber: 425,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-text-secondary text-sm font-medium",
                                                            children: "Loading preview..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Certificates.tsx",
                                                            lineNumber: 428,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Certificates.tsx",
                                                    lineNumber: 424,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Certificates.tsx",
                                                lineNumber: 423,
                                                columnNumber: 227
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: filePath,
                                                alt: cert_0.title,
                                                fill: true,
                                                sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
                                                className: "object-cover transition-transform duration-500 group-hover:scale-110",
                                                loading: "lazy"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Certificates.tsx",
                                                lineNumber: 430,
                                                columnNumber: 32
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "bg-accent-secondary hover:bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2",
                                                    suppressHydrationWarning: true,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-4 h-4",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Certificates.tsx",
                                                                    lineNumber: 436,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Certificates.tsx",
                                                                    lineNumber: 437,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Certificates.tsx",
                                                            lineNumber: 435,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "View Certificate"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Certificates.tsx",
                                                    lineNumber: 434,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Certificates.tsx",
                                                lineNumber: 433,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-3 left-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `bg-gradient-to-r ${getCategoryColor(cert_0.category)} text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg`,
                                                    children: [
                                                        categories.find((c_0)=>c_0.key === cert_0.category)?.icon,
                                                        " ",
                                                        categories.find((c_1)=>c_1.key === cert_0.category)?.label
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Certificates.tsx",
                                                    lineNumber: 445,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Certificates.tsx",
                                                lineNumber: 444,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-3 right-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `${isPDF ? 'bg-red-500' : 'bg-green-500'} text-white text-xs px-2 py-1 rounded-full font-medium`,
                                                    children: isPDF ? 'PDF' : 'IMG'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Certificates.tsx",
                                                    lineNumber: 452,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Certificates.tsx",
                                                lineNumber: 451,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Certificates.tsx",
                                        lineNumber: 412,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 sm:p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-bold text-text-primary mb-1 group-hover:text-accent-secondary transition-colors line-clamp-1",
                                                children: cert_0.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Certificates.tsx",
                                                lineNumber: 460,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            cert_0.organization && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-accent-primary text-sm font-medium mb-1",
                                                children: cert_0.organization
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Certificates.tsx",
                                                lineNumber: 463,
                                                columnNumber: 43
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            cert_0.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-text-secondary text-sm line-clamp-2",
                                                children: cert_0.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Certificates.tsx",
                                                lineNumber: 466,
                                                columnNumber: 42
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Certificates.tsx",
                                        lineNumber: 459,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, index, true, {
                                fileName: "[project]/src/components/Certificates.tsx",
                                lineNumber: 410,
                                columnNumber: 18
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/Certificates.tsx",
                        lineNumber: 401,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    filteredCertificates.length > 6 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mt-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowAll(!showAll),
                            className: "group inline-flex items-center gap-3 bg-gradient-to-r from-accent-secondary to-yellow-400 hover:from-yellow-400 hover:to-accent-secondary text-black px-8 py-3.5 rounded-full font-semibold text-base shadow-lg shadow-accent-secondary/30 transition-all duration-300 hover:scale-105 hover:shadow-xl",
                            suppressHydrationWarning: true,
                            children: showAll ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Show Less"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Certificates.tsx",
                                        lineNumber: 478,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5 transition-transform group-hover:-translate-y-1",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M5 15l7-7 7 7"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Certificates.tsx",
                                            lineNumber: 480,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Certificates.tsx",
                                        lineNumber: 479,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "View All ",
                                            filteredCertificates.length,
                                            " Certificates"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Certificates.tsx",
                                        lineNumber: 483,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5 transition-transform group-hover:translate-y-1",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M19 9l-7 7-7-7"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Certificates.tsx",
                                            lineNumber: 485,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Certificates.tsx",
                                        lineNumber: 484,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Certificates.tsx",
                            lineNumber: 476,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Certificates.tsx",
                        lineNumber: 475,
                        columnNumber: 45
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Certificates.tsx",
                lineNumber: 365,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            selectedCert && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm",
                onClick: closeModal,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative bg-bg-secondary border border-card-border rounded-2xl max-w-5xl w-full max-h-[95vh] overflow-hidden shadow-2xl",
                    onClick: (e_1)=>e_1.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between p-4 border-b border-card-border bg-bg-tertiary/50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-text-primary",
                                    children: "Certificate Viewer"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Certificates.tsx",
                                    lineNumber: 497,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: selectedCert,
                                            download: true,
                                            className: "inline-flex items-center gap-2 bg-accent-primary hover:bg-accent-hover text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105",
                                            onClick: (e_2)=>e_2.stopPropagation(),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Certificates.tsx",
                                                        lineNumber: 501,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Certificates.tsx",
                                                    lineNumber: 500,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Download"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Certificates.tsx",
                                            lineNumber: 499,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: selectedCert,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "inline-flex items-center gap-2 bg-card-bg hover:bg-card-bg-hover text-text-primary border border-card-border px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                            onClick: (e_3)=>e_3.stopPropagation(),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Certificates.tsx",
                                                        lineNumber: 507,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Certificates.tsx",
                                                    lineNumber: 506,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Open New Tab"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Certificates.tsx",
                                            lineNumber: 505,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: closeModal,
                                            className: "bg-red-500 hover:bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110",
                                            suppressHydrationWarning: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-5 h-5",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M6 18L18 6M6 6l12 12"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Certificates.tsx",
                                                    lineNumber: 513,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Certificates.tsx",
                                                lineNumber: 512,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Certificates.tsx",
                                            lineNumber: 511,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Certificates.tsx",
                                    lineNumber: 498,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Certificates.tsx",
                            lineNumber: 496,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-[80vh] overflow-auto",
                            children: selectedCert.toLowerCase().endsWith('.pdf') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                src: selectedCert,
                                className: "w-full h-full",
                                title: "Certificate PDF"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Certificates.tsx",
                                lineNumber: 521,
                                columnNumber: 62
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center p-4 min-h-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: selectedCert,
                                    alt: "Certificate",
                                    width: 900,
                                    height: 650,
                                    className: "max-w-full h-auto object-contain rounded-lg shadow-lg"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Certificates.tsx",
                                    lineNumber: 522,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Certificates.tsx",
                                lineNumber: 521,
                                columnNumber: 144
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Certificates.tsx",
                            lineNumber: 520,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Certificates.tsx",
                    lineNumber: 494,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Certificates.tsx",
                lineNumber: 493,
                columnNumber: 24
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Certificates.tsx",
        lineNumber: 364,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Certificates, "4FghKELIog3VasdNrxzwp8/kFeI=");
_c = Certificates;
const __TURBOPACK__default__export__ = Certificates;
var _c;
__turbopack_context__.k.register(_c, "Certificates");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Internships.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const Internships = ()=>{
    _s();
    const [selectedInternship, setSelectedInternship] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedInfo, setSelectedInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pdfPreviews, setPdfPreviews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [loadingStates, setLoadingStates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [visibleCards, setVisibleCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const observerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pdfLibLoadedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const internships = [
        {
            filename: 'AICTE B1 PD Certificate-30.pdf',
            title: 'Cyber Security Internship',
            organization: 'AICTE & Edunet Foundation',
            date: 'June 2025',
            description: '6-week virtual internship program focused on Cyber Security fundamentals, threat analysis, and security best practices.',
            skills: [
                'Cyber Security',
                'Threat Analysis',
                'Network Security',
                'Security Protocols'
            ]
        },
        {
            filename: 'Arshad  Pasha_AICTE_Certificate (3).pdf',
            title: 'AI and Data Analytics Internship',
            organization: 'AICTE, Shell India & Edunet Foundation',
            date: 'July - August 2025',
            description: '4-week intensive internship on AI & Data Analytics focused on Green Skills and sustainable technology solutions.',
            skills: [
                'AI',
                'Data Analytics',
                'Green Skills',
                'Python'
            ]
        },
        {
            filename: 'Arshad  Pasha_AICTE_Certificate.pdf',
            title: 'AI and Data Analytics Program',
            organization: 'AICTE, Shell India & Edunet Foundation',
            date: 'June - July 2025',
            description: '4-week virtual internship under Skills4Future program focusing on artificial intelligence and data analytics.',
            skills: [
                'Machine Learning',
                'Data Science',
                'AI Fundamentals',
                'Analytics'
            ]
        },
        {
            filename: 'Arshad Pasha __ID__ (1) (1).pdf',
            title: 'Full Stack Development Internship',
            organization: 'Micro IT',
            date: 'April 2025',
            description: '1-month comprehensive Full Stack Development certification program covering frontend, backend, and database technologies.',
            skills: [
                'React',
                'Node.js',
                'MongoDB',
                'Express.js',
                'Full Stack'
            ]
        },
        {
            filename: 'Arshad Pasha_Completion_Certificate.pdf',
            title: 'Web Development Internship',
            organization: 'NexusLogic Technologies',
            date: 'March - May 2025',
            description: '2-month internship as Web Development Intern, building responsive web applications and learning modern web technologies.',
            skills: [
                'HTML/CSS',
                'JavaScript',
                'Responsive Design',
                'Web Development'
            ]
        },
        {
            filename: 'Foundations of AI certificate.pdf',
            title: 'Foundations of Artificial Intelligence',
            organization: 'Microsoft, AICTE & Edunet Foundation',
            date: 'April - May 2025',
            description: '4-week Microsoft initiative internship program covering AI fundamentals, machine learning concepts, and practical applications.',
            skills: [
                'AI Foundations',
                'Microsoft AI',
                'Machine Learning',
                'Deep Learning'
            ]
        },
        {
            filename: 'ThegoodgameTheory.pdf',
            title: 'Game Theory Research Internship',
            organization: 'The Good Game Theory',
            date: 'July 2025 - Ongoing',
            description: '6-month research internship focusing on game theory principles, strategic decision making, and practical applications.',
            skills: [
                'Game Theory',
                'Research',
                'Strategic Analysis',
                'Decision Making'
            ],
            isOngoing: true
        }
    ];
    // Load PDF.js library
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Internships.useEffect": ()=>{
            if (!pdfLibLoadedRef.current && ("TURBOPACK compile-time value", "object") !== 'undefined') {
                const script = document.createElement('script');
                script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
                script.async = true;
                script.onload = ({
                    "Internships.useEffect": ()=>{
                        if (window.pdfjsLib) {
                            window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
                            pdfLibLoadedRef.current = true;
                        }
                    }
                })["Internships.useEffect"];
                document.body.appendChild(script);
                return ({
                    "Internships.useEffect": ()=>{
                        if (document.body.contains(script)) {
                            document.body.removeChild(script);
                        }
                    }
                })["Internships.useEffect"];
            }
        }
    }["Internships.useEffect"], []);
    // Intersection Observer for lazy loading
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Internships.useEffect": ()=>{
            observerRef.current = new IntersectionObserver({
                "Internships.useEffect": (entries)=>{
                    entries.forEach({
                        "Internships.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                const index = parseInt(entry.target.getAttribute('data-index') || '0');
                                setVisibleCards({
                                    "Internships.useEffect": (prev)=>new Set(prev).add(index)
                                }["Internships.useEffect"]);
                            }
                        }
                    }["Internships.useEffect"]);
                }
            }["Internships.useEffect"], {
                rootMargin: '100px',
                threshold: 0.1
            });
            return ({
                "Internships.useEffect": ()=>{
                    if (observerRef.current) {
                        observerRef.current.disconnect();
                    }
                }
            })["Internships.useEffect"];
        }
    }["Internships.useEffect"], []);
    // Load cached internship previews from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Internships.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                try {
                    const cached = localStorage.getItem('internshipPreviewsCache');
                    if (cached) {
                        const parsedCache = JSON.parse(cached);
                        // Check if cache is not too old (7 days)
                        if (parsedCache.timestamp && Date.now() - parsedCache.timestamp < 7 * 24 * 60 * 60 * 1000) {
                            setPdfPreviews(parsedCache.previews || {});
                        }
                    }
                } catch (e) {
                    console.log('Cache read error:', e);
                }
            }
        }
    }["Internships.useEffect"], []);
    // Save previews to localStorage when they change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Internships.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") !== 'undefined' && Object.keys(pdfPreviews).length > 0) {
                try {
                    const cacheData = {
                        timestamp: Date.now(),
                        previews: pdfPreviews
                    };
                    localStorage.setItem('internshipPreviewsCache', JSON.stringify(cacheData));
                } catch (e_0) {
                    // localStorage might be full, clear old data
                    try {
                        localStorage.removeItem('internshipPreviewsCache');
                    } catch  {}
                }
            }
        }
    }["Internships.useEffect"], [
        pdfPreviews
    ]);
    const generatePdfPreview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Internships.useCallback[generatePdfPreview]": async (pdfUrl, key)=>{
            if (pdfPreviews[key] || loadingStates[key]) return;
            setLoadingStates({
                "Internships.useCallback[generatePdfPreview]": (prev_0)=>({
                        ...prev_0,
                        [key]: true
                    })
            }["Internships.useCallback[generatePdfPreview]"]);
            try {
                const pdfjsLib = window.pdfjsLib;
                if (!pdfjsLib) {
                    setLoadingStates({
                        "Internships.useCallback[generatePdfPreview]": (prev_2)=>({
                                ...prev_2,
                                [key]: false
                            })
                    }["Internships.useCallback[generatePdfPreview]"]);
                    return;
                }
                const loadingTask = pdfjsLib.getDocument({
                    url: pdfUrl,
                    cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/cmaps/',
                    cMapPacked: true,
                    disableAutoFetch: true,
                    disableStream: true
                });
                const pdf = await loadingTask.promise;
                const page = await pdf.getPage(1);
                // Use smaller scale for faster rendering
                const viewport = page.getViewport({
                    scale: 0.5
                });
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d', {
                    alpha: false
                });
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                await page.render({
                    canvasContext: context,
                    viewport: viewport
                }).promise;
                // Use lower quality for smaller file size and faster caching
                const imageUrl = canvas.toDataURL('image/jpeg', 0.5);
                setPdfPreviews({
                    "Internships.useCallback[generatePdfPreview]": (prev_3)=>({
                            ...prev_3,
                            [key]: imageUrl
                        })
                }["Internships.useCallback[generatePdfPreview]"]);
                setLoadingStates({
                    "Internships.useCallback[generatePdfPreview]": (prev_4)=>({
                            ...prev_4,
                            [key]: false
                        })
                }["Internships.useCallback[generatePdfPreview]"]);
                pdf.destroy();
            } catch (error) {
                console.error('Error generating PDF preview:', error);
                setLoadingStates({
                    "Internships.useCallback[generatePdfPreview]": (prev_1)=>({
                            ...prev_1,
                            [key]: false
                        })
                }["Internships.useCallback[generatePdfPreview]"]);
            }
        }
    }["Internships.useCallback[generatePdfPreview]"], [
        pdfPreviews,
        loadingStates
    ]);
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Internships.useCallback[cardRef]": (node, index_0)=>{
            if (node && observerRef.current) {
                node.setAttribute('data-index', index_0.toString());
                observerRef.current.observe(node);
            }
        }
    }["Internships.useCallback[cardRef]"], []);
    const openModal = (path, internship)=>{
        setSelectedInternship(path);
        setSelectedInfo(internship);
    };
    const closeModal = ()=>{
        setSelectedInternship(null);
        setSelectedInfo(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "internships",
        className: "min-h-screen bg-gradient-to-br from-gradient-start via-bg-secondary to-gradient-end py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-8 sm:mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-accent-secondary",
                                        children: "Internships"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Internships.tsx",
                                        lineNumber: 229,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " & Experience"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Internships.tsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-text-secondary text-base sm:text-lg max-w-2xl mx-auto",
                                children: "Professional internship programs and certifications demonstrating hands-on industry experience."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Internships.tsx",
                                lineNumber: 231,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Internships.tsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-card-bg backdrop-blur-sm border border-card-border rounded-xl p-4 text-center hover:bg-card-bg-hover transition-all duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl font-bold text-accent-primary",
                                        children: internships.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Internships.tsx",
                                        lineNumber: 239,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-text-secondary text-sm",
                                        children: "Total Internships"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Internships.tsx",
                                        lineNumber: 240,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Internships.tsx",
                                lineNumber: 238,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-card-bg backdrop-blur-sm border border-card-border rounded-xl p-4 text-center hover:bg-card-bg-hover transition-all duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl font-bold text-accent-secondary",
                                        children: internships.filter((i)=>i.isOngoing).length
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Internships.tsx",
                                        lineNumber: 243,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-text-secondary text-sm",
                                        children: "Ongoing"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Internships.tsx",
                                        lineNumber: 244,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Internships.tsx",
                                lineNumber: 242,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-card-bg backdrop-blur-sm border border-card-border rounded-xl p-4 text-center hover:bg-card-bg-hover transition-all duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl font-bold text-green-500",
                                        children: new Set(internships.map((i_0)=>i_0.organization)).size
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Internships.tsx",
                                        lineNumber: 247,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-text-secondary text-sm",
                                        children: "Organizations"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Internships.tsx",
                                        lineNumber: 248,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Internships.tsx",
                                lineNumber: 246,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-card-bg backdrop-blur-sm border border-card-border rounded-xl p-4 text-center hover:bg-card-bg-hover transition-all duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl font-bold text-purple-500",
                                        children: [
                                            new Set(internships.flatMap((i_1)=>i_1.skills || [])).size,
                                            "+"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Internships.tsx",
                                        lineNumber: 251,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-text-secondary text-sm",
                                        children: "Skills Gained"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Internships.tsx",
                                        lineNumber: 252,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Internships.tsx",
                                lineNumber: 250,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Internships.tsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
                        children: internships.map((internship_0, index_1)=>{
                            const filePath = `/assets/intenships/${internship_0.filename}`;
                            const previewKey = `internship-${index_1}`;
                            const isVisible = visibleCards.has(index_1);
                            if (("TURBOPACK compile-time value", "object") !== 'undefined' && isVisible && !pdfPreviews[previewKey] && !loadingStates[previewKey] && pdfLibLoadedRef.current) {
                                setTimeout(()=>generatePdfPreview(filePath, previewKey), 50);
                            }
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: (node_0)=>cardRef(node_0, index_1),
                                className: "group bg-card-bg backdrop-blur-sm border border-card-border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-accent-primary/10 transition-all duration-500 hover:-translate-y-2",
                                suppressHydrationWarning: true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-56 sm:h-64 overflow-hidden cursor-pointer",
                                        onClick: ()=>openModal(filePath, internship_0),
                                        children: [
                                            internship_0.isOngoing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-3 right-3 z-10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold animate-pulse flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-2 h-2 bg-white rounded-full animate-ping"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Internships.tsx",
                                                            lineNumber: 271,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "Currently Active"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Internships.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Internships.tsx",
                                                lineNumber: 269,
                                                columnNumber: 46
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            !isVisible ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-center h-full bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-5xl mb-3 animate-spin",
                                                            style: {
                                                                animationDuration: '2s'
                                                            },
                                                            children: "⏳"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Internships.tsx",
                                                            lineNumber: 278,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-text-secondary text-sm font-medium",
                                                            children: "Scroll to load..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Internships.tsx",
                                                            lineNumber: 281,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Internships.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Internships.tsx",
                                                lineNumber: 276,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)) : loadingStates[previewKey] || !pdfPreviews[previewKey] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-center h-full bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-5xl mb-3 animate-spin",
                                                            style: {
                                                                animationDuration: '2s'
                                                            },
                                                            children: "⏳"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Internships.tsx",
                                                            lineNumber: 285,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-text-secondary text-sm font-medium",
                                                            children: "Loading certificate..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Internships.tsx",
                                                            lineNumber: 288,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Internships.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Internships.tsx",
                                                lineNumber: 283,
                                                columnNumber: 86
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: pdfPreviews[previewKey],
                                                        alt: internship_0.title,
                                                        className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                                                        loading: "lazy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Internships.tsx",
                                                        lineNumber: 291,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute bottom-0 left-0 right-0 p-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "flex-1 bg-accent-primary hover:bg-accent-hover text-white px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2",
                                                                    suppressHydrationWarning: true,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            className: "w-4 h-4",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    strokeWidth: 2,
                                                                                    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/Internships.tsx",
                                                                                    lineNumber: 297,
                                                                                    columnNumber: 33
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    strokeWidth: 2,
                                                                                    d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/Internships.tsx",
                                                                                    lineNumber: 298,
                                                                                    columnNumber: 33
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/Internships.tsx",
                                                                            lineNumber: 296,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        "View Certificate"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/Internships.tsx",
                                                                    lineNumber: 295,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Internships.tsx",
                                                                lineNumber: 294,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Internships.tsx",
                                                            lineNumber: 293,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Internships.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Internships.tsx",
                                        lineNumber: 267,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between mb-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-bold text-text-primary group-hover:text-accent-primary transition-colors line-clamp-1 flex-1",
                                                    children: internship_0.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Internships.tsx",
                                                    lineNumber: 311,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Internships.tsx",
                                                lineNumber: 310,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-accent-secondary font-semibold text-sm mb-2",
                                                children: internship_0.organization
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Internships.tsx",
                                                lineNumber: 316,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-4 h-4 text-text-tertiary",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Internships.tsx",
                                                            lineNumber: 322,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Internships.tsx",
                                                        lineNumber: 321,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-text-tertiary text-sm",
                                                        children: internship_0.date
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Internships.tsx",
                                                        lineNumber: 324,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Internships.tsx",
                                                lineNumber: 320,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-text-secondary text-sm line-clamp-2 mb-4",
                                                children: internship_0.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Internships.tsx",
                                                lineNumber: 327,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            internship_0.skills && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-1.5",
                                                children: [
                                                    internship_0.skills.slice(0, 3).map((skill, i_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "bg-accent-primary/10 text-accent-primary text-xs px-2.5 py-1 rounded-full font-medium border border-accent-primary/20",
                                                            children: skill
                                                        }, i_2, false, {
                                                            fileName: "[project]/src/components/Internships.tsx",
                                                            lineNumber: 333,
                                                            columnNumber: 76
                                                        }, ("TURBOPACK compile-time value", void 0))),
                                                    internship_0.skills.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-text-tertiary text-xs py-1",
                                                        children: [
                                                            "+",
                                                            internship_0.skills.length - 3,
                                                            " more"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Internships.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 58
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Internships.tsx",
                                                lineNumber: 332,
                                                columnNumber: 43
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Internships.tsx",
                                        lineNumber: 309,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, index_1, true, {
                                fileName: "[project]/src/components/Internships.tsx",
                                lineNumber: 265,
                                columnNumber: 18
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/Internships.tsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Internships.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            selectedInternship && selectedInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm",
                onClick: closeModal,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative bg-bg-secondary border border-card-border rounded-2xl max-w-5xl w-full max-h-[95vh] overflow-hidden shadow-2xl",
                    onClick: (e_1)=>e_1.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-6 border-b border-card-border bg-bg-tertiary/50 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-text-primary mb-1",
                                            children: selectedInfo.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Internships.tsx",
                                            lineNumber: 352,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-accent-secondary font-medium text-sm",
                                            children: selectedInfo.organization
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Internships.tsx",
                                            lineNumber: 353,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-text-tertiary text-sm flex items-center gap-2 mt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Internships.tsx",
                                                        lineNumber: 356,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Internships.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                selectedInfo.date,
                                                selectedInfo.isOngoing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bg-green-500 text-white text-xs px-2 py-0.5 rounded-full ml-2",
                                                    children: "Currently Active"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Internships.tsx",
                                                    lineNumber: 359,
                                                    columnNumber: 46
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Internships.tsx",
                                            lineNumber: 354,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Internships.tsx",
                                    lineNumber: 351,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 w-full sm:w-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: selectedInternship,
                                            download: true,
                                            className: "flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-accent-primary hover:bg-accent-hover text-white px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105",
                                            onClick: (e_2)=>e_2.stopPropagation(),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Internships.tsx",
                                                        lineNumber: 367,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Internships.tsx",
                                                    lineNumber: 366,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Download"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Internships.tsx",
                                            lineNumber: 365,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: selectedInternship,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-card-bg hover:bg-card-bg-hover text-text-primary border border-card-border px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                                            onClick: (e_3)=>e_3.stopPropagation(),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Internships.tsx",
                                                        lineNumber: 373,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Internships.tsx",
                                                    lineNumber: 372,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Open"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Internships.tsx",
                                            lineNumber: 371,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: closeModal,
                                            className: "bg-red-500 hover:bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 flex-shrink-0",
                                            suppressHydrationWarning: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-5 h-5",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M6 18L18 6M6 6l12 12"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Internships.tsx",
                                                    lineNumber: 379,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Internships.tsx",
                                                lineNumber: 378,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Internships.tsx",
                                            lineNumber: 377,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Internships.tsx",
                                    lineNumber: 364,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Internships.tsx",
                            lineNumber: 350,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-6 border-b border-card-border bg-bg-secondary",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-text-secondary mb-4",
                                    children: selectedInfo.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Internships.tsx",
                                    lineNumber: 387,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                selectedInfo.skills && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: selectedInfo.skills.map((skill_0, i_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-accent-primary/15 text-accent-primary text-sm px-3 py-1.5 rounded-full font-medium border border-accent-primary/25",
                                            children: skill_0
                                        }, i_3, false, {
                                            fileName: "[project]/src/components/Internships.tsx",
                                            lineNumber: 389,
                                            columnNumber: 62
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Internships.tsx",
                                    lineNumber: 388,
                                    columnNumber: 39
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Internships.tsx",
                            lineNumber: 386,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-[60vh] overflow-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                src: selectedInternship,
                                className: "w-full h-full",
                                title: "Internship Certificate"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Internships.tsx",
                                lineNumber: 397,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Internships.tsx",
                            lineNumber: 396,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Internships.tsx",
                    lineNumber: 348,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Internships.tsx",
                lineNumber: 347,
                columnNumber: 46
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Internships.tsx",
        lineNumber: 224,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Internships, "CQ8UTrmor9Gvj6LcQdAlH8yqn8c=");
_c = Internships;
const __TURBOPACK__default__export__ = Internships;
var _c;
__turbopack_context__.k.register(_c, "Internships");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Contact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const Contact = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(31);
    if ($[0] !== "d9d9779b6d3caa1e52da3a9075dc007658be598b385d548b04d132320d52e130") {
        for(let $i = 0; $i < 31; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d9d9779b6d3caa1e52da3a9075dc007658be598b385d548b04d132320d52e130";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            name: "",
            email: "",
            message: ""
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] !== formData) {
        t1 = (e)=>{
            e.preventDefault();
            console.log("Form submitted:", formData);
            alert("Message sent successfully!");
            setFormData({
                name: "",
                email: "",
                message: ""
            });
        };
        $[2] = formData;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleSubmit = t1;
    let t2;
    if ($[4] !== formData) {
        t2 = (e_0)=>{
            setFormData({
                ...formData,
                [e_0.target.id]: e_0.target.value
            });
        };
        $[4] = formData;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const handleChange = t2;
    let t3;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-8 sm:mb-12 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-accent-secondary",
                    children: "Get In"
                }, void 0, false, {
                    fileName: "[project]/src/components/Contact.tsx",
                    lineNumber: 59,
                    columnNumber: 113
                }, ("TURBOPACK compile-time value", void 0)),
                " Touch"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Contact.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "name",
            className: "block text-sm font-semibold text-text-secondary mb-2",
            children: "Name"
        }, void 0, false, {
            fileName: "[project]/src/components/Contact.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== formData.name || $[9] !== handleChange) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    id: "name",
                    name: "name",
                    value: formData.name,
                    onChange: handleChange,
                    required: true,
                    autoComplete: "name",
                    className: "w-full px-3 sm:px-4 py-2 sm:py-3 bg-bg-tertiary border border-border-primary text-text-primary rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all text-sm sm:text-base placeholder-text-tertiary",
                    placeholder: "Your Name",
                    suppressHydrationWarning: true
                }, void 0, false, {
                    fileName: "[project]/src/components/Contact.tsx",
                    lineNumber: 73,
                    columnNumber: 19
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Contact.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = formData.name;
        $[9] = handleChange;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block text-sm font-semibold text-text-secondary mb-2",
            children: "Email"
        }, void 0, false, {
            fileName: "[project]/src/components/Contact.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== formData.email || $[13] !== handleChange) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "email",
                    id: "email",
                    name: "email",
                    value: formData.email,
                    onChange: handleChange,
                    required: true,
                    autoComplete: "email",
                    className: "w-full px-3 sm:px-4 py-2 sm:py-3 bg-bg-tertiary border border-border-primary text-text-primary rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all text-sm sm:text-base placeholder-text-tertiary",
                    placeholder: "your.email@example.com",
                    suppressHydrationWarning: true
                }, void 0, false, {
                    fileName: "[project]/src/components/Contact.tsx",
                    lineNumber: 89,
                    columnNumber: 19
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Contact.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = formData.email;
        $[13] = handleChange;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "message",
            className: "block text-sm font-semibold text-text-secondary mb-2",
            children: "Message"
        }, void 0, false, {
            fileName: "[project]/src/components/Contact.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== formData.message || $[17] !== handleChange) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    id: "message",
                    name: "message",
                    rows: 5,
                    value: formData.message,
                    onChange: handleChange,
                    required: true,
                    className: "w-full px-3 sm:px-4 py-2 sm:py-3 bg-bg-tertiary border border-border-primary text-text-primary rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all resize-none text-sm sm:text-base placeholder-text-tertiary",
                    placeholder: "Your message...",
                    suppressHydrationWarning: true
                }, void 0, false, {
                    fileName: "[project]/src/components/Contact.tsx",
                    lineNumber: 105,
                    columnNumber: 19
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Contact.tsx",
            lineNumber: 105,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = formData.message;
        $[17] = handleChange;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "w-full bg-gradient-to-r from-accent-primary to-blue-700 text-white py-3 sm:py-3.5 rounded-lg font-semibold hover:from-accent-hover hover:to-blue-800 transition-all duration-300 transform hover:scale-[1.02] text-sm sm:text-base shadow-lg hover:shadow-accent-primary/50",
            suppressHydrationWarning: true,
            children: "Send Message"
        }, void 0, false, {
            fileName: "[project]/src/components/Contact.tsx",
            lineNumber: 114,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== handleSubmit || $[21] !== t5 || $[22] !== t7 || $[23] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "space-y-5 sm:space-y-6",
            suppressHydrationWarning: true,
            children: [
                t5,
                t7,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Contact.tsx",
            lineNumber: 121,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = handleSubmit;
        $[21] = t5;
        $[22] = t7;
        $[23] = t9;
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-center text-text-tertiary mb-4 text-sm sm:text-base",
            children: "Or connect with me on"
        }, void 0, false, {
            fileName: "[project]/src/components/Contact.tsx",
            lineNumber: 132,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    let t13;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "https://www.linkedin.com/in/arshadpasha",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-text-tertiary hover:text-accent-primary transition-all transform hover:scale-110 duration-300",
            "aria-label": "LinkedIn",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-6 h-6 sm:w-8 sm:h-8",
                fill: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                }, void 0, false, {
                    fileName: "[project]/src/components/Contact.tsx",
                    lineNumber: 139,
                    columnNumber: 315
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Contact.tsx",
                lineNumber: 139,
                columnNumber: 236
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Contact.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    let t14;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "https://github.com/pashaarshad",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-text-tertiary hover:text-accent-secondary transition-all transform hover:scale-110 duration-300",
            "aria-label": "GitHub",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-6 h-6 sm:w-8 sm:h-8",
                fill: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                }, void 0, false, {
                    fileName: "[project]/src/components/Contact.tsx",
                    lineNumber: 146,
                    columnNumber: 306
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Contact.tsx",
                lineNumber: 146,
                columnNumber: 227
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Contact.tsx",
            lineNumber: 146,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t14;
    } else {
        t14 = $[27];
    }
    let t15;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-border-primary",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center gap-4 sm:gap-6",
                    children: [
                        t13,
                        t14,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://arshadpasha.tech",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "text-text-tertiary hover:text-accent-primary transition-all transform hover:scale-110 duration-300",
                            "aria-label": "Website",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6 sm:w-8 sm:h-8",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Contact.tsx",
                                    lineNumber: 153,
                                    columnNumber: 455
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Contact.tsx",
                                lineNumber: 153,
                                columnNumber: 362
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Contact.tsx",
                            lineNumber: 153,
                            columnNumber: 153
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Contact.tsx",
                    lineNumber: 153,
                    columnNumber: 91
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Contact.tsx",
            lineNumber: 153,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t15;
    } else {
        t15 = $[28];
    }
    let t16;
    if ($[29] !== t11) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "contact",
            className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-gradient-start via-bg-secondary to-gradient-end py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto w-full",
                children: [
                    t3,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-card-bg backdrop-blur-sm border border-card-border p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl",
                        children: [
                            t11,
                            t15
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Contact.tsx",
                        lineNumber: 160,
                        columnNumber: 284
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Contact.tsx",
                lineNumber: 160,
                columnNumber: 238
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Contact.tsx",
            lineNumber: 160,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t11;
        $[30] = t16;
    } else {
        t16 = $[30];
    }
    return t16;
};
_s(Contact, "AVhEfndA4vGEUeeFDmvQFHKomrk=");
_c = Contact;
const __TURBOPACK__default__export__ = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
'use client';
;
;
const Footer = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "15d38b78687beac218e07a4d52d7fc925e099b87b435e60b3dbf398e8edbb61f") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "15d38b78687beac218e07a4d52d7fc925e099b87b435e60b3dbf398e8edbb61f";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = new Date().getFullYear();
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const currentYear = t0;
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl sm:text-3xl font-bold mb-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "name-gradient",
                children: "Arshad Pasha"
            }, void 0, false, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 24,
                columnNumber: 62
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 24,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm sm:text-base text-text-secondary mb-4",
            children: "Full Stack Developer | AI/ML Enthusiast | Tech Innovator"
        }, void 0, false, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 25,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "https://www.linkedin.com/in/arshad-pasha/",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-text-tertiary hover:text-accent-primary transition-colors duration-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-6 h-6",
                fill: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 34,
                    columnNumber: 257
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 34,
                columnNumber: 192
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 34,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "https://github.com/pashaarshad",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-text-tertiary hover:text-accent-primary transition-colors duration-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-6 h-6",
                fill: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fillRule: "evenodd",
                    d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                    clipRule: "evenodd"
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 41,
                    columnNumber: 246
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 41,
                columnNumber: 181
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center gap-6 mb-6",
            children: [
                t3,
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "https://www.instagram.com/arshadpasha65",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-text-tertiary hover:text-accent-secondary transition-colors duration-300",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-6 h-6",
                        fill: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 48,
                            columnNumber: 313
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 48,
                        columnNumber: 248
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 48,
                    columnNumber: 66
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-text-tertiary",
            children: [
                "© ",
                currentYear,
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-accent-primary",
                    children: "Arshad Pasha"
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 55,
                    columnNumber: 68
                }, ("TURBOPACK compile-time value", void 0)),
                ". All rights reserved."
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "bg-bg-secondary border-t border-border-primary py-8 sm:py-12 transition-colors duration-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        t1,
                        t2,
                        t5,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t border-border-primary pt-6",
                            children: [
                                t6,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-text-tertiary mt-2",
                                    children: [
                                        "Crafted with ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-accent-secondary",
                                            children: "❤️"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 62,
                                            columnNumber: 336
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " using Next.js & Tailwind CSS"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 62,
                                    columnNumber: 276
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 62,
                            columnNumber: 219
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 62,
                    columnNumber: 178
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 62,
                columnNumber: 122
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    return t7;
};
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_0a09a317._.js.map