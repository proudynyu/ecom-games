import React from "react";
import { AiOutlineUserAdd } from "react-icons/ai";

import { Button } from "./Button";

export function SignIn() {
    return (
        <Button>
            <AiOutlineUserAdd size={24} color="white" />
        </Button>
    );
}
