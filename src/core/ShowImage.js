import React from "react";
import { API } from "../config";

const ShowImage = ({ item, url }) => (     
        <img
            src={`${API}/${url}/photo/${item._id}`}
            alt={item.name}
            className="card-img-top smallimage mb-1"
            style={{ maxHeight: "200px", maxWidth: "100%"}}
        />     
);
  
export default ShowImage;
