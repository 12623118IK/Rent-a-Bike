import { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";

export const InfoCar = () => {
    const [car, setCar] = useState<any>(null);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCar = async () => {
            try {
                const response = await fetch(`http://localhost:3000/cars/${id}`);
                const data = await response.json();
                console.log(data[0]);
                setCar(data[0]);
            } catch (error) {
                console.error("Failed to fetch car:", error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchCar();
        }
    }, [id]);


    const handleRent = async () => {
        try {
            const response = await fetch(`http://localhost:3000/cars/${id}/rent`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            //const result = await response.json();
            //console.log(result);
            // Refresh car info
            //setCar(prev => ({ ...prev, is_rented: true }));
            navigate("/cars");
        } catch (error) {
            console.error("Failed to rent car:", error);
        }
    };

    const handleUnrent = async () => {
        try {
            const response = await fetch(`http://localhost:3000/cars/${id}/unrent`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            //const result = await response.json();
            //console.log(result);
            // Refresh car info
            //setCar(prev => ({ ...prev, is_rented: true }));
            navigate("/cars");
        } catch (error) {
            console.error("Failed to rent car:", error);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (!car) return <div>Car not found.</div>;


    return (
        <div className="car-info">
            <h2>{car.manufacturer} {car.model}</h2>
            <p>Price per day: {car.price_per_day} €</p>
            <p>Rating: {car.rating}</p>
            <p>Description: {car.description}</p>
            <p>Active: {car.is_active ? "Yes" : "No"}</p>
            <p>Availability: {car.is_rented ? "Rented" : "Free"}</p>
            {car.image_url && <img src={car.image_url} alt={`${car.manufacturer} ${car.model}`} width="200" height="200"/>}
            {car.is_rented === 0 && (
                <button className="rent-btn" onClick={handleRent}>Rent this car</button>
            )}
            <br/>
            {car.is_rented === 1 && (
                <button className="rent-btn" onClick={handleUnrent}>Unrent this car</button>
            )}
        </div>
    );
};




