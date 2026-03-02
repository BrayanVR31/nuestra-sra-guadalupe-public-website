import { ListVideo } from "lucide-react";
import { useState } from "react";
import type { StreamVideos } from "../types/stream.type";
import Modal from "@/components/common/Modal";
import VideoPreview from "./VideoPreview";

interface PlaylistModalProps extends StreamVideos {}

export default function PlaylistModal({ playlist }: PlaylistModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="text-base bg-ordinario hover:bg-ordinario/80 transition-all duration-300 text-white px-6 py-3 cursor-pointer rounded-sm mt-8 flex items-center gap-2 *:w-4 w-full md:w-auto justify-center"
      >
        <ListVideo />
        Ver todas la misas
      </button>
      <Modal
        size="xl"
        onClose={() => setIsOpen(false)}
        title="Lista de Reproducción de misas"
        isOpen={isOpen}
      >
        <div className="max-h-[70dvh] overflow-auto">
          {playlist.map((video) => (
            <VideoPreview key={video.videoId} {...video} />
          ))}
        </div>
      </Modal>
    </>
  );
}
