import React, { Component } from "react";
import "./Stats.scss";

class Stats extends Component {
    // find a way to store state (redux?) - including
    // health
    // weapon

    // also: initialStats
    constructor(props) {
        super(props);
        this.tempStats = [
            {
                statName: "Health",
                statValue: 100
            },
            {
                statName: "Weapon",
                statValue: "Stick"
            },
            {
                statName: "Attack",
                statValue: 100
            },
            {
                statName: "Level",
                statValue: 0
            },
            {
                statName: "Next Level",
                statValue: "100XP"
            },
            {
                statName: "Dungeon",
                statValue: 0
            }
        ];
    }

    // should receive props from redux?
    // Stats
    render() {
        return (
            <div className="Stats-container">
                <p>Stats</p>
                {this.tempStats.forEach(stat => {
                    return (
                        <div className="Stats__item">
                            <div className="Stats__name">
                                Ha: {stat.statName}
                            </div>
                            <div className="Stats__value">
                                Ha: {stat.statValue}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Stats;
