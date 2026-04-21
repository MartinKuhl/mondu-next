export default {
  datasource: {
    url: process.env.POSTGRES_PRISMA_URL ?? "postgresql://localhost:5432/next_db",
  },
};
