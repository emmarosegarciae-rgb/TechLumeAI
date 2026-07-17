type VideoEmbedProps = {
  title: string;
  provider: "youtube" | "mp4";
  url: string;
};

export function VideoEmbed({ title, provider, url }: VideoEmbedProps) {
  if (provider === "mp4") {
    return (
      <video
        className="aspect-video w-full rounded-[var(--radius)] bg-slate-950"
        controls
        preload="metadata"
      >
        <source src={url} type="video/mp4" />
      </video>
    );
  }

  return (
    <iframe
      className="aspect-video w-full rounded-[var(--radius)] bg-slate-950"
      src={url}
      title={title}
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}
