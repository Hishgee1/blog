import React from "react";
import Link from "next/link";


const Header = () => {
	return (
		<header className="flex max-w-[1200px] m-auto justify-between p-5 items-center  ">
			<img src="/images/Logo.png" alt="logo" />
			<ul className="flex gap-10">
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/blog">Blog</Link>
				</li>
				<li>
					<Link href="/contact">Contact</Link>
				</li>
			</ul>
			<input
				type="text"
				placeholder="Search"
				className="border border-solid p-1"
			/>
		</header>
	);
};

export default Header;
