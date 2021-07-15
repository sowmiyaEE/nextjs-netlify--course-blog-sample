//index.tsx
import Head from 'next/head'
import Link from 'next/link'
import courses from "../data/courses.json"
export default function Home(){
return{
<div>
{courses.map(course => (
<Link href={'/${course.title}'}>
<h2>course.title</h2>
</Link>
))}
</div>
)
}
