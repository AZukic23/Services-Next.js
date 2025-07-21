import React from "react";

interface ManagedService {
    key: string;
    name: string;
    description: string;
}

interface ManagedServicesOverviewProps {
    services: ManagedService[];
    onSelect: (key: string) => void;
}

export const ManagedServicesOverview: React.FC<ManagedServicesOverviewProps> = ({
                                                                                    services,
                                                                                    onSelect,
                                                                                }) => (
    <div className="card-column">
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
            .card-column {
                display: flex;
                flex-direction: column;
                gap: 2rem;
                align-items: center;
                width: 100%;
            }
            .card {
                background: #fff;
                border: 1px solid #ddd;
                border-radius: 12px;
                padding: 2rem 2.5rem;
                width: 100%;
                max-width: 700px;
                box-shadow: 0 2px 12px rgba(0,0,0,0.07);
                transition: box-shadow 0.2s, transform 0.2s;
                margin: 0 auto;
            }
            .card:hover {
                box-shadow: 0 6px 20px rgba(0,0,0,0.11);
                transform: scale(1.01);
            }
            h3 {
                margin: 0 0 0.8rem 0;
                font-size: 1.5rem;
                color: #18181b; /* Noch dunkler als Standard */
            }
            p {
                margin: 0;
                color: #18181b; /* Hier Farbe anpassen: #222, #18181b oder #000 für ganz dunkel */
                font-size: 1.1rem;
            }
        `}</style>
    </div>
);