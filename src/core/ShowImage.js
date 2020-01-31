import React from "react";
import { API } from "../config";

const ShowImage = ({ item, url }) => (     
        <img
            src={`${API}/${url}/photo/${item._id}`}
            alt={item.name}
            className="card-img-top smallimg mb-3"
            style={{ maxHeight: "50%", maxWidth: "50%"}}
        />     
);
  
export default ShowImage;
