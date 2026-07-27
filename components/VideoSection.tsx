"use client";

import { useEffect, useState } from "react";
import { getDefaultSiteContent, loadSiteContent } from "@/src/lib/site-content";

function getYouTubeEmbedUrl(url: string) {
  if (!url) return "";

  const trimmed = url.trim();
  const watchMatch = trimmed.match(/[?&]v=([A-Za-z0-9_-]{11})/);
  if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}`;

  const shortMatch = trimmed.match(/youtu\.be\/([A-Za-z0-9_-]{11})/);
  if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`;

  return trimmed;
}

export default function VideoSection() {
  const [videos, setVideos] = useState(getDefaultSiteContent().videos);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const content = loadSiteContent();
    setVideos(content.videos);
    setActiveIndex(0);
  }, []);

  const activeVideo = videos[activeIndex];
  const embedUrl = activeVideo ? getYouTubeEmbedUrl(activeVideo.youtubeUrl) : "";

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % videos.length);
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-amber-900">Videos / ವೀಡಿಯೊಗಳು</h2>
          <p className="mt-2 text-sm text-gray-600">Browse through the videos with the controls below.</p>
        </div>
      </div>

      {videos.length ? (
        <>
          <div className="flex items-center justify-between gap-3">
            <button onClick={goToPrevious} className="rounded-full border border-amber-200 bg-white px-4 py-2 text-lg font-semibold text-amber-800 shadow-sm">
              ←
            </button>
            <div className="flex-1 overflow-hidden rounded-3xl border border-amber-100 bg-white shadow-sm">
              {embedUrl ? (
                <iframe
                  src={embedUrl}
                  title={activeVideo?.titleEnglish || "Video"}
                  className="aspect-video w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="flex aspect-video items-center justify-center bg-stone-100 p-6 text-center text-gray-600">
                  <div>
                    <p className="font-semibold text-amber-900">No embed URL available yet.</p>
                    <a href={activeVideo?.youtubeUrl} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm font-semibold text-amber-700">
                      Open video link
                    </a>
                  </div>
                </div>
              )}
            </div>
            <button onClick={goToNext} className="rounded-full border border-amber-200 bg-white px-4 py-2 text-lg font-semibold text-amber-800 shadow-sm">
              →
            </button>
          </div>

          <div className="flex justify-center gap-2">
            {videos.map((video, index) => (
              <button
                key={`${video.youtubeUrl}-${index}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 w-2.5 rounded-full ${activeIndex === index ? "bg-amber-700" : "bg-amber-200"}`}
                aria-label={`Show video ${index + 1}`}
              />
            ))}
          </div>

          <div className="rounded-2xl border border-amber-100 bg-amber-50/50 p-5">
            <h3 className="text-lg font-semibold text-amber-900">{activeVideo?.titleKannada}</h3>
            <p className="mt-1 text-sm text-gray-600">{activeVideo?.titleEnglish}</p>
          </div>
        </>
      ) : (
        <div className="rounded-3xl border border-dashed border-amber-200 bg-white p-10 text-center text-gray-600">
          Add video links from the admin panel to display them here.
        </div>
      )}
    </div>
  );
}
