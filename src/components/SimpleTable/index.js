const { Table } = require("react-bootstrap");

const SimpleTable = (props) => {
  const { data, tableConfig } = props;
  return (
    <Table {...tableConfig}>
      <tbody>
        {data.map((tableData, index) => (
          <tr key={index}>
            <td dangerouslySetInnerHTML={{ __html: tableData.date }}></td>
            <td dangerouslySetInnerHTML={{ __html: tableData.content }}></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default SimpleTable;
