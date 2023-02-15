import Header from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout;