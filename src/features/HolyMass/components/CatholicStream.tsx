import { Calendars, Eye } from "lucide-react";
import YoutubeEmbed from "@/components/common/YouTubeEmbed";
import useStreamVideos from "../hooks/useStreamVideos";
import dayjs from "@/libs/dayjs";
import PlaylistModal from "./PlaylistModal";

export default function CatholicStream() {
  const { data, isLoading, isSuccess, isError } = useStreamVideos();
  if (!isError && isSuccess && data)
    return (
      <div className="bg-white rounded-lg border border-slate-300/80 shadow-md flex flex-col overflow-hidden">
        <div>
          <YoutubeEmbed
            id={data.playlist[0].videoId}
            title={data.playlist[0].title}
          />
        </div>
        <div className="px-5 md:px-14 py-8">
          <h4 className="font-semibold text-2xl text-neutral-800 mb-8 text-center md:text-start">
            {data.playlist[0].title}
          </h4>
          <div className="flex justify-between text-amber-700 text-xs md:flex-row gap-4">
            <span className="inline-flex w-max items-center gap-2 *:w-5 px-4 py-2 bg-amber-100 rounded-3xl">
              <Calendars />
              {dayjs(data.playlist[0].publishedAt).format(
                "D [de] MMMM [de] YYYY",
              )}
            </span>
            <div className="inline-flex w-max items-center bg-sky-100 px-4 py-2 text-blue-700 rounded-3xl md:gap-0 gap-2">
              <Eye className="w-5 md:mr-2" />
              {data.playlist[0].totalViews}
              <p className="md:ml-1">
                <span className="md:block hidden">vistas</span>
              </p>
            </div>
          </div>
          <PlaylistModal playlist={data.playlist} />
        </div>
      </div>
    );
  return null;
}
