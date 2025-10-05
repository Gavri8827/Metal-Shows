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
-- Table structure for table `reservations`
--

DROP TABLE IF EXISTS `reservations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservations` (
  `date` date DEFAULT NULL,
  `reservation_id` int NOT NULL AUTO_INCREMENT,
  `show_id` int DEFAULT NULL,
  `family_name` varchar(100) NOT NULL,
  `mail` varchar(100) NOT NULL,
  `private_name` varchar(100) NOT NULL,
  PRIMARY KEY (`reservation_id`),
  KEY `FKq768uevy4c6ji14lhuwxlcj5l` (`show_id`),
  CONSTRAINT `FKq768uevy4c6ji14lhuwxlcj5l` FOREIGN KEY (`show_id`) REFERENCES `shows` (`show_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservations`
--

LOCK TABLES `reservations` WRITE;
/*!40000 ALTER TABLE `reservations` DISABLE KEYS */;
INSERT INTO `reservations` VALUES ('2025-09-18',1,1,'Cohen','avi12345@gmail.com','Avi'),('2025-09-26',2,2,'B','Luna@gmail.com','Luna'),('2025-09-26',3,5,'C','sc@hh.c','Luli'),('2025-09-26',4,5,'hhh','jjjjj','u'),('2025-09-27',5,9,'C','cxc@gggf.com','Eiatn'),('2025-09-27',6,7,'YYY','HHHH','YYY'),('2025-09-27',7,9,'L','jdjjdjd','Lul'),('2025-10-01',8,10,'גכגכ','כגכגכג','כגכג'),('2025-10-01',9,10,'גכגכ','גככגכ','כגכ'),('2025-10-01',10,7,'xzxzx','xzxzxz','xzxzx'),('2025-10-01',11,11,'dd','ddd','ddd');
/*!40000 ALTER TABLE `reservations` ENABLE KEYS */;
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
