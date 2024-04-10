import { sql } from "@vercel/postgres"

async function seed() {
    const cretateTable = await sql`
        CREATE TABLE IF NOT EXIST users (
            id SERIAL PROMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            image VARCHAR(255),
            "createdAT" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
        `;

    const users = await Promise.all([])
}