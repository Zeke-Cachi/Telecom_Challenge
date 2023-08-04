-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: clientes
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `data_clientes`
--

DROP TABLE IF EXISTS `data_clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `data_clientes` (
  `dni` int NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(60) NOT NULL,
  `sexo` enum('masculino','femenino') NOT NULL,
  `telefono` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `data_clientes`
--

LOCK TABLES `data_clientes` WRITE;
/*!40000 ALTER TABLE `data_clientes` DISABLE KEYS */;
INSERT INTO `data_clientes` VALUES (10501111,'Soledad','Cabrera','femenino','3816789654'),(11555801,'Eustaquio','Malevo','masculino','1132654855'),(12659786,'María','Gonzalez','femenino','1165986532'),(13653987,'Ruben','John','masculino','2918654987'),(19865744,'Lidia','Martinez','femenino','2996663333'),(20564988,'Roberto','Perez','masculino','3536985698'),(23212151,'Juan','Perez','masculino','3416590000'),(25663569,'Roberta','Mostau','femenino','3816547896'),(28905333,'Andrea','John','femenino','1155664477'),(28965333,'Andrea','John','femenino','1155664477'),(29888555,'Marisa','Lopez','femenino','3436532266'),(30111555,'David','Gomez','masculino','3416558877'),(31569865,'Pamela','Gomez','femenino','3516986574'),(33659888,'Sandra','Cabrera','femenino','2996587453'),(39784555,'Marcelo','Pepin','masculino','3516487956'),(42666352,'Pedro','Juarez','masculino','2916549865');
/*!40000 ALTER TABLE `data_clientes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-03 18:16:07
