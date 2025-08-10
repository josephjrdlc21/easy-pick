const Table = ({ children }) => {
    return (
        <div className="w-full mb-12 mt-5">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-md rounded-sm bg-white">
                {children}
            </div>
        </div>
    );
};

const TableTitle = ({ children }) => (
    <div className="rounded-t mb-0 px-6 py-3 border-0">
        <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
                {children}
            </div>
        </div>
    </div>
);

const TableWrapper = ({ children }) => (
    <div className="block w-full overflow-x-auto">
        <table className="items-center w-full bg-transparent border-collapse">
            {children}
        </table>
    </div>
);

const TableHead = ({ children }) => (
    <thead className="bg-blueGray-50 text-blueGray-500 text-xs uppercase font-semibold text-left border-blueGray-100">
        {children}
    </thead>
);

const TableBody = ({ children }) => <tbody>{children}</tbody>;
const TableRow = ({ children }) => <tr>{children}</tr>;

const TableCell = ({ children, isHeader = false }) => {
    const baseClass = "px-6 align-middle border border-solid border-l-0 border-r-0 whitespace-nowrap text-sm p-4";

    if (isHeader) {
        return (
            <th className={`${baseClass} py-3`}>{children}</th>
        );
    }

    return <td className={`${baseClass} border-t-0`}>{children}</td>;
};

Table.Title = TableTitle;
Table.Wrapper = TableWrapper;
Table.Head = TableHead;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;

export default Table;
