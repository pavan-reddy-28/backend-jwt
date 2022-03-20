mysql connection errors might face

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

USE mysql;
CREATE USER 'user'@'localhost' IDENTIFIED BY 'P@ssW0rd';
GRANT ALL ON *.* TO 'user'@'localhost';
FLUSH PRIVILEGES

Alternative privileges (be careful and remember the least-privilege principle):

-- Grant user permissions to all tables in my_database from localhost --
GRANT ALL ON my_database.* TO 'user'@'localhost';

-- Grant user permissions to my_table in my_database from localhost --
GRANT ALL ON my_database.my_table TO 'user'@'localhost';

-- Grant user permissions to all tables and databases from all hosts --
GRANT ALL ON *.* TO 'user'@'*';