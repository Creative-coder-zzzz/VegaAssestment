import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import image from "../assets/Wireframe.jpg";
const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const API_KEY = "48407711-191d71386f9b7e8c44877403d";
  const BASE_URL = "https://pixabay.com/api/";

  const handleSearchButton = async () => {
    setResults([]);

    if (!searchQuery.trim()) {
      alert("Please enter a search term.");
      return;
    }

    try {
      const response = await fetch(
        `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
          searchQuery
        )}&image_type=photo&per_page=20`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch images. Please try again later.");
      }

      const data = await response.json();

      console.log(data, "data");
      if (data.hits.length === 0) {
        alert("No images found.");
        return;
      }

      setResults(data.hits);
    } catch (error) {
      console.error(error);
      alert("An error occurred while fetching images: " + error.message);
    }
  };

  const handleAddCaption = (imageUrl) => {
    const imageData = imageUrl;
    navigate("/add-caption", { state: { imageData } });
  };

  return (
    <section
      className="w-full h-screen text-white bg-cover bg-repeat-round"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="container mx-auto p-4 ">
        <p>Name: Sandesh Adhikari</p>
        <p>Email: sandeshadhikari2003@gmail.com</p>
        <p>Phone: +918927678560</p>

        <div className="flex flex-col justify-center mt-20">
          <h1 className="text-2xl font-bold mb-4">Vega6 Image Searcher</h1>
          <div className="mb-4 flex">
            <input
              type="text"
              value={searchQuery}
              className="border border-gray-300  rounded p-2 w-full text-white"
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for images..."
            />

            <button
              onClick={handleSearchButton}
              className=" text-xl font-extrabold  cursor-pointer text-white rounded  p-2 ml-2 mt-2"
            >
              {" "}
              <CiSearch className="font-extrabold text-3xl" />
            </button>
          </div>

          <div className="w-full h-90 overflow-scroll overflow-x-hidden scroll">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {results.map((hit) => (
                <div
                  key={hit.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src={hit.webformatURL}
                    alt={hit.tags}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold">
                      {hit.tags.split(",")[0]}
                    </h2>
                    <button
                      onClick={() => handleAddCaption(hit.webformatURL)}
                      className="bg-black text-white rounded p-2  cursor-pointer mt-2"
                    >
                      Add Caption
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
