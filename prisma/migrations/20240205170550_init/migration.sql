-- CreateTable
CREATE TABLE `Webhooks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `external_reference_id` VARCHAR(191) NULL,
    `topic` VARCHAR(191) NOT NULL,
    `order_uuid` VARCHAR(191) NULL,
    `order_state` VARCHAR(191) NULL,
    `event_time` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `payload` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
