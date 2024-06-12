import Td from '../UI/Td/Td'
import Th from '../UI/Th/Th'
import data from '../../data/nurses.json';



export default function NursesTable() {

  interface TableRow {
    name: string;
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
        Отделение
      </Th>
      </tr>
    </thead>
    <tbody className="">
      {data.map((row: TableRow) => (
        <tr key={row.name}>
          <Td>{row.name}</Td>
          <Td>{row.compartment}</Td>
        </tr>
      ))}
    </tbody>
  </table>
</>
)
}