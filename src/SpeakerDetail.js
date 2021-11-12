import React from 'react';
import ImageToggleOnScroll from './ImageToggleOnScroll';

const SpeakerDetail = React.memo(
  ({ speakerRecord, onHeartFavoriteHandler }) => {
    console.log(`SpeakerDetail:${id} ${firstName} ${lastName} ${favorite}`);
    const { id, firstName, lastName, bio, favorite } = speakerRecord;
    return (
      <div className="card col-4 cardmin">
        <ImageToggleOnScroll
          className="card-img-top"
          primaryImg={`/static/speakers/bw/Speaker-${id}.jpg`}
          secondaryImg={`/static/speakers/Speaker-${id}.jpg`}
          alt="{firstName} {lastName}"
        />
        <div className="card-body">
          <h4 className="card-title">
            <button
              className={favorite ? 'heartredbutton' : 'heartdarkbutton'}
              onClick={(e) => {
                onHeartFavoriteHandler(e, speakerRecord);
              }}
            />
            <span>
              {firstName} {lastName}
            </span>
          </h4>

          <span>{bio}</span>
        </div>
      </div>
    );
  },
);

export default SpeakerDetail;
