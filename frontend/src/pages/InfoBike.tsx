import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const InfoBike = () => {
    const [bike, setBike] = useState<any>(null);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBike = async () => {
            try {
                const response = await fetch(`http://localhost:3000/bikes/${id}`);
                const data = await response.json();
                setBike(data[0]);
            } catch (error) {
                console.error("Failed to fetch bike:", error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchBike();
        }
    }, [id]);

    const handleRent = async () => {
        try {
            await fetch(`http://localhost:3000/bikes/${id}/rent`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" }
            });
            navigate("/bikes");
        } catch (error) {
            console.error("Failed to rent bike:", error);
        }
    };

    const handleUnrent = async () => {
        try {
            await fetch(`http://localhost:3000/bikes/${id}/unrent`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" }
            });
            navigate("/bikes");
        } catch (error) {
            console.error("Failed to return bike:", error);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (!bike) return <div>Bike not found.</div>;

    return (
        <div className="bike-info">
            <h2>{bike.manufacturer} {bike.model}</h2>
            <p>Price per day: {bike.price_per_day} €</p>
            <p>Description: {bike.description}</p>
            <p>Active: {bike.is_active ? "Yes" : "No"}</p>
            <p>Availability: {bike.is_rented ? "Rented" : "Free"}</p>
            {bike.image_url && <img src={bike.image_url} alt={`${bike.manufacturer} ${bike.model}`} width="200" height="200" />}
            
            {bike.is_rented === 0 && (
                <button className="rent-btn" onClick={handleRent}>Rent this bike</button>
            )}
            <br />
            {bike.is_rented === 1 && (
                <button className="rent-btn" onClick={handleUnrent}>Return this bike</button>
            )}
        </div>
    );
};