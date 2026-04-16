import {Request, Response, Router} from "express";
import {BikeController} from "../controllers";

const bikeController = new BikeController();
export const bikeRoutes = Router();

bikeRoutes.get("/bikes", async (req: Request, res: Response) => {
    res.send(await bikeController.getAllBikes());
})
bikeRoutes.get("/bikes/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(await bikeController.getBikeById(id));
})
bikeRoutes.post("/bikes", async (req: Request, res: Response) => {
    const data = req.body;
    res.send(await bikeController.createBike(data));
})
bikeRoutes.put("/bikes/:id/edit", async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;
    res.send(await bikeController.updateBike(id, data));
})
bikeRoutes.delete("/bikes/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(await bikeController.deleteBike(id));
})
bikeRoutes.patch("/bikes/:id/rent", async (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(await bikeController.rentBike(id));
})
bikeRoutes.patch("/bikes/:id/unrent", async (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(await bikeController.unrentBike(id));
})