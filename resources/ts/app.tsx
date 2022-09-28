import React from "react";
import ReactDOM from "react-dom";
import { Example } from "./components/Example";
import { MantineProvider, Text } from "@mantine/core";

ReactDOM.render(
    <React.StrictMode>
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <Example />
        </MantineProvider>
    </React.StrictMode>,
    document.getElementById("app")
);
