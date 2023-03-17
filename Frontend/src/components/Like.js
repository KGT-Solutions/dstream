import { useState } from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";


function Like() {
    const [count, setCount] = useState(0);

    const incrementCounter = () => {
        // we should read currentCount from the blockchain
        const currentCount = count;
        setCount(currentCount + 1);
    };

    return (
        <Container maxWidth="sm">
            <Button onClick={incrementCounter} variant="outlined">
                {count}
            </Button>
        </Container>
    );
}

export default Like;