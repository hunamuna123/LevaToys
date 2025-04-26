<template>
	<div
		data-hs-carousel='{
			"loadingClasses": "opacity-0"
		}'
		class="relative md:max-w-[50%] lg:max-w-[40%]"
	>
		<div class="hs-carousel flex flex-col-reverse">
			<div class="flex-none mt-4">
				<div
					class="hs-carousel-pagination max-w-full flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-transparent"
				>
					<div
						class="hs-carousel-pagination-item shrink-0 border-2 rounded-xl overflow-hidden cursor-pointer w-[120px] h-[120px] hs-carousel-active:border-teal-400"
					>
						<div
							class="flex justify-center h-full bg-gray-100 aspect-square p-2 rounded-xl overflow-hidden"
						>
							<img
								class="w-full h-full object-cover"
								src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png"
								alt=""
							/>
						</div>
					</div>
					<div
						class="hs-carousel-pagination-item shrink-0 border-2 rounded-xl overflow-hidden cursor-pointer w-[120px] h-[120px] hs-carousel-active:border-teal-400"
					>
						<div
							class="flex justify-center h-full bg-gray-100 aspect-square p-2 rounded-xl overflow-hidden"
						>
							<img
								class="w-full h-full object-cover"
								src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png"
								alt=""
							/>
						</div>
					</div>
					<div
						class="hs-carousel-pagination-item shrink-0 border-2 rounded-xl overflow-hidden cursor-pointer w-[120px] h-[120px] hs-carousel-active:border-teal-400"
					>
						<div
							class="flex justify-center h-full bg-gray-100 aspect-square p-2 rounded-xl overflow-hidden"
						>
							<img
								class="w-full h-full object-cover"
								src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png"
								alt=""
							/>
						</div>
					</div>
					<div
						class="hs-carousel-pagination-item shrink-0 border-2 rounded-xl overflow-hidden cursor-pointer w-[120px] h-[120px] hs-carousel-active:border-teal-400"
					>
						<div
							class="flex justify-center h-full bg-gray-100 aspect-square p-2 rounded-xl overflow-hidden"
						>
							<img
								class="w-full h-full object-cover"
								src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png"
								alt=""
							/>
						</div>
					</div>
					<div
						class="hs-carousel-pagination-item shrink-0 border-2 rounded-xl overflow-hidden cursor-pointer w-[120px] h-[120px] hs-carousel-active:border-teal-400"
					>
						<div
							class="flex justify-center h-full bg-gray-100 aspect-square p-2 rounded-xl overflow-hidden"
						>
							<img
								class="w-full h-full object-cover"
								src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png"
								alt=""
							/>
						</div>
					</div>
					<div
						class="hs-carousel-pagination-item shrink-0 border-2 rounded-xl overflow-hidden cursor-pointer w-[120px] h-[120px] hs-carousel-active:border-teal-400"
					>
						<div
							class="flex justify-center h-full bg-gray-100 aspect-square p-2 rounded-xl overflow-hidden"
						>
							<img
								class="w-full h-full object-cover"
								src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>

			<div
				class="relative grow overflow-hidden min-w-full aspect-square bg-white rounded-lg"
			>
				<div
					class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0"
				>
					<div class="hs-carousel-slide">
						<div
							class="flex justify-center h-full bg-gray-100 aspect-square p-2 rounded-xl overflow-hidden"
						>
							<img
								class="w-full h-full object-cover"
								src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png"
								alt=""
							/>
						</div>
					</div>
					<div class="hs-carousel-slide">
						<div
							class="flex justify-center h-full bg-gray-100 aspect-square p-2 rounded-xl overflow-hidden"
						>
							<img
								class="w-full h-full object-cover"
								src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png"
								alt=""
							/>
						</div>
					</div>
					<div class="hs-carousel-slide">
						<div
							class="flex justify-center h-full bg-gray-100 aspect-square p-2 rounded-xl overflow-hidden"
						>
							<img
								class="w-full h-full object-cover"
								src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png"
								alt=""
							/>
						</div>
					</div>
					<div class="hs-carousel-slide">
						<div
							class="flex justify-center h-full bg-gray-100 aspect-square p-2 rounded-xl overflow-hidden"
						>
							<img
								class="w-full h-full object-cover"
								src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png"
								alt=""
							/>
						</div>
					</div>
					<div class="hs-carousel-slide">
						<div
							class="flex justify-center h-full bg-gray-100 aspect-square p-2 rounded-xl overflow-hidden"
						>
							<img
								class="w-full h-full object-cover"
								src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png"
								alt=""
							/>
						</div>
					</div>
					<div class="hs-carousel-slide">
						<div
							class="flex justify-center h-full bg-gray-100 aspect-square p-2 rounded-xl overflow-hidden"
						>
							<img
								class="w-full h-full object-cover"
								src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png"
								alt=""
							/>
						</div>
					</div>
				</div>

				<button
					type="button"
					class="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg transition-colors duration-200"
				>
					<span class="text-2xl" aria-hidden="true">
						<svg
							class="shrink-0 size-5"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="m15 18-6-6 6-6"></path>
						</svg>
					</span>
					<span class="sr-only">Previous</span>
				</button>
				<button
					type="button"
					class="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg transition-colors duration-200"
				>
					<span class="sr-only">Next</span>
					<span class="text-2xl" aria-hidden="true">
						<svg
							class="shrink-0 size-5"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="m9 18 6-6-6-6"></path>
						</svg>
					</span>
				</button>
			</div>
		</div>
	</div>
</template>
