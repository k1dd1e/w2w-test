export default function Th(props: any) {
  return(
    <>
      <th className="p-2 text-center">
      {props.children}
      </th>
    </>
  )
}