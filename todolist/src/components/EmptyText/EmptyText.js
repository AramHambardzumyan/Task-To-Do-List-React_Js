import "./EmptyText.css"
import "../../App.css"
const EmptyText = () => {
    return (
        <section className="empty-text-container">
            <p className="empty-page-first-text text-font-style">Your life is a blank page. You write on it.</p>
            <p className="empty-page-second-text text-font-style">So start by adding your tasks here.</p>
        </section>
    )
}
export default EmptyText