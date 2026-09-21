import "./Loading.css";

function Loading() {
  return (
    <div className="loading">
      <div className="loading-spinner"></div>
      <p>Hämtar recept...</p>
    </div>
  );
}

export default Loading;