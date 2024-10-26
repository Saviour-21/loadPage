import { DataTable } from "@/components/data-table";
import { fetchData } from "@/data-fetcher";

const DataTableContainer = async () => {
  const data = await fetchData(
    "https://jsonplaceholder.typicode.com/posts"
  ).catch((err) => {
    console.error(err);
    return [];
  });

  return (
    <div>
      <DataTable initialData={data} />
    </div>
  );
};

export default DataTableContainer;
