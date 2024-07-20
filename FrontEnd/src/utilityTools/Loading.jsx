import css from "../styles/style.module.css";

function Loading() {
  return (
    <div className={`${css.Loading} d-flex justify-content-center`}>
      <div
        className="spinner-border"
        role="status"
        style={{ width: "4rem", height: "4rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
