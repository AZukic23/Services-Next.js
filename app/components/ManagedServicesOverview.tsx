import React from "react";

interface ManagedService {
    key: string;
    name: string;
    description: string;
}

interface ManagedServicesOverviewProps {
    services: ManagedService[];
    onSelect: (key: string) => void; // Wird aufgerufen, wenn eine Card geklickt wird
}

export const ManagedServicesOverview: React.FC<ManagedServicesOverviewProps> = ({
                                                                                    services,
                                                                                    onSelect,
                                                                                }) => (
    <div className="card-grid">
        {services.map((service) => (
            <div
                key={service.key}
                className="card"
                onClick={() => onSelect(service.key)}
                style={{ cursor: "pointer" }}
            >
                <h3>{service.name}</h3>
                <p>{service.description}</p>
            </div>
        ))}
        <style jsx>{`
      .card-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;
      }
      .card {
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 1.2rem 1rem;
        width: 220px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        transition: box-shadow 0.2s;
      }
      .card:hover {
        box-shadow: 0 4px 16px rgba(0,0,0,0.08);
      }
      h3 {
        margin: 0 0 0.5rem 0;
      }
    `}</style>
    </div>
);