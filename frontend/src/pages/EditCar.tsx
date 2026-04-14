import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const EditCar = () => {
    const { id } = useParams();
    const [car, setCar] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCar = async () => {
            try {
                const response = await fetch(`http://localhost:3000/cars/${id}`);
                const data = await response.json();
                setCar(data[0]);
            } catch (error) {
                console.error("Failed to fetch car:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCar();
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCar((prev: any) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await fetch(`http://localhost:3000/cars/${id}/edit`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(car),
            });
            navigate("/cars");
        } catch (error) {
            console.error("Failed to update car:", error);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (!car) return <div>Car not found</div>;

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit Car</h2>
            <input type="text" name="manufacturer" value={car.manufacturer} onChange={handleChange} placeholder="Manufacturer" />
            <input type="text" name="model" value={car.model} onChange={handleChange} placeholder="Model" />
            <input type="number" name="price_per_day" value={car.price_per_day} onChange={handleChange} placeholder="Price per day" />
            <input type="number" step="0.1" name="rating" value={car.rating} onChange={handleChange} placeholder="Rating" />
            <input type="text" name="image_url" value={car.image_url} onChange={handleChange} placeholder="Image URL" />
            <input type="text" name="description" value={car.description} onChange={handleChange} placeholder="Description" />
            <button type="submit">Save Changes</button>
        </form>
    );
};