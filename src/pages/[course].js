//[course.js]
import courses from courses.json;

export async function getStaticPaths(){
const paths = courses.map(course => ({
 params : {  course:course.title}
}))
return {Paths,fallback: false}}
 export async function getStaticProps({params}){
const course=courses.find(color =>color.title === params.course)
return {props: {course}}
}
export default function Course({course})
{
return<div >
<h1>color.title</h1>
<p>color.details</p>
</div>
}