import { useState } from "react";

function Card({ name, title, description, github, skills }) {
  const [showMore, setShowMore] = useState(false);
  const [likes, setLikes] = useState(0);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-72 text-center hover:shadow-xl hover:z-50 hover:scale-110 transition-all duration-200">
      <h3 className="text-xl font-bold text-gray-800">{name}</h3>
      <p className="text-blue-500 font-semibold">{title}</p>
      <p className="text-gray-500 mt-2">{description}</p>

      <button
        onClick={() => setLikes(likes + 1)}
        className="mt-4 flex items-center gap-2 mx-auto bg-gray-100 hover:bg-red-100 px-4 py-2 rounded-full transition-all duration-200"
      >
        ❤️ {likes}
      </button>

      <button
        onClick={() => setShowMore(!showMore)}
        className="block mt-4 text-sm text-blue-500 hover:text-blue-700 font-semibold mx-auto"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>

      {showMore && (
        <div className="mt-4 pt-4 border-t border-gray-200 text-left">
          {github && (
            <p className="text-sm text-gray-600">
              <a href={github} className="text-blue-500 hover:underline" target="_blank" rel="noreferrer">
                GitHub Repo
              </a>
            </p>
          )}
          {skills && <p className="text-sm text-gray-600 mt-2">Skills: {skills}</p>}
        </div>
      )}
    </div>
  );
}

export default Card;
