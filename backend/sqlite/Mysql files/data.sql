-- הכנסת נתונים

INSERT INTO reservations VALUES 
('2025-09-18',1,1,'Cohen','avi12345@gmail.com','Avi'),
('2025-09-26',2,2,'B','Luna@gmail.com','Luna');

INSERT INTO halls VALUES 
(1,'Tel Aviv','Hayotsrim',20,10,200,'Israel','Menora Mivtahim'),
(2,'Ashkelon','Haorim',15,12,180,'Israel','Heichal Hatarbut'),
(3,'Warsaw','Polains',50,20,300,'Europe','The Flame'),
(4,'Tel-Aviv','Haoman 17',30,7,210,'Israel','Habima'),
(6,'Kisaria','Hamelacha',100,5,500,'Israel','Heichal Nokia');

INSERT INTO reservation_seats VALUES 
(1,2,2),(2,3,3),(3,3,4),(4,4,5),(5,4,6),(6,5,7),(7,5,8),
(8,6,9),(9,7,10),(10,7,11),(11,9,12),(12,10,13),(13,11,14);

INSERT INTO seats VALUES 
(2,1,7,1),(3,1,12,2),(4,1,11,2),(5,2,11,2),(6,2,10,2),
(7,7,14,3),(8,3,12,3),(9,9,9,1),(10,1,14,3),
(11,1,13,3),(12,1,4,11),(13,3,10,1),(14,1,15,3);

INSERT INTO shows VALUES 
(1,1,100,'Disturbed','https://www.billboard.com/wp-content/uploads/media/disturbed-press-photo-2015-billboard-650.jpg?w=650&h=430&crop=1','2026-01-08'),
(1,2,90,'Slipknot','https://i8.amplience.net/i/naras/slipknot_MI0005599206-MN0000750742','2026-09-12'),
(2,5,124,'Hapijamot','https://upload.wikimedia.org/wikipedia/he/a/ab/%D7%94%D7%A4%D7%99%D7%92%27%D7%9E%D7%95%D7%AA2.jpg','2025-10-02'),
(1,7,56,'Motionless In White','https://upload.wikimedia.org/wikipedia/he/a/ab/%D7%94%D7%A4%D7%99%D7%92%27%D7%9E%D7%95%D7%AA2.jpg','2025-11-08'),
(3,9,11,'Metallica','https://en.wikipedia.org/wiki/Metallica#/media/File:Metallica_March_2024.jpg','2026-01-22');
