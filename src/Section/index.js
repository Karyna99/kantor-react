import "./style.css";

const Section = ({body, extraContent}) => (
    <section className="section">
        <div>
            {body}
            {extraContent}
        </div>
    </section>
);

export default Section;