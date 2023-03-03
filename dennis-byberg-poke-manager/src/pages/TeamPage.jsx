import classes from "./TeamPage.module.css";

const TeamPage = ({ changeName, deleteFromTeam, team }) => {
  return (
    <div className={classes.teampage}>
      <h1 className={classes.team}>TEAM</h1>
      <ul className={classes.teamunsortedlist}>
        {team.map((t) => (
          <li className={classes.teamlist} key={t.name}>
            {t.name}
            <button
              onClick={() => deleteFromTeam(t.name)}
              className={classes.deletebutton}
            >
              x
            </button>
            <button
              onClick={() => changeName(t.name)}
              className={classes.changenamebutton}
            >
              Change Name
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamPage;

// Saknas enligt mig:

// Här finns det mycket som saknas och som jag inte hann med, tex mer än ett lag hade jag velat ha.

// Samma som i search komponenten, bild på pokemonen och vad det är för pokemon saknas.

// Lite snyggare css på denna sidan hade behövts!
