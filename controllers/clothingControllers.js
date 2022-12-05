/* //Unique id
import { v4 as uuidv4 } from "uuid";
*/

const { v4: uuidv4 } = require('uuid');

const clothes = [
  { type: "shirt", color: "red", size: "M" },
  { type: "jeans", color: "blue", size: "L" },
  { type: "socks", color: "white", size: "S" },
];

//          Get clothes
// ROUTE    GET /api/cloth
const getClothes = (req, res) => {
  res.status(200).json({
    data: clothes,
    sucess: true,
    message: "Clothing found"
  }) 
}

//          Get clothes
// ROUTE    GET /api/clothes/:id
const getClothesById = (req, res) => {
  res.status(200).json({
    sucess: true,
    message: "Found clothing"
  })
}


//          POST clothes
// ROUTE    POST /api/clothes/:id
const postClothing = (req, res) => {
  const cloth = req.body;
  clothes.push({  ...cloth, id: uuidv4()})
  res.send({
    sucess: true,
    message:"New clothing added",
  })
  
}
//          PUT clothes
// ROUTE    PUT /api/clothes/:id
const updateClothing = (req, res) => {
  const { id } = req.params;
  const { type, color, size } = req.body;
  const clothingToBeUpdated = clothes.find((cloth) => cloth.id === id);
  if (type) clothingToBeUpdated.type = type;
  if (color) clothingToBeUpdated.color = color;
  if (size) clothingToBeUpdated.size = size;
  res.send({
    sucess: true,
    message:"Clothing updated succesfully",
  })
};

//          Delete
// ROUTE    Delete /api/clothes/:id

const removeClothing = (req,res) => {
  const clothingId = req.params.id;

  const clothingIndex = clothes.findIndex((u) => u.id == clothingId);
  clothes.splice(clothingIndex, 1);

  res.status(200).json({
    status: "sucess", 
    msg: "Deleted Clothing"
  })
}


module.exports = {
  getClothes,
getClothesById,
postClothing,
updateClothing,
removeClothing
}