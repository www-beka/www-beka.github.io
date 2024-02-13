import { useEffect, useState } from "react";
import { montion } from "framer-motion"
import "./cursor.scss";

const Cursor = () => {
    const [position, setPosition] = useState({x : 0, y : 0})

    useEffect(() => {
        const mouseMove = (e) => {
            setPosition({x : e.clientX, y : e.clientY});
        }

        window.addEventListener("mousemove", mouseMove);

        return () => {
            <montion.div
                className="cursor"
                animation={{ x : position.x+10, y : position.y+10}}
            ></montion.div>
        }
    }, [])
}

export default Cursor;