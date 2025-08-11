import Main from "./_layouts/main";
import Breadcrumb from "./_components/breadcrumb";
import Card from "./_components/card";
import Button from "./_components/button";
import Alert from "./_components/alert";
import Typography from "./_components/typography";
import FormControl from "./_components/form";
import Badge from "./_components/badge";
import Table from "./_components/table";
import Dropdown from "./_components/dropdowns";

import { Head } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

export default function Index({ data }) {
    const { page_title } = data;
    const { flash } = usePage().props;

    return(
        <Main>  
            <Head title={page_title} />

            <Breadcrumb>
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
            </Breadcrumb>

            {flash.message && <Alert variant={flash.status}>{flash.message}</Alert>}
            
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

            <Alert variant="primary">
                <Alert.Status>Info</Alert.Status>
                <Alert.Message>This is a lightBlue alert - check it out!</Alert.Message>
            </Alert>

            <Typography component="small" tag="small"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</Typography>

            <Badge variant="info">Light Blue!</Badge>

            <Table>
                <Table.Title>Card Tables</Table.Title>
                <Table.Wrapper>
                    <Table.Head>
                        <Table.Row>
                            <Table.Cell isHeader>Project</Table.Cell>
                            <Table.Cell isHeader>Budget</Table.Cell>
                            <Table.Cell isHeader>Action</Table.Cell>
                        </Table.Row>
                    </Table.Head>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>Awesome App</Table.Cell>
                            <Table.Cell>$2,500 USD</Table.Cell>
                            <Table.Cell>
                                <Dropdown>
                                    <Dropdown.Toggle>
                                        <i className="fas fa-ellipsis-v"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>Action</Dropdown.Item>
                                        <Dropdown.Item>Another action</Dropdown.Item>
                                        <Dropdown.Item>Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Another App</Table.Cell>
                            <Table.Cell>$1,200 USD</Table.Cell>
                            <Table.Cell>
                                <Dropdown>
                                    <Dropdown.Toggle>
                                        <i className="fas fa-ellipsis-v"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#">Action</Dropdown.Item>
                                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table.Wrapper>
            </Table>
        </Main>
    );
}