import Link from "next/link"

const Navbar = () => {
  return (
    <header>
      <div className="bg-sky-600 p-5 rounded-b-2xl flex justify-between items-center">
        <div className="flex gap-5 ">
          <Link href='/' className="bg-slate-200 py-2 px-4 rounded">Home</Link>
          <Link href='/courses' className="py-2 px-4 rounded">Courses</Link>
          <Link href='/about' className="py-2 px-4 rounded">About Us</Link>
          <Link href='/contact' className="py-2 px-4 rounded">Contact</Link>
        </div>
        <div>
          <Link href='/signup' className="py-2 px-4 rounded">Sign Up</Link>
          <Link href='/login' className="py-2 px-4 rounded bg-black text-white">Login</Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar