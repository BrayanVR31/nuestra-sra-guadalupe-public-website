import ReactPlayer from 'react-player';
import useStreamVideos from "../hooks/useStreamVideos";

export default function TodayVideo() {
	const { isLoading, videoPreview, isError } = useStreamVideos();
	if (isLoading) return (
		<div className="aspect-video w-full animate-pulse bg-gray-200 rounded-xl" />
	);
	if (isError) return (
		<div className="aspect-video w-full flex items-center justify-center bg-gray-100 rounded-xl">
			<p className="text-gray-500 text-sm">No se pudo cargar el video</p>
		</div>
	);
	return <ReactPlayer className="aspect-video" src={videoPreview?.url} loop controls width="100%" height="100%" />
}
