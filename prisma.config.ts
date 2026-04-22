import { readFileSync } from 'fs';

function getMysqlUrl(): string {
  if (process.env.MYSQL_PRISMA_URL) return process.env.MYSQL_PRISMA_URL;

  const host = process.env.MYSQL_HOST ?? 'db';
  const port = process.env.MYSQL_PORT ?? '3306';
  const database = process.env.MYSQL_DATABASE ?? 'next_db';
  const user = process.env.MYSQL_USER ?? 'admin';

  let password = '';
  try {
    password = readFileSync('/run/secrets/db_password', 'utf8').trim();
  } catch {
    password = process.env.MYSQL_PASSWORD ?? '';
  }

  return `mysql://${user}:${encodeURIComponent(password)}@${host}:${port}/${database}`;
}

export default {
  datasource: {
    url: getMysqlUrl(),
  },
};
