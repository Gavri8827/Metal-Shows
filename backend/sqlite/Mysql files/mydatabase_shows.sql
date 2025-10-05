-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: mydatabase
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `shows`
--

DROP TABLE IF EXISTS `shows`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shows` (
  `hall_id` int DEFAULT NULL,
  `show_id` int NOT NULL AUTO_INCREMENT,
  `ticket_price` int DEFAULT NULL,
  `band_name` varchar(100) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `show_date` date DEFAULT NULL,
  PRIMARY KEY (`show_id`),
  KEY `FK1qa9jl0gpbx6070ugpi5l6653` (`hall_id`),
  CONSTRAINT `FK1qa9jl0gpbx6070ugpi5l6653` FOREIGN KEY (`hall_id`) REFERENCES `halls` (`hall_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shows`
--

LOCK TABLES `shows` WRITE;
/*!40000 ALTER TABLE `shows` DISABLE KEYS */;
INSERT INTO `shows` VALUES (1,1,100,'Disturbed','https://www.billboard.com/wp-content/uploads/media/disturbed-press-photo-2015-billboard-650.jpg?w=650&h=430&crop=1\'','2026-01-08'),(1,2,90,'Slipknot','https://i8.amplience.net/i/naras/slipknot_MI0005599206-MN0000750742','2026-09-12'),(2,5,124,'Hapijamot','https://upload.wikimedia.org/wikipedia/he/a/ab/%D7%94%D7%A4%D7%99%D7%92%27%D7%9E%D7%95%D7%AA2.jpg','2025-10-02'),(1,7,56,'Motionless In White','https://upload.wikimedia.org/wikipedia/he/a/ab/%D7%94%D7%A4%D7%99%D7%92%27%D7%9E%D7%95%D7%AA2.jpg','2025-11-08'),(3,9,11,'Metallica','https://en.wikipedia.org/wiki/Metallica#/media/File:Metallica_March_2024.jpg','2026-01-22'),(11,10,55,'dfdfds','eewqee','2001-03-04'),(3,11,4,'ג','דד','2025-10-23');
/*!40000 ALTER TABLE `shows` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-10-03 20:05:24
