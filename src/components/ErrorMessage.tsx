export default function ErrorMessage({children}:{children:React.ReactNode}) {
  return (
    <p className="bg-red-100 text-red-400 px-3 text-center rounded">
        {children}
    </p>
  )
}