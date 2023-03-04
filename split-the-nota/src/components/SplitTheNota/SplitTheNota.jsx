import "./SplitTheNota.css";

const SplitTheNota = () => {
  return (
    <section className="nota">
      <div className="nota__sum-container">
        <label htmlFor="sum">Summa</label>
        <input type="number" id="sum" />
      </div>

      <div className="nota__amount-container">
        <label htmlFor="amount">Antal Vänner</label>
        <input type="number" id="amount" />
      </div>

      <div className="nota__tip-container">
        <label htmlFor="tip">Dricks</label>
        <input type="number" id="tip" />
      </div>

      <button className="nota__calculate-btn">Räkna</button>
      <p className="nota__payment">
        <span>300kr</span> /person varav <span>20kr</span> är dricks
      </p>
    </section>
  );
};

export default SplitTheNota;
