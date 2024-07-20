import { Link } from "react-router-dom";
import css from "../styles/style.module.css";
import { FaUserCircle } from "react-icons/fa";
import { UserContext } from "../Helpers/store";
import { useContext, useRef, useState } from "react";
import Modal from "react-modal";
import AddEditNote from "./AddEditNote";
import { executeSearch } from "../Helpers/Fetch";

function NavBar() {
  const { user, setNotes, setLoading } = useContext(UserContext);
  const [isOpen, setModal] = useState(false);
  const searchQuery = useRef("");

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const fetchedNotes = await executeSearch(
        user._id,
        searchQuery.current.value
      );
      setNotes(fetchedNotes);
      setLoading(false);
      return;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav className={`${css.NavBar} navbar bg-body-tertiary`}>
        <div className={`${css.NavBar} container-fluid`}>
          <h3 className={css.NavTitle}>NOTES</h3>

          <form
            className="d-flex"
            role="search"
            onSubmit={(event) => handleSearch(event)}
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Note"
              ref={searchQuery}
              aria-label="Search"
              onChange={(event) => handleSearch(event)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <button
            type="button"
            className={`${css.AddButton} btn btn-outline-primary`}
            onClick={() => setModal(true)}
          >
            Add note
          </button>
          <div className={css.UserName}>
            <FaUserCircle className={css.UserIcon} values={user.username} />
            <p className={css.UserId}>{user.username}</p>
            <Link className={css.NavLink} to="/">
              logout
            </Link>
          </div>
        </div>
      </nav>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setModal(false)}
        style={{
          overlay: {},
        }}
        ariaHideApp={false}
        className={css.AddNoteContainer}
      >
        <AddEditNote
          closeModal={setModal}
          name={"ADD"}
          note={{ title: "", description: "", tags: [] }}
        />
      </Modal>
    </>
  );
}

export default NavBar;
