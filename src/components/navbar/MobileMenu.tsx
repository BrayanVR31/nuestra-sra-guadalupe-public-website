import { Menu } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import { navLinks } from "./navigation-links";

export default function MobileMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);
  useLockBodyScroll(showMenu);
  return (
    <>
      <button onClick={() => setShowMenu(!showMenu)} type="button" className="text-cream-100 p-2 focus:ring-4 focus:ring-gold-400/50 rounded-sm">
        <Menu />
      </button>
      <AnimatePresence>
        {showMenu && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed top-navbar-y flex flex-col bg-ordinario-600 w-full left-0 min-h-menu-y">
            {navLinks.map(({ name, path }) => (
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`p-6 font-secondary text-2xl text-cream-100 text-center ${currentPath === path && "bg-ordinario-500/40 text-gold-400"}`}
                href={path} key={path}>
                {name}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
