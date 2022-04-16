-- CREATE TABLE users_newletter (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT UNIQUE NOT NULL, created_at TEXT DEFAULT CURRENT_TIMESTAMP);

-- INSERT INTO users_newletter (email)
-- VALUES ('nick@cave.com');

-- DELETE FROM users_newletter WHERE id = 14;

SELECT * FROM users_newletter;
SELECT COUNT(*) FROM users_newletter;