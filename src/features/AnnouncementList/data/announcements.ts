// TODO: Remove this file and fetch from API
import announcementSampleImage from "@/assets/images/announcement_sample.jpg";
import type { Announcement } from "../types/announcement.type";

const isExperimental = true;

export const announcements: Announcement[] = !isExperimental
  ? [
      {
        id: 1,
        image: announcementSampleImage,
        title: "Aviso ejemplo",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere maiores officiis veniam qui nostrum sit minima aspernatur, possimus eius exercitationem hic distinctio, non modi accusantium accusamus corrupti molestias, totam commodi.",
        publishedAt: new Date("2026-01-09T15:00:00"),
      },
      {
        id: 2,
        image: announcementSampleImage,
        title: "Aviso ejemplo",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere maiores officiis veniam qui nostrum sit minima aspernatur, possimus eius exercitationem hic distinctio, non modi accusantium accusamus corrupti molestias, totam commodi.",
        publishedAt: new Date("2026-01-11T15:00:00"),
      },
      {
        id: 3,
        image: announcementSampleImage,
        title: "Aviso ejemplo",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere maiores officiis veniam qui nostrum sit minima aspernatur, possimus eius exercitationem hic distinctio, non modi accusantium accusamus corrupti molestias, totam commodi.",
        publishedAt: new Date("2025-01-10T15:00:00"),
      },
      {
        id: 4,
        image: announcementSampleImage,
        title: "Aviso ejemplo",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere maiores officiis veniam qui nostrum sit minima aspernatur, possimus eius exercitationem hic distinctio, non modi accusantium accusamus corrupti molestias, totam commodi.",
        publishedAt: new Date("2025-12-27T15:00:00"),
      },
    ]
  : [];
