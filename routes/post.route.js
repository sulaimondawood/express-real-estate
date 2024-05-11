import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("Post router");
});

router.post("/", (req, res) => {
  console.log("Create post router");
});

router.put("/:id", (req, res) => {
  console.log("Edit a post router");
});

router.delete("/:id", (req, res) => {
  console.log("Delete post router");
});

export default router;
