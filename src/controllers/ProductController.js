import Producto from "../models/ProductModel.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Producto.findAll();
    res.json(products);
  } catch (error) {
    res.json({ message: error.message });
  }
};
export const getProductById = async (req, res) => {
  try {
    const [product] = await Producto.findAll({
      where: { id: req.params.id },
    });
    res.json(product);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    await Producto.create(req.body);
    res.json({ message: "Product created" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    await Producto.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ message: "Product updated" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Producto.destroy({ 
        where: { id: req.params.id } 
    });
    res.json({ message: "Product deleted" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
