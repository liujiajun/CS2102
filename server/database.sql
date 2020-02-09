DROP TABLE IF EXISTS Users, Auths;

CREATE TABLE Users (
  id INTEGER,
);

CREATE TABLE Auths (
  type VARCHAR(20),
  uid INTEGER REFERENCES Users.id,
  name TEXT NOT NULL,
  token TEXT NO NULL,
  PRIMARY KEY (uid, type),
  CONSTRAINT no_same_credential UNIQUE (name, type)
);

INSERT INTO Users VALUES(1);
INSERT INTO Auths VALUES('email', 1, 'a@a.com', 'aA@1aaaa');
