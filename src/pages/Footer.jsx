import Logo from "../components/UI/Logo"
function Footer() {
    return (
    <footer class="w-full">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8 py-14 max-w-xs mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-full">
                <div class="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                  <Logo />
                    <p class="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">Trusted in more than 100 countries & 5 million customers. Follow us on social media.</p>
                    <div class="flex mt-4 space-x-4 justify-center lg:justify-start sm:mt-0 ">
                        <a  href="../../public/github-logo.svg" class="w-9 h-9 rounded-full bg-black flex justify-center items-center hover:bg-orange-400">
                                
                        </a>
                        <a  href="../../public/twitter-logo.svg"  class="w-9 h-9 rounded-full bg-black  flex justify-center items-center hover:bg-orange-400">
                           
                                
                        </a>
                        <a  href="../../public/"  class="w-9 h-9 rounded-full bg-black  flex justify-center items-center hover:bg-orange-400">
                           
                        </a>
                        <a  href="../../public/facebook-logo.svg" class="w-9 h-9 rounded-full bg-black  flex justify-center items-center hover:bg-orange-400">
                                
                        </a>
                    </div>
                </div>
                <div class="lg:mx-auto text-center sm:text-left">
                    <h4 class="text-lg text-gray-900 font-medium mb-7">Pagedone</h4>
                    <ul class="text-sm  transition-all duration-500">
                        <li class="mb-6"><a   class="text-gray-600 hover:text-gray-900">Home</a></li>
                        <li class="mb-6"><a   class=" text-gray-600 hover:text-gray-900">About</a></li>
                        <li class="mb-6"><a   class=" text-gray-600 hover:text-gray-900">Pricing</a></li>
                        <li><a   class=" text-gray-600 hover:text-gray-900">Features</a></li>
                    </ul>
                </div>
                <div class="lg:mx-auto text-center sm:text-left">
                    <h4 class="text-lg text-gray-900 font-medium mb-7">Products</h4>
                    <ul class="text-sm  transition-all duration-500">
                        <li class="mb-6"><a   class="text-gray-600 hover:text-gray-900">Figma UI System</a></li>
                        <li class="mb-6"><a   class=" text-gray-600 hover:text-gray-900">Icons Assets</a></li>
                        <li class="mb-6"><a   class=" text-gray-600 hover:text-gray-900">Responsive Blocks</a></li>
                        <li><a   class=" text-gray-600 hover:text-gray-900">Components Library</a></li>
                    </ul>
                </div>
                <div class="lg:mx-auto text-center sm:text-left">
                    <h4 class="text-lg text-gray-900 font-medium mb-7">Resources</h4>
                    <ul class="text-sm  transition-all duration-500">
                        <li class="mb-6"><a   class="text-gray-600 hover:text-gray-900">FAQs</a></li>
                        <li class="mb-6"><a   class=" text-gray-600 hover:text-gray-900">Quick Start</a></li>
                        <li class="mb-6"><a   class=" text-gray-600 hover:text-gray-900">Documentation</a></li>
                        <li><a   class=" text-gray-600 hover:text-gray-900">User Guide</a></li>
                    </ul>
                </div>
                <div class="lg:mx-auto text-center sm:text-left">
                    <h4 class="text-lg text-gray-900 font-medium mb-7">Blogs</h4>
                    <ul class="text-sm  transition-all duration-500">
                        <li class="mb-6"><a   class="text-gray-600 hover:text-gray-900">News</a></li>
                        <li class="mb-6"><a   class=" text-gray-600 hover:text-gray-900">Tips & Tricks</a></li>
                        <li class="mb-6"><a   class=" text-gray-600 hover:text-gray-900">New Updates</a></li>
                        <li><a   class=" text-gray-600 hover:text-gray-900">Events</a></li>
                    </ul>
                </div>
            </div>
            <div class="py-7 border-t border-gray-200">
                <div class="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                    <span class="text-sm text-gray-500 ">©<a href="https://pagedone.io/">pagedone</a>2024, All rights reserved.</span>
                    <ul class="flex items-center gap-9 mt-4 lg:mt-0">
                        <li><a   class="text-sm text-gray-500">Terms</a></li>
                        <li><a   class="text-sm text-gray-500">Privacy</a></li>
                        <li><a   class="text-sm text-gray-500">Cookies</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    )}
    export default Footer