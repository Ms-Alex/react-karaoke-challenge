import React from 'react';
import VoteBar from './VoteBar';
import Lyrics from './Lyrics';

const KaraokeDisplay = (props) => {
  console.log(props)
  return (
    <div className="karaoke-display">
      {
        props.id !== undefined ?
          <VoteBar
            upTitle="Like"
            voteUp={() => {
              props.likeSong(props.id);
            }}
            downTitle="Dislike"
            voteDown={() => {
              props.dislikeSong(props.id);
            }}
          />
        :
          null
      }
      <h2>{props.title}</h2>
      <Lyrics lyrics={props.lyrics} />
    </div>
  )
}

export default KaraokeDisplay;
