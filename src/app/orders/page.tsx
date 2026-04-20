import { Flex, Heading } from "@radix-ui/themes";
import OrderTable from "@/app/components/ui/ordertable.jsx";
import Pagination from "../components/ui/pagination";
import { revalidatePath } from "next/cache";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ page: number; per_page: number }>;
}) {
  const { page: pageParam, per_page: perPageParam } = await searchParams;
  const page = Number(pageParam) || 1;
  const per_page = Number(perPageParam) || 10;
  revalidatePath("/orders");
  return (
    <main>
      <Flex direction="column" m="6">
        <Heading>Orders</Heading>
        <OrderTable page={page} per_page={per_page} />
        <Pagination page={page} />
      </Flex>
    </main>
  );
}
