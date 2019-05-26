/*
 Navicat Premium Data Transfer

 Source Server         : offline
 Source Server Type    : MySQL
 Source Server Version : 50562
 Source Host           : localhost:3306
 Source Schema         : lifachang

 Target Server Type    : MySQL
 Target Server Version : 50562
 File Encoding         : 65001

 Date: 26/05/2019 22:48:27
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `articleId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `articleType` tinyint(1) DEFAULT NULL COMMENT '1文章，2图文',
  `articleTitle` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `articleContent` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `readNumber` int(10) UNSIGNED DEFAULT NULL COMMENT '阅读量',
  `commentNumber` int(10) UNSIGNED DEFAULT NULL COMMENT '评论量',
  `fabulousNumber` int(10) UNSIGNED DEFAULT NULL COMMENT '点赞量',
  `authorId` int(10) UNSIGNED DEFAULT NULL COMMENT '作者的ID',
  PRIMARY KEY (`articleId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `userName` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `userPwd` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `sex` tinyint(1) UNSIGNED DEFAULT NULL COMMENT '1男，2女，3保密',
  `age` tinyint(3) UNSIGNED DEFAULT NULL,
  `tel` char(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `userHeadPhoto` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL COMMENT '0正常，1已删除',
  `createtime` char(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'lifachang', '000000', NULL, NULL, NULL, NULL, NULL, NULL, '1558710923');
INSERT INTO `user` VALUES (2, 'lifachang1', '000000', NULL, NULL, NULL, NULL, NULL, NULL, '1558711557');
INSERT INTO `user` VALUES (3, 'Test', 'Test', NULL, NULL, NULL, NULL, NULL, NULL, '1558843794');

SET FOREIGN_KEY_CHECKS = 1;
