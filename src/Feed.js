import React from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOptions from "./InputOptions";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ArticleIcon from "@mui/icons-material/Article";
const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>

        {/* input options */}
        <div className="feed__inputOptions">
          <InputOptions Icon={InsertPhotoIcon} color="#70b5f9" title="Photo" />

          <InputOptions Icon={OndemandVideoIcon} color="#7fc15e" title="Video" />

          <InputOptions Icon={EventNoteIcon} color="#e7a33e" title="Event" />

          <InputOptions Icon={ArticleIcon} color="#f29095" title="Write Article" />
        </div>
      </div>
      {/* posts */}
    </div>
  );
};

export default Feed;
