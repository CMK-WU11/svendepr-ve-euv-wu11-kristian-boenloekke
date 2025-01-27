export default function Button({children, className}) {
    return (
        <button className={`bg-purple text-white text-lg rounded-2xl px-20 py-4 shadow-2xl ${className}`}>
            {children}
        </button>
    )
}