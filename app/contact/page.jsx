export default function ContactPage() {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-2">Contact Me</h2>
            <form className="space-y-4">
                <input type="text" placeholder="Name" className="border p-2 w-full" required />
                <input type="email" placeholder="Email" className="border p-2 w-full" required />
                <textarea placeholder="Message" className="border p-2 w-full" required></textarea>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
            </form>
        </div>
    )
}
