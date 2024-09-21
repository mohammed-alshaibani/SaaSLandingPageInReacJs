function Avatar() {
  return (
    <div>
      <div class="font-semibold text-center">Trusted by</div>
      <div class="flex space-x-2 items-center flex-col">
        <div class="flex -space-x-2 overflow-hidden p-2">
          <img
            class="inline-block h-7 w-7  rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100"
            src="https://randomuser.me/api/portraits/men/51.jpg"
            alt=""
          />
          <img
            class="inline-block h-7 w-7  rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100"
            src="https://randomuser.me/api/portraits/women/4.jpg"
            alt=""
          />
          <img
            class="inline-block h-7 w-7  rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100"
            src="https://randomuser.me/api/portraits/men/34.jpg"
            alt=""
          />
          <img
            class="inline-block h-7 w-7  rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100"
            src="https://randomuser.me/api/portraits/women/6.jpg"
            alt=""
          />
          <img
            class="inline-block h-7 w-7  rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100"
            src="https://randomuser.me/api/portraits/men/9.jpg"
            alt=""
          />
          <img
            class="inline-block h-7 w-7  rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100"
            src="https://randomuser.me/api/portraits/women/9.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Avatar;
