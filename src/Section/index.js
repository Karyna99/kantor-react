import "./style.css";

const Section = ({title, body, extraContent}) => (
    <section>
        <div>
            <h2>{title}</h2>
            {body}
            {extraContent}
        </div>
    </section>
);

export default Section;