import Card from "react-bootstrap/Card";
import CardTitle from "react-bootstrap/CardTitle";
import CardBody from "react-bootstrap/CardBody";

function LanguageCard({ title, description, isOpened }) {
    return (
        isOpened && (
            <Card className="my-2">
                <CardTitle className="px-3 pt-4">{title}</CardTitle>
                <CardBody>{description}</CardBody>
            </Card>
        )
    )
}

export default LanguageCard