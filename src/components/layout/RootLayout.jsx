import { useLocation, useNavigationType } from "react-router"
import { AnimatePresence, motion } from "motion/react"
import AnimatedOutlet from "@/components/layout/AnimatedOutlet.jsx"

const TAB_ROUTES = ["/", "/profile", "/week", "/social", "/library"]

const variants = {
    initial: (direction) => ({
        opacity: 0,
        x: direction === "back" ? "-100%" : "100%",
    }),
    animate: {
        opacity: 1,
        x: 0,
    },
    exit: (direction) => ({
        opacity: 0,
        x: direction === "back" ? "100%" : "-100%",
    }),
}

function RootLayout() {
    const location = useLocation()
    const navigationType = useNavigationType()
    const direction = navigationType === "POP" ? "back" : "forward"

    const groupKey = TAB_ROUTES.includes(location.pathname)
        ? "app"
        : location.pathname

    return (
            <motion.div
                key={groupKey}
                custom={direction}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full h-full flex flex-col flex-1"
            >
                <AnimatedOutlet />
            </motion.div>
    )
}

export default RootLayout