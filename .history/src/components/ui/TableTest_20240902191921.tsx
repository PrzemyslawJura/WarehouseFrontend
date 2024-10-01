import DataTable from "react-data-table-component";

const columns = [
	{
		name: 'Title',
		selector: (row:any) => row.title,
		sortable: true,
	},
	{
		name: 'Director',
		selector: (row:any) => row.director,
		sortable: true,
	},
	{
		name: 'Year',
		selector: (row:any) => row.year,
		sortable: true,
	},
];

export function TableSite(results:any) {
    return (
        <DataTable title="Movie List" columns={columns} data={results} pagination />
    );
}