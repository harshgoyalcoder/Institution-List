import InstitutionTable from "@/components/InstitutionTable";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-center text-2xl font-bold my-8">Institution List</h1>
      <InstitutionTable />
    </div>
  );
}
