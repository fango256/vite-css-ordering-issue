import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, "index.html"),
                entrypoint2: path.resolve(__dirname, "entrypoint2/index.html"),
            },
        },
    },
});
