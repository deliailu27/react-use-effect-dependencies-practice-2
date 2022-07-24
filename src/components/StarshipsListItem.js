import { useEffect, useState } from "react";

function StarshipsListItem(props) {
  const { starship } = props;

  const [firstPilot, setFirstPilot] = useState("");

  console.log({ starship });

  useEffect(() => {
    fetch(`${starship.pilots[0]}`)
      .then((res) => {
        return res.ok ? res.json() : "no data";
      })
      .then((data) => setFirstPilot(data.name));
  });

  return (
    <li>
      {starship.name} - First Pilot: {firstPilot}
    </li>
  );
}

export default StarshipsListItem;
