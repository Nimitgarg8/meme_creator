import React from "react";

export const getAllMemes = async (url)=>{
    const response = await fetch(url);
    return await response.json();
}