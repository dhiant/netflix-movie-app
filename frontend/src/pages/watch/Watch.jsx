import { AiOutlineArrowLeft } from "react-icons/ai";
import "./watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <AiOutlineArrowLeft />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress="true"
        controls
        src="https://youtu.be/Go8nTmfrQd8"
      />
    </div>
  );
}
