import Main from "@portal/_layouts/main";
import Breadcrumb from "@portal/_components/breadcrumb";
import Card from "@portal/_components/card";
import Button from "@portal/_components/button";
import Form from "@portal/_components/form";
import Table from "@portal/_components/table";
import Dropdown from "@portal/_components/dropdowns";
import Link from "@portal/_components/link";
import Alert from "@portal/_components/alert";
import Pagination from "@portal/_components/pagination";
import Typography from "@portal/_components/typography";
import Badge from "@portal/_components/badge";

import { Head } from "@inertiajs/react";
import { useRoute } from "@ziggy";
import { usePage }from "@inertiajs/react";
import { useState } from "react";
import { router } from "@inertiajs/react";
import { statusBadge } from "@portal/_helpers/string-formatter";

export default function MerchantsIndex({ data }) {
    const route = useRoute();

    const { page_title, record } = data;
    const { flash } = usePage().props;
    const [filters, setFilters] = useState({
        keyword: data.keyword ?? "",
        status: data.selected_status ?? "",
        start_date: data.start_date ?? "",
        end_date: data.end_date ?? "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        router.get(route('portal.merchants.index'), filters);
    }

    return (
        <Main>
            <Head title={page_title} />

            <Breadcrumb>
                <Breadcrumb.Item>
                    <Breadcrumb.Link href="#">Dashboard</Breadcrumb.Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator />
                <Breadcrumb.Item>
                    <Breadcrumb.CurrentLink>Merchants</Breadcrumb.CurrentLink>
                </Breadcrumb.Item>
            </Breadcrumb>

            {flash.message && <Alert variant={flash.status}>{flash.message}</Alert>}

            <Card>
                <Card.Header>
                    <Typography tag="h6">Search Filter</Typography>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                            <Form.Control>
                                <Form.Label name="keyword">Search</Form.Label>
                                <Form.Input
                                    name="keyword"
                                    type="text"
                                    value={filters.keyword}
                                    onChange={(e) => setFilters({ ...filters, keyword: e.target.value })}
                                    placeholder="e.g., Business, Name, Line, Scope"
                                />
                            </Form.Control>
                            <Form.Control>
                                <Form.Label name="status">Status</Form.Label>
                                <Form.Select
                                    name="discount"
                                    options={Object.entries(data.statuses).map(([value, label]) => ({
                                        value, label
                                    }))}
                                    value={filters.status}
                                    onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                                />
                            </Form.Control>
                            <Form.Control>
                                <Form.Label name="start_date">From</Form.Label>
                                <Form.Input
                                    name="start_date"
                                    type="date"
                                    value={filters.start_date}
                                    onChange={(e) => setFilters({ ...filters, start_date: e.target.value })}
                                />
                            </Form.Control>
                            <Form.Control>
                                <Form.Label name="end_date">To</Form.Label>
                                <Form.Input
                                    name="end_date"
                                    type="date"
                                    value={filters.end_date}
                                    onChange={(e) => setFilters({ ...filters, end_date: e.target.value })}
                                />
                            </Form.Control>
                        </div>
                        <div className="mt-2">
                            <Button type="submit" size="small" variant="primary">
                                <i className="fas fa-search mr-2"></i>Apply
                            </Button>
                            <Link size="small" variant="secondary" href={route('portal.merchants.index')}>
                                <i className="fas fa-undo mr-2"></i> Reset
                            </Link>
                        </div>
                    </Form>
                </Card.Body>
            </Card>

            <Table>
                <Table.Title>
                    <div className="flex items-center justify-between w-full">
                        <Typography tag="h6">Merchants</Typography>
                        <div></div>
                    </div>
                </Table.Title>

                <Table.Wrapper>
                    <Table.Head>
                        <Table.Row>
                            <Table.Cell isHeader>Business</Table.Cell>
                            <Table.Cell isHeader>Name</Table.Cell>
                            <Table.Cell isHeader>Status</Table.Cell>
                            <Table.Cell isHeader>Line</Table.Cell>
                            <Table.Cell isHeader>Scope</Table.Cell>
                            <Table.Cell isHeader>Date Applied</Table.Cell>
                            <Table.Cell isHeader>Action</Table.Cell>
                        </Table.Row>
                    </Table.Head>

                    <Table.Body>
                        {record.data && record.data.length > 0 ? (
                            record.data.map(merchant => (
                                <Table.Row key={merchant.id}>
                                    <Table.Cell>
                                        <Link href={route('portal.merchants.show', merchant.id)}>
                                            <span className="text-indigo-600">{String(merchant.id).padStart(5, "0")}</span>
                                        </Link> <br />
                                        {merchant.business_name}
                                    </Table.Cell>
                                    <Table.Cell>{merchant.name}</Table.Cell>
                                    <Table.Cell>
                                        <Badge variant={statusBadge(merchant.status)}>
                                            {merchant.status}
                                        </Badge>
                                    </Table.Cell>
                                    <Table.Cell>{merchant.business_line}</Table.Cell>
                                    <Table.Cell>{merchant.business_scope}</Table.Cell>
                                    <Table.Cell>{merchant.date_created}</Table.Cell>
                                    <Table.Cell>
                                        <Dropdown>
                                            <Dropdown.Toggle>
                                                <i className="fas fa-ellipsis-v"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item>
                                                    <Link href={route('portal.merchants.show', merchant.id)}>View Details</Link>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Table.Cell>
                                </Table.Row>
                            ))
                        ) : (
                            <Table.Row>
                                <Table.Cell colSpan={7} className="text-center">
                                    No Record Found.
                                </Table.Cell>
                            </Table.Row>
                        )}
                    </Table.Body>
                </Table.Wrapper>

                {record.data && record.data.length > 0 ? (
                        <div className="px-5 py-5">
                            <Pagination links={record.links} record={record} />
                        </div>
                    ) : null
                }
            </Table>
        </Main>
    );
}