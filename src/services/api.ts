import axios from "axios";
import { Product, Stock } from "../types";

export const api = axios.create({
  baseURL: "http://localhost:3333",
});

export const getProduct = async (productId: number) => {
  const { data: product } = await api.get<Product>(`/products/${productId}`);
  return product;
};

export const getProducts = async () => {
  const { data: products } = await api.get<Product[]>("/products");
  return products;
};

export const getProductStock = async (productId: number) => {
  const { data: stock } = await api.get<Stock>(`/stock/${productId}`);
  return stock;
};
