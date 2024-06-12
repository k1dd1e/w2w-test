import Td from '../UI/Td/Td'
import Th from '../UI/Th/Th'
import data from '../../data/doctros.json';

export default function DoctorsTable() {

  interface TableRow {
    name: string;
    manager: string;
    compartment: string;
  }

return(
<>
  <table className="border w-full">
    <thead className="w-full bg-blue-100">
      <tr>
        <Th>
          ФИО
        </Th>
        <Th>
          Заведующий
        </Th>
        <Th>
          Отделение
        </Th>
      </tr>
    </thead>
    <tbody>
      {data.map((row: TableRow) => (
        <tr key={row.name}>
          <Td>{row.name}</Td>
          <Td>{row.manager}</Td>
          <Td>{row.compartment}</Td>
        </tr>
      ))}
    </tbody>
  </table>
</>
)
}