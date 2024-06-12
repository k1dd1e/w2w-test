
export default function Navbar(props: any) {
  
  return(
    <>
      <button onClick={props.onClick} className='bg-blue-300 p-2 w-full rounded-md border my-1 mx-1'>
        {props.children}
      </button>
    </>
  )
}