import React from "react";

function JournalNote(props) {
  return (
    <div className="journal__note">
      {props.img.includes("http") && (
        <img src={props.img} alt="journal view" className="journal__img" />
      )}
      {!props.img.includes("http") && (
        <img
          src={require(`../images/${props.img}`)}
          alt="journal view"
          className="journal__img"
        />
      )}
      <div
        className="journal__delete"
        onClick={(event) => props.deleteNote(event, props.id)}
      >
        <i className="ri-delete-bin-fill"></i>
      </div>
      <div className="journal__info">
        <div className="journal__location">
          <div className="journal__location-icon">
            <i className="ri-map-pin-2-fill"></i>
          </div>
          <h3 className="journal__country">{props.location}</h3>
          <a href={props.mapLink} className="journal__link">
            View on Google Maps
          </a>
        </div>
        <h1 className="journal__title">{props.title}</h1>
        <h4 className="journal__date">{props.date}</h4>
        <p className="journal__description">{props.description}</p>
      </div>
    </div>
  );
}

export default JournalNote;
