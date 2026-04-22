export default {
  datasource: {
    url: process.env.MYSQL_PRISMA_URL ?? "mysql://admin@db:3306/next_db",
  },
};
