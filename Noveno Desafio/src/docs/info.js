export const info = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Noveno Desafio",
            version: "1.0.0",
            description: "API para el Noveno Desafio de Coderhouse",
        },
        servers: [
            {
                url: "http://localhost:8080"
            }
        ]
    },
    apis: ["./src/docs/*.yml"]
}