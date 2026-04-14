import {Request, Response, Router} from "express";
import {CarController} from "../controllers";

const carController = new CarController();
export const carRoutes = Router();

carRoutes.get("/cars", async (req: Request, res: Response) => {
    res.send(await carController.getAllCars());
})
carRoutes.get("/cars/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(await carController.getCarById(id));
})
carRoutes.post("/cars", async (req: Request, res: Response) => {
    const data = req.body;
    res.send(await carController.createCar(data));
})
carRoutes.put("/cars/:id/edit", (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;
    res.send(carController.updateCar(id, data));
})
carRoutes.delete("/cars/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(await carController.deleteCar(id));
})
carRoutes.patch("/cars/:id/rent", async (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(await carController.rentCar(id));
})
carRoutes.patch("/cars/:id/unrent", async (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(await carController.unrentCar(id));
})
