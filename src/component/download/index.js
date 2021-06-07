import React from "react";
import { useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import IMAGES from "../../assets/auction/robots/robotImg";

const Download = () => {
    const { id } = useParams();
    return (
        <>
            <LazyLoadImage src={IMAGES[id]} />
        </>
    );
};

export default Download;
