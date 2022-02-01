/**
 * Given a list of teams, we need to expose the teams in different ways:
 * - Criteria 1: depending on the score, order the list from highest to lowest.
 * - Criteria 2: depending on the score, order the list from lowest to highest.
 * - Criteria 3: depending on the player's quantity, show ONLY the teams that has more than 3 players.
 *
 * What you need to implement is:
 * - 3 buttons. Each of them need to execute a criteria.
 * - The list of teams should be updated dynamically depending on the selected filter.
 * - Each team item should display: Team Name / Player’s quantity / Total Score of each team.
 */

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Table from "react-bootstrap/Table";
const TEAMS = [
  {
    name: "Red",
    players: ["Robin", "Rey", "Roger", "Richard"],
    games: [
      {
        score: 10,
        city: "LA",
      },
      {
        score: 1,
        city: "NJ",
      },
      {
        score: 3,
        city: "NY",
      },
    ],
  },
  {
    name: "Blue",
    players: ["Bob", "Ben"],
    games: [
      {
        score: 6,
        city: "CA",
      },
      {
        score: 3,
        city: "LA",
      },
    ],
  },
  {
    name: "Yellow",
    players: ["Yesmin", "Yuliana", "Yosemite"],
    games: [
      {
        score: 2,
        city: "NY",
      },
      {
        score: 4,
        city: "LA",
      },
      {
        score: 7,
        city: "AK",
      },
    ],
  },
];

export function TeamsList() {
  const [teams, setTeams] = useState(TEAMS);

  //Returns the teams sort by ascending score (lowest to highest)
  function orderScoreLowestToHighest() {
    return [...teams].sort((a, b) =>
      a.games.reduce((accumulator, current) => accumulator + current.score, 0) >
      b.games.reduce((accumulator, current) => accumulator + current.score, 0)
        ? 1
        : -1
    );
  }
  // Order teams by score (highest to lowest)
  function orderTeamByScoreHighestToLowest() {
    const order_teams = orderScoreLowestToHighest().reverse();
    setTeams(order_teams);
  }

  // Order teams by score (lowest to highest)
  function orderTeamByScoreLowestToHighest() {
    const order_teams = orderScoreLowestToHighest();
    setTeams(order_teams);
  }

  // Filtering teams that with at least 3 players
  function teamsWithMoreThanThreePlayers() {
    const filter_teams = [...teams].filter((t) => t.players.length >= 3);
    setTeams(filter_teams);
  }

  return (
    <div>
      <button onClick={() => setTeams(TEAMS)}>Initial list</button>

      <button onClick={() => orderTeamByScoreHighestToLowest()}>
        Highest to Lowest
      </button>
      <button onClick={() => orderTeamByScoreLowestToHighest()}>
        Lowest to Highest
      </button>
      <button onClick={() => teamsWithMoreThanThreePlayers()}>
        Teams with at least 3 players
      </button>

      <div className="teams">
        <Table striped bordered hover size="sm" variant="dark" responsive>
          <thead>
            <tr>
              <th>Team Name</th>
              <th>Player’s quantity</th>
              <th>Total Score</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((t) => (
              <tr key={t.name}>
                <td>{t.name}</td>
                <td>{t.players.length}</td>
                <td>
                  {t.games.reduce(
                    (accumulator, current) => accumulator + current.score,
                    0
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
