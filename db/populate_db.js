const pool = require("./pool");

async function populate_db() {
  await pool.query(
    `INSERT INTO categories (name)
    VALUES 
    ('CPU'),
    ('GPU'),
    ('RAM'),
    ('Storage'),
    ('Motherboard');`,
  );
  await pool.query(
    `INSERT INTO items (name, price, quantity, category_id)
VALUES
-- CPU
('Intel i5-13400F', 250, 10, 1),
('AMD Ryzen 5 5600', 220, 15, 1),

-- GPU
('RTX 4070', 800, 5, 2),
('RX 7800 XT', 750, 7, 2),

-- RAM
('Corsair 16GB DDR4', 80, 30, 3),
('G.Skill 32GB DDR5', 150, 20, 3),

-- Storage
('Samsung 980 1TB NVMe', 120, 25, 4),
('WD Black SN850X 2TB', 220, 12, 4),

-- Motherboard
('MSI B550 Tomahawk', 180, 10, 5),
('ASUS Z790 Prime', 320, 8, 5);`,
  );
}
populate_db()