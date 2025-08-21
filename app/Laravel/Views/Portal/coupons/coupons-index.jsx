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
import Typography from "../_components/typography";

import { Head } from "@inertiajs/react";
import { useRoute } from "../../../../../vendor/tightenco/ziggy";
import { usePage }from "@inertiajs/react";
import { useState } from "react";
import { router } from "@inertiajs/react";

export default function UsersIndex({ data }) {
    const route = useRoute();

    const { page_title, record } = data;
    const { flash } = usePage().props;
    const [filters, setFilters] = useState({
        keyword: data.keyword ?? "",
        discount: data.selected_discount ?? "",
        start_date: data.start_date ?? "",
        end_date: data.end_date ?? "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        router.get(route('portal.users.index'), filters);
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
                    <Breadcrumb.CurrentLink>Coupons</Breadcrumb.CurrentLink>
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
                                <Form.Label name="keyword">Keyword</Form.Label>
                                <Form.Input
                                    name="keyword"
                                    type="text"
                                    value={filters.keyword}
                                    onChange={(e) => setFilters({ ...filters, keyword: e.target.value })}
                                    placeholder="e.g., Code"
                                />
                            </Form.Control>
                            <Form.Control>
                                <Form.Label name="status">Discount</Form.Label>
                                <Form.Select
                                    name="discount"
                                    options={Object.entries(data.discount_types).map(([value, label]) => ({
                                        value, label
                                    }))}
                                    value={filters.status}
                                    onChange={(e) => setFilters({ ...filters, discount: e.target.value })}
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
                            <Link size="small" variant="secondary" href={route('portal.coupons.index')}>
                                <i className="fas fa-undo mr-2"></i> Reset
                            </Link>
                        </div>
                    </Form>
                </Card.Body>
            </Card>

            <Table>
                <Table.Title>
                    <div className="flex items-center justify-between w-full">
                        <Typography tag="h6">Record Data</Typography>
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
                            <Table.Cell isHeader>Code</Table.Cell>
                            <Table.Cell isHeader>Discount</Table.Cell>
                            <Table.Cell isHeader>Value</Table.Cell>
                            <Table.Cell isHeader>Usage</Table.Cell>
                            <Table.Cell isHeader>Expired At</Table.Cell>
                            <Table.Cell isHeader>Date Created</Table.Cell>
                            <Table.Cell isHeader>Action</Table.Cell>
                        </Table.Row>
                    </Table.Head>

                    <Table.Body>
                        {record.data && record.data.length > 0 ? (
                            record.data.map(coupon => (
                                <Table.Row key={coupon.id}>
                                    <Table.Cell>
                                        <Link href="#">
                                            <span className="text-indigo-600">{coupon.code}</span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell>{coupon.discount_type}</Table.Cell>
                                    <Table.Cell>₱ {coupon.value}</Table.Cell>
                                    <Table.Cell>{coupon.usage_limit}</Table.Cell>
                                    <Table.Cell>{coupon.date_expired}</Table.Cell>
                                    <Table.Cell>{coupon.date_created}</Table.Cell>
                                    <Table.Cell>
                                        <Dropdown>
                                            <Dropdown.Toggle>
                                                <i className="fas fa-ellipsis-v"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item>
                                                    <Link href="#">Edit Details</Link>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Table.Cell>
                                </Table.Row>
                            ))
                        ) : (
                            <Table.Row>
                                <Table.Cell colSpan={6} className="text-center">
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