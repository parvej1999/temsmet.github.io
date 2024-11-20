function TableView(props) {
  const highLightRow = 0;
    return (
        <div id="important-dates-section" className="sm:ml-32 sm:mr-32 sm:mt-5 sm:mb-5 p-8">
            {props.tableName?.length > 0 && <h1 className="font-bold text-2xl sm:text-4xl text-gray-800">{props.tableName}</h1>}
            <div className="overflow-x-auto mt-6 shadow-lg">
                <table className="w-full border-collapse rounded-lg">
                <thead>
                    <tr className="bg-gray-800 text-gray-100 text-left">
                        {props.tableHead.length != 0 && props.tableHead.map((head, index) => (
                            <th key={index} className="px-6 py-4 font-bold">{ head }</th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    {props.dataItem.map((item, index) => (
                    <tr
                        key={index}
                        className={`${index % 2 === 0 ? 'bg-sky-300/25' : 'bg-white'} ${(props.tableName === 'Important Dates' && index === highLightRow && 'font-bold text-red-500')}` }
                    >
                        {item.tableData.map((data, index) => (
                              
                            <td key={index}
                            className={`px-6 py-4 border-b border-gray-300`}
                            >
                                {data}
                            </td>
                        ))}  
                        {console.log(item.tableData)}
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    )
}
export default TableView;