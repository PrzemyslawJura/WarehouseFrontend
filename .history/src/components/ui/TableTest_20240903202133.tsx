import DataTable from "react-data-table-component";

export function TableTest(results:any, columns:any) {
    return (
        <>
        {console.log(columns.results)}
            <DataTable title="Workers" columns={columns.results} data={results.results} pagination />
        </>
    );
}
