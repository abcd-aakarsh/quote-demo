import { img_url } from "../utils/constants";

const MovieCard = ({ card }) => {
  return (
    <>
      <div className="w-full border-2 flex gap-5 p-4 rounded-3xl bg-white text-white bg-gradient-to-l from-gray-800 to-gray-800 ">
        <img src={img_url + card.image} className="w-24 rounded-lg" />
        <div>
          <h3 className="text-xl font-semibold mb-3 text-gray-200 ">
            {card.phrase}
          </h3>
          <h4 className="text-xs font-medium mb-3 text-cyan-500 ">
            -{card.title} ({card.year})
          </h4>
          <h5 className="text-base font-normal mb-3">
            {(card.time / (1000 * 60 * 60)) % 24 > 1
              ? parseInt((card.time / (1000 * 60 * 60)) % 24)
              : "00"}
            :
            {parseInt((card.time / (1000 * 60)) % 60) > 10
              ? parseInt((card.time / (1000 * 60)) % 60)
              : "00"}
            :{parseInt((card.time / 1000) % 60)}
          </h5>
          <div className="flex gap-4">
            <button className="border border-white px-4 py-2 hover:text-gray-300">
              Add to Favourite
            </button>
            <button className="border border-white px-4 py-2 hover:text-gray-300">
              Share
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
