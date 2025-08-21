import Contact from '../components/Contact'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ContactPage() {
    return (
        <>
            <Header activePage="contact" />
            <main className="min-h-screen bg-white dark:bg-gray-900">
                <Contact />
            </main>
            <Footer />
        </>
    )
}
