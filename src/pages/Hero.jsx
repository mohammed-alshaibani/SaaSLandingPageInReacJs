import Avatar from "../components/UI/Avatar";

function Hero() {
  return (
    <section class="pt-8 lg:pt-32 bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-center bg-cover">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
        <div class="border border-gray-200 p-1 w-60 mx-auto rounded-full flex items-center justify-between mb-4">
          <span class="font-inter text-xs font-medium text-gray-900 ml-3">
            Introducing AI Automation
          </span>
          <a class="w-8 h-8 rounded-full flex justify-center items-center bg-gray-900">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
                stroke="white"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
        <h1 class="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl leading-[50px]">
          The Finance Solutions
          <span class="text-B2E251">For Your Business</span>
        </h1>
        <p class="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
          Invest intelligently and discover a better way to manage your entire
          wealth easily.
        </p>
        <form class="mt-10 mx-auto max-w-xl py-1 px-6 rounded-full bg-gray-50 border flex focus-within:border-gray-300 my-6">
          <input
            type="text"
            placeholder="Search anything"
            class="bg-transparent w-full focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0"
            name="topic"
          />
          <button class="flex flex-row items-center justify-center min-w-[130px] px-4 rounded-full font-medium tracking-wide border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-black text-white font-medium tracking-wide border-transparent py-1.5 h-[38px] -mr-3">
            Search
          </button>
        </form>

        <Avatar />
      </div>
    </section>
  );
}

export default Hero;
