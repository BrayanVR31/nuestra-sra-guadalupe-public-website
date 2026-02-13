import { Clock4 } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { transformRelativeTime } from "../../../libs/dayjs";

interface AnnouncementProps {
  title: string;
  content: string;
  publishedAt: Date;
  imageURL: string;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.215, 0.61, 0.355, 1] },
  },
};

export default function Announcement({
  title,
  content,
  publishedAt,
  imageURL,
}: AnnouncementProps) {
  const shortDate = new Intl.DateTimeFormat("es-MX", {
    day: "numeric",
    month: "short",
  });
  return (
    <motion.article
      variants={itemVariants}
      className="shadow-md shadow-neutral-300 bg-white font-secondary"
    >
      {/* Card image */}
      <figure className="relative">
        <img src={imageURL} alt={title} />
        <figcaption className="sr-only">{title}</figcaption>
        <div className="w-18 aspect-square bg-primary text-white absolute top-6 right-6 rounded-full flex items-center justify-center">
          <time className="w-0 min-w-min leading-tight text-center font-bold text-sm">
            {shortDate.format(publishedAt)}
          </time>
        </div>
        <span className="absolute bg-primary text-white bottom-0 py-3 px-5 font-bold uppercase text-sm">
          Avisos
        </span>
      </figure>
      {/* Card body */}
      <div className="p-6">
        {/* Content */}
        <div>
          <h5 className="font-bold text-center text-xl text-neutral-800 mb-4">
            {title}
          </h5>
          <p className="text-neutral-700 text-sm/8 text-justify">{content}</p>
        </div>
        {/* Footer */}
        <div className="mt-6">
          <p className="text-sm text-neutral-600 flex items-center gap-2">
            <Clock4 className="w-4" />
            {transformRelativeTime(publishedAt)}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
