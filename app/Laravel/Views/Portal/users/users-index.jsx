import Main from "../_layouts/main";
import Breadcrumb from "../_components/breadcrumb";
import Card from "../_components/card";
import Button from "../_components/button";
import FormControl from "../_components/form";
import Table from "../_components/table";
import Badge from "../_components/badge";
import Dropdown from "../_components/dropdowns";

import { Head } from "@inertiajs/react";

export default function UsersIndex({ data }) {
    const { page_title } = data;

    return(
        <Main>
            <Head title={page_title} />

            <Breadcrumb>
                <Breadcrumb.Item>
                    <Breadcrumb.Link href="#">Dashboard</Breadcrumb.Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator />
                <Breadcrumb.Item>
                    <Breadcrumb.CurrentLink>Users</Breadcrumb.CurrentLink>
                </Breadcrumb.Item>
            </Breadcrumb>
            
            <Card>
                <Card.Header>
                    <h2 className="text-lg font-semibold text-gray-800">Search Filter</h2>
                </Card.Header>
                <Card.Body>
                    <form>
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                            <FormControl
                                label="Keyword"
                                name="keyword"
                                type="text"
                                placeholder="e.g., Name, Email"
                                value=""
                                readOnly
                            />
                            <FormControl
                                label="Status"
                                name="status"
                                isSelect={true}
                                options={[
                                    { value: "ph", label: "Philippines" },
                                    { value: "us", label: "United States" },
                                    { value: "jp", label: "Japan" }
                                ]}
                            />
                            <FormControl
                                label="From"
                                name="start_date"
                                type="date"
                                placeholder=""
                                value=""
                                readOnly
                            />
                            <FormControl
                                label="To"
                                name="end_date"
                                type="date"
                                placeholder=""
                                value=""
                                readOnly
                            />
                        </div>
                        <div className="mt-2">
                            <Button size="small" variant="primary">
                                <i className="fas fa-search mr-2"></i>Apply
                            </Button>
                            <Button size="small" variant="secondary">
                            <i className="fas fa-undo mr-2"></i> Reset
                            </Button>
                        </div>
                    </form>
                </Card.Body>
            </Card>

            <Table>
                <Table.Title>
                    <div className="flex items-center justify-between w-full">
                        <h3 className="font-semibold text-lg text-blueGray-700">Users</h3>
                        <div>
                            <Button size="small" variant="primary">
                                <i className="fas fa-user-plus mr-2"></i> Create User
                            </Button>
                        </div>
                    </div>
                </Table.Title>
                <Table.Wrapper>
                    <Table.Head>
                        <Table.Row>
                            <Table.Cell isHeader>Name</Table.Cell>
                            <Table.Cell isHeader>Role</Table.Cell>
                            <Table.Cell isHeader>Status</Table.Cell>
                            <Table.Cell isHeader>Email</Table.Cell>
                            <Table.Cell isHeader>Created At</Table.Cell>
                            <Table.Cell isHeader>Action</Table.Cell>
                        </Table.Row>
                    </Table.Head>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>JUAN DELA CRUZ</Table.Cell>
                            <Table.Cell>ADMIN</Table.Cell>
                            <Table.Cell>
                                <Badge variant="success">active</Badge>
                            </Table.Cell>
                            <Table.Cell>juandelacruz4@gmail.com</Table.Cell>
                            <Table.Cell>04/21/2025 1:41 PM</Table.Cell>
                            <Table.Cell>
                                <Dropdown>
                                    <Dropdown.Toggle>
                                        <i className="fas fa-ellipsis-v"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>View Details</Dropdown.Item>
                                        <Dropdown.Item>Edit Details</Dropdown.Item>
                                        <Dropdown.Item>Reset Password</Dropdown.Item>
                                        <Dropdown.Item>Delete User</Dropdown.Item>
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