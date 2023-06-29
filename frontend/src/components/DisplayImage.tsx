import {useEffect, useState} from "react";
import axios from "axios";
import SeasonToggle from "./SeasonToggle";
import {Theme} from "../utils/types.ts";

function DisplayImage() {
    const [imageURL, setImageURL] = useState<string | undefined>("https://img.freepik.com/vektoren-kostenlos/schoene-illustration-der-sonnigen-landschaft_1284-62766.jpg?w=900&t=st=1687964025~exp=1687964625~hmac=e32a37b6e0a2065162405fe7c3c43a83d5182571c169ef925821f99ba675fbe6");
    const [alignment, setAlignment] = useState<string | null>('summer');
    const [themes, setThemes] = useState<Theme[]>();

    function getSeason() {
        switch (alignment) {
            case "spring":
                return "springUrl";
            case "summer":
                return "summerUrl";
            case "autumn":
                return "autumnUrl";
            case "winter":
                return "winterUrl";
            default:
                return "summerUrl";
        }

    }

    function fetchThemes() {
        axios.get("/api/theme")
            .then((res) => res.data)
            .catch((err) => {
                console.error(err);
            })
            .then((data) => {
                setThemes(data);
            });
    }

    useEffect(fetchThemes, []);

    return (
        <>
            <img src={imageURL} alt="Theme image" />
            <SeasonToggle alignment={alignment} setAlignment={setAlignment} />
        </>
    );
}

export default DisplayImage;
