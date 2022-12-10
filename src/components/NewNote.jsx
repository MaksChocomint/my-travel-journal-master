import React, { useEffect, useState } from "react";

function NewNote(props) {
  const [showInput, setShowInput] = useState(false);

  const [noteFormData, setNoteFormData] = useState({
    id: props.journalNotes.length + 1,
    img: "",
    location: "",
    mapLink: "",
    title: "",
    date: "",
    description: "",
  });

  const [noteDateData, setNoteDateData] = useState({
    dateArrive: "",
    dateLeft: "",
  });
  useEffect(() => {
    let yearArrive = noteDateData.dateArrive.split("-")[0];
    let yearLeft = noteDateData.dateLeft.split("-")[0];
    let monthArrive = noteDateData.dateArrive.split("-")[1];
    let monthLeft = noteDateData.dateLeft.split("-")[1];
    let dayArrive = noteDateData.dateArrive.split("-")[2];
    let dayLeft = noteDateData.dateLeft.split("-")[2];
    if (monthArrive === "01") {
      monthArrive = "Jan";
    } else if (monthArrive === "02") {
      monthArrive = "Feb";
    } else if (monthArrive === "03") {
      monthArrive = "Mar";
    } else if (monthArrive === "04") {
      monthArrive = "Apr";
    } else if (monthArrive === "05") {
      monthArrive = "May";
    } else if (monthArrive === "06") {
      monthArrive = "Jun";
    } else if (monthArrive === "07") {
      monthArrive = "Jul";
    } else if (monthArrive === "08") {
      monthArrive = "Aug";
    } else if (monthArrive === "09") {
      monthArrive = "Sep";
    } else if (monthArrive === "10") {
      monthArrive = "Oct";
    } else if (monthArrive === "11") {
      monthArrive = "Nov";
    } else if (monthArrive === "12") {
      monthArrive = "Dec";
    }
    if (monthLeft === "01") {
      monthLeft = "Jan";
    } else if (monthLeft === "02") {
      monthLeft = "Feb";
    } else if (monthLeft === "03") {
      monthLeft = "Mar";
    } else if (monthLeft === "04") {
      monthLeft = "Apr";
    } else if (monthLeft === "05") {
      monthLeft = "May";
    } else if (monthLeft === "06") {
      monthLeft = "Jun";
    } else if (monthLeft === "07") {
      monthLeft = "Jul";
    } else if (monthLeft === "08") {
      monthLeft = "Aug";
    } else if (monthLeft === "09") {
      monthLeft = "Sep";
    } else if (monthLeft === "10") {
      monthLeft = "Oct";
    } else if (monthLeft === "11") {
      monthLeft = "Nov";
    } else if (monthLeft === "12") {
      monthLeft = "Dec";
    }
    setNoteFormData((prevNoteFormData) => {
      return {
        ...prevNoteFormData,
        date: `${dayArrive} ${monthArrive}, ${yearArrive} - ${dayLeft} ${monthLeft}, ${yearLeft}`,
      };
    });
  }, [noteDateData]);

  function noteFormHandleChange(e) {
    setNoteFormData((prevNoteFormData) => {
      return {
        ...prevNoteFormData,
        [e.target.name]: e.target.value,
        id: props.journalNotes.length + 1,
      };
    });
  }

  function noteDateHandleChange(e) {
    setNoteDateData((prevNoteDateData) => {
      return {
        ...prevNoteDateData,
        [e.target.name]: e.target.value,
      };
    });
  }
  return (
    <form className="note__form">
      {!showInput && (
        <button
          className="note__add-btn"
          onClick={() => setShowInput((prevShowInput) => !prevShowInput)}
        >
          Add new note
        </button>
      )}

      {showInput && (
        <input
          onChange={noteFormHandleChange}
          className="note__input"
          placeholder="Where have you been?"
          name="title"
          id="input-title"
          type="text"
        />
      )}
      {showInput && (
        <input
          onChange={noteFormHandleChange}
          className="note__input"
          placeholder="Country"
          name="location"
          id="input-location"
          type="text"
        />
      )}
      {showInput && (
        <input
          onChange={noteFormHandleChange}
          className="note__input"
          placeholder="Google maps link"
          name="mapLink"
          id="input-maplink"
          type="text"
        />
      )}
      {showInput && (
        <div className="dates">
          <div className="dates__arrive">
            <label htmlFor="dateArrive">Date you arrived</label>
            <input
              onChange={noteDateHandleChange}
              className="note__input"
              id="input-date-arrive"
              type="date"
              name="dateArrive"
            />
          </div>
          <div className="dates__left">
            <label htmlFor="dateLeft">Date you left</label>
            <input
              onChange={noteDateHandleChange}
              className="note__input"
              id="input-date-left"
              type="date"
              name="dateLeft"
            />
          </div>
        </div>
      )}
      {showInput && (
        <textarea
          onChange={noteFormHandleChange}
          className="note__textarea"
          placeholder="Your description here"
          id="input-description"
          name="description"
        />
      )}
      {showInput && (
        <input
          onChange={noteFormHandleChange}
          className="note__input"
          id="input-img"
          placeholder="Link for your picture"
          type="text"
          name="img"
        />
      )}
      {showInput && (
        <button
          onClick={() => {
            props.addNewNote(noteFormData);
            setShowInput((prevShowInput) => !prevShowInput);
          }}
          type="button"
          className="note__submit-btn"
        >
          Add
        </button>
      )}
    </form>
  );
}

export default NewNote;
