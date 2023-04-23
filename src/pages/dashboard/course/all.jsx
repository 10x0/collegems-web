import { useLoaderData } from 'react-router-dom';

export default function AllCourses() {
  const courses = useLoaderData();

  return (
    <section>
      <h1>All courses listed here.</h1>
      <p>{JSON.stringify(courses, null, 2)}</p>
    </section>
  );
}
