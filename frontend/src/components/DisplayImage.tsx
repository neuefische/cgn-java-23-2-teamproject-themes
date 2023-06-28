import {useEffect, useState} from "react";
import axios from "axios";

function DisplayImage() {
    const [imageURL, setImageURL] = useState<string>("https://img.freepik.com/vektoren-kostenlos/schoene-illustration-der-sonnigen-landschaft_1284-62766.jpg?w=900&t=st=1687964025~exp=1687964625~hmac=e32a37b6e0a2065162405fe7c3c43a83d5182571c169ef925821f99ba675fbe6");
/*
    useEffect(() => {
        axios.get("/api/theme-image")
            .then((res) => res.data)
            .catch((err) => {
                console.error(err);
            })
            .then((data) => {
            setImageURL(data);
        });
        },
        []);

*/

    return (
        <>
            <img src={imageURL} alt="summer" />
        </>
    );
}

export default DisplayImage;