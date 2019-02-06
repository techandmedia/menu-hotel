-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 05, 2019 at 12:49 AM
-- Server version: 5.6.35
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_kuesioner`
--

-- --------------------------------------------------------

--
-- Table structure for table `penilaian_penilai`
--

CREATE TABLE `penilaian_penilai` (
  `penilaian_id` int(5) NOT NULL,
  `nip_nim` int(5) NOT NULL,
  `c1` int(1) UNSIGNED NOT NULL,
  `c2` int(1) UNSIGNED NOT NULL,
  `c3` int(1) NOT NULL,
  `c4` int(1) NOT NULL,
  `c5` int(1) NOT NULL,
  `c6` int(1) NOT NULL,
  `c7` int(1) NOT NULL,
  `p1` decimal(3,1) NOT NULL,
  `p2` decimal(3,1) NOT NULL,
  `p3` decimal(3,1) NOT NULL,
  `p4` decimal(3,1) NOT NULL,
  `total` decimal(3,1) NOT NULL,
  `hasil` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `penilaian_penilai`
--

INSERT INTO `penilaian_penilai` (`penilaian_id`, `nip_nim`, `c1`, `c2`, `c3`, `c4`, `c5`, `c6`, `c7`, `p1`, `p2`, `p3`, `p4`, `total`, `hasil`) VALUES
(1, 1, 5, 3, 2, 3, 3, 3, 3, '11.3', '5.6', '3.4', '1.7', '22.0', 'Bagus Sekali'),
(2, 2, 3, 3, 2, 3, 3, 2, 2, '8.6', '4.9', '3.0', '1.5', '18.0', 'Bagus'),
(3, 3, 2, 3, 3, 3, 3, 2, 2, '7.9', '5.3', '3.2', '1.6', '18.0', 'Bagus'),
(4, 4, 4, 3, 2, 4, 3, 2, 2, '10.0', '5.2', '3.2', '1.6', '20.0', 'Bagus Sekali');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `penilaian_penilai`
--
ALTER TABLE `penilaian_penilai`
  ADD PRIMARY KEY (`penilaian_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `penilaian_penilai`
--
ALTER TABLE `penilaian_penilai`
  MODIFY `penilaian_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
