DROP TABLE IF EXISTS halls;
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

DROP TABLE IF EXISTS reservation_seats;
CREATE TABLE reservation_seats (
  reservation_seat_id INTEGER PRIMARY KEY AUTOINCREMENT,
  reservation_id INTEGER NOT NULL,
  seat_id INTEGER NOT NULL,
  FOREIGN KEY (reservation_id) REFERENCES reservations(reservation_id),
  FOREIGN KEY (seat_id) REFERENCES seats(seat_id)
);

DROP TABLE IF EXISTS reservations;
CREATE TABLE reservations (
  date TEXT,
  reservation_id INTEGER PRIMARY KEY AUTOINCREMENT,
  show_id INTEGER,
  family_name TEXT NOT NULL,
  mail TEXT NOT NULL,
  private_name TEXT NOT NULL,
  FOREIGN KEY (show_id) REFERENCES shows(show_id)
);

DROP TABLE IF EXISTS seats;
CREATE TABLE seats (
  seat_id INTEGER PRIMARY KEY AUTOINCREMENT,
  row_num INTEGER,
  chair_num INTEGER,
  hall_id INTEGER,
  FOREIGN KEY (hall_id) REFERENCES halls(hall_id)
);

DROP TABLE IF EXISTS shows;
CREATE TABLE shows (
  show_id INTEGER PRIMARY KEY AUTOINCREMENT,
  hall_id INTEGER,
  ticket_price INTEGER,
  band_name TEXT,
  picture TEXT,
  show_date TEXT,
  FOREIGN KEY (hall_id) REFERENCES halls(hall_id)
);