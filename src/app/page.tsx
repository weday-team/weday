const Home = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <div className="flex flex-col items-center gap-5">
        <div className="text-6xl">👷</div>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          网站正在施工中
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-[42ch]">
          我们正在努力建设更好的体验，敬请期待。
        </p>
        <div className="mt-2 rounded-full border border-neutral-200 dark:border-neutral-800 px-3 py-1 text-sm text-neutral-500 dark:text-neutral-400">
          即将上线
        </div>
      </div>
      <footer className="mt-16 text-xs text-neutral-500 dark:text-neutral-500">
        © {new Date().getFullYear()} Weday
      </footer>
    </main>
  )
}

export default Home
