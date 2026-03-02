interface YoutubeEmbedProps {
  id: string;
  title?: string;
}

export default function YoutubeEmbed({ id, title }: YoutubeEmbedProps) {
  return (
    <div className="youtube-embed bg-gray-400">
      <iframe
        src={`https://youtube.com/embed/${id}`}
        title={title}
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
