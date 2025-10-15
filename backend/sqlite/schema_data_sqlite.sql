
--Tables

CREATE TABLE halls (
  hall_id INTEGER PRIMARY KEY AUTOINCREMENT,
  city TEXT,
  street TEXT,
  rows_num INTEGER,
  seats_per_row INTEGER,
  total_seats INTEGER,
  country TEXT,
  hall_name TEXT
);

CREATE TABLE shows (
  show_id INTEGER PRIMARY KEY AUTOINCREMENT,
  hall_id INTEGER,
  ticket_price INTEGER,
  band_name TEXT,
  picture TEXT,
  show_date TEXT,
  FOREIGN KEY (hall_id) REFERENCES halls(hall_id)
);

CREATE TABLE reservations (
  reservation_id INTEGER PRIMARY KEY AUTOINCREMENT,
  date TEXT,
  show_id INTEGER,
  family_name TEXT NOT NULL,
  mail TEXT NOT NULL,
  private_name TEXT NOT NULL,
  FOREIGN KEY (show_id) REFERENCES shows(show_id)
);

CREATE TABLE seats (
  seat_id INTEGER PRIMARY KEY AUTOINCREMENT,
  row_num INTEGER,
  chair_num INTEGER,
  hall_id INTEGER,
  FOREIGN KEY (hall_id) REFERENCES halls(hall_id)
);

CREATE TABLE reservation_seats (
  reservation_seat_id INTEGER PRIMARY KEY AUTOINCREMENT,
  reservation_id INTEGER NOT NULL,
  seat_id INTEGER NOT NULL,
  FOREIGN KEY (reservation_id) REFERENCES reservations(reservation_id),
  FOREIGN KEY (seat_id) REFERENCES seats(seat_id)
);


--data
-- הכנסת נתונים

INSERT INTO reservation_seats VALUES 
(1,2,2),(2,3,3),(3,3,4),(4,4,5),(5,4,6),(6,5,7),(7,5,8),(8,6,9),
(9,7,10),(10,7,11),(11,9,12),(12,10,13),(13,11,14);

INSERT INTO seats VALUES 
(2,1,7,1),(3,1,12,2),(4,1,11,2),(5,2,11,2),(6,2,10,2),
(7,7,14,3),(8,3,12,3),(9,9,9,1),(10,1,14,3),
(12,1,4,11),(13,3,10,1),(14,1,15,3);

INSERT INTO halls (city, street, rows_num, seats_per_row, total_seats, country, hall_name) VALUES
('Tel Aviv','Hayotsrim',20,10,200,'Israel','Menora Mivtahim'),
('Ashkelon','Haorim',15,12,180,'Israel','Heichal Hatarbut'),
('Warsaw','Polains',50,20,300,'Europe','The Flame'),
('Tel-Aviv','Haoman 17',30,7,210,'Israel','Habima'),
('Kisaria','Hamelacha',100,5,500,'Israel','Heichal Nokia');

INSERT INTO shows (hall_id, ticket_price, band_name, picture, show_date) VALUES 
(1,100,'Disturbed','https://www.billboard.com/wp-content/uploads/media/disturbed-press-photo-2015-billboard-650.jpg?w=650&h=430&crop=1','2026-01-08'),
(2,90,'Slipknot','https://i8.amplience.net/i/naras/slipknot_MI0005599206-MN0000750742','2026-09-12'),
(5,124,'Hapijamot','https://upload.wikimedia.org/wikipedia/he/a/ab/%D7%94%D7%A4%D7%99%D7%92%27%D7%9E%D7%95%D7%AA2.jpg','2025-10-02'),
(7,56,'Motionless In White','https://upload.wikimedia.org/wikipedia/he/a/ab/%D7%94%D7%A4%D7%99%D7%92%27%D7%9E%D7%95%D7%AA2.jpg','2025-11-08'),
(9,11,'Metallica','https://en.wikipedia.org/wiki/Metallica#/media/File:Metallica_March_2024.jpg','2026-01-22');

INSERT INTO reservations VALUES 
(1,'2025-09-18',1,'Cohen','avi12345@gmail.com','Avi'),
(2,'2025-09-26',2,'B','Luna@gmail.com','Luna'),
(3,'2025-09-26',5,'C','sc@hh.c','Luli'),
(4,'2025-09-26',5,'hhh','jjjjj','u'),
(5,'2025-09-27',9,'C','cxc@gggf.com','Eiatn');
