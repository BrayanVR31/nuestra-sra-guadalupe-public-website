import { announcements } from "./announcement";
import GridCard from "../../common/GridCards";
import Announcement from "./Announcement";

export default function AnnouncementList() {
  return (
    <GridCard
      templateCols="repeat(auto-fill, minmax(300px, 1fr))"
    >
      {
        announcements.map((announcement) => (
          <Announcement key={announcement.id}  {...announcement} />
        ))
      }
    </GridCard>
  );
}