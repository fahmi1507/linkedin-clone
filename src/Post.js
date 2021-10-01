import { Avatar } from "@mui/material";
import React from "react";
import InputOptions from "./InputOptions";
import "./Post.css";
// icons
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";

import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
const Post = ({ name, desc, msg, imgUrl }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{desc}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{msg}</p>
      </div>

      <div className="post__buttons">
        <InputOptions Icon={ThumbUpAltOutlinedIcon} color="#666" title="Like" />
        <InputOptions Icon={CommentOutlinedIcon} color="#666" title="Comment" />
        <InputOptions Icon={ShareOutlinedIcon} color="#666" title="Share" />
        <InputOptions Icon={SendOutlinedIcon} color="#666" title="Send" />
      </div>
    </div>
  );
};

export default Post;
