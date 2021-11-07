CREATE SCHEMA `db-blog` ;

CREATE TABLE `db-blog`.`blog` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `author` VARCHAR(50) NULL,
  `title` VARCHAR(500) NULL,
  `description` TEXT NULL,
  `category` VARCHAR(35) NULL,
  `created` DATETIME NULL,
  `updated` DATETIME NULL,
  PRIMARY KEY (`id`));