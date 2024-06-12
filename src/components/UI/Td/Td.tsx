export default function Td(props: any) {
  return(
    <>
        <td className="p-2 text-center">
      {props.children}
    </td>
    </>
  )
}