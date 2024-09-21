import Button from "../components/UI/Button";
function Demo() {
  return (
    <section className="col-span-12 py-12 md:py-24">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative">
        <div className="shadow rounded-xl">
          <div className="grid overflow-hidden text-white shadow-xl md:grid-cols-2 bg-white rounded-xl">
            <aside className="p-8 space-y-4 md:p-16">
              <h2 className="text-2xl font-bold tracking-tight md:text-4xl font-headline">
                Ready to dive in? Start your free trial today.
              </h2>

              <p className="font-bold text-black md:text-2xl">
                Let’s Upgrade your finances experience by using FinBiz{" "}
              </p>

              <div className="flex space-x-4 mt-8">
                <Button
                  text="Watch Demo"
                  className="bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800"
                />
                <Button
                  text="Request Demo"
                  className="bg-yellow-500 text-black rounded-lg px-4 py-2 hover:bg-yellow-400"
                />
              </div>
            </aside>

            <aside className="relative hidden md:block">
              <img
                className="absolute inset-0 object-cover object-left-top w-full h-full mt-16 rounded-tl-lg"
                src="https://picsum.photos/200"
                alt="Discover our beautiful panel"
              />
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Demo;
