// TODO: Remove this file and fetch from API
interface Announcement {
  id: number,
  title: string;
  content: string;
  publishedAt: Date;
  imageURL: string;
}

export const announcements: Announcement[] = [
  {
    id: 1,
    imageURL: "https://images.unsplash.com/photo-1555679432-b7b7a5e3680c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3Jpc3RvJTIwcmV5fGVufDB8fDB8fHww",
    title: "Aviso ejemplo",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere maiores officiis veniam qui nostrum sit minima aspernatur, possimus eius exercitationem hic distinctio, non modi accusantium accusamus corrupti molestias, totam commodi.",
    publishedAt: new Date("2026-01-09T15:00:00")
  },
  {
    id: 2,
    imageURL: "https://images.unsplash.com/photo-1555679432-b7b7a5e3680c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3Jpc3RvJTIwcmV5fGVufDB8fDB8fHww",
    title: "Aviso ejemplo",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere maiores officiis veniam qui nostrum sit minima aspernatur, possimus eius exercitationem hic distinctio, non modi accusantium accusamus corrupti molestias, totam commodi.",
    publishedAt: new Date("2026-01-11T15:00:00")
  },
  {
    id: 3,
    imageURL: "https://images.unsplash.com/photo-1555679432-b7b7a5e3680c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3Jpc3RvJTIwcmV5fGVufDB8fDB8fHww",
    title: "Aviso ejemplo",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere maiores officiis veniam qui nostrum sit minima aspernatur, possimus eius exercitationem hic distinctio, non modi accusantium accusamus corrupti molestias, totam commodi.",
    publishedAt: new Date("2025-01-10T15:00:00")
  },
  {
    id: 4,
    imageURL: "https://images.unsplash.com/photo-1555679432-b7b7a5e3680c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3Jpc3RvJTIwcmV5fGVufDB8fDB8fHww",
    title: "Aviso ejemplo",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere maiores officiis veniam qui nostrum sit minima aspernatur, possimus eius exercitationem hic distinctio, non modi accusantium accusamus corrupti molestias, totam commodi.",
    publishedAt: new Date("2025-12-27T15:00:00")
  },
];