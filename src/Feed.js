import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOptions from "./InputOptions";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ArticleIcon from "@mui/icons-material/Article";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  console.log(posts);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: "Mike",
      description: "this is description",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" />
            <button onClick={sendPost} type="submit">
              Send
            </button>
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

      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post key={id} name={name} imgUrl={photoUrl} msg={message} desc={description} />
      ))}
    </div>
  );
};

export default Feed;
