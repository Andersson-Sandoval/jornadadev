import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@Paulo teste</h3>
        <p>video description</p>
        <div className="videoFooter__music">
          <MusicNoteIcon  className="videoFooter__icon" />
         <div className="videoFooterMusic__text">
          <p>music title</p>
          </div>
        </div>
      </div>
      <img
        className="videofooter__record"
        alt="imagem de um vinil girando"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"
      />
    </div>
  );
}

export default VideoFooter;
