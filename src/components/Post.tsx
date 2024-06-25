import Image from "next/image";
import Comments from "./Comments";

const Post = () => {
	return (
		<div className="flex flex-col gap-4">
			{/* USER */}
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-4">
					<Image
						src="https://images.pexels.com/photos/25853711/pexels-photo-25853711/free-photo-of-a-group-of-people-in-a-row-boat-on-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
						width={40}
						height={40}
						alt=""
						className="h-10 w-10 rounded-full"
					/>
					<span className="font-medium">Sue Smith</span>
				</div>
				<Image
					src="/more.png"
					width={16}
					height={16}
					alt=""
				/>
			</div>
			{/* DESC */}
			<div className="flex flex-col gap-4">
				<div className="w-full min-h-96 relative">
					<Image
						src="https://images.pexels.com/photos/24740639/pexels-photo-24740639/free-photo-of-a-woman-in-a-long-dress-is-standing-on-steps.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
						fill
						alt=""
						className="object-cover rounded-md"
					/>
				</div>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis aut
					tempora repellat aperiam omnis numquam placeat, eius assumenda sunt
					provident et voluptatem iste ut soluta, tempore possimus sed quidem
					beatae!
				</p>
			</div>
			{/* INTERACTION */}
			<div className="flex items-center justify-between text-sm my-4">
				<div className="flex gap-8">
					<div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
						<Image
							src="/like.png"
							width={16}
							height={16}
							alt=""
							className="cursor-pointer"
						/>
						<span className="text-gray-300">|</span>
						<span className="text-gray-500">
							142 <span className="hidden md:inline"> Likes</span>
						</span>
					</div>

					<div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
						<Image
							src="/comment.png"
							width={16}
							height={16}
							alt=""
							className="cursor-pointer"
						/>
						<span className="text-gray-300">|</span>
						<span className="text-gray-500">
							112 <span className="hidden md:inline"> Comments</span>
						</span>
					</div>
				</div>
				<div>
					<div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
						<Image
							src="/share.png"
							width={16}
							height={16}
							alt=""
							className="cursor-pointer"
						/>
						<span className="text-gray-300">|</span>
						<span className="text-gray-500">
							112 <span className="hidden md:inline"> Shares</span>
						</span>
					</div>
				</div>
			</div>
            <Comments />
		</div>
	);
};

export default Post;
