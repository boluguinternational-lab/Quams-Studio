import React from "react";
import "./StatsCard.css";

const stats = [
  { value: "500+", label: "Weddings" },
  { value: "5000+", label: "Photos Delivered" },   
  { value: "10+", label: "Years" },
];

export default function StatsCard() {
  return (
    <div className="stats-card__wrap">
      <div className="stats-card">
        {stats.map((stat, i) => (
          <React.Fragment key={stat.label}>
            <div className="stats-card__col">
              <p className="stats-card__value">{stat.value}</p>
              <p className="stats-card__label">{stat.label}</p>
              <span className="stats-card__rule" aria-hidden="true" />
            </div>
            {i < stats.length - 1 && (
              <div className="stats-card__divider" aria-hidden="true" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}