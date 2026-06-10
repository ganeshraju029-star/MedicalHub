export default function InfoModal({ activeInfo, onClose }) {
  if (!activeInfo) return null;

  return (
    <div className="info-modal-overlay" onClick={onClose}>
      <div className="info-modal" onClick={(e) => e.stopPropagation()}>
        <button className="info-close" onClick={onClose}>
          ×
        </button>

        <span>{activeInfo.tag}</span>
        <h2>{activeInfo.title}</h2>
        <p>{activeInfo.description}</p>

        {activeInfo.items && (
          <ul>
            {activeInfo.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}

        <button className="popup-book-btn">Book Appointment</button>
      </div>
    </div>
  );
}