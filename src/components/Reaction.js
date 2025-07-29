import { useState } from "react";
import '../styles/reaction.css';

const reactionTypes = [
    {icon: "👍", label: "Like"},
    {icon: "❤️", label: "Love"},
    {icon: "😠", label: "Angry"},
    {icon: "😢", label: "Sad"},
];

const Reaction = ({ type }) => {
    const [selected, setSelected] = useState(null);

    return (
        <div className={`reactions ${type}`}>
            {reactionTypes.map((reaction, index) => (
                <button key = {index} className={`reaction-button ${
                    selected === index ? "active" : ""
                }`}
                onClick={() => setSelected(index)}>
                    {reaction.icon}
                </button>
            ))}
        </div>
    );
};

export default Reaction;