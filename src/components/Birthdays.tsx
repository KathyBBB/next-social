import Image from "next/image";
import Link from "next/link";

const Birthdays = () => {
	return (
		<div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
			{/* USER */}
			<div className="flex justify-between items-center font-medium">
				<span className="text-gray-500">Birthdays</span>
			</div>
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-4">
					<Image
						src="https://images.pexels.com/photos/23640275/pexels-photo-23640275/free-photo-of-cliff.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
						alt="user"
						width={40}
						height={40}
						className="w-10 h-10 rounded-full object-cover"
					/>
					<span>Sonny Sanga</span>
				</div>
				<div className="flex gap-3 justify-end">
					<button className="bg-blue-500 text-white text-xs rounded-md px-2 py-1">
						Celebrate
					</button>
				</div>
			</div>
			{/* UPCOMING */}
			<div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
				<Image
					src="/gift.png"
					alt="gift"
					width={24}
					height={24}
				/>
				<Link
					href="/"
					className="flex flex-col gap-1 text-xs"
				>
					<span className="text-gray-700 font-semibold">
						Upcoming Birthdays
					</span>
					<span className="text-gray-500">
						See other 16 have upcoming birthdays
					</span>
				</Link>
			</div>
		</div>
	);
};

export default Birthdays;
