import Main from "./_layouts/main";
import Breadcrumb from "./_components/breadcrumb";
import Card from "./_components/card";
import Button from "./_components/buttons";

export default function Dashboard() {
    return(
        <Main>  
            <Breadcrumb.List>
                <Breadcrumb.Item>
                    <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator />
                <Breadcrumb.Item>
                    <Breadcrumb.Link href="#">Components</Breadcrumb.Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator />
                <Breadcrumb.Item>
                    <Breadcrumb.CurrentLink>Props</Breadcrumb.CurrentLink>
                </Breadcrumb.Item>
            </Breadcrumb.List>
            
            <Card>
                <Card.Header>
                    <h2 className="text-lg font-semibold text-gray-800">Card Title</h2>
                </Card.Header>
                <Card.Body>
                    <p className="text-gray-600">
                        This is the card body content. You can place any text or component here.
                    </p>
                </Card.Body>
                <Card.Footer>
                    <Button size="small" variant="danger">Delete</Button>
                </Card.Footer>
            </Card>
        </Main>
    );
}