export default function ScrollIndicator({ hidden }) {
  return (
    <div className={`scroll-indicator enhanced${hidden ? " hidden" : ""}`}>
      Scroll down to continue
      <span className="scroll-arrow">↓</span>
    </div>
  );
}
