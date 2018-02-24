//@flow

import React from 'react';
import ReactDOM from 'react-dom';

// import App from "./components/Header";

//$FlowFixMe
import "./style.scss";


function formatDate(date: Date) {
  return date.toLocaleDateString();
}

type AvatarProps = {|
  author: AuthorType,
|};

function Avatar(props: AvatarProps) {
  return (
    <img
      className="Avatar"
      src={props.author.avatarUrl}
      alt={props.author.name}
    />
  );
}

type UserInfoProps = {|
  author: AuthorType,
|};

function UserInfo(props: UserInfoProps) {
  return (
    <div className="UserInfo">
      <Avatar author={props.author} />
      <div className="UserInfo-name">{props.author.name}</div>
    </div>
  );
}

type AuthorType = {|
  name: string,
  avatarUrl: string,
|};

type CommentType = {|
  date: Date,
  text: string,
  author: AuthorType,
|};

function Comment(props: CommentType) {
  return (
    <div className="Comment">
      <UserInfo author={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64',
  },
};

const root = document.getElementById('root');

if (root) {
  ReactDOM.render(
    <Comment
      date={comment.date}
      text={comment.text}
      author={comment.author}
    />,
    root    
  );
}