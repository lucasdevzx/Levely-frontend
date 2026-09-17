import { useLocation } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';
import { useRef } from 'react';
import AnimatedOutlet from "@/components/layout/AnimatedOutlet.jsx";
import Footer from "@/components/layout/Footer/Footer.jsx";

const TAB_ROUTES = ["/", "/profile", "/week", "/social", "/library"];

function PrincipalLayout() {
    const location = useLocation();
    const lastTabPath = useRef(location.pathname);

    if (TAB_ROUTES.includes(location.pathname)) {
        lastTabPath.current = location.pathname;
    }

    return (
        <div className="flex flex-col flex-1 w-full h-full items-center">
                <motion.main
                    key={lastTabPath.current}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="flex-1 w-full"
                >
                    <AnimatedOutlet />
                </motion.main>
            <Footer />
        </div>
    )
}

export default PrincipalLayout