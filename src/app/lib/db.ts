import { readFileSync } from 'fs';
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "@/generated/prisma/client";

function getMysqlUrl(): string {
  const host = process.env.MYSQL_HOST ?? 'db';
  const port = process.env.MYSQL_PORT ?? '3306';
  const database = process.env.MYSQL_DATABASE ?? 'next_db';
  const user = process.env.MYSQL_USER ?? 'admin';

  let password = '';
  try {
    password = readFileSync('/run/secrets/db_password', 'utf8').trim();
  } catch {
    password = '';
  }

  return `mysql://${user}:${encodeURIComponent(password)}@${host}:${port}/${database}`;
}

const adapter = new PrismaMariaDb(getMysqlUrl());
export const prisma = new PrismaClient({ adapter });
