import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";


export const CarsOverview = () => {
    const [cars, setCars] = useState <any[]>([]);
    const navigate = useNavigate();


    const getCars = async() => {
        try {
            const result = await fetch('http://localhost:3000/cars');
            const data = await result.json();
            setCars(data);
        } catch (error) {
            console.error("Failed to fetch cars:", error);
        }
    };


    useEffect(() => {
        getCars();
        }, []);

    const handleDelete = async (id: number) => {
        if (!window.confirm("Are you sure you want to delete this car?")) return;

        try {
            const response = await fetch(`http://localhost:3000/cars/${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                getCars();
            } else {
                console.error("Failed to delete car");
            }
        } catch (error) {
            console.error("Error while deleting car:", error);
        }
    };


    return (

    <div className="cars-grid">
        {cars
            .filter(car => car.is_active)
            .map((car, index) => (
            <div className="car-card" key={index}>
                <img src={car.image_url} alt={`${car.manufacturer} ${car.model}`}/>
                <div className="car-details">
                    <h3>{car.manufacturer} {car.model}</h3>
                    <p className="price">from {car.price_per_day} €</p>
                    <p>Availability: {car.is_rented ? "Rented" : "Free"}</p>
                    <button type={"submit"} onClick={() => navigate(`/cars/${car.id}`)}>Info</button>
                    <button type={"submit"} onClick={() => navigate(`/cars/${car.id}/edit`)}>Edit</button>
                    <button type={"submit"} onClick={() => handleDelete(car.id)}>Delete</button>
                </div>
            </div>
        ))}
    </div>

    );
}