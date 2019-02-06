-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 01, 2019 at 05:14 AM
-- Server version: 5.6.35
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `andri`
--

-- --------------------------------------------------------

--
-- Table structure for table `prospace_companies`
--

CREATE TABLE `prospace_companies` (
  `company_id` int(5) NOT NULL,
  `company_name` varchar(30) NOT NULL,
  `address` varchar(100) NOT NULL,
  `revenue` int(12) UNSIGNED NOT NULL,
  `phone_country_code` int(3) UNSIGNED NOT NULL,
  `phone_number` int(10) UNSIGNED NOT NULL,
  `date_created` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `prospace_companies`
--

INSERT INTO `prospace_companies` (`company_id`, `company_name`, `address`, `revenue`, `phone_country_code`, `phone_number`, `date_created`) VALUES
(2, 'Reebok', 'Jalan MH Tahmrin kav 90 Reebok Building 3rd floor room 304', 990000000, 66, 421421421, '2018-12-31 03:18:27'),
(3, 'Nike', 'Jalan Jendral Sudirman kav 55 Nike Building 30th floor room 3049', 950000000, 62, 123123123, '0000-00-00 00:00:00'),
(4, 'Hammer', 'Gedung Sarinah lt.12 Jakarta ', 250000000, 62, 123123, '0000-00-00 00:00:00'),
(5, 'Watchout', 'Gedung Sarinah lt.10 Jakarta ', 250000000, 61, 133133144, '0000-00-00 00:00:00'),
(6, 'Watchout', 'Gedung Sarinah lt.10 Jakarta ', 450000000, 62, 989898989, '0000-00-00 00:00:00'),
(7, 'Watchout', 'Gedung Sarinah lt.10 Jakarta ', 450000000, 61, 4294967295, '0000-00-00 00:00:00'),
(8, 'Watchout', 'Gedung Sarinah lt.10 Jakarta ', 909999999, 62, 123123123, '0000-00-00 00:00:00'),
(9, 'Watchout', 'Gedung Sarinah lt.10 Jakarta ', 350000000, 62, 450450450, '0000-00-00 00:00:00'),
(10, 'Watchout', 'Gedung Sarinah lt.10 Jakarta ', 50000000, 62, 123123123, '0000-00-00 00:00:00'),
(11, 'Watchout New', 'Gedung Sarinah lt.10 Jakarta ', 900000000, 62, 456456456, '0000-00-00 00:00:00'),
(12, 'Watchout New 123', 'Gedung Sarinah lt.10 Jakarta ', 56000000, 62, 123123, '0000-00-00 00:00:00'),
(13, 'Watchout New 124', 'Gedung Sarinah lt.10 Jakarta ', 12121, 62, 1212, '0000-00-00 00:00:00'),
(14, 'Watchout New 125', 'Gedung Sarinah lt.10 Jakarta ', 1, 62, 1, '0000-00-00 00:00:00'),
(15, 'Watchout New 126', 'Gedung Sarinah lt.10 Jakarta ', 1, 62, 1, '0000-00-00 00:00:00'),
(16, 'Watchout New 127', 'Gedung Sarinah lt.10 Jakarta ', 1, 62, 1, '0000-00-00 00:00:00'),
(17, 'Watchout New 128', 'Gedung Sarinah lt.10 Jakarta ', 2, 62, 2, '0000-00-00 00:00:00'),
(18, 'Watchout New 129', 'Gedung Sarinah lt.10 Jakarta ', 1, 62, 1, '0000-00-00 00:00:00'),
(19, 'Watchout New 130', 'Gedung Sarinah lt.10 Jakarta ', 1, 62, 1, '0000-00-00 00:00:00'),
(20, 'Watchout New 131', 'Gedung Sarinah lt.10 Jakarta ', 1, 62, 1, '0000-00-00 00:00:00'),
(21, 'Watchout New 132', 'Gedung Sarinah lt.10 Jakarta ', 1, 62, 1, '0000-00-00 00:00:00'),
(22, 'Watchout New 133', 'Gedung Sarinah lt.10 Jakarta ', 1, 62, 1, '0000-00-00 00:00:00'),
(23, 'Watchout New 134', 'Gedung Sarinah lt.10 Jakarta ', 1, 62, 1, '0000-00-00 00:00:00'),
(24, 'Watchout New 135', 'Gedung Sarinah lt.10 Jakarta ', 1, 62, 1, '0000-00-00 00:00:00'),
(25, 'Watchout New 136', 'Gedung Sarinah lt.10 Jakarta ', 1, 62, 1, '0000-00-00 00:00:00'),
(26, 'Watchout New 137', '1', 1, 62, 1, '0000-00-00 00:00:00'),
(36, 'Kemitraan', 'Jl STM Walang Jaya RT 001/03 No 20', 250000000, 62, 123, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `prospace_offices`
--

CREATE TABLE `prospace_offices` (
  `office_id` int(5) NOT NULL,
  `company_id` int(5) NOT NULL,
  `office_name` varchar(50) NOT NULL,
  `latitude` decimal(5,2) UNSIGNED NOT NULL,
  `log` decimal(5,2) NOT NULL,
  `start_date` date NOT NULL,
  `date_created` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `prospace_offices`
--

INSERT INTO `prospace_offices` (`office_id`, `company_id`, `office_name`, `latitude`, `log`, `start_date`, `date_created`) VALUES
(3, 2, 'Bangkok Office', '111.00', '22.00', '2012-01-09', '0000-00-00 00:00:00'),
(4, 3, 'Hongkong Office', '111.12', '22.39', '2018-01-09', '0000-00-00 00:00:00'),
(6, 4, 'Bandung Office', '123.24', '22.90', '0000-00-00', '2018-12-30 23:24:31'),
(7, 36, 'Jakarta Office', '123.24', '25.22', '0000-00-00', '2018-12-30 23:29:11'),
(8, 4, 'Bandung Office', '123.24', '25.22', '2018-12-31', '2018-12-31 03:55:18'),
(9, 2, 'Aceh Office', '123.24', '25.22', '2018-12-17', '2018-12-31 03:56:20');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `prospace_companies`
--
ALTER TABLE `prospace_companies`
  ADD PRIMARY KEY (`company_id`);

--
-- Indexes for table `prospace_offices`
--
ALTER TABLE `prospace_offices`
  ADD PRIMARY KEY (`office_id`),
  ADD KEY `company_id` (`company_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `prospace_companies`
--
ALTER TABLE `prospace_companies`
  MODIFY `company_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
--
-- AUTO_INCREMENT for table `prospace_offices`
--
ALTER TABLE `prospace_offices`
  MODIFY `office_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `prospace_offices`
--
ALTER TABLE `prospace_offices`
  ADD CONSTRAINT `prospace_offices_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `prospace_companies` (`company_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
