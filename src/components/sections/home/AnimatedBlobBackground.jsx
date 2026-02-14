// import React, { useEffect } from "react";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// const MeshShape = ({ mouseX, mouseY }) => {
//     const px = useTransform(mouseX, [0, window.innerWidth], [-20, 20]);
//     const py = useTransform(mouseY, [0, window.innerHeight], [-20, 20]);

//     const sx = useSpring(px, { stiffness: 20, damping: 40 });
//     const sy = useSpring(py, { stiffness: 20, damping: 40 });

//     return (
//         <motion.svg
//             viewBox="0 0 800 600"
//             style={{
//                 position: "absolute",
//                 width: "900px",
//                 height: "700px",
//                 x: sx,
//                 y: sy,
//             }}
//         >
//             <defs>
//                 <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
//                     <stop offset="0%" stopColor="#3b82f6" />
//                     <stop offset="50%" stopColor="#6366f1" />
//                     <stop offset="100%" stopColor="#06b6d4" />
//                 </linearGradient>

//                 <linearGradient id="g2" x1="1" y1="0" x2="0" y2="1">
//                     <stop offset="0%" stopColor="#9333ea" />
//                     <stop offset="50%" stopColor="#ec4899" />
//                     <stop offset="100%" stopColor="#6366f1" />
//                 </linearGradient>
//             </defs>

//             {/* Main mesh surface */}
//             <motion.path
//                 fill="url(#g1)"
//                 animate={{
//                     d: [
//                         "M0,200 C150,100 350,100 500,200 C650,300 750,250 800,200 L800,600 L0,600 Z",
//                         "M0,180 C120,260 380,120 520,180 C650,240 750,200 800,160 L800,600 L0,600 Z",
//                         "M0,220 C180,120 340,160 520,220 C650,280 750,240 800,210 L800,600 L0,600 Z",
//                         "M0,200 C150,100 350,100 500,200 C650,300 750,250 800,200 L800,600 L0,600 Z",
//                     ],
//                 }}
//                 transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
//             />

//             {/* Secondary color layer */}
//             <motion.path
//                 fill="url(#g2)"
//                 opacity={0.85}
//                 animate={{
//                     d: [
//                         "M0,300 C200,250 400,350 600,300 C720,280 760,320 800,340 L800,600 L0,600 Z",
//                         "M0,320 C220,280 380,300 600,340 C720,300 760,350 800,360 L800,600 L0,600 Z",
//                         "M0,280 C180,260 420,330 600,310 C720,290 760,330 800,350 L800,600 L0,600 Z",
//                         "M0,300 C200,250 400,350 600,300 C720,280 760,320 800,340 L800,600 L0,600 Z",
//                     ],
//                 }}
//                 transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
//             />
//         </motion.svg>
//     );
// };

// export default function AnimatedBlobBackground() {
//     const mouseX = useMotionValue(0);
//     const mouseY = useMotionValue(0);

//     useEffect(() => {
//         const move = (e) => {
//             mouseX.set(e.clientX);
//             mouseY.set(e.clientY);
//         };
//         window.addEventListener("mousemove", move);
//         return () => window.removeEventListener("mousemove", move);
//     }, []);

//     return (
//         <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white dark:from-[#0f172a] dark:via-[#020617] dark:to-black">
//             <MeshShape mouseX={mouseX} mouseY={mouseY} />
//         </div>
//     );
// }


import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function useMouseParallax() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const move = (e) => {
            mouseX.set(e.clientX / window.innerWidth - 0.5);
            mouseY.set(e.clientY / window.innerHeight - 0.5);
        };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    return { mouseX, mouseY };
}

function FloatingLayer({ depth = 1, gradient, speed = 20 }) {
    const { mouseX, mouseY } = useMouseParallax();

    // Parallax (depth feeling)
    const px = useTransform(mouseX, [-0.5, 0.5], [-30 * depth, 30 * depth]);
    const py = useTransform(mouseY, [-0.5, 0.5], [-20 * depth, 20 * depth]);

    // Inertia physics (mass feeling)
    const x = useSpring(px, { stiffness: 12, damping: 40, mass: 2 });
    const y = useSpring(py, { stiffness: 12, damping: 40, mass: 2 });

    return (
        <motion.div
            style={{
                position: "absolute",
                inset: 0,
                x,
                y,
            }}
            animate={{
                rotate: [0, 0.6, -0.4, 0],
                scale: [1, 1.02, 0.985, 1],
                x: [0, 20, -15, 0],
                y: [0, -18, 12, 0],
            }}
            transition={{
                duration: speed,
                ease: "easeInOut",
                repeat: Infinity,
            }}
        >
            <div
                style={{
                    width: "140%",
                    height: "140%",
                    position: "absolute",
                    bottom: "-20%",
                    right: "-20%",
                    background: gradient,
                    borderTopLeftRadius: "55% 45%",
                    borderTopRightRadius: "45% 55%",
                    borderBottomLeftRadius: "60% 40%",
                    borderBottomRightRadius: "40% 60%",
                }}
            />
        </motion.div>
    );
}

export default function AnimatedBlobBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden">

            {/* BACK SURFACE (slow heavy) */}
            <FloatingLayer
                depth={0.4}
                speed={45}
                gradient="linear-gradient(135deg, #60a5fa 0%, #3b82f6 35%, #2563eb 70%)"
            />

            {/* MID SURFACE */}
            <FloatingLayer
                depth={0.7}
                speed={35}
                gradient="linear-gradient(135deg, #6366f1 0%, #9333ea 40%, #ec4899 90%)"
            />

            {/* FRONT SURFACE (closer / faster) */}
            <FloatingLayer
                depth={1}
                speed={28}
                gradient="linear-gradient(135deg, #22d3ee 0%, #3b82f6 45%, #6366f1 85%)"
            />

        </div>
    );
}

