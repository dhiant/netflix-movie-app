import { AiOutlineArrowLeft } from "react-icons/ai";
import "./watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <AiOutlineArrowLeft />
        Home
      </div>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/Go8nTmfrQd8"
        title="Thor: Love and Thunder"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
