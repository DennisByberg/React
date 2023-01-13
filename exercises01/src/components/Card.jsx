const Card = () => {
  return (
    <div className="card">
      <div className="photo-and-available-container">
        <label>Sold Out</label>
        <img
          src="../src/assets/katie-zaferes.png"
          alt="picture of katie zaferes"
        />
      </div>
      <section>
        <aside>
          <img src="../src/assets/star.png" alt="picture of a star" />
          <p>
            5.0 <span className="rating">(6) &bull; USA</span>
          </p>
        </aside>
        <p>Life lessons with Katie Zaferes</p>
        <p>
          <strong>From $136 /</strong> person
        </p>
      </section>
    </div>
  );
};

export default Card;
