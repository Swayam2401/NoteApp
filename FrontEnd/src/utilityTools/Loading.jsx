import css from "../styles/style.module.css";

function Loading() {
  return (
    <div class={`${css.Loading} d-flex justify-content-center`}>
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
