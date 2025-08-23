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
import Swal from "sweetalert2";

import { Head } from "@inertiajs/react";
import { useRoute } from "@ziggy";
import { usePage }from "@inertiajs/react";
import { useState } from "react";
import { router } from "@inertiajs/react";
import { toTitleCase } from "@portal/_helpers/string-formatter";

export default function CategoriesIndex({ data }) {
    const route = useRoute();

    const { page_title, record } = data;
    const { flash } = usePage().props;
    const [filters, setFilters] = useState({
        keyword: data.keyword ?? "",
        start_date: data.start_date ?? "",
        end_date: data.end_date ?? "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        router.get(route('portal.categories.index'), filters);
    }

    const handleDeleteCategory = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this category.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!'
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route('portal.categories.delete', id));
            }
        });
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
                    <Breadcrumb.CurrentLink>Categories</Breadcrumb.CurrentLink>
                </Breadcrumb.Item>
            </Breadcrumb>

            {flash.message && <Alert variant={flash.status}>{flash.message}</Alert>}

            <Card>
                <Card.Header>
                    <Typography tag="h6">Search Filter</Typography>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            <Form.Control>
                                <Form.Label name="keyword">Keyword</Form.Label>
                                <Form.Input
                                    name="keyword"
                                    type="text"
                                    value={filters.keyword}
                                    onChange={(e) => setFilters({ ...filters, keyword: e.target.value })}
                                    placeholder="e.g., Category Name"
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
                            <Link size="small" variant="secondary" href={route('portal.categories.index')}>
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
                            <Link size="small" variant="primary" href={route('portal.categories.create')}>
                                <i className="fas fa-sitemap mr-2"></i> Create Category
                            </Link>
                        </div>
                    </div>
                </Table.Title>

                <Table.Wrapper>
                    <Table.Head>
                        <Table.Row>
                            <Table.Cell isHeader>No.</Table.Cell>
                            <Table.Cell isHeader>Name</Table.Cell>
                            <Table.Cell isHeader>Date Created</Table.Cell>
                            <Table.Cell isHeader>Date Updated</Table.Cell>
                            <Table.Cell isHeader>Action</Table.Cell>
                        </Table.Row>
                    </Table.Head>

                    <Table.Body>
                        {record.data && record.data.length > 0 ? (
                            record.data.map((category, index) => (
                                <Table.Row key={category.id}>
                                    <Table.Cell>{index + 1}</Table.Cell>
                                    <Table.Cell>
                                        <Link href={route('portal.categories.edit', category.id)}>
                                            <span className="text-indigo-600">{toTitleCase(category.name)}</span>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell>{category.date_created}</Table.Cell>
                                    <Table.Cell>{category.date_updated}</Table.Cell>
                                    <Table.Cell>
                                        <Dropdown>
                                            <Dropdown.Toggle>
                                                <i className="fas fa-ellipsis-v"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item>
                                                    <Link href={route('portal.categories.edit', category.id)}>Edit Details</Link>
                                                </Dropdown.Item>
                                                 <Dropdown.Item>
                                                    <Button size="default" variant="default" onClick={() => handleDeleteCategory(category.id)}>Delete Category</Button>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Table.Cell>
                                </Table.Row>
                            ))
                        ) : (
                            <Table.Row>
                                <Table.Cell colSpan={5} className="text-center">
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