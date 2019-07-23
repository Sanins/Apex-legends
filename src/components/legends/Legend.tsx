import React from "react";
import Button from '../Button/Button';
import { LegendProps } from "../types/Types";

export default function Legend(props: LegendProps) {
    const [showHide, setShowhide] = React.useState(false);

    const showLegends = () => {
        if (showHide) {
            setShowhide(false);
        } else  {
            setShowhide(true);
        }
    };

    return (
        <div>
            <Button onClick={showLegends}>{props.title}</Button>
            {showHide &&
                <p>{props.function}</p>
            }
        </div>
    );
};
