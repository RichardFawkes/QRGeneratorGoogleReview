import React, { useState } from "react";

interface PlaceResult {
  place_id: string;
  name: string;
  formatted_address: string;
}

export const LocationSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [places, setPlaces] = useState<PlaceResult[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    const apiKey = "AIzaSyClZE5LZVoen_GxpjEP9T2UnfYRL5KJcFA";
    const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchQuery}&key=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          setPlaces(data.results);
        } else {
          setPlaces([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data from Google Places API:", error);
        setPlaces([]);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Enter establishment name or address"
      />
      <button onClick={handleSearch}>Search</button>
      {places.length > 0 && (
        <ul>
          {places.map((place) => (
            <li key={place.place_id}>
              {place.name} - {place.formatted_address}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
