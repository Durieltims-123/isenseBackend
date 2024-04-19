import prisma from "../lib/prisma.js";

export const updateLastReading = async (req, res) => {
    const id = req.params.id;
    try {
        const lastReading = await prisma.lastReading.update({
            where: {
              sensorId: id,
            },
            data: {
              smokeLevel: req.body.smokeLevel, 
            },
          });
          res.status(200).json(lastReading);
    } catch (error) {
        console.log(err);
    res.status(500).json({ message: "Failed to update Reading!" });
    }
};
