import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { motion, AnimatePresence } from "motion/react";
import type { PropsWithChildren } from "react";

type Size = "sm" | "md" | "lg" | "xl" | "full";

const SIZES: Record<Size, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-2xl",
  full: "max-w-[90vw]",
};

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  size?: Size;
  showClose?: boolean;
}

export default function BaseModal({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
  showClose = true,
}: PropsWithChildren<ModalProps>) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          as={motion.div}
          static
          open={isOpen}
          onClose={onClose}
          className="relative z-50"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Container */}
          <div className="fixed inset-0 flex items-center justify-center p-4">
            {/* Panel */}
            <DialogPanel
              as={motion.div}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { type: "spring", damping: 25, stiffness: 300 },
              }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={`w-full ${SIZES[size]} bg-white rounded-md shadow-2xl overflow-hidden`}
            >
              {/* Header */}
              <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                <DialogTitle className="text-xl font-semibold text-gray-800">
                  {title}
                </DialogTitle>

                {showClose && (
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
              </div>

              {/* Body */}
              <div className="p-6">{children}</div>
            </DialogPanel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
