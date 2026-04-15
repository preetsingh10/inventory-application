CREATE DATABASE inventory_app;

-- connect to db inventory_app in psql shell
\c inventory_app;

CREATE TABLE categories(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE items(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price NUMERIC,
    quantity INT,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);