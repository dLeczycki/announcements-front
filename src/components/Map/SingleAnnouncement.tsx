import { useEffect, useState } from "react";
import { AnnouncementEntity } from "types";

interface Props{
  id: string;
}

export const SingleAnnouncement = (props: Props) => {
  const [announcement, setAnnouncement] = useState<AnnouncementEntity | null>(null);

  useEffect(() => {

    (async () => {
      const res = await fetch(`http://localhost:3001/announcement/${props.id}`);
      const announcement = await res.json();
      setAnnouncement(announcement);
    })();

  }, []);

  if(announcement === null){
    return <p>Loading..</p>
  }

  return (
    <>
      <h2>{announcement.name}</h2>
      <p>{announcement.description}</p>
      {!!announcement.price && <p><b>{announcement.price.toFixed(2)} PLN</b></p>}
      <hr />
      <a href={announcement.url} target="_blank" rel="noreferrer">Open announcement</a>
    </>
  )
}