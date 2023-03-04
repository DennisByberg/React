import "./SplitTheNota.css";

const SplitTheNota = () => {
  let sum = 0;
  let numberOfFriends = 0;
  let tipPercent = 0;

  function handlePayment() {
    // Parse sum, numberOfFriends & tipPercent from string to number.
    const parsedSum = parseInt(sum);
    const parsedNumberOfFriends = parseInt(numberOfFriends);
    const parsedTipPercent = parseFloat(tipPercent);

    // Divide and round up the result
    const billAmount = Math.ceil(parsedSum / parsedNumberOfFriends);
    // / Multiply and round up the result
    const tipAmount = Math.ceil(billAmount * parsedTipPercent);
    // Add and round up the result
    const total = Math.ceil(billAmount + tipAmount);

    // RESULT:
    console.log(
      `Totalt ska varje person ge ${total}kr där ${billAmount}kr är för middagen och ${tipAmount} är vad varje person ger i dricks.`
    );
  }

  return (
    <section className="nota">
      {/* SUMMA */}
      <div className="nota__sum-container">
        <label htmlFor="sum">Summa</label>
        <input
          onChange={(e) => {
            sum = e.target.value;
          }}
          placeholder="e.g. 1000"
          type="number"
          id="sum"
        />
      </div>

      {/* ANTAL VÄNNER */}
      <div className="nota__amount-container">
        <label htmlFor="amount">Antal Vänner</label>
        <input
          onChange={(e) => {
            numberOfFriends = e.target.value;
          }}
          placeholder="e.g. 4"
          type="number"
          id="amount"
        />
      </div>

      {/* DRICKS */}
      <div className="nota__tip-container">
        <label htmlFor="tip">Dricks i %</label>
        <input
          onChange={(e) => {
            tipPercent = e.target.value;
          }}
          placeholder="e.g. 0.10"
          type="number"
          id="tip"
        />
      </div>

      {/* RÄKNA */}
      <button onClick={handlePayment} className="nota__calculate-btn">
        Räkna
      </button>
    </section>
  );
};

export default SplitTheNota;
