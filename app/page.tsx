import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
    return (
        <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
            <h1 className="text-gray-800 dark:text-gray-200">제목</h1>
            <p className="text-gray-600 dark:text-gray-400">내용</p>
            <ThemeToggle />
        </div>
    );
}
