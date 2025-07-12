export default function FloatingCircles() {
  return (
    <div className="floating-elements">
      <div
        className="floating-circle"
        style={{
          width: "100px",
          height: "100px",
          top: "10%",
          left: "10%",
          animationDelay: "0s",
        }}
      ></div>
      <div
        className="floating-circle"
        style={{
          width: "150px",
          height: "150px",
          top: "20%",
          right: "15%",
          animationDelay: "2s",
        }}
      ></div>
      <div
        className="floating-circle"
        style={{
          width: "80px",
          height: "80px",
          bottom: "30%",
          left: "20%",
          animationDelay: "4s",
        }}
      ></div>
      <div
        className="floating-circle"
        style={{
          width: "120px",
          height: "120px",
          bottom: "20%",
          right: "10%",
          animationDelay: "1s",
        }}
      ></div>
    </div>
  );
}
