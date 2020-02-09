DROP TABLE IF EXISTS Users, Auths, Customers, Riders, Restaurants, Admins CASCADE;

CREATE TABLE Users (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE Customers (
  id INTEGER PRIMARY KEY REFERENCES Users(id)
     ON DELETE CASCADE
);

CREATE TABLE Riders (
  id INTEGER PRIMARY KEY REFERENCES Users(id)
     ON DELETE CASCADE
);

CREATE TABLE Restaurants (
  id INTEGER PRIMARY KEY REFERENCES Users(id)
     ON DELETE CASCADE
);

CREATE TABLE Admins (
  id INTEGER PRIMARY KEY REFERENCES Users(id)
     ON DELETE CASCADE
);

CREATE TABLE Auths (
  type VARCHAR(20),
  uid INTEGER REFERENCES Users(id),
  name TEXT NOT NULL,
  token TEXT NOT NULL,
  PRIMARY KEY (uid, type),
  CONSTRAINT no_same_credential UNIQUE (name, type)
);

INSERT INTO Users VALUES(1, 'customer1');
INSERT INTO Customers VALUES(1);
INSERT INTO Auths VALUES('email', 1, 'a@a.com', 'aA@1aaaa');

INSERT INTO Users VALUES(2, 'restaurant1');
INSERT INTO Restaurants VALUES(2);
INSERT INTO Auths VALUES('email', 2, 'b@a.com', 'aA@1aaaa');
