import type { PropsWithChildren } from "react";
import { AnimatePresence, motion } from "motion/react";
import useKeypress from "../hooks/useKeypress";
import useLockBodyScroll from "../hooks/useLockBodyScroll";

interface Props {
  onCloseModal: () => void;
  modalStatus: boolean; // open or close
  showCloseBtn?: boolean;
  onOutClose: () => void;
};

// TODO: Fix click outside (doesn't work on close) on width size using problematic container
export default function Modal({ onCloseModal, children, modalStatus, showCloseBtn = false, onOutClose }: PropsWithChildren<Props>) {
  useKeypress("Escape", () => {
    if (modalStatus) onCloseModal();
  })
  useLockBodyScroll(modalStatus);
  return (
    <AnimatePresence>
      {modalStatus && (
        <motion.div onClick={onOutClose} initial={{ opacity: 0, backdropFilter: "blur(0px)" }} exit={{ opacity: 0, backdropFilter: "blur(0px)" }} animate={{ opacity: 1, backdropFilter: "blur(10px)" }} className="fixed z-1000 bg-neutral-950/65  inset-0 grid items-center">
          {/** Problematic container is down here */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <motion.div initial={{ opacity: 0, scale: 0.2, x: "5%", y: "-5%" }} animate={{ opacity: 1, scale: 1, x: "0", y: "0" }} exit={{ opacity: 0, scale: 0.2, x: "5%", y: "-5%" }} className="bg-white h-96 max-h-full max-w-5xl mx-auto relative flex">
              {showCloseBtn && <button onClick={onCloseModal}>Close modal</button>}
              {children}
            </motion.div>
          </div>
        </motion.div>
      )
      }
    </AnimatePresence>
  );
}