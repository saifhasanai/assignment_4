// 'use client';
// import Link from 'next/link';
//
// export default function NavBar() {
//   return (
//     <nav className="flex gap-6 mb-6 border-b pb-2">
//       <Link href="/" className="text-blue-600 hover:underline">Form</Link>
//       <Link href="/display" className="text-blue-600 hover:underline">Display</Link>
//     </nav>
//   );
// }

'use client';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="flex justify-center space-x-10 mb-6 text-lg font-medium">
      <Link href="/" className="text-indigo-600 hover:underline">Form</Link>
      <Link href="/display" className="text-indigo-600 hover:underline">Display</Link>
    </nav>
  );
}
