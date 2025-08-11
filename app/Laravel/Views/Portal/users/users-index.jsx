import Main from "../_layouts/main";
import Breadcrumb from "../_components/breadcrumb";
import Card from "../_components/card";
import Button from "../_components/button";
import Form from "../_components/form";
import Table from "../_components/table";
import Badge from "../_components/badge";
import Dropdown from "../_components/dropdowns";
import Link from "../_components/link";
import Alert from "../_components/alert";
import Pagination from "../_components/pagination";

import { Head } from "@inertiajs/react";
import { useRoute } from "../../../../../vendor/tightenco/ziggy";
import { usePage }from "@inertiajs/react";

export default function UsersIndex({ data }) {
    const { page_title, record } = data;
    const { flash } = usePage().props;
    
    const route = useRoute();

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

            {flash.message && <Alert variant={flash.status}>{flash.message}</Alert>}
            
            <Card>
                <Card.Header>
                    <h2 className="text-lg font-semibold text-gray-800">Search Filter</h2>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                            <Form.Control>
                                <Form.Input
                                    label="Keyword"
                                    name="keyword"
                                    type="text"
                                    value=""
                                    onChange=""
                                    placeholder="e.g., Name, Email"
                                />
                            </Form.Control>
                            <Form.Control>
                                <Form.Select
                                    label="Status"
                                    name="status"
                                    options={[
                                        { label: "Active", value: "active" },
                                        { label: "Inactive", value: "inactive" },
                                    ]}
                                    value=""
                                    onChange=""
                                />
                            </Form.Control>
                            <Form.Control>
                                <Form.Input
                                    label="From"
                                    name="start_date"
                                    type="date"
                                    value=""
                                    onChange=""
                                    placeholder=""
                                />
                            </Form.Control>
                            <Form.Control>
                                <Form.Input
                                    label="To"
                                    name="end_date"
                                    type="date"
                                    value=""
                                    onChange=""
                                    placeholder=""
                                />
                            </Form.Control>
                        </div>
                        <div className="mt-2">
                            <Button size="small" variant="primary">
                                <i className="fas fa-search mr-2"></i>Apply
                            </Button>
                            <Button size="small" variant="secondary">
                            <i className="fas fa-undo mr-2"></i> Reset
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>

            <Table>
                <Table.Title>
                    <div className="flex items-center justify-between w-full">
                        <h3 className="font-semibold text-lg text-blueGray-700">Users</h3>
                        <div>
                            <Link size="small" variant="primary" href={route('portal.users.create')}>
                                <i className="fas fa-user-plus mr-2"></i> Create User
                            </Link>
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
                        {record.data.map(user => (
                            <Table.Row key={user.id}>
                                <Table.Cell>{user.name}</Table.Cell>
                                <Table.Cell>ADMIN</Table.Cell>
                                <Table.Cell>
                                    <Badge variant={user.status === "active" ? "success" : "danger"}>
                                        {user.status}
                                    </Badge>
                                </Table.Cell>
                                <Table.Cell>{user.email}</Table.Cell>
                                <Table.Cell>{user.date_created}</Table.Cell>
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
                        ))}
                    </Table.Body>
                </Table.Wrapper>

                <div className="px-5 py-5">
                    <Pagination links={record.links} record={record}/>
                </div>
            </Table>
        </Main>
    );
}