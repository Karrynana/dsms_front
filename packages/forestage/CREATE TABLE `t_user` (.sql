CREATE TABLE `t_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) DEFAULT '',
  `password` varchar(45) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `account` varchar(45) NOT NULL,
  `role` varchar(45) NOT NULL DEFAULT 'student',
  `id_number` varchar(45) NOT NULL,
  `remark` varchar(45) DEFAULT '',
  `avatar` varchar(255) NOT NULL DEFAULT '',
  `creator` int NOT NULL,
  `create_time` bigint NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci