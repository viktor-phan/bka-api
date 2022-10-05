import express from "express";
import productRoutes from "./productRoutes.js";

export default (app) => {
  app.use(productRoutes);
};
