import { useEffect, useState } from "react";

function PlanetsListItem(props) {
  const { planet } = props;

  const [firstFilm, setFirstFilm] = useState("");

  console.log("Planet", planet);

  useEffect(() => {
    fetch(`${planet.films}`)
      .then((res) => res.json())
      .then((data) => setFirstFilm(data.title));
  });

  return (
    <li>
      {planet.name} - First Film: {firstFilm}
    </li>
  );
}

export default PlanetsListItem;
