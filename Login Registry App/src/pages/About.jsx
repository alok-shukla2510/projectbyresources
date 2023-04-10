import { Link } from "react-router-dom";

const About = () => {
	return (
		<article className='grid place-items-center h-[100vh]'>
			<section className='space-y-6 flex flex-col items-center'>
				<p>We register users and perform operation on them</p>
				<button className='bg-blue-500 text-slate-100 py-1 px-5 rounded-md border-2 border-blue-500 hover:bg-slate-100 hover:text-slate-800 transition-colors'>
					<Link to={"/"}>ok got it! Let's go back</Link>
				</button>
			</section>
		</article>
	);
};

export default About;
